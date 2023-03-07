import {Drawer, Input, Col, Select, Form, Row, Button, Spin} from 'antd';
import {addNewLesson} from "../services/LessonService";
import {LoadingOutlined} from "@ant-design/icons";
import {useState} from 'react';
import {successNotification, errorNotification} from "../Notification";

const {Option} = Select;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function LessonDrawerForm({showDrawer, setShowDrawer, fetchLessons}) {
    const onCLose = () => setShowDrawer(false);
    const [submitting, setSubmitting] = useState(false);

    const onFinish = lesson => {
        setSubmitting(true)
        console.log(JSON.stringify(lesson, null, 2))
        addNewLesson(lesson)
            .then(() => {
                console.log("lesson added")
                onCLose();
                successNotification(
                    "Lesson successfully added",
                    `${lesson.title} was added to the system`
                )
                fetchLessons();
            }).catch(err => {
            console.log(err);
            err.response.json().then(res => {
                console.log(res);
                // res.message = ""
                errorNotification(
                    "There was an issue",
                    `${res.message} [${res.status}] [${res.error}]`,
                    "bottomLeft"
                )
            });
        }).finally(() => {
            setSubmitting(false);
        })
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Create new lesson"
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{required: true, message: 'Please enter lesson title'}]}
                    >
                        <Input placeholder="Please enter lesson title"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[{required: true, message: 'Please enter lesson content'}]}
                    >
                        <Input placeholder="Please enter lesson content"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                {submitting && <Spin indicator={antIcon} />}
            </Row>
        </Form>
    </Drawer>
}

export default LessonDrawerForm;