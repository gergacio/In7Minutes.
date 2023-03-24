import {useState, useEffect} from 'react'
import {deleteCourse, getAllCourses} from "../services/CourseServices";
import "antd/dist/antd.css";
import {
    Layout,
    Table,
    Spin,
    Empty,
    Button,
    Badge,
    Tag,
    Avatar,
    Radio, Popconfirm
} from 'antd';

import {
    UserOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';
import CourseDrawerForm from "../forms/CourseDrawerForm";

import {errorNotification, successNotification} from "../Notification";



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
const removeStudent = (courseId, callback) => {
    deleteCourse(courseId).then(() => {
        successNotification("Course deleted", `Course with id: ${courseId} was deleted`);
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

const columns = fetchCourses => [
    {
        title: '',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, course) =>
            <TheAvatar name={course.name}/>
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, course) =>
            <Radio.Group>
                <Popconfirm
                    placement='topRight'
                    title={`Are you sure to delete ${course.name}`}
                    onConfirm={() => removeStudent(course.id, fetchCourses)}
                    okText='Yes'
                    cancelText='No'>
                    <Radio.Button value="small">Delete <span>❌</span></Radio.Button>
                </Popconfirm>
                <Radio.Button onClick={() => alert("TODO: Implement edit course")} value="small">Edit</Radio.Button>
            </Radio.Group>
    }
];

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

const CourseContainer = () => {
    const [courses, setCourses] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);

    const fetchCourses = () =>
        getAllCourses()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
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
        fetchCourses();
    }, []);

    const renderCourses = () => {
        if (fetching) {
            return <Spin indicator={antIcon}/>
        }
        if (courses.length <= 0) {
            return <>
                <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    type="primary" shape="square" icon={<PlusOutlined/>} size="small">
                    Add New Course
                </Button>
                <CourseDrawerForm
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    fetchCourses={fetchCourses}
                />
                <Empty/>
            </>
        }
        return <>
            <CourseDrawerForm
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                fetchCourses={fetchCourses}
            />
            <Table
                dataSource={courses}
                columns={columns(fetchCourses)}
                bordered
                title={() =>
                    <>
                        <Tag>Number of courses</Tag>
                        <Badge count={courses.length} className="site-badge-count-4"/>
                        <br/><br/>
                        <Button
                            onClick={() => setShowDrawer(!showDrawer)}
                            type="primary" shape="square" icon={<PlusOutlined/>} size="small">
                            Add New Course
                        </Button>
                    </>
                }
                pagination={{pageSize: 50}}
                scroll={{y: 500}}
                rowKey={student => student.id}
            />
        </>
    }

    return(<Layout style={{minHeight: '100vh'}}>
        <Layout className="site-layout">
            <Content style={{margin: '0 16px'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {renderCourses()}
                </div>
            </Content>
        </Layout>
    </Layout>)

}

export default CourseContainer;