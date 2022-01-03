import React, { useState } from 'react';
import data from '../../data/MOCK_DATA.json'
import CourseDiv from '../CourseDiv/CourseDiv'
import './Course.css'

const Course = () => {
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    const totalAmount = cart.reduce((total ,pd) => total+pd.price ,0)

    return (
            <div>
                <div className='cart-container'>
                    <h4>Course Ordered : {cart.length}</h4>
                    <h5>Total Amount : $ {totalAmount} </h5>
                </div>
                <div className='product-container'>
                    {data.map((data) => <CourseDiv handleAddProduct={handleAddProduct} data={data} key={data.price}></CourseDiv>)}
                </div>
            </div>

    );
};

export default Course;