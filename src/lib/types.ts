import { ComponentPropsWithRef, ReactElement } from "react";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps extends ComponentPropsWithRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

export type Icon = React.ForwardRefExoticComponent<IconProps>;

export interface IconBaseProps extends IconProps {
  weights: Map<IconWeight, ReactElement>;
}
