import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/exotic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type ListItemModifierProps = Partial<{
  active: boolean;
}>;

export type ListItemProps = ModifierProps & ListItemModifierProps;

export const ListItem = forwardRefAs<ListItemProps, "a">((props, ref) => {
  const { active, as, ...rest } = transformModifiers(props);
  rest.className = cx("list-item", rest.className, {
    "is-active": active,
  });
  return React.createElement(as!, { ref, ...rest });
}, "a");

ListItem.defaultProps = Object.assign({ active: false }, ListItem.defaultProps);