// App.jsx
import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, useLocation } from 'react-router';
import { Outlet } from 'react-router';

const { Header, Sider, Content } = Layout;

const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Home' },
    { key: '/admin', icon: <SettingOutlined />, label: 'Admin' },
];

const SidebarMenu = ({ collapsed }) => {
    const location = useLocation();
    return (
        <Menu
            theme='dark'
            mode='inline'
            selectedKeys={[location.pathname]}
            items={menuItems.map(item => ({
                key: item.key,
                icon: item.icon,
                label: <Link to={item.key}>{item.label}</Link>,
            }))}
        />
    );
};

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    style={{
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        padding: collapsed ? 0 : '0 16px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}
                >
                    {/* Logo qismi */}
                    <span style={{ marginRight: collapsed ? 0 : 8 }}>
                        <img src='/vite.svg' alt='' />
                    </span>
                    {!collapsed && 'MyApp'}
                </div>
                <SidebarMenu collapsed={collapsed} />
            </Sider>

            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type='text'
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

const App = () => <AppLayout />;

export default App;
