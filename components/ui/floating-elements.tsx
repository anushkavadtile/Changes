"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps extends React.HTMLAttributes<HTMLDivElement> {
    delay?: number
    duration?: number
    distance?: number
}

export function FloatingElement({
    children,
    className,
    delay = 0,
    duration = 6,
    distance = 20,
    ...props
}: FloatingElementProps) {
    return (
        <div
            className={cn("animate-float", className)}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                // @ts-expect-error - CSS variable
                "--float-distance": `${distance}px`,
            }}
            {...props}
        >
            {children}
        </div>
    )
}

interface ParticleProps {
    count?: number
    className?: string
}

export function Particles({ count = 20, className }: ParticleProps) {
    const [particles, setParticles] = React.useState<Array<{ left: string; top: string; delay: string; duration: string }>>([])

    React.useEffect(() => {
        const newParticles = Array.from({ length: count }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 10}s`,
        }))
        setParticles(newParticles)
    }, [count])

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        animationDelay: particle.delay,
                        animationDuration: particle.duration,
                    }}
                />
            ))}
        </div>
    )
}

interface GradientOrbProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: "red" | "green" | "amber" | "blue" | "medical" | "emergency" | "alert" | "info"
    size?: "sm" | "md" | "lg" | "xl"
    blur?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

export function GradientOrb({
    color = "red",
    size = "md",
    blur = "lg",
    className,
    ...props
}: GradientOrbProps) {
    const colorMap = {
        red: "bg-emergency-500",
        green: "bg-medical-500",
        amber: "bg-alert-500",
        blue: "bg-info-500",
        medical: "bg-medical-500",
        emergency: "bg-emergency-500",
        alert: "bg-alert-500",
        info: "bg-info-500",
    }

    const sizeMap = {
        sm: "w-32 h-32",
        md: "w-48 h-48",
        lg: "w-64 h-64",
        xl: "w-96 h-96",
    }

    const blurMap = {
        sm: "blur-sm",
        md: "blur-md",
        lg: "blur-lg",
        xl: "blur-xl",
        "2xl": "blur-2xl",
        "3xl": "blur-3xl",
    }

    return (
        <div
            className={cn(
                "absolute rounded-full opacity-30 pointer-events-none",
                colorMap[color],
                sizeMap[size],
                blurMap[blur],
                className
            )}
            {...props}
        />
    )
}

export default FloatingElement
