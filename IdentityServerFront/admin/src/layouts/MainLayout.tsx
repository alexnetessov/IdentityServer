import { Layout, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import MenuLayout from './MenuLayout';
import HeaderLayout from './HeaderLayout';

export default function MainLayout ({ children } : { 
        children: React.ReactNode
        }) {
    const [collapsed, setCollapsed] = useState(false);
    const { Content, Sider } = Layout;

    const onCollapse = () => {
        setCollapsed(!collapsed);
      };

      return (
          <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsed={collapsed} >
                  <div>
                      <div className="logo" />
                      <MenuLayout />
                  </div>
              </Sider>
              <Layout>
                  <HeaderLayout collapsed={collapsed} handleToggle={onCollapse} />
                  <Content style={{ margin: '0 16px' }}>
                      <Breadcrumb style={{ margin: '16px 0' }}>
                          <Breadcrumb.Item>User</Breadcrumb.Item>
                          <Breadcrumb.Item>Bill</Breadcrumb.Item>
                      </Breadcrumb>
                      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                          {children}
                      </div>
                  </Content>
              </Layout>
          </Layout>
      );
};