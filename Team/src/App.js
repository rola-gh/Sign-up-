import React from 'react';
import App_apple from './App_apple.png';
import Google_play from './Google_play.png';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            address:'',
            password:'',
            confirm:'',
        };
    }
    myChangeHandler = () => {

    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    < div className="Sign-in-container">
                        <div className="Container-child-Sign-up-thumbnail">
                            <svg id="Group_3296" data-name="Group 3296" xmlns="http://www.w3.org/2000/svg" width="188.629" height="160.511" viewBox="0 0 188.629 160.511">
                                <path id="Path_2836" data-name="Path 2836" d="M2918.939,157.234c-10.84,9.5-20.779,18.76-31.333,27.259-7.369,5.935-16.1,7.055-25.015,3.22-6.96-2.993-13.68-3.171-20.674.083a21.319,21.319,0,0,1-17.888.4c-15.8-7-28.43-18.1-39.985-31.944,9.638.4,15.561-5,21.634-10.133,5.965-5.038,11.691-10.413,18.007-14.968,8.082-5.83,13.472-5.371,21.293.6,6.755,5.158,7.4,5.147,13.87-.238,6.775-5.641,15.8-5.5,23.337.755,4.968,4.122,9.511,8.746,14.334,13.044C2904.388,152.319,2908.2,154.356,2918.939,157.234Zm-116.177,3.984-.022.815c5.549-.913,11.552-.784,16.552-2.96,10.116-4.4,19.54-4.559,29.4.365a9.412,9.412,0,0,0,7.552-.142c8.935-4.864,17.667-5.133,26.816-.753a29.139,29.139,0,0,0,17.57,2.548c-5.844-2.031-11.745-3.968-17.562-6.135-8.79-3.272-17.329-4.784-25.622,1.5-3.692,2.8-7.82,2.185-11.428-.363-7.646-5.4-15.563-4.732-23.785-1.682C2815.791,156.8,2809.256,158.957,2802.762,161.218Z" transform="translate(-2730.31 -29.46)" fill="#fff"/>
                                <path id="Path_2837" data-name="Path 2837" d="M2767.269,142.756a93.266,93.266,0,0,0,36.076.762c11.866-2.2,22.421-7.048,30.581-16.257,7.92-8.937,11.873-19.667,12.93-31.341.465-5.14,2.641-9,5.889-13.115a102.556,102.556,0,0,1,7.79,54.5c-2.552,20.123-10.483,37.783-21.91,53.958h7.182c21.281-32.588,28.2-67.9,14.352-107.366a38.607,38.607,0,0,1,4.79,3.387c10.545,8.859,17.048,20.346,21.2,33.253,7.435,23.107,8.033,46.812,5.9,70.727h5.966c1.768-18.613,1.5-37.171-1.91-55.621-2.528-13.674-6.862-26.7-14.578-38.409a63.191,63.191,0,0,0-26.676-23.341c-2.491-1.145-3.589-.73-4.946,1.325-4.388,6.657-8.675,13.395-13.353,19.847a88.084,88.084,0,0,1-18.338,18.573,81.485,81.485,0,0,1-23.572,12.438,3.352,3.352,0,0,1-4.485-1.94c-.644-1.831.228-3.554,2.229-4.374.5-.205,1.022-.348,1.531-.528,17.553-6.205,30.578-18.012,40.941-33.107a2.781,2.781,0,0,0,.218-.78c-.534-.04-.935-.1-1.334-.093a70.356,70.356,0,0,0-33.465,8.483c-18.076,9.861-28.92,25.6-35.8,44.486C2763.578,140.678,2764.6,142.206,2767.269,142.756Z" transform="translate(-2764.156 -73.265)" fill="#fff"/>
                            </svg>

                            <p id={"text-logo"}>Karaz Beauty</p>
                            <p id={"text-logo"}>الصالون في بيتك</p>
                            <p id={"par"}>احصل على التطبيق</p>
                            <div className={"store"}>
                                <div id={"app-store"}>
                                    <img src={App_apple} alt="App" />
                                </div>
                                <div id={"google-play"}>
                                    <img src={Google_play} alt="App" />


                                </div>
                            </div>
                        </div>

                        <div className="container-sign-in-form">
                            <header className={"menu-slider"}>
                                <label htmlFor="slide-1-trigger">إنشاء حساب </label>
                                <label htmlFor="slide-2-trigger">تسجيل الدخول </label>
                            </header>

                            <input id="slide-1-trigger" type="radio" name="slides" checked/>
                                <section className="slide slide-one">
                                    <form className="sign-in-form">
                                        <p>البريد الإلكتروني </p>
                                        <input
                                            type='text'
                                            name='email'
                                            onChange={this.myChangeHandler}
                                        />
                                        <p>العنوان </p>
                                        <input
                                            type='text'
                                            name='address'
                                            onChange={this.myChangeHandler}
                                        />
                                        <p>كلمة المرور </p>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={this.myChangeHandler}
                                        />
                                        <p>تأكيد كلمة المرور </p>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={this.myChangeHandler}
                                        />
                                        <br/>
                                        <br/>
                                        <input type='submit' value={"انشاء حساب "} />
                                        <p>عند الضغط فأنت توافق على الشروط والأحكام وسياسة الاستخدام</p>

                                    </form>

                                </section>

                            <input id="slide-2-trigger" type="radio" name="slides">
                            </input>
                                    <section className="slide slide-two">
                                        <form className="sign-in-form">
                                            <p>البريد الإلكتروني </p>
                                            <input
                                                type='text'
                                                name='email'
                                                onChange={this.myChangeHandler}
                                            />
                                            <p>كلمة المرور </p>
                                            <input
                                                type='password'
                                                name='password'
                                                onChange={this.myChangeHandler}
                                            />

                                            <input type='submit' value={"تسجيل الدخول"} />
                                        </form>
                                    </section>

                        </div>
                    </div>
                </header>
            </div>
        );

}}
export default App;
