import '../css/ACTIONS.css'


export const ACTION = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE: 'delete-digit',
    EVALUATE: 'evaluate'
};

export function Reducer(state, { type, payload }) {
    switch(type) {
        case ACTION.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state;
            }
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return state;
            }

            return {
            ...state,
            currentOperand: `${state.currentOperand || ''}${payload.digit}`, 
        }

        case ACTION.CLEAR:
            return {}
        
        case ACTION.DELETE:
            if (state.currentOperand == null) return state;

            if (state.currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: null,
                }
            }
        
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }


        case ACTION.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state;
            }

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
            };
        }
        
        if (state.currentOperand == null) {
            return {
              ...state,
                operation: payload.operation,
            };
        }

        return {
            ...state,
            previousOperand: evaluate(state),
            operation: payload.operation,
            currentOperand: null,   
        };

        case ACTION.EVALUATE:
            if (state.previousOperand == null || state.currentOperand == null || state.operation == null) {
                return state;
            }

            const prev = parseFloat(state.previousOperand);
            const current   = parseFloat(state.currentOperand);
            let computation = ''
            
            switch (state.operation) {
                case '+':
                    computation = prev + current
                    break

                case '-':
                    computation = prev - current
                    break
            
                case '*':
                    computation = prev * current
                    break

                case '/':
                    computation = current !== 0 ? prev / current: 'Error'
                    break

                default:
                    return state
            }

            return {
                ...state,
                currentOperand: computation.toString(),
                previousOperand: null,
                operation: null,
            }
    }    
}


export function Numberpad({ dispatch }) {
    return (
        <div className='calculatorgrid'>
            <div className="calculatorinput">
                <button className='span-two' onClick={() => dispatch({ type: ACTION.CLEAR})}>AC</button>
                <button onClick={() => dispatch({ type: ACTION.DELETE})}>DEL</button>
                <button onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation: '/'} })}>/</button>

                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '1'} })}>1</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '2'} })}>2</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '3'} })}>3</button>
                <button onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation: '*'}})}>*</button>

                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '4'} })}>4</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '5'} })}>5</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '6'} })}>6</button>
                <button onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: {operation: '+'} })}>+</button>

                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '7'} })}>7</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '8'} })}>8</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '9'} })}>9</button>
                <button onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: {operation: '-'} })}>-</button>

                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '.'} })}>.</button>
                <button onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit: '0'} })}>0</button>
                <button className='span-two' onClick={() => dispatch({ type: ACTION.EVALUATE})}>=</button>
            </div>
        </div>
    );
}

export default Numberpad;