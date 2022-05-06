import React from 'react'
import { StyledContainer } from './Styles'

const Calculator = () => {
  const inputNum = () => {
    
  }

  const operatorType = () => { }
  const equals = () => { }
  const minusPlus = () => { }
  const percent = () => { }
  const reset = () => { }
  
  return (
    <StyledContainer>
      <div className="wrapper">
        <div className="screen">
          <input type="text" />
        </div>
        
          <div className="btn light-gray" onClick={reset}>
            AC
          </div>
          <div className="btn light-gray" onClick={percent}>
            %
          </div>
          <div className="btn light-gray" onClick={minusPlus}>
            +/-
          </div>
          <div className="btn light-gray" onClick={operatorType}>
            /
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            7
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            8
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            9
          </div>
          <div className="btn light-gray" onClick={operatorType}>
            X
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            4
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            5
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            6
          </div>
          <div className="btn light-gray" onClick={operatorType}>
            +
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            1
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            2
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            3
          </div>
          <div className="btn light-gray" onClick={operatorType}>
            -
          </div>
          <div className="btn zero light-gray" onClick={inputNum}>
            0
          </div>
          <div className="btn light-gray" onClick={inputNum}>
            .
          </div>
          <div className="btn light-gray" onClick={equals}>
            =
          </div>
        </div>
      
    </StyledContainer>
  );
}
export default Calculator