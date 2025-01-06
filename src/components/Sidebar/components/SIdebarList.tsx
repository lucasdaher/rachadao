import { ComponentProps } from "react";

type SidebarListProps = ComponentProps<"ul">;

export function SidebarList({ ...props }: SidebarListProps) {
  return (
    <ul
      className="flex flex-col justify-center items-center gap-2 w-full"
      {...props}
    >
      {props.children}
    </ul>
  );
}
