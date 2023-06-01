import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    form: {
      name: undefined,
      address: undefined,
      phone: undefined,
      email: undefined,
    },
  },
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload;
    },
    clearForm: (state) => {
      state.form = {
        name: undefined,
        address: undefined,
        phone: undefined,
        email: undefined,
      };
    },
  },
});

export default formSlice.reducer;
export const { setForm, clearForm } = formSlice.actions;
