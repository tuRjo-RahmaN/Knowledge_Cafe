/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import "./Bookmark.css";

const Bookmark = (props) => 
{
  const time = props.time;
  const bookmarks = props.bookmarks;

  return (
    <div>
      <div className="bookmarks-container">
        
        {/* Counting total reading time on Blog */}
        <h3 className="total-reading-time">Spent time on read: {time} min</h3>

        <div className="bookmark-details">
            <h3>Bookmarked Blogs : {bookmarks.length} </h3>

            {
                bookmarks.map(bookmark => <div className="added-bookmark"><h6>{bookmark}</h6></div>)
            }
        </div>
      </div>
    </div>
  );
};

export default Bookmark;