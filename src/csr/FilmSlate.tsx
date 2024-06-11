/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FilmSlate";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA0SDEwMi4wOUwyMTAsNzUuNTFhOCw4LDAsMCwwLDUuNjgtOS44NGwtOC4xNi0zMGExNS45MywxNS45MywwLDAsMC0xOS40Mi0xMS4xM0wzNS44MSw2NC43NGExNS43NSwxNS43NSwwLDAsMC05LjcsNy40LDE1LjUxLDE1LjUxLDAsMCwwLTEuNTUsMTJMMzIsMTExLjU2YzAsLjE0LDAsLjI5LDAsLjQ0djg4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxMTJBOCw4LDAsMCwwLDIxNiwxMDRaTTE5Mi4xNiw0MGw2LDIyLjA3LTIyLjYyLDZMMTQ3LjQyLDUxLjgzWm0tNjYuNjksMTcuNiwyOC4xMiwxNi4yNC0zNi45NCw5Ljc1TDg4LjUzLDY3LjM3Wm0tNzkuNCw0NC42Mi02LTIyLjA4LDI2LjUtN0w5NC42OSw4OS40Wk0yMDgsMjAwSDQ4VjEyMEgyMDh2ODBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA4SDcxLjI2TDIwOSw3MS42NGE0LDQsMCwwLDAsMi44NC00LjkybC04LjE2LTMwYTExLjkyLDExLjkyLDAsMCwwLTE0LjU0LTguMzFMMzYuODMsNjguNjFhMTEuNzgsMTEuNzgsMCwwLDAtNy4yNiw1LjUzQTExLjU5LDExLjU5LDAsMCwwLDI4LjQxLDgzbDcuNjcsMjguMTlBMy44NywzLjg3LDAsMCwwLDM2LDExMnY4OGExMiwxMiwwLDAsMCwxMiwxMkgyMDhhMTIsMTIsMCwwLDAsMTItMTJWMTEyQTQsNCwwLDAsMCwyMTYsMTA4Wk0xMjYsNTMuMzNsMzgsMjEuOTJMMTE2LjA4LDg3LjksNzguMTIsNjZabTY1LjE2LTE3LjJhNCw0LDAsMCwxLDEtLjEzQTMuODgsMy44OCwwLDAsMSwxOTYsMzguODFsNy4xLDI2LjEyTDE3NSw3Mi4zNSwxMzcsNTAuNDNabS0xNTQuNyw0MmEzLjg2LDMuODYsMCwwLDEsMi4zNy0xLjhsMjguMjctNy40NiwzOCwyMS45MUw0My4yNSwxMDcuMTIsMzYuMTMsODAuOTRBMy42NiwzLjY2LDAsMCwxLDM2LjUsNzguMTRaTTIxMiwyMDBhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00VjExNkgyMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA2SDg2LjY4TDIwOS41Myw3My41N2E2LDYsMCwwLDAsNC4yNi03LjM4bC04LjE2LTMwYTEzLjk0LDEzLjk0LDAsMCwwLTE3LTkuNzJMMzYuMzIsNjYuNjdhMTMuNzcsMTMuNzcsMCwwLDAtOC40OCw2LjQ3LDEzLjU3LDEzLjU3LDAsMCwwLTEuMzYsMTAuNDJMMzQsMTExLjM0YzAsLjIyLDAsLjQ0LDAsLjY2djg4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFYxMTJBNiw2LDAsMCwwLDIxNiwxMDZaTTEyNS43NSw1NS40OGwzMywxOS4wNy00Mi40MywxMS4yLTMzLTE5LjA3Wm02Ni0xNy40MWExLjkyLDEuOTIsMCwwLDEsMi4zNCwxLjI2bDYuNTcsMjQuMThMMTc1LjI2LDcwLjJsLTMzLTE5LjA3Wk0zOC4yMyw3OS4xNGExLjg1LDEuODUsMCwwLDEsMS4xNS0uODdMNjYuODYsNzFsMzMsMTkuMDhMNDQuNjYsMTA0LjY4bC02LjYtMjQuMjdBMS42MywxLjYzLDAsMCwxLDM4LjIzLDc5LjE0Wk0yMTAsMjAwYTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlYxMThIMjEwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTAwSDEzMi45Mmw3OC4xNC0yMC42M2ExMiwxMiwwLDAsMCw4LjUyLTE0Ljc1bC04LjE2LTMwYTE5Ljk0LDE5Ljk0LDAsMCwwLTI0LjMtMTMuOTVMMzQuNzksNjAuODdhMTkuNzQsMTkuNzQsMCwwLDAtMTIuMTQsOS4yNywxOS40OCwxOS40OCwwLDAsMC0xLjk1LDE1TDI4LDExMnY4OGEyMCwyMCwwLDAsMCwyMCwyMEgyMDhhMjAsMjAsMCwwLDAsMjAtMjBWMTEyQTEyLDEyLDAsMCwwLDIxNiwxMDBaTTEyNC44OSw2MS45MWwxOC4yOSwxMC41Ni0yNS45NSw2Ljg1TDk4Ljk0LDY4Ljc2Wm02NC40NS0xNywzLjkxLDE0LjM1LTE3LjEzLDQuNTJMMTU3LjgzLDUzLjIxWk02Niw3Ny40Niw4NC4yOSw4OGwtMzUuNCw5LjM1TDQ1LDgzWk0yMDQsMTk2SDUyVjEyNEgyMDRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA0SDEwMi4wOUwyMTAsNzUuNTFhOCw4LDAsMCwwLDUuNjgtOS44NGwtOC4xNi0zMGExNS45MywxNS45MywwLDAsMC0xOS40Mi0xMS4xM0wzNS44MSw2NC43NGExNS43NSwxNS43NSwwLDAsMC05LjcsNy40LDE1LjUxLDE1LjUxLDAsMCwwLTEuNTUsMTJMMzIsMTExLjU2YzAsLjE0LDAsLjI5LDAsLjQ0djg4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxMTJBOCw4LDAsMCwwLDIxNiwxMDRaTTE5Mi4xNiw0MGw2LDIyLjA3TDE2NC41Nyw3MSwxMzYuNDQsNTQuNzJaTTc3LjU1LDcwLjI3bDI4LjEyLDE2LjI0LTU5LjYsMTUuNzMtNi0yMi4wOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02Ny43MSw2NC41OWw0Ny43OSwyNy42TDQwLjQzLDExMiwzMi4yNyw4MmE3Ljc2LDcuNzYsMCwwLDEsNS41OC05LjUyWk0xOTkuODQsMzcuNzZhNy45LDcuOSwwLDAsMC05LjY2LTUuNDlMMTI2LjYxLDQ5LjA1LDE3NC40LDc2LjY0LDIwOCw2Ny43N1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsMTA0SDEwMi4wOUwyMTAsNzUuNTFhOCw4LDAsMCwwLDUuNjgtOS44NGwtOC4xNi0zMGExNS45MywxNS45MywwLDAsMC0xOS40Mi0xMS4xM0wzNS44MSw2NC43NGExNS43NSwxNS43NSwwLDAsMC05LjcsNy40LDE1LjUxLDE1LjUxLDAsMCwwLTEuNTUsMTJMMzIsMTExLjU2YzAsLjE0LDAsLjI5LDAsLjQ0djg4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxMTJBOCw4LDAsMCwwLDIxNiwxMDRaTTE5Mi4xNiw0MGw2LDIyLjA3LTIyLjYyLDZMMTQ3LjQyLDUxLjgzWm0tNjYuNjksMTcuNiwyOC4xMiwxNi4yNC0zNi45NCw5Ljc1TDg4LjUzLDY3LjM3Wm0tNzkuNCw0NC42Mi02LTIyLjA4LDI2LjUtN0w5NC42OSw4OS40Wk0yMDgsMjAwSDQ4VjEyMEgyMDh2ODBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FilmSlate";
export { I as FilmSlate };
