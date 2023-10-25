import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "storeslice",
  initialState: {
    showSidebar: false as boolean,
  },
  reducers: {
    handleSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
      const sidebar = document.getElementById("sidebar");
      if (state.showSidebar) {
        sidebar!.classList.add("translate-x-full");
        sidebar!.classList.remove("-translate-x-[120%]");
      } else {
        sidebar!.classList.add("-translate-x-[120%]");
        sidebar!.classList.remove("translate-x-full");
      }
    },
  },
});

export const { handleSidebar } = storeSlice.actions;
export default storeSlice.reducer;
