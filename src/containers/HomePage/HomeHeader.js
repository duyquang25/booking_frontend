import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {
       
        return (
            
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i className="fas fa-bars" ></i>
                        <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <div className="">
                                <b>Chuyên Khoa</b>
                            </div>
                            <div className="sub-title">
                                Tìm bác sĩ theo chuyên khoa
                            </div>
                        </div>
                        <div className="child-content">
                            <div className="">
                                <b>Cơ Sở Y Tế</b>
                            </div>
                            <div className="sub-title">
                                Chọn bệnh viện phòng khám
                            </div>
                        </div>
                        <div className="child-content">
                            <div className="">
                                <b>Bác Sĩ</b>
                            </div>
                            Chọn bác sĩ giỏi
                            <div className="sub-title">
                                
                            </div>
                        </div>
                        <div className="child-content">
                            <div className="">
                                <b>Gói Khám</b>
                            </div>
                            <div className="sub-title">
                                Khám sức khỏe tổng quát
                            </div>
                        </div>
                        
                    </div>

                    <div className="right-content">
                        <div className="support">
                            <i className="fas fa-question-circle">Hỗ trợ</i>
                        </div>
                        <div className="flag">
                            VN
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
