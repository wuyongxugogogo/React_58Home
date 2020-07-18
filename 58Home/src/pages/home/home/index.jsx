import React,{lazy,Suspense, useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import config from '../../../assets/js/conf/config';
import Css from '../../../assets/css/home/home/index.module.css';
const IndexComponent = lazy(()=>import('../index/index'));
const NewsIndex = lazy(()=>import('../news/index'));
const ServeIndex = lazy(()=>import('../serve/index'));
const UserIndex = lazy(()=>import('../../user/index/index'));

function HomeComponent(props) {

    const [bHomeStyle,setBHomeStyle] = useState(true);
    const [bNewsStyle,setBNewsStyle] = useState(false);
    const [bServeStyle,setBServeStyle] = useState(false);
    const [bMyStyle,setBMyStyle] = useState(false);

    useEffect(()=>{
        // console.log(props.location.pathname);
        handleNavStyle();
        // console.log(props);
        // console.log(bHomeStyle,bNewsStyle,bServeStyle,bMyStyle);
    },[props])

    const goPage = (url) => () => {
        // console.log(props);
        props.history.push(config.path+url);
    }
    const handleNavStyle = () => {
        // console.log(props.location.pathname);
        switch(props.location.pathname) {
            case config.path + 'home/index':
                setBHomeStyle(true)
                setBNewsStyle(false)
                setBServeStyle(false)
                setBMyStyle(false)
                break;
            case config.path + 'home/news':
                setBHomeStyle(false)
                setBNewsStyle(true)
                setBServeStyle(false)
                setBMyStyle(false)
                break;
            case config.path + 'home/serve':
                setBHomeStyle(false)
                setBNewsStyle(false)
                setBServeStyle(true)
                setBMyStyle(false)
                break;
            case config.path + 'home/user':
                setBHomeStyle(false)
                setBNewsStyle(false)
                setBServeStyle(false)
                setBMyStyle(true)
                break;
            default:
                break;
        }
    }
        return (
            <div>
                <React.Fragment>
                    <Suspense fallback={<React.Fragment />} >
                        <Switch>
                        <Route path={config.path+"home/index"} component={IndexComponent} ></Route>
                        <Route path={config.path+"home/serve"} component={ServeIndex} ></Route>
                        <Route path={config.path+"home/news"} component={NewsIndex} ></Route>
                        <Route path={config.path+"home/user"} component={UserIndex} ></Route>
                        </Switch>
                    </Suspense>
                </React.Fragment>
                <div className={Css['bottom-nav']}>
                    <ul onClick={goPage('home/index')}>
                        <li className={bHomeStyle ? Css['home']+" "+Css['active'] : Css['home']}></li>
                        <li className={bHomeStyle ? Css['text']+" "+Css['active'] : Css['text']}>首页</li>
                    </ul>
                    <ul onClick={goPage('home/serve')}>
                        <li className={bServeStyle ? Css['serve']+" "+Css['active'] : Css['serve']}></li>
                        <li className={bServeStyle ? Css['text']+" "+Css['active'] : Css['text']}>全部服务</li>
                    </ul>
                    <ul onClick={goPage('home/news')}>
                        <li className={bNewsStyle ? Css['news']+" "+Css['active'] : Css['news']}></li>
                        <li className={bNewsStyle ? Css['text']+" "+Css['active'] : Css['text']}>消息</li>
                    </ul>
                    <ul onClick={goPage('home/user')}>
                        <li className={bMyStyle ? Css['user']+" "+Css['active'] : Css['user']}></li>
                        <li className={bMyStyle ? Css['text']+" "+Css['active'] : Css['text']}>我的</li>
                    </ul>
                </div>
            </div>
        )
}

export default HomeComponent;