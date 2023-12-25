import { useState } from "react";

import { Button, Space } from "antd";
import { SHeader } from "./Header.styled";

import { NewPupilModal } from "../NewPupilModal";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SHeader>
      <Space>
        <Button>ქართული</Button>
        <Button>მათემატიკა</Button>
        <Button>ინგლისური</Button>
      </Space>
      <Space>
        <Button>პირველი კვირა</Button>
        <Button>მეორე კვირა</Button>
        <Button>მესამე კვირა</Button>
        <Button type="dashed" onClick={() => setOpen(true)}>
          ახალი მოსწავლის დამატება
        </Button>
      </Space>
      {open && <NewPupilModal onCancel={() => setOpen(false)} />}
    </SHeader>
  );
}
