/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../../lib/types";
import OptiBase from "../../lib/OptiBase";

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsODJhNDYsNDYsMCwxLDAsNDYsNDZBNDYuMDYsNDYuMDYsMCwwLDAsMTI4LDgyWm0wLDgwYTM0LDM0LDAsMSwxLDM0LTM0QTM0LDM0LDAsMCwxLDEyOCwxNjJaTTIxNCwxMzAuODRjLjA2LTEuODkuMDYtMy43OSwwLTUuNjhMMjI5LjMzLDEwNmE2LDYsMCwwLDAsMS4xMS01LjI5QTEwNS4zNCwxMDUuMzQsMCwwLDAsMjE5Ljc2LDc0LjlhNiw2LDAsMCwwLTQuNTMtM2wtMjQuNDUtMi43MXEtMS45My0yLjA3LTQtNGwtMi43Mi0yNC40NmE2LDYsMCwwLDAtMy00LjUzLDEwNS42NSwxMDUuNjUsMCwwLDAtMjUuNzctMTAuNjZBNiw2LDAsMCwwLDE1MCwyNi42OGwtMTkuMiwxNS4zN2MtMS44OS0uMDYtMy43OS0uMDYtNS42OCwwTDEwNiwyNi42N2E2LDYsMCwwLDAtNS4yOS0xLjExQTEwNS4zNCwxMDUuMzQsMCwwLDAsNzQuOSwzNi4yNGE2LDYsMCwwLDAtMyw0LjUzTDY5LjIzLDY1LjIycS0yLjA3LDEuOTQtNCw0TDQwLjc2LDcyYTYsNiwwLDAsMC00LjUzLDMsMTA1LjY1LDEwNS42NSwwLDAsMC0xMC42NiwyNS43N0E2LDYsMCwwLDAsMjYuNjgsMTA2bDE1LjM3LDE5LjJjLS4wNiwxLjg5LS4wNiwzLjc5LDAsNS42OEwyNi42NywxNTAuMDVhNiw2LDAsMCwwLTEuMTEsNS4yOUExMDUuMzQsMTA1LjM0LDAsMCwwLDM2LjI0LDE4MS4xYTYsNiwwLDAsMCw0LjUzLDNsMjQuNDUsMi43MXExLjk0LDIuMDcsNCw0TDcyLDIxNS4yNGE2LDYsMCwwLDAsMyw0LjUzLDEwNS42NSwxMDUuNjUsMCwwLDAsMjUuNzcsMTAuNjYsNiw2LDAsMCwwLDUuMjktMS4xMUwxMjUuMTYsMjE0YzEuODkuMDYsMy43OS4wNiw1LjY4LDBsMTkuMjEsMTUuMzhhNiw2LDAsMCwwLDMuNzUsMS4zMSw2LjIsNi4yLDAsMCwwLDEuNTQtLjIsMTA1LjM0LDEwNS4zNCwwLDAsMCwyNS43Ni0xMC42OCw2LDYsMCwwLDAsMy00LjUzbDIuNzEtMjQuNDVxMi4wNy0xLjkzLDQtNGwyNC40Ni0yLjcyYTYsNiwwLDAsMCw0LjUzLTMsMTA1LjQ5LDEwNS40OSwwLDAsMCwxMC42Ni0yNS43Nyw2LDYsMCwwLDAtMS4xMS01LjI5Wm0tMy4xLDQxLjYzLTIzLjY0LDIuNjNhNiw2LDAsMCwwLTMuODIsMiw3NS4xNCw3NS4xNCwwLDAsMS02LjMxLDYuMzEsNiw2LDAsMCwwLTIsMy44MmwtMi42MywyMy42M0E5NC4yOCw5NC4yOCwwLDAsMSwxNTUuMTQsMjE4bC0xOC41Ny0xNC44NmE2LDYsMCwwLDAtMy43NS0xLjMxaC0uMzZhNzguMDcsNzguMDcsMCwwLDEtOC45MiwwLDYsNiwwLDAsMC00LjExLDEuM0wxMDAuODcsMjE4YTk0LjEzLDk0LjEzLDAsMCwxLTE3LjM0LTcuMTdMODAuOSwxODcuMjFhNiw2LDAsMCwwLTItMy44Miw3NS4xNCw3NS4xNCwwLDAsMS02LjMxLTYuMzEsNiw2LDAsMCwwLTMuODItMmwtMjMuNjMtMi42M0E5NC4yOCw5NC4yOCwwLDAsMSwzOCwxNTUuMTRsMTQuODYtMTguNTdhNiw2LDAsMCwwLDEuMy00LjExLDc4LjA3LDc4LjA3LDAsMCwxLDAtOC45Miw2LDYsMCwwLDAtMS4zLTQuMTFMMzgsMTAwLjg3YTk0LjEzLDk0LjEzLDAsMCwxLDcuMTctMTcuMzRMNjguNzksODAuOWE2LDYsMCwwLDAsMy44Mi0yLDc1LjE0LDc1LjE0LDAsMCwxLDYuMzEtNi4zMSw2LDYsMCwwLDAsMi0zLjgybDIuNjMtMjMuNjNBOTQuMjgsOTQuMjgsMCwwLDEsMTAwLjg2LDM4bDE4LjU3LDE0Ljg2YTYsNiwwLDAsMCw0LjExLDEuMyw3OC4wNyw3OC4wNywwLDAsMSw4LjkyLDAsNiw2LDAsMCwwLDQuMTEtMS4zTDE1NS4xMywzOGE5NC4xMyw5NC4xMywwLDAsMSwxNy4zNCw3LjE3bDIuNjMsMjMuNjRhNiw2LDAsMCwwLDIsMy44Miw3NS4xNCw3NS4xNCwwLDAsMSw2LjMxLDYuMzEsNiw2LDAsMCwwLDMuODIsMmwyMy42MywyLjYzQTk0LjI4LDk0LjI4LDAsMCwxLDIxOCwxMDAuODZsLTE0Ljg2LDE4LjU3YTYsNiwwLDAsMC0xLjMsNC4xMSw3OC4wNyw3OC4wNywwLDAsMSwwLDguOTIsNiw2LDAsMCwwLDEuMyw0LjExTDIxOCwxNTUuMTNBOTQuMTMsOTQuMTMsMCwwLDEsMjEwLjg1LDE3Mi40N1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef(({ children, ...props }, ref) => (
  <OptiBase ref={ref} {...props}>
    {children}
    <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z" />
  </OptiBase>
));

I.displayName = "Light";
export { I as Light };
