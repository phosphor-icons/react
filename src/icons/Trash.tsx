import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Trash = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = '1em', weight = 'regular', ...rest },
    ref
  ) => {
    switch (weight) {
      case 'thin':
        return null
      case 'light':
        return null
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
          >
            <title>ph-trash</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-108.000000, -836.000000)'
              >
                <g id='ph-trash' transform='translate(108.000000, 836.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M13.5,3 C13.7761424,3 14,3.22385763 14,3.5 C14,3.74545989 13.8231248,3.94960837 13.5898756,3.99194433 L13.5,4 L13,4 L13,12.548 C13,13.307458 12.3999918,13.9235487 11.6435565,13.9934021 L11.5,14 L4.5,14 C3.72505906,14 3.08011075,13.4288028 3.00691594,12.6886587 L3,12.548 L3,4 L2.5,4 C2.22385763,4 2,3.77614237 2,3.5 C2,3.25454011 2.17687516,3.05039163 2.41012437,3.00805567 L2.5,3 L13.5,3 Z M12,4 L4,4 L4,12.548 C4,12.7647416 4.17258713,12.9533006 4.40869503,12.9925268 L4.5,13 L11.5,13 C11.7497667,13 11.9505654,12.8351992 11.9921038,12.6276123 L12,12.548 L12,4 Z M6.5,6 C6.74545989,6 6.94960837,6.17687516 6.99194433,6.41012437 L7,6.5 L7,10.5 C7,10.7761424 6.77614237,11 6.5,11 C6.25454011,11 6.05039163,10.8231248 6.00805567,10.5898756 L6,10.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 Z M9.5,6 C9.74545989,6 9.94960837,6.17687516 9.99194433,6.41012437 L10,6.5 L10,10.5 C10,10.7761424 9.77614237,11 9.5,11 C9.25454011,11 9.05039163,10.8231248 9.00805567,10.5898756 L9,10.5 L9,6.5 C9,6.22385763 9.22385763,6 9.5,6 Z M10.5,1 C10.7761424,1 11,1.22385763 11,1.5 C11,1.74545989 10.8231248,1.94960837 10.5898756,1.99194433 L10.5,2 L5.5,2 C5.22385763,2 5,1.77614237 5,1.5 C5,1.25454011 5.17687516,1.05039163 5.41012437,1.00805567 L5.5,1 L10.5,1 Z'
                    id='Combined-Shape'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'bold':
        return null
      case 'fill':
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
          >
            <title>ph-trash-fill</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-172.000000, -1028.000000)'
              >
                <g
                  id='ph-trash-solid'
                  transform='translate(172.000000, 1028.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M13.5,3 C13.776,3 14,3.224 14,3.5 C14,3.776 13.776,4 13.5,4 L13.5,4 L13,4 L13,12.548 C13,13.349 12.327,14 11.5,14 L11.5,14 L4.5,14 C3.673,14 3,13.349 3,12.548 L3,12.548 L3,4 L2.5,4 C2.224,4 2,3.776 2,3.5 C2,3.224 2.224,3 2.5,3 L2.5,3 Z M9.5,6 C9.224,6 9,6.224 9,6.5 L9,6.5 L9,10.5 C9,10.776 9.224,11 9.5,11 C9.776,11 10,10.776 10,10.5 L10,10.5 L10,6.5 C10,6.224 9.776,6 9.5,6 Z M6.5,6 C6.224,6 6,6.224 6,6.5 L6,6.5 L6,10.5 C6,10.776 6.224,11 6.5,11 C6.776,11 7,10.776 7,10.5 L7,10.5 L7,6.5 C7,6.224 6.776,6 6.5,6 Z M10.5,1 C10.776,1 11,1.224 11,1.5 C11,1.776 10.776,2 10.5,2 L10.5,2 L5.5,2 C5.224,2 5,1.776 5,1.5 C5,1.224 5.224,1 5.5,1 L5.5,1 Z'
                    id='Combined-Shape'
                    fill={color}
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'duotone':
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
          >
            <title>ph-trash-duo</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -804.000000)'
              >
                <g
                  id='ph-trash-duo'
                  transform='translate(236.000000, 804.000000)'
                >
                  <polygon id='bg' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M12.5,3.5 L12.5,12.548 C12.5,13.073 12.052,13.5 11.5,13.5 L4.5,13.5 C3.947,13.5 3.5,13.073 3.5,12.548 L3.5,3.5'
                    id='fill'
                    fill={color}
                    opacity={0.2}
                  ></path>
                  <path
                    d='M13.5,2.9999 C13.776,2.9999 14,3.2239 14,3.4999 C14,3.7769 13.776,3.9999 13.5,3.9999 L13.5,3.9999 L13,3.9999 L13,12.5479 C13,13.3489 12.327,13.9999 11.5,13.9999 L11.5,13.9999 L4.5,13.9999 C3.673,13.9999 3,13.3489 3,12.5479 L3,12.5479 L3,3.9999 L2.5,3.9999 C2.224,3.9999 2,3.7769 2,3.4999 C2,3.2239 2.224,2.9999 2.5,2.9999 L2.5,2.9999 Z M12,3.9999 L4,3.9999 L4,12.5479 C4,12.7969 4.224,12.9999 4.5,12.9999 L4.5,12.9999 L11.5,12.9999 C11.776,12.9999 12,12.7969 12,12.5479 L12,12.5479 L12,3.9999 Z M6.5,6 C6.776,6 7,6.224 7,6.5 L7,6.5 L7,10.5 C7,10.776 6.776,11 6.5,11 C6.224,11 6,10.776 6,10.5 L6,10.5 L6,6.5 C6,6.224 6.224,6 6.5,6 Z M9.5,6 C9.776,6 10,6.224 10,6.5 L10,6.5 L10,10.5 C10,10.776 9.776,11 9.5,11 C9.224,11 9,10.776 9,10.5 L9,10.5 L9,6.5 C9,6.224 9.224,6 9.5,6 Z M10.5,1 C10.776,1 11,1.224 11,1.5 C11,1.776 10.776,2 10.5,2 L10.5,2 L5.5,2 C5.224,2 5,1.776 5,1.5 C5,1.224 5.224,1 5.5,1 L5.5,1 Z'
                    id='stroke'
                    fill={color}
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

Trash.displayName = 'Trash'

export default Trash
