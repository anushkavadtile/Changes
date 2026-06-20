"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "premium" | "emergency" | "medical" | "custom" | "alert" | "info"
    gradient?: string
    animate?: boolean
}

export function GradientText({
    children,
    className,
    variant = "premium",
    gradient,
    animate = false,
    ...props
}: GradientTextProps) {
    const gradientClass = gradient
        ? ""
        : variant === "premium"
            ? "gradient-text"
            : variant === "emergency"
                ? "gradient-text-emergency"
                : variant === "medical"
                    ? "gradient-text-medical"
                    : variant === "alert"
                        ? "gradient-text-alert"
                        : variant === "info"
                            ? "gradient-text-info"
                            : "gradient-text"

    return (
        <span
            className={cn(
                gradientClass,
                animate && "animate-gradient",
                className
            )}
            style={gradient ? {
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            } : undefined}
            {...props}
        >
            {children}
        </span>
    )
}

export default GradientText
