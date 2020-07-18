import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const XXX = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = '1em', weight = 'regular', ...rest }, ref) => {
    switch (weight) {
      case 'thin':
      case 'light':
      case 'regular':
        return (
          <svg
            ref={ref}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            stroke={color}
            {...rest}
          ></svg>
        )
      case 'bold':
      case 'fill':
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

XXX.displayName = 'XXX'

export default XXX
