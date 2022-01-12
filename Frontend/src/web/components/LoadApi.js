import React from 'react'
import { quocgiaData } from "../container/Admin/Quocgia/QuocgiaSlice";
import { tintucData } from "../container/Admin/Tintuc/TintucSlice";
import { loaitourData } from "../container/Admin/Loaitour/LoaitourSlice";
import { diadiemData } from "../container/Admin/DiaDiem/DiadiemSlice";
import { mangxahoiData } from "../container/Admin/Mangxahoi/MangxahoiSlice";
import { binhluanData } from "../container/Admin/Binhluan/BinhluanSlice";
import { userData } from "../container/Admin/Taikhoan/TaikhoanSlice";
import { tagData } from "../container/Admin/Tag/tagSlice";
import { anhData } from "../container/Admin/Anh/AnhSlice";
import { dichvuData } from "../container/Admin/Dichvu/DichvuSlice";
import { hoadonData } from "../container/Admin/Hoadon/HoadonSlice";
import { roleData } from "../container/Admin/Role/RoleSlice";
import { lienheData } from "../container/Admin/Lienhe/LienheSlice";
import { ngaydiData } from "../container/Admin/Ngaydi/NgaydiSlice";
import { tourData } from "../container/Admin/Tour/TourSlice";
import { camnangdulichData } from "../container/Admin/Camnangdulich/CamnangdulichSlice";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

export default function LoadApi() {
    const dispatch = useDispatch();
    const actionquocgia = async () => { await dispatch(quocgiaData()) }
    const actiontintuc = async () => { await dispatch(tintucData()) }
    const actionloaitour = async () => { await dispatch(loaitourData()) }
    const actionuser = async () => { await dispatch(userData()) }
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
    useEffect(() => {
        actionquocgia();
        actiontintuc();
        actionloaitour();
        actionuser();
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
    }, [])

}
