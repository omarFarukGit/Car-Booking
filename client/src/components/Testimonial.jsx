import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

function Testimonial() {
    const textimonials=[
        {
            name:"sinan",
            location:"Dhaka",
            image:assets.user_profile,
            testimonial:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi animi temporibus dolores labore voluptatibus."
        },
        {
            name:"sakin",
            location:"Dinajpur",
            image:assets.user_profile,
            testimonial:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi animi temporibus dolores labore voluptatibus."
        },
        {
            name:"Noyon",
            location:"Dhaka",
            image:assets.user_profile,
            testimonial:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi animi temporibus dolores labore voluptatibus."
        }
    ]
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
        <Title title=" What is our Customer Say" subTitle=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, necessitatibus."/>       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'> 
            {textimonials.map((testimonial,index)=>(
                <div key={index} className='bg-white p-6 rounded-r-xl shadow-lg hover:-translate-y-1 transition-all duration-500'>
                    <div className='flex items-center gap-3'>
                        <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full' />
                        <div>
                            <p className='text-xl'>{testimonial.name}</p>
                            <p className='text-gray-500'>{testimonial.location}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 mt-4'>
                        {Array(5).fill(0).map((_,index)=>(
                            <img key={index} src={assets.star_icon}/>
                        ))}
                    </div>
                    <p className=' text-gray-500 max-w-90 mt-4 font-light'>{testimonial.testimonial}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Testimonial
