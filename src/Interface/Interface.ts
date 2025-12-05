export interface ImageInterface {
  type: string;
  uri: string;
  fileSize: string;
  fileName: string;
}

export interface UserData {
  address: string;
  city: string;
  email: string;
   _id: string; 
  mobile: string;
  name: string;
  pincode: string;
  site_id: number;
  state: string;
  profile_pic: string;
  userType: number;
  valet_status: string;
  employeeId: string;
  created_at: string;
}

export interface LocationLat {
  lat?: number | null;
  lng?: number | null;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export type StackParamList = {
  Registerphone: undefined;
};
