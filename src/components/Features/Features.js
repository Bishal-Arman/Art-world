import React from 'react';
import './Features.css'

const Features = () => {
  return (
    <div>
      <h1 className='text-center mt-5 text-info'>IMPROVE YOUR ART SKILLS</h1>
      <p className='text-center mb-3'>Our learning center offers group and personal lessons in Art and other modern arts for all ages and levels of knowledge.</p>
      <h5 className='text-center  mt-5'>I believe there are certain core skills that set the great artists apart from the average or mediocre. Here are the skills you should master to become one of the great ones:</h5>
      <h4 className='text-center text-success mt-4 mt-5'>
        <h4>*Line Weight ,Lines Contour Variation*</h4>
        <h4> *Drawing and Painting from Real Lifes*</h4>
        <h4>*Knowledge of Materials in  arts briefs*</h4>
        <h4>*Draw and Paint Proportionally rights*</h4>
        <h4>*Draw and Painting Realistically fines*</h4>
        </h4>

      <h1 className='text-center my-5'>This Features must be help for every students bright future</h1>
      <div className='about'>
        <div>
          <img src="./study.jpg" alt="" />
        </div>
        <div className='about-details features'>
          <h1 className='text-info'>Study Abroad</h1>
          <p>We offer study abroad opportunities specially designed to draw on the artistic strengths of our global partners and incorporate the rich history, techniques and traditions of each country.Beyond the classroom, student activities include field trips, performances, and interaction with professional artists. Train with master teachers who are industry professionals, immerse yourself in a new culture and have a once in a lifetime experience.</p>
          <h4>Application Deadlines:</h4>
          <h5><span>Spring 2017:</span> The application for spring 2017 is now closed.</h5>
          <h5><span>Fall 2017:</span> Thursday, February 16, 2017 at 5:00pm</h5>
        </div>
      </div>
      <div className='about '>
        <div>
          <img src="./summer.jpg" alt="" />
        </div>
        <div className='about-details features'>
          <h1 className='text-info'>Summer Programms</h1>
          <p>The Art World educates students in the language and process of making art in an environment where anyone who wishes to pursue an art education can realize his or her full potential.
            We fulfill this mission by offering high quality and accessible education and instruction in painting, drawing, sketch, sculpture and digital.</p>
          <h4>Application Deadlines:</h4>
          <h5><span>Session I:</span> Monday, May 22 - Sunday, July 2, 2017</h5>
          <h5><span>Session II:</span> Monday, July 3 - Sunday, August 13, 2017</h5>

        </div>
      </div>
      <div className='about'>
        <div>
          <img src="./special.jpg" alt="" />
        </div>
        <div className='about-details  features'>
          <h1 className='text-info'>Special Programms</h1>
          <p>Special Programs Here at Crown Art Special Programs our goal is to give students access to the arts. Whether you’re a visiting college student, high school student or working professional, our programs will give you introductory exposure to the performing, cinematic or media arts, as well as advanced-level training to grow your craft. Individual courses and semester-long programs are offered in New York City and abroad. We partner with universities and organizations around the globe to give you the highest caliber of training…</p>
          <h4>Application Deadlines:</h4>
          <h5><span>Summer Session I:</span> Monday, May 22 - Sunday, July 2, 2017</h5>
          <h5><span>Summer Session II:</span> Monday, July 3 - Sunday, August 13, 2017</h5>

        </div>
      </div>
    </div>

  );
};

export default Features;