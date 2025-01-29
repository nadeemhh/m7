
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
    <h1 className="title-878">Contact Us</h1>
    <p className="description-878">Home  /  Contact</p>

  </div>
</section>

{/* about us */}

      <div className="wow animate__animated animate__zoomIn header539">
        <p className='text_998'>
        <span className='headp1'>Building Global Partnerships,</span> <span className='headp2'> Driving Innovation.</span>
        </p>
        <p className='text_999'>
           M7 Investment LLC is a privately held international trade and investment company redefining excellence in global markets.
        </p>
      </div>

      
      <section className='parent76'>
    
      <div className="contact-container739">
      <h2 className="heading739">
        We’d love to <span className="highlight739">hear from you!</span>
      </h2>
      <p className="subtext739">
        Fill in the details below, and our team will reach out to you shortly.
      </p>

      <form className="form739">
        <label className="label739">FULL NAME</label>
        <input type="text" className="input739" />

        <label className="label739">EMAIL ADDRESS</label>
        <input type="email" className="input739" />

        <label className="label739">COMPANY NAME</label>
        <input type="text" className="input739" />

        <label className="label739">YOUR MESSAGE</label>
        <textarea className="textarea739"></textarea>

        {/* <div className="attachment-box739">
          <p>
            Add <span className="attachment-highlight739">Attachments</span>
          </p>
          <div className="attachment-icon739">📎</div>
        </div> */}

        <button  className="button739">
          Submit
        </button>
      </form>
    </div>

    </section>


{/* footer */}

{/* <Footer/> */}
</>
  );
}
