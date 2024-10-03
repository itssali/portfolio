import React, { useEffect } from 'react';
import './App.css'; // Assuming your CSS is in App.css

function App() {
  useEffect(() => {
    // JavaScript functions from script.js
    const durationElements = document.querySelectorAll(".duration");

    durationElements.forEach(function (element) {
      const startDate = new Date(element.getAttribute("data-start"));
      const endDate = element.getAttribute("data-ended") ? new Date(element.getAttribute("data-ended")) : new Date();

      let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      let durationText = "";
      if (years > 0) {
        durationText += `${years} yr${years > 1 ? 's' : ''} `;
      }
      if (months > 0 || years === 0) { // Ensure we display months even if there are no years
        durationText += `${months} mo${months > 1 ? 's' : ''}`;
      }

      element.textContent = durationText.trim(); // Update the span with the calculated duration
    });

    // Calculate the coffee count
    const coffeeCountElement = document.getElementById('coffee-count');
    const currentDate = new Date();

    // Calculate the current date in Riyadh timezone (UTC+3)
    const riyadhTime = new Date(currentDate.toLocaleString("en-US", { timeZone: "Asia/Riyadh" }));
    const riyadhDate = riyadhTime.toISOString().split('T')[0];

    // Generate a random number between 4 and 9
    function generateRandomCoffeeCount() {
      return Math.floor(Math.random() * 6) + 4;
    }

    // Save the randomized coffee count in localStorage for 24 hours
    const savedDate = localStorage.getItem('coffeeDate');
    const savedCount = localStorage.getItem('coffeeCount');

    if (savedDate === riyadhDate && savedCount !== null) {
      coffeeCountElement.textContent = savedCount;
    } else {
      const randomCount = generateRandomCoffeeCount();
      localStorage.setItem('coffeeDate', riyadhDate);
      localStorage.setItem('coffeeCount', randomCount);
      coffeeCountElement.textContent = randomCount;
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a, .footer-nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Check if the href is a section link or a page link
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <div id="particles"></div>
        <img src="assets/pfp.jpeg" alt="Profile" id="profile-picture" />
        <h1>Ali</h1>
        <p className="title">Swift Dev / Singer & Songwriter</p>
        <div className="social-links">
          <a href="https://github.com/itssali" target="_blank" rel="noreferrer"><img src="assets/github.png" alt="GitHub" /></a>
          <a href="https://stackoverflow.com/users/23612069/ali-nasser" target="_blank" rel="noreferrer"><img src="assets/stack.png" alt="Stack Overflow" /></a>
          <a href="https://twitter.com/alijnxo" target="_blank" rel="noreferrer"><img src="assets/twitter.png" alt="Twitter/X" /></a>
          <a href="https://www.linkedin.com/in/alinasser04/" target="_blank" rel="noreferrer"><img src="assets/linkedin.png" alt="LinkedIn" /></a>
        </div>
        <div className="github-graph">
          <img src="https://ghchart.rshah.org/itssali" alt="GitHub Contributions Graph" />
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects/Skills</a>
          <a href="#work-history">Work History</a>
          <a href="#contact">Contact Me</a>
          <a href="https://anradio.alinasser.info">Podcast</a>
          <a href="https://music.alinasser.info">Music Career</a>
          <a href="https://blog.alinasser.info">Blog</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about">
        <h1>About Me</h1>
        <h2>I love tech and music. What I really enjoy is mixing my tech skills with my love for music and storytelling, whether that's in coding or songwriting :D</h2>
      </section>

      {/* Projects/Skills Section */}
      <section id="projects">
        <h2>Projects and Skills</h2>
        <div className="stats-container">
          <div className="stat-box">
            <h3 id="projects-count">32</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3 id="clients-count">3</h3>
            <p>Clients Served</p>
          </div>
          <div className="stat-box">
            <h3 id="coffee-count">0</h3>
            <p>Cups of Coffee Consumed</p>
          </div>
        </div>

        <div className="skills-container">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>Prolog</li>
            <li>C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Swift</li>
          </ul>
        </div>

        {/* Project Section */}
        <div className="project-container">
          <div className="project">
            <div className="project-content">
              <h3>OpenAI Fine-tuned Discord Chatbot Using Any Kind of Conversational Data</h3>
              <img src="assets/discordbot.jpg" alt="Discord Chatbot Project" className="project-img" />
            </div>
          </div>

          <div className="project">
            <div className="project-content">
              <h3>SwiftUI AI Macro Tracking iOS App Using Photos and a Chatbot</h3>
              <div className="project-img-group">
                <img src="assets/IMG_6604.PNG" alt="Macro Tracking App Screenshot 1" className="project-img" />
                <img src="assets/IMG_6606.PNG" alt="Macro Tracking App Screenshot 2" className="project-img" />
                <img src="assets/IMG_6605.PNG" alt="Macro Tracking App Screenshot 3" className="project-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section id="work-history">
        <h2>Work History</h2>
        
        <div className="job">
          <h3>Full Stack Developer</h3>
          <p><strong>Upwork · Freelance</strong></p>
          <p><em>Nov 2023 - <span className="duration" data-start="2023-11">Calculating...</span> - Present</em></p>
          <p>Program Creation and Python</p>
        </div>

        <div className="job">
          <h3>Swift Developer</h3>
          <p><strong>Infinite Isle · Self-employed</strong></p>
          <p><em>Apr 2023 - <span className="duration" data-start="2023-04">Calculating...</span> - Present</em></p>
          <p>Swift and SwiftUI</p>
        </div>

        <div className="job">
          <h3>Discord Bot Developer</h3>
          <p><strong>Discord · Self-employed</strong></p>
          <p><em>Apr 2021 - <span className="duration" data-start="2021-04">Calculating...</span> - Present</em></p>
          <p>Implemented ChatGPT into a Discord bot with virtual memory, coin system, and interactive features.</p>
        </div>

        <div className="job">
          <h3>Chief Executive Officer</h3>
          <p><strong>Infinite Isle</strong></p>
          <p><em>Aug 2022 - Mar 2023 - 8 mos</em></p>
          <p>Business Strategy, Development, and +3 skills</p>
        </div>

        <div className="job">
          <h3>Marketing Staff</h3>
          <p><strong>Infinite Isle · Clothing & Accessories</strong></p>
          <p><em>Aug 2022 - Mar 2023 - 8 mos</em></p>
          <p>Achieved results using Facebook/Meta ads for sales and SEO improvement.</p>
        </div>

        {/* Education */}
        <h2>Education</h2>

        <div className="education-item centered">
          <img src="assets/bau.png" alt="Beirut Arab University Logo" />
          <h3>Beirut Arab University (BAU)</h3>
          <p>Bachelor of Science - Computer Science</p>
          <p><em>2024 - 2029 (Expected)</em></p>
        </div>

        <div className="education-item centered">
          <img src="assets/concordia.png" alt="Concordia University Logo" />
          <h3>Concordia University</h3>
          <p>Bachelor of Engineering - Computer Engineering</p>
          <p><em>2022 - 2024</em></p>
          <p>SwiftUI, Swift, and +2 skills</p>
        </div>

        <div className="education-item centered">
          <img src="assets/alrowad.png" alt="AlRowad International School Logo" />
          <h3>AlRowad International School</h3>
          <p>IGCSE - O Level, AS and A-Level studies, Physics, Math, and Computer Science</p>
          <p><em>Nov 2018 - May 2022</em></p>
        </div>

        {/* Certificates */}
        <h2>Certificates</h2>
        <div className="certificate-item centered">
          <img src="assets/aff.png" alt="AFF IoT Logo" />
          <h3>AFF IoT 2019</h3>
          <p>Completion of a full Arduino kit course.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form" action="https://formspree.io/f/mdknpyer" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Your email (Not required if you don't want me to reach out to you):</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p id="form-status"></p>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-social-links">
          <a href="https://github.com/itssali" target="_blank" rel="noreferrer"><img src="assets/github.png" alt="GitHub" /></a>
          <a href="https://stackoverflow.com/users/23612069/ali-nasser" target="_blank" rel="noreferrer"><img src="assets/stack.png" alt="Stack Overflow" /></a>
          <a href="https://twitter.com/alijnxo" target="_blank" rel="noreferrer"><img src="assets/twitter.png" alt="Twitter/X" /></a>
          <a href="https://www.linkedin.com/in/alinasser04/" target="_blank" rel="noreferrer"><img src="assets/linkedin.png" alt="LinkedIn" /></a>
        </div>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects/Skills</a>
          <a href="#work-history">Work History</a>
          <a href="#contact">Contact Me</a>
          <a href="https://anradio.alinasser.info">Podcast</a>
          <a href="https://music.alinasser.info">Music Career</a>
          <a href="https://blog.alinasser.info">Blog</a>
        </nav>
        <p className="trademark">Ali Nasser™</p>
      </footer>
    </div>
  );
}

export default App;