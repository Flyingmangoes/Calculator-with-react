import { useReducer} from 'react';
import { Numberpad, Reducer } from './ACTIONS';
import '../css/App.css'

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(Reducer, {})
  return(
      <div className='calculatorbox'>
        <div className='outputbox'>
            <div className='output'>
              <div className='previousOperand'>
                {previousOperand} {operation}
              </div>
              <div className='currentOperand'>
                {currentOperand}
              </div>
            </div>
        </div>
        
        <Numberpad dispatch={dispatch} />
      </div>
    );
}

export default App;
