import { ComponentProps } from "react";

export type PlansContainerProps = ComponentProps<"section">;

export function PlansContainer({ ...props }: PlansContainerProps) {
  return (
    <section
      className="w-full bg-green-500/50 backdrop-blur-2xl flex justify-center items-center px-8 py-24 sm:py-32"
      id="plans"
      {...props}
    >
      {props.children}
    </section>
  );
}
