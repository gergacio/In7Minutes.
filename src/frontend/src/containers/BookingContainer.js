//import {useState, useEffect} from 'react'
//import {deleteBooking, getAllBookings} from "../services/BookingServices";
//import {
//    Layout,
//    Table,
//    Spin,
//    Empty,
//    Button,
//    Badge,
//    Tag,
//    Avatar,
//    Radio, Popconfirm
//} from 'antd';
//
//import {
//    UserOutlined,
//    LoadingOutlined,
//    PlusOutlined
//} from '@ant-design/icons';
//import BookingDrawerForm from "../forms/BookingDrawerForm";
//
//import {errorNotification, successNotification} from "../Notification";
//
//
//
//const {Content} = Layout;
//// const TheAvatar = ({name}) => {
////     let trim = name.trim();
////     if (trim.length === 0) {
////         return <Avatar icon={<UserOutlined/>}/>
////     }
////     const split = trim.split(" ");
////     if (split.length === 1) {
////         return <Avatar>{name.charAt(0)}</Avatar>
////     }
////     return <Avatar>
////         {`${name.charAt(0)}${name.charAt(name.length - 1)}`}
////     </Avatar>
//// }
//const removeBooking = (bookingId, callback) => {
//    deleteBooking(bookingId).then(() => {
//        successNotification("Booking deleted", `Booking with id: ${bookingId} was deleted`);
//        callback();
//    }).catch(err => {
//        err.response.json().then(res => {
//            console.log(res);
//            errorNotification(
//                "There was an issue",
//                `${res.message} [${res.status}] [${res.error}]`
//            )
//        });
//    })
//}
//
//const columns = fetchBookings => [
//    // {
//    //     title: '',
//    //     dataIndex: 'avatar',
//    //     key: 'avatar',
//    //     render: (text, booking) =>
//    //         <TheAvatar name={booking.id}/>
//    // },
//    {
//        title: 'Id',
//        dataIndex: 'id',
//        key: 'id',
//    },
//    {
//        title: 'Date',
//        dataIndex: 'date',
//        key: 'date',
//    },
//    {
//        title: 'Course Name',
//        dataIndex: ["course", "name"],
//        key: ["course", "name"],
//    },
//    {
//        title: 'Student Name',
//        dataIndex: ["student", "name"],
//        key: ["student", "name"],
//    },
//    {
//        title: 'Actions',
//        key: 'actions',
//        render: (text, booking) =>
//            <Radio.Group>
//                <Popconfirm
//                    placement='topRight'
//                    title={`Are you sure to delete ${booking.id}`}
//                    onConfirm={() => removeBooking(booking.id, fetchBookings)}
//                    okText='Yes'
//                    cancelText='No'>
//                    <Radio.Button value="small">Delete <span> ❌</span></Radio.Button>
//                </Popconfirm>
//                <Radio.Button onClick={() => alert("TODO: Implement edit booking")} value="small">Edit</Radio.Button>
//            </Radio.Group>
//    }
//];
//
//const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;
//
//const BookingContainer = () => {
//    const [bookings, setBookings] = useState([]);
//    const [fetching, setFetching] = useState(true);
//    const [showDrawer, setShowDrawer] = useState(false);
//
//    const fetchBookings = () =>
//        getAllBookings()
//            .then(res => res.json())
//            .then(data => {
//                console.log(data);
//                setBookings(data);
//            }).catch(err => {
//            console.log(err.response)
//            err.response.json().then(res => {
//                console.log(res);
//                errorNotification(
//                    "There was an issue",
//                    `${res.message} [${res.status}] [${res.error}]`
//                )
//            });
//        }).finally(() => setFetching(false))
//
//    useEffect(() => {
//        console.log("component is mounted");
//        fetchBookings();
//    }, []);
//
//    const renderBookings = () => {
//        if (fetching) {
//            return <Spin indicator={antIcon}/>
//        }
//        if (bookings.length <= 0) {
//            return <>
//                <Button
//                    onClick={() => setShowDrawer(!showDrawer)}
//                    type="primary" shape="square" icon={<PlusOutlined/>} size="small">
//                    Add New Booking
//                </Button>
//                <BookingDrawerForm
//                    showDrawer={showDrawer}
//                    setShowDrawer={setShowDrawer}
//                    fetchBookings={fetchBookings}
//                />
//                <Empty/>
//            </>
//        }
//        return <>
//            <BookingDrawerForm
//                showDrawer={showDrawer}
//                setShowDrawer={setShowDrawer}
//                fetchBookings={fetchBookings}
//            />
//            <Table
//                dataSource={bookings}
//                columns={columns(fetchBookings)}
//                bordered
//                title={() =>
//                    <>
//                        <Tag>Number of bookings</Tag>
//                        <Badge count={bookings.length} className="site-badge-count-4"/>
//                        <br/><br/>
//                        <Button
//                            onClick={() => setShowDrawer(!showDrawer)}
//                            type="primary" shape="square" icon={<PlusOutlined/>} size="small">
//                            Add New Booking
//                        </Button>
//                    </>
//                }
//                pagination={{pageSize: 50}}
//                scroll={{y: 500}}
//                rowKey={booking => booking.id}
//            />
//        </>
//    }
//
//    return(<Layout style={{minHeight: '100vh'}}>
//        <Layout className="site-layout">
//            <Content style={{margin: '0 16px'}}>
//                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
//                    {renderBookings()}
//                </div>
//            </Content>
//        </Layout>
//    </Layout>)
//
//}
//
//export default BookingContainer;