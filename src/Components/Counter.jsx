import React from 'react';
import ButtonGroup from './ButtonGroup';

const Counter = (props) => {

    const { handleSingleRan, handleTwoRan, handleThreeRan, handleFourRan, handleFiveRan, handleSixRan, counter, handleDecrement, handleReset } = props;

    return (
        <div className='md:px-[80px] px-[20px]'>
            <div className='h-[100px] flex items-center justify-center rounded-md bg-[#0d0223] count-card'>
                <h4 className='text-[#c039ff] text-[50px] font-bold'>{counter}</h4>
            </div>
            <ButtonGroup handleSingleRan={handleSingleRan} handleTwoRan={handleTwoRan} handleThreeRan={handleThreeRan} handleFourRan={handleFourRan} handleFiveRan={handleFiveRan} handleSixRan={handleSixRan} handleDecrement={handleDecrement} handleReset={handleReset} />
        </div>
    );
};

export default Counter;