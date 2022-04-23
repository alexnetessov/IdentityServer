import Head from 'next/head';
import GrroupList from '../../src/components/GroupList';
import "antd/dist/antd.css";

const Groups = () => {
    return (
        <>
            <Head>Group Management</Head>
            <GrroupList />
        </>
    );
};

export default Groups;