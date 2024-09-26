import FileIcon from "../SVG/File";
import IconImg from "./IconImg";
import fileIconData from "../../constant";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const fileExt = isFolder
    ? `folder-${filename.split(".").pop()}`
    : filename.split(".").pop();

  if (fileExt && Object.prototype.hasOwnProperty.call(fileIconData, fileExt)) {
    const iconPath = isFolder
      ? isOpen
        ? `${fileIconData[fileExt]}-open.svg`
        : `${fileIconData[fileExt]}.svg`
      : `${fileIconData[fileExt]}.svg`;
    return <IconImg src={iconPath} />;
  }
  if (isFolder && isOpen)
    return <IconImg src={`${fileIconData["folder-default-open"]}.svg`} />;
  if (isFolder && !isOpen)
    return <IconImg src={`${fileIconData["folder-default"]}.svg`} />;
  return <FileIcon />;
};

export default RenderFileIcon;
