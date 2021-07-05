/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M91.42886,87.7719A39.8604,39.8604,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84A79.63961,79.63961,0,0,1,63.34376,56.87833"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M166.89165,170.78091A20.01341,20.01341,0,0,1,140,152a24.94024,24.94024,0,0,1,1.58781-9.05283"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M94.27434,31.43528A80.03716,80.03716,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M166.97308,111.4048A25.6972,25.6972,0,0,0,168,104a40.00005,40.00005,0,0,0-40-40q-1.99815,0-3.94767.19234"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M161.93951,216.00391A44.00109,44.00109,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0C208,144,208.97171,168.97171,161.93951,216.00391Z"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M91.42886,87.7719A39.8604,39.8604,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M86.97786,35.304A80.01863,80.01863,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84A79.63961,79.63961,0,0,1,63.34376,56.87833"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M163.07477,119.00866A23.8953,23.8953,0,0,0,168,104a40.02881,40.02881,0,0,0-52.976-37.8483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M166.89165,170.78091A20.01341,20.01341,0,0,1,140,152a24.94024,24.94024,0,0,1,1.58781-9.05283"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M213.91943,210.61816a8.00024,8.00024,0,0,1-11.83886,10.76368L164.1604,179.66943A27.8785,27.8785,0,0,1,132,152a34.92369,34.92369,0,0,1,.68823-6.94971L95.9668,104.65674A7.99677,7.99677,0,0,1,80,104a47.77032,47.77032,0,0,1,2.22388-14.46045L64.5011,70.04443A71.47341,71.47341,0,0,0,56,104c0,26.69629,8.53418,34.9248,17.56982,43.63672C82.2085,155.9668,92,165.4082,92,188a36.001,36.001,0,0,0,63.77148,22.90918,8,8,0,1,1,12.33594,10.18945A52.00105,52.00105,0,0,1,76,188c0-15.793-5.67773-21.26758-13.53613-28.84473C52.45557,149.50488,40,137.49512,40,104a87.3043,87.3043,0,0,1,13.206-46.37988L42.08057,45.38184A8.00024,8.00024,0,1,1,53.91943,34.61816L69.2439,51.4751l.04455.04883L97.25708,82.28955l.02832.03125L172.736,165.31641l.01026.01123ZM91.08594,42.169A72.01834,72.01834,0,0,1,200,104a8,8,0,0,0,16,0A88.01954,88.01954,0,0,0,82.87012,28.43848,8.0004,8.0004,0,0,0,91.08594,42.169Zm67.186,83.23828a8.00079,8.00079,0,0,0,11.20069-1.59571A31.86061,31.86061,0,0,0,176,104a48.02849,48.02849,0,0,0-63.56982-45.416,7.99955,7.99955,0,1,0,5.1875,15.13477A32.03087,32.03087,0,0,1,160,104a15.97942,15.97942,0,0,1-3.32324,10.20605A8.00086,8.00086,0,0,0,158.272,125.40723Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M91.42886,87.7719A39.8604,39.8604,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M86.97786,35.304A80.01863,80.01863,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84A79.63961,79.63961,0,0,1,63.34376,56.87833"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M163.07477,119.00866A23.8953,23.8953,0,0,0,168,104a40.02881,40.02881,0,0,0-52.976-37.8483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M166.89165,170.78091A20.01341,20.01341,0,0,1,140,152a24.94024,24.94024,0,0,1,1.58781-9.05283"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M91.42886,87.7719A39.8604,39.8604,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M86.97786,35.304A80.01863,80.01863,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84A79.63961,79.63961,0,0,1,63.34376,56.87833"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M163.07477,119.00866A23.8953,23.8953,0,0,0,168,104a40.02881,40.02881,0,0,0-52.976-37.8483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M166.89165,170.78091A20.01341,20.01341,0,0,1,140,152a24.94024,24.94024,0,0,1,1.58781-9.05283"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M91.42886,87.7719A39.8604,39.8604,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M86.97786,35.304A80.01863,80.01863,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84A79.63961,79.63961,0,0,1,63.34376,56.87833"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M163.07477,119.00866A23.8953,23.8953,0,0,0,168,104a40.02881,40.02881,0,0,0-52.976-37.8483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M166.89165,170.78091A20.01341,20.01341,0,0,1,140,152a24.94024,24.94024,0,0,1,1.58781-9.05283"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const EarSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

EarSlash.displayName = "EarSlash";

export default EarSlash;
