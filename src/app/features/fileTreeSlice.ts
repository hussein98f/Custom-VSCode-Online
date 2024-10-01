import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";
import { IFile } from "../../interfaces";

interface IClickedFile {
  id: string | null;
  fileContent: string | undefined;
}

interface initialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: initialState = {
  openedFiles: [],
  clickedFile: {
    id: null,
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFile, setClickedFile } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
