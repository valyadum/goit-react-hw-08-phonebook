import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";
const setAuthHeader = token => {//записуємо токен
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {//чистимо токен
    axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            console.log(credentials);
            const {data}= await axios.post('users/signup', credentials);
            console.log(data);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('users/login', credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const logOut = createAsyncThunk(
    'auth/logout',
    async (credentials, thunkAPI) => {
        try {
            await axios.post('users/logout', credentials);
            clearAuthHeader('');
           
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(persistedToken);
            const { data } = await axios.get('/users/current');
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);