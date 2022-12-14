import { Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import GetAllGames from '../../ui/GetAllGames';
import GetAdventureGames from '../../ui/GetAdventureGames';
import GetPlatformGames from '../../ui/GetPlatformGames';
import GetShooterGames from '../../ui/GetShooterGames';
import GetSimulatorGames from '../../ui/GetSimulatorGames';

export default function Browse() {
    return (
        <>
        
            <Tabs
            defaultActiveKey="allgames"
            className='mb-3'
            justify>
                <Tab eventKey="allgames" title="All">
                    <GetAllGames />
                </Tab>
                <Tab eventKey="adventure" title="Adventure">
                    <GetAdventureGames />
                </Tab>
                <Tab eventKey="platform" title="Platform">
                    <GetPlatformGames />
                </Tab>
                <Tab eventKey="shooter" title="Shooter">
                    <GetShooterGames />
                </Tab>
                <Tab eventKey="simulator" title="Simulator">
                    <GetSimulatorGames />
                </Tab>
            </Tabs>
        
        </>
    );
}