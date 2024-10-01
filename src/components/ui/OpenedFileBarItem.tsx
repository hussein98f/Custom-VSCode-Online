import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../../interfaces";
import CloseIcon from "../SVG/CloseIcon";
import RenderFileIcon from "./RenderFileIcon";
import {
  setClickedFile,
  setOpenedFile,
} from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarItem = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { id, content } = file;
  const {
    openedFiles,
    clickedFile: { id: activeId },
  } = useSelector((state: RootState) => state.tree);

  //handlers
  const onFileClick = () => {
    dispatch(setClickedFile({ fileContent: content, id: id }));
  };

  const onCloseFile = (id: string) => {
    const filterdFiles = openedFiles.filter((file) => file.id !== id);
    const latTab = filterdFiles[filterdFiles.length - 1];
    dispatch(setOpenedFile(filterdFiles));
    if (!latTab) {
      dispatch(setClickedFile({ id: "", fileContent: "" }));
      return;
    }
    dispatch(setClickedFile({ id: latTab.id, fileContent: latTab.content }));
  };

  return (
    <li
      onClick={onFileClick}
      className={`border-gray-800 border-r border-t-2 cursor-pointer duration-300 flex justify-center items-center w-fit py-2 pl-2 pr-3 ${
        id === activeId ? "border-t border-t-cyan-600" : ""
      }`}
    >
      <RenderFileIcon filename={file.name} />
      <span className="truncate ">{file.name}</span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onCloseFile(file.id);
        }}
        className="cursor-pointer hover:bg-[#64646473] duration-300 w-fit ml-1 p-0.5 rounded-md"
      >
        <CloseIcon />
      </span>
    </li>
  );
};

export default OpenedFileBarItem;
