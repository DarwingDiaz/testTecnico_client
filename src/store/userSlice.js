import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:"",
  password:""
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: { 
    addUser:(state,action) =>{
      const {email, password} = action.payload;
      state.email = email;
      state.password = password;
    },
    changeEmail: (state,action) => {
      state.email = action.payload
    }
  }
})

export const {addUser, changeEmail} = userSlice.actions
export default userSlice.reducer;