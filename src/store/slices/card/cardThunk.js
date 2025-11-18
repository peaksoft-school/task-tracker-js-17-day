// cardThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../../configs/axiosinstance"

export const createCardThunk = createAsyncThunk(
    "card/createCard",
    async ({ columnId, title }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/cards/create', {
                columnId,
                title
            })
            return data
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message)
        }
    }
)
