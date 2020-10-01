import React from "react";
import s from './style.module.css';

type ClockType = {
    hours: string | number
    minutes: string | number
    seconds: string | number
    styleClock: boolean
    showDigitalClock: () => void
    showAnalogClock: () => void
};

export const Clock = (props: ClockType) => {


    const {hours, minutes, seconds, styleClock, showDigitalClock, showAnalogClock} = props;

    let hoursForAnalog = typeof (hours) === 'string' ? +(hours) * 30 : (hours) * 30
    let minutesForAnalog = typeof (minutes) === 'string' ? +(minutes) * 6 : (minutes) * 6
    let secondsForAnalog = typeof (seconds) === 'string' ? +(seconds) * 6 : (seconds) * 6

    return (
        <div className={s.clock}>
            <div className={s.clock_wrapper}>{
                styleClock ?
                    <div className={s.clock_digital}>
                        <span>{hours} : </span>
                        <span>{minutes} : </span>
                        <span>{seconds}</span>
                    </div> :
                    <div className={s.clock_analog}>
                        <div className={s.hour}
                             style={{transform: `rotateZ(${hoursForAnalog + minutesForAnalog / 12}deg)`}}>
                            <div className={s.hr}></div>
                        </div>
                        <div className={s.min} style={{transform: `rotateZ(${minutesForAnalog}deg)`}}>
                            <div className={s.mn}></div>
                        </div>
                        <div className={s.sec} style={{transform: `rotateZ(${secondsForAnalog}deg)`}}>
                            <div className={s.sc}></div>
                        </div>
                    </div>
            }</div>
            <div className={s.clock_btn}>
                <button onClick={showDigitalClock}>showLightClock</button>
                <button onClick={showAnalogClock}>showAnalogClock</button>
            </div>
        </div>
    )
}