import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useSidebar } from "../contexts/SidebarContext";
import Link from "next/link";

const item = tv({
  base: "p-3 flex flex-row justify-start items-center gap-2 hover:bg-green-950 transition-all duration-200 ease-in-out w-full rounded-md",
  variants: {
    selected: {
      true: "bg-green-800 hover:bg-green-800",
      false: "",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type SidebarListItemProps = ComponentProps<"li"> &
  VariantProps<typeof item> & {
    children: React.ReactNode;
    link?: boolean;
    linkHref?: string | undefined;
  };

export function SidebarListItem({
  link = false,
  linkHref = "",
  selected,
  ...props
}: SidebarListItemProps) {
  return (
    <>
      {link && (
        <Link href={`${linkHref}`}>
          <li className={item({ selected })} {...props}>
            {props.children}
          </li>
        </Link>
      )}

      {!link && (
        <li className={item({ selected })} {...props}>
          {props.children}
        </li>
      )}
    </>
  );
}
