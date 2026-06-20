"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"

interface CounterProps {
    end: number
    duration?: number
    start?: number
    suffix?: string
    prefix?: string
    decimals?: number
    className?: string
    trigger?: boolean
}

export function Counter({
    end,
    duration = 1200,
    start = 0,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = "",
    trigger = true,
}: CounterProps) {
    const [count, setCount] = useState(start)
    const countRef = useRef(start)
    const rafRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        if (!trigger) return

        const startTime = Date.now()

        const diff = end - start

        const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)


            const easeOut = 1 - Math.pow(1 - progress, 3)

            const current = start + diff * easeOut
            countRef.current = current
            setCount(current)

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate)
            }
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
        }
    }, [end, start, duration, trigger])

    const displayValue = decimals !== undefined ? count.toFixed(decimals) : Math.round(count).toString()

    return (
        <span className={className}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    )
}

export default Counter
