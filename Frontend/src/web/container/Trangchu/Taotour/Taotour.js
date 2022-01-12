import React from 'react'
import anh from "../../../images/taotour.jpg"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import "./Taotour.css"

function CreateTour(props) {
    return (
        <div >
            <div className="mb-5 tour" >
                <div className="heading text-center pt-5">
                    <span>My tour</span>
                    <hr  width="40%" align="center" />
                    <p className="mb-4">
                       Hãy tạo cho mình những chuyến đi thật đáng nhớ và đầy kỉ niệm !
                    </p>
                </div>
                <div className="btn-booking">
                    <Link to ="/list-tour"><Button className=" pl-5 pr-5" variant="contained" color="primary"className="booking">BOOKING&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-right"></i>
                    </Button>
                    </Link>
                </div>               
                <div className="container">
                    <Link to="/create-tour"><img src={anh} className="w-100" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

CreateTour.propTypes = {

}

export default CreateTour

