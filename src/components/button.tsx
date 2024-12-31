"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-colors",
                    {
                        "bg-brand-300 text-white hover:bg-brand-200": variant === "primary",
                        "border border-stroke-100 text-text-200 hover:bg-surface-200": variant === "secondary"
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };