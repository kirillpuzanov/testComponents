import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";


type ClockContainerType = {};


export const ClockContainer = (props: ClockContainerType) => {
    const helperClock = (num: number) => (num < 10 ? '0' + num : num);
    const [date, setDate] = useState(new Date())
    const [styleClock, setStyleClock] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const showDigitalClock = () => setStyleClock(true);
    const showAnalogClock = () => setStyleClock(false);

    const hours = helperClock(date.getHours())
    const minutes = helperClock(date.getMinutes())
    const seconds = helperClock(date.getSeconds())

    return (
        <Clock
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            styleClock={styleClock}
            showDigitalClock={showDigitalClock}
            showAnalogClock={showAnalogClock}
        />
    )
}