import "./App.css";
import OpendFileContent from "./components/OpendFileContent";
import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/ui/RecursiveComponent";
import ResizeablePanel from "./components/ui/ResizeablePanel";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div className="flex h-screen">
      <ResizeablePanel
        showLeftPanel
        leftPanel={<RecursiveComponent fileTree={fileTree} />}
        rightPanel={<OpendFileContent />}
        topBar={<OpenedFileBar />}
      />
    </div>
  );
}

export default App;
