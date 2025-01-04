import Link from "next/link";
import React, { ComponentProps } from "react";

type FooterListItemProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
  hasLink: boolean;
  flex?: string;
};

export function FooterListItem({
  hasLink,
  flex,
  children,
  ...props
}: FooterListItemProps) {
  return (
    <>
      {hasLink && (
        <React.Fragment>
          <Link
            className="group transition-all duration-200 ease-in-out"
            {...props}
          >
            <li
              className={`text-white text-sm font-medium text-opacity-80 group hover:text-white
          transition-all duration-200 ease-in-out ${flex}`}
            >
              {children}
            </li>
          </Link>
        </React.Fragment>
      )}
      {!hasLink && (
        <React.Fragment>
          <li
            className={`text-white text-sm font-medium text-opacity-80 group hover:text-white
              transition-all duration-200 ease-in-out ${flex}`}
          >
            {children}
          </li>
        </React.Fragment>
      )}
    </>
  );
}
