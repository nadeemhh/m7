
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
    <h1 className="title-878">VALUES</h1>
    <p className="description-878">Home  /  Values</p>

  </div>
</section>

{/* Values */}


      <div className="wow animate__animated animate__zoomIn header539" style={{marginBottom:'50px'}}>
        <p className='text_998'>
        <span className='headp1'>Our Core Values:</span> <span className='headp2'> The Foundation of Our Success</span>
        </p>
        <p className='text_999'>
        At M7 Investment LLC, our core values guide every decision, partnership, and project we undertake. They reflect who we are and what we stand for.
        </p>
      </div>

{/* ////// */}

<div className="integrity-container919 bggray">
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> INTEGRITY
        </h2>
        <p className="integrity-subtitle919">Building Trust, Creating Value</p>
        <p className="integrity-description919">
          We believe in transparency, honesty, and ethical practices. Integrity forms the cornerstone of our operations, ensuring lasting relationships built on trust.
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\Handshake 1.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>
 

    <div className="integrity-container919 bgwhite">
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> EXCELLENCE
        </h2>
        <p className="integrity-subtitle919">Exceeding Expectations, Every Time</p>
        <p className="integrity-description919">
        M7 INVESTMENT LLC, excellence is our benchmark. We are committed to surpassing expectations and delivering unmatched quality in all our endeavors.
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\py.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>

    <div className="integrity-container919 bggray">
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> Collaboration
        </h2>
        <p className="integrity-subtitle919">Powering Success Through Synergy</p>
        <p className="integrity-description919">
        Powering Success through Synergy at M7 INVESTMENT LLC, Collaboration lies at the heart of our success. We believe that by working together, we can achieve far more than we could individually
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\imgnnn.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>


    <div className="integrity-container919 bgwhite">
      <div className="integrity-text919">
        <h2 className="integrity-title919">
          <span className="highlight919"></span> Innovation
        </h2>
        <p className="integrity-subtitle919">Driving Progress, Embracing Change</p>
        <p className="integrity-description919">
        M7 INVESTMENT LLC, Driven by innovation and a passion for continuous improvement, we assemble a team of exceptional talent. Our dedicated professionals embrace new technologies and industry best practices to ensure we stay at the forefront of our field.
        </p>
      </div>
      <div className="integrity-image-container919">
        <img
          src="\images-and-icon\imgytt.png"
          alt="Handshake representing integrity"
          className="integrity-image919"
        />
      </div>
    </div>

{/* /////// */}


<div className="container198">
  <p className='text_990'>
  These values are more than just principles; they define our culture, shape our strategies, and inspire our vision to create a brighter future.
  </p>
</div>

{/* footer */}

<Footer/>
</>
  );
}
