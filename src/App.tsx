import "./App.css";
import RecursiveComponent from "./components/ui/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div className="m-7">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
}

export default App;
