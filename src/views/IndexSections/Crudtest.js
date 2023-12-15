import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

export default class Crudtest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            fname: '',
            lname: '',
            sex: '',
            old: '',
            jobs: '',
            items: [
                {
                    id: 1,
                    fname: 'John',
                    lname: 'Doe',
                    sex: 'ชาย',
                    old: 30,
                    jobs: 'jobs'
                },
                {
                    id: 2,
                    fname: 'Jane',
                    lname: 'Doe',
                    sex: 'หญิง',
                    old: 28,
                    jobs: 'jobs'
                },

            ],
            editIndex: -1,
            isModalOpen: false,
        };

    }

    // Function to handle input changes
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    // Function to toggle the modal
    toggleModal = () => {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    }

    // Function to generate a unique ID
    generateUniqueId() {
        return new Date().getTime().toString();
    }

    // Function to add a new item with auto-incremented id
    handleAddItem = () => {
        const newItem = {
            id: this.state.items.length + 1, // Auto-increment id
            fname: this.state.fname,
            lname: this.state.lname,
            sex: this.state.sex,
            old: this.state.old,
            jobs: this.state.jobs,
        };

        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
            fname: '',
            lname: '',
            sex: '',
            old: '',
            jobs: '',
            isModalOpen: false,
        }));
    }


    // Function to delete an item
    handleDeleteItem = (index) => {
        const updatedItems = [...this.state.items];
        updatedItems.splice(index, 1);
        this.setState({ items: updatedItems });
    }

    // Function to set the item for editing
    handleEditItem = (index) => {
        const itemToEdit = this.state.items[index];
        this.setState({
            id: itemToEdit.id,
            fname: itemToEdit.fname,
            lname: itemToEdit.lname,
            sex: itemToEdit.sex,
            old: itemToEdit.old,
            jobs: itemToEdit.jobs,
            editIndex: index,
            isModalOpen: true,
        });
    }

    // Function to update an item
    handleUpdateItem = () => {
        const updatedItems = [...this.state.items];
        updatedItems[this.state.editIndex] = {
            id: this.state.id,
            fname: this.state.fname,
            lname: this.state.lname,
            sex: this.state.sex,
            old: this.state.old,
            jobs: this.state.jobs,
        };

        this.setState({
            items: updatedItems,
            id: '',
            fname: '',
            lname: '',
            sex: '',
            old: '',
            jobs: '',
            editIndex: -1,
            isModalOpen: false,
        });
    }



    render() {

        return (
            <Container>
                <h2 className="title">Test CRUD
                    <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                </h2>
                <h4 className="container-fluid">ทดลองใช้งาน</h4>
                <Row>
                    <Col>
                        <div className="modal-header">
                            <Button color="primary" onClick={this.toggleModal}>
                                เพิ่มข้อมูล
                            </Button>
                            <Modal modalClassName="modal-black" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}><h1>เพิ่มข้อมูล</h1></ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="fname">ชื่อ</Label>
                                            <Input type="text" name="fname" id="fname" placeholder="Enter firstname" value={this.state.fname} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="lname">นามสกุล</Label>
                                            <Input type="text" name="lname" id="lname" placeholder="Enter lastname" value={this.state.lname} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="lname">เพศ</Label>
                                            <Input type="select" name="sex" id="sex" value={this.state.sex} onChange={this.handleChange}>
                                                <option style={{ backgroundColor: '#1F2251' }}  >เลือกเพศ</option>
                                                <option style={{ backgroundColor: '#1F2251' }} value="ชาย">ชาย</option>
                                                <option style={{ backgroundColor: '#1F2251' }} value="หญิง">หญิง</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="old">อายุ</Label>
                                            <Input
                                                type="number" name="old" id="old" placeholder="Enter old" value={this.state.old} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="jobs">อธิบายเกี่ยวตัวเอง</Label>
                                            <Input type="text" name="jobs" id="jobs" placeholder="Enter jobs" value={this.state.jobs} onChange={this.handleChange} />
                                        </FormGroup>
                                        <div className="text-right">
                                            {this.state.editIndex === -1 ? (
                                                <Button color="success" onClick={this.handleAddItem}>เพิ่ม</Button>
                                            ) : (
                                                <Button color="success" onClick={this.handleUpdateItem}>บันทึก</Button>
                                            )}
                                        </div>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="ml-auto">
                                        <Button
                                            style={{ fontSize: '15px', padding: '5px 15px', marginRight: '5px' }}
                                            color="danger"
                                            onClick={this.toggleModal}>
                                            ปิด
                                        </Button>
                                    </div>
                                </ModalFooter>

                            </Modal>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <br />
                    <Col>
                        <Table>
                            <thead>
                                <tr style={{ fontSize: '10px' }}>
                                    <th >ลำดับ</th>
                                    <th >ชื่อ</th>
                                    <th >นามสกุล</th>
                                    <th >เพศ</th>
                                    <th >อายุ</th>
                                    <th >อาชีพ</th>
                                    <th >   </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.items.map((item, index) => (
                                    <tr key={item.id}>
                                        <td style={{ fontSize: '12px' }}>{item.id}</td>
                                        <td style={{ fontSize: '12px' }}>{item.fname}</td>
                                        <td style={{ fontSize: '12px' }}>{item.lname}</td>
                                        <td style={{ fontSize: '12px' }}>{item.sex}</td>
                                        <td style={{ fontSize: '12px' }}>{item.old}</td>
                                        <td style={{ fontSize: '12px' }}>{item.jobs}</td>
                                        <td style={{ textAlign: 'right' }}>
                                            <Button
                                                style={{ fontSize: '10px', padding: '5px 6px', marginRight: '5px' }}
                                                color="info"
                                                onClick={() => this.handleEditItem(index)}
                                            >
                                                แก้ไข
                                            </Button>
                                            <Button
                                                style={{ fontSize: '10px', padding: '5px 10px', marginRight: '5px' }}
                                                color="danger"
                                                onClick={() => this.handleDeleteItem(index)}
                                            >
                                                ลบ
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}