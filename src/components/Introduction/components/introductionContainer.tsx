import { ComponentProps } from "react";

export type IntroductionContainerProps = ComponentProps<"section">;

export function IntroductionContainer({
  ...props
}: IntroductionContainerProps) {
  return (
    <section
      className="bg-black-900 bg-opacity-40 backdrop-blur-lg w-full flex flex-col justify-center items-center gap-10 px-36 pt-40 pb-36 shadow-xl"
      {...props}
    >
      {props.children}
    </section>
  );
}
