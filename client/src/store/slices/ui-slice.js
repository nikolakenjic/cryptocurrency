import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  isThemeDark: localStorage.getItem('darkTheme') === 'true' || false,
  toggleMenu: false,
  openModal: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: defaultState,
  reducers: {
    themeDarkToggle: (state, action) => {
      const newThemeDark = !state.isThemeDark;

      state.isThemeDark = newThemeDark;
      document.body.classList.toggle('dark-theme', newThemeDark);
      localStorage.setItem('darkTheme', newThemeDark);
    },
    setToggleMenu: (state, action) => {
      state.toggleMenu = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = true;
    },
    setCloseModal: (state, action) => {
      state.openModal = false;
    },
  },
});

export const { themeDarkToggle, setToggleMenu, setOpenModal, setCloseModal } =
  uiSlice.actions;

export default uiSlice.reducer;
