import preloader from "../../../assets/images/preloader.svg";
import s from "../../Users/Users.module.css";
import React from "react";

let Preloader = (props) => {
    return <div className={s.preloaderWrapper}>
        <img src={preloader} className={s.preloader}/>
    </div>
};

export default Preloader