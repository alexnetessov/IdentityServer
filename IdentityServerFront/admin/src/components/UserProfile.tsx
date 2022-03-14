import { Card,  Typography } from "antd";
import User from "../models/User";
import { EditOutlined } from '@ant-design/icons';
import { CSSProperties } from "react";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import ApiService from '../../pages/api/api';

const UserProfile = () => {
    const router = useRouter();
    const id = router.query.id;
    const gridStyle = {
        width: '50%',
        textAlign: 'left',
      } as CSSProperties;

    const onClick = () => {
        router.push('/users/edit/[id]', `/users/edit/${id}`);
    };

    const [user, setUser] = useState<User>(null);


    useEffect(() => {
        console.log(`useEffect id ${id}`)
        fetchUser(id as string);
    }, []);


    const fetchUser = async (id: string) => {
        const response = await ApiService.getUserById(id);
        console.log(response);
        setUser(response);
    };

    return (
        <div id="user_profile">
            <Card title="User information" 
                bordered={true} 
                style={{width: 600}}
                loading={!user} 
                actions={
                    [<EditOutlined key="edit" onClick={onClick} />]
                }>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>User Name</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{user?.UserName}</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>First Name</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{user?.FirstName}</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>Last Name</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{user?.LastName}</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>Email</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{user?.Email}</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>Creation date (UTC)</Typography>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Typography>{user?.CreationDateUtc}</Typography>
                </Card.Grid>
            </Card>
        </div>
    );
};

export default UserProfile;