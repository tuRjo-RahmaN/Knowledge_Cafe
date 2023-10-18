/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import "./Articles.css"
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';
import toast from 'react-hot-toast';

const Articles = () => {

    const [blogs,setBlogs] = useState([]);
    useEffect( () =>
    {
        fetch("cards.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    const [time, setTime] =useState(0);
    function wholeReadingTime(id)
    {
        const targetBlog = blogs.find(blog => blog.id == id);
        let totalTime = time + parseInt(targetBlog.time);
        setTime(totalTime);
    }

    const [bookmarks, setBookmarks] = useState([]);
    let bookmarkCollection = [];
    function savedBookmarks(id)
    {
        const bookmarkBlog = blogs.find(blog => blog.id == id);
        let blogName = bookmarkBlog.title;

        for(let i=0; i<bookmarks.length; i++)
        {
            if(bookmarks[i] == blogName)
            {
                toast('WARNING!! The blog is already added in the bookmark',
                 {icon: '⚠️',});
                break;
            }
        }
        bookmarkCollection = [...bookmarks, blogName]
        setBookmarks(bookmarkCollection);
    }
    
    return (
        <div className='article-container'>
            <div>
                {
                    blogs.map(blog =>
                    <Blogs 
                        data={blog}
                        key={blog.id}
                        wholeReadingTime={wholeReadingTime}
                        savedBookmarks={savedBookmarks}
                    ></Blogs>)
                }
            </div>

            <Bookmark 
                time={time}
                bookmarks={bookmarks}
            ></Bookmark>
        </div>
    );
};

export default Articles;