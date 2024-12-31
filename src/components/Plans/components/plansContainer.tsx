import { ComponentProps } from "react";

export type PlansContainerProps = ComponentProps<"section">;

export function PlansContainer({ ...props }: PlansContainerProps) {
  return (
    <section
      className="w-full bg-white flex justify-center items-center px-8 py-24 sm:py-32"
      {...props}
    >
      {props.children}
    </section>
  );
}
