import {ButtonHTMLAttributes, FC} from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={className}
            {...otherProps}
        >
            {children}
        </button>
    );
};

