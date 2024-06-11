/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/User";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuOTIsMjEyYy0xNS4yMy0yNi4zMy0zOC43LTQ1LjIxLTY2LjA5LTU0LjE2YTcyLDcyLDAsMSwwLTczLjY2LDBDNjMuNzgsMTY2Ljc4LDQwLjMxLDE4NS42NiwyNS4wOCwyMTJhOCw4LDAsMSwwLDEzLjg1LDhjMTguODQtMzIuNTYsNTIuMTQtNTIsODkuMDctNTJzNzAuMjMsMTkuNDQsODkuMDcsNTJhOCw4LDAsMSwwLDEzLjg1LThaTTcyLDk2YTU2LDU2LDAsMSwxLDU2LDU2QTU2LjA2LDU2LjA2LDAsMCwxLDcyLDk2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNDYsMjE0Yy0xNi41Mi0yOC41Ni00My00OC4wNi03My42OC01NS4wOWE2OCw2OCwwLDEsMC01MS41NiwwYy0zMC42NCw3LTU3LjE2LDI2LjUzLTczLjY4LDU1LjA5YTQsNCwwLDAsMCw2LjkyLDRDNTUsMTg0LjE5LDg5LjYyLDE2NCwxMjgsMTY0czczLDIwLjE5LDkyLjU0LDU0YTQsNCwwLDAsMCwzLjQ2LDIsMy45MywzLjkzLDAsMCwwLDItLjU0QTQsNCwwLDAsMCwyMjcuNDYsMjE0Wk02OCw5NmE2MCw2MCwwLDEsMSw2MCw2MEE2MC4wNyw2MC4wNywwLDAsMSw2OCw5NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuMTksMjEzYy0xNS44MS0yNy4zMi00MC42My00Ni40OS02OS40Ny01NC42MmE3MCw3MCwwLDEsMC02My40NCwwQzY3LjQ0LDE2Ni41LDQyLjYyLDE4NS42NywyNi44MSwyMTNhNiw2LDAsMSwwLDEwLjM4LDZDNTYuNCwxODUuODEsOTAuMzQsMTY2LDEyOCwxNjZzNzEuNiwxOS44MSw5MC44MSw1M2E2LDYsMCwxLDAsMTAuMzgtNlpNNzAsOTZhNTgsNTgsMCwxLDEsNTgsNThBNTguMDcsNTguMDcsMCwwLDEsNzAsOTZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuMzgsMjEwYTEyMy4zNiwxMjMuMzYsMCwwLDAtNjAuNzgtNTMuMjMsNzYsNzYsMCwxLDAtOTEuMiwwQTEyMy4zNiwxMjMuMzYsMCwwLDAsMjEuNjIsMjEwYTEyLDEyLDAsMSwwLDIwLjc3LDEyYzE4LjEyLTMxLjMyLDUwLjEyLTUwLDg1LjYxLTUwczY3LjQ5LDE4LjY5LDg1LjYxLDUwYTEyLDEyLDAsMCwwLDIwLjc3LTEyWk03Niw5NmE1Miw1MiwwLDEsMSw1Miw1MkE1Mi4wNiw1Mi4wNiwwLDAsMSw3Niw5NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuOTMsMjIwYTgsOCwwLDAsMS02LjkzLDRIMzJhOCw4LDAsMCwxLTYuOTItMTJjMTUuMjMtMjYuMzMsMzguNy00NS4yMSw2Ni4wOS01NC4xNmE3Miw3MiwwLDEsMSw3My42NiwwYzI3LjM5LDguOTUsNTAuODYsMjcuODMsNjYuMDksNTQuMTZBOCw4LDAsMCwxLDIzMC45MywyMjBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsOTZhNjQsNjQsMCwxLDEtNjQtNjRBNjQsNjQsMCwwLDEsMTkyLDk2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMC45MiwyMTJjLTE1LjIzLTI2LjMzLTM4LjctNDUuMjEtNjYuMDktNTQuMTZhNzIsNzIsMCwxLDAtNzMuNjYsMEM2My43OCwxNjYuNzgsNDAuMzEsMTg1LjY2LDI1LjA4LDIxMmE4LDgsMCwxLDAsMTMuODUsOGMxOC44NC0zMi41Niw1Mi4xNC01Miw4OS4wNy01MnM3MC4yMywxOS40NCw4OS4wNyw1MmE4LDgsMCwxLDAsMTMuODUtOFpNNzIsOTZhNTYsNTYsMCwxLDEsNTYsNTZBNTYuMDYsNTYuMDYsMCwwLDEsNzIsOTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "User";
export { I as User };
