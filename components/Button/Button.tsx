import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";
import useIsElementMounted from "../../shared/hooks/isElementMounted";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const isMounted = useIsElementMounted();

  const { className, children, ...otherProps } = props;

  return (
    <>
      {isMounted && (
        <button className={className} 
        >
          {children}
        </button>
      )}
    </>
  );
};
