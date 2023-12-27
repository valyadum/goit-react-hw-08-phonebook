import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// axios.defaults.baseURL = "https://657de3703e3f5b1894634bdd.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            // При успішному запиті повертаємо проміс із даними
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс
            // який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (contact, thunkAPI) => {
        try {
            console.log(contact);
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);