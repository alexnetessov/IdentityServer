import { Layout, Menu, Dropdown } from 'antd';

import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

type Props  = {
    collapsed: boolean;
    handleToggle(): void;
};

const {Header} = Layout;

const UserMenu = () => {
    return(
        <Menu>
            <Menu.Item key="profile">
                <UserOutlined style={{marginRight: 5}}/>
                Profile
            </Menu.Item>
            <Menu.Divider style={{ marginTop: -5, marginBottom: 0 }} />
            <Menu.Item key="logout">
                <LogoutOutlined style={{marginRight: 5}}/>
                Logout
            </Menu.Item>
        </Menu>
    );
};

const HeaderLayout = (props: Props) => {
    const {collapsed, handleToggle} = props;
    return(
        <Header style={{paddingLeft: 10}}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "inline-block", height: "100%" }}>
                    {collapsed && <MenuFoldOutlined onClick={handleToggle} style={{ color: "white" }} />}
                    {!collapsed && <MenuUnfoldOutlined onClick={handleToggle} style={{ color: "white" }} />}
                </div>
                <div style={{ display: "inline-block", height: "100%"}}>
                    <Dropdown overlay={<UserMenu />} placement="bottomRight">
                        <div style={{ color: "white" }}>
                            <UserOutlined style={{marginRight: 5}}/>
                            <span>Admin</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    );
};

export default HeaderLayout;