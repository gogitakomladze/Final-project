import { Modal, Input, Form } from "antd";

type NewPupilModalProps = {
  onCancel: () => void;
};

export function NewPupilModal({ onCancel }: NewPupilModalProps) {
  return (
    <Modal
      centered
      width={400}
      title="დაამატე ახალი მოსწავლე"
      open={true}
      onCancel={onCancel}
    >
      <Form>
        <Input placeholder="მოსწავლის სახელი" />
        <Input placeholder="მოსწავლის გვარი" className="mt-3" />
        <Input placeholder="მოსწავლის პირადი ნომერი" className="mt-3" />
      </Form>
    </Modal>
  );
}
