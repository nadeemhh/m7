
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
    <h1 className="title-878">About Us</h1>
    <p className="description-878">Home  /  About</p>

  </div>
</section>

{/* about us */}

<section className="container539">
      <div className="wow animate__animated animate__zoomIn header539">
        <p className='text_998'>
         Building Global Partnerships, <strong>Driving Innovation.</strong>
        </p>
        <p className='text_999'>
          Founded in 2022, M7 Investment LLC is a privately held international trade and investment company redefining excellence in global markets.
        </p>
      </div>

      <div className="content539">
        <div className="imageContainer539">
          <img src="\images-and-icon\Group 988.png" alt="Team Collaboration"
            width={800} 
            height={400} 
            className="image901" />
        </div>
        <div className="textContainer539">
          <h3 className='OurStory66'>Our Story</h3>
          
          <div className='OurStorytext66'>
<img src="\images-and-icon\Frame 000.svg" alt="" />
            <p>
            M7 INVESTMENT LLC, is a privately held Investment Company. Operating as an International and Global Trade Company. M7 main headquarters is in USA & corporate office in Dubai, UAE. M7 INVESTMENT’s has established mutually beneficial relationships with international buyers, sellers and producers in the International Trade Business across the Globe. Today with its dynamic, experienced Directors ably supported by highly and well- educated staff, M7 INVESTMENT ‘s is working as reliable buyer, supplier, logistics advisor, and on time delivery provider for International Trade transactions. Rapid fulfillment and complete contract supply management has been the hallmark of the company.
                
            </p>
          </div>
          
        </div>
      </div>
    </section>


    {/* Our Fun Facts */}

<div className='container198'>
<h2 className='heading65'>Our Facts</h2>

<div className="boxparent656 mb65">

<div className="box767">
    <span><img src="\images-and-icon\star65.svg" alt="" /></span>

    <div>
    <h3>35+</h3>
    <p>Years of experience</p>
    </div>
  
</div>

<div className="box767">
    <span><img src="\images-and-icon\star65.svg" alt="" /></span>

    <div>
    <h3>35+</h3>
    <p>Years of experience</p>
    </div>
  
</div>

<div className="box767">
    <span><img src="\images-and-icon\star65.svg" alt="" /></span>

    <div>
    <h3>35+</h3>
    <p>Years of experience</p>
    </div>
  
</div>

<div className="box767">
    <span><img src="\images-and-icon\star65.svg" alt="" /></span>

    <div>
    <h3>35+</h3>
    <p>Years of experience</p>
    </div>
  
</div>

</div>

</div>


{/* footer */}

<Footer/>
</>
  );
}
