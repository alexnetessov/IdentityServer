import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import ApiService from "../../pages/api/api";
import Group from "../models/Group";

const GroupCreate = () => {
    const [form] = Form.useForm();

    const [submitLoadibng, setSubmitLoadibng] = useState<boolean>(false);

    const handleFormSubmit = () => {
      
        console.log('handleFormSubmit')
        form.validateFields()
            .then((values) => {
                createGroup(values);
            })
            .catch((errorInfo) => { console.log(`error: ${errorInfo}`); });
    };

    const createGroup = (group: Group) => {
        setSubmitLoadibng(true);
        ApiService.createGroup(group).then(()=> {
            setSubmitLoadibng(false);
        }).catch(()=> {
            setSubmitLoadibng(false);
        });
    };

    return (
        <>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" form={form}>
                <Form.Item label="Id"  name="Id">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[{ required: true, message: 'Please enter Group Name' }]} >
                    <Input />
                </Form.Item>
            </Form>
            <Button onClick={handleFormSubmit} loading={submitLoadibng} type="primary">
                Submit
            </Button>
        </>
    );
};

export default GroupCreate;