import React from 'react';


const Product = (props) => {
    const {name,price,seller,img} = props.product
    return (
        <div className='border w-80 mx-auto my-3'>
            <img src={img} className="w-80" alt="" />
            <div className='p-2 text-left'>
                <p className='font-medium text-lg'>{name}</p>
                <p className='font-normal text-sm'>Price: $ {price}</p>
                <p className='font-normal text-sm'>Seller: {seller}</p>
            </div>
        </div>
    );
};

export default Product;