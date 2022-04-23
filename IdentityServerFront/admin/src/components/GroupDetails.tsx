import { Card,  Typography } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { CSSProperties } from "react";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import ApiService from '../../pages/api/api';
import Group from "../models/Group";

const GroupDetails = () => {
    const router = useRouter();
    const id = router.query.id;
    const gridStyle = {
        width: '50%',
        textAlign: 'left',
      } as CSSProperties;

    const onClick = () => {
        router.push('/groups/edit/[id]', `/groups/edit/${id}`);
    };

    const [group, setGroup] = useState<Group>(null);


    useEffect(() => {
        console.log(`useEffect id ${id}`)
        fetchGroup(id as string);
    }, []);


    const fetchGroup = async (id: string) => {
        const response = await ApiService.getGroupById(id);
        console.log(response);
        setGroup(response);
    };

    return (
        <div id="group_details">
            <Card title="Group information" 
                bordered={true} 
                style={{width: 600}}
                loading={!group} 
                actions={
                    [<EditOutlined key="edit" onClick={onClick} />]
                }>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>Group Name</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{group?.Name}</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>Creation date</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{group?.CreationDate}</Typography>
                </Card.Grid>
            </Card>
        </div>
    );
};

export default GroupDetails;