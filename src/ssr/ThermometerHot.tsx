/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ThermometerHot";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNTZBNTIsNTIsMCwwLDAsNTYsNTZ2OTQuNjlhNjQsNjQsMCwxLDAsMTA0LDBaTTEwOCwyMjhhNDAsNDAsMCwwLDEtMzAuOTEtNjUuMzlBMTIsMTIsMCwwLDAsODAsMTU0Ljc4VjU2YTI4LDI4LDAsMCwxLDU2LDB2OTguNzdhMTIsMTIsMCwwLDAsMi43Nyw3LjY4QTQwLDQwLDAsMCwxLDEwOCwyMjhabTI0LTQwYTI0LDI0LDAsMSwxLTM2LTIwLjc4VjU2YTEyLDEyLDAsMCwxLDI0LDBWMTY3LjIyQTI0LDI0LDAsMCwxLDEzMiwxODhaTTE3My45NCw4M2ExMiwxMiwwLDAsMSwzLjUxLTE2LjZjMTYuODItMTEsMzAuMzItNS4yLDM5LjI2LTEuMzksOC4wOSwzLjQ2LDEwLjkzLDQuMzcsMTYuNzQuNThhMTIsMTIsMCwwLDEsMTMuMSwyMC4xMUMyMzkuMjgsOTAuMzgsMjMyLjY0LDkyLDIyNi43MSw5MmMtNy43OSwwLTE0LjM0LTIuOC0xOS40Mi01LTguMDktMy40Ni0xMC45My00LjM3LTE2Ljc0LS41OEExMiwxMiwwLDAsMSwxNzMuOTQsODNabTc2LjExLDI2LjFhMTIsMTIsMCwwLDEtMy41LDE2LjZjLTcuMjcsNC43My0xMy45MSw2LjM1LTE5Ljg0LDYuMzUtNy43OSwwLTE0LjM0LTIuOC0xOS40Mi01LTguMDktMy40Ni0xMC45My00LjM3LTE2Ljc0LS41OGExMiwxMiwwLDEsMS0xMy4xLTIwLjExYzE2LjgyLTExLDMwLjMyLTUuMiwzOS4yNi0xLjM5LDguMDksMy40NiwxMC45Myw0LjM3LDE2Ljc0LjU4QTEyLDEyLDAsMCwxLDI1MC4wNSwxMDkuMDVaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTM4VjQ4YTMyLDMyLDAsMCwwLTY0LDB2OTBhNTYsNTYsMCwxLDAsNjQsMFptLTMyLDcwYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDEyMCwyMDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDE1M1Y0OGE4LDgsMCwwLDAtMTYsMFYxNTNhMzIsMzIsMCwxLDAsMTYsMFptLTgsNDdhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTIwLDIwMFptNDAtNjZWNDhhNDAsNDAsMCwwLDAtODAsMHY4NmE2NCw2NCwwLDEsMCw4MCwwWm0tNDAsOThhNDgsNDgsMCwwLDEtMjcuNDItODcuNEE4LDgsMCwwLDAsOTYsMTM4VjQ4YTI0LDI0LDAsMCwxLDQ4LDB2OTBhOCw4LDAsMCwwLDMuNDIsNi41NkE0OCw0OCwwLDAsMSwxMjAsMjMyWk0xNzcuMyw4MC43N2E4LDgsMCwwLDEsMi4zMy0xMS4wN2MxNS05Ljc5LDI2Ljg3LTQuNzUsMzUuNTEtMS4wNkMyMjMsNzIsMjI3Ljc2LDc0LDIzNS42Myw2OC44OWE4LDgsMCwwLDEsOC43NCwxMy40MUMyMzcuODgsODYuNTMsMjMyLDg4LDIyNi42OSw4OGMtNywwLTEyLjkyLTIuNTQtMTcuODMtNC42M0MyMDEsODAsMTk2LjI0LDc4LDE4OC4zNyw4My4xMUE4LDgsMCwwLDEsMTc3LjMsODAuNzdabTY5LjQsMjIuNDZhOCw4LDAsMCwxLTIuMzMsMTEuMDdDMjM3Ljg4LDExOC41MywyMzIsMTIwLDIyNi42OSwxMjBjLTcsMC0xMi45Mi0yLjU0LTE3LjgzLTQuNjMtNy44Ny0zLjM2LTEyLjYyLTUuMzgtMjAuNDktLjI1YTgsOCwwLDAsMS04Ljc0LTEzLjQxYzE1LTkuNzksMjYuODctNC43NSwzNS41MS0xLjA2LDcuODcsMy4zNiwxMi42Miw1LjM5LDIwLjQ5LjI1QTgsOCwwLDAsMSwyNDYuNywxMDMuMjNaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTQ2LjA4VjQwYTMyLDMyLDAsMCwwLTY0LDBWMTQ2LjA4YTU2LDU2LDAsMSwwLDY0LDBaTTEzNiw1NkgxMDRWNDBhMTYsMTYsMCwwLDEsMzIsMFptNDEuMywyNC43N2E4LDgsMCwwLDEsMi4zMy0xMS4wN2MxNS05Ljc5LDI2Ljg3LTQuNzUsMzUuNTEtMS4wNkMyMjMsNzIsMjI3Ljc2LDc0LDIzNS42Myw2OC44OWE4LDgsMCwwLDEsOC43NCwxMy40MUMyMzcuODgsODYuNTMsMjMyLDg4LDIyNi42OSw4OGMtNywwLTEyLjkyLTIuNTQtMTcuODMtNC42M0MyMDEsODAsMTk2LjI0LDc4LDE4OC4zNyw4My4xMUE4LDgsMCwwLDEsMTc3LjMsODAuNzdabTY5LjQsMjIuNDZhOCw4LDAsMCwxLTIuMzMsMTEuMDdDMjM3Ljg4LDExOC41MywyMzIsMTIwLDIyNi42OSwxMjBjLTcsMC0xMi45Mi0yLjU0LTE3LjgzLTQuNjMtNy44Ny0zLjM2LTEyLjYyLTUuMzgtMjAuNDktLjI1YTgsOCwwLDAsMS04Ljc0LTEzLjQxYzE1LTkuNzksMjYuODctNC43NSwzNS41MS0xLjA2LDcuODcsMy4zNiwxMi42Miw1LjM5LDIwLjQ5LjI1QTgsOCwwLDAsMSwyNDYuNywxMDMuMjNaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTU0LjZWNDhhNiw2LDAsMCwwLTEyLDBWMTU0LjZhMzAsMzAsMCwxLDAsMTIsMFpNMTIwLDIwMmExOCwxOCwwLDEsMSwxOC0xOEExOCwxOCwwLDAsMSwxMjAsMjAyWm0zOC02N1Y0OGEzOCwzOCwwLDAsMC03Niwwdjg3YTYyLDYyLDAsMSwwLDc2LDBabS0zOCw5OWE1MCw1MCwwLDAsMS0yOC41Ny05MUE2LDYsMCwwLDAsOTQsMTM4VjQ4YTI2LDI2LDAsMCwxLDUyLDB2OTBhNiw2LDAsMCwwLDIuNTcsNC45MkE1MCw1MCwwLDAsMSwxMjAsMjM0Wk0xNzksNzkuNjhhNiw2LDAsMCwxLDEuNzUtOC4zYzE0LjE0LTkuMjEsMjQuOTUtNC42MSwzMy42My0uOSw3LjksMy4zNywxMy42LDUuOCwyMi4zNy4wOWE2LDYsMCwxLDEsNi41NSwxMC4wNWMtNi4xMiw0LTExLjYyLDUuMzktMTYuNTksNS4zOS02LjUxLDAtMTIuMTEtMi4zOS0xNy00LjQ5LTcuODktMy4zNy0xMy41OS01LjgtMjIuMzctLjA5QTYsNiwwLDAsMSwxNzksNzkuNjhaTTI0NSwxMDQuMzJhNiw2LDAsMCwxLTEuNzYsOC4zYy02LjEyLDQtMTEuNjIsNS4zOS0xNi41OSw1LjM5LTYuNTEsMC0xMi4xMS0yLjM5LTE3LTQuNDktNy44OS0zLjM3LTEzLjU5LTUuOC0yMi4zNy0uMDlhNiw2LDAsMCwxLTYuNTUtMTAuMDVjMTQuMTQtOS4yMSwyNC45NS00LjYsMzMuNjMtLjksNy45LDMuMzcsMTMuNiw1LjgsMjIuMzcuMDlBNiw2LDAsMCwxLDI0NSwxMDQuMzJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTUzVjQ4YTgsOCwwLDAsMC0xNiwwVjE1M2EzMiwzMiwwLDEsMCwxNiwwWm0tOCw0N2ExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjAsMjAwWm00MC02NlY0OGE0MCw0MCwwLDAsMC04MCwwdjg2YTY0LDY0LDAsMSwwLDgwLDBabS00MCw5OGE0OCw0OCwwLDAsMS0yNy40Mi04Ny40QTgsOCwwLDAsMCw5NiwxMzhWNDhhMjQsMjQsMCwwLDEsNDgsMHY5MGE4LDgsMCwwLDAsMy40Miw2LjU2QTQ4LDQ4LDAsMCwxLDEyMCwyMzJaTTE3Ny4zLDgwLjc3YTgsOCwwLDAsMSwyLjMzLTExLjA3YzE1LTkuNzksMjYuODctNC43NSwzNS41MS0xLjA2QzIyMyw3MiwyMjcuNzYsNzQsMjM1LjYzLDY4Ljg5YTgsOCwwLDAsMSw4Ljc0LDEzLjQxQzIzNy44OCw4Ni41MywyMzIsODgsMjI2LjY5LDg4Yy03LDAtMTIuOTItMi41NC0xNy44My00LjYzQzIwMSw4MCwxOTYuMjQsNzgsMTg4LjM3LDgzLjExQTgsOCwwLDAsMSwxNzcuMyw4MC43N1ptNjkuNCwyMi40NmE4LDgsMCwwLDEtMi4zMywxMS4wN0MyMzcuODgsMTE4LjUzLDIzMiwxMjAsMjI2LjY5LDEyMGMtNywwLTEyLjkyLTIuNTQtMTcuODMtNC42My03Ljg3LTMuMzYtMTIuNjItNS4zOC0yMC40OS0uMjVhOCw4LDAsMCwxLTguNzQtMTMuNDFjMTUtOS43OSwyNi44Ny00Ljc1LDM1LjUxLTEuMDYsNy44NywzLjM2LDEyLjYyLDUuMzksMjAuNDkuMjVBOCw4LDAsMCwxLDI0Ni43LDEwMy4yM1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMTU2LjI5VjQ4YTQsNCwwLDAsMC04LDBWMTU2LjI5YTI4LDI4LDAsMSwwLDgsMFpNMTIwLDIwNGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxMjAsMjA0Wm0zNi02OFY0OGEzNiwzNiwwLDAsMC03Miwwdjg4YTYwLDYwLDAsMSwwLDcyLDBaTTEyMCwyMzZhNTIsNTIsMCwwLDEtMjkuNzEtOTQuNjhBNCw0LDAsMCwwLDkyLDEzOFY0OGEyOCwyOCwwLDAsMSw1NiwwdjkwYTQsNCwwLDAsMCwxLjcxLDMuMjhBNTIsNTIsMCwwLDEsMTIwLDIzNlpNMTgwLjY1LDc4LjU5YTQsNCwwLDAsMSwxLjE3LTUuNTRjMTMuMjQtOC42MywyMy4wNy00LjQzLDMxLjc1LS43Myw4LjE1LDMuNDgsMTQuNTgsNi4yMiwyNC4yNS0uMDdhNCw0LDAsMSwxLDQuMzYsNi43QzIzNi40Myw4Mi43LDIzMS4zMiw4NCwyMjYuNjcsODRjLTYuMDYsMC0xMS4zMy0yLjI1LTE2LjI0LTQuMzQtOC4xNS0zLjQ3LTE0LjU4LTYuMjItMjQuMjUuMDdBNCw0LDAsMCwxLDE4MC42NSw3OC41OVptNjIuNywyNi44MmE0LDQsMCwwLDEtMS4xNyw1LjU0Yy01Ljc1LDMuNzUtMTAuODYsNS4wNy0xNS41MSw1LjA3LTYuMDYsMC0xMS4zMy0yLjI1LTE2LjI0LTQuMzQtOC4xNS0zLjQ3LTE0LjU4LTYuMjItMjQuMjUuMDdhNCw0LDAsMSwxLTQuMzYtNi43YzEzLjI0LTguNjMsMjMuMDctNC40MywzMS43NS0uNzMsOC4xNSwzLjQ4LDE0LjU4LDYuMjIsMjQuMjUtLjA3QTQsNCwwLDAsMSwyNDMuMzUsMTA1LjQxWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ThermometerHot";
export { I as ThermometerHot };
