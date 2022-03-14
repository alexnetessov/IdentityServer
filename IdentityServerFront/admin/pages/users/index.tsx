import Head from 'next/head';
import UserList from '../../src/components/UserList';
import "antd/dist/antd.css";

const Users = () => {
    return (
        <>
            <Head>User Management</Head>
            <UserList />
        </>
    );
};

export default Users;