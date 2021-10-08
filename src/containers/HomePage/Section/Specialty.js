import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
// import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Specialty extends Component {


    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
       
        return (
           <div className="section-specialty">
               <div className="specialty-container">
                    <div className="specialty-header">
                        <span className="title-section">
                            Chuyen Khoa
                        </span>
                        <button className="btn-section">
                            Xem them
                        </button> 
                    </div>
                    <div className="specialty-body">
                    <Slider {...settings}>
                        <div className="specialty-custom">
                            <div className="bg-image" />
                            <div> Co xuong khop 1</div>
                        </div>
                        <div className="specialty-custom">
                            <div className="bg-image" />
                            <div> Co xuong khop 2</div>
                        </div>
                        <div className="specialty-custom">
                            <div className="bg-image" />
                            <div> Co xuong khop 3</div>
                        </div>
                        <div className="specialty-custom">
                            <div className="bg-image" />
                            <div> Co xuong khop 4</div>
                        </div>
                        <div className="specialty-custom">
                            <div className="bg-image" />
                            <div> Co xuong khop 5</div>
                        </div>
                        <div className="specialty-custom">
                            <div className="bg-image" />
                            <div> Co xuong khop 6</div>
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
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
