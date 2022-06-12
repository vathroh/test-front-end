import {
    AppstoreOutlined,
    FileTextOutlined,
    HomeOutlined,
    NotificationOutlined,
    ReadOutlined,
    RightOutlined,
    SettingOutlined,
    ShopOutlined,
    ShoppingOutlined,
    SmileOutlined,
    TagOutlined,
} from '@ant-design/icons';
import { MenuProps, Table } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <AppstoreOutlined />),
    getItem('Orders', '2', <ShoppingOutlined />),
    getItem('Products', 'products', <TagOutlined />, [
        getItem('All Products', '3', ''),
        getItem('Inventory', '4', ''),
        getItem('Category', '5'),
        getItem('Addons', '6'),
    ]),
    getItem('Customers', 'sub1', <SmileOutlined />, []),
    getItem('Reviews', '7', <ReadOutlined />),
    getItem('CMS', 'sub2', <FileTextOutlined />, []),
    getItem('Marketing', 'sub3', <NotificationOutlined />, []),
    getItem('Settings', '8', <SettingOutlined />),
    getItem('/login', 'Login', <SettingOutlined />),
    getItem('Settings', '10', <SettingOutlined />),
];

const { Title } = Typography;

const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} breakpoint={"lg"}>
                <div className="logo" style={{ color: '#fff' }}>
                    <ShopOutlined />
                    <span style={{ paddingLeft: '10px' }}>Srikopi</span>
                    <RightOutlined style={{ float: 'right', paddingTop: '5px' }} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="/">
                        <HomeOutlined />
                        <span>Home</span>
                        <Link to=""></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Breadcrumb style={{ margin: '20px' }}>
                        <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                        <Breadcrumb.Item>All Products</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Title style={{ margin: '20px' }}>Products</Title>
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div style={{ fontWeight: '600' }}>List Product</div>
                        <Table>

                        </Table>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>KodingWorks ©2022 Created by Fathur Rohman</Footer>
            </Layout>
        </Layout>
    );

}

export default Home