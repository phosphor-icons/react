import { DOMAttributes, SVGAttributes, createContext } from "react";

export interface IconProps
  extends DOMAttributes<SVGSVGElement>,
    SVGAttributes<SVGSVGElement> {
  color?: string;
  size?: string | number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  mirrored?: boolean;
  // context?: React.Context<IconContext>;
}

export type Icon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

export type IconContextProps = Required<
  Pick<IconProps, "color" | "size" | "weight" | "mirrored">
> &
  SVGAttributes<SVGSVGElement>;

export const IconContext = createContext<IconContextProps>({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
});
