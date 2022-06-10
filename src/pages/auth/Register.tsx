import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, PhoneOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Register:React.FC = () => {
    return (
        <div className='container-page'>
            <div className='login-box'>
                <h2>Register</h2>
                <Form>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the email!' }]}>
                        <Input type="text" id="email" placeholder='Tenant Name' />
                        <ShopOutlined />
                    </Form.Item>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the email!' }]}>
                        <Input type="text" id="email" placeholder='Admin Name' />
                        <UserOutlined />
                    </Form.Item>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the email!' }]}>
                        <Input type="text" id="email" placeholder='email' />
                        <MailOutlined />
                    </Form.Item>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the email!' }]}>
                        <Input type="text" id="email" placeholder='Phone Number' />
                        <PhoneOutlined />
                    </Form.Item>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the password!' }]}>
                        <Input.Password placeholder='Password' />
                        <LockOutlined />
                    </Form.Item>
                    <Button className="primary" type="primary" htmlType="submit">Login</Button>
                </Form>
                <p>Already have an account? <span><Link to="/login">Login here</Link></span></p>
            </div>
        </div>
    )
}

export default Register