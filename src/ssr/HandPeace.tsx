/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HandPeace";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsMzBBMjgsMjgsMCwwLDAsMTYxLDM2Ljc3TDE0OCw4NS4wOSwxMzUuMDUsMzYuNzdBMjgsMjgsMCwxLDAsODEsNTEuMjZsOS4zOCwzNS04LjczLTEuNjhBMjgsMjgsMCwwLDAsNTYuOCwxMzIuMzgsMjcuODYsMjcuODYsMCwwLDAsNDgsMTUyLjg3VjE2MGE4MCw4MCwwLDAsMCw4MCw4MGguNjFjNDMuNzgtLjMzLDc5LjM5LTM2LjYyLDc5LjM5LTgwLjl2LTMuMzRhNTUuODgsNTUuODgsMCwwLDAtMTEuNzctMzQuMjdMMjE1LDUxLjI2QTI3LjgsMjcuOCwwLDAsMCwyMTIuMjQsMzBaTTk3LjYxLDM4YTEyLDEyLDAsMCwxLDIyLDIuOWwxNC43Nyw1NS4xNWEyOCwyOCwwLDAsMC0xNCw0Ljc3LDIuMjYsMi4yNiwwLDAsMC0uMTYtLjI2QTI3LjY1LDI3LjY1LDAsMCwwLDEwOCw5MC4zNUw5Ni40Miw0Ny4xMkExMS45NCwxMS45NCwwLDAsMSw5Ny42MSwzOFptLTMzLjM2LDcxLjZhMTIsMTIsMCwwLDEsMTQuMjUtOS4zNGwyMC43MSw0YTEyLDEyLDAsMCwxLDkuMzYsMTQuMTYsMTIsMTIsMCwwLDEtMTQuMjUsOS4zNGwtMjAuNzUtNGExMiwxMiwwLDAsMS05LjMyLTE0LjE1Wm0wLDQwLjcyYTEyLDEyLDAsMCwxLDE0LTkuMzdsMTAuMTEsMmExMiwxMiwwLDAsMSw5LjM2LDE0LjE1LDEyLDEyLDAsMCwxLTE0LjIsOS4zNWwtMTAtMmExMiwxMiwwLDAsMS05LjM0LTE0LjE2Wk0xOTIsMTU5LjFjMCwzNS41My0yOC40OSw2NC42NC02My41LDY0LjlhNjQuMDgsNjQuMDgsMCwwLDEtNjEuNTYtNDQuNzgsMzAuNzQsMzAuNzQsMCwwLDAsMy40OC45NWgwbDEwLDJhMjguMzMsMjguMzMsMCwwLDAsNS42MS41NywyOCwyOCwwLDAsMCwyNC4xNi00Mi4xNGMuNzktLjQzLDEuNTctLjg5LDIuMzItMS40bC4xNi4yNmEyNy44MiwyNy44MiwwLDAsMCwxNy43OCwxMmw2LjMyLDEuMjZhMzYsMzYsMCwwLDAsOS41MywzMi40OUE4LDgsMCwwLDAsMTU3LjcxLDE3NGEyMCwyMCwwLDAsMS0zLjMxLTIzLjUxLDgsOCwwLDAsMC01LjQ2LTExLjY2bC0xNS4zNC0zLjA3YTEyLDEyLDAsMCwxLTkuMzUtMTQuMTVoMGExMiwxMiwwLDAsMSwxNC4xOC05LjM1bDIxLjQxLDQuMjhBNDAuMSw0MC4xLDAsMCwxLDE5MiwxNTUuNzZabTcuNTktMTEyLTE2LjYyLDYyYTU1LjU1LDU1LjU1LDAsMCwwLTIwLTguMjhsLTIuNS0uNUwxNzYuNCw0MC45MWExMiwxMiwwLDEsMSwyMy4xOCw2LjIxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDguNzcsMzJhMjQsMjQsMCwwLDAtNDQsNS43OUwxNDgsMTAwLjU0LDEzMS4xOSwzNy44QTI0LDI0LDAsMCwwLDg0LjgyLDUwLjIybDExLDQxLjE3LTE1LTIuOWEyNCwyNCwwLDAsMC0xNy40OSw0My44N2wtLjU1LjM1YTIzLjg1LDIzLjg1LDAsMCwwLTEwLjI4LDE1LjIyLDI0LjY1LDI0LjY1LDAsMCwwLS40OSw0Ljg5VjE2MGE3Niw3NiwwLDAsMCw3Niw3NmguNTljNDEuNTgtLjMxLDc1LjQyLTM0LjgxLDc1LjQyLTc2Ljl2LTMuMzRhNTEuOTEsNTEuOTEsMCwwLDAtMTIuMTctMzMuMzVsMTkuMzQtNzIuMTlBMjMuODIsMjMuODIsMCwwLDAsMjA4Ljc3LDMyWk05NC4xNSwzNmExNiwxNiwwLDAsMSwyOS4zMSwzLjg2bDE2LjE5LDYwLjQyQTI0LDI0LDAsMCwwLDExOS4wNywxMDdhMjQuMzUsMjQuMzUsMCwwLDAtMi4yNC00LjI1LDIzLjc1LDIzLjc1LDAsMCwwLTEyLjE3LTkuNDFMOTIuNTUsNDguMTVBMTUuOSwxNS45LDAsMCwxLDk0LjE1LDM2Wm0tMzMuODIsNzIuOEExNiwxNiwwLDAsMSw3OS4yNSw5Ni4zNGwyMC43Niw0YTE2LDE2LDAsMSwxLTYuNDQsMzEuMzRsLTIwLjc5LTRhMTYsMTYsMCwwLDEtMTIuNDUtMTguODdabTAsNDAuNzJBMTYsMTYsMCwwLDEsNzkuMDksMTM3bDEwLjExLDJhMTYsMTYsMCwxLDEtNi40MiwzMS4zNWwtMTAtMmExNiwxNiwwLDAsMS0xMi40Ny0xOC44OFpNMTk2LDE1OS4xYzAsMzcuNzEtMzAuMjgsNjguNjItNjcuNDgsNjguOUE2OCw2OCwwLDAsMSw2MSwxNzEuNDNhMjMuNzUsMjMuNzUsMCwwLDAsMTAuMjQsNC44MWgwbDEwLDJhMjQuMTksMjQuMTksMCwwLDAsNC44NS40OUEyMy45LDIzLjksMCwwLDAsMTA0LDEzOC44OGEyNC4wNywyNC4wNywwLDAsMCw5Ljc1LTUuODksMjUsMjUsMCwwLDAsMi4yNCw0LjI1LDIzLjgzLDIzLjgzLDAsMCwwLDE1LjI0LDEwLjI4bDEwLjUsMi4xMUEzMi4yNywzMi4yNywwLDAsMCwxNDAsMTYwYTMxLjg1LDMxLjg1LDAsMCwwLDkuMTQsMjIuNCw0LDQsMCwwLDAsNS43MS01LjYsMjQsMjQsMCwwLDEtNC0yOC4yMiw0LDQsMCwwLDAtMi43My01LjgzbC0xNS4zNS0zLjA3YTE2LDE2LDAsMSwxLDYuNDItMzEuMzVsMjEuNCw0LjI4QTQ0LjEyLDQ0LjEyLDAsMCwxLDE5NiwxNTUuNzZabTcuNDUtMTEwLjk1TDE4NS4zLDExNS44OGE1MS42LDUxLjYsMCwwLDAtMjMuMTEtMTEuMTFsLTYuNjgtMS4zNCwxNy02My41NmExNiwxNiwwLDAsMSwzMC45MSw4LjI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuNTEsMzFhMjYsMjYsMCwwLDAtNDcuNjMsNi4yN0wxNDgsOTIuODIsMTMzLjEyLDM3LjI4QTI2LDI2LDAsMCwwLDgyLjg5LDUwLjc0TDkzLjEsODguODIsODEuMjEsODYuNTNhMjYsMjYsMCwwLDAtMjEuMzcsNDUuODUsMjUuODEsMjUuODEsMCwwLDAtOS4zMSwxNS4xNSwyNi42NiwyNi42NiwwLDAsMC0uNTMsNS4zMlYxNjBhNzgsNzgsMCwwLDAsNzgsNzhoLjZjNDIuNjgtLjMyLDc3LjQtMzUuNzEsNzcuNC03OC45di0zLjM0YTUzLjg2LDUzLjg2LDAsMCwwLTEyLTMzLjgybDE5LjA3LTcxLjJBMjUuODMsMjUuODMsMCwwLDAsMjEwLjUxLDMxWk05NS44OCwzN2ExNCwxNCwwLDAsMSwyNS42NSwzLjM4TDEzNyw5OGEyNiwyNiwwLDAsMC0xNy4yMyw1LjcxYy0uMzgtLjctLjc5LTEuMzktMS4yNC0yLjA3YTI1LjcyLDI1LjcyLDAsMCwwLTEyLjE4LTkuODVMOTQuNDgsNDcuNjNBMTMuOTQsMTMuOTQsMCwwLDEsOTUuODgsMzdabS0zMy41OSw3Mi4yQTE0LDE0LDAsMCwxLDc4Ljg3LDk4LjNsMjAuNzQsNEExNCwxNCwwLDEsMSw5NCwxMjkuNzFsLTEyLTIuMzEtLjcyLS4xNC0uNC0uMDctNy42My0xLjQ3YTE0LDE0LDAsMCwxLTEwLjg5LTE2LjUxWm0wLDQwLjcyQTE0LDE0LDAsMCwxLDc4LjY2LDEzOWwxLC4yTDg4LjgsMTQxYTE0LDE0LDAsMSwxLTUuNjMsMjcuNDJsLTEwLTJhMTQsMTQsMCwwLDEtMTAuOS0xNi41MVpNMTk0LDE1OS4xYzAsMzYuNjItMjkuMzksNjYuNjMtNjUuNSw2Ni45YTY2LjA2LDY2LjA2LDAsMCwxLTY0LjYxLTUwLjI2LDI1LjY5LDI1LjY5LDAsMCwwLDYuOTIsMi40NmgwbDEwLDJhMjYuNzksMjYuNzksMCwwLDAsNS4yNS41MywyNiwyNiwwLDAsMCwyMS42NC00MC4zNGwtLjQyLS42YTI2LjI2LDI2LjI2LDAsMCwwLDUuODEtMy41MnEuNTcsMS4wNiwxLjIzLDIuMDdhMjUuODYsMjUuODYsMCwwLDAsMTYuNTIsMTEuMTVsOC4zNCwxLjY2QTM0LjMsMzQuMywwLDAsMCwxMzgsMTYwYTMzLjg1LDMzLjg1LDAsMCwwLDkuNzEsMjMuOCw2LDYsMCwwLDAsOC41Ny04LjQsMjIsMjIsMCwwLDEtMy42NC0yNS44Niw2LDYsMCwwLDAtNC4xLTguNzVsLTE1LjM0LTMuMDdhMTQsMTQsMCwxLDEsNS42My0yNy40MmwyMS40LDQuMjdBNDIuMTIsNDIuMTIsMCwwLDEsMTk0LDE1NS43NlptNy41MS0xMTEuNDctMTcuMzYsNjQuNzlhNTMuNiw1My42LDAsMCwwLTIxLjU3LTkuNjFsLTQuNTktLjkyLDE2LjQ4LTYxLjVhMTQsMTQsMCwwLDEsMjcsNy4yNFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNywyOGEzMiwzMiwwLDAsMC01OC42Miw3LjcyTDE0OCw2OS42NGwtOS4wOS0zMy45MUEzMiwzMiwwLDAsMCw3Ny4xLDUyLjNsNy43MiwyOC44Mi0yLjQ5LS40OGEzMiwzMiwwLDAsMC0zMyw0OWMuNjMuOTUsMS4zMSwxLjg2LDIsMi43M2EzMS42OSwzMS42OSwwLDAsMC02LjY3LDE0LDMyLjA4LDMyLjA4LDAsMCwwLS42NSw2LjU5VjE2MGE4NCw4NCwwLDAsMCw4NCw4NGguNjRjNDYtLjM0LDgzLjM2LTM4LjQzLDgzLjM2LTg0Ljl2LTMuMzRhNTkuODMsNTkuODMsMCwwLDAtMTEuNDEtMzUuMUwyMTguOSw1Mi4zQTMxLjg0LDMxLjg0LDAsMCwwLDIxNS43LDI4Wk0xODAuMjYsNDEuOTRhOCw4LDAsMCwxLDE1LjQ2LDQuMTRMMTgwLjQ3LDEwM2E1OS42NCw1OS42NCwwLDAsMC0xNS01LjY3Wk0xMDEuMDgsNDBhOCw4LDAsMCwxLDE0LjY1LDEuOTNsMTMuNjEsNTAuNzhhMzIuMjQsMzIuMjQsMCwwLDAtNy45MiwyLjgzLDMxLjg2LDMxLjg2LDAsMCwwLTEwLThsLTExLjEtNDEuNDNBOCw4LDAsMCwxLDEwMS4wOCw0MFpNNjkuMzMsMTU3LjE0YTgsOCwwLDAsMSw4LjE4LTEyLjI2bDEwLjA5LDJhOCw4LDAsMCwxLDYuMjQsOS40Myw4LDgsMCwwLDEtOS40OSw2LjIzbC0xMC0yQTgsOCwwLDAsMSw2OS4zMywxNTcuMTRabS0xLjE2LTQ2LjczYTgsOCwwLDAsMSw5LjQ0LTYuMjRsLjEzLDAsMjAuNzMsNGE4LDgsMCwwLDEtMy4yNiwxNS42N2wtLjEzLDAtMjAuNzItNGE4LDgsMCwwLDEtNi4xOS05LjQzWk0xODgsMTU5LjFjMCwzMy4zNC0yNi43LDYwLjY2LTU5LjUzLDYwLjlhNjAuMDksNjAuMDksMCwwLDEtNTUuMS0zNS4xN2w2LjI0LDEuMjVhMzIsMzIsMCwwLDAsMzguMS0zNS44MiwzMiwzMiwwLDAsMCwxMiw1LjExbDIuNTYuNTFBNDAuNiw0MC42LDAsMCwwLDEzMiwxNjBhMzkuNzksMzkuNzksMCwwLDAsMTEuNDMsMjgsMTIsMTIsMCwwLDAsMTcuMTQtMTYuOCwxNiwxNiwwLDAsMS0yLjY2LTE4LjgsMTIsMTIsMCwwLDAtOC4xOS0xNy40OWwtMTUuMzItMy4wNmE4LDgsMCwxLDEsMy4yNS0xNS42N2wyMS40LDQuMjhBMzYuMDksMzYuMDksMCwwLDEsMTg4LDE1NS43NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Ni41NSwzNi4xNGExNiwxNiwwLDAsMSwxMS0xOS41MmM4LjYxLTIuNDYsMTcuNjUsMywyMCwxMS42NWwxNiw1OS43OGE0LDQsMCwwLDEtMy4xOCw1QTMxLjc5LDMxLjc5LDAsMCwwLDEyOCw5OGMtLjU2LjM3LTEuMS43Ni0xLjY0LDEuMTctLjMzLS41OC0uNjctMS4xNi0xLTEuNzJhMzEuNzQsMzEuNzQsMCwwLDAtMTQtMTEuNzIsMy45NCwzLjk0LDAsMCwxLTIuMjUtMi42MlpNODAuNCwxNzYuNjVhMTYuMTcsMTYuMTcsMCwwLDAsMy4yMy4zM0ExNiwxNiwwLDAsMCw4Ni44LDE0NS4zbC0xOS41OS00YTE2LDE2LDAsMCwwLTYuNDEsMzEuMzVabS0xOS42LTUzLDM0LjY0LDcuMDdhMTYsMTYsMCwxLDAsNi40LTMxLjM1TDY3LjIxLDkyLjMzQTE2LDE2LDAsMCwwLDQ4LjMzLDEwNC44LDE2LDE2LDAsMCwwLDYwLjgsMTIzLjY4Wm0xMDItMjguMTYsMjMuNTUsNC44MUE0LDQsMCwwLDAsMTkxLDk3LjQ0bDE2LjQyLTYxLjNhMTYsMTYsMCwwLDAtMzAuOTEtOC4yOGwtMTYuOCw2Mi43QTQsNCwwLDAsMCwxNjIuODEsOTUuNTJabTM3LjM0LDMxLjc0YTIzLjg5LDIzLjg5LDAsMCwwLTE1LjY3LTExTDE0OC44NywxMDlhMTYsMTYsMCwwLDAtMTUuMTIsNSwxNCwxNCwwLDAsMC0yLjQzLDMuNTcsMTYsMTYsMCwwLDAsMS43MiwxNywxNi41LDE2LjUsMCwwLDAsOS44LDUuOTNsMTUuMjQsMy4xMWE4LjA2LDguMDYsMCwwLDEsNi4zMiw5LjM2LDI4LDI4LDAsMCwwLDIuNzcsMTksOC4xOSw4LjE5LDAsMCwxLTEuOTMsMTAuNDEsOCw4LDAsMCwxLTExLjk0LTIuNDMsNDQsNDQsMCwwLDEtNS40OC0yMi4wOUwxMzkuMjcsMTU2QTMxLjc4LDMxLjc4LDAsMCwxLDExOSwxNDIuMzJjLS4zOC0uNTctLjczLTEuMTUtMS4wNi0xLjc0YTMyLjEyLDMyLjEyLDAsMCwxLTYuODcsNEEzMiwzMiwwLDAsMSw4My42MywxOTNhMzIuMzIsMzIuMzIsMCwwLDEtNi40My0uNjVsLTE5LjU5LTRoLS4wNmEyLjYxLDIuNjEsMCwwLDAtMywzLjU3QTgwLjE5LDgwLjE5LDAsMCwwLDEyOCwyNDBoLjYxYzQzLjc3LS4zMyw3OS4zOS0zNi42Miw3OS4zOS04MC45di0zLjM0QTU1LjcyLDU1LjcyLDAsMCwwLDIwMC4xNSwxMjcuMjZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODcuNDMsMTIzLjM3aDBBNDcuOSw0Ny45LDAsMCwxLDIwMCwxNTUuNzZ2My4zNGMwLDM5LjctMzEuNzUsNzIuNi03MS40NSw3Mi45QTcyLDcyLDAsMCwxLDU2LDE2MHYtNy4yOGgwYTE5LjUyLDE5LjUyLDAsMCwxLC40MS00LDIwLDIwLDAsMCwxLDIzLjQ2LTE1LjYyTDcyLDEzMS42YTIwLDIwLDAsMCwxLDgtMzkuMTlsMjAuODEsNCwuNTcuMTR2MEw4OC42OSw0OS4xOGEyMCwyMCwwLDEsMSwzOC42My0xMC4zNWwxNy44NSw2Ni42MSw1LjM3LDEuMDcsMTguMTQtNjcuNjhhMjAsMjAsMCwwLDEsMzguNjMsMTAuMzVaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjEyLjI0LDMwQTI4LDI4LDAsMCwwLDE2MSwzNi43N0wxNDgsODUuMDksMTM1LjA1LDM2Ljc3QTI4LDI4LDAsMSwwLDgxLDUxLjI2bDkuMzgsMzUtOC43My0xLjY4QTI4LDI4LDAsMCwwLDU2LjgsMTMyLjM4LDI3Ljg2LDI3Ljg2LDAsMCwwLDQ4LDE1Mi44N1YxNjBhODAsODAsMCwwLDAsODAsODBoLjYxYzQzLjc4LS4zMyw3OS4zOS0zNi42Miw3OS4zOS04MC45di0zLjM0YTU1Ljg4LDU1Ljg4LDAsMCwwLTExLjc3LTM0LjI3TDIxNSw1MS4yNkEyNy44LDI3LjgsMCwwLDAsMjEyLjI0LDMwWk05Ny42MSwzOGExMiwxMiwwLDAsMSwyMiwyLjlsMTQuNzcsNTUuMTVhMjgsMjgsMCwwLDAtMTQsNC43NywyLjI2LDIuMjYsMCwwLDAtLjE2LS4yNkEyNy42NSwyNy42NSwwLDAsMCwxMDgsOTAuMzVMOTYuNDIsNDcuMTJBMTEuOTQsMTEuOTQsMCwwLDEsOTcuNjEsMzhabS0zMy4zNiw3MS42YTEyLDEyLDAsMCwxLDE0LjI1LTkuMzRsMjAuNzEsNGExMiwxMiwwLDAsMSw5LjM2LDE0LjE2LDEyLDEyLDAsMCwxLTE0LjI1LDkuMzRsLTIwLjc1LTRhMTIsMTIsMCwwLDEtOS4zMi0xNC4xNVptMCw0MC43MmExMiwxMiwwLDAsMSwxNC05LjM3bDEwLjExLDJhMTIsMTIsMCwwLDEsOS4zNiwxNC4xNSwxMiwxMiwwLDAsMS0xNC4yLDkuMzVsLTEwLTJhMTIsMTIsMCwwLDEtOS4zNC0xNC4xNlpNMTkyLDE1OS4xYzAsMzUuNTMtMjguNDksNjQuNjQtNjMuNSw2NC45YTY0LjA4LDY0LjA4LDAsMCwxLTYxLjU2LTQ0Ljc4LDMwLjc0LDMwLjc0LDAsMCwwLDMuNDguOTVoMGwxMCwyYTI4LjMzLDI4LjMzLDAsMCwwLDUuNjEuNTcsMjgsMjgsMCwwLDAsMjQuMTYtNDIuMTRjLjc5LS40MywxLjU3LS44OSwyLjMyLTEuNGwuMTYuMjZhMjcuODIsMjcuODIsMCwwLDAsMTcuNzgsMTJsNi4zMiwxLjI2YTM2LDM2LDAsMCwwLDkuNTMsMzIuNDlBOCw4LDAsMCwwLDE1Ny43MSwxNzRhMjAsMjAsMCwwLDEtMy4zMS0yMy41MSw4LDgsMCwwLDAtNS40Ni0xMS42NmwtMTUuMzQtMy4wN2ExMiwxMiwwLDAsMS05LjM1LTE0LjE1aDBhMTIsMTIsMCwwLDEsMTQuMTgtOS4zNWwyMS40MSw0LjI4QTQwLjEsNDAuMSwwLDAsMSwxOTIsMTU1Ljc2Wm03LjU5LTExMi0xNi42Miw2MmE1NS41NSw1NS41NSwwLDAsMC0yMC04LjI4bC0yLjUtLjVMMTc2LjQsNDAuOTFhMTIsMTIsMCwxLDEsMjMuMTgsNi4yMVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HandPeace";
export { I as HandPeace };
