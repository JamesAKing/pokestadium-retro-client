const BASE_API_URL = 'http://localhost:8080';

export const createUserURL = `${BASE_API_URL}/create-user`;

export const loginURL = `${BASE_API_URL}/login`;
export const accessTokenURL = `${loginURL}/token`;

export const logoutURL = `${BASE_API_URL}/logout`;

export const userRecordURL = `${BASE_API_URL}/user-record/`;