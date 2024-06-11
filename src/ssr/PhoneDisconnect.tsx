/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PhoneDisconnect";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuNTksOTAuMTNoMEMxNzUuNDQsMzQsODAuNTYsMzQsMjQuNDEsOTAuMTNjLTIwLDIwLTIxLjkyLDQ5LjQ5LTQuNjksNzEuNzFBMTYsMTYsMCwwLDAsMzIuMzUsMTY4YTE1LjgsMTUuOCwwLDAsMCw1Ljc1LTEuMDhsNDktMTcuMzcuMjktLjExYTE2LDE2LDAsMCwwLDkuNzUtMTEuNzNsNS45LTI5LjUyYTc2LjUyLDc2LjUyLDAsMCwxLDQ5LjY4LS4xMWgwbDYuMjEsMjkuNzVhMTYsMTYsMCwwLDAsOS43MiwxMS41OWwuMjkuMTEsNDksMTcuMzlhMTYsMTYsMCwwLDAsMTguMzgtNS4wNkMyNTMuNTEsMTM5LjYyLDI1MS41OCwxMTAuMTMsMjMxLjU5LDkwLjEzWk0yMjMuNjcsMTUybC0uMy0uMTItNDguODItMTcuMzMtNi4yMS0yOS43NEExNiwxNiwwLDAsMCwxNTgsOTNhOTIuNTYsOTIuNTYsMCwwLDAtNjAuMzQuMTMsMTYsMTYsMCwwLDAtMTAuMzIsMTJsLTUuOSwyOS41MUwzMi42MywxNTEuODZjLS4xLDAtLjE3LjEzLS4yNy4xNy0xMi4zMy0xNS45MS0xMS0zNi4yMywzLjM2LTUwLjU4LDI1LTI1LDU4LjY1LTM3LjUzLDkyLjI4LTM3LjUzczY3LjI3LDEyLjUxLDkyLjI4LDM3LjUzQzIzNC42MSwxMTUuOCwyMzYsMTM2LjEyLDIyMy42NywxNTJabS4zMiw0OGE4LDgsMCwwLDEtOCw4SDQwYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDIwMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNzksOTNDMTc0LjE1LDM4LjM0LDgxLjg1LDM4LjM0LDI3LjIxLDkzLDguNjksMTExLjUsNi45LDEzOC44MSwyMi44NSwxNTkuMzlhMTIsMTIsMCwwLDAsMTMuODMsMy43N2w0OS0xNy4zOS4xNS0uMDZhMTIsMTIsMCwwLDAsNy4zMS04Ljc5bDUuOS0yOS41MWEzLjkzLDMuOTMsMCwwLDEsMi41MS0zLDgwLjU5LDgwLjU5LDAsMCwxLDUyLjUtLjEyLDMuOTQsMy45NCwwLDAsMSwyLjUyLDIuOTRMMTYyLjgxLDEzN2ExMiwxMiwwLDAsMCw3LjI5LDguNjlsLjE1LjA2LDQ5LjA3LDE3LjQxYTEyLDEyLDAsMCwwLDEzLjgzLTMuNzdDMjQ5LjEsMTM4LjgxLDI0Ny4zMSwxMTEuNSwyMjguNzksOTNabS0yLDYxLjUxYTQsNCwwLDAsMS00LjYxLDEuMjFsLS4xNS0uMDZMMTczLDEzOC4yNGE0LDQsMCwwLDEtMi4zNy0yLjg3bC02LjIxLTI5Ljc1YTEyLDEyLDAsMCwwLTcuNzUtOC44Nyw4OC42Myw4OC42MywwLDAsMC01Ny43NC4xNCwxMiwxMiwwLDAsMC03LjcyLDlsLTUuOSwyOS41MUE0LDQsMCwwLDEsODMsMTM4LjI2bC00OSwxNy4zOC0uMTUuMDZhNCw0LDAsMCwxLTQuNjEtMS4yMWMtMTMuNDItMTcuMy0xMS45LTQwLjI2LDMuNjktNTUuODVDNTguNjUsNzIuODUsOTMuMzMsNjAsMTI4LDYwczY5LjM1LDEyLjg5LDk1LjEzLDM4LjY4QzIzOC43MSwxMTQuMjMsMjQwLjI0LDEzNy4xOSwyMjYuODIsMTU0LjQ5Wk0yMjAsMjAwYTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCwyMDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTksOTEuNTVoMGMtNTUuMzktNTUuNC0xNDktNTUuNC0yMDQuMzgsMEM2LjU2LDExMC44Miw0LjcsMTM5LjIyLDIxLjI5LDE2MC42MUExNCwxNCwwLDAsMCwzNy4zOSwxNjVsNDktMTcuMzguMjItLjA5YTEzLjkzLDEzLjkzLDAsMCwwLDguNTMtMTAuMjVsNS45LTI5LjUyYTEuOTMsMS45MywwLDAsMSwxLjIxLTEuNDcsNzguNTMsNzguNTMsMCwwLDEsNTEuMTgtLjExLDEuOTMsMS45MywwLDAsMSwxLjIyLDEuNDVsNi4yMSwyOS43NWExNCwxNCwwLDAsMCw4LjUsMTAuMTRsLjIzLjA4LDQ5LDE3LjRhMTQsMTQsMCwwLDAsMTYuMS00LjQyQzI1MS4zLDEzOS4yMiwyNDkuNDQsMTEwLjgyLDIzMC4xOSw5MS41NVptLTUsNjEuNzFhMiwyLDAsMCwxLTIuMjkuNThsLS4yMi0uMDktNDktMTcuMzhBMiwyLDAsMCwxLDE3Mi42LDEzNWwtNi4yMi0yOS43NGExNCwxNCwwLDAsMC05LjA2LTEwLjM1LDkwLjUzLDkwLjUzLDAsMCwwLTU5LC4xMywxNCwxNCwwLDAsMC05LDEwLjQ1TDgzLjM3LDEzNWEyLDIsMCwwLDEtMS4xNSwxLjQ0TDMzLjI4LDE1My43NWwtLjIyLjA5YTIsMiwwLDAsMS0yLjI5LS41OGMtMTMtMTYuNzQtMTEuNTYtMzguMTIsMy41My01My4yMiwyNS4zOS0yNS40LDU5LjU1LTM4LjEsOTMuNy0zOC4xczY4LjMxLDEyLjcsOTMuNywzOC4xQzIzNi43OSwxMTUuMTQsMjM4LjIxLDEzNi41MiwyMjUuMjMsMTUzLjI2Wk0yMjIsMjAwYTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMjAwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuMzksODcuMjljLTU3LjY3LTU3LjcyLTE1NS4xMS01Ny43Mi0yMTIuNzgsMC0yMS40NSwyMS40Ny0yMy41Miw1My4xMy01LDc3YTIwLDIwLDAsMCwwLDIyLjkyLDYuMzdMODguNCwxNTMuMjlsLjQ1LS4xNkEyMCwyMCwwLDAsMCwxMDEsMTM4LjQ3bDUuNDQtMjcuMjRhNzIuNDgsNzIuNDgsMCwwLDEsNDIuNzYtLjA5TDE1NSwxMzguNjJhMjAsMjAsMCwwLDAsMTIuMTQsMTQuNDlsLjQ1LjE3LDQ4Ljk0LDE3LjM3YTIwLDIwLDAsMCwwLDIyLjkxLTYuMzdDMjU3LjkxLDE0MC40MiwyNTUuODQsMTA4Ljc2LDIzNC4zOSw4Ny4yOVptLTEyLjIzLDU5LjlMMTc4LDEzMS41LDE3Mi4yNCwxMDRhMjAsMjAsMCwwLDAtMTMtMTQuOCw5Ni40OSw5Ni40OSwwLDAsMC02Mi45NC4xNEEyMCwyMCwwLDAsMCw4My40LDEwNC4yNEw3OCwxMzEuNTMsMzMuODQsMTQ3LjE5Yy05LjE2LTEzLjg1LTcuNDEtMzAuNzcsNC43My00Mi45MkM2Mi44MSw4MCw5NS40MSw2Ny44OCwxMjgsNjcuODhTMTkzLjE5LDgwLDIxNy40MywxMDQuMjdDMjI5LjU3LDExNi40MiwyMzEuMzIsMTMzLjM1LDIyMi4xNiwxNDcuMTlaTTIyOCwyMDBhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEsMC0yNEgyMTZBMTIsMTIsMCwwLDEsMjI4LDIwMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjgsMTYxLjg0YTE2LDE2LDAsMCwxLTE4LjM4LDUuMDZsLTQ5LTE3LjM5LS4yOS0uMTFhMTYsMTYsMCwwLDEtOS43Mi0xMS41OWwtNi4yMS0yOS43NWgwYTc2LjUyLDc2LjUyLDAsMCwwLTQ5LjY4LjExbC01LjksMjkuNTJhMTYsMTYsMCwwLDEtOS43NSwxMS43M2wtLjI5LjExLTQ5LDE3LjM3QTE1LjgsMTUuOCwwLDAsMSwzMi4zNSwxNjhhMTYsMTYsMCwwLDEtMTIuNjMtNi4xNGMtMTcuMjMtMjIuMjItMTUuMy01MS43MSw0LjY5LTcxLjcxLDU2LjE1LTU2LjE3LDE1MS01Ni4xNywyMDcuMTgsMGgwQzI1MS41OCwxMTAuMTMsMjUzLjUxLDEzOS42MiwyMzYuMjgsMTYxLjg0Wk0yMTYsMTkySDQwYTgsOCwwLDAsMCwwLDE2SDIxNmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTU3YTgsOCwwLDAsMS05LjI2LDIuNDdMMTcxLjU4LDE0MmE4LDgsMCwwLDEtNC44Ni01LjhsLTYuMjEtMjkuNzRhNy45NCw3Ljk0LDAsMCwwLTUuMTQtNS45LDg0LjM5LDg0LjM5LDAsMCwwLTU1LjEuMTMsNy45Myw3LjkzLDAsMCwwLTUuMTIsNmwtNS45LDI5LjUxQTgsOCwwLDAsMSw4NC4zOCwxNDJMMzUuMjksMTU5LjQyQTgsOCwwLDAsMSwyNiwxNTdjLTE0LjYtMTguODMtMTMuMjYtNDMuODMsNC02MS4xMiw1My4xMS01My4xMSwxNDIuNzctNTMuMTEsMTk1Ljg4LDBDMjQzLjIzLDExMy4xMiwyNDQuNTcsMTM4LjEyLDIzMCwxNTdaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMxLjU5LDkwLjEzaDBDMTc1LjQ0LDM0LDgwLjU2LDM0LDI0LjQxLDkwLjEzYy0yMCwyMC0yMS45Miw0OS40OS00LjY5LDcxLjcxQTE2LDE2LDAsMCwwLDMyLjM1LDE2OGExNS44LDE1LjgsMCwwLDAsNS43NS0xLjA4bDQ5LTE3LjM3LjI5LS4xMWExNiwxNiwwLDAsMCw5Ljc1LTExLjczbDUuOS0yOS41MmE3Ni41Miw3Ni41MiwwLDAsMSw0OS42OC0uMTFoMGw2LjIxLDI5Ljc1YTE2LDE2LDAsMCwwLDkuNzIsMTEuNTlsLjI5LjExLDQ5LDE3LjM5YTE2LDE2LDAsMCwwLDE4LjM4LTUuMDZDMjUzLjUxLDEzOS42MiwyNTEuNTgsMTEwLjEzLDIzMS41OSw5MC4xM1pNMjIzLjY3LDE1MmwtLjMtLjEyLTQ4LjgyLTE3LjMzLTYuMjEtMjkuNzRBMTYsMTYsMCwwLDAsMTU4LDkzYTkyLjU2LDkyLjU2LDAsMCwwLTYwLjM0LjEzLDE2LDE2LDAsMCwwLTEwLjMyLDEybC01LjksMjkuNTFMMzIuNjMsMTUxLjg2Yy0uMSwwLS4xNy4xMy0uMjcuMTctMTIuMzMtMTUuOTEtMTEtMzYuMjMsMy4zNi01MC41OCwyNS0yNSw1OC42NS0zNy41Myw5Mi4yOC0zNy41M3M2Ny4yNywxMi41MSw5Mi4yOCwzNy41M0MyMzQuNjEsMTE1LjgsMjM2LDEzNi4xMiwyMjMuNjcsMTUyWm0uMzIsNDhhOCw4LDAsMCwxLTgsOEg0MGE4LDgsMCwwLDEsMC0xNkgyMTZBOCw4LDAsMCwxLDIyNCwyMDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PhoneDisconnect";
export { I as PhoneDisconnect };
