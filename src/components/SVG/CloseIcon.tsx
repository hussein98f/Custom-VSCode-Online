import { svgStyle } from "../../styles";

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...svgStyle}
      fill="none"
      stroke="white"
      viewBox="0 0 64 64"
    >
      <path d="M16 16L48 48"></path>
      <path d="M48 16L16 48"></path>
    </svg>
  );
}

export default CloseIcon;
