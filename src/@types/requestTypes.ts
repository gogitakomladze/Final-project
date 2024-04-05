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
  created_at: string,
  updated_at: string,
  title: string,  
  category_name: string,
  description: string,
  image: string,
  price: number,
  salePrice: number
}

export type TUserRequest = {
  email: string,
  id: string,
  first_name: string,
  last_name: string,
  phone_number:null | string,
}

export interface TCartProducts {
  cartProduct: producttype;
  count: number;
  id: string;
  product_id: string;
  user_id: string;
}
export interface TLikeProduct {
    likeProduct: producttype;
    id: string;
    product_id: string;
    user_id: string;
  
}
