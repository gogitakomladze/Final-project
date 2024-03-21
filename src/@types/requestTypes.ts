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
export type producttype = {
  id:string,
  title: string,  
  category_name: string,
  description: string,
  image: string,
  price: number,
  salePrice: null
}

export type TUserRequest = {
  email: string,
  id: string,
  first_name: string,
  last_name: string,
  phone_number:null | string,
}