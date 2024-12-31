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
                    "px-6 py-3 rounded-lg font-medium transition-colors text-sm",
                    {
                        "bg-brand-300 text-white hover:bg-brand-200 active:bg-brand-400": variant === "primary",
                        "border border-stroke-100 text-text-200 hover:bg-surface-200 active:bg-surface-300": variant === "secondary"
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