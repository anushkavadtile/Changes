import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

export function Logo({ className, ...props }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className={cn("w-full h-full", className)}
            {...props}
        >

            <path
                d="M20 35 H35 V20 C35 15 40 15 40 20 V35 H55 C60 35 60 40 55 40 H40 V55 C40 60 35 60 35 55 V40 H20 C15 40 15 35 20 35 Z"
                fill="#DC2626"
                className="drop-shadow-sm"
            />


            <path
                d="M45 20 L75 80 H60 L55 65 H35 L30 80 H15 L45 20 Z"
                fill="#16A34A"
                className="opacity-90"
            />


            <path
                d="M45 35 L50 55 H40 L45 35 Z"
                fill="#FEF08A"
            />


            <path
                d="M60 45 H80 V60 H60 V45 M80 45 L75 40 H65 L60 45"
                fill="#2563EB"
                opacity="0.8"
            />
        </svg>
    )
}
