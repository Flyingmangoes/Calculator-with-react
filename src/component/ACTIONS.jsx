import { useState, useReducer } from 'react' 
import '../css/ACTIONS.css'


const ACTION = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE: 'delete-digit',
    EVALUATE: 'evaluate'
};

export function Reducer(state, { type, payload}) {
    switch(type) {
        case ACTION.ADD_DIGIT:
            return {
            ...state,
        currentOperand: `${currentOperand}${payload.digit}` 
        };
    }
}

export function Numberpad() {


    return (
        <div className='calculatorgrid'>
            <div className="calculatorinput">
                <button className='span-two'>AC</button>
                <button>DEL</button>
                <button>/</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>*</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <button>.</button>
                <button>0</button>
                <button className='span-two'>=</button>
            </div>
        </div>
    );
}

export default Numberpad;