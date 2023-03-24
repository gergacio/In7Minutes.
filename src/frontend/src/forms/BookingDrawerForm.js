//import {Drawer, Input, Col, Select, Form, Row, Button, Spin} from 'antd';
//import {addNewBooking} from "../services/BookingServices";
//import {LoadingOutlined} from "@ant-design/icons";
//import {useState} from 'react';
//import {successNotification, errorNotification} from "../Notification";
//
//const {Option} = Select;
//
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
//
//function BookingDrawerForm({showDrawer, setShowDrawer, fetchBookings}) {
//    const onCLose = () => setShowDrawer(false);
//    const [submitting, setSubmitting] = useState(false);
//
//    const onFinish = booking => {
//        setSubmitting(true)
//        console.log(JSON.stringify(booking, null, 2))
//        addNewBooking(booking)
//            .then(() => {
//                console.log("booking added")
//                onCLose();
//                successNotification(
//                    "Booking successfully added",
//                    `${booking.id} was added to the system`
//                )
//                fetchBookings();
//            }).catch(err => {
//            console.log(err);
//            err.response.json().then(res => {
//                console.log(res);
//                errorNotification(
//                    "There was an issue",
//                    `${res.message} [${res.status}] [${res.error}]`,
//                    "bottomLeft"
//                )
//            });
//        }).finally(() => {
//            setSubmitting(false);
//        })
//    };
//
//    const onFinishFailed = errorInfo => {
//        alert(JSON.stringify(errorInfo, null, 2));
//    };
//
//    return <Drawer
//        title="Create new booking"
//        width={720}
//        onClose={onCLose}
//        visible={showDrawer}
//        bodyStyle={{paddingBottom: 80}}
//        footer={
//            <div
//                style={{
//                    textAlign: 'right',
//                }}
//            >
//                <Button onClick={onCLose} style={{marginRight: 8}}>
//                    Cancel
//                </Button>
//            </div>
//        }
//    >
//        <Form layout="vertical"
//              onFinishFailed={onFinishFailed}
//              onFinish={onFinish}
//              hideRequiredMark>
//            <Row gutter={16}>
//                <Col span={12}>
//                    <Form.Item
//                        name="date"
//                        label="Date"
//                        rules={[{required: true, message: 'Please enter booking date'}]}
//                    >
//                        <Input placeholder="Please enter booking date"/>
//                    </Form.Item>
//                </Col>
//            </Row>
//            <Row gutter={16}>
//                <Col span={12}>
//                    <Form.Item
//                        name={["course", "id"]}
//                        label="Course Id"
//                        rules={[{required: true, message: 'Please enter course id'}]}
//                    >
//                        <Input placeholder="Please enter course id"/>
//                    </Form.Item>
//                </Col>
//
//            </Row>
//            <Row gutter={16}>
//                <Col span={12}>
//                    <Form.Item
//                        name={["student", "id"]}
//                        label="Student Id"
//                        rules={[{required: true, message: 'Please enter student id'}]}
//                    >
//                        <Input placeholder="Please enter student id"/>
//                    </Form.Item>
//                </Col>
//
//            </Row>
//
//
//            {/*----------------*/}
//            <Row>
//                <Col span={12}>
//                    <Form.Item>
//                        <Button type="primary" htmlType="submit">
//                            Submit
//                        </Button>
//                    </Form.Item>
//                </Col>
//            </Row>
//            <Row>
//                {submitting && <Spin indicator={antIcon} />}
//            </Row>
//        </Form>
//    </Drawer>
//}
//
//export default BookingDrawerForm;