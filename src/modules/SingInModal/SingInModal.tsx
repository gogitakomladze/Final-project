
import { Modal, Form, Input, Button } from "antd";

type SignInModalProps = {
    onCancel: () => void;
};

export function SignInModal( { onCancel }: SignInModalProps ){
    return (
        <Modal 
        title='შესვლა' 
        centered={true} 
        onCancel={onCancel} 
        open={true}
        footer={ <Button form="signIn" type='primary' htmlType='submit'>შესვლა</Button>}
        >

            <Form name="signIn" className="mt-3"   autoComplete="off">
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
 </Form>
  </Modal>
    );
}
