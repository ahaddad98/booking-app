import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from "styled-components";
import { Col, Container, Row, Toast } from 'react-bootstrap'
const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`

const Login = () => {
    const Paragrafe = styled.p`
    font-size: 0.9rem;
    font-weight: bold;
    color: #8692A6;
    text-align: center;
    margin-bottom: 1rem;
    .ContentLogin{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }
`
    const [email, setEmail] = useState('Demo');
    const [password, setpassword] = useState('Demo');
    const [show, setShow] = useState(false);
    // let history = useHistory();
    useState(() => {
        if (localStorage.getItem('userConnecter') != null || localStorage.getItem('userConnecter') != undefined) {
            // history.push('/');
        }
    })
    useEffect(() => {
        localStorage.clear();
    }, [])
    return (
        <Content>
            <Row >
                <Col><img src="/foooter.svg" alt="" width="250px" style={{ marginLeft: "20px", marginTop: "10px" }} /></Col>
            </Row>
            <Row className='d-flex inputs i-test row' >
                <Col xl={6} sm={12} className=" conten w-auto">
                    <h3 style={{ height: "full-content", textAlign: 'center' }}>Connection au Compte</h3>
                    <Paragrafe>Si vous êtes déjà membre, vous pouvez vous connecter avec votre adresse e-mail et votre mot de passe.</Paragrafe>
                    <p className='m-2'>Address E-mail</p>
                    <input value={email} className='pl-10 inputText' type="text" onChange={(event) => {
                        // event.preventDefault();
                        setEmail(event.target.value)
                    }} />
                    <p className='m-2'>Mot de passe</p>
                    <input value={password} className='pl-10 inputText' type="password" onChange={(event) => {
                        // event.preventDefault();
                        setpassword(event.target.value)
                    }} />
                    <div className="checkBoxInput  m-2">
                        <input className="m-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label>Se souvenir de moi</label><br></br>
                    </div>
                    <button className='btnLogin' style={{ background: "linear-gradient(180deg, rgba(66, 82, 110, 0.38) 0%, #5D7285 100%)" }} onClick={() => {
                        if (email === 'Demo' && password === 'Demo') {
                            localStorage.setItem('userConnecter', "Demo");
                            window.location.href = '/'
                        }
                        else {
                            setShow(true);
                        }
                    }}>Connecter</button>

                </Col>
                <Col xl={6} sm={12} className="" >
                    <img className="w-100" src="/loginimage.svg" alt="" />
                </Col>

                <Col xs={6} position="top-end">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">message</strong>
                        </Toast.Header>
                        <Toast.Body>email or mot de passe inccorects</Toast.Body>
                    </Toast>
                </Col>
            </Row>
           <img src="/station.svg" width='600px' alt="" />

        </Content >
    )
    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    // };
    // const [email, setEmail] = useState('Demo');
    // const [password, setpassword] = useState('Demo');
    // const [show, setShow] = useState(false);
    // // let history = useHistory();
    // useState(() => {
    //     if (localStorage.getItem('userConnecter') != null || localStorage.getItem('userConnecter') != undefined) {
    //         // history.push('/');
    //     }
    // })
    // useEffect(() => {
    //     localStorage.clear();
    // }, [])
    // return (
    //     <Content>
    //         <Form
    //             name="normal_login"
    //             className="login-form"
    //             initialValues={{ remember: true }}
    //             onFinish={onFinish}
    //             style={{ width: "40rem" }}
    //         >
    //             <Form.Item
    //                 name="username"
    //                 rules={[{ required: true, message: 'Please input your Username!' }]}
    //             >
    //                 <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    //             </Form.Item>
    //             <Form.Item
    //                 name="password"
    //                 rules={[{ required: true, message: 'Please input your Password!' }]}
    //             >
    //                 <Input
    //                     prefix={<LockOutlined className="site-form-item-icon" />}
    //                     type="password"
    //                     placeholder="Password"
    //                 />
    //             </Form.Item>
    //             <Form.Item>
    //                 <Form.Item name="remember" valuePropName="checked" noStyle>
    //                     <Checkbox>Remember me</Checkbox>
    //                 </Form.Item>

    //                 <a className="login-form-forgot" href="">
    //                     Forgot password
    //                 </a>
    //             </Form.Item>

    //             <Form.Item>
    //                 <Button type="primary" htmlType="submit" className="login-form-button" onClick={
    //                     ()=>{
    //                         if (email === 'Demo' && password === 'Demo') {
    //                             localStorage.setItem('userConnecter', "Demo");
    //                             window.location.href = '/'
    //                         }
    //                         else {
    //                             setShow(true);
    //                         }
    //                     }
    //                 }>
    //                     Log in
    //                 </Button>
    //                 Or <a href="">register now!</a>
    //             </Form.Item>
    //         </Form>
    //         <img src="/vector-petrol-station-vector-ai-svg.jpg" alt="" width='500px' />
    //     </Content>
    // );
    // ;
}

export default Login