import { DOMAttributes, SVGAttributes } from "react";

export interface IconProps
  extends DOMAttributes<SVGSVGElement>,
    SVGAttributes<SVGSVGElement> {
  color?: string;
  size?: string | number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  mirrored?: boolean;
}

export type Icon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
