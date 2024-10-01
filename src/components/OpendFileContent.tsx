import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

// interface IProps {}

const OpendFileContent = () => {
  const { fileContent } = useSelector(
    (state: RootState) => state.tree.clickedFile
  );
  return <FileSyntaxHighlighter content={fileContent} />;
};

export default OpendFileContent;
