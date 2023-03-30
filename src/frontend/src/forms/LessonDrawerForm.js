import {Drawer, Input, Col, Form, Row, Button, Spin} from 'antd';
import {addNewLesson} from "../services/LessonService";
import {LoadingOutlined} from "@ant-design/icons";
import {useState} from 'react';
import {successNotification, errorNotification} from "../Notification";
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextArea from "antd/es/input/TextArea";

const Box = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
    border: 1px solid black;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function LessonDrawerForm({showDrawer, setShowDrawer, fetchLessons}) {
    const [text, setText] = useState('');
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
        bodyStyle={{
            paddingBottom: 80,
            width: 736,
            overflow: "auto"
        }}
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
                        name={["course", "id"]}
                        label="Course Id"
                        rules={[{required: true, message: 'Please enter course id'}]}
                    >
                        <Input placeholder="Please enter course id"/>
                    </Form.Item>
                </Col>

            </Row >

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[{required: true, message: 'Please enter lesson content'}]}

                    >
                        <TextArea rows={4} placeholder="Please copy tagged content" maxLength={500000} />

                    </Form.Item>
                     </Col>
                       <Col span={12}>
                    <Box>
                        <h3>Copy Tagged Content  ⇧</h3>
                        <h4>Create Tagged Content Tool</h4>
                        <CKEditor
                            // config={{ plugins: [ImageResize] }}
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}

                        />
                        <h4>Tagged Content</h4>
                        <div>{text}</div>
                    </Box>
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