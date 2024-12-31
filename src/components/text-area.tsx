"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: boolean;
    helperText?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, label, error = false, helperText, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label className="text-sm text-text-200">
                        {label}
                    </label>
                )}
                <textarea
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
                {helperText && (
                    <span className={cn(
                        "text-sm",
                        error ? "text-brand-300" : "text-text-300"
                    )}>
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

TextArea.displayName = "TextArea";

export { TextArea };