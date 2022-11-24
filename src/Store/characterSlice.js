import {createSlice} from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characterList: [],
  },

  reducers: {
    setLocalCharacterList(state, action) {
      state.characterList = action.payload;
    },
  },
});

export const {setLocalCharacterList} = characterSlice.actions;

export default characterSlice.reducer;
