import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
          <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false} 
          interval={5000} 
          >
              <div>
                  <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote10S/GW/July/BAU/D23007216_WLD_Xiaomi_RedmiNote10S_NewLaunch_tallhero_1500x600._CB644927286_.jpg" alt="" />
              </div>

              <div>
              <img loading='lazy' src="https://m.media-amazon.com/images/I/51UjXjBbwJL._SX3000_.jpg" alt="" />
              </div>

              <div>
              <img loading='lazy' src="https://m.media-amazon.com/images/I/61X5Ue9onpL._SX3000_.jpg" alt="" />
              </div>
          </Carousel>
            
        </div>
    );
}

export default Banner
