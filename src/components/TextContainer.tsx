import { Component, JSX } from "solid-js";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface IProps {
  children?: JSX.Element;
  title: string;
  className?: ClassNameValue;
}

export const TextContainer: Component<IProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div
      class={twMerge(
        "flex h-screen snap-center snap-always flex-col px-8 pb-16 pt-16",
        className,
      )}
    >
      <p class="text-4xl font-bold">{title}</p>
      {children}
    </div>
  );
};
