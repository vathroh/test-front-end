import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='container-page'>
            <div className='login-box'>
                <h2>Admin</h2>
                <Form
                    name="basic"
                    className="login-form"
                    labelCol={{ span: 32 }}
                    wrapperCol={{ span: 64 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                              required: true,
                              pattern: new RegExp(
                                /^[0-9a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i
                              ),
                              message: 'Please input your password without space character!',
                            },
                            {
                                min: 8,
                                message: 'the password must be minimum 8 character'
                            }
                          ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <p><Link to="/reset-password">Forgot password?</Link></p>
                    <Button className="primary login-form-button" type="primary" htmlType="submit" >Login</Button>
                    <Button className="login-form-button" htmlType="submit" >Login with Phone</Button>
                </Form>
                <p>Don't have any account yet? <span><Link to="/register">Sign up here</Link></span></p>
            </div>
        </div>
    )
}

export default Login