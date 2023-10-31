import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#ffffff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M9.997 4.167v11.666M4.164 10h11.667"
    />
  </svg>
);
export default SvgPlus;
