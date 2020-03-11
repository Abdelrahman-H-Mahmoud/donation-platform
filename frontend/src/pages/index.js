import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAllContent } from '../services/content';


export default function HomePage() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        getAllContent()
            .then(res => setContent(res.data.payload))
            .catch(error => { throw error })
    }, [])

    return (
        <div className='container p-5'>
            <h1 className='display-3'>Please, Donate!</h1>
            <p className='lead'>Help us gather funds by liking our lovely content. 👍🏻😍</p>
            <hr className='my-2' />

            <div className='jumbotron pt-3 pb-1'>

                {/** Render content */}
                {content.length
                    ? <Card {...content[1]} />
                    : <p>No content found!</p>
                }

                {/** Upload CTA */}
                <p className='lead pt-5'>
                    <a className='btn btn-primary btn-lg' href='#!' role='button'>Upload Content</a>
                </p>
            </div>
        </div>
    )
}
