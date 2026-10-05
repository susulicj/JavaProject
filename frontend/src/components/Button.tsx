
import type { ComponentPropsWithoutRef } from "react";


interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    isLoading?: boolean;
}

export function Button({ children, isLoading, disabled, ...rest }: ButtonProps) {
    return (
        <button {...rest} disabled={disabled || isLoading}>
            {isLoading ? "Loading" : children}
        </button>
    );
}
