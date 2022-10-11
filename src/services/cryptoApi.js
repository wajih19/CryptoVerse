import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders ={

        'X-RapidAPI-Key': 'e9c81a15a8msh927443e9cf07335p170b6djsna7b8b8467943',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest= (url) => ({url,headers: cryptoApiHeaders});

export const cryptoApi = createApi({

    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({

        getCryptos: builder.query({
            query:(count)  => createRequest(`/coins?limit=${count}`),   
           }),

        getCryptoDetails: builder.query({
            query: (coinUuid) => createRequest(`/coin/${coinUuid}`),
        }),

        getCryptoHistory: builder.query({
            query: ({coinUuid, timeperiod})=> createRequest(`/coin/${coinUuid}/history?timeperiod=${timeperiod}`),

        }),
    })

})

export const { 
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,

} = cryptoApi;
