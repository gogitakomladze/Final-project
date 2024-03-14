export type TAuthRequest = {
    access_token: string;
    refresh_token:string;
}
export type TCategori = {
  id: string,
  created_at:string,
  updated_at:string,
  name: string,
  image: string
}

export type TUserRequest = {
  email: string,
  id: string,
  first_name: string,
  last_name: string,
  phone_number:null | string,
}