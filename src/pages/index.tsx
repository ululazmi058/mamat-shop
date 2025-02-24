import React from 'react'
import Layout from '@/components/layout/layout.module'

export default function LandingPage() {
  return (
    <Layout>
      <div className='flex w-full h-full'>
        <div className='w-full h-screen flex flex-col gap-y-20 justify-center items-start bg-amber-400 p-10'>
          <div className='font-bold text-2xl'>
            <p>Mamat GameShop - Buka Sampai Kiamat</p>
          </div>
          <div className='font-medium'>
            <p>Belanja "Sembako" Murah & Terjangkau!</p>
            <p>Dapatkan harga terbaik untuk "kebutuhan" sehari-hari hanya di Mamat GameShop</p>
          </div>
          <button onClick={() => window.location.href = "/auth"} className='bg-amber-600 hover:bg-amber-700 rounded-md text-center p-3 font-semibold'>Belanja Sekarang</button>
        </div>
        <div className='w-full h-screen flex justify-center items-center'>
          <img src='https://i.pinimg.com/736x/69/9e/63/699e632ee8a0e8eb0be76f42bd7adc55.jpg'
            className='w-80 h-80 rounded-md'
          />
        </div>  
      </div>
    </Layout>
  )
}