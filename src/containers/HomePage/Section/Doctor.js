import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick";
class Doctor extends Component {

    render() {
       
        return (
            <div className="section-share section-doctor">
            <div className="section-container">
                 <div className="section-header">
                     <span className="title-section">
                         Bác sĩ nổi bật
                     </span>
                     <button className="btn-section">
                         Tìm kiếm
                     </button> 
                 </div>
                 <div className="section-body">
                 <Slider {...this.props.settings}>
                    <div className="doctor-custom">
                         <div className="bg-image" />
                         <div className="doctor-info">Tiến sĩ, Bác sĩ Quang</div>
                         <div className="">Sức khỏe</div>
                    </div>
                    <div className="doctor-custom">
                         <div className="bg-image" />
                         <div className="doctor-info">Tiến sĩ, Bác sĩ Quang</div>
                         <div className="">Sức khỏe</div>
                    </div>
                    <div className="doctor-custom">
                         <div className="bg-image" />
                         <div className="doctor-info">Tiến sĩ, Bác sĩ Quang</div>
                         <div className="">Sức khỏe</div>
                    </div>
                    <div className="doctor-custom">
                         <div className="bg-image" />
                         <div className="doctor-info">Tiến sĩ, Bác sĩ Quang</div>
                         <div className="">Sức khỏe</div>
                    </div>
                    <div className="doctor-custom">
                         <div className="bg-image" />
                         <div className="doctor-info">Tiến sĩ, Bác sĩ Quang</div>
                         <div className="">Sức khỏe</div>
                    </div>
                    <div className="doctor-custom">
                         <div className="bg-image" />
                         <div className="doctor-info">Tiến sĩ, Bác sĩ Quang</div>
                         <div className="">Sức khỏe</div>
                    </div>
                     
                     
                 </Slider>

                 </div>
            </div>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
