import React from 'react'
import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const ResetPassword:React.FC = () => {
    return (
        <div className='container-page'>
            <div className='login-box'>
                <h2>Reset Password</h2>
                <Form>
                    <Form.Item className='input-group' rules={[{ required: true, message: 'Please input the email!' }]}>
                        <Input type="text" id="email" placeholder='Email' />
                        <MailOutlined />
                    </Form.Item>
                    <Button className="primary" type="primary" htmlType="submit">Request Reset Password</Button>
                    <Button>Back</Button>
                </Form>
                <p>Don't have any account yet? <span><Link to="/register">Sign up here</Link></span></p>
            </div>
        </div>
    )
}

export default ResetPassword