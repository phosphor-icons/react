import { createContext, ComponentPropsWithoutRef } from "react";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export type PaintFunction = (color: string) => React.ReactNode | null;

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>;

export type Icon = React.ForwardRefExoticComponent<IconComponentProps>;

export type IconContextProps = Pick<
  IconProps,
  "color" | "size" | "weight" | "mirrored"
> &
  ComponentPropsWithoutRef<"svg">;

export const IconContext = createContext<IconContextProps>({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
});

export const renderPathForWeight = (
  weight: IconWeight,
  color: string,
  pathsByWeight: Map<IconWeight, PaintFunction>
): React.ReactNode | null => {
  const path = pathsByWeight.get(weight);
  if (!!path) return path(color);

  console.error(
    'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
  );

  return null;
};
