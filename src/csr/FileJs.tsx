/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileJs";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzJhOCw4LDAsMCwwLDE2LDBWNDBoODhWODhhOCw4LDAsMCwwLDgsOGg0OFYyMTZIMTc2YTgsOCwwLDAsMCwwLDE2aDI0YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE2MCw1MS4zMSwxODguNjksODBIMTYwWm0tMTIuMTksMTQ1YTIwLjgyLDIwLjgyLDAsMCwxLTkuMTksMTUuMjNDMTMzLjQzLDIxNSwxMjcsMjE2LDEyMS4xMywyMTZhNjEuMzQsNjEuMzQsMCwwLDEtMTUuMTktMiw4LDgsMCwwLDEsNC4zMS0xNS40MWM0LjM4LDEuMiwxNSwyLjcsMTkuNTUtLjM2Ljg4LS41OSwxLjgzLTEuNTIsMi4xNC0zLjkzLjM0LTIuNjctLjcxLTQuMS0xMi43OC03LjU5LTkuMzUtMi43LTI1LTcuMjMtMjMtMjMuMTFhMjAuNTYsMjAuNTYsMCwwLDEsOS0xNC45NWMxMS44NC04LDMwLjcxLTMuMzEsMzIuODMtMi43NmE4LDgsMCwwLDEtNC4wNywxNS40OGMtNC40OS0xLjE3LTE1LjIzLTIuNTYtMTkuODMuNTZhNC41NCw0LjU0LDAsMCwwLTIsMy42N2MtLjEyLjktLjE0LDEuMDksMS4xMSwxLjksMi4zMSwxLjQ5LDYuNDUsMi42OCwxMC40NSwzLjg0QzEzMy40OSwxNzQuMTcsMTUwLjA1LDE3OSwxNDcuODEsMTk2LjMxWk04MCwxNTJ2MzhhMjYsMjYsMCwwLDEtNTIsMCw4LDgsMCwwLDEsMTYsMCwxMCwxMCwwLDAsMCwyMCwwVjE1MmE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsODUuMTdsLTU2LTU2QTQsNCwwLDAsMCwxNTIsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDB2NzJhNCw0LDAsMCwwLDgsMFY0MGE0LDQsMCwwLDEsNC00aDkyVjg4YTQsNCwwLDAsMCw0LDRoNTJWMjE2YTQsNCwwLDAsMS00LDRIMTc2YTQsNCwwLDAsMCwwLDhoMjRhMTIsMTIsMCwwLDAsMTItMTJWODhBNCw0LDAsMCwwLDIxMC44Myw4NS4xN1pNMTU2LDQxLjY1LDE5OC4zNCw4NEgxNTZaTTE0My44NCwxOTUuOGExNywxNywwLDAsMS03LjQzLDEyLjQxYy00LjM5LDIuOTEtMTAsMy43Ny0xNS4yMiwzLjc3QTU3Ljg5LDU3Ljg5LDAsMCwxLDEwNywyMTAuMTFhNCw0LDAsMCwxLDIuMTUtNy43YzQuMjIsMS4xNywxNi41NiwzLjI5LDIyLjgzLS44OGE4Ljk0LDguOTQsMCwwLDAsMy45MS02Ljc1Yy44My02LjQ1LTQuMzgtOC42OS0xNS42NC0xMS45NC05LjY4LTIuOC0yMS43Mi02LjI4LTIwLjE0LTE4Ljc3YTE2LjY2LDE2LjY2LDAsMCwxLDcuMjItMTIuMTNjNC41Ni0zLjA3LDExLTQuMzYsMTkuMS0zLjgyYTYxLjMzLDYxLjMzLDAsMCwxLDEwLjQ4LDEuNjEsNCw0LDAsMCwxLTIuMDUsNy43NGMtNC4yOS0xLjEzLTE2LjgxLTMuMTItMjMuMDYsMS4xMWE4LjUxLDguNTEsMCwwLDAtMy43NSw2LjQ5Yy0uNjYsNS4xNywzLjg5LDcsMTQuNDIsMTAuMDhDMTMyLjI2LDE3OCwxNDUuNjQsMTgxLjg0LDE0My44NCwxOTUuOFpNNzYsMTUydjM4YTIyLDIyLDAsMCwxLTQ0LDAsNCw0LDAsMCwxLDgsMCwxNCwxNCwwLDAsMCwyOCwwVjE1MmE0LDQsMCwwLDEsOCwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsODMuNzZsLTU2LTU2QTYsNiwwLDAsMCwxNTIsMjZINTZBMTQsMTQsMCwwLDAsNDIsNDB2NzJhNiw2LDAsMCwwLDEyLDBWNDBhMiwyLDAsMCwxLDItMmg5MFY4OGE2LDYsMCwwLDAsNiw2aDUwVjIxNmEyLDIsMCwwLDEtMiwySDE3NmE2LDYsMCwwLDAsMCwxMmgyNGExNCwxNCwwLDAsMCwxNC0xNFY4OEE2LDYsMCwwLDAsMjEyLjI0LDgzLjc2Wk0xNTgsNDYuNDgsMTkzLjUyLDgySDE1OFpNMTQ1LjgzLDE5Ni4wNmExOC44OSwxOC44OSwwLDAsMS04LjMxLDEzLjgxYy00LjgyLDMuMTktMTAuODcsNC4xNC0xNi4zNiw0LjE0YTU4Ljg5LDU4Ljg5LDAsMCwxLTE0LjY4LTIsNiw2LDAsMCwxLDMuMjMtMTEuNTZjMy43MSwxLDE1LjU4LDMuMTEsMjEuMTktLjYyYTYuODUsNi44NSwwLDAsMCwzLTUuMzRjLjU4LTQuNDMtMi4wOC02LjI2LTE0LjItOS43Ni05LjMxLTIuNjktMjMuMzctNi43NS0yMS41Ny0yMC45NGExOC42MSwxOC42MSwwLDAsMSw4LjA4LTEzLjU0YzExLjExLTcuNDksMjkuMTgtMywzMS4yMS0yLjQ4YTYsNiwwLDAsMS0zLjA2LDExLjZjLTMuNzgtMS0xNS44NS0zLTIxLjQ1Ljg0YTYuNTksNi41OSwwLDAsMC0yLjg4LDUuMDhjLS40MSwzLjIyLDIuMTQsNC43OCwxMyw3LjkxQzEzMi45MiwxNzYuMDksMTQ3Ljg0LDE4MC40LDE0NS44MywxOTYuMDZaTTc4LDE1MnYzOGEyNCwyNCwwLDAsMS00OCwwLDYsNiwwLDAsMSwxMiwwLDEyLDEyLDAsMCwwLDI0LDBWMTUyYTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksNzkuNTFsLTU2LTU2QTEyLDEyLDAsMCwwLDE1MiwyMEg1NkEyMCwyMCwwLDAsMCwzNiw0MHY2OGExMiwxMiwwLDAsMCwyNCwwVjQ0aDc2VjkyYTEyLDEyLDAsMCwwLDEyLDEyaDQ4VjIxMkgxODBhMTIsMTIsMCwwLDAsMCwyNGgyMGEyMCwyMCwwLDAsMCwyMC0yMFY4OEExMiwxMiwwLDAsMCwyMTYuNDksNzkuNTFaTTE2MCw1N2wyMywyM0gxNjBabS00LjIyLDEzOS44NWEyNC43NSwyNC43NSwwLDAsMS0xMC45NSwxOC4wNmMtNiw0LTEzLjI3LDUuMTUtMTkuNzMsNS4xNWE2My43NSw2My43NSwwLDAsMS0xNi4yMy0yLjIxLDEyLDEyLDAsMCwxLDYuNDYtMjMuMTJjNi44MSwxLjg2LDE1LDEuNjEsMTYuMzkuMDZhMi40OCwyLjQ4LDAsMCwwLC4yMS0uNzFjLTEuOTQtMS4yMy02LjgzLTIuNjQtOS44OC0zLjUyLTUuMzktMS41Ni0xMS0zLjE4LTE1Ljc1LTYuMjctNy42Mi00LjkyLTExLjIxLTEyLjQ1LTEwLjExLTIxLjJhMjQuNDUsMjQuNDUsMCwwLDEsMTAuNjktMTcuNzVjNi4wNi00LjA5LDE0LjE3LTUuODQsMjQuMS01LjE4QTY4LjUzLDY4LjUzLDAsMCwxLDE0MywxNDJhMTIsMTIsMCwwLDEtNi4xLDIzLjIxYy02LjM2LTEuNjMtMTMuNjItMS41MS0xNi4wNy0uMzNhNzkuNSw3OS41LDAsMCwwLDcuOTEsMi41OWM1LjQ4LDEuNTgsMTEuNjgsMy4zNywxNi44LDYuODJDMTUzLjMzLDE3OS41NSwxNTcsMTg3LjU1LDE1NS43OCwxOTYuODJaTTg0LDE1MnYzOGEzMCwzMCwwLDAsMS02MCwwLDEyLDEyLDAsMCwxLDI0LDAsNiw2LDAsMCwwLDEyLDBWMTUyYTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzZhNCw0LDAsMCwwLDQsNEgxNjRhNCw0LDAsMCwxLDQsNFYyMjhhNCw0LDAsMCwwLDQsNGgyOGExNiwxNiwwLDAsMCwxNi0xNlY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNTIsODhWNDRsNDQsNDRabS00LjE5LDEwOC4zMWEyMC44MiwyMC44MiwwLDAsMS05LjE5LDE1LjIzQzEzMy40MywyMTUsMTI3LDIxNiwxMjEuMTMsMjE2YTYxLjM0LDYxLjM0LDAsMCwxLTE1LjE5LTIsOCw4LDAsMCwxLDQuMzEtMTUuNDFjNC4zOCwxLjIsMTUsMi43LDE5LjU1LS4zNi44OC0uNTksMS44My0xLjUyLDIuMTQtMy45My4zNC0yLjY3LS43Mi00LjEtMTIuNzgtNy41OS05LjM1LTIuNy0yNS03LjIzLTIzLTIzLjExYTIwLjU4LDIwLjU4LDAsMCwxLDktMTQuOTVjMTEuODUtOCwzMC43Mi0zLjMxLDMyLjg0LTIuNzZhOCw4LDAsMCwxLTQuMDcsMTUuNDhjLTQuNDktMS4xNy0xNS4yMy0yLjU2LTE5LjgzLjU2YTQuNTcsNC41NywwLDAsMC0yLDMuNjdjLS4xMS45LS4xMywxLjA5LDEuMTIsMS45LDIuMzEsMS40OSw2LjQ1LDIuNjgsMTAuNDUsMy44NEMxMzMuNDksMTc0LjE3LDE1MCwxNzksMTQ3LjgxLDE5Ni4zMVpNODAsMTUydjM3LjQxYzAsMTQuMjItMTEuMTgsMjYuMjYtMjUuNDEsMjYuNThBMjYsMjYsMCwwLDEsMjgsMTkwLjM3LDguMTcsOC4xNywwLDAsMSwzNS4zMSwxODIsOCw4LDAsMCwxLDQ0LDE5MC4yMmE4Ljg5LDguODksMCwwLDAsNCw4YzcuODUsNC44MiwxNi0uNzUsMTYtOC4yVjE1Mi4yN0E4LjE3LDguMTcsMCwwLDEsNzEuNDcsMTQ0LDgsOCwwLDAsMSw4MCwxNTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhIMTUyVjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxMy42Niw4Mi4zNGwtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MHY3MmE4LDgsMCwwLDAsMTYsMFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNkgxNzZhOCw4LDAsMCwwLDAsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBabS0xMi4xOSwxNDVhMjAuODIsMjAuODIsMCwwLDEtOS4xOSwxNS4yM0MxMzMuNDMsMjE1LDEyNywyMTYsMTIxLjEzLDIxNkE2MS4xNCw2MS4xNCwwLDAsMSwxMDYsMjE0YTgsOCwwLDEsMSw0LjMtMTUuNDFjNC4zOCwxLjIsMTUsMi43LDE5LjU1LS4zNi44OC0uNTksMS44My0xLjUyLDIuMTQtMy45My4zNS0yLjY3LS43MS00LjEtMTIuNzgtNy41OS05LjM1LTIuNy0yNS03LjIzLTIzLTIzLjExYTIwLjU2LDIwLjU2LDAsMCwxLDktMTQuOTVjMTEuODQtOCwzMC43MS0zLjMxLDMyLjgzLTIuNzZhOCw4LDAsMCwxLTQuMDcsMTUuNDhjLTQuNDktMS4xNy0xNS4yMy0yLjU2LTE5LjgzLjU2YTQuNTQsNC41NCwwLDAsMC0yLDMuNjdjLS4xMi45LS4xNCwxLjA5LDEuMTEsMS45LDIuMzEsMS40OSw2LjQ1LDIuNjgsMTAuNDUsMy44NEMxMzMuNDksMTc0LjE3LDE1MC4wNSwxNzksMTQ3LjgxLDE5Ni4zMVpNODAsMTUydjM4YTI2LDI2LDAsMCwxLTUyLDAsOCw4LDAsMCwxLDE2LDAsMTAsMTAsMCwwLDAsMjAsMFYxNTJhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileJs";
export { I as FileJs };
