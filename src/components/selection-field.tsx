"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface SelectionFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: boolean;
}

const SelectionField = forwardRef<HTMLSelectElement, SelectionFieldProps>(
    ({ className, label, error = false, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label className="text-sm text-text-200">
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    className={cn(
                        "w-full px-4 py-2 rounded-lg border text-text-200 bg-white transition-colors",
                        "focus:outline-none focus:border-brand-300",
                        {
                            "border-stroke-100 hover:bg-surface-200": !error,
                            "border-brand-300 bg-supporting-600": error
                        },
                        className
                    )}
                    {...props}
                />
            </div>
        );
    }
);

SelectionField.displayName = "SelectionField";

export { SelectionField };