import { createContext, ComponentPropsWithoutRef } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  color?: string;
  size?: string | number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  mirrored?: boolean;
}

export type Icon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

export type IconContextProps = Required<
  Pick<IconProps, "color" | "size" | "weight" | "mirrored">
> &
  ComponentPropsWithoutRef<"svg">;

export const IconContext = createContext<IconContextProps>({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
});
