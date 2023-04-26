import { split } from 'postcss/lib/list';
import React, { useState } from 'react';
import { FaEbay, FaEye, FaHeart, FaHeartBroken, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';






const HomeContent = ({ data }) => {

    const { details, author, image_url, rating, thumbnail_url, title, total_view } = data
    console.log(thumbnail_url);
    console.log(author);

    // here is heart img contidional

    const [Showheart, SetHeart] = useState(false)




    return (
        <div className='md:w-[600px] w-[400px] p-6'>
            <div>
                <div className='pb-4'>
                    <div className='flex gap-3 items-center w-full h-20 bg-gray-400 rounded-md p-2'>

                        <img className=' hover:w-[100px] hover:h-[100px] w-[40px] h-[40px] rounded-full' src={author.img} alt="" />
                        <div className=''>
                            <p className='block'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>

                    <div className='pt-3 '>
                        {/* here is title divition  */}

                        <h1 id='titlem' className='text-2xl font-bold font-mono'

                        >{title.slice(0, 40)}...
                        </h1>

                    </div>
                    <div className='pt-4'>
                        <img src={image_url} alt="" />

                        <div className='pt-2'>

                            {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...</>}
                        </div>
                    </div>



                </div>
                <div className='border-b-2'>

                </div>
                {/* here is rating section */}
                <div>
                    <div className='flex pt-3 justify-between'>
                        <div className='flex gap-2 h-10 items-center'>
                            <div onClick={() => SetHeart(!Showheart)}>
                                {
                                    Showheart ? <p className='text-2xl text-red-600 pl-4'><FaHeart></FaHeart></p> : <FaHeartBroken className='text-gray-500 text-2xl'></FaHeartBroken>

                                }
                            </div>

                            {

                                <Rating className=''
                                    placeholderRating={rating.number}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                    fullSymbol={<FaStar className='text-yellow-500'></FaStar>}

                                ></Rating>
                            }

                            <span>{rating.number}</span>



                            <div className='ml-60'>
                                <p className='flex gap-2 items-center'><FaEye></FaEye>{total_view}</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* here is rating section  ends*/}


            </div>

        </div >
    );
};

export default HomeContent;