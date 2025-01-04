import { ComponentProps } from "react";

export type HeaderListItemProps = ComponentProps<"li">;

export function HeaderListItem({ ...props }: HeaderListItemProps) {
  return <li {...props}>{props.children}</li>;
}
