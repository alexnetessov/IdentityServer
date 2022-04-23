import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { UserOutlined, GroupOutlined } from '@ant-design/icons';
import Link from 'next/link'

const keys = ['/users', '/groups'];

const menuItems = [
    <Menu.Item key={keys[0]}>
        <Link href={keys[0]}>
            <a>
                <UserOutlined />
                <span>Users</span>
            </a>
        </Link>
    </Menu.Item>,
    <Menu.Item key={keys[1]}>
    <Link href={keys[1]}>
        <a>
            <GroupOutlined />
            <span>Groups</span>
        </a>
    </Link>
    </Menu.Item>
    
];

const MenuLayout = () => {
    const router = useRouter();
    const currentPath = router.route;

    let selectedKeys: string[] = [];

    for (let i = 0; i < keys.length - 1; i++) {
        if (currentPath.includes(keys[i])) {
            selectedKeys = [keys[i]];
            break;
        }
    }

    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            onClick={({ key }) => {
                console.log(`router pushed ${key}`);
                router.push(key);
            }}
        >
            {menuItems}
        </Menu>
    );
};

export default MenuLayout;