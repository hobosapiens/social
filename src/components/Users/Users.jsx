import React from "react";
import s from './Users.module.css';

let Users = (props) => {
    if( props.users.length === 0 ) {
        props.setUsers([
            {id: 1, followed: false ,fullName: 'April', avaUrl: 'https://i1.wp.com/www.teenagemutantninjaturtles.com/wp-content/uploads/2013/02/April-ONeil-Original-Cartoon-19871.jpg?fit=307%2C420&ssl=1',
                status: 'Wanna cup of tea', location: {city: 'Saint-Petersburg', country: 'Russia'}},
            {id: 2, followed: true ,fullName: 'Rita', avaUrl: 'https://pbs.twimg.com/profile_images/529744035200507904/24rAdFsV_400x400.jpeg',
                status: 'See you in the night', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 3, followed: false ,fullName: 'Kuzya', avaUrl: 'https://i.pinimg.com/originals/30/de/71/30de714362ef18a475179d32162861fd.jpg',
                status: 'R.I.P 2pack', location: {city: 'Kiev', country: 'Ukraine'}}
        ]);
    }

    return (
        props.users.map(u =>
            <div className={s.user} key={u.id}>
                <div className={s.userInfo}>
                    <span className={s.name}>{u.fullName}</span>
                    <div className={s.avaWrap}>
                        <img src={u.avaUrl} alt={u.fullName}/>
                    </div>
                    { u.followed
                        ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                        : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                    }
                </div>
                <div className={s.status}>{u.status}</div>
                <div className={s.location}>
                    <span className={s.city}>{u.location.city},</span>
                    <span className={s.country}>{u.location.country}</span>
                </div>
            </div>
            )
    )
};

export default Users;