/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Needle";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODkuNjYsNjYuMzRhOCw4LDAsMCwxLDAsMTEuMzJsLTE2LDE2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmwxNi0xNkE4LDgsMCwwLDEsMTg5LjY2LDY2LjM0Wk0yMjQsNzJhMzkuNzEsMzkuNzEsMCwwLDEtMTEuNzIsMjguMjhsLTI0LDI0YTgsOCwwLDAsMS00LjMsMi4yM2MtNTEuNDksOC44NC0xMzcuNDYsOTQuMjgtMTM4LjMyLDk1LjE1aDBhOCw4LDAsMCwxLTExLjMxLTExLjMyaDBDMzYsMjA4LjczLDEyMC42OSwxMjMuMjgsMTI5LjQ5LDcyYTgsOCwwLDAsMSwyLjIzLTQuM2wyNC0yNEE0MCw0MCwwLDAsMSwyMjQsNzJabS0xNiwwYTI0LDI0LDAsMCwwLTQxLTE3TDE0NC43Nyw3Ny4yOWMtNC40MSwyMS4xNS0xOC45LDQ2LjE5LTM1LjQ5LDY5LjQzLDIzLjI0LTE2LjU5LDQ4LjI4LTMxLjA4LDY5LjQzLTM1LjQ5TDIwMSw4OUEyMy44NSwyMy44NSwwLDAsMCwyMDgsNzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODYuODMsNjkuMTdhNCw0LDAsMCwxLDAsNS42NmwtMTYsMTZhNCw0LDAsMCwxLTUuNjYtNS42NmwxNi0xNkE0LDQsMCwwLDEsMTg2LjgzLDY5LjE3Wk0yMjAsNzJhMzUuNzYsMzUuNzYsMCwwLDEtMTAuNTQsMjUuNDZsLTI0LDI0YTQuMDUsNC4wNSwwLDAsMS0yLjE2LDEuMTFjLTIxLjY1LDMuNzItNTIuNzQsMjEuNDYtODkuOTEsNTEuMzMtMjguMzQsMjIuNzctNTAuMzQsNDQuNzEtNTAuNTYsNDQuOTNsLS4yNC4yMmgwYTQsNCwwLDAsMS01LjQyLTUuODhoMEMzNy4zOSwyMTMsNTkuMzMsMTkxLDgyLjEsMTYyLjYxLDExMiwxMjUuNDQsMTI5LjcxLDk0LjM1LDEzMy40Myw3Mi43YTQuMDUsNC4wNSwwLDAsMSwxLjExLTIuMTZsMjQtMjRBMzYsMzYsMCwwLDEsMjIwLDcyWm0tOCwwYTI4LDI4LDAsMCwwLTQ3LjgtMTkuOEwxNDEuMDgsNzUuMzJjLTUuMzMsMjgtMjkuNDgsNjMuNDItNTIuNTEsOTIuMTEsMjguNjktMjMsNjQuMTYtNDcuMTgsOTIuMTEtNTIuNTJMMjAzLjgsOTEuOEEyNy44MSwyNy44MSwwLDAsMCwyMTIsNzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODguMjQsNjcuNzZhNiw2LDAsMCwxLDAsOC40OGwtMTYsMTZhNiw2LDAsMCwxLTguNDgtOC40OGwxNi0xNkE2LDYsMCwwLDEsMTg4LjI0LDY3Ljc2Wk0yMjIsNzJhMzcuNzQsMzcuNzQsMCwwLDEtMTEuMTMsMjYuODdsLTI0LDI0YTYsNiwwLDAsMS0zLjIzLDEuNjdjLTUyLjE0LDktMTM4LjUzLDk0Ljg0LTEzOS40LDk1LjdhNS44MSw1LjgxLDAsMCwxLTEuODIsMS4yNWgwQTYuMTIsNi4xMiwwLDAsMSw0MCwyMjJhNiw2LDAsMCwxLTQuMjQtMTAuMjRoMGMxLjQtMS40MSw4Ni43OC04Ny40NCw5NS42OS0xMzkuMzlhNiw2LDAsMCwxLDEuNjctMy4yM2wyNC0yNEEzOCwzOCwwLDAsMSwyMjIsNzJabS0xMiwwYTI2LDI2LDAsMCwwLTQ0LjM4LTE4LjM4TDE0Mi45Myw3Ni4zYy00LjE0LDIwLjc5LTE4LjYyLDQ3LjYxLTQzLjEzLDc5LjksMzIuMjktMjQuNTEsNTkuMTEtMzksNzkuOS00My4xM2wyMi42OC0yMi42OUEyNS43OSwyNS43OSwwLDAsMCwyMTAsNzJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuMTEsNDAuODlhNDQsNDQsMCwwLDAtNjIuMjIsMGwtMjQsMjRhMTEuODgsMTEuODgsMCwwLDAtMy4zNCw2LjQ1QzExOC40LDExMyw1NS4zMSwxODMuNywzMS41NSwyMDcuNDhsMCwwYTEyLDEyLDAsMCwwLDE3LDE3aDBjMjMuNzUtMjMuNzMsOTQuNDktODYuODgsMTM2LjE4LTk0YTEyLDEyLDAsMCwwLDYuNDUtMy4zNGwyNC0yNGE0NCw0NCwwLDAsMCwwLTYyLjIyWm0tMTcsNDUuMjUtMjEuNDIsMjEuNDNjLTE0Ljg1LDMuMzEtMzIuNCwxMS40MS01Mi40NywyNC4xOCwxMi43Ny0yMC4wNywyMC44Ny0zNy42MiwyNC4xOC01Mi40N2wyMS40My0yMS40MmEyMCwyMCwwLDEsMSwyOC4yOCwyOC4yOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjgsNDMuNzJhNDAsNDAsMCwwLDAtNTYuNTYsMGwtMjQsMjRhOCw4LDAsMCwwLTIuMjMsNC4zQzEyMC42OSwxMjMuMjgsMzYsMjA4LjczLDM0LjM2LDIxMC4zM2gwYTgsOCwwLDAsMCwxMS4zMSwxMS4zMmgwYy44Ni0uODcsODYuODMtODYuMzEsMTM4LjMyLTk1LjE1YTgsOCwwLDAsMCw0LjMtMi4yM2wyNC0yNGE0MCw0MCwwLDAsMCwwLTU2LjU2Wk0xODkuNjYsNzcuNjZsLTE2LDE2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmwxNi0xNmE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYuNjMsOTQuNjNsLTI0LDI0QzEyOCwxMjgsNDAsMjE2LDQwLDIxNnM4OC04OCw5Ny4zNy0xNDIuNjNsMjQtMjRhMzIsMzIsMCwwLDEsNDUuMjYsNDUuMjZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTg5LjY2LDY2LjM0YTgsOCwwLDAsMSwwLDExLjMybC0xNiwxNmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsMTYtMTZBOCw4LDAsMCwxLDE4OS42Niw2Ni4zNFpNMjI0LDcyYTM5LjcxLDM5LjcxLDAsMCwxLTExLjcyLDI4LjI4bC0yNCwyNGE4LDgsMCwwLDEtNC4zLDIuMjNjLTUxLjQ5LDguODQtMTM3LjQ2LDk0LjI4LTEzOC4zMiw5NS4xNWgwYTgsOCwwLDAsMS0xMS4zMS0xMS4zMmgwQzM2LDIwOC43MywxMjAuNjksMTIzLjI4LDEyOS40OSw3MmE4LDgsMCwwLDEsMi4yMy00LjNsMjQtMjRBNDAsNDAsMCwwLDEsMjI0LDcyWm0tMTYsMGEyNCwyNCwwLDAsMC00MS0xN0wxNDQuNzcsNzcuMjljLTQuNDEsMjEuMTUtMTguOSw0Ni4xOS0zNS40OSw2OS40MywyMy4yNC0xNi41OSw0OC4yOC0zMS4wOCw2OS40My0zNS40OUwyMDEsODlBMjMuODUsMjMuODUsMCwwLDAsMjA4LDcyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Needle";
export { I as Needle };
