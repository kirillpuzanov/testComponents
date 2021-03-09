import s from "./style.module.css";
import React from "react";

type DigitalClockType = {
    hours: string | number
    minutes: string | number
    seconds: string | number
}
export const DigitalClock = (props: DigitalClockType) => {

    return (
        <div className={s.clock_digital}>
            <span>{props.hours} : </span>
            <span>{props.minutes} : </span>
            <span>{props.seconds}</span>
        </div>
    )
}