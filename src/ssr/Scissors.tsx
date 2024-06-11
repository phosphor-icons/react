/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Scissors";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguNzgsMTgzLjc5LDk4LjI4LDg3LjY1QTQwLjE4LDQwLjE4LDAsMCwwLDEwMCw3NmE0MCw0MCwwLDEsMC0xNS4yOSwzMS40NWwzMCwyMC41Ni0zMCwyMC41NmE0MCw0MCwwLDEsMCwzLjU3LDU5Ljc0aDBBMzkuNzMsMzkuNzMsMCwwLDAsMTAwLDE4MGE0MC4xOCw0MC4xOCwwLDAsMC0xLjcyLTExLjY2TDEzNiwxNDIuNTRsODkuMjIsNjEuMDZhMTIsMTIsMCwwLDAsMTMuNTYtMTkuODFaTTcxLjMxLDE5MS4zM2gwQTE2LDE2LDAsMSwxLDc2LDE4MCwxNiwxNiwwLDAsMSw3MS4zMSwxOTEuMzNaTTQ4LjY5LDg3LjNhMTYsMTYsMCwxLDEsMjIuNjIsMGgwQTE2LDE2LDAsMCwxLDQ4LjY5LDg3LjNabTExMi44MiwyMy4yNGExMiwxMiwwLDAsMSwzLjEzLTE2LjY4TDIyNS4yMiw1Mi40YTEyLDEyLDAsMCwxLDEzLjU2LDE5LjgxbC02MC41OSw0MS40NmExMiwxMiwwLDAsMS0xNi42OC0zLjEzWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00MC4yLDk1LjhhMjgsMjgsMCwxLDEsMzkuNiwwQTI4LDI4LDAsMCwxLDQwLjIsOTUuOFptMCw2NC40YTI4LDI4LDAsMSwwLDM5LjYsMEEyOCwyOCwwLDAsMCw0MC4yLDE2MC4yWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE1Ny43MywxMTMuMTNBOCw4LDAsMCwxLDE1OS44MiwxMDJMMjI3LjQ4LDU1LjdhOCw4LDAsMCwxLDksMTMuMjFsLTY3LjY3LDQ2LjNhNy45Miw3LjkyLDAsMCwxLTQuNTEsMS40QTgsOCwwLDAsMSwxNTcuNzMsMTEzLjEzWm04MC44Nyw4NS4wOWE4LDgsMCwwLDEtMTEuMTIsMi4wOEwxMzYsMTM3LjcsOTMuNDksMTY2Ljc4YTM2LDM2LDAsMSwxLTktMTMuMTlMMTIxLjgzLDEyOCw4NC40NCwxMDIuNDFhMzUuODYsMzUuODYsMCwxLDEsOS0xMy4xOWwxNDMsOTcuODdBOCw4LDAsMCwxLDIzOC42LDE5OC4yMlpNODAsMTgwYTIwLDIwLDAsMSwwLTUuODYsMTQuMTRBMTkuODUsMTkuODUsMCwwLDAsODAsMTgwWk03NC4xNCw5MC4xM2EyMCwyMCwwLDEsMC0yOC4yOCwwQTE5Ljg1LDE5Ljg1LDAsMCwwLDc0LjE0LDkwLjEzWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuNTIsMTg3LjA5bC0xNDMtOTcuODdhMzYsMzYsMCwxLDAtMTQuMzgsMTcuMjdsMjEuMzksMjEuNjlMNzkuMTUsMTQ5LjU0bDAsMGEzNS45MSwzNS45MSwwLDEsMCwxNC4zOCwxNy4yN2wyNi45MS0xOC40MUwxNzAsMTk4LjY0YTMyLjI2LDMyLjI2LDAsMCwwLDIyLjcsOS4zNywzMS41MiwzMS41MiwwLDAsMCw0LjExLS4yN2wuMjgsMCwzNi4yNy02LjExYTgsOCwwLDAsMCwzLjE5LTE0LjVabS0xNjIuMzgtOTdBMjAsMjAsMCwxLDEsODAsNzYsMjAsMjAsMCwwLDEsNzQuMTQsOTAuMTNabTAsMTA0QTIwLDIwLDAsMSwxLDgwLDE4MCwyMCwyMCwwLDAsMSw3NC4xNCwxOTQuMTVabTYxLTEwMS41TDE2OS45NCw1Ny40YTMyLjE5LDMyLjE5LDAsMCwxLDI2Ljg0LTkuMTRsLjI4LDAsMzYsNi4wN2E4LjIxLDguMjEsMCwwLDEsNi4wOSw0LjQyLDgsOCwwLDAsMS0yLjY3LDEwLjEybC02OS45Myw0Ny44NWE0LDQsMCwwLDEtNC41MSwwbC0yNi4zMS0xOEE0LDQsMCwwLDEsMTM1LjE4LDkyLjY1WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTkuMzgsMTEyYTYsNiwwLDAsMSwxLjU3LTguMzRsNjcuNjYtNDYuMzFhNiw2LDAsMCwxLDYuNzgsOS45MWwtNjcuNjcsNDYuM2E2LDYsMCwwLDEtOC4zNC0xLjU2Wk0yMzcsMTk3LjA5YTYsNiwwLDAsMS04LjM0LDEuNTZMMTM2LDEzNS4yNyw5MSwxNjYuMDZBMzQsMzQsMCwxLDEsODQsMTU2YTEuOCwxLjgsMCwwLDAsLjE5LjJMMTI1LjM3LDEyOCw4NC4yMyw5OS44NCw4NCwxMDBhMzQsMzQsMCwxLDEsNy0xMC4xbDE0NC4zOCw5OC44QTYsNiwwLDAsMSwyMzcsMTk3LjA5Wk03NS41Niw5MS41NWEyMiwyMiwwLDEsMC0zMS4xMiwwLDIxLjg4LDIxLjg4LDAsMCwwLDMxLjEyLDBaTTgyLDE4MGEyMiwyMiwwLDEsMC02LjQ0LDE1LjU2aDBBMjEuODgsMjEuODgsMCwwLDAsODIsMTgwWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTcuNzMsMTEzLjEzQTgsOCwwLDAsMSwxNTkuODIsMTAyTDIyNy40OCw1NS43YTgsOCwwLDAsMSw5LDEzLjIxbC02Ny42Nyw0Ni4zYTcuOTIsNy45MiwwLDAsMS00LjUxLDEuNEE4LDgsMCwwLDEsMTU3LjczLDExMy4xM1ptODAuODcsODUuMDlhOCw4LDAsMCwxLTExLjEyLDIuMDhMMTM2LDEzNy43LDkzLjQ5LDE2Ni43OGEzNiwzNiwwLDEsMS05LTEzLjE5TDEyMS44MywxMjgsODQuNDQsMTAyLjQxYTM1Ljg2LDM1Ljg2LDAsMSwxLDktMTMuMTlsMTQzLDk3Ljg3QTgsOCwwLDAsMSwyMzguNiwxOTguMjJaTTgwLDE4MGEyMCwyMCwwLDEsMC01Ljg2LDE0LjE0QTE5Ljg1LDE5Ljg1LDAsMCwwLDgwLDE4MFpNNzQuMTQsOTAuMTNhMjAsMjAsMCwxLDAtMjguMjgsMEExOS44NSwxOS44NSwwLDAsMCw3NC4xNCw5MC4xM1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjEsMTEwLjg3YTQsNCwwLDAsMSwxLjA1LTUuNTZMMjI5Ljc0LDU5YTQsNCwwLDAsMSw0LjUyLDYuNjFsLTY3LjY3LDQ2LjNhNCw0LDAsMCwxLTUuNTYtMVpNMjM1LjMsMTk2YTQsNCwwLDAsMS01LjU2LDFMMTM2LDEzMi44NSw4OC40NywxNjUuMzhhMzIsMzIsMCwxLDEtNS44NC04Yy40NS40NS44OS45MiwxLjMxLDEuNGw0NS0zMC43OC00NS0zMC43OGMtLjQyLjQ4LS44NiwxLTEuMzEsMS40YTMxLjg2LDMxLjg2LDAsMSwxLDUuODQtOGw0OS42OSwzNGgwbDk2LjA5LDY1Ljc2QTQsNCwwLDAsMSwyMzUuMywxOTZaTTc3LDkzYTI0LjQyLDI0LjQyLDAsMCwwLDIuODItMy4zOHMwLDAsMCwwbDAsMEEyNCwyNCwwLDEsMCw3Nyw5M1pNODQsMTgwYTIzLjc1LDIzLjc1LDAsMCwwLTQuMTUtMTMuNDlsMC0uMDYsMCwwQTI0LjUsMjQuNSwwLDAsMCw3NywxNjMsMjQsMjQsMCwxLDAsNzcsMTk3aDBBMjMuODUsMjMuODUsMCwwLDAsODQsMTgwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Scissors";
export { I as Scissors };
