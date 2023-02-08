import React from "react";
const about = () => {
  return (
    <>
      <style jsx>
        {`

        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap');
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px;
          min-height:100vh; 
        }
        
        .about-header {
          text-align: center;  
        }
        
        .about-title {
          font-size: 3rem;
          font-weight: bold;
          color: white;
          margin-bottom:2rem;
          font-family: 'Ubuntu Mono', monospace;
          text-transform: uppercase;
        }
        
        .about-subtitle {
          font-size:2.5rem;
          font-family: 'Source Code Pro', monospace;
          color: white;
          margin-top: 1rem;
          
        } 
        
        .about-content {
          max-width: 700px;
          text-align: center;
        }
        
        .about-description {
          font-size: 1.2rem;
          margin-top:2rem;
          color: white;
          line-height: 1.5;
          margin-bottom: 50px;
          font-family:monospace;  
        }

        @media (max-width: 700px){
          .about-title
          {
            font-size:2.5rem;  
          }
          .about-subtitle{
            font-size:1.9rem;
          }
          .about-description{
            font-size:1rem;
          }
          .about-content{
            width:85vw;
          }
        }
        
      `}
      </style>
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Me !</h1>
          <img className="hunterLogo" src="/hunterLogo.png" width={200} height={200}></img>
          <p className="about-subtitle">Web Developer & Blogger</p>
        </div>
        <div className="about-content">
          <p className="about-description">
            Hi there! I&apos;m a self-taught programmer and tech enthusiast with a passion for sharing my knowledge and experience through writing. I started this blog to share my journey as a coder and to help others who are just starting out or looking to expand their skills. Whether you&apos;re a beginner or a seasoned pro, I hope my posts will provide you with valuable insights and inspiration. Join me on this exciting journey of coding and discovery!
          </p>
        </div>

      </div>
    </>
  );
};

export default about;
