import { FocusEventHandler, MouseEventHandler } from "react";
import "./Buttons.css";

interface Props {
  className?: string;
  children: string;
  width: "auto" | "full";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  className,
  width = "auto",
  onClick,
  onBlur,
}: Props) => {
  const buttonClassName = `button ${className} ${width === "full" && "w-100"}`;

  return (
    <button className={buttonClassName} onClick={onClick} onBlur={onBlur}>
      {children}
    </button>
  );
};

export const PrimaryButton = ({ ...props }) => {
  return (
    <Button className="primary-button" {...props} width={props.width}>
      {props.children}
    </Button>
  );
};

export const SecondaryButton = ({ ...props }) => {
  return (
    <Button className="secondary-button" {...props} width={props.width}>
      {props.children}
    </Button>
  );
};
