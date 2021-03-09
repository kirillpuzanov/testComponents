import React from "react";
import s from './style.module.css';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

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
                   <DigitalClock
                   hours={hours}
                   minutes={minutes}
                   seconds={seconds}
                   />
                    :
                    <AnalogClock
                    hoursForAnalog={hoursForAnalog}
                    minutesForAnalog={minutesForAnalog}
                    secondsForAnalog={secondsForAnalog}
                    />
            }</div>
            <div className={s.clock_btn}>
                <button onClick={showDigitalClock}>showLightClock</button>
                <button onClick={showAnalogClock}>showAnalogClock</button>
            </div>
        </div>
    )
}

