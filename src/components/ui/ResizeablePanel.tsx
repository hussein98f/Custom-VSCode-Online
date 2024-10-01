import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[];
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  topBar: ReactNode;
  showLeftPanel: boolean;
}

const ResizeablePanel = ({
  defaultLayout = [20, 80],
  leftPanel,
  rightPanel,
  topBar,
  showLeftPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            <div className="pt-2 pr-3">{leftPanel}</div>
          </Panel>
          <PanelResizeHandle className="border-r-2 border-gray-800" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>
        <div className="w-full">
          <div className="max-w-[100%] border-b border-gray-800 overflow-x-auto ">
            {topBar}
          </div>
          <div className="w-full h-full pt-1">{rightPanel}</div>
        </div>
      </Panel>
    </PanelGroup>
  );
};

export default ResizeablePanel;
