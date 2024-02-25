import { Modal, Form, Input, Button } from "antd";
import { publicAxios } from "../../utils/publicAxios";
import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthRequest } from "../../@types/requestTypes";
import { useState } from "react";

type SingUpModalProps = {
    onCancel: () => void;
};

export type SingUpFormValue = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  "repeat-password": string;

}

export function SignUpModal( { onCancel }: SingUpModalProps ){
   const [form] = Form.useForm();
   const [authLoading,setAuthLoading]= useState(false);
   const { setAuthData } = useAuthProvider();


 async function onFinish(values: SingUpFormValue) {
    if (values.password !== values['repeat-password']){
      form.setFields([
        {name: 'repeat-password',
         errors:[" შემოყვანილი პაროლი არ ემთხვევა"]
        },
      ]);
      return;
    }

    try {
      setAuthLoading(true);
      const response = await publicAxios.post("/auth/register", values);
      setAuthData(response.data as TAuthRequest);
    }catch (error) {

    }finally {
      setAuthLoading(false);
    }
      
    }

    return (
        <Modal 
        title='რეგისტრაცია' 
        centered={true} 
        onCancel={onCancel} 
        open={true}
        footer={ 
          <Button 
            loading={authLoading} 
            form="signup" 
            type='primary' 
            htmlType='submit'
            className="bg-black"
          >
          რეგისტრაცია
          </Button>
          }
        >

   <Form<SingUpFormValue> 
   name="signup"  
   className="mt-3"   
   autoComplete="off"
   form={form}
   onFinish={onFinish} 
   >
   
    <Form.Item
      label="სახელი"
      name="first_name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="გვარი"
      name="last_name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="ტელეფონის ნომერი"
      name="phone_number"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="იმელი"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
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
    <Form.Item
      label="გაიმეორე პაროლი"
      name="repeat-password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
 </Form>
  </Modal>
    );
}
