import React from 'react';
import './CourseDiv.css'

const CourseDiv = (props) => {
    const {course, image, mentor, price} = props.data
    return (
        <div className='course-card'>
             <div className='card-detail'>
                <div className='without-btn'>
                    <img src={image} alt="" />
                    <h4>{course}</h4>
                    <p><small>{mentor}</small></p>
                    <h4> $ {price}</h4>
                </div>
                <div className='btnDiv'>
                    <button onClick={() => props.handleAddProduct(props.data)} className='btn'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDiv;