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
      if (state.showSidebar) {
        document.getElementById("sidebar")?.classList.remove("hidden");
      } else {
        document.getElementById("sidebar")?.classList.add("hidden");
      }
    },
  },
});

export const { handleSidebar } = storeSlice.actions;
export default storeSlice.reducer;
