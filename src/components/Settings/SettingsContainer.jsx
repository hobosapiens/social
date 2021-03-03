import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";

class SettingsContainer extends React.Component {
    // componentDidMount() {
    //
    //     let addPhotoBtn = document.querySelector('.addPhotoBtn');
    //     addPhotoBtn.addEventListener("click", uloadPhoto);
    //
    //     function uloadPhoto() {
    //         let formData = new FormData();
    //         let imagefile = document.querySelector('#photo');
    //         formData.append("image", imagefile.files[0]);
    //
    //         profileAPI.uploadPhoto(formData).then(res => console.log(res));
    //     }
    //
    //     let addMyStatusBtn = document.querySelector('.addMyStatusBtn');
    //     addMyStatusBtn.addEventListener("click", addMyStatus);
    //
    //     function addMyStatus() {
    //
    //         let addMyInfoText = document.querySelector('.addMyInfoText').value;
    //
    //         profileAPI.updateStatus(addMyInfoText).then(res => console.log(res));
    //     }
    //
    //     let addMyInfoBtn = document.querySelector('.addMyInfoBtn');
    //     addMyInfoBtn.addEventListener("click", addMyInfo);
    //
    //     function addMyInfo() {
    //
    //         let addMyInfoTextUgly = document.querySelector('.addMyInfoText').value;
    //         let addMyInfoTextPretty = JSON.parse(addMyInfoTextUgly);
    //
    //         profileAPI.addInfo(addMyInfoTextPretty).then(res => console.log(res.data));
    //     }
    //
    // }

    render() {
        return (
            <Settings/>
        )
    }
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(SettingsContainer);