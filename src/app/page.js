
import Link from 'next/link';
import Nav from './component/nav.js'
import Footer from './component/footer.js'
import './page.css'
import ImageSlider from './slider.js'

export default function Page() {


  return (
    <>
    
<Nav/>

  {/* // hero */}

  <section className="hero-909">
  <div className="wow animate__animated animate__slideInDown overlay-909">
    <h1 className="title-909">Empowering Global Trade & Investments
    </h1>
    <p className="description-909">
      M7 Investment LLC is your trusted partner in trading, funding, and logistics, driving
      excellence and innovation across industries worldwide.
    </p>
    <div className="buttons-909">

    <Link href="/Services">
    <button className="gradiant-button-999">
      <span className="text">Explore</span>
      <img src="\images-and-icon\Group 9827.svg" alt="" />
    </button>
</Link>

<Link href="/contact">
      <button className="contact-909">Contact Us</button>
      </Link>
    </div>
  </div>
</section>

{/* info */}

<section className="p909">
      <div className="container909">
        
      <ImageSlider/>

        <div className="content909">
        <img src="\images-and-icon\who.svg" width={'150px'} alt="" />
          <h2 className="wow animate__animated animate__zoomIn title909">
            <strong>M7 Investment LLC</strong> is a premier global trade and investment firm, headquartered in the <strong>USA</strong> with a corporate office in <strong>Dubai, UAE.</strong>
          </h2>
          <Link href="/about-us">
          <button className="gradiant-black-button-999">About Us 
          <img src="\images-and-icon\Group 9827.svg" alt="" />
          </button>
          </Link>
        </div>
      </div>
    </section>

    {/* Services we Offer */}

<div className="services098">

 <div>
 <img src="\images-and-icon\offers.svg" width={'190px'} alt="" />
 </div>

 <div className="serviceschild098">

  <h2 className="wow animate__animated animate__zoomIn margintbhead">
  Our Services
  </h2>
  <p>
  At M7 Investment LLC, we provide a wide array of services designed to meet the needs of diverse industries. Our expertise includes
  </p>
 </div>


 <div className="cardscont656">

 <div className="wow animate__animated animate__fadeInUp card-container-939">
      <div className="icon-wrapper-939">
        <img src="\images-and-icon\Vector667.svg" alt="Project Funding Icon"/>
      </div>
      <span className="card-number-939">01.</span>
      <h2 className="card-title-939">Trading & Investments</h2>
      <p className="card-description-939">
      Facilitating seamless global trade and strategic investments to drive economic growth and maximize returns for stakeholders.
      </p>
    </div>

 <div className="wow animate__animated animate__fadeInUp card-container-939">
      <div className="icon-wrapper-939">
        <img src="\images-and-icon\bulb.svg" alt="Project Funding Icon" />
      </div>
      <span className="card-number-939">02.</span>
      <h2 className="card-title-939">Project <br /> Funding</h2>
      <p className="card-description-939">
        Providing tailored funding solutions to support large-scale projects across 
        diverse industries, ensuring sustainable growth.
      </p>
    </div>


    <div className="wow animate__animated animate__fadeInUp card-container-939">
      <div className="icon-wrapper-939">
        <img src="\images-and-icon\Vector673.svg" alt="Project Funding Icon" />
      </div>
      <span className="card-number-939">03.</span>
      <h2 className="card-title-939">Oil & Gas</h2>
      <p className="card-description-939">
      Delivering expertise in trading and logistics within the oil and gas sector, ensuring efficient energy solutions worldwide.
      </p>
    </div>

   
 </div>

 <div>
 <Link href="/Services">
  <button className="gradiant-button-999">
  View All Services
  <img src="\images-and-icon\Group 9827.svg" alt="" />
  </button>
  </Link>
 </div>

</div>


{/* Our Trusted Partners */}

<section className="trusted-partners-section139">
      <div >
      <img src="\images-and-icon\Partners.svg" width={'200px'} alt="" />
      </div>
      <h2 className="wow animate__animated animate__zoomIn partners-heading139">
        We are proud to <span className="bold139">collaborate</span> with{" "}
        <span className="bold139">leading organizations</span> across various industries,
        forming strong alliances to deliver{" "}
        <span className="bold139">exceptional value</span> in global trade and{" "}
        <span className="bold139">investment.</span>
      </h2>

      <Link href="/Partners">
      <button className="gradiant-black-button-999">
      Explore Our Partners
  <img src="\images-and-icon\Group 9827.svg" alt="" />
  </button>
  </Link>
    
    </section>


    {/* Our Values */}



 <div className="services098">

{/* <div>
<img src="\images-and-icon\offers.svg" width={'190px'} alt="" />
</div> */}

<div className="serviceschild098">

 <h2 className="margintbhead">
 Our Values
 </h2>
 <p>
 At M7 Investment LLC, we provide a wide array of services designed to meet the needs of diverse industries. Our expertise includes
 </p>
</div>

<div className="cardscont656" style={{marginBottom:'250px'}}>

<div className="wow animate__animated animate__fadeInUp card-container-839">
          <img src="\images-and-icon\Vector77.svg" alt="" />
      <div className="content-container-839">
        <h3 className="title-839">INTEGRITY</h3>
        <p className="description-839">Building trust and creating value.</p>
      </div>
    </div>

    <div className="wow animate__animated animate__fadeInUp card-container-839 mtop4">
          <img src="\images-and-icon\2.svg" alt="" />
      <div className="content-container-839">
        <h3 className="title-839">EXCELLENCE</h3>
        <p className="description-839">Building trust and creating value.</p>
      </div>
    </div>

    <div className="wow animate__animated animate__fadeInUp card-container-839">
          <img src="\images-and-icon\3.svg" alt="" />
      <div className="content-container-839">
        <h3 className="title-839">COLLABORATION</h3>
        <p className="description-839">Building trust and creating value.</p>
      </div>
    </div>

    <div className="wow animate__animated animate__fadeInUp card-container-839 mtop4" >
          <img src="\images-and-icon\4.svg" alt="" />
      <div className="content-container-839">
        <h3 className="title-839">INNOVATION</h3>
        <p className="description-839">Building trust and creating value.</p>
      </div>
    </div>

</div>

</div>



{/* footer */}

<Footer/>


</>
  );
}
