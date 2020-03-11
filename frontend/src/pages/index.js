import React, { useEffect } from 'react';
import { getAllContent } from '../services/content';


export default function HomePage() {
    useEffect(() => {
        getAllContent()
        .then(console.log)
        .catch(console.log)
    }, [])

    return (
        <div className='container p-5'>
            <div className='jumbotron'>
                <h1 className='display-3'>Please, Donate!</h1>

                <p className='lead'>
                    Help us gather funds by liking our lovely content. 👍🏻😍
            </p>
                <hr className='my-2' />

                <p>No content!</p>
                
                <p className='lead'>
                    <a className='btn btn-primary btn-lg' href='#!' role='button'>Upload Content</a>
                </p>
            </div>
        </div>
    )
}
