import React from 'react';

const ButtonGroup = (props) => {
    const { handleSingleRan, handleTwoRan, handleThreeRan, handleFourRan, handleFiveRan, handleSixRan, handleDecrement, handleReset } = props;

    return (
        <div className='grid grid-cols-3 gap-[8px] pt-[20px]'>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleSingleRan}>Add 1 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleTwoRan}>Add 2 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleThreeRan}>Add 3 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleFourRan}>Add 4 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleFiveRan}>Add 5 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleSixRan}>Add 6 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleDecrement}> -1 Run</button>
            <button className='bg-[#0d0223] py-[10px] px-[30px] text-[#c039ff] duration-500 hover:bg-[#c039ff] hover:text-[#0d0223] active:scale-[.9] count-card' onClick={handleReset}>Reset</button>
        </div>
    );
};

export default ButtonGroup;