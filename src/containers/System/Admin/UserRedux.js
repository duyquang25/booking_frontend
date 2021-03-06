import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImgURL: "",
      isOpen: false,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    // try {
    //   let res = await getAllCodeService("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.roleRedux,
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
  }

  handleOnChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objectUrl,
      });
    }
  };

  openPreviewImage = () => {
    if (!this.state.previewImgURL) return;

    this.setState({
      isOpen: true,
    });
  };

  render() {
    console.log(this.state.genderArr);

    let gender = this.state.genderArr;
    let roles = this.state.roleArr;
    let language = this.props.language;
    let positions = this.state.positionArr;
    let isGetGenders = this.props.isLoadingGender;
    return (
      <React.Fragment>
        <div className="user-redux-container">
          <div className="title">User Redux Booking App</div>
          <div className="user-redux-body">
            <div className="container">
              <div className="row">
                <div className="col-12 my-3">
                  <FormattedMessage id="manage-user.add" />
                </div>
                <div className="col-12 my-3">
                  {isGetGenders === true ? "Loading genders" : ""}
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.email" />{" "}
                  </label>
                  <input className="form-control" type="email" placeholder="" />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.password" />{" "}
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder=""
                  />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.first-name" />
                  </label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.last-name" />
                  </label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.phone-number" />
                  </label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-9">
                  <label>
                    <FormattedMessage id="manage-user.address" />
                  </label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select className="form-control">
                    {gender &&
                      gender.length > 0 &&
                      gender.map((item, i) => {
                        return (
                          <option key={i}>
                            {language === LANGUAGES.VI
                              ? item.valueVI
                              : item.valueEN}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.position" />
                  </label>
                  <select className="form-control">
                    {positions &&
                      positions.length > 0 &&
                      positions.map((item, i) => {
                        return (
                          <option key={i}>
                            {language === LANGUAGES.VI
                              ? item.valueVI
                              : item.valueEN}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.role" />
                  </label>
                  <select className="form-control">
                    {roles &&
                      roles.length > 0 &&
                      roles.map((item, i) => {
                        return (
                          <option key={i}>
                            {language === LANGUAGES.VI
                              ? item.valueVI
                              : item.valueEN}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <div className="preview-img-container">
                    <input
                      type="file"
                      id="previewImg"
                      hidden
                      onChange={(event) => this.handleOnChangeImage(event)}
                    />
                    <label className="label-upload" htmlFor="previewImg">
                      T???i ???nh <i className="fa fa-upload"></i>
                    </label>
                    <div
                      className="preview-image"
                      style={{
                        backgroundImage: `url(${this.state.previewImgURL})`,
                      }}
                      onClick={() => this.openPreviewImage()}
                    ></div>
                  </div>
                </div>
                {this.state.isOpen === true && (
                  <Lightbox
                    mainSrc={this.state.previewImgURL}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                  />
                )}
                <div className="col-12 text-center mt-3">
                  <button className="btn btn-primary">
                    <FormattedMessage id="manage-user.save" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.postitions,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
