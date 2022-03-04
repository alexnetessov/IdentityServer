import * as React from "react";
import User from '../models/User';
import Table, { ColumnsType } from 'antd/lib/table';
import {Popconfirm, Button} from 'antd';
import { useRouter } from 'next/router';
import ApiService from '../../pages/api/api';
import Loading from "./Loading";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "../extensions/reduxThunkExtensions";
import { Action } from "../store/users/actionTypes";
import * as userActions from "../store/users/actions";
import * as userSelectors from "../store/users/reducer";
import IState from "../view_models/IState";


const UserComponent = () => {
    const router = useRouter();
    const dispatch = useDispatch<Dispatch<Action>>();
    const {users} = useSelector((state: IState)=> ({
        users: userSelectors.getUsers(state)
    }));

    React.useEffect(() => {
        dispatch(userActions.fetchUsers());
    }, []);

    const onDelete = (id: string) => {
        ApiService.deleteUser(id);
    };

    const onEdit = (id: string) => {
        console.log(id);
        router.push('/users/id/[id]', `/users/id/${id}`);
    };
    
    const onCreate = () => {
        console.log('Create user');
        router.push('/users/create');
    };

    const columns: ColumnsType<User> = [
        {
            key: 'Id',
            title: 'Id',
            dataIndex: 'Id',
        },
        {
            key: 'UserName',
            title: 'UserName',
            dataIndex: 'UserName',
        },
        {
            key: 'FirstName',
            title: 'FirstName',
            dataIndex: 'FirstName'
        },
        {
            key: 'LastName',
            title: 'LastName',
            dataIndex: 'LastName'
        },
        {
            key: 'Email',
            title: 'Email',
            dataIndex: 'Email'
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
                       <Button onClick={()=> onEdit(record.Id)}>Edit</Button>
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
            <Table dataSource={users} columns={columns} />
        </>
      );
};

export default UserComponent;