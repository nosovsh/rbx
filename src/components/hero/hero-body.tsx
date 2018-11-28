import { cx } from "emotion";
import React from "react";

import { Element, renderAsExoticComponent } from "@/components/element";
import { ModifierProps } from "@/modifiers";

export type HeroBodyModifierProps = Partial<{
  children: React.ReactNode;
  style: React.CSSProperties;
}>;

export type HeroBodyProps = ModifierProps & HeroBodyModifierProps;

export const HeroBody = renderAsExoticComponent<HeroBodyProps, "div">(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} {...props} className={cx(className, "hero-body")}>
      {children}
    </Element>
  ),
  "div",
);
HeroBody.defaultProps = Object.assign(
  {
    children: null,
  },
  HeroBody.defaultProps,
);