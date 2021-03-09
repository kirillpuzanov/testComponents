import React, {useEffect, useState} from 'react';
import st from './sdf.module.css'

type objType = {
    name: string
    surname: string
}

export const ScrollComp = () => {
    const newObj = [] as objType[];
    const [data, setData] = useState(generateArray());
    const [resultArr, setResultArr] = useState<objType[]>([]);
    useEffect(() => {
        plus20(resultArr, data);
    }, []);

    function plus20(arr1res: objType[], arr2Date100: objType[]) {
        let tempArr = arr2Date100.slice(arr1res.length, arr1res.length + 20);

        for (let i = 0; i < tempArr.length; i++) {
            setResultArr((arr1res) => [...arr1res, tempArr[i]]);
        }
    }

    function generateArray() {
        const names = ['Fariz', 'Falisha', 'Mami', 'Defina', 'Fiska', 'Papi'];
        for (let i = 0; i < 100; i++) {
            newObj[i] = {
                name: names[(Math.floor(Math.random() * (names.length)))],
                surname: names[(Math.floor(Math.random() * (names.length)))] + Math.random().toString(36).substr(2, 3),
            };
        }
        return newObj;
    }

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;

        if (resultArr.length <= 100) {
            if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 1) {
                console.log('scroll');
                plus20(resultArr, data);
            }
        }
    };

    return (
        <div className={st.scrollBlock} onScroll={scrollHandler}>
            {
                resultArr.map((m, index) =>
                <div key={index} className={st.magic}>{`${m.name} ${m.surname}`}</div>)
            }
        </div>
    )
};
