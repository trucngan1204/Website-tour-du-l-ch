import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "../container/Trangchu/Banner/Banner";
import Camnangdulich from "../container/Trangchu/Camnangdulich/Camnangdulich";
import Tourtrongnuoc from "../container/Trangchu/Tourtrongnuoc/Tourtrongnuoc";
import Tournuocngoai from "../container/Trangchu/Tournuocngoai/Tournuocngoai";
import Tintuc from "../container/Trangchu/Tintuc/Tintuc";
import Ykienkhachhang from "../container/Trangchu/Ykienkhachhang/Ykienkhachhang";
import Dichvu from "../container/Trangchu/Dichvu/Dichvu";
import Footer from "../container/Trangchu/Footer/Footer";
import CreateTour from "../container/Trangchu/Taotour/Taotour";
export class Trangchu extends Component {

  render() {
    return (
      <div>
        <Banner />
        <Camnangdulich />
        <CreateTour />
        <Tourtrongnuoc />
        <Tournuocngoai />
        <Dichvu />
        <Tintuc />
        <Ykienkhachhang />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Trangchu);
