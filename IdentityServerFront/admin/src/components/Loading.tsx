import { Spin } from "antd";

const Loading = () => {
    return (
        <div
            style={{
                height: 350,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Spin size="large" />
        </div>
    );
};

export default Loading;