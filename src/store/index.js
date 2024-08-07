import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { api } from './api'; // Asegúrate de importar el slice de API

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer, // Agrega el reducer de la API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Agrega el middleware de la API
});

export default store;
