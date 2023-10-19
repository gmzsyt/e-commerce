import React from 'react'
import Slider from 'react-slick';

const SliderCopm = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
      <Slider {...settings}>
          <div className='!flex items-center '>
            <div>
                <div className='text-6xl font-bold'>Best Seller Product</div>
                <div className='text-lg my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className='border rounded-full cursor-pointer hover:shadow-lg text-2xl w-[200px] h-16 flex items-center justify-center  bg-gray-200'>İncele</div>
            </div>
            <img src='https://cdn03.ciceksepeti.com/cicek/kc9621614-1/L/hp-stream-14--hd-dizustu-bilgisayar--amd-a4-9120e-cift-cekirdekli-islemci-kc9621614-1-68b911d75d63439a9965127f5845973c.jpg' alt = ""/>
          </div>
          
          <div className='!flex items-center '>
            <div>
                <div className='text-6xl font-bold'>Best Seller Product</div>
                <div className='text-lg my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img src='https://www.incehesap.com/resim/urun/201701/apple-macbook-pro-mlh32tua-notebook-75816_500.jpg' alt=''/>
          </div>          
          </Slider>
    </div>
  )
}

export default SliderCopm
