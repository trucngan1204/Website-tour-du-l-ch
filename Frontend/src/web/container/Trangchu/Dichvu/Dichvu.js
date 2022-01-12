import React from "react";
import { useSelector } from "react-redux";
import "./Dichvu.css";
import "../../../../fixed.css"
function Dichvu(props) {
  const dichvus = useSelector(state => state.dichvus.dichvu.data);
  var dichvu = []
  if (dichvus) {
    for (let i = 0; i < dichvus.length; i++) {
      if (dichvus[i].status === 1 && dichvus[i].loadhome === 1) {
        dichvu.push(dichvus[i])
      }
    }
  }
  return (
    <div id="dichvu">
      <div className="fixed-background">
        <div className="dark">
          <div className="mb-5 tour" >
            <div className="heading text-center pt-5">
              <span>Dịch vụ</span>
              <hr  width="50%" align="center" />
            </div>
            <div className="container">
              <div className="row justify-content-center pb-5 text-center">
                {!dichvus ? '' :
                  dichvu.map(ok => (
                    <div className="col-md-4" key={ok.id}>
                      <div className="icon">
                        <span className={ok.icon}></span>
                      </div>
                      <div className="content-dv">
                        <strong>{ok.name}</strong>
                        <p>
                          {ok.mota}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="fixed-wrap">
              <div className="fixed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

Dichvu.propTypes = {

}

export default Dichvu