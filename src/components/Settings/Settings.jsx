import React, {Component} from 'react'
import s from './Settings.module.css';

class Settings extends Component {
    render() {
        return (
            <div className={s.settings}>
                <img width='50px'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKpp8xv9ni8bEmsxOrLXJFVybJbdbnODaQ-Uop2llNEDx9DpY-'
                     alt=''/>
                <div>
                    <input type="file" id="photo" style={{'marginBottom': '10px'}}/><br/>
                    <input value="Загрузить фото" className="addPhotoBtn" type="button"
                           style={{'marginBottom': '10px'}}/>
                </div>
                <div>
                    <textarea id="info" className="addMyInfoText" placeholder={`status/infa`}/><br/>
                    <input value="Загрузить статус" className="addMyStatusBtn" type="button"/>
                    <input value="Загрузить инфу" className="addMyInfoBtn" type="button"/>
                </div>
            </div>
        )
    }
}

export default Settings