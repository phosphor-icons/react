/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <path
            d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M232.00342,128.65915c.00146-.22022.0083-.439.0083-.65918a103.83918,103.83918,0,0,0-38.33057-80.58106c-.18408-.18262-.37695-.35888-.582-.52637a8.12111,8.12111,0,0,0-.7085-.51367A103.842,103.842,0,0,0,83.0166,34.24606a8.0373,8.0373,0,0,0-1.27734.63428A104.35855,104.35855,0,0,0,26.03662,107.5444c-.0083.04-.021.07813-.02881.11865-.00732.03809-.00928.07617-.01611.11426A103.9536,103.9536,0,0,0,65.583,211.125a8.02091,8.02091,0,0,0,1.311.99023c.03662.022.0752.03613.11182.05762a103.8479,103.8479,0,0,0,95.25683,14.02539,7.98994,7.98994,0,0,0,1.1919-.4209A104.18006,104.18006,0,0,0,232,128.94186C232.00146,128.84713,232.00488,128.7529,232.00342,128.65915Zm-16.34326-8.48145c-2.54834-.11426-5.10059-.17969-7.64258-.17969a168.47807,168.47807,0,0,0-43.93408,5.83887,166.75984,166.75984,0,0,0-13.46485-29.83545,168.19741,168.19741,0,0,0,38.20264-31.55224A87.80676,87.80676,0,0,1,215.66016,120.1777ZM176.2915,54.46481a152.145,152.145,0,0,1-34.31494,28.05713,169.1832,169.1832,0,0,0-38.63281-38.998A87.90076,87.90076,0,0,1,176.2915,54.46481ZM85.66016,50.88327a153.04813,153.04813,0,0,1,42.03222,39.1792A151.82346,151.82346,0,0,1,64.01758,103.998a153.98693,153.98693,0,0,1-20.27735-1.35107A88.414,88.414,0,0,1,85.66016,50.88327ZM40.01172,128a88.58228,88.58228,0,0,1,.52978-9.63526,169.97006,169.97006,0,0,0,23.47608,1.6333,167.76959,167.76959,0,0,0,72.52051-16.39795,150.78511,150.78511,0,0,1,12.3164,27.13477,166.5083,166.5083,0,0,0-24.59277,11.59912A169.09239,169.09239,0,0,0,69.18994,193.393,87.79837,87.79837,0,0,1,40.01172,128Zm42.00244,74.99121A153.04128,153.04128,0,0,1,132.249,156.19772a150.44232,150.44232,0,0,1,20.94971-9.98144,152.47261,152.47261,0,0,1,3.73584,33.47607A152.93446,152.93446,0,0,1,153.4375,212.25a87.90959,87.90959,0,0,1-71.42334-9.25879Zm89.05762,1.72949a169.55889,169.55889,0,0,0,1.86279-25.02832,168.49829,168.49829,0,0,0-4.45215-38.4751,152.48818,152.48818,0,0,1,39.53516-5.21924c2.53125,0,5.07422.063,7.61035.188A88.1393,88.1393,0,0,1,171.07178,204.72067Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <path
            d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DribbbleLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

DribbbleLogo.displayName = "DribbbleLogo";

export default DribbbleLogo;
