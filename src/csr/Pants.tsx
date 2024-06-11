/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Pants";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuODgsMjE0bC0yMi0xNzZBMTYsMTYsMCwwLDAsMTg2LDI0SDcwQTE2LDE2LDAsMCwwLDU0LjEyLDM4bC0yMiwxNzZBMTYsMTYsMCwwLDAsNDgsMjMySDg4LjY5YTE2LDE2LDAsMCwwLDE1LjUxLTEyLjA2bDIzLjgtOTIsMjMuNzksOTEuOTRBMTYsMTYsMCwwLDAsMTY3LjMxLDIzMkgyMDhhMTYsMTYsMCwwLDAsMTUuODgtMThaTTE5Mi45LDk1LjJBMzIuMTMsMzIuMTMsMCwwLDEsMTY5LDcyaDIxWk0xODYsNDBsMiwxNkg2OGwyLTE2Wk02Niw3Mkg4N0EzMi4xMywzMi4xMywwLDAsMSw2My4xLDk1LjJaTTg4LjY5LDIxNkg0OEw2MSwxMTEuNzNBNDguMDgsNDguMDgsMCwwLDAsMTAzLjMyLDcySDEyMFY5NVptNzguNi0uMDZMMTM2LDk1VjcyaDE2LjY4QTQ4LjA4LDQ4LjA4LDAsMCwwLDE5NSwxMTEuNzNMMjA4LDIxNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuOTEsMjE0LjUxbC0yMi0xNzZBMTIsMTIsMCwwLDAsMTg2LDI4SDcwQTEyLDEyLDAsMCwwLDU4LjA5LDM4LjUxbC0yMiwxNzZBMTIsMTIsMCwwLDAsNDgsMjI4SDg4LjY5YTEyLDEyLDAsMCwwLDExLjY0LTkuMDZMMTI4LDExMmwyNy42NywxMDYuOTRBMTIsMTIsMCwwLDAsMTY3LjMxLDIyOEgyMDhhMTIsMTIsMCwwLDAsMTEuOTEtMTMuNDlaTTE5Ny41Miw5OS45QTM2LDM2LDAsMCwxLDE2NC4yMyw2OGgyOS4zWk03MCwzNkgxODZhNCw0LDAsMCwxLDQsMy41TDE5Mi41Myw2MEg2My40N0w2NiwzOS41QTQsNCwwLDAsMSw3MCwzNlpNNjIuNDcsNjhoMjkuM0EzNiwzNiwwLDAsMSw1OC40OCw5OS45Wm0zMC4xLDE0OWE0LDQsMCwwLDEtMy44OCwzSDQ4YTQsNCwwLDAsMS00LTQuNUw1Ny40NywxMDhBNDQuMDUsNDQuMDUsMCwwLDAsOTkuODEsNjhIMTI0Vjk1LjQ5Wk0yMTEsMjE4LjY1YTQsNCwwLDAsMS0zLDEuMzVIMTY3LjMxYTQsNCwwLDAsMS0zLjg5LTMuMDZMMTMyLDk1LjQ5VjY4aDI0LjE5YTQ0LjA1LDQ0LjA1LDAsMCwwLDQyLjM0LDQwTDIxMiwyMTUuNUE0LDQsMCwwLDEsMjExLDIxOC42NVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuODksMjE0LjI2bC0yMi0xNzZBMTQsMTQsMCwwLDAsMTg2LDI2SDcwQTE0LDE0LDAsMCwwLDU2LjExLDM4LjI2bC0yMiwxNzZBMTQsMTQsMCwwLDAsNDgsMjMwSDg4LjY5YTE0LDE0LDAsMCwwLDEzLjU3LTEwLjU2TDEyOCwxMjBsMjUuNzMsOTkuNDRBMTQsMTQsMCwwLDAsMTY3LjMxLDIzMEgyMDhhMTQsMTQsMCwwLDAsMTMuODktMTUuNzRaTTE5NS4yMiw5Ny42NkEzNC4wNywzNC4wNywwLDAsMSwxNjYuNTQsNzBoMjUuMjNaTTcwLDM4SDE4NmEyLDIsMCwwLDEsMiwxLjc1TDE5MC4yNyw1OEg2NS43M0w2OCwzOS43NUEyLDIsMCwwLDEsNzAsMzhaTTY0LjIzLDcwSDg5LjQ2QTM0LjA3LDM0LjA3LDAsMCwxLDYwLjc4LDk3LjY2Wm0yNi40LDE0Ni40OUEyLDIsMCwwLDEsODguNjksMjE4SDQ4YTIsMiwwLDAsMS0yLTIuMjVMNTkuMjUsMTA5Ljg3QTQ2LjA3LDQ2LjA3LDAsMCwwLDEwMS42LDcwSDEyMlY5NS4yNFptMTE4Ljg3LjgzYTIsMiwwLDAsMS0xLjUuNjhIMTY3LjMxYTIsMiwwLDAsMS0xLjk1LTEuNTZMMTM0LDk1LjI0VjcwaDIwLjRhNDYuMDcsNDYuMDcsMCwwLDAsNDIuMzUsMzkuODdMMjEwLDIxNS43NUEyLDIsMCwwLDEsMjA5LjUsMjE3LjMyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuODUsMjEzLjUybC0yMi0xNzZBMjAsMjAsMCwwLDAsMTg2LDIwSDcwQTIwLDIwLDAsMCwwLDUwLjE1LDM3LjUybC0yMiwxNzZBMjAsMjAsMCwwLDAsNDgsMjM2SDg4LjY5QTE5Ljk0LDE5Ljk0LDAsMCwwLDEwOC4wNywyMjFsMTkuOTMtNzcsMTkuOTEsNzYuOTRBMjAsMjAsMCwwLDAsMTY3LjMxLDIzNkgyMDhhMjAsMjAsMCwwLDAsMTkuODUtMjIuNDhaTTE4Mi40Nyw0NGwyLDE2SDcxLjUzbDItMTZaTTg1LjYsMjEySDUyLjUzbDExLjItODkuNkE0NC4xMSw0NC4xMSwwLDAsMCw5NS44MSw4NEgxMTZWOTQuNDdabTg0LjgxLDBMMTQwLDk0LjQ3Vjg0aDIwLjE5YTQ0LjA5LDQ0LjA5LDAsMCwwLDMyLjA4LDM4LjM5TDIwMy40NywyMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01My40NCw0My41LDU0LjEyLDM4QTE2LDE2LDAsMCwxLDcwLDI0SDE4NmExNiwxNiwwLDAsMSwxNS44OCwxNGwuNjgsNS40OWE0LDQsMCwwLDEtNCw0LjVINTcuNDFBNCw0LDAsMCwxLDUzLjQ0LDQzLjVaTTE2OSw2NGEzMi4wNiwzMi4wNiwwLDAsMCwzMSwyNGgzLjU5YTQsNCwwLDAsMCw0LTQuNWwtMi0xNmE0LDQsMCwwLDAtNC0zLjVaTTUyLjQxLDg4SDU2QTMyLjA2LDMyLjA2LDAsMCwwLDg3LDY0SDU0LjQxYTQsNCwwLDAsMC00LDMuNWwtMiwxNkE0LDQsMCwwLDAsNTIuNDEsODhaTTIyMy44OCwyMTQsMjEwLjU2LDEwNy41YTQsNCwwLDAsMC00LTMuNUgyMDBhNDguMDcsNDguMDcsMCwwLDEtNDcuMzItNDBIMTM2djM5LjczYTguMTgsOC4xOCwwLDAsMS03LjQ3LDguMjUsOCw4LDAsMCwxLTguNTMtOFY2NEgxMDMuMzJBNDguMDcsNDguMDcsMCwwLDEsNTYsMTA0SDQ5LjQxYTQsNCwwLDAsMC00LDMuNUwzMi4xMiwyMTRhMTYsMTYsMCwwLDAsNi43MSwxNS4wOUExNi41NiwxNi41NiwwLDAsMCw0OC4zOSwyMzJoNDAuM2ExNiwxNiwwLDAsMCwxNS41MS0xMi4wNmwyMy44LTkyLDIzLjc5LDkxLjk0QTE2LDE2LDAsMCwwLDE2Ny4zMSwyMzJoNDAuM2ExNi41NCwxNi41NCwwLDAsMCw5LjU2LTIuODlBMTYsMTYsMCwwLDAsMjIzLjg4LDIxNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuMDUsMTA0Yy0uNjgsMC0xLjM2LDAtMi4wNSwwYTQwLDQwLDAsMCwxLTQwLTQwSDk2YTQwLDQwLDAsMCwxLTQwLDQwYy0uNjksMC0xLjM3LDAtMiwwTDYyLjA2LDM5QTgsOCwwLDAsMSw3MCwzMkgxODZhOCw4LDAsMCwxLDcuOTQsN1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjMuODgsMjE0bC0yMi0xNzZBMTYsMTYsMCwwLDAsMTg2LDI0SDcwQTE2LDE2LDAsMCwwLDU0LjEyLDM4bC0yMiwxNzZBMTYsMTYsMCwwLDAsNDgsMjMySDg4LjY5YTE2LDE2LDAsMCwwLDE1LjUxLTEyLjA2bDIzLjgtOTIsMjMuNzksOTEuOTRBMTYsMTYsMCwwLDAsMTY3LjMxLDIzMkgyMDhhMTYsMTYsMCwwLDAsMTUuODgtMThaTTE5Mi45LDk1LjJBMzIuMTMsMzIuMTMsMCwwLDEsMTY5LDcyaDIxWk0xODYsNDBsMiwxNkg2OGwyLTE2Wk02Niw3Mkg4N0EzMi4xMywzMi4xMywwLDAsMSw2My4xLDk1LjJaTTg4LjY5LDIxNkg0OEw2MSwxMTEuNzNBNDguMDgsNDguMDgsMCwwLDAsMTAzLjMyLDcySDEyMFY5NVptNzguNi0uMDZMMTM2LDk1VjcyaDE2LjY4QTQ4LjA4LDQ4LjA4LDAsMCwwLDE5NSwxMTEuNzNMMjA4LDIxNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Pants";
export { I as Pants };
