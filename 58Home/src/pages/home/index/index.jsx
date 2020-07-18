import React from 'react';
import Css from '../../../assets/css/home/index/index.module.css';

export default function Index(){
    return(
        <div className={Css['page']}>
            <div className={Css['search-header']}>
                <div className={Css['search-wrap']}>
                    <div className={Css['area']}>南昌</div>
                    <div className={Css['search-text']}>檫玻璃</div>
                </div>
                <div className={Css['menu-wrap']}>
                    <div className={Css['menu-icon']}></div>
                    <ul className={Css['menu']}>
                        <li>帮助中心</li>
                        <li>扫一扫</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
