import { useState } from "react";
import { IFile } from "../../interfaces";
import RightArrowIcon from "../SVG/Right";
import BottomArrowIcon from "../SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // ** Handlers
  const toggleFolder = () => setIsOpen((prev) => !prev);
  return (
    <div className="ml-2 ">
      <div className="flex items-center cursor-pointer">
        {isFolder ? (
          <div
            className="flex items-center mb-1 space-x-1"
            onClick={toggleFolder}
          >
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center mb-1 space-x-1 ml-[17px]">
            <RenderFileIcon filename={name} />
            <span>{name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        children?.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
