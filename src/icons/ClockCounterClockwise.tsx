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
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="71.833 99.716 31.833 99.716 31.833 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <circle cx="128" cy="128" r="88" opacity="0.2" />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="71.833 99.716 31.833 99.716 31.833 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <g>
      <path d="M128,72a8.00008,8.00008,0,0,0-8,8v48c0,.07269.00879.14313.01074.21533.00489.16107.01026.32172.02442.48187.01074.124.02734.24573.04394.368.01758.12957.03516.25872.05908.38714.02588.142.05811.28156.09131.42084.02637.108.05274.2157.083.32257.0415.14606.08838.28943.13818.432.03516.10131.07129.20208.11036.30194.05419.13665.1123.27063.17334.4035.04833.1062.09863.21143.15185.31561.06055.11792.12451.2334.19043.34778.06641.11511.13477.22864.207.34058.063.09771.12891.19317.19629.2879.085.12.17236.23792.26416.35352.06641.08294.13477.16351.2041.24377.09961.11548.20117.22882.30811.339.07617.07849.15478.15381.23388.22913.105.09991.21094.19854.32276.29333.09765.0835.19922.16235.30127.24115.09912.07642.19775.153.30127.22534.12988.09131.26513.17548.40088.2591.0625.03839.11963.082.18359.11889l41.56934,24a8,8,0,0,0,8-13.85644L136,123.38116V80A8.00008,8.00008,0,0,0,128,72Z" />
      <path d="M195.88184,60.11768a96.10782,96.10782,0,0,0-135.76416,0L39.8335,80.402V59.71582a8,8,0,1,0-16,0v40l.001.02216q.00147.38388.03907.76654c.01171.12121.03417.23889.05126.35846.02051.13873.03614.27783.06348.41552.02735.13629.06445.26838.09863.402.02979.119.05567.23871.09131.35657.04.13208.08936.25964.13623.38867.042.11688.08008.23462.12793.34992.04981.12072.1084.23651.16407.35418.05664.11908.10937.23914.17187.3559.06055.11371.12988.2218.19629.33215.06738.11316.13135.22785.20508.33826.08349.12427.17578.24139.26562.36059.0669.08936.12891.18134.20069.26844a8.034,8.034,0,0,0,1.11865,1.11865c.08545.07025.17578.131.26367.19714.12061.091.23926.18439.36523.26856.10889.07275.22168.13568.3335.20251.11182.06739.22217.13764.3374.19959.11475.06115.23243.11279.34912.168.11963.05688.2378.11657.36084.1676.1128.04645.22754.08386.3418.125.13184.04773.2627.09821.39746.1391.11377.0343.229.0592.34375.08838.1377.03515.27442.07348.415.10132.13086.02588.2627.04089.394.06018.127.01855.25147.04223.38038.05481.23242.02282.46582.03283.69921.03534.0293.0003.05762.00439.08741.00439h40a8,8,0,0,0,0-16H51.147L71.43164,71.43115a80.00025,80.00025,0,1,1,0,113.13721,8.00035,8.00035,0,0,0-11.314,11.31445A96.0001,96.0001,0,0,0,195.88184,60.11768Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="71.833 99.716 31.833 99.716 31.833 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="71.833 99.716 31.833 99.716 31.833 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="71.833 99.716 31.833 99.716 31.833 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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

const ClockCounterClockwise = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ClockCounterClockwise.displayName = "ClockCounterClockwise";

export default ClockCounterClockwise;
