function Home() {
  return (
    <main>

      <section className="hero">

        <h1>
          Prepare Yourself for Your Dream Job
        </h1>

        <p>
          Practice aptitude, coding, technical skills
          and prepare for your placement interviews.
        </p>

        <button>
          Start Preparing
        </button>

      </section>


      <section className="features">

        <h2>
          Everything You Need for Placement Preparation
        </h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>Aptitude</h3>
            <p>
              Practice quantitative, logical and verbal questions.
            </p>
          </div>

          <div className="feature-card">
            <h3>Coding</h3>
            <p>
              Improve your programming and DSA skills.
            </p>
          </div>

          <div className="feature-card">
            <h3>Interview</h3>
            <p>
              Prepare for technical and HR interviews.
            </p>
          </div>

          <div className="feature-card">
            <h3>Resume</h3>
            <p>
              Create and manage your professional resume.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;