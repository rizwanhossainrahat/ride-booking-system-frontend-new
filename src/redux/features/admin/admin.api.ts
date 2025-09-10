import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    riders: builder.query({
      query: () => ({
        url: "admin/get-all-rider",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),

    drivers: builder.query({
      query: () => ({
        url: "admin/get-all-driver",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),

    deleteRiders: builder.mutation({
      query: (id) => ({
        url: `admin/delete-rider/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ADMIN"],
    }),

    deleteDrivers: builder.mutation({
      query: (id) => ({
        url: `admin/delete-driver/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ADMIN"],
    }),
  }),
});

export const {useRidersQuery,useDeleteRidersMutation,useDriversQuery,useDeleteDriversMutation}=adminApi