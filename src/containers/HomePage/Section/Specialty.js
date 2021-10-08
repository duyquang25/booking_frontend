import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss';
// import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";

class Specialty extends Component {


    render() {

        
       
        return (
           <div className="section-share section-specialty">
               <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            Chuyen Khoa
                        </span>
                        <button className="btn-section">
                            Xem them
                        </button> 
                    </div>
                    <div className="section-body">
                    <Slider {...this.props.settings}>
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
