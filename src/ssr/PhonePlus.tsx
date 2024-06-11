/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PhonePlus";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuMzYsMTY2LjQ2bC00Ny4xLTIxLjExLS4xMi0uMDZhMTYsMTYsMCwwLDAtMTUuMTgsMS40LDguMTIsOC4xMiwwLDAsMC0uNzUuNTZMMTI2Ljg3LDE2OGMtMTUuNDItNy40OS0zMS4zNC0yMy4yOS0zOC44My0zOC41MWwyMC43OC0yNC43MWMuMi0uMjUuMzktLjUuNTctLjc3YTE2LDE2LDAsMCwwLDEuMzItMTUuMDYuNjEuNjEsMCwwLDEsMC0uMTJMODkuNTQsNDEuNjRhMTYsMTYsMCwwLDAtMTYuNjItOS41MkE1Ni4yNiw1Ni4yNiwwLDAsMCwyNCw4OGMwLDc5LjQsNjQuNiwxNDQsMTQ0LDE0NGE1Ni4yNiw1Ni4yNiwwLDAsMCw1NS44OC00OC45MkExNiwxNiwwLDAsMCwyMTQuMzYsMTY2LjQ2Wk0xNjgsMjE2QTEyOC4xNCwxMjguMTQsMCwwLDEsNDAsODgsNDAuMiw0MC4yLDAsMCwxLDc0Ljg3LDQ4YS42MS42MSwwLDAsMCwwLC4xMmwyMSw0N0w3NS4yLDExOS44NmE2LjEzLDYuMTMsMCwwLDAtLjU3Ljc3LDE2LDE2LDAsMCwwLTEsMTUuN2M5LjA2LDE4LjUzLDI3LjczLDM3LjA2LDQ2LjQ2LDQ2LjExYTE2LDE2LDAsMCwwLDE1Ljc1LTEuMTQsNi45Miw2LjkyLDAsMCwwLC43NC0uNTdMMTYwLjg5LDE2MGw0NywyMS4wNmgwcy4wOCwwLC4xMSwwQTQwLjIxLDQwLjIxLDAsMCwxLDE2OCwyMTZaTTEzNiw4MGE4LDgsMCwwLDEsOC04aDI0VjQ4YTgsOCwwLDAsMSwxNiwwVjcyaDI0YTgsOCwwLDAsMSwwLDE2SDE4NHYyNGE4LDgsMCwwLDEtMTYsMFY4OEgxNDRBOCw4LDAsMCwxLDEzNiw4MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuNzgsMTcwLjEzLDE2NS41NiwxNDlBMTIsMTIsMCwwLDAsMTU0LjE4LDE1MGEzLjM3LDMuMzcsMCwwLDAtLjM4LjI4TDEyOSwxNzEuNDJhMy45LDMuOSwwLDAsMS0zLjcuMjFjLTE2LjI0LTcuODQtMzMtMjQuNTItNDAuODktNDAuNTdhMy45LDMuOSwwLDAsMSwuMTgtMy42OWwyMS4yLTI1LjIxYy4xLS4xMi4xOS0uMjUuMjgtLjM4YTEyLDEyLDAsMCwwLDEtMTEuMzZMODUuOSw0My4yOGExMiwxMiwwLDAsMC0xMi40OC03LjE5QTUyLjI1LDUyLjI1LDAsMCwwLDI4LDg4YzAsNzcuMiw2Mi44LDE0MCwxNDAsMTQwYTUyLjI1LDUyLjI1LDAsMCwwLDUxLjkxLTQ1LjQyQTEyLDEyLDAsMCwwLDIxMi43OCwxNzAuMTNaTTIxMiwxODEuNTdBNDQuMjMsNDQuMjMsMCwwLDEsMTY4LDIyMEM5NS4yMiwyMjAsMzYsMTYwLjc4LDM2LDg4QTQ0LjIzLDQ0LjIzLDAsMCwxLDc0LjQyLDQ0YTMuODcsMy44NywwLDAsMSwuNDgsMCw0LDQsMCwwLDEsMy42NywyLjQ5TDk5LjY4LDkzLjYzYTQsNCwwLDAsMS0uMjMsMy42bC0yMS4xOSwyNS4yYy0uMS4xMy0uMi4yNS0uMjkuMzlhMTIsMTIsMCwwLDAtLjc4LDExLjc1YzguNjksMTcuNzksMjYuNjEsMzUuNTgsNDQuNiw0NC4yN2ExMiwxMiwwLDAsMCwxMS43OS0uODdsLjM3LS4yOCwyNC44My0yMS4xMmEzLjkzLDMuOTMsMCwwLDEsMy41Ny0uMjdsNDcuMjEsMjEuMTZBNCw0LDAsMCwxLDIxMiwxODEuNTdaTTE0MCw4MGE0LDQsMCwwLDEsNC00aDI4VjQ4YTQsNCwwLDAsMSw4LDBWNzZoMjhhNCw0LDAsMCwxLDAsOEgxODB2MjhhNCw0LDAsMCwxLTgsMFY4NEgxNDRBNCw0LDAsMCwxLDE0MCw4MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNTksMTY4LjNsLTQ3LjI0LTIxLjE3YTE0LDE0LDAsMCwwLTEzLjI4LDEuMjIsNC44MSw0LjgxLDAsMCwwLS41Ni40MmwtMjQuNjksMjFhMS44OCwxLjg4LDAsMCwxLTEuNjguMDZjLTE1Ljg3LTcuNjYtMzIuMzEtMjQtNDAtMzkuNjVhMS44OSwxLjg5LDAsMCwxLDAtMS42N2wyMS4wNy0yNS4wNmE2LjEzLDYuMTMsMCwwLDAsLjQyLS41OCwxNCwxNCwwLDAsMCwxLjEyLTEzLjI3TDg3LjczLDQyLjQ5YTE0LDE0LDAsMCwwLTE0LjU2LTguMzhBNTQuMjUsNTQuMjUsMCwwLDAsMjYsODhjMCw3OC4zLDYzLjcsMTQyLDE0MiwxNDJhNTQuMjUsNTQuMjUsMCwwLDAsNTMuODktNDcuMTdBMTQsMTQsMCwwLDAsMjEzLjU5LDE2OC4zWk0xNjgsMjE4Qzk2LjMyLDIxOCwzOCwxNTkuNjgsMzgsODhBNDIuMjMsNDIuMjMsMCwwLDEsNzQuNjcsNDZoLjIzYTIsMiwwLDAsMSwxLjg0LDEuMzFsMjEuMSw0Ny4xMWEyLDIsMCwwLDEsMCwxLjY3TDc2LjczLDEyMS4xNWE0LjczLDQuNzMsMCwwLDAtLjQzLjU3LDE0LDE0LDAsMCwwLS45MSwxMy43M2M4Ljg3LDE4LjE2LDI3LjE3LDM2LjMyLDQ1LjUzLDQ1LjE5YTE0LDE0LDAsMCwwLDEzLjc3LTFjLjE5LS4xMy4zOC0uMjcuNTYtLjQybDI0LjY4LTIxYTEuOTIsMS45MiwwLDAsMSwxLjYtLjFsNDcuMjUsMjEuMTdhMiwyLDAsMCwxLDEuMjEsMkE0Mi4yNCw0Mi4yNCwwLDAsMSwxNjgsMjE4Wk0xMzgsODBhNiw2LDAsMCwxLDYtNmgyNlY0OGE2LDYsMCwwLDEsMTIsMFY3NGgyNmE2LDYsMCwwLDEsMCwxMkgxODJ2MjZhNiw2LDAsMCwxLTEyLDBWODZIMTQ0QTYsNiwwLDAsMSwxMzgsODBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTYyLjhsLTQ3LjA5LTIxLjEtLjE4LS4wOGExOS44OSwxOS44OSwwLDAsMC0xOSwxLjc0LDEzLjA4LDEzLjA4LDAsMCwwLTEuMTIuODRsLTIyLjMxLDE5Yy0xMy03LjA1LTI2LjQzLTIwLjM3LTMzLjQ5LTMzLjIxbDE5LjA2LTIyLjY2YTEwLjY3LDEwLjY3LDAsMCwwLC44NS0xLjE1LDIwLDIwLDAsMCwwLDEuNjYtMTguODMsMS40MiwxLjQyLDAsMCwxLS4wOC0uMThMOTMuMiw0MEEyMC4wNSwyMC4wNSwwLDAsMCw3Mi40MiwyOC4xNSw2MC4yNyw2MC4yNywwLDAsMCwyMCw4OGMwLDgxLjYxLDY2LjM5LDE0OCwxNDgsMTQ4YTYwLjI3LDYwLjI3LDAsMCwwLDU5Ljg1LTUyLjQyQTIwLjA2LDIwLjA2LDAsMCwwLDIxNiwxNjIuOFpNMTY4LDIxMkExMjQuMTUsMTI0LjE1LDAsMCwxLDQ0LDg4LDM2LjI3LDM2LjI3LDAsMCwxLDcyLjQ4LDUyLjQ3bDE4LjgyLDQyLTE5LjE2LDIyLjhhMTAuNzUsMTAuNzUsMCwwLDAtLjg2LDEuMTVBMjAsMjAsMCwwLDAsNzAsMTM4LjA4YzkuNDIsMTkuMjgsMjguODMsMzguNTYsNDguMzEsNDhBMjAsMjAsMCwwLDAsMTM4LDE4NC42M2ExMS42MywxMS42MywwLDAsMCwxLjExLS44NWwyMi40My0xOS4wNyw0MiwxOC44MUEzNi4yOSwzNi4yOSwwLDAsMSwxNjgsMjEyWk0xMzIsODBhMTIsMTIsMCwwLDEsMTItMTJoMjBWNDhhMTIsMTIsMCwwLDEsMjQsMFY2OGgyMGExMiwxMiwwLDAsMSwwLDI0SDE4OHYyMGExMiwxMiwwLDAsMS0yNCwwVjkySDE0NEExMiwxMiwwLDAsMSwxMzIsODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuODgsMTgzLjA4QTU2LjI2LDU2LjI2LDAsMCwxLDE2OCwyMzJDODguNiwyMzIsMjQsMTY3LjQsMjQsODhBNTYuMjYsNTYuMjYsMCwwLDEsNzIuOTIsMzIuMTJhMTYsMTYsMCwwLDEsMTYuNjIsOS41MmwyMS4xMiw0Ny4xNWEuNjEuNjEsMCwwLDAsMCwuMTJBMTYsMTYsMCwwLDEsMTA5LjM5LDEwNGMtLjE4LjI3LS4zNy41Mi0uNTcuNzdMODgsMTI5LjQ1YzcuNDksMTUuMjIsMjMuNDEsMzEsMzguODMsMzguNTFsMjQuMzQtMjAuNzFhOC4xMiw4LjEyLDAsMCwxLC43NS0uNTYsMTYsMTYsMCwwLDEsMTUuMTgtMS40bC4xMi4wNiw0Ny4xLDIxLjExQTE2LDE2LDAsMCwxLDIyMy44OCwxODMuMDhaTTE0NCw4OGgyNHYyNGE4LDgsMCwwLDAsMTYsMFY4OGgyNGE4LDgsMCwwLDAsMC0xNkgxODRWNDhhOCw4LDAsMCwwLTE2LDBWNzJIMTQ0YTgsOCwwLDAsMCwwLDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuOTQsMTgyLjA4QTQ4LjMzLDQ4LjMzLDAsMCwxLDE2OCwyMjQsMTM2LDEzNiwwLDAsMSwzMiw4OCw0OC4zMyw0OC4zMywwLDAsMSw3My45Miw0MC4wNmE4LDgsMCwwLDEsOC4zLDQuOGwyMS4xMyw0Ny4yYTgsOCwwLDAsMS0uNjYsNy41M0w4MS4zMiwxMjVhNy45Myw3LjkzLDAsMCwwLS41NCw3LjgxYzguMjcsMTYuOTMsMjUuNzcsMzQuMjIsNDIuNzUsNDIuNDFhNy45Miw3LjkyLDAsMCwwLDcuODMtLjU5bDI1LTIxLjNhOCw4LDAsMCwxLDcuNTktLjY5bDQ3LjE2LDIxLjEzQTgsOCwwLDAsMSwyMTUuOTQsMTgyLjA4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNC4zNiwxNjYuNDZsLTQ3LjEtMjEuMTEtLjEyLS4wNmExNiwxNiwwLDAsMC0xNS4xOCwxLjQsOC4xMiw4LjEyLDAsMCwwLS43NS41NkwxMjYuODcsMTY4Yy0xNS40Mi03LjQ5LTMxLjM0LTIzLjI5LTM4LjgzLTM4LjUxbDIwLjc4LTI0LjcxYy4yLS4yNS4zOS0uNS41Ny0uNzdhMTYsMTYsMCwwLDAsMS4zMi0xNS4wNi42MS42MSwwLDAsMSwwLS4xMkw4OS41NCw0MS42NGExNiwxNiwwLDAsMC0xNi42Mi05LjUyQTU2LjI2LDU2LjI2LDAsMCwwLDI0LDg4YzAsNzkuNCw2NC42LDE0NCwxNDQsMTQ0YTU2LjI2LDU2LjI2LDAsMCwwLDU1Ljg4LTQ4LjkyQTE2LDE2LDAsMCwwLDIxNC4zNiwxNjYuNDZaTTE2OCwyMTZBMTI4LjE0LDEyOC4xNCwwLDAsMSw0MCw4OCw0MC4yLDQwLjIsMCwwLDEsNzQuODcsNDhhLjYxLjYxLDAsMCwwLDAsLjEybDIxLDQ3TDc1LjIsMTE5Ljg2YTYuMTMsNi4xMywwLDAsMC0uNTcuNzcsMTYsMTYsMCwwLDAtMSwxNS43YzkuMDYsMTguNTMsMjcuNzMsMzcuMDYsNDYuNDYsNDYuMTFhMTYsMTYsMCwwLDAsMTUuNzUtMS4xNCw2LjkyLDYuOTIsMCwwLDAsLjc0LS41N0wxNjAuODksMTYwbDQ3LDIxLjA2aDBzLjA4LDAsLjExLDBBNDAuMjEsNDAuMjEsMCwwLDEsMTY4LDIxNlpNMTM2LDgwYTgsOCwwLDAsMSw4LThoMjRWNDhhOCw4LDAsMCwxLDE2LDBWNzJoMjRhOCw4LDAsMCwxLDAsMTZIMTg0djI0YTgsOCwwLDAsMS0xNiwwVjg4SDE0NEE4LDgsMCwwLDEsMTM2LDgwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PhonePlus";
export { I as PhonePlus };
