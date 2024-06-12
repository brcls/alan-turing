import { Component, JSX } from "solid-js";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface IProps {
  children: JSX.Element;
  className?: ClassNameValue;
}

export const Container: Component<IProps> = ({ children, className }) => {
  return (
    <div class={twMerge("h-screen snap-center snap-always pt-16", className)}>
      {children}
    </div>
  );
};
