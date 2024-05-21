import { api } from '~services/index';

export const sharedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLottery: builder.query({
      query: ({ type }) => ({
        url: `/api/luckito/lottery/get-lottery?lotteryType=${type}`,
      }),
    }),
  }),
});

export const { useGetLotteryQuery } = sharedApi;
