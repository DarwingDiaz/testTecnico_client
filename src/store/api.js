import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001', // Reemplaza con la URL de tu backend
  prepareHeaders: (headers) => {
    // Obtén el token del localStorage
    const token = localStorage.getItem('token');
    
    // Si hay un token, inclúyelo en los headers
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    
    return headers;
  },
});


export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: 'auth/login', // La ruta del endpoint en tu backend
        method: 'POST',
        body: userData,
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: 'auth/register', // La ruta del endpoint de registro en tu backend
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

// Exporta los hooks generados para usarlos en tus componentes
export const { useLoginUserMutation, useRegisterUserMutation } = api;
