import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import ApiService from '../../pages/api/api';
import Group from "../models/Group";

const GroupEdit = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const id = router.query.id;

    const [group, setGroup] = useState<Group>(null);


    useEffect(() => {
        if (group == null) {
            fetchGroup(id as string);
        }

        form.setFieldsValue({
            Id: group?.Id,
            Name: group?.Name
        })

    }, [form, group]);

    const fetchGroup = async (id: string) => {
        const response = await ApiService.getGroupById(id);
        setGroup(response);
    }

    const handleFormSubmit = () => {
      
        console.log('handleFormSubmit')
        form.validateFields()
            .then((values) => {
                updateGroup(values);
            })
            .catch((errorInfo) => { console.log(`error: ${errorInfo}`); });
    };

    const updateGroup = (group: Group) => {
        ApiService.updateGroup(group).then();
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
            <Button onClick={handleFormSubmit} type="primary">
                Submit
            </Button>
        </>
    );
};

export default GroupEdit;