import './HomePage.css';
import githubIcon from '../../assets/githubIcon.gif';
import GeeksforGeeks from '../../assets/GeeksforGeeks.png';
import Linkedin from '../../assets/linkedin.png';

function HomePage(){


    return (
        <div className='homepage_container'>
            <div className='homepage_left'>
                    <p className='homepage_left_h1'> 
                        <span className='red_color'> Hi, </span> my name is
                    </p>
                    <p className='homepage_left_h2'>
                        Ayush Luthra
                    </p>
                    <p className='homepage_left_h3'>
                        Student at <span>Lovely Professional University </span>
                    </p>
                    <p className='homepage_left_discription'>
                    I am Currently Pursing Masters in computer Application(MCA) From Lovely Professional University (2025)  I have good expertise in DSA (Data structures and algorithms ) with C++ OPPs concepts and I love giving contests on different coding platforms like Leetcode , CodeForces , CodeChef, etc. (competitive programing) .Besides Competitive Programming, I'm also good at Web Development - HTML, CSS, and JavaScript , react-js . I also Take Party In various Hackathon and Coding Competitions , I was a Winner Of a Coding Competition that Ever So Clever Organized by Doaba College Jalandhar and Recently I was Runner Up at an Coding Event Coder's Elite That was Organized By Lovely Professional University  
                    Currently, I am looking for a Opportunity  that would allow me to demonstrate and enhance my skills.
                    </p>
                    <div>
                        <a href="https://github.com/Ayushluthra2001" target="_blank">
                            <img className="homepage_logo" src={githubIcon} alt="GithubIcon" />
                        </a>
                        <a href="https://www.linkedin.com/in/ayushluthra62/" target="_blank">
                            <img className="homepage_logo" src={Linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://github.com/Ayushluthra2001" target="_blank">
                            <img className="homepage_logo" src={GeeksforGeeks} alt="GeeksForGeeks" />
                        </a>
                        <a href="https://github.com/Ayushluthra2001" target="_blank">
                            <img className="homepage_logo" src={"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"} alt="LeetCode" />
                        </a>
                        
                    </div>
                    <a href="mailto:ayushluthra62@gmail.com">
                        <button className='homepage_left-button'>Get in Touch</button>
                    </a>
            </div>


            <div className='homepage_right'>
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="gif" />
            </div>
        </div>
    )
}
export default HomePage;