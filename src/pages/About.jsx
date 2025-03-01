import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='m-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to our store! We are dedicated to providing you with the best quality products and exceptional customer service. Our team works tirelessly to bring you the latest trends and timeless classics. Thank you for choosing us as your go-to destination for all your fashion needs.</p>
          <p>Our mission is to create a seamless shopping experience for our customers, offering a wide range of products that cater to diverse tastes and preferences. We believe in the power of fashion to express individuality and confidence.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We strive to inspire confidence and individuality through fashion. Our goal is to provide a diverse range of products that cater to various styles and preferences, ensuring that every customer finds something they love.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py:20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>We are committed to providing products of the highest quality. Each item is carefully inspected to ensure it meets our rigorous standards. Shop with confidence knowing that you are getting the best.</p>
            </div>
            <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py:20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>We strive to make your shopping experience as convenient as possible. Our user-friendly website, fast shipping, and easy return policy ensure that you can shop with ease and confidence.</p>
            </div>
            <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py:20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Our dedicated customer service team is always here to help. We are committed to providing you with the best shopping experience possible, from answering your questions to resolving any issues you may have.</p>
            </div>
      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About