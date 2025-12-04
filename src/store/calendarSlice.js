import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: null,
    popupData: null,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setPopupData: (state, action) => {
      state.popupData = action.payload;
    },
    clearPopup: (state) => {
      state.popupData = null;
    },
  },
});

export const { setSelectedDate, setPopupData, clearPopup } =
  calendarSlice.actions;
export default calendarSlice.reducer;
