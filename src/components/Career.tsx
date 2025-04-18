import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>AI Dispatch</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
          Founded and spearheaded AI Dispatch, driving innovation in AI driven content,
          platform development, and strategic partnerships to scale a forward thinking
          newsletter, media and startup ecosystem.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Executive</h4>
                <h5>Physics Mindboggler</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led and expanded business development initiatives, including client
              acquisition,partnership strategies, and market analysis to drive growth for
              educationalprograms and services at Physics Mindboggler.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>WeDidIT</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
          Contributed to content creation and strategy as a Blogger and Video Editor,
          developing engaging blogs and videos to enhance brand visibility
          and audience engagement at WeDidIT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
