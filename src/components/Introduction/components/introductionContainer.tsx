import { ComponentProps } from "react";

export type IntroductionContainerProps = ComponentProps<"section">;

export function IntroductionContainer({
  ...props
}: IntroductionContainerProps) {
  return (
    <section
      className="bg-black-900 bg-opacity-40 backdrop-blur-lg w-full flex flex-col 
      justify-center items-center gap-10 px-4 pt-28 pb-28 md:pt-28 md:pb-28 lg:px-36 lg:pt-40 lg:pb-36 shadow-xl"
      {...props}
    >
      {props.children}
    </section>
  );
}
