import { ComponentProps } from "react";

export type IntroductionContainerProps = ComponentProps<"section">;

export function IntroductionContainer({
  ...props
}: IntroductionContainerProps) {
  return (
    <section
      className="bg-green-900 bg-opacity-40 backdrop-blur-2xl w-full flex flex-col justify-center items-center gap-10 px-36 pt-40 pb-36"
      {...props}
    >
      {props.children}
    </section>
  );
}
