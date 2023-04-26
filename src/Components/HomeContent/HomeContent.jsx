import React from 'react';

const HomeContent = ({ data }) => {

    const { details, author, image_url, rating, thumbnail_url, title, total_view } = data
    console.log(thumbnail_url);
    console.log(author);




    return (
        <div className='w-[600px] p-6'>
            <div>
                <div className='pb-4'>
                    <div className='flex gap-3 items-center'>

                        <img className='w-[40px] h-[40px] rounded-full' src={author.img} alt="" />
                        <div className=''>
                            <p className='block'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>



                    </div>

                </div>
                <div className='border-b-2'>

                </div>

            </div>

        </div>
    );
};

export default HomeContent;