import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  ICandidate,
  IChat,
  IMessage,
  IElectionProcess,
  IList,
  IUser,
  ICredential,
} from "../interfaces/index.ts";
const API_GATEWAY = import.meta.env.VITE_API_GATEWAY;
export const votifyApi = createApi({
  reducerPath: "votifyApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  baseQuery: fetchBaseQuery({ baseUrl: `${API_GATEWAY}/api` }),
  endpoints: (builder) => ({
    // User service endpoint
    getUsers: builder.query<IUser[], void>({
      query: () => "/v1/user/list",
    }),

    getUserById: builder.query<IUser, string>({
      query: (_id) => `/v1/user/${_id}`,
    }),
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: "/v1/user/create",
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: `/v1/user/${user._id}`,
        method: "PUT",
        body: user,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          votifyApi.util.updateQueryData("getUserById", _id || "", (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    // Election process service endpoint
    // Election process
    getAllProcesses: builder.query<IElectionProcess[], void>({
      query: () => "/election-service/process/",
    }),
    createProcess: builder.mutation<
      IElectionProcess,
      Partial<IElectionProcess>
    >({
      query: (process) => ({
        url: "/election-service/process/create",
        method: "POST",
        body: process,
      }),
    }),
    getProcessById: builder.query<IElectionProcess, string>({
      query: (_id) => `/election-service/process/${_id}`,
    }),
    getProcessesByUserId: builder.query<IElectionProcess[], string>({
      query: (_id) => `/election-service/process/user/${_id}`,
    }),
    updateProcess: builder.mutation<
      IElectionProcess,
      Partial<IElectionProcess>
    >({
      query: (process) => ({
        url: `/election-service/process/update/${process._id}`,
        method: "PUT",
        body: process,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          votifyApi.util.updateQueryData(
            "getProcessById",
            _id || "",
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    // List
    getAllLists: builder.query<IList[], void>({
      query: () => "/election-service/list/",
    }),
    createList: builder.mutation<IList, Partial<IList>>({
      query: (list) => ({
        url: "/election-service/list/create",
        method: "POST",
        body: list,
      }),
    }),
    getListById: builder.query<IList, string>({
      query: (_id) => `/election-service/list/${_id}`,
    }),
    getListsByProcessId: builder.query<IList[], string>({
      query: (_id) => `/election-service/list/process/${_id}`,
    }),
    updateList: builder.mutation<IList, Partial<IList>>({
      query: (list) => ({
        url: `/election-service/list/update/${list._id}`,
        method: "PUT",
        body: list,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          votifyApi.util.updateQueryData("getListById", _id || "", (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    // Candidate
    getAllCandidates: builder.query<ICandidate[], void>({
      query: () => "/election-service/candidate/",
    }),
    getCandidateById: builder.query<ICandidate, string>({
      query: (_id) => `/election-service/candidate/${_id}`,
    }),
    getCandidatesByListId: builder.query<ICandidate[], string>({
      query: (_id) => `/election-service/candidate/list/${_id}`,
    }),
    createCandidate: builder.mutation<ICandidate, Partial<ICandidate>>({
      query: (candidate) => ({
        url: "/election-service/candidate/create",
        method: "POST",
        body: candidate,
      }),
    }),
    updateCandidate: builder.mutation<ICandidate, Partial<ICandidate>>({
      query: (candidate) => ({
        url: `/election-service/list/update/${candidate._id}`,
        method: "PUT",
        body: candidate,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          votifyApi.util.updateQueryData(
            "getCandidateById",
            _id || "",
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    addVoteByCandidateId: builder.mutation<ICandidate, string>({
      query: (_id) => ({
        url: `/election-service/candidate/add_vote/${_id}`,
        method: "PUT",
      }),
    }),
    // Buzon endpoint
    // Chat
    getChat: builder.query<IChat[], { owner_id: string; friend_id: string }>({
      query: (ids) => `/buzon-service/chat/${ids.owner_id}/${ids.friend_id} `,
    }),
    getChatsByUserId: builder.query<IChat[], string>({
      query: (_id) => `/buzon-service/chat/${_id}`,
    }),
    createChat: builder.mutation<IChat, Partial<IChat>>({
      query: (chat) => ({
        url: "/buzon-service/chat/create",
        method: "POST",
        body: chat,
      }),
    }),
    updateChat: builder.mutation<IChat, Partial<IChat>>({
      query: (chat) => ({
        url: `/buzon-service/chat/update/${chat._id}`,
        method: "PUT",
        body: chat,
      }),
    }),
    // Message
    getMessagesByChatId: builder.query<IMessage[], string>({
      query: (_id) => `/buzon-service/message/${_id}`,
    }),
    createMessage: builder.mutation<IMessage, Partial<IMessage>>({
      query: (message) => ({
        url: "/buzon-service/message/create",
        method: "POST",
        body: message,
      }),
    }),
    // Credentials Endpoint
    getAllCredentials: builder.query<ICredential[], void>({
      query: () => "/v1/credential/list",
    }),
    getCredentialsByUserId: builder.query<ICredential[], string>({
      query: (_id) => `/v1/credential/user/${_id}`,
    }),
    getCredentialsByProcessId: builder.query<ICredential[], string>({
      query: (_id) => `/v1/credential/process/${_id}`,
    }),
    updateCredentialUsed: builder.mutation<ICredential, string>({
      query: (_id) => ({
        url: `/v1/credential/update-used/${_id}`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateCandidateMutation,
  useCreateChatMutation,
  useCreateListMutation,
  useCreateMessageMutation,
  useCreateProcessMutation,
  useCreateUserMutation,
  useGetAllCandidatesQuery,
  useGetAllListsQuery,
  useGetAllProcessesQuery,
  useGetCandidateByIdQuery,
  useGetCandidatesByListIdQuery,
  useGetChatQuery,
  useGetChatsByUserIdQuery,
  useGetListsByProcessIdQuery,
  useGetListByIdQuery,
  useGetMessagesByChatIdQuery,
  useGetProcessByIdQuery,
  useGetProcessesByUserIdQuery,
  useGetUserByIdQuery,
  useUpdateCandidateMutation,
  useUpdateListMutation,
  useUpdateProcessMutation,
  useUpdateUserMutation,
  useUpdateChatMutation,
  useGetAllCredentialsQuery,
  useGetCredentialsByProcessIdQuery,
  useGetCredentialsByUserIdQuery,
  useAddVoteByCandidateIdMutation,
  useUpdateCredentialUsedMutation,
} = votifyApi;
