import React from "react";
import s from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button className={s.button} onClick={onClick}>
      {text}
    </button>
  );
};
