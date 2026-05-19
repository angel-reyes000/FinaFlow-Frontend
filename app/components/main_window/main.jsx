import Image from 'next/image';
import image_body from '../../../public/images_home/body FinaFlow.png'

export default function Main () {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Master your finances with clarity in a simple, modern and elegat way.</h1>
            <p>Take control of your income, expenses and savings with a platform designed to simplify your financial life.</p>
          </div>
          <div>
            <Image src={image_body} height={200} width={200} alt='Representative image for aplication'/>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
}