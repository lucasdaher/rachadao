import { ComponentProps } from "react";

export type HeaderNavProps = ComponentProps<"nav">;

export function HeaderNav({ ...props }: HeaderNavProps) {
  return <nav {...props}>{props.children}</nav>;
}
