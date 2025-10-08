import { useReducer, useEffect} from 'react';
import { Numberpad, Reducer, ACTION } from './ACTIONS';
import '../css/App.css'

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(Reducer, {})
  useEffect(() => {
    const handlekeydown = (e) => {
      if (e.key === "Backspace") {
        dispatch({ type: ACTION.DELETE});
      }
    };

    window.addEventListener('keydown', handlekeydown);
    return () => window.removeEventListener('keydown', handlekeydown);
  }, [])

  return (
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
