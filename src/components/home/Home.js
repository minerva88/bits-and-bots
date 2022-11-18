import videoBg from '../../assets/videos/gaming_bg.mp4';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';


export default function Home() {
    return (
        <>
        <div className="main">
            <video src={videoBg} autoPlay loop muted/>
            <div className='card logincard'>
                <Tabs
                defaultActiveKey='login'
                className='mb-3'
                justify
                >
                    <Tab eventKey='login' title='Log In'>
                        <LoginForm />
                    </Tab>
                    <Tab eventKey='register' title='Register'>
                        <RegisterForm />
                    </Tab>
                </Tabs>
            </div>
        </div>
        </>
    );
}