import React from 'react';
import Featured from './Featured';

function Card() {
    return (
        <div className='card'>
            <div className='featured'>
                <div className="featured-title">
                    <span>Featured Movie</span>
                    <div className="see-more">
                        <span>See more</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <Featured />
            </div>
        </div>
    );
}

export default Card;