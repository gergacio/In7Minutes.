import {useState, useEffect} from 'react'
import {deleteLesson, getAllLessons} from "../services/LessonService";
import {Layout, Table, Spin, Empty, Button, Badge, Tag, Avatar, Radio, Popconfirm} from 'antd';
import {UserOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import LessonDrawerForm from "../forms/LessonDrawerForm";
import {errorNotification, successNotification} from "../Notification";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const {Content} = Layout;
const TheAvatar = ({name}) => {
    let trim = name.trim();
    if (trim.length === 0) {
        return <Avatar icon={<UserOutlined/>}/>
    }
    const split = trim.split(" ");
    if (split.length === 1) {
        return <Avatar>{name.charAt(0)}</Avatar>
    }
    return <Avatar>
        {`${name.charAt(0)}${name.charAt(name.length - 1)}`}
    </Avatar>
}
const removeLesson = (lessonId, callback) => {
    deleteLesson(lessonId).then(() => {
        successNotification("Lesson deleted", `Lesson with id: ${lessonId} was deleted`);
        callback();
    }).catch(err => {
        err.response.json().then(res => {
            console.log(res);
            errorNotification(
                "There was an issue",
                `${res.message} [${res.status}] [${res.error}]`
            )
        });
    })
}
const columns = fetchLessons => [
    {
        title: '',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, lesson) =>
            <TheAvatar name={lesson.title}/>
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Course Name',
        dataIndex: ["course", "name"],
        key: ["course", "name"],
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, lesson) =>
            <>
                <Radio.Group>
                    <Popconfirm
                        placement='topRight'
                        title={`Are you sure to delete ${lesson.title}`}
                        onConfirm={() => removeLesson(lesson.id, fetchLessons)}
                        okText='Yes'
                        cancelText='No'>
                        <Radio.Button value="small">Delete <span>❌</span></Radio.Button>
                        <Radio.Button onClick={() => alert("TODO: Implement edit student")} value="small">Edit</Radio.Button>
                    </Popconfirm>
                </Radio.Group>
            </>
    }
];
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;
const LessonContainer = () => {
    const [lessons, setLessons] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    const fetchLessons = () =>
        getAllLessons()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLessons(data);
            }).catch(err => {
            console.log(err.response)
            err.response.json().then(res => {
                console.log(res);
                errorNotification(
                    "There was an issue",
                    `${res.message} [${res.status}] [${res.error}]`
                )
            });
        }).finally(() => setFetching(false))

    useEffect(() => {
        console.log("component is mounted");
        fetchLessons();
    }, []);

    const renderLessons = () => {
        if (fetching) {
            return <Spin indicator={antIcon}/>
        }
        if (lessons.length <= 0) {
            return <>
                <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    type="primary" shape="square" icon={<PlusOutlined/>} size="small">
                    Add New Lesson
                </Button>
                <LessonDrawerForm
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    fetchLessons={fetchLessons}
                />
                <Empty/>
            </>
        }
        return <>
            <LessonDrawerForm
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                fetchLessons={fetchLessons}
            />
            <Table
                dataSource={lessons}
                columns={columns(fetchLessons)}
                expandable={{rowExpandable:(record) => true,
                    expandedRowRender:(record)=> {
                       return  <CKEditor
                           editor={ClassicEditor}

                           config={{
                               removePlugins: [ 'Heading', 'Link', 'CKFinder' ,'ImageToolbar', 'toolbar'],
                               toolbar: ['TextColor', 'BGColor'],




                               fontSize: {
                                   options: [
                                       'tiny',
                                       'default',
                                       'big'
                                   ]
                               },
                           }}

                           data={record.content}
                           disabled={true}
                       />
                    }
                } }
                bordered
                title={() =>
                    <>
                        <Tag>Number of lessons</Tag>
                        <Badge count={lessons.length} className="site-badge-count-4"/>
                        <br/><br/>
                        <Button
                            onClick={() => setShowDrawer(!showDrawer)}
                            type="primary" shape="square" icon={<PlusOutlined/>} size="small">
                            Add New Lesson
                        </Button>
                    </>
                }
                pagination={{pageSize: 50}}
                scroll={{y: 500}}
                rowKey={lesson => lesson.id}
            />
        </>
    }

    return(<Layout style={{minHeight: '100vh'}}>
        <Layout className="site-layout">
            <Content style={{margin: '0 16px'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {renderLessons()}
                </div>
            </Content>
        </Layout>
    </Layout>)
}
export default LessonContainer;