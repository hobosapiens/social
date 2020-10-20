import preloader from '../../../assets/images/preloaderCampfire.gif';
import s from './Preloader.module.css';
import React from 'react';

let Preloader = (props) => {
    return <div className={s.preloaderWrapper}>
        <img src={preloader} className={s.preloader}/>
    </div>
};

export default Preloader