const host = process.env.API_HOST || 'http://localhost';
const port = process.env.API_PORT || 8000;
export const apiUrl = `${host}:${port}/api`;

export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export type GET_DOCUMENTS = typeof GET_DOCUMENTS;

export const UPDATE_DOCUMENTS = 'UPDATE_DOCUMENTS';
export type UPDATE_DOCUMENTS = typeof UPDATE_DOCUMENTS;

export const FILTER_DOCUMENTS = 'FILTER_DOCUMENTS';
export type FILTER_DOCUMENTS = typeof FILTER_DOCUMENTS;

export const IS_LOADING = 'IS_LOADING';
export type IS_LOADING = typeof IS_LOADING;

export const UPLOAD_DOCUMENT = 'UPLOAD_DOCUMENT';
export type UPLOAD_DOCUMENT = typeof UPLOAD_DOCUMENT;

export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export type UPLOAD_DOCUMENT_SUCCESS = typeof UPLOAD_DOCUMENT_SUCCESS;

export const UPLOAD_DOCUMENT_FAIL = 'UPLOAD_DOCUMENT_FAIL';
export type UPLOAD_DOCUMENT_FAIL = typeof UPLOAD_DOCUMENT_FAIL;

export const DELETE_DOCUMENTS = 'DELETE_DOCUMENTS';
export type DELETE_DOCUMENTS = typeof DELETE_DOCUMENTS;

export const CLEAR_STATE = 'CLEAR_STATE';
export type CLEAR_STATE = typeof CLEAR_STATE;
