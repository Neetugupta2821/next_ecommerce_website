import Image from "next/image";
import girlImg from '../../public/images/hero-BCUCHsQr.jpg'
export default function Banner() {
  return (
    
      <div className="flex flex-col sm:flex-row border border-gray-400 text-[#FFFF] rounded-[5px]">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <p>Our BestSellers</p>
          <p>Latest Arrivals</p>
          <p>Shop Now</p>
        </div>
        
          <Image
            src={girlImg}  // Note: No need to include "public" in the path
            alt="Description"
            className="w-full sm:w-1/2"
            width={500}
            height={300}
          />
         
      </div>
    
  );
}
