import './Headshot.css';
import Nina_Headshot from '../../Assets/Nina_Headshot2.png';

export const Headshot = () => {
  return (
    <div id="home" className="headshot">
      <h1>Nina Paprocki</h1>
      <div className="headshot-sections">
        <img className="headshot-img" src={Nina_Headshot} alt="Nina Paprocki" />
        <div className="headshot-right">
          <p>
            I am a UI/UX Developer studying at Northeastern University,
            specializing in Human Centered Computing. My mission is to
            revolutionize product development by integrating minimalistic and
            outstanding design. I am dedicated to enhancing accessibility,
            transparency, and usability in every project I undertake.
          </p>
        </div>
      </div>
      <div className="headshot-action">
        <a href="#contact" className="headshot-contact">Contact Me</a>
        <a href="https://your-resume-link" target="_blank" rel="noopener noreferrer" className="headshot-resume">My Resume</a>
      </div>
    </div>
  );
};