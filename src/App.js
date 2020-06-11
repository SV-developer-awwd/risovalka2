import React, {useState} from 'react';
import {ButtonRow} from "./components/ButtonRow";
import {ColorChoose} from "./components/ColorChoose";

function App() {
    const [color, setColor] = useState("")

    const updateData = value => {
        setColor(value)
    }

    return (
        <div className="main-div">
            <div className="grid">
                <ButtonRow rowNumber={1} color={color}/>
                <ButtonRow rowNumber={2} color={color}/>
                <ButtonRow rowNumber={3} color={color}/>
                <ButtonRow rowNumber={4} color={color}/>
                <ButtonRow rowNumber={5} color={color}/>
                <ButtonRow rowNumber={6} color={color}/>
                <ButtonRow rowNumber={7} color={color}/>
                <ButtonRow rowNumber={8} color={color}/>
                <ButtonRow rowNumber={9} color={color}/>
                <ButtonRow rowNumber={10} color={color}/>
                <ButtonRow rowNumber={11} color={color}/>
                <ButtonRow rowNumber={12} color={color}/>
                <ButtonRow rowNumber={13} color={color}/>
                <ButtonRow rowNumber={14} color={color}/>
                <ButtonRow rowNumber={15} color={color}/>
                <ButtonRow rowNumber={16} color={color}/>
                <ButtonRow rowNumber={17} color={color}/>
                <ButtonRow rowNumber={18} color={color}/>
                <ButtonRow rowNumber={19} color={color}/>
                <ButtonRow rowNumber={20} color={color}/>
            </div>
            <ColorChoose updateData={updateData}/>
        </div>
    );
}

export default App;
