import { useState } from "react";
import { IFile } from "../../interfaces";
import RightArrowIcon from "../SVG/Right";
import BottomArrowIcon from "../SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpenedFile,
} from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";
import { doesFileExists } from "../../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  // ** Handlers
  const toggleFolder = () => setIsOpen((prev) => !prev);

  const onFileClick = () => {
    // if (openedFiles.includes(fileTree)) return;
    dispatch(setClickedFile({ fileContent: content, id: id }));
    const exists = doesFileExists(openedFiles, id);
    if (exists) return;
    dispatch(setOpenedFile([...openedFiles, fileTree]));
  };

  return (
    <div className="ml-2">
      <div className="flex items-center">
        {isFolder ? (
          <div
            className="flex w-full items-center mb-1 cursor-pointer"
            onClick={toggleFolder}
          >
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="truncate">{name}</span>
          </div>
        ) : (
          <div
            className="flex w-full items-center mb-1 ml-[15px] cursor-pointer"
            onClick={onFileClick}
          >
            <RenderFileIcon filename={name} />
            <span className="truncate">{name}</span>
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
