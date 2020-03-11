import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ title, description, type, src }) {
    return (
        <div className='card'>
            {type === 'images' && src && (
                <img className='card-img-top' src={src} alt='Card image cap' />
            )}

            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>
                    {description}
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.oneOf(['images', 'video']).isRequired,
    src: PropTypes.string,
}