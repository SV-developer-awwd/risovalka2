import React, {useState} from "react";

export const ColorChoose = () => {
    const [color, setColor] = useState("")

    return (
        <div className="color-choose">
            <h3>Выберите цвет из списка ниже или введите <br/>код цвета в формате hex без решетки</h3>
            <select name="assets" id="assets" className="assets">
                <option value="defaultEmpty">Выберите цвет...</option>
                <optgroup>
                    <option value="redBase">красный / rgb(255, 0, 0) / #ff0000</option>
                    <option value="greenBase">зеленый / rgb(0, 255, 0) / #00ff00</option>
                    <option value="blueBase">синий / rgb(0, 0, 255) / #0000ff</option>
                    <option value="yellowBase">жёлтый / rgb(255, 255, 0) / #ffff00</option>
                    <option value="aquaBase">голубой / cyan / rgb(0, 255, 255) / #00ffff</option>
                    <option value="blackBase">черный / rgb(0, 0, 0) / #000000</option>
                    <option value="whiteBase">белый / rgb(255, 255, 255) / #ffffff</option>
                    <option value="pinkBase">розовый / rgb(255, 192, 203) / #ffc0cb</option>
                    <option value="orangeBase">оранжевый / rgb(255, 165, 0) / #ffa500</option>
                    <option value="goldBase">золотой / rgb(255, 215, 0) / #ffd700</option>
                </optgroup>
            </select>
            <div id={"colorProbe"} className="colorProbe"></div>
            <label htmlFor="writeColor" className="writeColorLabel">
                <input type="text" name="writeColor" id="writeColor" onKeyPress={ e => {
                    if (e.which === 13) {
                        setColor(`#${document.getElementById("writeColor").value}`)
                        document.getElementById("writeColor").value = ""
                        document.getElementById("colorProbe").style.backgroundColor = color

                    }
                }} />
                <p>Когда закончите ввод дважды нажмите "Enter"</p>
                <br/>
            </label>
        </div>
    )
}