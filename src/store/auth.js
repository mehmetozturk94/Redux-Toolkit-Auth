import {createSlice} from '@reduxjs/toolkit';

const authenticateState ={isAuthenticated : false}

const authenticateSlice = createSlice({
  name : 'isAuthenticated',
  initialState : authenticateState,
  reducers : {
    login(state){
      state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    }
  }
})

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;