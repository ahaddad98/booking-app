import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import styled from "styled-components";
import { tologin, tologinsignup } from "../networkAPI/axiosAPI";
import { callbackify } from "util";
import { useHistory } from "react-router-dom";
// import { Button, Checkbox, Form, Input } from 'antd';
const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
    .leftpart{
        width: 50%;
        padding: 3rem;
        @media screen and (max-width: 1100px){
            /* flex-direction: column; */
            width: 100%;
            padding: .5rem;
        }
        .text{
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 10rem;
            padding-right: 10rem;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;        
            color: #000000;
        }
    }
    .login{
        @media screen and (max-width: 1100px){
            /* flex-direction: column; */
            width: 100%;
        }
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .logincard{
            background: #FFFFFF;
            box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
            border-radius: 40px;
            height: 60px;
            align-items: center;
            width: 539px;
            @media screen and (max-width: 600px){
            /* flex-direction: column; */
                width: 100%;
            }
            padding: 3rem;
            height: auto;
            .welcomepart{
                margin-top: 1rem;
                display: flex;
                justify-content: space-between;
                .welcome{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 32px;
                    color: #000000;
                    .applocker{
                        font-weight: 500;
                        color: #0089ED;
                        font-size: 19px;
                    }
                }
                .account{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;                
                    color: #8D8D8D;
                    .signup{
                        color: #0089ED;
                        cursor: pointer;
                    }
                }
            }
            .signin{
                margin-top: 1rem;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 50px;
                line-height: 82px;
                color: #000000;
            }
            .auth{
                padding-top: 1rem;
                display: flex;
                justify-content: center;
                gap: 2rem;
                flex-wrap: wrap;
                .google{
                    width: 298px;
                    height: 55px;
                    background: #E9F1FF;
                    border-radius: 9px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    .signingoogle{
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 24px;
                        color: #4285F4;
                    }
                }
                .facebook{
                    width: 60px;
                    height: 55px;
                    background: #F7F7F7;
                    border-radius: 9px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .icloud{
                    width: 60px;
                    height: 55px;
                    background: #F7F7F7;
                    border-radius: 9px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            .username{
                padding-top: 4rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                justify-content: center;
                .usernametext{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #000000;
                }
                .inputstyle{
                    display: flex;
                    justify-content: center;
                    width:100%;
                    height: 57px;
                    background: #FFFFFF;
                    border: 1px solid #ADADAD;
                    border-radius: 9px;
                }
                .forgetpassword{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;
                    color: #4285F4;
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 3rem;
                }
            }
            .mybotton{
                width: 100%;
                height: 54px;
                margin-top: 3rem;
                background: #0089ED;
                box-shadow: 0px 4px 19px rgba(119, 147, 65, 0.3);
                border-radius: 10px;
                color: #fff;
            }
        }
    }
`

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const [show, setShow] = useState(false);
    const [loggedIn, setLoggedIn] = useState<any>(null)
    const [singup, setSignup] = useState(false)

    const onFinish = (values: any) => {
        // console.log('Success:', values);
        setpassword(values.password)
        setEmail(values.username)
        if (!singup) {
            try {

                logintoapp(values.username, values.password)
            }
            catch (e) {
                // console.log(e);
            }
        }
        else {
            try {

                logintoappsignup(values.username, values.email, values.password)
            }
            catch (e) {
                // console.log(e);
            }
        }
    };
    const his = useHistory()
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const logintoapp = async (email: any, password: any) => {
        // console.log(email, password);
        try {
            const res = await tologin(email, password)
            console.log(res?.data.tokens.access);
            if (res?.data.tokens.access)
            {
                localStorage.setItem('token', res?.data.tokens.access.token)
                his.push('/')
            }
            setLoggedIn(true)
        }
        catch (e) {
            alert('User Not Found try again')
            // console.log('im here ');

            // setLoggedIn(false)
        }
    }
    const logintoappsignup = async (name: any, email: any, password: any) => {
        // console.log(email, password);
        try {
            const res = await tologinsignup(name, email, password)
            // console.log('res', res?.data.tokens.access);
            setSignup(false)
            setLoggedIn(true)
        }
        catch (e) {
            alert('User Not Found try again')
            // console.log('im here ');

            // setLoggedIn(false)
        }
    }
    useEffect(()=>{
        if (localStorage.getItem('token'))
            his.push('/')
    },[])
    return <Content>
        <div className="leftpart">
            <div>
                <svg width="244" height="62" viewBox="0 0 244 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="244" height="62" rx="6" fill="#D9D9D9" fill-opacity="0.42" />
                    <path d="M98.5957 17.5V40H95.0508V17.5H98.5957ZM101.789 32.251V31.9141C101.789 30.7715 101.955 29.7119 102.287 28.7354C102.619 27.749 103.098 26.8945 103.723 26.1719C104.357 25.4395 105.129 24.873 106.037 24.4727C106.955 24.0625 107.99 23.8574 109.143 23.8574C110.305 23.8574 111.34 24.0625 112.248 24.4727C113.166 24.873 113.942 25.4395 114.577 26.1719C115.212 26.8945 115.695 27.749 116.027 28.7354C116.359 29.7119 116.525 30.7715 116.525 31.9141V32.251C116.525 33.3936 116.359 34.4531 116.027 35.4297C115.695 36.4062 115.212 37.2607 114.577 37.9932C113.942 38.7158 113.171 39.2822 112.263 39.6924C111.354 40.0928 110.324 40.293 109.172 40.293C108.01 40.293 106.97 40.0928 106.052 39.6924C105.144 39.2822 104.372 38.7158 103.737 37.9932C103.103 37.2607 102.619 36.4062 102.287 35.4297C101.955 34.4531 101.789 33.3936 101.789 32.251ZM105.319 31.9141V32.251C105.319 32.9639 105.393 33.6377 105.539 34.2725C105.686 34.9072 105.915 35.4639 106.228 35.9424C106.54 36.4209 106.94 36.7969 107.429 37.0703C107.917 37.3438 108.498 37.4805 109.172 37.4805C109.826 37.4805 110.393 37.3438 110.871 37.0703C111.359 36.7969 111.76 36.4209 112.072 35.9424C112.385 35.4639 112.614 34.9072 112.761 34.2725C112.917 33.6377 112.995 32.9639 112.995 32.251V31.9141C112.995 31.2109 112.917 30.5469 112.761 29.9219C112.614 29.2871 112.38 28.7256 112.058 28.2373C111.745 27.749 111.345 27.3682 110.856 27.0947C110.378 26.8115 109.807 26.6699 109.143 26.6699C108.479 26.6699 107.902 26.8115 107.414 27.0947C106.936 27.3682 106.54 27.749 106.228 28.2373C105.915 28.7256 105.686 29.2871 105.539 29.9219C105.393 30.5469 105.319 31.2109 105.319 31.9141ZM129.636 24.1504H132.844V39.5605C132.844 40.9863 132.541 42.1973 131.936 43.1934C131.33 44.1895 130.485 44.9463 129.401 45.4639C128.317 45.9912 127.062 46.2549 125.637 46.2549C125.031 46.2549 124.357 46.167 123.615 45.9912C122.883 45.8154 122.17 45.5322 121.477 45.1416C120.793 44.7607 120.222 44.2578 119.763 43.6328L121.418 41.5527C121.984 42.2266 122.609 42.7197 123.293 43.0322C123.977 43.3447 124.694 43.501 125.446 43.501C126.257 43.501 126.945 43.3496 127.512 43.0469C128.088 42.7539 128.532 42.3193 128.845 41.7432C129.157 41.167 129.313 40.4639 129.313 39.6338V27.7393L129.636 24.1504ZM118.869 32.251V31.9434C118.869 30.7422 119.016 29.6484 119.309 28.6621C119.602 27.666 120.021 26.8115 120.568 26.0986C121.115 25.376 121.779 24.8242 122.561 24.4434C123.342 24.0527 124.226 23.8574 125.212 23.8574C126.237 23.8574 127.111 24.043 127.834 24.4141C128.566 24.7852 129.177 25.3174 129.665 26.0107C130.153 26.6943 130.534 27.5146 130.808 28.4717C131.091 29.4189 131.301 30.4736 131.438 31.6357V32.6172C131.311 33.75 131.096 34.7852 130.793 35.7227C130.49 36.6602 130.09 37.4707 129.592 38.1543C129.094 38.8379 128.479 39.3652 127.746 39.7363C127.023 40.1074 126.169 40.293 125.183 40.293C124.216 40.293 123.342 40.0928 122.561 39.6924C121.789 39.292 121.125 38.7305 120.568 38.0078C120.021 37.2852 119.602 36.4355 119.309 35.459C119.016 34.4727 118.869 33.4033 118.869 32.251ZM122.399 31.9434V32.251C122.399 32.9736 122.468 33.6475 122.604 34.2725C122.751 34.8975 122.971 35.4492 123.264 35.9277C123.566 36.3965 123.947 36.7676 124.406 37.041C124.875 37.3047 125.427 37.4365 126.062 37.4365C126.892 37.4365 127.57 37.2607 128.098 36.9092C128.635 36.5576 129.045 36.084 129.328 35.4883C129.621 34.8828 129.826 34.209 129.943 33.4668V30.8154C129.885 30.2393 129.763 29.7021 129.577 29.2041C129.401 28.7061 129.162 28.2715 128.859 27.9004C128.557 27.5195 128.176 27.2266 127.717 27.0215C127.258 26.8066 126.716 26.6992 126.091 26.6992C125.456 26.6992 124.904 26.8359 124.436 27.1094C123.967 27.3828 123.581 27.7588 123.278 28.2373C122.985 28.7158 122.766 29.2725 122.619 29.9072C122.473 30.542 122.399 31.2207 122.399 31.9434ZM135.832 32.251V31.9141C135.832 30.7715 135.998 29.7119 136.33 28.7354C136.662 27.749 137.141 26.8945 137.766 26.1719C138.4 25.4395 139.172 24.873 140.08 24.4727C140.998 24.0625 142.033 23.8574 143.186 23.8574C144.348 23.8574 145.383 24.0625 146.291 24.4727C147.209 24.873 147.985 25.4395 148.62 26.1719C149.255 26.8945 149.738 27.749 150.07 28.7354C150.402 29.7119 150.568 30.7715 150.568 31.9141V32.251C150.568 33.3936 150.402 34.4531 150.07 35.4297C149.738 36.4062 149.255 37.2607 148.62 37.9932C147.985 38.7158 147.214 39.2822 146.306 39.6924C145.397 40.0928 144.367 40.293 143.215 40.293C142.053 40.293 141.013 40.0928 140.095 39.6924C139.187 39.2822 138.415 38.7158 137.78 37.9932C137.146 37.2607 136.662 36.4062 136.33 35.4297C135.998 34.4531 135.832 33.3936 135.832 32.251ZM139.362 31.9141V32.251C139.362 32.9639 139.436 33.6377 139.582 34.2725C139.729 34.9072 139.958 35.4639 140.271 35.9424C140.583 36.4209 140.983 36.7969 141.472 37.0703C141.96 37.3438 142.541 37.4805 143.215 37.4805C143.869 37.4805 144.436 37.3438 144.914 37.0703C145.402 36.7969 145.803 36.4209 146.115 35.9424C146.428 35.4639 146.657 34.9072 146.804 34.2725C146.96 33.6377 147.038 32.9639 147.038 32.251V31.9141C147.038 31.2109 146.96 30.5469 146.804 29.9219C146.657 29.2871 146.423 28.7256 146.101 28.2373C145.788 27.749 145.388 27.3682 144.899 27.0947C144.421 26.8115 143.85 26.6699 143.186 26.6699C142.521 26.6699 141.945 26.8115 141.457 27.0947C140.979 27.3682 140.583 27.749 140.271 28.2373C139.958 28.7256 139.729 29.2871 139.582 29.9219C139.436 30.5469 139.362 31.2109 139.362 31.9141Z" fill="#8B8B8B" />
                </svg>
            </div>
            <div className="text">
                Louer facilement des articles neufs ou d’occasion sur Applooker   mis en vente par des individuels / entreprises et près de chez vous . Trouvez des bons plans intéressants..
            </div>
        </div>
        {
            !singup &&
            <div className="login">
                <div className="logincard">
                    <div className="welcomepart">
                        <div className="welcome">
                            Welcome to <span className="applocker">APPLOOKER</span>
                        </div>
                        <div className="account">
                            No Account ?
                            <br />
                            <span className="signup" onClick={() => setSignup(true)} >Sign up</span>
                        </div>
                    </div>
                    <div className="signin">
                        Sign in
                    </div>
                    <div className="auth">
                        <div className="google">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3762 13.2527C24.3762 12.3174 24.2988 11.6349 24.1312 10.9271H13.2334V15.1485H19.6302C19.5012 16.1975 18.8048 17.7774 17.2572 18.839L17.2355 18.9803L20.6812 21.5963L20.9199 21.6196C23.1123 19.6353 24.3762 16.7157 24.3762 13.2527Z" fill="#4285F4" />
                                <path d="M13.2326 24.375C16.3664 24.375 18.9973 23.3638 20.919 21.6197L17.2563 18.839C16.2762 19.5089 14.9607 19.9766 13.2326 19.9766C10.1631 19.9766 7.55802 17.9923 6.62936 15.2496L6.49324 15.261L2.91038 17.9784L2.86353 18.106C4.77223 21.8218 8.69286 24.375 13.2326 24.375Z" fill="#34A853" />
                                <path d="M6.63013 15.2497C6.3851 14.542 6.24329 13.7836 6.24329 13C6.24329 12.2163 6.3851 11.458 6.61724 10.7503L6.61075 10.5995L2.98298 7.8385L2.86428 7.89383C2.07761 9.43579 1.62622 11.1674 1.62622 13C1.62622 14.8326 2.07761 16.5641 2.86428 18.1061L6.63013 15.2497Z" fill="#FBBC05" />
                                <path d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.69289 1.625 4.77224 4.17804 2.86353 7.89384L6.61649 10.7503C7.55805 8.00763 10.1632 6.0233 13.2326 6.0233Z" fill="#EB4335" />
                            </svg>
                            <div className="signingoogle">
                                Sign in with Google
                            </div>
                        </div>
                        <div className="facebook">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="14.5" cy="13.34" rx="12.6875" ry="12.6875" fill="url(#paint0_linear_241_1975)" />
                                <path d="M19.2249 18.3802L19.7885 14.7992H16.2629V12.4763C16.2629 11.4964 16.7544 10.5407 18.3336 10.5407H19.9375V7.49196C19.9375 7.49196 18.4825 7.25 17.0921 7.25C14.1872 7.25 12.2903 8.96548 12.2903 12.0698V14.7992H9.0625V18.3802H12.2903V27.0375C12.9383 27.1367 13.6012 27.1875 14.2766 27.1875C14.9519 27.1875 15.6148 27.1367 16.2629 27.0375V18.3802H19.2249Z" fill="#F7F7F7" />
                                <defs>
                                    <linearGradient id="paint0_linear_241_1975" x1="14.5" y1="0.652466" x2="14.5" y2="25.9522" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#18ACFE" />
                                        <stop offset="1" stop-color="#0163E0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="icloud">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.1875 14C27.1875 20.762 21.5098 26.25 14.5 26.25C7.49016 26.25 1.8125 20.762 1.8125 14C1.8125 7.23187 7.49016 1.75 14.5 1.75C21.5098 1.75 27.1875 7.23187 27.1875 14Z" fill="#283544" />
                                <path d="M20.4469 10.9002C20.3777 10.9392 18.7295 11.7622 18.7295 13.5869C18.8072 15.6678 20.8094 16.3976 20.8437 16.3976C20.8094 16.4366 20.5415 17.3917 19.7478 18.393C19.1179 19.2554 18.4188 20.125 17.3572 20.125C16.3474 20.125 15.9849 19.5502 14.8197 19.5502C13.5684 19.5502 13.2143 20.125 12.2563 20.125C11.1947 20.125 10.4438 19.2088 9.77959 18.3545C8.91668 17.2363 8.18324 15.4815 8.15734 13.7965C8.13989 12.9037 8.33015 12.026 8.81311 11.2805C9.49477 10.2398 10.7117 9.53333 12.0407 9.51004C13.059 9.47915 13.9652 10.139 14.5867 10.139C15.1822 10.139 16.2956 9.51004 17.5553 9.51004C18.0991 9.51054 19.5491 9.65792 20.4469 10.9002ZM14.5005 9.33177C14.3193 8.5164 14.8197 7.70104 15.2858 7.18093C15.8813 6.55193 16.8219 6.125 17.633 6.125C17.6848 6.94037 17.3566 7.74003 16.7701 8.32244C16.2438 8.95144 15.3376 9.42496 14.5005 9.33177Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label=""
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <div className="username">
                                <div className="usernametext">
                                    Enter your username or email address
                                </div>
                                <Input placeholder='Username or email address' bordered={false} className='inputstyle' />
                            </div>
                        </Form.Item>
                        <Form.Item
                            label=""
                            name="password"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <div className="username" >
                                <div className="usernametext">
                                    Enter your Password
                                </div>
                                <Input placeholder='Password' type='password' bordered={false} className='inputstyle' />
                                <div className="forgetpassword">
                                    Forgot Password
                                </div>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button className="mybotton" htmlType="submit">
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
        {
            singup &&
            <div className="login">
                <div className="logincard">
                    <div className="welcomepart">
                        <div className="welcome">
                            Welcome to <span className="applocker">APPLOOKER</span>
                        </div>
                        <div className="account">
                            already have Account ?
                            <br />
                            <span className="signup" onClick={() => setSignup(false)} >Sign In</span>
                        </div>
                    </div>
                    <div className="signin">
                        Sign Up
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label=""
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <div className="username">
                                <div className="usernametext">
                                    Enter your username
                                </div>
                                <Input placeholder='Username' bordered={false} className='inputstyle' />
                            </div>
                        </Form.Item>
                        <Form.Item
                            label=""
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <div className="username">
                                <div className="usernametext">
                                    Enter your email
                                </div>
                                <Input placeholder='email' bordered={false} className='inputstyle' />
                            </div>
                        </Form.Item>
                        <Form.Item
                            label=""
                            name="password"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <div className="username" >
                                <div className="usernametext">
                                    Enter your Password
                                </div>
                                <Input placeholder='Password' type='password' bordered={false} className='inputstyle' />
                                <div className="forgetpassword">
                                    Forgot Password
                                </div>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button className="mybotton" htmlType="submit">
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* <div className="username">
                        <div className="usernametext">
                            Enter your email address
                        </div>
                        <Input placeholder='email address' bordered={false} className='inputstyle' />
                    </div>
                    <div className="username">
                        <div className="usernametext">
                            Enter your Password
                        </div>
                        <Input placeholder='Enter your Password' type='password' bordered={false} className='inputstyle' />
                    </div>
                    <Button className="mybotton" >
                        Sign in */}
                    {/* </Button> */}
                </div>
            </div>
        }
    </Content>
}

export default Login