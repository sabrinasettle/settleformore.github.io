import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/MaginiaRegular-BWP6x.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="maginiaRegular"
    />,
    <link
      rel="preload"
      href="/fonts/NimbusSanL-Reg.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="nimbusSansLReg"
    />,
  ]);
};

// Nimbus Sans L paths
// /Users/sabrina/Desktop/settleformore.github.io/static/fonts/NimbusSanL-Bol.otf
// /Users/sabrina/Desktop/settleformore.github.io/static/fonts/NimbusSanL-BolIta.otf
// /Users/sabrina/Desktop/settleformore.github.io/static/fonts/NimbusSanL-Reg.otf
// /Users/sabrina/Desktop/settleformore.github.io/static/fonts/NimbusSanL-RegIta.otf
