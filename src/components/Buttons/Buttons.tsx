import { FocusEventHandler, MouseEventHandler } from "react";
import "./Buttons.css";

interface Props {
  className?: string;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick, onBlur }: Props) => {
  return (
    <button className={`button ${className}`} onClick={onClick} onBlur={onBlur}>
      {children}
    </button>
  );
};

export const PrimaryButton = ({ ...props }) => {
  return (
    <Button className="primary-button" {...props}>
      {props.children}
    </Button>
  );
};

export const SecondaryButton = ({ ...props }) => {
  return (
    <Button className="secondary-button" {...props}>
      {props.children}
    </Button>
  );
};
