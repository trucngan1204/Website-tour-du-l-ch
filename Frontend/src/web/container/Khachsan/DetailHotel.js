import { Button } from '@material-ui/core'
import { Carousel, Rate } from 'antd'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Trangchu/Footer/Footer'
import "./DetailHotel.css"
import img1 from "../../images/1.png"
import img6 from "../../images/6.jpg"
import Tabss from './Tabs'
export default function DetailHotel() {
    const history = useHistory();
    const onClickLienHe = () => {
        history.push("/lienhe_khachsan");
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div id="detailHotel">
            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                        <li className="breadcrumb-item"><Link to="/hotels">Khách sạn</Link></li>
                        <li className="breadcrumb-item">Tên khách sạn</li>
                    </ol>
                </nav>
            </div>
            <div className="content container">
                <div className="content___title">
                    <div className="content___title---name">
                        <h3>Vinpearl Resort & Spa Đà Nẵng</h3>
                    </div>
                    <div className="content___title---star">
                        Đánh giá:<Rate className="pl-2 mr-3" disabled defaultValue={4} /> 4/5 trong Đánh giá
                </div>
                </div>
                <hr />
                <div className="content___box row">
                    <div className="col-md-8">
                        <div className="content___box---slide">
                            <Carousel autoplay >
                                <div className="w-100 h-100">
                                    <img src={img1} width="760px" height="400px" alt="" />
                                </div>
                                <div>
                                    <img src={img6} width="760px" height="400px" alt="" />
                                </div>
                                <div>
                                    <img src={img1} width="760px" height="400px" alt="" />
                                </div>
                                <div>
                                    <img src={img6} width="760px" height="400px" alt="" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pdBox">
                            <div className="content___box---infor">
                                <div className="content___box---infor---address">
                                    <td className="pr-5">Địa chỉ</td>
                                    <td>23 Trường Sa, Ngũ Hành Sơn, Đà Nẵng</td> 
                            </div>
                                <div className="content___box---infor---table">
                                    <table>
                                        <tr>
                                            <td className="pr-5">Đánh giá</td>
                                            <td><Rate disabled defaultValue={4} /></td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5">Giá từ</td>
                                            <td>7.084.000 vnđ</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="content___box---infor---btn">
                                    {/* <a href="">Liên hệ</a> */}
                                    <Button onClick={onClickLienHe} className="btn-dt pl-5 pr-5" variant="contained" color="primary">
                                        Liên hệ
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Tabss />
            </div>
            <Footer />
        </div>
    )
}
