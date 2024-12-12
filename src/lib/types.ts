import { ComponentPropsWithoutRef, RefAttributes } from "react";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps
  extends ComponentPropsWithoutRef<"svg">,
    RefAttributes<SVGSVGElement> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

export type Icon = React.ForwardRefExoticComponent<IconProps>;
