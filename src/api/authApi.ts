// src/api/authApi.ts
import axiosClient from '../config/axios'; // api instance
import { AUTH_ENDPOINTS } from './endpoints';
import {LoginUserAPIResponse, SignUpForm, GetCurrentUserAPIResponse } from '@/types/userType';

export const loginUser = async (emailAddress: string, passwordHash: string): Promise<LoginUserAPIResponse> => {
  try {
    const response = await axiosClient.post<LoginUserAPIResponse, any>(AUTH_ENDPOINTS.LOGIN, {
      emailAddress,
      passwordHash,
    })
    return response.data;
  } catch (error) {
    throw new Error('Invalid username or password'); 
  }
};

const signUp = async (userdata: SignUpForm) : Promise<any> => {
  try {
    const response = await axiosClient.post(AUTH_ENDPOINTS.SIGNUP, userdata);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

const logOut = async () => {
  try {
    const response = await axiosClient.post(AUTH_ENDPOINTS.LOGOUT)
    return response.data;
  } catch (error) {
    return { error : true}
  }
}

const refreshToken = async (tokens: { refreshToken: string }) => {
  try {
    const response = await axiosClient.post(AUTH_ENDPOINTS.REFRESH_TOKEN, tokens);
    return response.data;
  }catch (e) {
    return e
  }
  
};

const getCurrentUser = async (userId: string): Promise<GetCurrentUserAPIResponse | null> => {
  try {
    const { data } = await axiosClient.get<GetCurrentUserAPIResponse>(import.meta.env.VITE_CURRENT_USER_API + userId);
    return data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
};

const authApi = {
    loginUser,
    signUp,
    refreshToken,
    getCurrentUser,
    logOut
}

export default authApi
