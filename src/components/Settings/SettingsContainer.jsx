import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import {profileAPI} from "../../api/api";

class SettingsContainer extends React.Component {
    componentDidMount() {

        var addPhotoBtn = document.querySelector('.addPhotoBtn');
        addPhotoBtn.addEventListener("click", uloadPhoto);

        function uloadPhoto() {
            var formData = new FormData();
            var imagefile = document.querySelector('#photo');
            formData.append("image", imagefile.files[0]);

            profileAPI.uploadPhoto(formData).then(res => console.log(res));
        }

        var addMyStatusBtn = document.querySelector('.addMyStatusBtn');
        addMyStatusBtn.addEventListener("click", addMyStatus);

        function addMyStatus() {

            var addMyInfoText = document.querySelector('.addMyInfoText').value;

            profileAPI.updateStatus(addMyInfoText).then(res => console.log(res));
        }

        var addMyInfoBtn = document.querySelector('.addMyInfoBtn');
        addMyInfoBtn.addEventListener("click", addMyInfo);

        function addMyInfo() {

            var addMyInfoTextUgly = document.querySelector('.addMyInfoText').value;
            var addMyInfoTextPretty = JSON.parse(addMyInfoTextUgly);

            profileAPI.addInfo(addMyInfoTextPretty).then(res => console.log(res.data));
        }

    }

    render() {
        return (
            <Settings />
        )
    }
}

let mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(SettingsContainer);