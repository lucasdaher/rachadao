import { ComponentProps } from "react";

export type HeaderListProps = ComponentProps<"ul">;

export function HeaderList({ ...props }: HeaderListProps) {
  return (
    <ul className="flex justify-center items-center gap-2" {...props}>
      {props.children}
    </ul>
  );
}
