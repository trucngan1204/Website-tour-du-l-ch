import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Trangchu/Footer/Footer'
import img9 from "../../images/9.jpg"
import "./Contact.css"
export default function Contact() {

    return (
        <div id="contact">
            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                        <li className="breadcrumb-item"><Link to="/hotels">Khách sạn</Link></li>
                        <li className="breadcrumb-item">Liên hệ khách sạn</li>
                    </ol>
                </nav>
            </div>
            <div className="content container">
                <div className="content___box">
                    <div className="content___box___left">
                        <div className="content___box___left___title">
                            <div className="contact_name">
                                Vinpearl Resort & Spa Đà Nẵng
                        </div>
                            <h3>BOOKING</h3>
                            <div className="contact_mail">
                                <i className="fas fa-envelope"></i>
                                {/* <i className="material-icons">email</i> */}
                            info@dongtayland.vn
                        </div>
                            <div className="contact_number">
                                <div className="contact_number-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="contact_number-a">
                                    <p>0977.48.7777</p>
                                    <p>093.112.9988</p>
                                </div>
                            </div>
                            <div className="contact_img">
                                <img src={img9} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content___box___right">
                        <form action="" method="post">
                            <p>Dấu <span className="color-blue">*</span> là thông tin bắt buộc</p>
                            <div className="form-group">
                                <label for="">Họ và tên <span className="color-blue">*</span></label>
                                <input type="text" className="form-control" name="" id="" aria-describedby="helpId"
                                    placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="">Email <span className="color-blue">*</span></label>
                                <input type="text" className="form-control" name="" id="" aria-describedby="helpId"
                                    placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="">Số điện thoại <span className="color-blue">*</span></label>
                                <input type="text" className="form-control" name="" id="" aria-describedby="helpId"
                                    placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="">Yêu cầu <span className="color-blue">*</span></label>
                                <textarea name="" className="form-control" id="" cols="30" rows="3"></textarea>
                            </div>
                            <div className="btn-dt">
                                <Button className=" pl-5 pr-5" variant="contained" color="primary">
                                    <a href = "https://vinpearl.com/vi/hotels/vinpearl-resort-spa-da-nang">
                                    Liên hệ ngay
                                    </a>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
