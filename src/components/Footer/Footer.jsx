import React from 'react'
import s from './Footer.module.css';
import {profileAPI} from "../../api/api";

const Footer = () => {
    return (
        <footer className={s.footer}>
            {/*<div>*/}
            {/*    <input type="file" id="photo" style={{'marginBottom': '10px'}} /><br/>*/}
            {/*    <input value="Загрузить фото" className="addPhotoBtn" type="button" style={{'marginBottom': '10px'}} />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <textarea id="info" className="addMyInfoText" placeholder={`status/infa`} /><br/>*/}
            {/*    <input value="Загрузить статус" className="addMyStatusBtn" type="button"/>*/}
            {/*    <input value="Загрузить инфу" className="addMyInfoBtn" type="button"/>*/}
            {/*</div>*/}
        </footer>
    )
};

// window.onload = function() {
//
//     var addPhotoBtn = document.querySelector('.addPhotoBtn');
//     addPhotoBtn.addEventListener("click", uloadPhoto);
//     function uloadPhoto () {
//         var formData = new FormData();
//         var imagefile = document.querySelector('#photo');
//         formData.append("image", imagefile.files[0]);
//
//         profileAPI.uploadPhoto(formData).then(res => console.log(res));
//     }
//
//     var addMyStatusBtn = document.querySelector('.addMyStatusBtn');
//     addMyStatusBtn.addEventListener("click", addMyStatus);
//
//     function addMyStatus() {
//
//         var addMyInfoText = document.querySelector('.addMyInfoText').value;
//
//         profileAPI.updateStatus(addMyInfoText).then(res => console.log(res));
//     }
//
//     var addMyInfoBtn = document.querySelector('.addMyInfoBtn');
//     addMyInfoBtn.addEventListener("click", addMyInfo);
//
//     function addMyInfo() {
//
//         var addMyInfoTextUgly = document.querySelector('.addMyInfoText').value;
//         var addMyInfoTextPretty = JSON.parse(addMyInfoTextUgly);
//
//         profileAPI.addInfo(addMyInfoTextPretty).then(res => console.log(res.data));
//     }
//
// };

export default Footer;