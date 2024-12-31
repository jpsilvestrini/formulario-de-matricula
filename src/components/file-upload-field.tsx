"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface FileUploadFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    helperText?: string;
}

const FileUploadField = forwardRef<HTMLInputElement, FileUploadFieldProps>(
    ({ className, label, error = false, helperText, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label className="text-sm text-text-200">
                        {label}
                    </label>
                )}
                <div
                    className={cn(
                        "w-full px-4 py-8 rounded-lg border text-text-200 bg-white transition-colors",
                        "focus-within:border-brand-300",
                        {
                            "border-stroke-100 hover:bg-surface-200": !error,
                            "border-brand-300 bg-supporting-600": error
                        },
                        className
                    )}
                >
                    <label className="flex flex-col items-center justify-center cursor-pointer gap-1">
                        <div className="w-8 h-8 text-text-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                        </div>
                        <span className="text-sm text-text-300">Clique aqui para selecionar arquivos</span>
                        <input
                            ref={ref}
                            type="file"
                            className="hidden"
                            {...props}
                        />
                    </label>
                </div>
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

FileUploadField.displayName = "FileUploadField";

export { FileUploadField };