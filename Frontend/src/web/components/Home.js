import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Login from "../container/Dangnhap/Login";
import Menu from "../container/Trangchu/Menu/Menu";
import Menu2 from "../container/Trangchu/Menu/Menu2";
import Trangchu from './Trangchu'
import Admin from './Admin'
import Dangky from '../container/Dangky/Dangky'
import Tour from "../container/ChitietTour/Tour/Tour";
import Tintucdetail from "../container/Tintuc/Detailtintuc/Detail";
import Listtour from "../container/ListTour/Listtour";
import Dattour from "../container/ChitietTour/Dattour/Dattour";
import Listtintuc from "../container/Tintuc/Listtintuc/Listtintuc";
import Stripe from "../teststripe/Stripe";
import Error from "./Error";
import { useDispatch } from "react-redux";
// import { getMe } from "../../app/userSlice";
// import { unwrapResult } from "@reduxjs/toolkit";
import { quocgiaData } from "../container/Admin/Quocgia/QuocgiaSlice";
import { tintucData } from "../container/Admin/Tintuc/TintucSlice";
import { loaitourData } from "../container/Admin/Loaitour/LoaitourSlice";
import { diadiemData } from "../container/Admin/Diadiem/DiadiemSlice";
import { mangxahoiData } from "../container/Admin/Mangxahoi/MangxahoiSlice";
import { binhluanData } from "../container/Admin/Binhluan/BinhluanSlice";
// import { userData } from "../container/admin/taikhoan/taikhoanSlice";
import { tagData } from "../container/Admin/Tag/TagSlice";
import { anhData } from "../container/Admin/Anh/AnhSlice";
import { dichvuData } from "../container/Admin/Dichvu/DichvuSlice";
import { hoadonData } from "../container/Admin/Hoadon/HoadonSlice";
import { roleData } from "../container/Admin/Role/RoleSlice";
import { lienheData } from "../container/Admin/Lienhe/LienheSlice";
import { ngaydiData } from "../container/Admin/Ngaydi/NgaydiSlice";
import { tourData } from "../container/Admin/Tour/TourSlice";
import { camnangdulichData } from "../container/Admin/Camnangdulich/CamnangdulichSlice";
import { inforData } from "../container/Dangnhap/InforSlice";
import { chiphiData } from "../container/Admin/Chiphi/ChiphiSlice";
import CreateTour from "../container/TaoTour/CreateTour";
import { thongbaoData } from "../container/Admin/Kiemduyet/ThongbaoSlice";
import Thongtin from "../container/Trangchu/Thongtin/Thongtin";
import Hotel from "../container/Khachsan/Hotel";
import DetailHotel from "../container/Khachsan/DetailHotel";
import Contact from "../container/Khachsan/Contact";

export default function NestingExample() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchTintucList = async () => {
  //     try {
  //       const res = await tintucApi.getAll();
  //       console.log(res);
  //     } catch (error) {
  //       console.log("loix" + error);
  //     }
  //   }
  //   fetchTintucList();
  // }, []);
  const actionquocgia = async () => { await dispatch(quocgiaData()) }
  const actiontintuc = async () => { await dispatch(tintucData()) }
  const actionloaitour = async () => { await dispatch(loaitourData()) }

  const actiondiadiem = async () => { await dispatch(diadiemData()) }
  const actionmangxahoi = async () => { await dispatch(mangxahoiData()) }
  const actionbinhluan = async () => { await dispatch(binhluanData()) }
  const actiontag = async () => { await dispatch(tagData()) }
  const actionanh = async () => { await dispatch(anhData()) }
  const actiondichvu = async () => { await dispatch(dichvuData()) }
  const actionhoadon = async () => { await dispatch(hoadonData()) }
  const actionrole = async () => { await dispatch(roleData()) }
  const actionlienhe = async () => { await dispatch(lienheData()) }
  const actionngaydi = async () => { await dispatch(ngaydiData()) }
  const actiontour = async () => { await dispatch(tourData()) }
  const actioncamnang = async () => { await dispatch(camnangdulichData()) }
  const actioninfor = async () => { await dispatch(inforData()) }
  const actionchiphi = async () => { await dispatch(chiphiData()) }
  const actionthongbao = async () => { await dispatch(thongbaoData()) }
  useEffect(() => {

    // const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
    //   if (!user) {
    //     console.log("log out");
    //     return;
    //   }
    //   const token = await user.getIdToken();
    //   localStorage.setItem('token', token);
    //   const actionResult = await dispatch(getMe());
    //   const currentUser = unwrapResult(actionResult);

    actionquocgia();
    actiontintuc();
    actionloaitour();

    actiondiadiem();
    actionmangxahoi();
    actionbinhluan();
    actiontag();
    actionanh();
    actiondichvu();
    actionhoadon();
    actionrole();
    actionlienhe();
    actionngaydi();
    actiontour();
    actioncamnang();
    actioninfor();
    actionchiphi();
    actionthongbao();
    // }
    // );
    // return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dangnhap" component="" />
          <Route path="/dangky" component="" />
          <Route path="/admin" component="" />
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/">
            <Menu2 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Trangchu />
          </Route>
          <Route path="/admin">
            <Ladmin />
          </Route>
          <Route path="/thongtin/:id">
            <Thongtin />
          </Route>
          <Route path="/dangnhap">
            <Ldangnhap />
          </Route>
          <Route path="/dangky">
            <Dangky />
          </Route>
          <Route path="/listtintuc">
            <Listtintuc />
          </Route>
          <Route path="/tour/:id">
            <Tour />
          </Route>
          <Route path="/detail-new/:id">
            <Tintucdetail />
          </Route>
          <Route path="/list-tour/:id">
            <Listtour />
          </Route>
          <Route path="/list-tour">
            <Listtour />
          </Route>
          <Route path='/dat-tour'>
            <Dattour />
          </Route>
          <Route path='/create-tour'>
            <CreateTour />
          </Route>
          <Route path='/stripe'>
            <Stripe />
          </Route>
          <Route path='/hotels'>
            <Hotel />
          </Route>
          <Route path="/detailhotel/:id">
            <DetailHotel />
          </Route>
          <Route path="/lienhe_khachsan">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Ldangnhap() {
  let { url } = useRouteMatch();
  return (
    <Login url={url} />
  );
}
function Ladmin() {
  let { path, url } = useRouteMatch();
  if (localStorage.getItem("token")) {
    return <Admin path={path} url={url} />
  } else {
    return <Error />
  }
}