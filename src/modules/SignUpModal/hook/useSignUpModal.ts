import { SingUpFormValue } from "../SingUpModal";
import { publicAxios } from "../../../utils/publicAxios";

export function useSignUpModal() {
   async function signUpUser(values: SingUpFormValue) {
    const response = await publicAxios.post("/auth/register", values);
    console.log(response.data)
    }
    return { signUpUser };
}