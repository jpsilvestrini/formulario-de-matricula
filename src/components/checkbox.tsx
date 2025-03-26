"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, error = false, ...props }, ref) => {
        return (
            <div className="relative flex items-center">
                <input
                    ref={ref}
                    type="checkbox"
                    className={cn(
                        "peer appearance-none w-4 h-4 rounded border transition-colors cursor-pointer",
                        "checked:bg-brand-300 checked:border-brand-300",
                        "focus:outline-none focus:ring-2 focus:ring-brand-300/20",
                        {
                            "border-stroke-100": !error,
                            "border-brand-300": error
                        },
                        className
                    )}
                    {...props}
                />
                <svg
                    className="absolute w-4 h-4 text-white opacity-0 pointer-events-none peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
        );
    }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };