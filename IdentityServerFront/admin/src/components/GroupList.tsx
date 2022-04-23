import * as React from "react";
import Table, { ColumnsType } from 'antd/lib/table';
import {Popconfirm, Button} from 'antd';
import { useRouter } from 'next/router';
import ApiService from '../../pages/api/api';
import Loading from "./Loading";
import Group from "../models/Group";


const GroupComponent = () => {
    const router = useRouter();
    const [groups, setGroups] = React.useState<Group[]>([])

    React.useEffect(() => {
        async function fetchGroups() {
            const response = await ApiService.getAllGroups();
            setGroups(response);
        };

        fetchGroups();
    }, []);

    const onDelete = (id: string) => {
        const filteredGroups = groups.filter(x=> x.Id !== id);
        ApiService.deleteGroup(id);
        setGroups(filteredGroups);
    };
    
    const onCreate = () => {
        console.log('Create group');
        router.push('/groups/create');
    };

    const showDetails = (id: string) => {
        console.log(id);
        router.push('/groups/details/[id]', `/groups/details/${id}`);
    };

    const columns: ColumnsType<Group> = [
        {
            key: 'Name',
            title: 'Name',
            dataIndex: 'Name',
        },
        {
            key: 'CreationDate',
            title: 'CreationDate',
            dataIndex: 'CreationDate'
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
    console.log(`groups loading ${!groups}`);

    if(!groups){
        return <Loading/>
    }

    return (
        <>
            <Button onClick={onCreate}>Create Group</Button>
            <Table loading={!groups} dataSource={groups} columns={columns} />
        </>
      );
};

export default GroupComponent;