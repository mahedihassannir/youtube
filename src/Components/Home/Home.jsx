import React, { useEffect, useState } from 'react';

import './Home.css'
import { Link } from 'react-router-dom';
import { FaHome, FaTablet, FaUserFriends, FaUsers } from 'react-icons/fa';
import HomeContent from '../HomeContent/HomeContent';
import LeftSideBar from '../LeftSideBar/LeftSideBar';







const Home = () => {

    // here  is lod the server data for mews data


    let [data, SetData] = useState([])
    // here is errors for showing on the web
    const [err, SetErr] = useState("")

    // here is errors for showing on the web ends

    useEffect(() => {
        let url = `http://localhost:3000/newsData`
        fetch(url)
            .then(res => res.json())
            .then(data => SetData(data))
            .catch(err => {
                const showErr = err
                SetErr(showErr)
            })

    }, [])
    // console.log(data);

    // here  is lod the server data for mews data ends



    return (
        <div>
            <section id='faorGrid' className='grid justify-center'>
                {/* here is  */}
                <section>
                    <div>
                        {/* here is profile section details section */}
                    </div>


                    <LeftSideBar></LeftSideBar>
                </section>

                <div className=''>
                    {/* here is main content section of home */}
                    {
                        data.map(data => <HomeContent

                            key={data._id}
                            data={data}
                        ></HomeContent>)
                    }
                    {/* here is main content section of home ends */}

                </div>
            </section >
        </div >
    );
};

export default Home;