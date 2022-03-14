import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import ApiService from '../../pages/api/api';
import User from "../models/User";

const UserEdit = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const id = router.query.id;

    const [user, setUser] = useState<User>(null);


    useEffect(() => {
        if (user == null) {
            fetchUser(id as string);
        }

        form.setFieldsValue({
            Id: user?.Id,
            UserName: user?.UserName,
            FirstName: user?.FirstName,
            LastName: user?.LastName,
            Email: user?.Email,
        })

    }, [form, user]);

    const fetchUser = async (id: string) => {
        const response = await ApiService.getUserById(id);
        setUser(response);
    }

    const handleFormSubmit = () => {
      
        console.log('handleFormSubmit')
        form.validateFields()
            .then((values) => {
                updateUser(values);
            })
            .catch((errorInfo) => { console.log('error'); });
    };

    const updateUser = (user: User) => {
        ApiService.updateUser(user).then();
    };

    return (
        <>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
                <Form.Item label="Id"  name="Id">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label="UserName"
                    name="UserName"
                    rules={[{ required: true, message: 'Please enter UserName' }]} >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="FirstName"
                    name="FirstName" >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="LastName"
                    name="LastName" >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="Email"  >
                    <Input />
                </Form.Item>
            </Form>
            <Button onClick={handleFormSubmit} type="primary">
                Submit
            </Button>
        </>
    );
};

export default UserEdit;