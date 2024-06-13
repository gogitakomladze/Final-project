import { Modal, Form, Input, Button, Alert } from "antd";
import { TAuthRequest } from "../../@types/requestTypes"; 
import { publicAxios } from "../../utils/publicAxios";
import { useAuthProvider } from "../../provider/AuthProvider";
import { useState } from "react";


type SignInModalProps = {
    onCancel: () => void;
};

export type SingInFormValue = {
  email: string;
  password: string;
}

export function SignInModal( { onCancel }: SignInModalProps ){

  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<boolean>();
   const { setAuthData } = useAuthProvider();
  async function onFinish(values: SingInFormValue) {
    try {
      setAuthLoading(true);
      const response = await publicAxios.post("/auth/login", values);
      setAuthData(response.data as TAuthRequest);
      setAuthLoading(false);
      onCancel();
    }catch (error) {
    setAuthError(true);
    }finally {
      setAuthLoading(false);
    }
    }

    return (
        <Modal 
        title='შესვლა' 
        centered={true} 
        onCancel={onCancel} 
        open={true}
        footer={ 
        <Button
           loading={authLoading}  
         className="bg-black"
         form="signIn" 
         type='primary' 
         htmlType='submit'>შესვლა</Button>}
        >

    <Form<SingInFormValue>
     onFinish = {onFinish}
     name="signIn" 
     className="mt-3"  
     autoComplete="off"
     >
    <Form.Item
      label="იმეილი"
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="პაროლი"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    {authError && 
    <Alert className="mt-3"
    type="error"
    message="მომხმარების მეილი ანა პაროლი არასწორია"
    />} 
 </Form>
  </Modal>
  
    );
}
