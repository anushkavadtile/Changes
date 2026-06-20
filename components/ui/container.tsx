import * as React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "mx-auto w-full max-w-[1200px] px-4 md:px-8 lg:px-12",
                    className
                )}
                {...props}
            />
        )
    }
)
Container.displayName = "Container"

export { Container }
