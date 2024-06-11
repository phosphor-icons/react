/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ArrowsClockwise";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWOTZhOCw4LDAsMCwxLTgsOEgxNjhhOCw4LDAsMCwxLDAtMTZoMjguNjlMMTgyLjA2LDczLjM3YTc5LjU2LDc5LjU2LDAsMCwwLTU2LjEzLTIzLjQzaC0uNDVBNzkuNTIsNzkuNTIsMCwwLDAsNjkuNTksNzIuNzEsOCw4LDAsMCwxLDU4LjQxLDYxLjI3YTk2LDk2LDAsMCwxLDEzNSwuNzlMMjA4LDc2LjY5VjQ4YTgsOCwwLDAsMSwxNiwwWk0xODYuNDEsMTgzLjI5YTgwLDgwLDAsMCwxLTExMi40Ny0uNjZMNTkuMzEsMTY4SDg4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMC04LDh2NDhhOCw4LDAsMCwwLDE2LDBWMTc5LjMxbDE0LjYzLDE0LjYzQTk1LjQzLDk1LjQzLDAsMCwwLDEzMCwyMjIuMDZoLjUzYTk1LjM2LDk1LjM2LDAsMCwwLDY3LjA3LTI3LjMzLDgsOCwwLDAsMC0xMS4xOC0xMS40NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDhWOTZhNCw0LDAsMCwxLTQsNEgxNjhhNCw0LDAsMCwxLDAtOGgzOC4zNEwxODQuODksNzAuNTRBODQsODQsMCwwLDAsNjYuOCw2OS44NWE0LDQsMCwxLDEtNS42LTUuNzIsOTIsOTIsMCwwLDEsMTI5LjM0Ljc2TDIxMiw4Ni4zNFY0OGE0LDQsMCwwLDEsOCwwWk0xODkuMiwxODYuMTVhODMuNDQsODMuNDQsMCwwLDEtNTguNjgsMjMuOTFoLS40N2E4My41Miw4My41MiwwLDAsMS01OC45NC0yNC42TDQ5LjY2LDE2NEg4OGE0LDQsMCwwLDAsMC04SDQwYTQsNCwwLDAsMC00LDR2NDhhNCw0LDAsMCwwLDgsMFYxNjkuNjZsMjEuNDYsMjEuNDVBOTEuNDMsOTEuNDMsMCwwLDAsMTMwLDIxOC4wNmguNTFhOTEuNDUsOTEuNDUsMCwwLDAsNjQuMjgtMjYuMTksNCw0LDAsMSwwLTUuNi01LjcyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNDhWOTZhNiw2LDAsMCwxLTYsNkgxNjhhNiw2LDAsMCwxLDAtMTJoMzMuNTJMMTgzLjQ3LDcyYTgxLjUxLDgxLjUxLDAsMCwwLTU3LjUzLTI0aC0uNDZBODEuNSw4MS41LDAsMCwwLDY4LjE5LDcxLjI4YTYsNiwwLDEsMS04LjM4LTguNTgsOTMuMzgsOTMuMzgsMCwwLDEsNjUuNjctMjYuNzZIMTI2YTkzLjQ1LDkzLjQ1LDAsMCwxLDY2LDI3LjUzbDE4LDE4VjQ4YTYsNiwwLDAsMSwxMiwwWk0xODcuODEsMTg0LjcyYTgxLjUsODEuNSwwLDAsMS01Ny4yOSwyMy4zNGgtLjQ2YTgxLjUxLDgxLjUxLDAsMCwxLTU3LjUzLTI0TDU0LjQ4LDE2Nkg4OGE2LDYsMCwwLDAsMC0xMkg0MGE2LDYsMCwwLDAtNiw2djQ4YTYsNiwwLDAsMCwxMiwwVjE3NC40OGwxOCwxOC4wNWE5My40NSw5My40NSwwLDAsMCw2NiwyNy41M2guNTJhOTMuMzgsOTMuMzgsMCwwLDAsNjUuNjctMjYuNzYsNiw2LDAsMSwwLTguMzgtOC41OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDhWOTZhMTIsMTIsMCwwLDEtMTIsMTJIMTY4YTEyLDEyLDAsMCwxLDAtMjRoMTlsLTcuOC03LjhhNzUuNTUsNzUuNTUsMCwwLDAtNTMuMzItMjIuMjZoLS40M0E3NS40OSw3NS40OSwwLDAsMCw3Mi4zOSw3NS41NywxMiwxMiwwLDEsMSw1NS42MSw1OC40MWE5OS4zOCw5OS4zOCwwLDAsMSw2OS44Ny0yOC40N0gxMjZBOTkuNDIsOTkuNDIsMCwwLDEsMTk2LjIsNTkuMjNMMjA0LDY3VjQ4YTEyLDEyLDAsMCwxLDI0LDBaTTE4My42MSwxODAuNDNhNzUuNDksNzUuNDksMCwwLDEtNTMuMDksMjEuNjNoLS40M0E3NS41NSw3NS41NSwwLDAsMSw3Ni43NywxNzkuOEw2OSwxNzJIODhhMTIsMTIsMCwwLDAsMC0yNEg0MGExMiwxMiwwLDAsMC0xMiwxMnY0OGExMiwxMiwwLDAsMCwyNCwwVjE4OWw3LjgsNy44QTk5LjQyLDk5LjQyLDAsMCwwLDEzMCwyMjYuMDZoLjU2YTk5LjM4LDk5LjM4LDAsMCwwLDY5Ljg3LTI4LjQ3LDEyLDEyLDAsMCwwLTE2Ljc4LTE3LjE2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWOTZhOCw4LDAsMCwxLTgsOEgxNjhhOCw4LDAsMCwxLTUuNjYtMTMuNjZMMTgwLjY1LDcyYTc5LjQ4LDc5LjQ4LDAsMCwwLTU0LjcyLTIyLjA5aC0uNDVBNzkuNTIsNzkuNTIsMCwwLDAsNjkuNTksNzIuNzEsOCw4LDAsMCwxLDU4LjQxLDYxLjI3LDk2LDk2LDAsMCwxLDE5Miw2MC43bDE4LjM2LTE4LjM2QTgsOCwwLDAsMSwyMjQsNDhaTTE4Ni40MSwxODMuMjlBODAsODAsMCwwLDEsNzUuMzUsMTg0bDE4LjMxLTE4LjMxQTgsOCwwLDAsMCw4OCwxNTJINDBhOCw4LDAsMCwwLTgsOHY0OGE4LDgsMCwwLDAsMTMuNjYsNS42Nkw2NCwxOTUuM2E5NS40Miw5NS40MiwwLDAsMCw2NiwyNi43NmguNTNhOTUuMzYsOTUuMzYsMCwwLDAsNjcuMDctMjcuMzMsOCw4LDAsMCwwLTExLjE4LTExLjQ0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDQ4Vjk2YTgsOCwwLDAsMS04LDhIMTY4YTgsOCwwLDAsMSwwLTE2aDI4LjY5TDE4Mi4wNiw3My4zN2E3OS41Niw3OS41NiwwLDAsMC01Ni4xMy0yMy40M2gtLjQ1QTc5LjUyLDc5LjUyLDAsMCwwLDY5LjU5LDcyLjcxLDgsOCwwLDAsMSw1OC40MSw2MS4yN2E5Niw5NiwwLDAsMSwxMzUsLjc5TDIwOCw3Ni42OVY0OGE4LDgsMCwwLDEsMTYsMFpNMTg2LjQxLDE4My4yOWE4MCw4MCwwLDAsMS0xMTIuNDctLjY2TDU5LjMxLDE2OEg4OGE4LDgsMCwwLDAsMC0xNkg0MGE4LDgsMCwwLDAtOCw4djQ4YTgsOCwwLDAsMCwxNiwwVjE3OS4zMWwxNC42MywxNC42M0E5NS40Myw5NS40MywwLDAsMCwxMzAsMjIyLjA2aC41M2E5NS4zNiw5NS4zNiwwLDAsMCw2Ny4wNy0yNy4zMyw4LDgsMCwwLDAtMTEuMTgtMTEuNDRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowsClockwise";
export { I as ArrowsClockwise };
