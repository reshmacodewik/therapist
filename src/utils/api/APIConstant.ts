export const API_REGISTER: string = '/auth/register';
export const API_LOGIN: string = '/auth/login';
export const API_VERIFY_OTP: string = '/auth/otp-verified';
export const API_VERIFY_RESEND: string = '/auth/otp-resend';
export const API_LOGOUT: string = '/logout';
export const API_FEED_LIST: string = '/feed';
export const API_FEED_CREATE: string = '/feed/create';
export const API_FEED_UPDATE: string = '/feed/update';
export const API_FEED_DELETE = (id: string) => `/feed/${id}`;
export const API_FEED_TOGGLE_FAVORITE = '/feed/add-favorite';
export const API_FEED_DETAIL_BY_ID = (id: string) => `/feed/${id}`;
export const API_ADD_COMMENT: string = '/feed/add-comment';
export const API_COMMENT_LIST : string = `/feed/get-comment`;
export const API_COMMENT_DELETE : string = `/feed/comment`;
export const API_CHANGE_PASSWORD :string = '/auth/change-password';
export const API_PROFILE_LIST :string = '/auth/profile';
export const API_UPDATE_PROFILE :string = '/auth/edit-profile';
export const API_VERIFY_DETAILS :string = '/auth/update-info-others';
export const API_VERIFY_DETAILS_PEER :string = '/auth/update-info-peer';
export const CREATE_SLOT :string = '/auth/slot/create';

//RESET PASSWORD
export const API_VALET_RESET_SEND_OTP: string = '/reset-password';
export const API_VALET_PASSWORD_RESET: string = '/new-password';
