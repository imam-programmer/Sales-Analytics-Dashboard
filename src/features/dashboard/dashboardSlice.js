import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    activePage: "Overview",
    dateRange: "Last 7 days",
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
  },
});

export const { setActivePage, setDateRange } = dashboardSlice.actions;
export default dashboardSlice.reducer;
