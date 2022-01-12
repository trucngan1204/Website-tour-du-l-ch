import React, { useState } from 'react'
import './Login.css'
import { BrowserRouter as Router, Link, useHistory, Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';
import firebase from "firebase"
import { message } from 'antd'
import { checklogin, inforData } from "./InforSlice"
import { useDispatch } from 'react-redux'
import loginApi from '../../../api/LoginApi'
import { userData } from '../Admin/Taikhoan/TaikhoanSlice'
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};
function Login(props) {
    const [state, setState] = useState({ email: '', password: '' })
    const { email, password } = state
    const actionuser = async () => { await dispatch(userData()) }
    const dispatch = useDispatch()
    const actioninfor = async () => { await dispatch(inforData()) }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            message.warning("Email không đúng định dạng!")
        } else {
            if (email.trim() === "" || password.trim() === "") {
                message.warning("Bạn chưa nhập đầy đủ thông tin!");
            } else {
                var token = await loginApi.login({ email: email, password: password }).then(data => {
                    return data
                })
                if (token !== "err") {
                    localStorage.setItem("token", token)
                    actioninfor()
                    message.success("Đăng nhập thành công!");
                    history.push('/')
                } else {
                    message.warning("Sai tên đăng nhập hoặc mật khẩu!")
                }
            }
        }
    }
    const onchange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const history = useHistory()
    const hangdleDK = () => {
        history.push('/dangky')
    }
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return (
        <Router>
            <div id="login">
                <div className="box-login">
                    <form className="form" onSubmit={onsubmit}>
                        <h3 className="text-uppercase text-black text-center pb-3">Đăng nhập </h3>
                        <div className="input-group flex-wrap">
                            <input type="text" className="form-control" placeholder="Tài khoản" value={email} name='email' onChange={onchange} aria-label="email" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-wrap mt-3 mb-3">
                            <input type="password" className="form-control" placeholder="Mật khẩu" value={password} name="password" onChange={onchange} aria-label="email" aria-describedby="addon-wrapping" />
                        </div>

                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" onChange="onclick" /> <span className="text-dark">Nhớ mật khẩu</span>
                            </label>
                            <Link to="#" onClick={hangdleDK} className="float-right text-dark">Chưa có tài khoản?</Link>
                        </div>
                        <Button type="submit" variant="contained" color="secondary" className="w-100 mb-4">Đăng nhập&nbsp;&nbsp;<i class="fas fa-sign-in-alt" aria-hidden="true"></i></Button>
                    </form>
                    <div class="form-divider">Hoặc</div>
                    <div className="mxh mt-3">
                        <Button variant="contained" color="primary" className="text-capitalize mb-3 facebook">
                            <i className="fab fa-facebook-f mr-4"></i> Facebook
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize float-right mb-3 twitter">
                            <i className="fab fa-twitter mr-4"></i> Twitter
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize mb-3 google">
                            <i className="fab fa-google mr-4"></i> Google
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize instagram float-right mb-3">
                            <i className="fab fa-instagram mr-4"></i> Instagram
                        </Button>
                    </div>
                </div>
            </div>
        </Router>

    )
}

Login.propTypes = {

}

export default Login


