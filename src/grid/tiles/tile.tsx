import classNames from "classnames";
import * as PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";
import { tuple } from "../../utils";

export const TILE_KINDS = tuple("ancestor", "parent", "child");
export type TileKinds = (typeof TILE_KINDS)[number];

export const TILE_SIZES = tuple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
export type TileSizes = (typeof TILE_SIZES)[number];

export type TileModifierProps = Partial<{
  kind: TileKinds;
  size: TileSizes;
  vertical: boolean;
}>;

export type TileProps = HelpersProps & TileModifierProps;

const propTypes = {
  kind: PropTypes.oneOf(TILE_KINDS),
  size: PropTypes.oneOf(TILE_SIZES),
  vertical: PropTypes.bool,
};

export const Tile = Object.assign(
  forwardRefAs<TileProps, "div">(
    ({ className, kind, size, vertical, ...rest }, ref) => (
      <Generic
        className={classNames(
          "tile",
          {
            [`is-${kind}`]: kind,
            [`is-${size}`]: size !== undefined,
            "is-vertical": vertical,
          },
          className,
        )}
        ref={ref}
        {...rest}
      />
    ),
    { as: "div" },
  ),
  { propTypes },
);