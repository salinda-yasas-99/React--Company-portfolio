import { React } from "react";
import { motion } from "framer-motion";

const NewSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 500 500",
    }}
    viewBox="0 0 500 500"
    {...props}
  >
    <path
      d="M430.53 409.572c47.49-36.11 68.64-136.24-8.47-185.34-51.05-32.5-82.8-13.96-140.23-35.46-70.11-26.24-80.56-105.52-165.84-66.51-45.18 20.66-76.5 78.89-82.01 145.07-5.4 64.81 17.57 109.28 64.51 139.71 110.23 4.69 220.68 3.84 332.04 2.53z"
      style={{
        fill: "#dff3fc",
      }}
    />
    <path
      d="M235.432 124.76c-7.173 28.8 19.464 57.31 47.526 69.13 28.063 11.83 60.243 10.42 90.307 4.78 12.972-2.43 26.307-5.85 36.384-14.12 10.078-8.27 15.92-22.63 10.397-34.23-4.874-10.23-16.74-15.47-28.052-18.16-11.312-2.69-23.327-3.79-33.405-9.45-9.556-5.37-16.335-14.26-24.646-21.3-15.356-12.99-36.927-19.43-56.891-15.32-19.975 4.11-35.523 14.19-41.62 38.67z"
      style={{
        fill: "#dff3fc",
      }}
    />
    {/* wheel */}
    <motion.path
      d="M450.295 257.226v-21.788h-8.262a42.262 42.262 0 0 0-4.443-10.71l5.842-5.851-15.408-15.408-5.851 5.842a42.269 42.269 0 0 0-10.71-4.443v-8.261h-21.788v8.261a42.299 42.299 0 0 0-10.71 4.443l-5.851-5.842-15.408 15.408 5.842 5.851a42.598 42.598 0 0 0-4.443 10.71h-8.261v21.788h8.261a42.628 42.628 0 0 0 4.443 10.71l-5.842 5.851 15.408 15.408 5.851-5.842a42.598 42.598 0 0 0 10.71 4.443v8.261h21.788v-8.261a42.628 42.628 0 0 0 10.71-4.443l5.851 5.842 15.408-15.408-5.842-5.851a42.269 42.269 0 0 0 4.443-10.71h8.262zm-49.719 7.983c-10.428 0-18.883-8.455-18.883-18.883 0-10.417 8.455-18.871 18.883-18.871 10.417 0 18.871 8.454 18.871 18.871 0 10.429-8.454 18.883-18.871 18.883z"
      style={{
        fill: "#a2c7eb",
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: "20", ease: "easeOut", repeat: "infinity" }}
    />
    <path
      d="m384.455 311.817-4.145-10.805-4.097 1.572a22.447 22.447 0 0 0-4.241-4.466l1.784-4.013-10.572-4.71-1.79 4.01a22.453 22.453 0 0 0-6.156-.166l-1.572-4.097-10.805 4.145 1.572 4.097a22.447 22.447 0 0 0-4.466 4.241l-4.013-1.784-4.71 10.572 4.01 1.79a22.69 22.69 0 0 0-.166 6.156l-4.097 1.572 4.145 10.805 4.097-1.572a22.618 22.618 0 0 0 4.241 4.466l-1.784 4.013 10.572 4.71 1.79-4.01a22.65 22.65 0 0 0 6.156.166l1.572 4.097 10.805-4.145-1.572-4.097a22.618 22.618 0 0 0 4.466-4.241l4.013 1.784 4.71-10.572-4.01-1.79c.332-2.009.398-4.078.166-6.156l4.097-1.572zm-23.138 13.419c-5.171 1.984-10.973-.6-12.957-5.772-1.982-5.166.602-10.967 5.774-12.951 5.166-1.982 10.967.603 12.949 5.768 1.984 5.171-.6 10.973-5.766 12.955zM349.053 273.917l-2.801-7.301-2.768 1.062a15.168 15.168 0 0 0-2.866-3.018l1.205-2.712-7.144-3.182-1.21 2.71a15.179 15.179 0 0 0-4.16-.112l-1.062-2.768-7.301 2.801 1.062 2.768a15.192 15.192 0 0 0-3.018 2.865l-2.712-1.205-3.182 7.144 2.71 1.21a15.297 15.297 0 0 0-.112 4.16l-2.768 1.062 2.801 7.301 2.768-1.062a15.31 15.31 0 0 0 2.866 3.018l-1.205 2.712 7.144 3.182 1.21-2.71c1.358.224 2.755.266 4.16.112l1.062 2.768 7.301-2.801-1.062-2.768a15.272 15.272 0 0 0 3.017-2.865l2.712 1.205 3.182-7.144-2.71-1.21c.224-1.358.269-2.756.112-4.16l2.769-1.062zm-15.634 9.066a6.779 6.779 0 0 1-8.755-3.9 6.775 6.775 0 1 1 8.755 3.9z"
      style={{
        fill: "none",
        stroke: "#a2c7eb",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M346.511 146.088c0 10.948-5.117 20.707-13.078 27.013-5.862 4.652-13.274 7.412-21.348 7.412a34.281 34.281 0 0 1-21.348-7.412c-7.971-6.306-13.078-16.065-13.078-27.013 0-19.012 15.414-34.426 34.426-34.426s34.426 15.414 34.426 34.426z"
      style={{
        fill: "#0097d8",
        stroke: "#0097d8",
        strokeMiterlimit: 10,
      }}
    />
    <ellipse
      cx={312.085}
      cy={134.757}
      rx={11.269}
      ry={11.268}
      style={{
        fill: "#fff",
      }}
      transform="rotate(-7.036 312.127 134.771)"
    />
    <path
      d="M333.433 168.759c-5.862 4.652-13.274 7.413-21.348 7.413a34.276 34.276 0 0 1-21.348-7.413c2.202-9.687 4.228-18.05 6.337-20.169 2.977-2.977 10.886-4.714 15-4.714s12.395 2.109 13.925 3.639c3.123 3.111 5.811 11.702 7.434 21.244z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M262.61 230.952v-17c0-4.64 3.76-8.4 8.4-8.4h53.56c4.64 0 8.4 3.76 8.4 8.4v17c0 4.64-3.76 8.4-8.4 8.4h-53.55c-4.64.01-8.41-3.76-8.41-8.4z"
      style={{
        fill: "#0097d8",
      }}
    />
    <path
      d="m285.23 230.062-25.92 25.25 42.01-21.23"
      style={{
        fill: "#0097d8",
      }}
    />
    <path
      d="M269.11 213.532v-.09c0-.69.56-1.25 1.25-1.25h26.48c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-26.48c-.69 0-1.25-.56-1.25-1.25zM299.28 213.532v-.09c0-.69.56-1.25 1.25-1.25h23.11c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-23.11c-.69 0-1.25-.56-1.25-1.25zM289.19 219.222v-.09c0-.69.56-1.25 1.25-1.25h33.2c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-33.2c-.69 0-1.25-.56-1.25-1.25zM269.11 219.222v-.09c0-.69.56-1.25 1.25-1.25h14.83c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-14.83c-.69 0-1.25-.56-1.25-1.25zM293.8 224.912v-.09c0-.69.56-1.25 1.25-1.25h28.59c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-28.59c-.69 0-1.25-.56-1.25-1.25zM269.11 224.912v-.09c0-.69.56-1.25 1.25-1.25h19.75c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-19.75c-.69 0-1.25-.56-1.25-1.25zM269.11 230.602v-.09c0-.69.56-1.25 1.25-1.25h7.33c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-7.33c-.69 0-1.25-.56-1.25-1.25zM281.53 230.602v-.09c0-.69.56-1.25 1.25-1.25h40.86c.69 0 1.25.56 1.25 1.25v.09c0 .69-.56 1.25-1.25 1.25h-40.86c-.69 0-1.25-.56-1.25-1.25z"
      style={{
        fill: "#fff",
      }}
    />
    <circle
      cx={100.368}
      cy={192.915}
      r={33.12}
      style={{
        fill: "#0097d8",
      }}
      transform="rotate(-65.047 100.362 192.905)"
    />
    <circle
      cx={92.563}
      cy={209.171}
      r={8.026}
      style={{
        fill: "#fff",
      }}
      transform="rotate(-19.352 92.567 209.165)"
    />
    <path
      d="m88.349 212.051-.388-5.09 4.215-2.88 4.602 2.209.387 5.09-4.214 2.881z"
      style={{
        fill: "#0097d8",
      }}
    />
    <circle
      cx={108.173}
      cy={176.659}
      r={8.026}
      style={{
        fill: "#fff",
      }}
      transform="rotate(-19.671 108.181 176.671)"
    />
    <path
      d="m104.192 179.054.276-6.472 4.877-4.263 4.602 2.21-.276 6.472-4.878 4.262z"
      style={{
        fill: "#0097d8",
      }}
    />
    <path
      d="m98.122 205.461-6.139-2.948 4.537-10.467c.288-.664.601-1.317.939-1.957l5.331-10.086 6.139 2.948-4.376 10.308a28.247 28.247 0 0 1-1.124 2.341l-5.307 9.861z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M123.374 210.734c1.183-.549 20.186.318 20.186.318l-13.698-12.576-6.488 12.258z"
      style={{
        fill: "#0097d8",
      }}
    />
    <circle
      cx={177.363}
      cy={123.988}
      r={32.553}
      style={{
        fill: "#0097d8",
      }}
      transform="rotate(-66.609 177.358 123.992)"
    />
    <path
      d="M176.276 96.247h2.174v27.338h-2.174z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M164.265 118.51h2.174v27.71h-2.174z"
      style={{
        fill: "#fff",
      }}
      transform="scale(-1) rotate(55.31 252.612 -315.567)"
    />
    <path
      d="M180.359 123.988a2.996 2.996 0 1 1-5.991 0 2.996 2.996 0 0 1 5.991 0z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M265.74 344.412c-1.93-29.76 11.09-60.56 33.02-78.18.68 29.91-12.21 60.18-33.02 78.18z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M295.18 274.242a394.734 394.734 0 0 0-23.87 53.83c-8.07 22.57-14.42 46.55-28.24 65.47"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M258.82 363.132c11.1-24.83 33.13-43.59 57.42-48.9-10.34 26.61-33.6 46.91-57.42 48.9z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M310.28 319.702c-16.59 14.6-33.46 28.79-50.61 42.56"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M252.27 384.762c14.83-22.15 42.19-33.71 64.83-27.39-16.65 21.87-44.07 33.46-64.83 27.39z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M311.67 358.972c-19.44 12.16-40.41 21.14-62.03 26.54"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M260.28 355.602c4.74-24.94-2.37-52.74-18.2-71.13-6.49 24.51-.3 53.23 18.2 71.13z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M243.71 290.832c3.12 23.2 8.67 44.93 17.27 66.17"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M252.14 376.842c-2.02-25.64-15.16-49.72-34.38-63.01 1.11 13.58 4.72 26.67 10.45 38.57 6.59 13.67 16.27 22.34 23.93 24.44z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M220.61 319.022c7.56 21.38 18.44 41.2 32.01 58.36"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M400.57 370.692c10.49-27.29 34.62-49.43 61.23-56.17-11.66 26.92-35.46 48.62-61.23 56.17z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M455.35 320.192a387.736 387.736 0 0 0-43.16 38.21c-16.38 16.82-31.83 35.58-51.8 46.8"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M386.78 384.542c19.99-17.59 47.15-25.31 70.79-20.13-20.04 19.49-48.92 28.08-70.79 20.13z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M450.06 366.862a1424.18 1424.18 0 0 1-62.18 17.26"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M372.12 401.142c22.19-13.68 51.11-12.81 68.53 2.06-23.68 12.68-52.67 11.81-68.53-2.06z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M435.2 402.402c-22.16 2.9-44.39 2.34-65.7-1.67"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M391.16 378.432c14.41-20.28 19.52-47.95 13.07-70.79-15.79 19.18-22.09 47.29-13.07 70.79z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M403.06 313.962c-6.76 21.94-10.75 43.56-11.85 66"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M375.26 394.032c8.72-23.66 6.98-50.48-4.56-70.16-4.58 12.55-6.76 25.68-6.57 38.62.21 14.86 5.21 26.54 11.13 31.54z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M371.08 329.652c-2.08 22.13-.59 44.23 4.37 65.05"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M103.267 322.978C92.573 290.269 62.73 263.84 28.013 256.34c14.596 28.297 41.069 50.818 75.254 66.638zM105.078 328.052c-23.425-13.247-52.775-16.168-78.218-7.794 23.599 11.788 51.561 15.072 78.218 7.794zM111.557 335.145c-25.317-3.509-51.829 2.732-72.39 17.037 23.315 8.475 51.286 2.979 72.39-17.037zM119.451 350.64c-25.071-.104-49.721 11.811-64.457 31.158 11.158 2.236 23.007.899 33.243-3.736 10.236-4.637 18.812-12.548 31.214-27.422zM137.126 376.565c-24.721-4.238-51.061 3.422-68.886 20.037 10.64 4.041 22.553 4.687 33.438 1.816 10.886-2.87 20.687-9.245 35.448-21.853zM110.437 324.527c-16.324-22.003-20.754-51.653-11.48-76.877 7.082 11.993 13.193 24.673 16.045 38.151 2.852 13.479 2.298 27.849-4.565 38.726zM120.41 345.756c-3.866-23.377 4.127-48.153 21.01-65.083 1.943 24.185-5.457 48.823-21.01 65.083z"
      style={{
        fill: "#a2c7eb",
      }}
    />
    <path
      d="M35.613 262.201c49.684 31.789 88.54 79.172 109.051 133.006"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M100.5 259.25a394.21 394.21 0 0 1 10.964 74.719M137.708 290.164c-1.98 19.798-8.098 39.148-17.872 56.577M37.318 320.829a402.221 402.221 0 0 0 69.086 7.024M51.044 350.237c21.003-1.526 41.666-6.614 60.766-14.972M63.627 378.266c19.38-9.667 38.762-19.346 58.142-29.013M76.232 395.337c25.303-4.882 32.821-10.708 60.904-18.77"
      style={{
        fill: "none",
        stroke: "#6f8bbf",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M236.42 348.992s2.19 20.07 4.64 21.68c4.38 2.89 55.08 9.57 55.08 9.57l-1.66 13.19s-69.44 6.24-72.39 2.77c-5.12-6.02-14.12-35.06-14.12-35.06l28.45-12.15z"
      style={{
        fill: "#e06a58",
      }}
    />
    <path
      d="m202.94 297.322 5.61-13.47s15.22 7.15 20.24 15.98c5.37 9.44 11.94 59.63 11.94 59.63s-26.87 6.19-31.81 3.56c-4.94-2.63-5.98-65.7-5.98-65.7z"
      style={{
        fill: "#f2ae30",
      }}
    />
    <path
      d="M160.21 234.802c-3.93-1.44-8.09-2.7-12.3-2.38-4.21.32-8.51 2.55-9.94 6.25-1.02 2.62-.55 5.71-2.16 8.07-1.54 2.26-4.6 3.2-7.46 3.39-2.87.2-5.76-.18-8.61.19-8.8 1.17-15.08 10.73-12.19 18.56 1.15 3.12 3.51 6.1 2.97 9.35-.57 3.48-4.22 5.77-5.72 9-1.99 4.3.39 9.51 4.32 12.44 3.93 2.92 9.04 4.03 14 4.77 6.83 1.02 13.88 1.5 20.63.06s13.2-5 16.69-10.56c1.55-2.46 2.49-5.24 4.29-7.55 3.72-4.77 10.31-6.62 15.5-10 5.67-3.71 9.83-10.93 6.49-16.58-3.22-5.43-11.6-6.64-14.96-11.99-1.39-2.21-1.72-4.84-2.62-7.25-.92-2.42-3.12-3.64-8.93-5.77z"
      style={{
        fill: "#0a2240",
      }}
    />
    <path
      d="M183.11 301.412c.99 1.14 2.16 2.39 3.78 2.5 1.71.12 3.14-1.09 4.24-2.26 5.68-6.01 9.43-13.39 10.95-21-1.41-.8-2.77-1.57-4-2.29-1.14-.68-2-1.63-2.49-2.74-.34-.82-.46-1.68-.37-2.58.8-7.52 1.51-11.71 4.15-19.34-12.54-2.83-24.37-6.19-31.17-11.87-.83 3.5-1.81 10.35-3.9 17.14-2.23 7.19-5.71 14.3-11.61 17.36 11.58 6.84 21.91 15.34 30.42 25.08z"
      style={{
        fill: "#f9a07b",
      }}
    />
    <path
      d="M195.22 273.052c-.09.9.03 1.77.37 2.58-7.42 9-24.01-2.76-31.29-16.65 2.09-6.79 3.07-13.64 3.9-17.14 6.79 5.68 18.63 9.05 31.17 11.87-2.64 7.63-3.35 11.81-4.15 19.34z"
      style={{
        fill: "#e06a58",
      }}
    />
    <path
      d="M215.88 381.852c-1.64 10.86 10.08 22.55 10.37 28.35-24.89 0-77.03 1.52-103.58-2.09-1.21-6.7 11.9-21.77 11.9-36.65 0-1.97-.08-4.13-.24-6.45-.42-6.64-1.4-14.54-2.49-22.64-2.96-21.73-6.9-44.97-3.99-49.79 5.7-9.39 19.03-15.77 25.64-18.51 2.27-.94 3.75-1.45 3.86-1.51 8.29 14.14 25.16 26.2 31.53 25.66 1.77-.14 7.02-1.97 10.49-19.44 1.35.77 2.7 1.48 4.04 2.17 6.59 3.43 12.77 6.26 14.55 10.67 4.7 11.61 9.31 40.88 8.29 51.29-1.03 10.5-5.25 18.52-8.21 29.06-.69 2.47-1.32 5.09-1.83 7.91-.13.63-.23 1.29-.33 1.97z"
      style={{
        fill: "#ffc73c",
      }}
    />
    <path
      d="M226.25 410.202c-24.89 0-77.03 1.52-103.58-2.09-1.21-6.7 11.9-21.77 11.9-36.65 0-1.97-.08-4.13-.24-6.45-.42-6.64-1.4-14.54-2.49-22.64 4.71 4.97 11.58-16.03 14.62-9.88 16.45 33.2 29.42 41.93 51.96 41.93 6.72 0 12.92-.93 19.62-2.45-.69 2.47-1.32 5.09-1.83 7.91-.12.64-.23 1.3-.33 1.98-1.64 10.84 10.08 22.53 10.37 28.34z"
      style={{
        fill: "#fb3",
      }}
    />
    <path
      d="M203.41 280.952c-1.07 7.77-4.24 18.24-13.46 21-12.46 3.73-30.49-19.55-36.46-27.88 2.27-.94 3.75-1.45 3.86-1.51 8.29 14.14 25.16 26.2 31.53 25.66 1.77-.14 7.02-1.97 10.49-19.44 1.35.76 2.7 1.47 4.04 2.17z"
      style={{
        fill: "#fce172",
      }}
    />
    <path
      d="m208.53 398.512-.09 8.67 155 .92.32-9.83z"
      style={{
        fill: "#325f73",
      }}
    />
    <path
      d="m430.62 321.162-3.45-3.5-112.9-.74-56.64 81.91 2.96 2.38z"
      style={{
        fill: "#325f73",
      }}
    />
    <path
      d="m316.45 319.952-55.86 81.26 106.7.53 63.33-80.58z"
      style={{
        fill: "#0b2d50",
      }}
    />
    <ellipse
      cx={343.41}
      cy={365.612}
      rx={12.42}
      ry={6.21}
      style={{
        fill: "#3c738c",
      }}
    />
    <path
      d="M210.822 239.735c1.76-9.442 8.234-16.155 14.462-14.995 6.228 1.161 9.85 9.755 8.09 19.197-1.76 9.442-8.234 16.155-14.462 14.995-6.227-1.16-9.849-9.755-8.09-19.197z"
      style={{
        fill: "#56c4f9",
      }}
    />
    <path
      d="M233.39 214.302c-1.16 8.22-4.83 17.28-10.18 27.29-1.88-8.2-3.08-18.19-4.74-28.18-1.69-10.01-3.84-20.02-7.57-28.2-.84-1.81-1.75-3.54-2.74-5.14 2.21-.21 4.45 0 6.58.59 3.33.89 6.45 2.61 9 4.91 4.24 3.77 7.08 8.91 8.77 14.33 1.39 4.5 1.64 9.28.88 14.4z"
      style={{
        fill: "#0b2d50",
      }}
    />
    <path
      d="M227.11 222.802c-.06 1.62-.17 3.27-.32 4.91-2.28 26.6-13.45 44.85-30.54 44.85-24.13 0-39.77-27.06-39.77-53.57 0-26.15 16.02-45.08 34.77-42.89 10.81 1.24 18.71 4.83 24.32 10.09 3.71 3.5 6.39 7.73 8.22 12.54 2.09 5.39 3.1 11.49 3.31 18.06 0 .02.02.04.02.06.08 1.94.06 3.92-.01 5.95z"
      style={{
        fill: "#f9a07b",
      }}
    />
    <path
      d="M227.11 222.802c-.72-2.57-1.79-5.08-3.25-7.33-14.23 7.44-31.19 10.31-47.27 7.59-3.06 2.55-6.05 5.06-9.06 7.57.06-12.1.23-20.29 4.95-26.15 4.43-5.5 11.82-7.57 18.82-8.47 7.88-1.03 15.89-.99 23.75.15 3.01.42 6.13 1.07 8.75 2.59 2.09 5.39 3.1 11.49 3.31 18.06 0 .02.02.04.02.06.07 1.92.05 3.9-.02 5.93z"
      style={{
        fill: "#e06a58",
      }}
    />
    <path
      d="M230.59 206.422c-3.31 2.8-7.46 5.12-12.12 7-13.26 5.35-30.49 7.12-43.92 6.47-6.6 14.5-9.27 19.7-10.96 32.35-6.45-6.05-11.7-17.13-13.26-25.84-1.54-8.68-1.39-17.79 1.03-26.32 3.81-13.45 13.42-20.65 20.08-24.15 1.66-.91 3.16-1.54 4.32-2 8.51-3.29 18.1-2.99 26.83-.32 4.76 1.48 8.77 3.98 12.14 7.06 6.81 6.15 11.02 14.48 13.74 20.72.86 1.91 1.55 3.64 2.12 5.03z"
      style={{
        fill: "#0b2d50",
      }}
    />
    <path
      d="M233.39 214.302c-.55-2.91-1.37-5.73-2.53-8.45-.65-1.54-1.45-3.03-2.38-4.47-3.03-4.76-7.44-8.68-12.77-10.41-1.52-2.13-3.12-4.05-4.8-5.75-6.05-6.15-13.15-9.67-20.67-10.9-6.26-1.01-12.77-.44-18.78 1.6 1.66-.91 3.16-1.54 4.32-2 8.51-3.29 18.1-2.99 26.83-.32 4.76 1.48 8.77 3.98 12.14 7.06 3.33.89 6.45 2.61 9 4.91 4.24 3.77 7.08 8.91 8.77 14.33 1.38 4.5 1.63 9.28.87 14.4z"
      style={{
        fill: "#225570",
      }}
    />
    <path
      d="M182.24 230.612c4.46-2.55 9.09-3.7 15.58-1.33M212.78 230.432c3.82-2.85 9.48-3.14 12.43 0"
      style={{
        fill: "none",
        stroke: "#0b2d50",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M208.17 244.972c.39 2.02.18 6.49-.78 8.5"
      style={{
        fill: "none",
        stroke: "#cc454e",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <ellipse
      cx={193.1}
      cy={243.432}
      rx={1.84}
      ry={2.9}
      style={{
        fill: "#262d40",
      }}
    />
    <ellipse
      cx={217.15}
      cy={242.082}
      rx={1.84}
      ry={2.9}
      style={{
        fill: "#262d40",
      }}
    />
    <path
      d="M205.89 257.422s-.36.7-1.05 1.65c-1.08 1.45-2.92 3.45-5.43 4.23h-.01a7.09 7.09 0 0 1-3.49.23c-3.76-.67-4.75-4.14-4.93-6.81-.04-.52-.04-1-.03-1.44.02-1.08.14-1.8.14-1.8 5.99 3.3 14.8 3.94 14.8 3.94z"
      style={{
        fill: "#cc454e",
      }}
    />
    <path
      d="M205.89 257.422s-.36.7-1.05 1.65c-3.06-.04-9.32-1.61-13.89-3.79.02-1.08.14-1.8.14-1.8 5.99 3.3 14.8 3.94 14.8 3.94z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M199.4 263.292a7.09 7.09 0 0 1-3.49.23c-3.76-.67-4.75-4.14-4.93-6.81 1.82.22 3.58.92 5.04 2.03 1.53 1.17 2.7 2.76 3.38 4.55z"
      style={{
        fill: "#e8729b",
      }}
    />
    <path
      d="M163.65 226.022s-.21-12.47 4.98-24.86c6.51-15.55 19.78-22.2 32.65-22.65 15.51-.55 25.22 9.86 25.22 9.86s-5.05-8.91-15.01-11.47c-6.54-1.68-16.41-1.95-24.33 1.27-8.16 3.31-18.33 12.5-22.01 22.21-3.67 9.71-5.46 24.83-5.46 24.83l3.96.81z"
      style={{
        fill: "#3d86e0",
      }}
    />
    <ellipse
      cx={161.498}
      cy={240.27}
      rx={12.09}
      ry={18.319}
      style={{
        fill: "#56c4f9",
      }}
      transform="rotate(-5.935 161.51 240.288)"
    />
    <path
      d="M156.231 227.942c4.287-.644 8.682 4.948 9.815 12.49 1.133 7.542-1.423 14.179-5.711 14.823-4.287.644-8.682-4.948-9.815-12.49-1.133-7.542 1.424-14.179 5.711-14.823z"
      style={{
        fill: "#3d86e0",
      }}
    />
    <ellipse
      cx={201.38}
      cy={268.922}
      rx={6.44}
      ry={4.01}
      style={{
        fill: "#3a92c9",
      }}
    />
    <path
      d="M169.03 255.512s9.46 12.16 25.91 13.41"
      style={{
        fill: "none",
        stroke: "#3a92c9",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="m208.44 375.362-.62 15.99s-57.83 17.33-67.38 11.85c-4.66-2.68-9.01-17.42-12.26-31.81-3.4-15.12-5.58-29.84-5.58-29.84l33.9-6.64s.02 20.67 1.17 32.62c.41 4.45 1 7.69 1.79 8.22 2.99 1.97 48.98-.39 48.98-.39z"
      style={{
        fill: "#f9a07b",
      }}
    />
    <path
      d="M157.67 367.512c-6.16 2-18.05 5.09-29.49 3.87-3.4-15.12-5.58-29.84-5.58-29.84l33.9-6.64c0-.01.02 20.66 1.17 32.61z"
      style={{
        fill: "#e06a58",
      }}
    />
    <path
      d="M206.79 375.522c8.6-1.84 23.16-6.26 29.2-7.78 4.29-1.08 15.46 4.7 18.41 10.15 1.29 2.38 2.51 15.86-1.96 14.47-2.24-.7-1.87-6.48-2.57-8.84-.57-1.92-2.39-3.78-5.16-5.38 1.85 4.61 1.78 8.63 1.58 13.61-.04 1.1-.11 2.25-.64 3.2-.54.95-1.7 1.63-2.7 1.21-1.02-.42-1.37-1.69-1.6-2.8-.79-3.84-1.59-7.68-1.91-12.02.08 4.27-.01 8.55-.28 12.81-.2 3.26-1.82 5.05-3.81 4.48-.89-.25-1.25-1.07-1.63-2.15-.6 2.09-2.1 4.4-4.04 3.52-1.18-.53-1.91-4.79-1.7-9.17-3.72 2.31-7.92 3.29-12.76 3.51-4.34.2-8.78-.61-11.39-3.56.26-4.61 1.78-11.43 2.96-15.26z"
      style={{
        fill: "#f9a07b",
      }}
    />
    <path
      d="M233.81 395.822c.29-3.46-.01-6.97-.89-10.31"
      style={{
        fill: "none",
        stroke: "#cc454e",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M152.69 301.372c-2.46-6.93-11.47-21.11-11.47-21.11s-13.75 5.72-18.63 15.43c-8.26 16.44-4.06 63.64-4.06 63.64 11.13 4.66 33.47 4.73 42.98 3.39 0 0-3.89-47.5-8.82-61.35z"
      style={{
        fill: "#ffc73c",
      }}
    />
    <path
      d="M154.44 304.272c3.75 17.95 5.76 34.69 6.4 51.09"
      style={{
        fill: "none",
        stroke: "#f2ae30",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M54.46 405.252h394.28v9.89H54.46z"
      style={{
        fill: "#0b2d50",
      }}
    />
  </svg>
);
export default NewSvgComponent;
