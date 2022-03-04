import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import ApiService from '../../pages/api/api';
import User from "../models/User";
import {useDispatch, useSelector} from "react-redux";
import * as userSelectors from "../store/users/reducer";
import * as userActions from "../store/users/actions";
import IState from "../view_models/IState";
import {Dispatch} from "../extensions/reduxThunkExtensions";
import { Action } from "../store/users/actionTypes";

const UserEdit = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const id = router.query.id;

    const dispatch = useDispatch<Dispatch<Action>>();
    const {users} = useSelector((state: IState)=> ({
        users: userSelectors.getUserById(id as string, state)
    }));

    useEffect(() => {
        dispatch(userActions.fetchUser(id as string)).then();
        form.setFieldsValue({
            Id: users?.Id,
            UserName: users?.UserName,
            FirstName: users?.FirstName,
            LastName: users?.LastName,
            Email: users?.Email,
        })

    }, [form]);

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