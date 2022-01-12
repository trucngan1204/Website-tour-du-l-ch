import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Trangchu/Footer/Footer'
import "./Hotel.css"
import img2 from "../../images/2.jpg"
import img4 from "../../images/3.jpg"
import img5 from "../../images/4.jpg"
import img10 from "../../images/5.jpg"
import img11 from "../../images/7.jpg"
import img12 from "../../images/8.jpg"
export default function Hotel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div id="hotel">
            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                        <li className="breadcrumb-item">Khách sạn</li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="heading text-center">
                    <span>Khách sạn</span>
                </div>
                <div className="content row">
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>vinpeart resort & spa đà nẵng</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">7.084.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img11} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span> Mr.Happy Homestay Đà Lạt</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">550.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><a href = "https://www.agoda.com/da-lat-mr-happy-homestay_2/hotel/dalat-vn.html?cid=1844104">Book ngay</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img10} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>Hạ Long Central</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">450.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><a href = "http://centralluxuryhalonghotel.com/">Book ngay</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img12} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>The Myst Dong Khoi</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">8.000.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><a href = "https://www.themystdongkhoihotel.com/vn">Book ngay</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>LUCKY HOMES</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">500.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><a href = "http://www.booking.com/Share-Y2NLsS">Book ngay</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img5} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>Emeralda Resort Ninh Binh</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">1.622.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><a href = "https://www.booking.com/hotel/vn/emeralda-ninh-binh-resort-and-spa.vi.html?aid=1250365;label=huno.1-xrg%3ACjwKCAjwtfqKBhBoEiwAZuesiH4QyUkYjekIBtueBOQHaMa4i8S_vO3IzftVRdkQq9sRMkgzCCFnQBoCD2IQAvD_BwE;sid=ae4eed28e7b8386b0076bcb28cba15e9;all_sr_blocks=35631801_223913270_0_1_0;checkin=2021-10-14;checkout=2021-10-15;dest_id=-3724181;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=0;highlighted_blocks=35631801_223913270_0_1_0;hpos=0;matching_block_id=35631801_223913270_0_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=35631801_223913270_0_1_0__170893800;srepoch=1633616029;srpvid=9a2f640df7190149;type=total;ucfs=1;sig=v14dieTz-T&">Book ngay</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
