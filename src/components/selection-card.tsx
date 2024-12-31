"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/cn";

interface SelectionCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    selected?: boolean;
}

const SelectionCard = forwardRef<HTMLButtonElement, SelectionCardProps>(
    ({ className, label, selected = false, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative flex items-center justify-center w-full p-4 rounded-lg border transition-colors",
                    {
                        "border-brand-300 bg-supporting-600": selected,
                        "border-stroke-100 hover:bg-surface-200": !selected
                    },
                    className
                )}
                {...props}
            >
                <div className="absolute left-3 top-3 w-4 h-4 rounded-full border border-current">
                    {selected && (
                        <div className="absolute inset-1 rounded-full bg-brand-300" />
                    )}
                </div>
                <span className={cn(
                    "text-base",
                    selected ? "text-brand-300" : "text-text-200"
                )}>
                    {label}
                </span>
            </button>
        );
    }
);

SelectionCard.displayName = "SelectionCard";

export { SelectionCard };