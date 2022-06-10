import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, PhoneOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login:React.FC = () => {
    return (
        <div className='container-page'>
            <div className='login-box'>
                <h2>Login</h2>
                <Form>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the email!' }]}>
                        <Input type="text" id="email" placeholder='email' />
                        <MailOutlined />
                    </Form.Item>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the password!' }]}>
                        <Input.Password placeholder='Password' />
                        <LockOutlined />
                    </Form.Item>
                    <Button className="primary" type="primary" htmlType="submit">Login</Button>
                </Form>
                <p>Don't have any account? <span><Link to="/register">Register here</Link></span></p>
            </div>
        </div>
    )
}

export default Login