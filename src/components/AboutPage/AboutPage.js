import './AboutPage.css';

function AboutPage(){
    return (
        <div>
          <MainContent />
        </div>
      );
}

function MainContent(){
    return (
        <section className="about-page">
        <div className="about-content">
            <h1>About Me</h1>
            
            <div className="section">
            <h2>Background</h2>
            <p>
                I am a senior at CSUF, and I'm set to graduate in May 2025. I attended UCI for a year in 2018,
                and transferred to Orange Coast College in 2019. I earned my Associate's Degree in Computer Science
                in 2022 and transferred that same year to CSUF. In addition I've had 3 years of work experience in
                retail at Party City, JCPenny, Macy's and Staples that taught me critical problem solving and customer
                service experience. I've also worked at Amazon as a Sort Associate for 4 years, where I have learned
                time management and problem solving skills. 
            </p>
            </div>
            
            <div className="section">
            <h2>Education</h2>
            <p><strong>Orange Coast College</strong><br />
            Associate's Degree in Computer Science<br />
            2019 – 2022</p>
    
            <p><strong>California State University, Fullerton</strong><br />
            Bachelor's Degree in Computer Science<br />
            2022 – 2025</p>
            </div>
            
            <div className="section">
            <h2>Interests</h2>
            <p>
                Outside of school and work, I enjoy cooking and trying new foods and recipes. While I love trying new
                foods and flavors, it is a great outlet to explore different cultures and traditions. One of my favorite
                foods to try is coffee and I'm always trying new cafes. To stay active and maintain focus, another of my interests
                is working out and it's instilled in me discipline, perseverance, and a commitment to personal growth. I also
                love playing video games, especially single player and strategy games.
            </p>
            </div>
            
            <div className="resume-link">
            <a href="https://docs.google.com/document/d/1CW1Gm2DXtOR5eoamkJiJbuAz-ByFJQUtvf44zZLyH5I/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View My Resume
            </a>
            </div>
        </div>
        </section>
  );
}

export default AboutPage;