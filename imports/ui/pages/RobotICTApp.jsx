import React, { useState } from 'react';
import './RobotICTApp.css';
import {processNumber} from "../utils/processNumber";

export const RobotICTApp = () => {
    const [startRange, setStartRange] = useState(1);
    const [endRange, setEndRange] = useState(100);
    const [resultList, setResultList] = useState([]);

    const generateList = () => {
        const list = [];
        for (let i = startRange; i <= endRange; i++) {
            list.push(processNumber(i));
        }
        setResultList(list);
    };

    return (
        <div className="robotict-app-container">
            <h1 className="robotict-app-header">RobotICT Number Processor</h1>
            <div className="range-input">
                <label htmlFor="startRange" className="range-label">Start Range: </label>
                <input
                    type="number"
                    id="startRange"
                    value={startRange}
                    onChange={(e) => setStartRange(parseFloat(e.target.value))}
                />
            </div>
            <div className="range-input">
                <label htmlFor="endRange" className="range-label">End Range: </label>
                <input
                    type="number"
                    id="endRange"
                    value={endRange}
                    onChange={(e) => setEndRange(parseFloat(e.target.value))}
                />
            </div>
            <button className="process-numbers-button" onClick={generateList}>
                Process Numbers
            </button>
            <ul className="numbers-list">
                {resultList.map((item, index) => (
                    <li key={index} className="numbers-list-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

