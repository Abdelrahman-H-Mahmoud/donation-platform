import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Pagination from "../components/pagination";
import { getAllContent } from '../services/content';


export default function HomePage() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        getAllContent(0, 10)
            .then(res => setContent(res.data.payload))
            .catch(error => { throw error })
    }, [])


    return (
        <div className='container p-5'>


            <div className='jumbotron pt-3 pb-1'>
                {/** Upload CTA */}
                <h1 className='display-3'>Please, Donate!</h1>
                <p className='lead'>Help us gather funds by liking our lovely content. 👍🏻😍</p>
                <hr className='my-2' />
                <p className='lead pt-5'>
                    <a className='btn btn-primary btn-lg' href='#!' role='button'>Upload Content</a>
                </p>
            </div>

            <div className="list-group">
                {!content.length && <p>No content found!</p>}
                {content.map(item => <Card {...item} key={item._id} />)}
            </div>

            <Pagination pageNumbers={5} current={1} />
        </div>
    )
}
