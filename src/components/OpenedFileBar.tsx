import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarItem from "./ui/OpenedFileBarItem";

export const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <ul className="flex items-center h-11 flex-nowrap ">
      {openedFiles.map((file) => (
        <OpenedFileBarItem file={file} key={file.id} />
      ))}
    </ul>
  );
};

export default OpenedFileBar;
