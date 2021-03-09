import s from "./style.module.css";
import React from "react";

type AnalogClockType = {
    hoursForAnalog: number
    minutesForAnalog: number
    secondsForAnalog: number
}
export const AnalogClock = (props: AnalogClockType) => {
    return (
        <div className={s.clock_analog}>
            <div className={s.hour}
                 style={{transform: `rotateZ(${props.hoursForAnalog + props.minutesForAnalog / 12}deg)`}}>
                <div className={s.hr}></div>
            </div>
            <div className={s.min} style={{transform: `rotateZ(${props.minutesForAnalog}deg)`}}>
                <div className={s.mn}></div>
            </div>
            <div className={s.sec} style={{transform: `rotateZ(${props.secondsForAnalog}deg)`}}>
                <div className={s.sc}></div>
            </div>
        </div>
    )
}