import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Wine from './detailINFO/Wine';
import Whiskey from './detailINFO/Whiskey';
import Vodka from './detailINFO/Vodka';
import Brandy from './detailINFO/Brandy';
import Gin from './detailINFO/Gin';
import Rum from './detailINFO/Rum';
import Liqueur from './detailINFO/Liqueur';


function InfoMain() {

    const radios = [
        { name: 'Wine(포도주/과실주)', value: 'A1' },
        { name: 'Whiskey(위스키)', value: 'A2' },
        { name: 'Vodka(보드카)', value: 'A3' },
        { name: 'Brandy(브랜디)', value: 'A4' },
        { name: 'Gin(진)', value: 'A5' },
        { name: 'Rum(럼)', value: 'A6' },
        { name: 'Liqueur(향주)', value: 'A7' }
    ];  

    const [radioValue, setRadioValue] = useState('M1');


    return(
        <div style={{ paddingTop: '120px', paddingBottom: '10px', textAlign: 'center' }}>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx} id={`main-radio-${idx}`} type="radio" variant="outline-light"
                        name="main-radio" value={radio.value} checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        style={{marginLeft: '15px'}}
                    >
                    {radio.name}
                    </ToggleButton>
                ))}
                <hr style={{ borderTop: '3px solid white' }}/>
            <div style={{ marginTop: '40px' }}>
                {radioValue === 'A1' && <Wine />}
                {radioValue === 'A2' && <Whiskey />}
                {radioValue === 'A3' && <Vodka />}
                {radioValue === 'A4' && <Brandy />}
                {radioValue === 'A5' && <Gin />}
                {radioValue === 'A6' && <Rum />}
                {radioValue === 'A7' && <Liqueur />}
            </div>
        </div>
    );
}

export default InfoMain;