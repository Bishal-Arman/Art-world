import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center text-info'>About Art World</h2>
            <h6 className='text-center '>Art World offers nationally accredited undergraduate, graduate, and post-baccalaureate programs to more than 2,800 students from all over the world.</h6>
            <p className='mx-5'>
                Our school has an educational philosophy built upon an integrative approach to art, giving students exceptional opportunities to develop their creative and critical abilities, while working with leading faculty who include many of the famed artists.
            </p>
            <div className='about'>
                <div>
                    <img src="./about.jpg" alt="" />
                </div>
                <div className='about-details'>

                    <h5 className='text-primary'>The Art is a well resourced and highly professional school, established in 2008 in response to the rarity of rigorous, representational art education.The Art World educates students in the language and process of making art in an environment where anyone who wishes to pursue an art education can realize his or her full potential.
                    We fulfill this mission by offering high quality and accessible education and instruction in painting, drawing, sketch, sculpture and digital.</h5>
                    <p><a href="https://www.youtube.com/watch?v=ewMksAbgdBI">Click for the Vedio</a></p>
                </div>
            </div>
            <div className='ms-5 mt-5'>
                <p>Enroll in individual courses of your choice or register for a summer intensive with a pre-designed curriculum. You can build your resume with an internship or take classes to put you on a new career path. Pursue that artistic field you've always been interested.</p>
                <h5><span>Summer Session I:</span> Monday, May 22 - Sunday, July 2, 2017</h5>
                <h5><span>Summer Session II:</span> Monday, July 3 - Sunday, August 13, 2017</h5>
                <p><a target='-blank' href="http://www.artcenter.edu/online/overview.html">Learn More</a></p>
            </div>
        </div>
    );
};

export default About;