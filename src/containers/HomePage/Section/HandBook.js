import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick";
class HandBook extends Component {

    render() {
       
        return (
            <div className="section-share section-handbook">
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
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
                    </div>                  
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
                    </div>                  
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
                    </div>                  
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
                    </div>                  
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
                    </div>                  
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
                    </div>                  
                    <div className="handbook-custom">
                         <div className="bg-image" />
                         <div className="handbook-info">Tiến sĩ, Bác sĩ Quang</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
