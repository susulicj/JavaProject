
import type { ComponentPropsWithoutRef } from "react";

interface InputFieldProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
}

export function InputField({ label, id, name, ...rest }: InputFieldProps) {
    const inputId = id || name;

    return (
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={inputId} style={{ display: "block", marginBottom: "0.5rem" }}>
                {label}
            </label>
            <input id={inputId} name={name} {...rest} />
        </div>
    );
}
