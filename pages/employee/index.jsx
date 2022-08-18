import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import ModalAddEmpolyee from '../../components/Modal/ModalAddEmployee';
// import ModalEditEmployee from '../../components/Modal/ModalEditEmployee';
import Image from 'react-bootstrap/Image'
import { Button, OverlayTrigger , Tooltip } from 'react-bootstrap';
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";


function Employee() {
  return (
    <Container className="my-5">
      <h1>ระบบเพิ่มพนักงาน</h1>
      {/* <ModalAddEmpolyee /> */}
     
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
      <span className="d-inline-block">
        <Button disabled style={{ pointerEvents: 'none' }}>
          Disabled button
        </Button>
      </span>
    </OverlayTrigger>
    </Container>
  );
}

export default Employee;