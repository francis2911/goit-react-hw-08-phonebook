export const getContacts = state => state.contacts.contacts;

export const getIsLoading = state => state.contacts.isLoading;

export const getErrorStatus = state => state.contacts.error;

export const getUserInfo = state => state.auth.authInfo.user;

export const getAuthInfo = state => state.auth.authInfo.token;

export const getInfo = state => state.auth.authInfo;
