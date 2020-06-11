import React from 'react';
import {ButtonRow} from "./components/ButtonRow";
import {ColorChoose} from "./components/ColorChoose";
import ColorContext from "./context/ColorContext";

function App() {
    return (
        <ColorContext.Provider value={"#ffffff"}>
            <div className="main-div">
                <div className="grid">
                    <ButtonRow rowNumber={1}/>
                    <ButtonRow rowNumber={2}/>
                    <ButtonRow rowNumber={3}/>
                    <ButtonRow rowNumber={4}/>
                    <ButtonRow rowNumber={5}/>
                    <ButtonRow rowNumber={6}/>
                    <ButtonRow rowNumber={7}/>
                    <ButtonRow rowNumber={8}/>
                    <ButtonRow rowNumber={9}/>
                    <ButtonRow rowNumber={10}/>
                    <ButtonRow rowNumber={11}/>
                    <ButtonRow rowNumber={12}/>
                    <ButtonRow rowNumber={13}/>
                    <ButtonRow rowNumber={14}/>
                    <ButtonRow rowNumber={15}/>
                    <ButtonRow rowNumber={16}/>
                    <ButtonRow rowNumber={17}/>
                    <ButtonRow rowNumber={18}/>
                    <ButtonRow rowNumber={19}/>
                    <ButtonRow rowNumber={20}/>
                </div>
                <ColorChoose/>
            </div>
        </ColorContext.Provider>
    );
}

export default App;
