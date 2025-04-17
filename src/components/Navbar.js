import React from 'react';
import { Layout, Menu, Dropdown, Button, Badge } from 'antd';
import { BellOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import '../App.css';

const { Header } = Layout;

const Navbar = () => {
  const fintechMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Help</Menu.Item>
    </Menu>
  );

  const languageMenu = (
    <Menu>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="es">Spanish</Menu.Item>
      <Menu.Item key="fr">French</Menu.Item>
    </Menu>
  );

  const logoutMenu = (
    <Menu>
      <Menu.Item key="Logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className="navbar">
      <div className="navbar-left">
        <p className="bill-description">
          Purchases<br/>
          A Bill is a document that indicates 
        </p>
      </div>
      <div className="navbar-right">
        

        {/* Fintech Dropdown */}
        <Dropdown overlay={fintechMenu}>
          <a className="company-name" onClick={(e) => e.preventDefault()}>
            Fintech Company <DownOutlined />
          </a>
        </Dropdown>

        {/* Language Dropdown */}
        <Dropdown overlay={languageMenu}>
          <a className="language-dropdown" onClick={(e) => e.preventDefault()}>
            English <DownOutlined />
          </a>
        </Dropdown>

        {/* Notification Bell */}
        <Badge count={3}>
          <Button
            shape="circle"
            icon={<BellOutlined />}
            className="navbar-btn"
          />
        </Badge>

        {/* Logout Dropdown */}
        <Dropdown overlay={logoutMenu}>
          <a className="logout-dropdown" onClick={(e) => e.preventDefault()}>
            Logout <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
