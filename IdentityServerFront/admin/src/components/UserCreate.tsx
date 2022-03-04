import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import UserCreateModel from "../models/UserCreate";
import ApiService from "../../pages/api/api";

const UserCreate = () => {
    const [form] = Form.useForm();

    const handleFormSubmit = () => {
      
        console.log('handleFormSubmit')
        form.validateFields()
            .then((values) => {
                createUser(values);
            })
            .catch((errorInfo) => { console.log('error'); });
    };

    const createUser = (user: UserCreateModel) => {
        console.log(`Id: ${user.Id}, UserName: ${user.UserName}, Password: ${user.Password}, FirstName: ${user.FirstName}, LastName: ${user.LastName}, Email: ${user.Email}`);
        ApiService.createUser(user).then();
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
                    name="Password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="Confirm"
                    label="Confirm"
                    dependencies={['Password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!'
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if(!value || getFieldValue('Password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'))
                            }
                        })
                    ]}>
                         <Input.Password />
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

export default UserCreate;