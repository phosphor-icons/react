/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/AirplaneInFlight";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMjE2YTgsOCwwLDAsMS04LDhINzJhOCw4LDAsMSwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMjE2Wm0yNC04MHYyNGE4LDgsMCwwLDEtOCw4SDYxLjA3YTM5Ljc1LDM5Ljc1LDAsMCwxLTM4LjMxLTI4LjUxTDguNjksOTIuNkExNiwxNiwwLDAsMSwyNCw3Mmg4YTgsOCwwLDAsMSw1LjY1LDIuMzRMNTkuMzIsOTZIODEuODFsLTktMjYuOTRBMTYsMTYsMCwwLDEsODgsNDhoOGE4LDgsMCwwLDEsNS42NiwyLjM0TDE0Ny4zMiw5NkgyMDhBNDAsNDAsMCwwLDEsMjQ4LDEzNlptLTE2LDBhMjQsMjQsMCwwLDAtMjQtMjRIMTQ0YTgsOCwwLDAsMS01LjY1LTIuMzRMOTIuNjksNjRIODhsMTIuNDksMzcuNDdBOCw4LDAsMCwxLDkyLjkxLDExMkg1NmE4LDgsMCwwLDEtNS42Ni0yLjM0TDI4LjY5LDg4SDI0bDE0LjA3LDQ2LjlhMjMuODUsMjMuODUsMCwwLDAsMjMsMTcuMUgyMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMjE2YTQsNCwwLDAsMS00LDRINzJhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCwyMTZabTI0LTgwdjI0YTQsNCwwLDAsMS00LDRINjEuMDZhMzUuNzksMzUuNzksMCwwLDEtMzQuNDgtMjUuNjZMMTIuNTIsOTEuNDVBMTIsMTIsMCwwLDEsMjQsNzZoOGE0LDQsMCwwLDEsMi44MywxLjE3TDU3LjY2LDEwMGgyOS43TDc2LjYzLDY3Ljc5QTEyLDEyLDAsMCwxLDg4LDUyaDhhNCw0LDAsMCwxLDIuODMsMS4xN0wxNDUuNjYsMTAwSDIwOEEzNiwzNiwwLDAsMSwyNDQsMTM2Wm0tOCwwYTI4LDI4LDAsMCwwLTI4LTI4SDE0NGE0LDQsMCwwLDEtMi44My0xLjE3TDk0LjM1LDYwSDg4YTQsNCwwLDAsMC0zLjgsNS4yNkw5Ni43LDEwMi43NEE0LDQsMCwwLDEsOTIuOTEsMTA4SDU2YTQsNCwwLDAsMS0yLjgyLTEuMTdMMzAuMzUsODRIMjRhNCw0LDAsMCwwLTMuODMsNS4xNWwxNC4wNyw0Ni45QTI3LjgzLDI3LjgzLDAsMCwwLDYxLjA2LDE1NkgyMzZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMjE2YTYsNiwwLDAsMS02LDZINzJhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMjE2Wm0yNC04MHYyNGE2LDYsMCwwLDEtNiw2SDYxLjA3YTM3Ljc3LDM3Ljc3LDAsMCwxLTM2LjQtMjcuMDhMMTAuNiw5MkExNCwxNCwwLDAsMSwyNCw3NGg4YTYsNiwwLDAsMSw0LjI0LDEuNzZMNTguNDksOThoMjYuMUw3NC43Myw2OC40M0ExNCwxNCwwLDAsMSw4OCw1MGg4YTYsNiwwLDAsMSw0LjI1LDEuNzZMMTQ2LjQ5LDk4SDIwOEEzOCwzOCwwLDAsMSwyNDYsMTM2Wm0tMTIsMGEyNiwyNiwwLDAsMC0yNi0yNkgxNDRhNiw2LDAsMCwxLTQuMjQtMS43Nkw5My41Miw2Mkg4OGEyLDIsMCwwLDAtMS45LDIuNjNMOTguNiwxMDIuMWE2LDYsMCwwLDEtNS42OSw3LjlINTZhNiw2LDAsMCwxLTQuMjQtMS43NkwyOS41Miw4NkgyNGExLjkzLDEuOTMsMCwwLDAtMS42LjgxLDEuOTEsMS45MSwwLDAsMC0uMzEsMS43NmwxNC4wNiw0Ni45QTI1Ljg2LDI1Ljg2LDAsMCwwLDYxLjA3LDE1NEgyMzRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMjE2YTEyLDEyLDAsMCwxLTEyLDEySDcyYTEyLDEyLDAsMCwxLDAtMjRIMjE2QTEyLDEyLDAsMCwxLDIyOCwyMTZabTI0LTgwdjI0YTEyLDEyLDAsMCwxLTEyLDEySDYxLjA3YTQzLjcyLDQzLjcyLDAsMCwxLTQyLjE0LTMxLjM2TDQuODYsOTMuNzVBMjAsMjAsMCwwLDEsMjQsNjhoOGExMiwxMiwwLDAsMSw4LjQ4LDMuNTFMNjEsOTJINzYuMjdMNjksNzAuMzJBMjAsMjAsMCwwLDEsODgsNDRoOGExMiwxMiwwLDAsMSw4LjQ4LDMuNTFMMTQ5LDkyaDU5QTQ0LjA1LDQ0LjA1LDAsMCwxLDI1MiwxMzZabS0yNCwwYTIwLDIwLDAsMCwwLTIwLTIwSDE0NGExMiwxMiwwLDAsMS04LjQ4LTMuNTFMOTQuODMsNzEuNzlsOS40NywyOC40MkExMiwxMiwwLDAsMSw5Mi45MSwxMTZINTZhMTIsMTIsMCwwLDEtOC40OS0zLjUxTDMwLjQsOTUuMzZsMTEuNTEsMzguMzlBMTkuODksMTkuODksMCwwLDAsNjEuMDcsMTQ4SDIyOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMjE2YTgsOCwwLDAsMS04LDhINzJhOCw4LDAsMSwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMjE2Wk0yMDgsOTZIMTQ3LjMyTDEwMS42Niw1MC4zNEE4LDgsMCwwLDAsOTYsNDhIODhBMTYsMTYsMCwwLDAsNzIuODMsNjkuMDZsOSwyNi45NEg1OS4zMkwzNy42Niw3NC4zNEE4LDgsMCwwLDAsMzIsNzJIMjRBMTYsMTYsMCwwLDAsOC42OSw5Mi42bDE0LjA3LDQ2Ljg5QTM5Ljc1LDM5Ljc1LDAsMCwwLDYxLjA3LDE2OEgyNDBhOCw4LDAsMCwwLDgtOFYxMzZBNDAsNDAsMCwwLDAsMjA4LDk2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTM2djI0SDYxLjA2YTMyLDMyLDAsMCwxLTMwLjY1LTIyLjhMMTYuMzQsOTAuM0E4LDgsMCwwLDEsMjQsODBoOGwyNCwyNEg5Mi45MUw4MC40Miw2Ni41M0E4LDgsMCwwLDEsODgsNTZoOGw0OCw0OGg2NEEzMiwzMiwwLDAsMSwyNDAsMTM2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCwyMTZhOCw4LDAsMCwxLTgsOEg3MmE4LDgsMCwxLDEsMC0xNkgyMTZBOCw4LDAsMCwxLDIyNCwyMTZabTI0LTgwdjI0YTgsOCwwLDAsMS04LDhINjEuMDdhMzkuNzUsMzkuNzUsMCwwLDEtMzguMzEtMjguNTFMOC42OSw5Mi42QTE2LDE2LDAsMCwxLDI0LDcyaDhhOCw4LDAsMCwxLDUuNjUsMi4zNEw1OS4zMiw5Nkg4MS44MWwtOS0yNi45NEExNiwxNiwwLDAsMSw4OCw0OGg4YTgsOCwwLDAsMSw1LjY2LDIuMzRMMTQ3LjMyLDk2SDIwOEE0MCw0MCwwLDAsMSwyNDgsMTM2Wm0tMTYsMGEyNCwyNCwwLDAsMC0yNC0yNEgxNDRhOCw4LDAsMCwxLTUuNjUtMi4zNEw5Mi42OSw2NEg4OGwxMi40OSwzNy40N0E4LDgsMCwwLDEsOTIuOTEsMTEySDU2YTgsOCwwLDAsMS01LjY2LTIuMzRMMjguNjksODhIMjRsMTQuMDcsNDYuOWEyMy44NSwyMy44NSwwLDAsMCwyMywxNy4xSDIzMloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "AirplaneInFlight";
export { I as AirplaneInFlight };
