import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

    render() {
       
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe 
                            width="100%" 
                            height="400" 
                            src="https://www.youtube.com/embed/FyDQljKtWnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>      
                    </div>
                    <div className="content-right">
                        <p>Có ý kiến cho rằng, các thông tin về bác sĩ và cơ sở y tế đầy rẫy trên Internet. Và người bệnh cũng không gặp khó khăn gì trong việc tìm hiểu thông tin và đặt lịch khám với bác sĩ, cơ sở y tế.

                            Vậy tại sao người dùng lại cần đặt lịch khám thông qua hệ thống đặt khám như BookingCare?
                        </p>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
