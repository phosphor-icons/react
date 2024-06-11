/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/GearFine";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIwSDIxNS42M2E4Ny4yNyw4Ny4yNywwLDAsMC03Ljc0LTI4Ljg4bDE0LjE4LTguMTlhOCw4LDAsMCwwLTgtMTMuODZsLTE0LjIsOC4yYTg4Ljc4LDg4Ljc4LDAsMCwwLTIxLjE0LTIxLjE0bDguMi0xNC4yYTgsOCwwLDAsMC0xMy44Ni04bC04LjE5LDE0LjE4QTg3LjI3LDg3LjI3LDAsMCwwLDEzNiw0MC4zN1YyNGE4LDgsMCwwLDAtMTYsMFY0MC4zN2E4Ny4yNyw4Ny4yNywwLDAsMC0yOC44OCw3Ljc0TDgyLjkzLDMzLjkzYTgsOCwwLDAsMC0xMy44Niw4bDguMiwxNC4yQTg4Ljc4LDg4Ljc4LDAsMCwwLDU2LjEzLDc3LjI3bC0xNC4yLTguMmE4LDgsMCwwLDAtOCwxMy44NmwxNC4xOCw4LjE5QTg3LjI3LDg3LjI3LDAsMCwwLDQwLjM3LDEyMEgyNGE4LDgsMCwwLDAsMCwxNkg0MC4zN2E4Ny4yNyw4Ny4yNywwLDAsMCw3Ljc0LDI4Ljg4bC0xNC4xOCw4LjE5YTgsOCwwLDAsMCw0LDE0LjkzLDcuOTIsNy45MiwwLDAsMCw0LTEuMDdsMTQuMi04LjJhODguNzgsODguNzgsMCwwLDAsMjEuMTQsMjEuMTRsLTguMiwxNC4yYTgsOCwwLDAsMCwxMy44Niw4bDguMTktMTQuMThBODcuMjcsODcuMjcsMCwwLDAsMTIwLDIxNS42M1YyMzJhOCw4LDAsMCwwLDE2LDBWMjE1LjYzYTg3LjI3LDg3LjI3LDAsMCwwLDI4Ljg4LTcuNzRsOC4xOSwxNC4xOGE4LDgsMCwwLDAsMTMuODYtOGwtOC4yLTE0LjJhODguNzgsODguNzgsMCwwLDAsMjEuMTQtMjEuMTRsMTQuMiw4LjJBOCw4LDAsMCwwLDIyNSwxODRhOCw4LDAsMCwwLTIuOTItMTAuOTNsLTE0LjE4LTguMTlBODcuMjcsODcuMjcsMCwwLDAsMjE1LjYzLDEzNkgyMzJhOCw4LDAsMCwwLDAtMTZaTTEyOCw1NmE3Mi4wOCw3Mi4wOCwwLDAsMSw3MS41NCw2NEgxMzIuNjJMOTkuMTYsNjIuMDVBNzEuNTgsNzEuNTgsMCwwLDEsMTI4LDU2Wk01NiwxMjhBNzIsNzIsMCwwLDEsODUuMzEsNzAuMDZMMTE4Ljc2LDEyOCw4NS4zMSwxODUuOTRBNzIsNzIsMCwwLDEsNTYsMTI4Wm03Miw3MkE3MS41OCw3MS41OCwwLDAsMSw5OS4xNiwxOTRMMTMyLjYyLDEzNmg2Ni45MkE3Mi4wOCw3Mi4wOCwwLDAsMSwxMjgsMjAwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI0SDIxMS45YTgzLjM1LDgzLjM1LDAsMCwwLTkuMjctMzQuNDdsMTcuNDQtMTAuMDdhNCw0LDAsMCwwLTQtNi45MkwxOTguNjIsODIuNjFhODQuNTQsODQuNTQsMCwwLDAtMjUuMjMtMjUuMjNsMTAuMDctMTcuNDVhNCw0LDAsMCwwLTYuOTItNEwxNjYuNDcsNTMuMzdBODMuMzUsODMuMzUsMCwwLDAsMTMyLDQ0LjFWMjRhNCw0LDAsMCwwLTgsMFY0NC4xYTgzLjM1LDgzLjM1LDAsMCwwLTM0LjQ3LDkuMjdMNzkuNDYsMzUuOTNhNCw0LDAsMCwwLTYuOTIsNEw4Mi42MSw1Ny4zOEE4NC41NCw4NC41NCwwLDAsMCw1Ny4zOCw4Mi42MUwzOS45Myw3Mi41NGE0LDQsMCwxLDAtNCw2LjkyTDUzLjM3LDg5LjUzQTgzLjM1LDgzLjM1LDAsMCwwLDQ0LjEsMTI0SDI0YTQsNCwwLDAsMCwwLDhINDQuMWE4My4zNSw4My4zNSwwLDAsMCw5LjI3LDM0LjQ3TDM1LjkzLDE3Ni41NGE0LDQsMCwwLDAsMiw3LjQ2LDMuOSwzLjksMCwwLDAsMi0uNTRsMTcuNDUtMTAuMDdhODQuNTQsODQuNTQsMCwwLDAsMjUuMjMsMjUuMjNMNzIuNTQsMjE2LjA3QTQsNCwwLDAsMCw3NCwyMjEuNTNhNCw0LDAsMCwwLDUuNDYtMS40NmwxMC4wNy0xNy40NEE4My4zNSw4My4zNSwwLDAsMCwxMjQsMjExLjlWMjMyYTQsNCwwLDAsMCw4LDBWMjExLjlhODMuMzUsODMuMzUsMCwwLDAsMzQuNDctOS4yN2wxMC4wNywxNy40NGE0LDQsMCwwLDAsNi45Mi00bC0xMC4wNy0xNy40NWE4NC41NCw4NC41NCwwLDAsMCwyNS4yMy0yNS4yM2wxNy40NSwxMC4wN2EzLjksMy45LDAsMCwwLDIsLjU0LDQsNCwwLDAsMCwyLTcuNDZsLTE3LjQ0LTEwLjA3QTgzLjM1LDgzLjM1LDAsMCwwLDIxMS45LDEzMkgyMzJhNCw0LDAsMCwwLDAtOFpNMTI4LDUyYTc2LjA5LDc2LjA5LDAsMCwxLDc1Ljg5LDcySDEzMC4zMUw5My41Myw2MC4zQTc1LjU5LDc1LjU5LDAsMCwxLDEyOCw1MlpNNTIsMTI4QTc2LDc2LDAsMCwxLDg2LjYxLDY0LjMxTDEyMy4zOCwxMjgsODYuNjEsMTkxLjY5QTc2LDc2LDAsMCwxLDUyLDEyOFptNzYsNzZhNzUuNTksNzUuNTksMCwwLDEtMzQuNDctOC4zTDEzMC4zMSwxMzJoNzMuNThBNzYuMDksNzYuMDksMCwwLDEsMTI4LDIwNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIySDIxMy43N2E4NS41Niw4NS41NiwwLDAsMC04LjQ5LTMxLjY5bDE1Ljc5LTkuMTFhNiw2LDAsMCwwLTYtMTAuNGwtMTUuOCw5LjEyYTg2LjcyLDg2LjcyLDAsMCwwLTIzLjE5LTIzLjE5bDkuMTItMTUuOGE2LDYsMCwwLDAtMTAuNC02bC05LjExLDE1Ljc5QTg1LjU2LDg1LjU2LDAsMCwwLDEzNCw0Mi4yM1YyNGE2LDYsMCwwLDAtMTIsMFY0Mi4yM2E4NS41Niw4NS41NiwwLDAsMC0zMS42OSw4LjQ5TDgxLjIsMzQuOTNhNiw2LDAsMCwwLTEwLjQsNmw5LjEyLDE1LjhBODYuNzIsODYuNzIsMCwwLDAsNTYuNzMsNzkuOTJMNDAuOTMsNzAuOGE2LDYsMCwwLDAtNiwxMC40bDE1Ljc5LDkuMTFBODUuNTYsODUuNTYsMCwwLDAsNDIuMjMsMTIySDI0YTYsNiwwLDAsMCwwLDEySDQyLjIzYTg1LjU2LDg1LjU2LDAsMCwwLDguNDksMzEuNjlMMzQuOTMsMTc0LjhhNiw2LDAsMCwwLDYsMTAuNGwxNS44LTkuMTJhODYuNzIsODYuNzIsMCwwLDAsMjMuMTksMjMuMTlsLTkuMTIsMTUuOGE2LDYsMCwwLDAsMTAuNCw2bDkuMTEtMTUuNzlBODUuNTYsODUuNTYsMCwwLDAsMTIyLDIxMy43N1YyMzJhNiw2LDAsMCwwLDEyLDBWMjEzLjc3YTg1LjU2LDg1LjU2LDAsMCwwLDMxLjY5LTguNDlsOS4xMSwxNS43OWE2LDYsMCwwLDAsNS4yMSwzLDUuOTMsNS45MywwLDAsMCwzLS44MSw2LDYsMCwwLDAsMi4yLTguMTlsLTkuMTItMTUuOGE4Ni43Miw4Ni43MiwwLDAsMCwyMy4xOS0yMy4xOWwxNS44LDkuMTJhNiw2LDAsMCwwLDYtMTAuNGwtMTUuNzktOS4xMUE4NS41Niw4NS41NiwwLDAsMCwyMTMuNzcsMTM0SDIzMmE2LDYsMCwwLDAsMC0xMlpNODYsMTg4Ljg0QTczLjksNzMuOSwwLDAsMSw4Niw2Ny4xNkwxMjEuMDcsMTI4Wk0xMjgsMjAyYTczLjUsNzMuNSwwLDAsMS0zMS42Ny03LjE0TDEzMS40NiwxMzRoNzAuMjhBNzQuMDksNzQuMDksMCwwLDEsMTI4LDIwMlptMy40Ni04MEw5Ni4zMyw2MS4xNEE3My45NSw3My45NSwwLDAsMSwyMDEuNzQsMTIyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTE2SDIxOS4yMkE5MS4xLDkxLjEsMCwwLDAsMjEzLDkyLjc5bDExLjA4LTYuNGExMiwxMiwwLDEsMC0xMi0yMC43OEwyMDEsNzJhOTIuODUsOTIuODUsMCwwLDAtMTctMTdsNi40MS0xMS4xMWExMiwxMiwwLDEsMC0yMC43OC0xMkwxNjMuMjEsNDNBOTEuMSw5MS4xLDAsMCwwLDE0MCwzNi43OFYyNGExMiwxMiwwLDAsMC0yNCwwVjM2Ljc4QTkxLjEsOTEuMSwwLDAsMCw5Mi43OSw0M2wtNi40LTExLjA4YTEyLDEyLDAsMCwwLTIwLjc4LDEyTDcyLDU1QTkyLjg1LDkyLjg1LDAsMCwwLDU1LDcyTDQzLjkzLDY1LjYxYTEyLDEyLDAsMCwwLTEyLDIwLjc4TDQzLDkyLjc5QTkxLjEsOTEuMSwwLDAsMCwzNi43OCwxMTZIMjRhMTIsMTIsMCwwLDAsMCwyNEgzNi43OEE5MS4xLDkxLjEsMCwwLDAsNDMsMTYzLjIxbC0xMS4wOCw2LjRhMTIsMTIsMCwxLDAsMTIsMjAuNzhMNTUsMTg0YTkyLjg1LDkyLjg1LDAsMCwwLDE3LDE3bC02LjQxLDExLjExYTEyLDEyLDAsMSwwLDIwLjc4LDEyTDkyLjc5LDIxM0E5MS4xLDkxLjEsMCwwLDAsMTE2LDIxOS4yMlYyMzJhMTIsMTIsMCwwLDAsMjQsMFYyMTkuMjJBOTEuMSw5MS4xLDAsMCwwLDE2My4yMSwyMTNsNi40LDExLjA4YTEyLDEyLDAsMCwwLDIwLjc4LTEyTDE4NCwyMDFhOTIuODUsOTIuODUsMCwwLDAsMTctMTdsMTEuMTEsNi40MWExMiwxMiwwLDEsMCwxMi0yMC43OEwyMTMsMTYzLjIxQTkxLjEsOTEuMSwwLDAsMCwyMTkuMjIsMTQwSDIzMmExMiwxMiwwLDAsMCwwLTI0Wk0xMjgsNjBhNjguMSw2OC4xLDAsMCwxLDY2LjkyLDU2aC02MGwtMzAtNTJBNjcuNjEsNjcuNjEsMCwwLDEsMTI4LDYwWk02MCwxMjhBNjcuOSw2Ny45LDAsMCwxLDg0LjE2LDc2LjA3bDMwLDUxLjkzLTMwLDUxLjkzQTY3LjksNjcuOSwwLDAsMSw2MCwxMjhabTY4LDY4YTY3LjYxLDY3LjYxLDAsMCwxLTIzLjA3LTRsMzAtNTJoNjBBNjguMSw2OC4xLDAsMCwxLDEyOCwxOTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIwaC04LjM0YTk1LjA3LDk1LjA3LDAsMCwwLTguODItMzIuOWw3LjIzLTQuMTdhOCw4LDAsMCwwLTgtMTMuODZsLTcuMjUsNC4xOWE5Nyw5NywwLDAsMC0yNC4wOC0yNC4wOGw0LjE5LTcuMjVhOCw4LDAsMCwwLTEzLjg2LThsLTQuMTcsNy4yM0E5NS4wNyw5NS4wNywwLDAsMCwxMzYsMzIuMzRWMjRhOCw4LDAsMCwwLTE2LDB2OC4zNGE5NS4wNyw5NS4wNywwLDAsMC0zMi45LDguODJsLTQuMTctNy4yM2E4LDgsMCwwLDAtMTMuODYsOGw0LjE5LDcuMjVBOTcsOTcsMCwwLDAsNDkuMTgsNzMuMjZsLTcuMjUtNC4xOWE4LDgsMCwwLDAtOCwxMy44Nmw3LjIzLDQuMTdBOTUuMDcsOTUuMDcsMCwwLDAsMzIuMzQsMTIwSDI0YTgsOCwwLDAsMCwwLDE2aDguMzRhOTUuMDcsOTUuMDcsMCwwLDAsOC44MiwzMi45bC03LjIzLDQuMTdhOCw4LDAsMCwwLDQsMTQuOTMsNy45Miw3LjkyLDAsMCwwLDQtMS4wN2w3LjI1LTQuMTlhOTcsOTcsMCwwLDAsMjQuMDgsMjQuMDhsLTQuMTksNy4yNWE4LDgsMCwwLDAsMTMuODYsOGw0LjE3LTcuMjNhOTUuMDcsOTUuMDcsMCwwLDAsMzIuOSw4LjgyVjIzMmE4LDgsMCwwLDAsMTYsMHYtOC4zNGE5NS4wNyw5NS4wNywwLDAsMCwzMi45LTguODJsNC4xNyw3LjIzYTgsOCwwLDAsMCwxMy44Ni04bC00LjE5LTcuMjVhOTcsOTcsMCwwLDAsMjQuMDgtMjQuMDhsNy4yNSw0LjE5QTgsOCwwLDAsMCwyMjUsMTg0YTgsOCwwLDAsMC0yLjkyLTEwLjkzbC03LjIzLTQuMTdhOTUuMDcsOTUuMDcsMCwwLDAsOC44Mi0zMi45SDIzMmE4LDgsMCwwLDAsMC0xNlpNNzIsMTI4QTU1LjkxLDU1LjkxLDAsMCwxLDkzLjM4LDg0bDI1LjM4LDQ0TDkzLjM4LDE3MkE1NS45MSw1NS45MSwwLDAsMSw3MiwxMjhabTU2LDU2YTU1LjY3LDU1LjY3LDAsMCwxLTIwLjc4LTRsMjUuNC00NGg1MC44QTU2LjA5LDU2LjA5LDAsMCwxLDEyOCwxODRabTQuNjItNjQtMjUuNC00NGE1Niw1NiwwLDAsMSw3Ni4yLDQ0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI4YTgwLDgwLDAsMSwxLTgwLTgwQTgwLDgwLDAsMCwxLDIwOCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDEyMEgyMTUuNjNhODcuMjcsODcuMjcsMCwwLDAtNy43NC0yOC44OGwxNC4xOC04LjE5YTgsOCwwLDAsMC04LTEzLjg2bC0xNC4yLDguMmE4OC43OCw4OC43OCwwLDAsMC0yMS4xNC0yMS4xNGw4LjItMTQuMmE4LDgsMCwwLDAtMTMuODYtOGwtOC4xOSwxNC4xOEE4Ny4yNyw4Ny4yNywwLDAsMCwxMzYsNDAuMzdWMjRhOCw4LDAsMCwwLTE2LDBWNDAuMzdhODcuMjcsODcuMjcsMCwwLDAtMjguODgsNy43NEw4Mi45MywzMy45M2E4LDgsMCwwLDAtMTMuODYsOGw4LjIsMTQuMkE4OC43OCw4OC43OCwwLDAsMCw1Ni4xMyw3Ny4yN2wtMTQuMi04LjJhOCw4LDAsMCwwLTgsMTMuODZsMTQuMTgsOC4xOUE4Ny4yNyw4Ny4yNywwLDAsMCw0MC4zNywxMjBIMjRhOCw4LDAsMCwwLDAsMTZINDAuMzdhODcuMjcsODcuMjcsMCwwLDAsNy43NCwyOC44OGwtMTQuMTgsOC4xOWE4LDgsMCwwLDAsNCwxNC45Myw3LjkyLDcuOTIsMCwwLDAsNC0xLjA3bDE0LjItOC4yYTg4Ljc4LDg4Ljc4LDAsMCwwLDIxLjE0LDIxLjE0bC04LjIsMTQuMmE4LDgsMCwwLDAsMTMuODYsOGw4LjE5LTE0LjE4QTg3LjI3LDg3LjI3LDAsMCwwLDEyMCwyMTUuNjNWMjMyYTgsOCwwLDAsMCwxNiwwVjIxNS42M2E4Ny4yNyw4Ny4yNywwLDAsMCwyOC44OC03Ljc0bDguMTksMTQuMThhOCw4LDAsMCwwLDEzLjg2LThsLTguMi0xNC4yYTg4Ljc4LDg4Ljc4LDAsMCwwLDIxLjE0LTIxLjE0bDE0LjIsOC4yQTgsOCwwLDAsMCwyMjUsMTg0YTgsOCwwLDAsMC0yLjkyLTEwLjkzbC0xNC4xOC04LjE5QTg3LjI3LDg3LjI3LDAsMCwwLDIxNS42MywxMzZIMjMyYTgsOCwwLDAsMCwwLTE2Wk04NS4zMSwxODUuOTRhNzEuOTIsNzEuOTIsMCwwLDEsMC0xMTUuODhMMTE4Ljc2LDEyOFpNMTI4LDIwMEE3MS41OCw3MS41OCwwLDAsMSw5OS4xNiwxOTRMMTMyLjYyLDEzNmg2Ni45MkE3Mi4wOCw3Mi4wOCwwLDAsMSwxMjgsMjAwWm00LjYyLTgwTDk5LjE2LDYyLjA1YTcxLjk0LDcxLjk0LDAsMCwxLDEwMC4zOCw1OFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "GearFine";
export { I as GearFine };
