/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Toaster } from 'react-hot-toast';


const Blogs = (props) => 
{
    const {id, date, hash_tags, img, name, profile_img, status, time, title } = props.data;

    // Taking functions from props
    const wholeReadingTime = props.wholeReadingTime;
    const savedBookmarks = props.savedBookmarks;

    return (
        <div className='blogs-container'>
            <img className='background' src={img} alt="" />
            <div className='blogs-details'>
                <div className='blogs-info'>
                    <img className='bloger-img' src={profile_img} alt="" />
                    <div>
                        <h3 className='bloger-name'>{name}</h3>
                        <p className='publish-date'><small>{date}</small></p>
                    </div>  
                </div>
                <div className='reading-time'>
                    <p>{time} min read</p>

                    {/* Bookmark icon action */}
                    <a onClick={ () => {savedBookmarks(id)}}><FontAwesomeIcon icon={faBookmark}/></a>
                    <Toaster/>
                </div>
            </div>
            <h2>{title}</h2>
            <p className='tags'><small>{hash_tags[0]} {hash_tags[1]}</small></p>

            {/* mark_as_read action */}
            <a 
                className='blog-status'
                onClick={() => { wholeReadingTime(id);}}
            >mark as read</a>
        </div>
    );
};

export default Blogs;