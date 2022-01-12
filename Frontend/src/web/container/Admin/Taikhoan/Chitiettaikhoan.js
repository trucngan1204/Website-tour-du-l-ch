import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import "./Taikhoan.css"
function Chitiettaikhoan(props) {
    const { id } = useParams();
    const users = useSelector(state => state.taikhoan.user.data);
    const user = []
    if (users) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === +id) {
                user.push(users[i])
            }
        }
    }
    console.log(user);

    return (
        <div id="admin">
            <div className="heading">
                <h4>Chi tiết tài khoản</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="ct">
                    {!user ? 's' :
                        user.map(ok => (
                            <div key={ok.id}>
                                <div className="text-center"><img src={ok.avatar ? ok.avatar : 'https://img.pikbest.com/png-images/qianku/black-default-avatar_2405038.png!bw700='} className="avatar-ct" alt="" /></div>
                                <p>Tên người dùng:&emsp; <b><i>{ok.name}</i></b></p>
                                <p>Email:&emsp; <b><i>{ok.email}</i></b></p>
                                <p>Số điện thoại:&emsp; <b><i></i>{ok.sdt}</b></p>
                                <p>Giới tính:&emsp; <b><i>{ok.gioitinh === 1 ? "Nam" : "Nữ"}</i></b></p>
                                <p>Ngày sinh:&emsp; <b><i>{ok.ngaysinh}</i></b></p>
                                <p>Địa chỉ:&emsp; <b><i>{ok.diachi}</i></b></p>
                                <p>Website:&emsp; <b><i>{ok.UserRoles[0].website}</i></b></p>
                                <p>Châm ngôn:</p>
                                <div className="container">
                                    <p>{ok.UserRoles[0].chamngon}</p>
                                </div>
                                <p>Chức vụ:&emsp; <b><i>Load ...</i></b></p>
                                <p>Bộ phận:&emsp; <b><i>Load ...</i></b></p>
                                <p>Github:&emsp; <b><i>{ok.UserRoles[0].github}</i></b></p>
                                <p>Facebook:&emsp; <b><i>{ok.UserRoles[0].facebook}</i></b></p>
                                <p>Kỹ năng:</p>
                                <div className="container">
                                    <p>{ok.UserRoles[0].kynang}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

Chitiettaikhoan.propTypes = {

}

export default Chitiettaikhoan