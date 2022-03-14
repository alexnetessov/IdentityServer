import * as React from "react";
import User from '../models/User';
import Table, { ColumnsType } from 'antd/lib/table';
import {Popconfirm, Button} from 'antd';
import { useRouter } from 'next/router';
import ApiService from '../../pages/api/api';
import Loading from "./Loading";
import Users from "../models/Users";


const UserComponent = () => {
    const router = useRouter();
    const [users, setUsers] = React.useState<Users[]>([])

    React.useEffect(() => {
        async function fetchUsers() {
            const response = await ApiService.getAllUsers();
            setUsers(response);
        };

        fetchUsers();
    }, []);

    const onDelete = (id: string) => {
        const filteredUsers = users.filter(x=> x.Id !== id);
        ApiService.deleteUser(id);
        setUsers(filteredUsers);
    };
    
    const onCreate = () => {
        console.log('Create user');
        router.push('/users/create');
    };

    const showDetails = (id: string) => {
        console.log(id);
        router.push('/users/details/[id]', `/users/details/${id}`);
    };

    const columns: ColumnsType<User> = [
        {
            key: 'UserName',
            title: 'UserName',
            dataIndex: 'UserName',
        },
        {
            key: 'CreationDateUtc',
            title: 'CreationDateUtc',
            dataIndex: 'CreationDateUtc'
        },
        {
            key: 'Action',
            title: 'Action',
            dataIndex: 'Action',
            render: (text, record) => {
               return (
                   <>
                       <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.Id)}>
                           <Button>Delete</Button>
                       </Popconfirm>
                       <Button onClick={()=> showDetails(record.Id)} style={{marginLeft: 5}}>Detail</Button>
                   </>
               ); 
            }
        }
    ]
    console.log(`users loading ${!users}`);

    if(!users){
        return <Loading/>
    }

    return (
        <>
            <Button onClick={onCreate}>Create User</Button>
            <Table loading={!users} dataSource={users} columns={columns} />
        </>
      );
};

export default UserComponent;