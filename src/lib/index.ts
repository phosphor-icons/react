import { createContext, ComponentPropsWithoutRef } from "react";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>;

export type Icon = React.ForwardRefExoticComponent<IconComponentProps>;

export const IconContext = createContext<IconProps>({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
});
