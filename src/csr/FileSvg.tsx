/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileSvg";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Ny44MiwxOTYuMzFhMjAuODIsMjAuODIsMCwwLDEtOS4xOSwxNS4yM0M3My40NCwyMTUsNjcsMjE2LDYxLjE0LDIxNkE2MS4yMyw2MS4yMywwLDAsMSw0NiwyMTRhOCw4LDAsMCwxLDQuMy0xNS40MWM0LjM4LDEuMiwxNC45NSwyLjcsMTkuNTUtLjM2Ljg4LS41OSwxLjgzLTEuNTIsMi4xNC0zLjkzLjM1LTIuNjctLjcxLTQuMS0xMi43OC03LjU5LTkuMzUtMi43LTI1LTcuMjMtMjMtMjMuMTFhMjAuNTUsMjAuNTUsMCwwLDEsOS0xNC45NWMxMS44NC04LDMwLjcyLTMuMzEsMzIuODMtMi43NmE4LDgsMCwwLDEtNC4wNywxNS40OGMtNC40OC0xLjE3LTE1LjIzLTIuNTYtMTkuODMuNTZhNC41NCw0LjU0LDAsMCwwLTIsMy42N2MtLjExLjktLjE0LDEuMDksMS4xMiwxLjksMi4zMSwxLjQ5LDYuNDQsMi42OCwxMC40NSwzLjg0QzczLjUsMTc0LjE3LDkwLjA2LDE3OSw4Ny44MiwxOTYuMzFaTTIxNiw4OHYyNGE4LDgsMCwwLDEtMTYsMFY5NkgxNTJhOCw4LDAsMCwxLTgtOFY0MEg1NnY3MmE4LDgsMCwxLDEtMTYsMFY0MEExNiwxNiwwLDAsMSw1NiwyNGg5NmE4LDgsMCwwLDEsNS42NSwyLjM0bDU2LDU2QTgsOCwwLDAsMSwyMTYsODhabS01Ni04aDI4LjY5TDE2MCw1MS4zMVptLTEzLjMsNjQuNDdhOCw4LDAsMCwwLTEwLjIzLDQuODRMMTI0LDE4NC4yMWwtMTIuNDctMzQuOWE4LDgsMCwxLDAtMTUuMDYsNS4zOGwyMCw1NmE4LDgsMCwwLDAsMTUuMDcsMGwyMC01NkE4LDgsMCwwLDAsMTQ2LjcsMTQ0LjQ3Wk0yMDgsMTc2aC04YTgsOCwwLDAsMCwwLDE2djUuMjlhMTMuMzgsMTMuMzgsMCwwLDEtOCwyLjcxYy04LjgyLDAtMTYtOS0xNi0yMHM3LjE4LTIwLDE2LTIwYTEzLjI3LDEzLjI3LDAsMCwxLDcuNTMsMi4zOCw4LDgsMCwwLDAsOC45NS0xMy4yNkEyOS4zOCwyOS4zOCwwLDAsMCwxOTIsMTQ0Yy0xNy42NCwwLTMyLDE2LjE1LTMyLDM2czE0LjM2LDM2LDMyLDM2YTMwLjA2LDMwLjA2LDAsMCwwLDIxLjc4LTkuNiw4LDgsMCwwLDAsMi4yMi01LjUzVjE4NEE4LDgsMCwwLDAsMjA4LDE3NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsODUuMTdsLTU2LTU2QTQsNCwwLDAsMCwxNTIsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDB2NzJhNCw0LDAsMSwwLDgsMFY0MGE0LDQsMCwwLDEsNC00aDkyVjg4YTQsNCwwLDAsMCw0LDRoNTJ2MjBhNCw0LDAsMCwwLDgsMFY4OEE0LDQsMCwwLDAsMjEwLjgzLDg1LjE3Wk0xNTYsNDEuNjUsMTk4LjM0LDg0SDE1NlpNODMuODUsMTk1LjhhMTcsMTcsMCwwLDEtNy40MywxMi40MUM3MiwyMTEuMTIsNjYuMzgsMjEyLDYxLjIsMjEyQTU3Ljg5LDU3Ljg5LDAsMCwxLDQ3LDIxMC4xMWE0LDQsMCwxLDEsMi4xNS03LjdjNC4yMiwxLjE3LDE2LjU2LDMuMjksMjIuODMtLjg4YTguOTQsOC45NCwwLDAsMCwzLjkxLTYuNzVjLjgzLTYuNDUtNC4zOC04LjY5LTE1LjY0LTExLjk0LTkuNjgtMi44LTIxLjcyLTYuMjgtMjAuMTQtMTguNzdhMTYuNjYsMTYuNjYsMCwwLDEsNy4yMi0xMi4xM2M0LjU2LTMuMDcsMTEtNC4zNiwxOS4xLTMuODJhNjEuMTEsNjEuMTEsMCwwLDEsMTAuNDcsMS42MSw0LDQsMCwwLDEtMiw3Ljc0Yy00LjI5LTEuMTMtMTYuODEtMy4xMi0yMy4wNiwxLjExYTguNTEsOC41MSwwLDAsMC0zLjc1LDYuNDljLS42Niw1LjE3LDMuODksNywxNC40MiwxMC4wOEM3Mi4yNywxNzgsODUuNjUsMTgxLjg0LDgzLjg1LDE5NS44Wm02My45Mi00Mi40NS0yMCw1NmE0LDQsMCwwLDEtNy41MywwbC0yMC01NmE0LDQsMCwxLDEsNy41My0yLjdMMTI0LDE5Ni4xMWwxNi4yMy00NS40NmE0LDQsMCwxLDEsNy41MywyLjdaTTIxMiwxODR2MTYuODdhNCw0LDAsMCwxLTEuMTEsMi43N0EyNi4xMSwyNi4xMSwwLDAsMSwxOTIsMjEyYy0xNS40NCwwLTI4LTE0LjM2LTI4LTMyczEyLjU2LTMyLDI4LTMyYTI1LjQxLDI1LjQxLDAsMCwxLDE0LjI0LDQuNDMsNCw0LDAsMSwxLTQuNDgsNi42M0ExNy40MywxNy40MywwLDAsMCwxOTIsMTU2Yy0xMSwwLTIwLDEwLjc3LTIwLDI0czksMjQsMjAsMjRhMTcuODcsMTcuODcsMCwwLDAsMTItNC44MlYxODhoLTRhNCw0LDAsMCwxLDAtOGg4QTQsNCwwLDAsMSwyMTIsMTg0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsODMuNzVsLTU2LTU2QTYsNiwwLDAsMCwxNTIsMjZINTZBMTQsMTQsMCwwLDAsNDIsNDB2NzJhNiw2LDAsMCwwLDEyLDBWNDBhMiwyLDAsMCwxLDItMmg5MFY4OGE2LDYsMCwwLDAsNiw2aDUwdjE4YTYsNiwwLDEsMCwxMiwwVjg4QTYsNiwwLDAsMCwyMTIuMjQsODMuNzVaTTE1OCw0Ni40OCwxOTMuNTIsODJIMTU4Wk04NS44MywxOTYuMDVhMTguODUsMTguODUsMCwwLDEtOC4zLDEzLjgxQzcyLjcxLDIxMy4wNSw2Ni42NiwyMTQsNjEuMTYsMjE0YTU5LjM4LDU5LjM4LDAsMCwxLTE0LjY3LTIsNiw2LDAsMCwxLDMuMjMtMTEuNTZjMy43MSwxLDE1LjU4LDMuMTEsMjEuMTktLjYyYTYuODUsNi44NSwwLDAsMCwzLTUuMzRjLjU3LTQuNDMtMi4wOC02LjI2LTE0LjItOS43Ni05LjMxLTIuNjktMjMuMzctNi43NS0yMS41Ny0yMC45NGExOC42MSwxOC42MSwwLDAsMSw4LjA4LTEzLjU0YzExLjExLTcuNDksMjkuMTgtMywzMS4yLTIuNDhhNiw2LDAsMCwxLTMsMTEuNmMtMy43OS0xLTE1Ljg1LTIuOTUtMjEuNDUuODRhNi41OSw2LjU5LDAsMCwwLTIuODgsNS4wOGMtLjQxLDMuMjIsMi4xNCw0Ljc4LDEzLDcuOTFDNzIuOTMsMTc2LjA4LDg3Ljg1LDE4MC4zOSw4NS44MywxOTYuMDVabTYzLjgyLTQyLTIwLDU2YTYsNiwwLDAsMS0xMS4zLDBsLTIwLTU2YTYsNiwwLDEsMSwxMS4zLTRMMTI0LDE5MC4xNSwxMzguMzUsMTUwYTYsNiwwLDAsMSwxMS4zLDRaTTIxNCwxODR2MTYuODdhNiw2LDAsMCwxLTEuNjcsNC4xNUEyOC4wNiwyOC4wNiwwLDAsMSwxOTIsMjE0Yy0xNi41NCwwLTMwLTE1LjI1LTMwLTM0czEzLjQ2LTM0LDMwLTM0YTI3LjQzLDI3LjQzLDAsMCwxLDE1LjM2LDQuNzcsNiw2LDAsMCwxLTYuNzIsMTBBMTUuMjUsMTUuMjUsMCwwLDAsMTkyLDE1OGMtOS45MiwwLTE4LDkuODctMTgsMjJzOC4wOCwyMiwxOCwyMmExNS43LDE1LjcsMCwwLDAsMTAtMy43NFYxOTBoLTJhNiw2LDAsMCwxLDAtMTJoOEE2LDYsMCwwLDEsMjE0LDE4NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCwxMjBhMTIsMTIsMCwwLDAsMTItMTJWNDRoNzZWOTJhMTIsMTIsMCwwLDAsMTIsMTJoNDh2NGExMiwxMiwwLDEsMCwyNCwwVjg4YTEyLDEyLDAsMCwwLTMuNTEtOC40OGwtNTYtNTZBMTIsMTIsMCwwLDAsMTUyLDIwSDU2QTIwLDIwLDAsMCwwLDM2LDQwdjY4QTEyLDEyLDAsMCwwLDQ4LDEyMFpNMTgzLDgwSDE2MFY1N1pNODcuNzgsMTk2LjhhMjQuNzIsMjQuNzIsMCwwLDEtMTAuOTQsMThjLTYsNC0xMy4yNyw1LjE1LTE5Ljc0LDUuMTVhNjMuNzUsNjMuNzUsMCwwLDEtMTYuMjMtMi4yMSwxMiwxMiwwLDEsMSw2LjQ2LTIzLjExYzYuODIsMS44NSwxNSwxLjYxLDE2LjM5LjA2YTIuNDgsMi40OCwwLDAsMCwuMjEtLjcxYy0xLjk0LTEuMjMtNi44Mi0yLjY0LTkuODgtMy41My01LjM5LTEuNTYtMTEtMy4xNy0xNS43NS02LjI2LTcuNjItNC45Mi0xMS4yMS0xMi40NS0xMC4xLTIxLjE5YTI0LjQ0LDI0LjQ0LDAsMCwxLDEwLjY4LTE3Ljc2YzYuMDctNC4wOSwxNC4xNy01LjgyLDI0LjEtNS4xN0E2OSw2OSwwLDAsMSw3NSwxNDJhMTIsMTIsMCwwLDEtNi4xLDIzLjIxYy02LjM1LTEuNjMtMTMuNjEtMS41MS0xNi4wNy0uMzNhNzkuNjksNzkuNjksMCwwLDAsNy45MiwyLjU5YzUuNDcsMS41OCwxMS42NywzLjM3LDE2LjgsNi44MkM4NS4zMywxNzkuNTMsODksMTg3LjUzLDg3Ljc4LDE5Ni44Wk0xNTUuMywxNTZsLTIwLDU2YTEyLDEyLDAsMCwxLTIyLjYsMGwtMjAtNTZBMTIsMTIsMCwxLDEsMTE1LjMsMTQ4TDEyNCwxNzIuMywxMzIuNywxNDhBMTIsMTIsMCwxLDEsMTU1LjMsMTU2Wk0yMjQsMTg4djEyLjg3YTEyLDEyLDAsMCwxLTMuMzMsOC4zQTM0LDM0LDAsMCwxLDE5NiwyMjBjLTE5Ljg1LDAtMzYtMTcuOTQtMzYtNDBzMTYuMTUtNDAsMzYtNDBhMzMuMzksMzMuMzksMCwwLDEsMTguNzEsNS44LDEyLDEyLDAsMSwxLTEzLjQyLDE5Ljg5QTkuMzksOS4zOSwwLDAsMCwxOTYsMTY0Yy02LjUsMC0xMiw3LjMzLTEyLDE2czUuNSwxNiwxMiwxNmE5LDksMCwwLDAsMi43LS40MkExMiwxMiwwLDAsMSwyMDgsMTc2aDRBMTIsMTIsMCwwLDEsMjI0LDE4OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzZhNCw0LDAsMCwwLDQsNEgyMTJhNCw0LDAsMCwwLDQtNFY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNTIsODhWNDRsNDQsNDRaTTg3LjgyLDE5Ni4zMWEyMC44MiwyMC44MiwwLDAsMS05LjE5LDE1LjIzQzczLjQ0LDIxNSw2NywyMTYsNjEuMTQsMjE2QTYxLjIzLDYxLjIzLDAsMCwxLDQ2LDIxNGE4LDgsMCwwLDEsNC4zLTE1LjQxYzQuMzgsMS4yLDE0Ljk1LDIuNywxOS41NS0uMzYuODgtLjU5LDEuODMtMS41MiwyLjE0LTMuOTMuMzUtMi42Ny0uNzEtNC4xLTEyLjc4LTcuNTktOS4zNS0yLjctMjUtNy4yMy0yMy0yMy4xMWEyMC41NSwyMC41NSwwLDAsMSw5LTE0Ljk1YzExLjg0LTgsMzAuNzItMy4zMSwzMi44My0yLjc2YTgsOCwwLDAsMS00LjA3LDE1LjQ4Yy00LjQ4LTEuMTctMTUuMjMtMi41Ni0xOS44My41NmE0LjU0LDQuNTQsMCwwLDAtMiwzLjY3Yy0uMTEuOS0uMTQsMS4wOSwxLjEyLDEuOSwyLjMxLDEuNDksNi40NCwyLjY4LDEwLjQ1LDMuODRDNzMuNSwxNzQuMTcsOTAuMDYsMTc5LDg3LjgyLDE5Ni4zMVptNjMuNzItNDEuNjItMTkuOSw1NS43MmE4LjI1LDguMjUsMCwwLDEtNi41LDUuNTEsOCw4LDAsMCwxLTguNjctNS4yM0w5Ni41OSwxNTVhOC4yMSw4LjIxLDAsMCwxLDQuNS0xMC40NSw4LDgsMCwwLDEsMTAuNDUsNC43NkwxMjQsMTg0LjIxbDEyLjQ2LTM0LjlhOCw4LDAsMCwxLDE1LjA3LDUuMzhaTTIxNiwxODR2MTYuODdhOCw4LDAsMCwxLTIuMjYsNS41N0EzMCwzMCwwLDAsMSwxOTIsMjE2Yy0xNy42NCwwLTMyLTE2LjE1LTMyLTM2czE0LjM2LTM2LDMyLTM2YTI5LjM2LDI5LjM2LDAsMCwxLDE2LjA5LDQuODYsOC4yMiw4LjIyLDAsMCwxLDMsMTAuNjQsOCw4LDAsMCwxLTExLjU0LDIuODhBMTMuMjcsMTMuMjcsMCwwLDAsMTkyLDE2MGMtOC44MiwwLTE2LDktMTYsMjBzNy4xOCwyMCwxNiwyMGExMy4zOCwxMy4zOCwwLDAsMCw4LTIuNzFWMTkyYTgsOCwwLDAsMS04LTguNTMsOC4xOCw4LjE4LDAsMCwxLDguMjYtNy40N0gyMDhBOCw4LDAsMCwxLDIxNiwxODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhIMTUyVjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxMy42Niw4Mi4zNGwtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MHY3MmE4LDgsMCwxLDAsMTYsMFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4djE2YTgsOCwwLDAsMCwxNiwwVjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE2MCw1MS4zMSwxODguNjksODBIMTYwWm0tNzIuMTgsMTQ1YTIwLjgyLDIwLjgyLDAsMCwxLTkuMTksMTUuMjNDNzMuNDQsMjE1LDY3LDIxNiw2MS4xNCwyMTZBNjEuMjMsNjEuMjMsMCwwLDEsNDYsMjE0YTgsOCwwLDAsMSw0LjMtMTUuNDFjNC4zOCwxLjIsMTQuOTUsMi43LDE5LjU1LS4zNi44OC0uNTksMS44My0xLjUyLDIuMTQtMy45My4zNS0yLjY3LS43MS00LjEtMTIuNzgtNy41OS05LjM1LTIuNy0yNS03LjIzLTIzLTIzLjExYTIwLjU1LDIwLjU1LDAsMCwxLDktMTQuOTVjMTEuODQtOCwzMC43Mi0zLjMxLDMyLjgzLTIuNzZhOCw4LDAsMCwxLTQuMDcsMTUuNDhjLTQuNDgtMS4xNy0xNS4yMy0yLjU2LTE5LjgzLjU2YTQuNTQsNC41NCwwLDAsMC0yLDMuNjdjLS4xMS45LS4xNCwxLjA5LDEuMTIsMS45LDIuMzEsMS40OSw2LjQ0LDIuNjgsMTAuNDUsMy44NEM3My41LDE3NC4xNyw5MC4wNiwxNzksODcuODIsMTk2LjMxWm02My43Mi00MS42Mi0yMCw1NmE4LDgsMCwwLDEtMTUuMDcsMGwtMjAtNTZhOCw4LDAsMSwxLDE1LjA2LTUuMzhMMTI0LDE4NC4yMWwxMi40Ni0zNC45YTgsOCwwLDAsMSwxNS4wNyw1LjM4Wk0yMTYsMTg0djE2Ljg3YTgsOCwwLDAsMS0yLjIyLDUuNTNBMzAuMDYsMzAuMDYsMCwwLDEsMTkyLDIxNmMtMTcuNjQsMC0zMi0xNi4xNS0zMi0zNnMxNC4zNi0zNiwzMi0zNmEyOS4zOCwyOS4zOCwwLDAsMSwxNi40OCw1LjEyLDgsOCwwLDAsMS04Ljk1LDEzLjI2QTEzLjI3LDEzLjI3LDAsMCwwLDE5MiwxNjBjLTguODIsMC0xNiw5LTE2LDIwczcuMTgsMjAsMTYsMjBhMTMuMzgsMTMuMzgsMCwwLDAsOC0yLjcxVjE5MmE4LDgsMCwwLDEsMC0xNmg4QTgsOCwwLDAsMSwyMTYsMTg0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileSvg";
export { I as FileSvg };
