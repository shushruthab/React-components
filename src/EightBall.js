import { useState } from "react";
import './EightBall.css';

const EightBall = ({question, answers}) => {
    const [message, setMessage] = useState(question[0].msg)
    const [clr, setClr] = useState(question[0].color)
    
    const shake = () => {
        const idx = Math.floor(Math.random() * answers.length)
        setMessage(answers[idx].msg);
        setClr(answers[idx].color);
        console.log("hi");
    }
    const restart = () => {
        setMessage(question[0].msg);
        setClr(question[0].color)
    }
    return (
        <div>
            <div className="EightBall" style={{backgroundColor: clr}}>
            <span className="EightBall-message">{message}</span>
            </div>
            <div >
            <button className="EightBall-shake" onClick={shake}>Shake 8 ball</button>
            <button className="EightBall-restart" onClick={restart}>Restart</button>
            </div>
        </div>
    );
}

export default EightBall;