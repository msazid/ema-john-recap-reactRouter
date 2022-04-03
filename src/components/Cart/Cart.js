import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className="w-100 md:w-96 my-2 mx-auto px-4 border-2">
            <h1 className="font-medium text-2xl ">Shopping Cart</h1>
            <ul>
                {
                cart.map((data) =>
                    <li className='flex w-4/5 h-fit border-2 my-2'>
                        <img className='w-20 h-20' src={data.img} alt="" /> 
                            <span className='ml-2'>
                                <p className='text-sm font-semibold'>{data.name}</p>
                                <p className='text-xs mt-2 font-medium'>Price: $ {data.price}</p>   
                                <p className='text-xs mt-2 font-medium'>Quantity: $ {data.quantity}</p>   
                            </span> 
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Cart;