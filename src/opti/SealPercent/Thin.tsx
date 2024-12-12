/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../../lib/types";
import OptiBase from "../../lib/OptiBase";

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMsMTA1LjU4Yy00LTQuMi04LjItOC41NC0xMC0xMi44LTEuNjUtNC0xLjczLTkuNTMtMS44Mi0xNS40MS0uMTQtOS0uMjktMTkuMTktNi44My0yNS43NHMtMTYuNzQtNi42OS0yNS43NC02LjgzYy01Ljg4LS4wOS0xMS40My0uMTctMTUuNDEtMS44Mi00LjI2LTEuNzYtOC42LTUuOTMtMTIuOC0xMC02LjY4LTYuNC0xMy41OS0xMy0yMi40Mi0xM3MtMTUuNzQsNi42Mi0yMi40MiwxM2MtNC4yLDQtOC41NCw4LjItMTIuOCwxMC00LDEuNjUtOS41MywxLjczLTE1LjQxLDEuODItOSwuMTQtMTkuMTkuMjktMjUuNzQsNi44M1M0NC45NCw2OC4zNyw0NC44LDc3LjM3Yy0uMDksNS44OC0uMTcsMTEuNDMtMS44MiwxNS40MS0xLjc2LDQuMjYtNS45Myw4LjYtMTAsMTIuOC02LjQsNi42OC0xMywxMy41OS0xMywyMi40MnM2LjYyLDE1Ljc0LDEzLDIyLjQyYzQsNC4yLDguMiw4LjU0LDEwLDEyLjgsMS42NSw0LDEuNzMsOS41MywxLjgyLDE1LjQxLjE0LDksLjI5LDE5LjE5LDYuODMsMjUuNzRzMTYuNzQsNi42OSwyNS43NCw2LjgzYzUuODguMDksMTEuNDMuMTcsMTUuNDEsMS44Miw0LjI2LDEuNzYsOC42LDUuOTMsMTIuOCwxMCw2LjY4LDYuNCwxMy41OSwxMywyMi40MiwxM3MxNS43NC02LjYyLDIyLjQyLTEzYzQuMi00LDguNTQtOC4yLDEyLjgtMTAsNC0xLjY1LDkuNTMtMS43MywxNS40MS0xLjgyLDktLjE0LDE5LjE5LS4yOSwyNS43NC02LjgzczYuNjktMTYuNzQsNi44My0yNS43NGMuMDktNS44OC4xNy0xMS40MywxLjgyLTE1LjQxLDEuNzYtNC4yNiw1LjkzLTguNiwxMC0xMi44LDYuNC02LjY4LDEzLTEzLjU5LDEzLTIyLjQyUzIyOS4zOCwxMTIuMjYsMjIzLDEwNS41OFptLTUuNzgsMzkuM2MtNC41NCw0LjczLTkuMjQsOS42My0xMS41NywxNS4yOC0yLjIzLDUuMzktMi4zMywxMi0yLjQzLDE4LjM1LS4xMiw4LjItLjI0LDE2LTQuNDksMjAuMnMtMTIsNC4zNy0yMC4yLDQuNDljLTYuMzcuMS0xMywuMi0xOC4zNSwyLjQzLTUuNjUsMi4zNC0xMC41NSw3LTE1LjI4LDExLjU3QzEzOS4wOSwyMjIuNzUsMTMzLjYyLDIyOCwxMjgsMjI4cy0xMS4wOS01LjI1LTE2Ljg4LTEwLjhjLTQuNzMtNC41NC05LjYzLTkuMjMtMTUuMjgtMTEuNTctNS4zOS0yLjIzLTEyLTIuMzMtMTguMzUtMi40My04LjItLjEyLTE1Ljk1LS4yNC0yMC4yLTQuNDlzLTQuMzctMTItNC40OS0yMC4yYy0uMS02LjM3LS4yLTEzLTIuNDMtMTguMzUtMi4zMy01LjY1LTctMTAuNTUtMTEuNTctMTUuMjhDMzMuMjUsMTM5LjA5LDI4LDEzMy42MiwyOCwxMjhzNS4yNS0xMS4wOSwxMC44LTE2Ljg4YzQuNTQtNC43Myw5LjI0LTkuNjMsMTEuNTctMTUuMjgsMi4yMy01LjM5LDIuMzMtMTIsMi40My0xOC4zNS4xMi04LjIuMjQtMTUuOTUsNC40OS0yMC4yczEyLTQuMzcsMjAuMi00LjQ5YzYuMzctLjEsMTMtLjIsMTguMzUtMi40Myw1LjY1LTIuMzQsMTAuNTUtNywxNS4yOC0xMS41N0MxMTYuOTEsMzMuMjUsMTIyLjM4LDI4LDEyOCwyOHMxMS4wOSw1LjI1LDE2Ljg4LDEwLjhjNC43Myw0LjU0LDkuNjMsOS4yMywxNS4yOCwxMS41Nyw1LjM5LDIuMjMsMTIsMi4zMywxOC4zNSwyLjQzLDguMi4xMiwxNiwuMjQsMjAuMiw0LjQ5czQuMzcsMTIsNC40OSwyMC4yYy4xLDYuMzcuMiwxMywyLjQzLDE4LjM1LDIuMzMsNS42NSw3LDEwLjU1LDExLjU3LDE1LjI4LDUuNTUsNS43OSwxMC44LDExLjI2LDEwLjgsMTYuODhTMjIyLjc1LDEzOS4wOSwyMTcuMiwxNDQuODhaTTExNiw5NmEyMCwyMCwwLDEsMC0yMCwyMEEyMCwyMCwwLDAsMCwxMTYsOTZaTTg0LDk2YTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDg0LDk2Wm03Niw0NGEyMCwyMCwwLDEsMCwyMCwyMEEyMCwyMCwwLDAsMCwxNjAsMTQwWm0wLDMyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2MCwxNzJabTEwLjgzLTgxLjE3LTgwLDgwYTQsNCwwLDAsMS01LjY2LTUuNjZsODAtODBhNCw0LDAsMSwxLDUuNjYsNS42NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef(({ children, ...props }, ref) => (
  <OptiBase ref={ref} {...props}>
    {children}
    <path d="M223,105.58c-4-4.2-8.2-8.54-10-12.8-1.65-4-1.73-9.53-1.82-15.41-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82-4.26-1.76-8.6-5.93-12.8-10-6.68-6.4-13.59-13-22.42-13s-15.74,6.62-22.42,13c-4.2,4-8.54,8.2-12.8,10-4,1.65-9.53,1.73-15.41,1.82-9,.14-19.19.29-25.74,6.83S44.94,68.37,44.8,77.37c-.09,5.88-.17,11.43-1.82,15.41-1.76,4.26-5.93,8.6-10,12.8-6.4,6.68-13,13.59-13,22.42s6.62,15.74,13,22.42c4,4.2,8.2,8.54,10,12.8,1.65,4,1.73,9.53,1.82,15.41.14,9,.29,19.19,6.83,25.74s16.74,6.69,25.74,6.83c5.88.09,11.43.17,15.41,1.82,4.26,1.76,8.6,5.93,12.8,10,6.68,6.4,13.59,13,22.42,13s15.74-6.62,22.42-13c4.2-4,8.54-8.2,12.8-10,4-1.65,9.53-1.73,15.41-1.82,9-.14,19.19-.29,25.74-6.83s6.69-16.74,6.83-25.74c.09-5.88.17-11.43,1.82-15.41,1.76-4.26,5.93-8.6,10-12.8,6.4-6.68,13-13.59,13-22.42S229.38,112.26,223,105.58Zm-5.78,39.3c-4.54,4.73-9.24,9.63-11.57,15.28-2.23,5.39-2.33,12-2.43,18.35-.12,8.2-.24,16-4.49,20.2s-12,4.37-20.2,4.49c-6.37.1-13,.2-18.35,2.43-5.65,2.34-10.55,7-15.28,11.57C139.09,222.75,133.62,228,128,228s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.23-15.28-11.57-5.39-2.23-12-2.33-18.35-2.43-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35-2.33-5.65-7-10.55-11.57-15.28C33.25,139.09,28,133.62,28,128s5.25-11.09,10.8-16.88c4.54-4.73,9.24-9.63,11.57-15.28,2.23-5.39,2.33-12,2.43-18.35.12-8.2.24-15.95,4.49-20.2s12-4.37,20.2-4.49c6.37-.1,13-.2,18.35-2.43,5.65-2.34,10.55-7,15.28-11.57C116.91,33.25,122.38,28,128,28s11.09,5.25,16.88,10.8c4.73,4.54,9.63,9.23,15.28,11.57,5.39,2.23,12,2.33,18.35,2.43,8.2.12,16,.24,20.2,4.49s4.37,12,4.49,20.2c.1,6.37.2,13,2.43,18.35,2.33,5.65,7,10.55,11.57,15.28,5.55,5.79,10.8,11.26,10.8,16.88S222.75,139.09,217.2,144.88ZM116,96a20,20,0,1,0-20,20A20,20,0,0,0,116,96ZM84,96a12,12,0,1,1,12,12A12,12,0,0,1,84,96Zm76,44a20,20,0,1,0,20,20A20,20,0,0,0,160,140Zm0,32a12,12,0,1,1,12-12A12,12,0,0,1,160,172Zm10.83-81.17-80,80a4,4,0,0,1-5.66-5.66l80-80a4,4,0,1,1,5.66,5.66Z" />
  </OptiBase>
));

I.displayName = "Thin";
export { I as Thin };
