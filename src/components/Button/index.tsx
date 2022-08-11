import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

type ButtonVariant = "Outline" | "Solid";
type Theme = "Primary" | "Secondary";

interface Props
  extends BaseProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  variant?: ButtonVariant;
  theme?: Theme;
}

const Button: React.FC<Props> = React.memo(
  ({ children, variant, disabled }) => {
    return (
      <div
        className={cn({
          "min-h-[50px] min-w-[64px] border-2 px-8 py-4 outline-none lg:text-sm xl:text-base font-bold lowercase first-letter:uppercase cursor-pointer duration-700 group rounded-md hover:decoration-0":
            true,
          "bg-transparent hover:bg-white text-primary hover:text-primary-hover border border-primary hover:border-transparent hover:shadow-button":
            variant && variant === "Outline" && !disabled,
          "bg-primary hover:bg-primary-dark text-white font-bold border-transparent hover:bg-primary-hover":
            variant === "Solid",
          "bg-primary text-white font-bold opacity-50 cursor-not-allowed bg-transparent":
            disabled,
        })}
      >
        {" "}
        {children}{" "}
      </div>
    );
  }
);
export default Button;
