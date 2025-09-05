import React from 'react';
import { useState } from 'react';
import { Button, Input } from 'antd';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const formatPhone = val => {
        const digits = val.replace(/\D/g, '').slice(0, 9);
        let result = '';

        if (digits.length >= 1) result += '(' + digits.slice(0, 2);
        if (digits.length >= 3) result += ') ' + digits.slice(2, 5);
        if (digits.length >= 6) result += '-' + digits.slice(5, 7);
        if (digits.length >= 8) result += '-' + digits.slice(7, 9);

        return result;
    };

    const handlePhoneChange = e => {
        const input = e.target.value;
        setPhone(formatPhone(input));
    };

    // const handleLogin = () => {
    //     const cleanPhone = phone.replace(/\D/g, '');
    //     if (cleanPhone.length !== 9 && role === 'user') {
    //         toast.error('Telefon raqam kiriting!');
    //         return;
    //     }

    //     if (role === 'user') {
    //         const payload = {
    //             phone: cleanPhone,
    //             password,
    //         };

    //         login
    //             .boss(payload)
    //             .then(res => {
    //                 if (res.status === 401 || res.status === 400) {
    //                     toast.error(res?.response?.data?.message);
    //                 } else if (res.data.token) {
    //                     dispatch(setToken(res.data.token));
    //                     localStorage.setItem('token', res.data.token);
    //                     localStorage.setItem('loginSuccess', 'true');
    //                     window.location.reload();
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     } else {
    //         const payload = {
    //             login: loginState,
    //             password,
    //         };

    //         login
    //             .tv(payload)
    //             .then(res => {
    //                 if (res.status === 401 || res.status === 400) {
    //                     toast.error(res?.response?.data?.message);
    //                 } else if (res.data.token) {
    //                     dispatch(setToken(res.data.token));
    //                     localStorage.setItem('token', res.data.token);
    //                     localStorage.setItem('loginSuccess', 'true');
    //                     window.location.reload();
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }
    // };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '400px',
                    background: 'white',
                    padding: '24px',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}
            >
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Login
                </div>
                <Input size='large' placeholder='Basic usage' />

                <Input.Password size='large' placeholder='input password' />

                <Button type='primary' size='large'>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;
