import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';

import userDefaultMale from '../../assets/images/userDefaultMale.png';

class UsersAPICOmponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    };

    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div className={s.usersContainer}>
            <div className={s.pagination}>
                {pages.map(p =>{
                    return <span
                        className={this.props.currentPage === p && s.activePage}
                        onClick={ (e) => { this.onPageChanged(p) } }
                        >{p}</span>
                })}
            </div>
            {
                this.props.users.map(u =>
                    <div className={s.user} key={u.id}>
                        <div className={s.userInfo}>
                            <span className={s.name}>{u.name}</span>
                            <div className={s.avaWrap}>
                                <img src={ u.photos.small != null ?  u.photos.small  : userDefaultMale } alt={u.name} />
                            </div>
                            { u.followed
                                ? <button onClick={ () => { this.props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick={ () => { this.props.follow(u.id) } }>Follow</button>
                            }
                        </div>
                        <div className={s.status}>{u.status}</div>
                        {/*<div className={s.location}>*/}
                        {/*    <span className={s.city}>{u.location.city},</span>*/}
                        {/*    <span className={s.country}>{u.location.country}</span>*/}
                        {/*</div>*/}
                    </div>
                )
            }
        </div>
    }
}

export default UsersAPICOmponent;