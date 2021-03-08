import { createContext, ComponentPropsWithoutRef } from "react";

export { default as IconBase } from './IconBase';

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
  renderPath: Function
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

export const renderPathForWeigth = (
  weight: IconWeight,
  color: string,
  pathsByWeigth: Map<IconWeight, Function>,
): React.ReactNode | null => {
  const path = pathsByWeigth.get(weight);

  if (!!path) {
    return path(color);
  }

  console.error(
    'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
  );

  return null;
};
