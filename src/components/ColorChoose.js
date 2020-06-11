import React, {useState} from "react";
import PropTypes from 'prop-types'

export const ColorChoose = props => {
    const [color, setColor] = useState("")

    return (
        <div className="color-choose">
            <h3>Введите код цвета в формате hex без решетки ниже (для того, <br/>чтобы получить коды базовых цветов
                кликните на кнопку "Справочник")</h3>
            <div id={"colorProbe"} className="colorProbe"></div>
            <div className="colorIn">
                <label htmlFor="writeColor" className="writeColorLabel">
                    <input type="text" name="writeColor" id="writeColor" onKeyPress={e => {
                        if (e.which === 13) {
                            setColor(`#${document.getElementById("writeColor").value}`)
                            document.getElementById("writeColor").value = ""
                            document.getElementById("colorProbe").style.backgroundColor = color
                            props.updateData(color)
                        }
                    }}/>
                    <p>Когда закончите ввод дважды нажмите "Enter"</p>
                    <br/>
                </label>
                <button value={"reference"} onClick={() => {
                    alert(
                        `Красный: '#ff0000',
    Зеленый: '#00ff00',
    Синий: '#0000ff',
    Желтый: '#ffff00',
    Голубой(аква): '#00ffff',
    Черный: '#000000',
    Белый: '#ffffff',
    Розовый: '#ffc0cb',
    Оранжевый: '#ffa500',
    Золотой: '#ffd700'`
                    )
                }}>Справочник
                </button>
            </div>
        </div>
    )
}

ColorChoose.propTypes = {
    updateData: PropTypes.func
}