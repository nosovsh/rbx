import { cx } from "emotion";
import React from "react";

import { Element } from "components/element";
import { renderAsExoticComponent } from "components/render-as-exotic-component";
import { ModifierProps } from "modifiers";

export type ContentModifierProps = Partial<{
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  style: React.CSSProperties;
}>;

export type ContentProps = ModifierProps & ContentModifierProps;

export const Content = renderAsExoticComponent<ContentProps, "div">(
  ({ children, className, size, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      className={cx("content", className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  ),
  "div",
);
Content.defaultProps = Object.assign({ children: null }, Content.defaultProps);
