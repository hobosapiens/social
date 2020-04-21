import React from 'react'
import s from './Footer.module.css';
import * as axios from 'axios';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div>
                <input type="file" id="photo" style={{'marginBottom': '10px'}} /><br/>
                <input value="Загрузить фото" className="addPhotoBtn" type="button"/>
            </div>
            <div>
                <textarea id="info" className="addMyInfoText" placeholder={`status/infa`} /><br/>
                <input value="Загрузить статус" className="addMyStatusBtn" type="button"/>
                <input value="Загрузить инфу" className="addMyInfoBtn" type="button"/>
            </div>
        </footer>
    )
};

window.onload = function() {

    var addPhotoBtn = document.querySelector('.addPhotoBtn');
    addPhotoBtn.addEventListener("click", uloadPhoto);
    function uloadPhoto () {
        var formData = new FormData();
        var imagefile = document.querySelector('#photo');
        formData.append("image", imagefile.files[0]);
        axios.post('https://social-network.samuraijs.com/api/1.0/profile/photo', formData, {
            withCredentials: true,
            headers: {
                "API-KEY": '1170b118-702c-4511-af42-156a5dd648b2',
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => console.log(res.data));
    }

    var addMyStatusBtn = document.querySelector('.addMyStatusBtn');
    addMyStatusBtn.addEventListener("click", addMyStatus);

    function addMyStatus() {

        var addMyInfoText = document.querySelector('.addMyInfoText').value;

        axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', {
                "status": addMyInfoText
            },
            {
                withCredentials: true,
                headers: {
                    "API-KEY": '1170b118-702c-4511-af42-156a5dd648b2'
                }
            }).then(res => console.log(res.data));
    }

    var addMyInfoBtn = document.querySelector('.addMyInfoBtn');
    addMyInfoBtn.addEventListener("click", addMyInfo);

    function addMyInfo() {

        var addMyInfoTextUgly = document.querySelector('.addMyInfoText').value;
        var addMyInfoTextPretty = JSON.parse(addMyInfoTextUgly);

        axios.put('https://social-network.samuraijs.com/api/1.0/profile/', addMyInfoTextPretty,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": '1170b118-702c-4511-af42-156a5dd648b2'
                }
            }).then(res => console.log(res.data));
    }

};

export default Footer;