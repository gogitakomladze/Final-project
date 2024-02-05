
import { Modal } from "antd";

type SignUpModalProps = {
    onCancel: () => void;
};

export function SignUpModal( { onCancel }: SignUpModalProps ){
    return (
        <Modal centered={true}  onCancel={onCancel} open={true}>
            SignInModal
        </Modal>
    )
}
