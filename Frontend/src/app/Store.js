import { configureStore } from '@reduxjs/toolkit';
import tintucReducer from "../web/container/Admin/Tintuc/TintucSlice"
import userReducer from './UserSlice';
import taikhoanReducer from '../web/container/Admin/Taikhoan/TaikhoanSlice'
import quocgiaReducer from "../web/container/Admin/Quocgia/QuocgiaSlice"
import loaitourReducer from "../web/container/Admin/Loaitour/LoaitourSlice"
import mangxahoiReducer from "../web/container/Admin/Mangxahoi/MangxahoiSlice"
import diadiemReducer from "../web/container/Admin/Diadiem/DiadiemSlice"
import tourReducer from "../web/container/Admin/Tour/TourSlice"
import binhluanReducer from "../web/container/Admin/Binhluan/BinhluanSlice"
import tagReducer from "../web/container/Admin/Tag/TagSlice"
import anhReducer from "../web/container/Admin/Anh/AnhSlice"
import dichvuReducer from "../web/container/Admin/Dichvu/DichvuSlice"
import hoadonReducer from "../web/container/Admin/Hoadon/HoadonSlice"
import tintuctagReducer from "../web/container/Admin/Tintuc/TintuctagSlice"
import roleReducer from "../web/container/Admin/Role/RoleSlice";
import lienheReducer from "../web/container/Admin/Lienhe/LienheSlice"
import khuyenmaiReducer from "../web/container/Admin/Khuyenmai/KhuyenmaiSlice"
import ngaydiReducer from "../web/container/Admin/Ngaydi/NgaydiSlice"
import camnangReducer from "../web/container/Admin/Camnangdulich/CamnangdulichSlice"
import userroleReducer from "../web/container/Admin/Header/UserroleSlice"
import inforReducer from "../web/container/Dangnhap/InforSlice"
import chitieuReducer from "../web/container/Admin/Doanhthu/ChitieuSlice"
import thanhtoanReducer from "../web/container/ChitietTour/Tour/ThanhtoanSlice"
import chiphiReducer from "../web/container/Admin/Chiphi/ChiphiSlice"
import hoadoncanhanReducer from "../web/container/Admin/Hoadoncanhan/HoadoncanhanSlice"
import thongbaoReducer from "../web/container/Admin/Kiemduyet/ThongbaoSlice"
const rootReducer = {
  tintucs: tintucReducer,
  user: userReducer,
  taikhoan: taikhoanReducer,
  quocgias: quocgiaReducer,
  loaitours: loaitourReducer,
  mangxahois: mangxahoiReducer,
  diadiems: diadiemReducer,
  tours: tourReducer,
  binhluans: binhluanReducer,
  tags: tagReducer,
  anhs: anhReducer,
  dichvus: dichvuReducer,
  hoadons: hoadonReducer,
  tintuctags: tintuctagReducer,
  roles: roleReducer,
  lienhes: lienheReducer,
  ngaydis: ngaydiReducer,
  camnangdulichs: camnangReducer,
  userroles: userroleReducer,
  infor: inforReducer,
  chitieu: chitieuReducer,
  khuyenmais: khuyenmaiReducer,
  thanhtoans: thanhtoanReducer,
  chiphis: chiphiReducer,
  hoadoncanhans: hoadoncanhanReducer,
  thongbao: thongbaoReducer
}

export default configureStore({
  reducer: rootReducer
});
