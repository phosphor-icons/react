/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FolderSimpleStar";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00NCw2OFYxOTZoNjRhMTIsMTIsMCwwLDEsMCwyNEg0MGEyMCwyMCwwLDAsMS0yMC0yMFY2NEEyMCwyMCwwLDAsMSw0MCw0NEg5My4zM2EyMC4xMiwyMC4xMiwwLDAsMSwxMiw0TDEzMiw2OGg4NGEyMCwyMCwwLDAsMSwyMCwyMHYyMGExMiwxMiwwLDAsMS0yNCwwVjkySDEyOGExMiwxMiwwLDAsMS03LjItMi40TDkyLDY4Wk0yMzkuNjQsMTcwLjg3bC0yMC41OCwxNyw2LjI1LDI1LjI2YTEyLDEyLDAsMCwxLTE3LjczLDEzLjIyTDE4NCwyMTIuNDZsLTIzLjU4LDEzLjg4YTEyLDEyLDAsMCwxLTE3LjczLTEzLjIybDYuMjUtMjUuMjYtMjAuNTgtMTdhMTIsMTIsMCwwLDEsNi43Mi0yMS4yMmwyNy40Mi0yLjEyTDE3MywxMjMuMjRhMTIsMTIsMCwwLDEsMjIsMGwxMC40OCwyNC4yOSwyNy40MiwyLjEyYTEyLDEyLDAsMCwxLDYuNzIsMjEuMjJabS0zOC4yLjQyLTUtLjM5YTEyLDEyLDAsMCwxLTEwLjA5LTcuMjFsLTIuMzMtNS40LTIuMzMsNS40YTEyLDEyLDAsMCwxLTEwLjEsNy4yMWwtNSwuMzksMy40OCwyLjg3YTEyLDEyLDAsMCwxLDQsMTIuMTNsLTEuMjEsNC44OSw1LjA3LTNhMTIsMTIsMCwwLDEsMTIuMTgsMGw1LjA3LDNMMTk0LDE4Ni4yOWExMiwxMiwwLDAsMSw0LTEyLjEzWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNiwxODMuNDEsMjEzLjY3LDIxNiwxODQsMTk4LjU0LDE1NC4zMywyMTZsOC4wNy0zMi41OUwxMzYsMTYxLjYxbDM0LjY1LTIuNjdMMTg0LDEyOGwxMy4zNSwzMC45NEwyMzIsMTYxLjYxWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyMDhhOCw4LDAsMCwxLTgsOEg0MGExNiwxNiwwLDAsMS0xNi0xNlY2NEExNiwxNiwwLDAsMSw0MCw0OEg5My4zM2ExNi4xMiwxNi4xMiwwLDAsMSw5LjYsMy4yTDEzMC42Nyw3MkgyMTZhMTYsMTYsMCwwLDEsMTYsMTZ2MzJhOCw4LDAsMCwxLTE2LDBWODhIMTI4YTgsOCwwLDAsMS00LjgtMS42TDkzLjMzLDY0SDQwVjIwMGg4MEE4LDgsMCwwLDEsMTI4LDIwOFptMTA5LjA5LTQwLjIyLTIyLjUxLDE4LjU5LDYuODUsMjcuNzFhOCw4LDAsMCwxLTExLjgyLDguODFMMTg0LDIwNy44MmwtMjUuNjEsMTUuMDdhOCw4LDAsMCwxLTExLjgyLTguODFsNi44NS0yNy43MS0yMi41MS0xOC41OWE4LDgsMCwwLDEsNC40Ny0xNC4xNGwyOS44NC0yLjMxLDExLjQzLTI2LjVhOCw4LDAsMCwxLDE0LjcsMGwxMS40MywyNi41LDI5Ljg0LDIuMzFhOCw4LDAsMCwxLDQuNDcsMTQuMTRabS0yNS40Ny4yOC0xNC44OS0xLjE1YTgsOCwwLDAsMS02LjczLTQuOGwtNi0xMy45Mi02LDEzLjkyYTgsOCwwLDAsMS02LjczLDQuOGwtMTQuODksMS4xNSwxMS4xMSw5LjE4YTgsOCwwLDAsMSwyLjY4LDguMDlsLTMuNSwxNC4xMiwxMy4yNy03LjgxYTgsOCwwLDAsMSw4LjEyLDBsMTMuMjcsNy44MS0zLjUtMTQuMTJhOCw4LDAsMCwxLDIuNjgtOC4wOVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjA4YTgsOCwwLDAsMS04LDhINDBhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsNDAsNDhIOTMuMzNhMTYuMTIsMTYuMTIsMCwwLDEsOS42LDMuMkwxMzAuNjcsNzJIMjE2YTE2LDE2LDAsMCwxLDE2LDE2djMyYTgsOCwwLDAsMS0xNiwwVjg4SDEyOGE4LDgsMCwwLDEtNC44LTEuNkw5My4zMyw2NEg0MFYyMDBoODBBOCw4LDAsMCwxLDEyOCwyMDhabTExMS42My00OC44YTgsOCwwLDAsMC03LTUuNTZsLTI5Ljg0LTIuMzEtMTEuNDMtMjYuNWE4LDgsMCwwLDAtMTQuNywwbC0xMS40MywyNi41LTI5Ljg0LDIuMzFhOCw4LDAsMCwwLTQuNDcsMTQuMTRsMjIuNTEsMTguNTktNi44NSwyNy43MWE4LDgsMCwwLDAsMTEuODIsOC44MUwxODQsMjA3LjgybDI1LjYxLDE1LjA3YTgsOCwwLDAsMCwxMS44Mi04LjgxbC02Ljg1LTI3LjcxLDIyLjUxLTE4LjU5QTgsOCwwLDAsMCwyMzkuNjMsMTU5LjJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zOCw2NFYyMDBhMiwyLDAsMCwwLDIsMmg4MGE2LDYsMCwwLDEsMCwxMkg0MGExNCwxNCwwLDAsMS0xNC0xNFY2NEExNCwxNCwwLDAsMSw0MCw1MEg5My4zM2ExNC4wNiwxNC4wNiwwLDAsMSw4LjQsMi44TDEzMCw3NGg4NmExNCwxNCwwLDAsMSwxNCwxNHYzMmE2LDYsMCwwLDEtMTIsMFY4OGEyLDIsMCwwLDAtMi0ySDEyOGE2LDYsMCwwLDEtMy42LTEuMkw5NC41Myw2Mi40YTIsMiwwLDAsMC0xLjItLjRINDBBMiwyLDAsMCwwLDM4LDY0Wk0yMzUuODIsMTY2LjI0bC0yMy40OSwxOS4zOSw3LjE2LDI4LjkzYTYsNiwwLDAsMS04Ljg3LDYuNjFMMTg0LDIwNS41bC0yNi42MiwxNS42N2E2LDYsMCwwLDEtOC44Ny02LjYxbDcuMTYtMjguOTMtMjMuNDktMTkuMzlhNiw2LDAsMCwxLDMuMzYtMTAuNjFsMzEtMi40LDExLjkxLTI3LjYxYTYsNiwwLDAsMSwxMSwwbDExLjkxLDI3LjYxLDMxLDIuNGE2LDYsMCwwLDEsMy4zNiwxMC42MVptLTE5LjEuMjEtMTkuODMtMS41M2E2LDYsMCwwLDEtNS0zLjYxTDE4NCwxNDMuMTRsLTcuODQsMTguMTdhNiw2LDAsMCwxLTUsMy42MWwtMTkuODMsMS41MywxNC45NCwxMi4zM2E2LDYsMCwwLDEsMiw2LjA3bC00LjYzLDE4Ljc0TDE4MSwxOTMuMzZhNiw2LDAsMCwxLDYuMDgsMGwxNy4zNywxMC4yMy00LjY0LTE4Ljc0YTYsNiwwLDAsMSwyLTYuMDdaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjA4YTgsOCwwLDAsMS04LDhINDBhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsNDAsNDhIOTMuMzNhMTYuMTIsMTYuMTIsMCwwLDEsOS42LDMuMkwxMzAuNjcsNzJIMjE2YTE2LDE2LDAsMCwxLDE2LDE2djMyYTgsOCwwLDAsMS0xNiwwVjg4SDEyOGE4LDgsMCwwLDEtNC44LTEuNkw5My4zMyw2NEg0MFYyMDBoODBBOCw4LDAsMCwxLDEyOCwyMDhabTEwOS4wOS00MC4yMi0yMi41MSwxOC41OSw2Ljg1LDI3LjcxYTgsOCwwLDAsMS0xMS44Miw4LjgxTDE4NCwyMDcuODJsLTI1LjYxLDE1LjA3YTgsOCwwLDAsMS0xMS44Mi04LjgxbDYuODUtMjcuNzEtMjIuNTEtMTguNTlhOCw4LDAsMCwxLDQuNDctMTQuMTRsMjkuODQtMi4zMSwxMS40My0yNi41YTgsOCwwLDAsMSwxNC43LDBsMTEuNDMsMjYuNSwyOS44NCwyLjMxYTgsOCwwLDAsMSw0LjQ3LDE0LjE0Wm0tMjUuNDcuMjgtMTQuODktMS4xNWE4LDgsMCwwLDEtNi43My00LjhsLTYtMTMuOTItNiwxMy45MmE4LDgsMCwwLDEtNi43Myw0LjhsLTE0Ljg5LDEuMTUsMTEuMTEsOS4xOGE4LDgsMCwwLDEsMi42OCw4LjA5bC0zLjUsMTQuMTIsMTMuMjctNy44MWE4LDgsMCwwLDEsOC4xMiwwbDEzLjI3LDcuODEtMy41LTE0LjEyYTgsOCwwLDAsMSwyLjY4LTguMDlaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODRIMTI4YTQsNCwwLDAsMS0yLjQtLjhMOTUuNzMsNjAuOGE0LDQsMCwwLDAtMi40LS44SDQwYTQsNCwwLDAsMC00LDRWMjAwYTQsNCwwLDAsMCw0LDRoODBhNCw0LDAsMCwxLDAsOEg0MGExMiwxMiwwLDAsMS0xMi0xMlY2NEExMiwxMiwwLDAsMSw0MCw1Mkg5My4zM2ExMi4wNSwxMi4wNSwwLDAsMSw3LjIsMi40TDEyOS4zMyw3NkgyMTZhMTIsMTIsMCwwLDEsMTIsMTJ2MzJhNCw0LDAsMCwxLTgsMFY4OEE0LDQsMCwwLDAsMjE2LDg0Wm0xOC41NSw4MC43LTI0LjQ2LDIwLjE5TDIxNy41NSwyMTVhNCw0LDAsMCwxLTEuNDksNC4xNyw0LjA1LDQuMDUsMCwwLDEtMi4zOS43OSw0LDQsMCwwLDEtMi0uNTVMMTg0LDIwMy4xOGwtMjcuNjQsMTYuMjdhNCw0LDAsMCwxLTUuOTEtNC40MWw3LjQ2LTMwLjE1TDEzMy40NSwxNjQuN2E0LDQsMCwwLDEsMi4yNC03LjA4bDMyLjI0LTIuNDksMTIuNC0yOC43MmE0LDQsMCwwLDEsNy4zNCwwbDEyLjQsMjguNzIsMzIuMjQsMi40OWE0LDQsMCwwLDEsMi4yNCw3LjA4Wm0tMTIuNzQuMTRMMTk3LDE2Mi45MmE0LDQsMCwwLDEtMy4zNi0yLjRMMTg0LDEzOC4xbC05LjY4LDIyLjQyYTQsNCwwLDAsMS0zLjM2LDIuNGwtMjQuNzcsMS45MkwxNjUsMTgwLjMyYTQsNCwwLDAsMSwxLjMzLDQuMDVsLTUuNzgsMjMuMzZMMTgyLDE5NS4wOWE0LDQsMCwwLDEsNC4wNiwwbDIxLjQ3LDEyLjY0LTUuNzgtMjMuMzZhNCw0LDAsMCwxLDEuMzMtNC4wNVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FolderSimpleStar";
export { I as FolderSimpleStar };
