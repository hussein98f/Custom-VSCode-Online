import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return content ? (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        maxHeight: "100%",
        overflow: "auto",
        fontSize: "0.95rem",
        width: "100%",
        paddingLeft: "0.5em",
        paddingRight: "0.5em",
      }}
    >
      {content}
    </SyntaxHighlighter>
  ) : (
    <div className="px-4 flex items-center h-full justify-center font-medium text-xl text-stone-600">
      No File Selected ...
    </div>
  );
};

export default FileSyntaxHighlighter;
