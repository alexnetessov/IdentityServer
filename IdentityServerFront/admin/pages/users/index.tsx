import Head from 'next/head';
import UserList from '../../src/components/UserList';
import {QueryClientProvider, QueryClient} from 'react-query'
import "antd/dist/antd.css";

const users = [
    {
        key: 1,
        Id:"1",
        UserName: "asdfыфввввввввввввввввввввввв фыв ыфыф     ыф ыф",
        FirsName: "asdas",
        LastName: "asdsf",
        Email: "asdsaf",
    },
    {
        key: 2,
        Id:"2",
        UserName: "asdf1",
        FirsName: "asdas1",
        LastName: "asdsf1",
        Email: "asdsaf1",
    },
    {
        key: 3,
        Id:"3",
        UserName: "asdf1",
        FirsName: "asdas1",
        LastName: "asdsf1",
        Email: "asdsaf1",
    },
    {
        key: 4,
        Id:"4",
        UserName: "asdf2",
        FirsName: "asda2",
        LastName: "asdsf2",
        Email: "asdsaf2",
    },
    {
        key: 5,
        Id:"5",
        UserName: "asdf2",
        FirsName: "asdas2",
        LastName: "asdsf2",
        Email: "asdsaf2",
    },
];
const queryClient = new QueryClient();

const Users = () => {
    return (
        <>
            <Head>User Management</Head>
            <QueryClientProvider client={queryClient}>
                <UserList users={users}></UserList>
            </QueryClientProvider>
        </>
    );
};

export default Users;