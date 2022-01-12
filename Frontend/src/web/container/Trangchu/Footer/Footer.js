import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer(props) {
  const footers = useSelector(state => state.lienhes.lienhe.data);
  const footer = [];
  if (footers) {
    for (let i = 0; i < footers.length; i++) {
      if (footers[i].status === 1) {
        footer.push(footers[i])
      }
    }
  }
  const mxhs = useSelector(state => state.mangxahois.mangxahoi.data);
  const mxh = [];
  if (footers && mxhs) {
    for (let i = 0; i < mxhs.length; i++) {
      if (mxhs[i].status === 1) {
        mxh.push(mxhs[i])
      }
    }
  }
  const chuyentrang = (url) => {
    window.location.href = url;
  }
  return (
    <div id="footer">
      <footer className="page-footer font-small pt-4 container">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            {footer.map(ok => (
              <div className="col-md-6 mt-md-0 mt-3" key={ok.id}>
                <ul className="collection with-header">
                  <li className="collection-header">
                    <h4 className = "text-uppercase text-danger">Main Office</h4>
                  </li>
                  <li className="collection-item">MemoriesTravel Booking</li>
                  <li className="collection-item"><i class="fas fa-map-marker-alt"></i> 371 Nguyen Kiem, Go Vap District, Ho Chi Minh City, VietNam</li>
                  <li className="collection-item"><i class="fas fa-phone"></i> +84 917 803 105</li>
                  <li className="collection-item"><i class="fas fa-envelope-square"></i> memoriestravel@gmail.com</li>
                </ul>
              </div>
            ))}
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-danger">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Trang chủ
               </Link>
                </li>
                <li>
                  <Link to="/listtintuc">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Tin tức
               </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Dịch vụ
               </Link>
                </li>
                <li>
                  <Link to="/listtour">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Khuyến mãi
               </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mxh ">
              <h5 className="text-uppercase text-danger ">Mạng xã hội</h5>
              {mxh.map(ok => (
                <div key={ok.id} onClick={() => chuyentrang(ok.link)}>
                  <div className="icon_footer" style={{
                    background: `${ok.color}`,
                    cursor: "pointer"
                  }}>
                    <i className={`${ok.icon}`} ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <Link to="https://mdbootstrap.com/"> Công ty thương mại MemoriesTravel.</Link>
        </div>
      </footer>
    </div >

  )
}

Footer.propTypes = {

}

export default Footer
