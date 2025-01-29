
import Link from 'next/link';
import Nav from '../component/nav.js'
import Footer from '../component/footer.js'
import './page.css'

export default function Page() {


  return (
    <>
    
<Nav/>

  {/* // hero */}

  <section className="hero-878">
  <div className="wow animate__animated animate__slideInDown overlay-878">
    <h1 className="title-878">Services we Offer</h1>
    <p className="description-878">Home  /  Services</p>

  </div>
</section>

{/* Values */}


      <div className="wow animate__animated animate__zoomIn header539">
        <p className='text_998'>
        Empowering Global Growth <strong>Through Innovative Solutions</strong>
        </p>
        <p className='text_999'>
        At M7 Investment LLC, we aim to create a lasting impact by driving innovation, fostering sustainability, and delivering exceptional value across industries.
        </p>
      </div>

{/* ////// */}

<div className="integrity-container919 bggray">
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> Trading and Investments
        </h2>
        <p className="integrity-description919">
        Our team works with governments, corporations, and private stakeholders to provide innovative trade solutions. From commodity trading to equity investments, we offer tailored strategies that maximize returns while mitigating risks, ensuring your investments are secure and lucrative.
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\ser.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>


    <div className="integrity-container919 bgwhite">
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> Trading and Investments
        </h2>
        <p className="integrity-description919">
        Our team works with governments, corporations, and private stakeholders to provide innovative trade solutions. From commodity trading to equity investments, we offer tailored strategies that maximize returns while mitigating risks, ensuring your investments are secure and lucrative.
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\ser.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>

    <div className="integrity-container919 bggray" style={{marginBottom:'250px'}}>
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> Trading and Investments
        </h2>
        <p className="integrity-description919">
        Our team works with governments, corporations, and private stakeholders to provide innovative trade solutions. From commodity trading to equity investments, we offer tailored strategies that maximize returns while mitigating risks, ensuring your investments are secure and lucrative.
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\ser.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>


{/* footer */}

<Footer/>
</>
  );
}
