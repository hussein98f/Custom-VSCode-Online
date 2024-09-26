import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string;
}

interface initialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: initialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {},
});

export const {} = fileTreeSlice.actions;

export const selectCount = (state: RootState) => state.fileTree.value;

export default fileTreeSlice.reducer;
