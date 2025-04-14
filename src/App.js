import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from "react";
import SliderTwo from './components/SliderTwo';
import SliderOne from './components/SliderOne';

const faqData = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    question: "Will investors be able to have multiple Common Account Numbers?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
   <>
   <Header />
   <SliderOne />
   <section>
    <div className="container">
        <div className="exam-section">

            <div className="exam-sidebar">
              <h2>Upcoming<br/>Examinations</h2>
              <p>Enquire about the examination &<br/>register for the exams</p>
            </div>
       
            <div className="exam-cards">
        
              <div className="exam-card">
                <img src="logo/event.svg" alt="calendar-icon" />
                <div className="exam-info">
                  <h4>02th October 2014</h4>
                  <p>Level 1 exam</p>
                </div>
              </div>
        
              <div className="exam-card">
                <img src="logo/event.svg" alt="calendar-icon" />
                <div className="exam-info">
                  <h4>Nov-Dec 2016</h4>
                  <p>Level 2</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
        
              <div className="exam-card">
                <img src="logo/event.svg" alt="calendar-icon" />
                <div className="exam-info">
                  <h4>Ongoing this year</h4>
                  <p>Level 3 (Grad)</p>
                </div>
              </div>
        
            </div>
        
          </div>
    </div>
</section>

   <SliderTwo />

   {/* stats section */}
   <section className="stats-section">
    <div className="container">
        <div className="">
            <div className="stats-container">
        
              <div className="stat-box">
                <p>Lorem ipsum</p>
                <div className="stat-number">123+</div>
                <div className="stat-title">Lorem ipsum</div>
                <p className="stat-desc">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
              </div>
        
              <div className="stat-box">
                <p>Lorem ipsum</p>
                <div className="stat-number">12+</div>
                <div className="stat-title">Lorem ipsum</div>
                <p className="stat-desc">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
              </div>
        
              <div className="stat-box">
                <p>Lorem ipsum</p>
                <div className="stat-number">12+</div>
                <div className="stat-title">Lorem ipsum</div>
                <p className="stat-desc">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
              </div>
        
              <div className="stat-box">
                <p>Lorem ipsum</p>
                <div className="stat-number">123</div>
                <div className="stat-title">Lorem ipsum</div>
                <p className="stat-desc">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
        
            </div>
          </div>
    </div>
</section>

   {/* FAQ */}
   <section className="faq-section">
      <div className="container">
        <h2>FAQ</h2>
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="icon">
                <i className={`fas ${activeIndex === index ? "fa-minus" : "fa-plus"}`}></i>
              </span>
            </button>
            <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* email */}
   <section className="email-section">
    <div className="container">
        <section className="subscribe-section">
            <div className="subscribe-content">
              <h2>Subscribe</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
              <form className="subscribe-form">
                <input type="email" placeholder="Enter your Email Address" required/>
                <button type="submit">Subscribe Now ►</button>
              </form>
            </div>
        
            <div className="subscribe-img">
              <img src="logo/email-img.svg" alt="Subscribe Image"/>
            </div>
          </section>
    </div>
</section>

   <Footer />
   </>
  );
}

export default App;
