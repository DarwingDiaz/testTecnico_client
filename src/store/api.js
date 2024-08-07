import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define el slice de la API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }), // Reemplaza con la URL de tu backend
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: 'auth/login', // La ruta del endpoint en tu backend
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

// Exporta el hook generado para usarlo en tus componentes
export const { useLoginUserMutation } = api;
