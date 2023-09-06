import React from 'react';
import './About.css';

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        I'm a passionate web developer who loves building amazing web
        applications. This is a brief introduction about myself.
      </p>
      <p>
          Here are some of the Projects I have implemented:
        </p>
      <div className="container">
        <div className="card" id="card-1">
           <h2>TextUtils</h2>
           <p> "Textutils" is a website related to text processing, editing, or analysis. It provides a range of text-related tools and utilities. It includes features like text formatting, character count, word count, text case conversion (uppercase/lowercase), text summarization, language translation, and more.</p>
        </div>
        <div class="card" id="card-2">
            <h2>Expenso</h2>
            <p> "Expenso" is a website related to expense management, personal finance, etc. designed to help individuals and businesses manage their finances effectively.  It includes expense tracking, budgeting,income management, financial reports, goal setting, bank account integration, security, and lot more...</p>
        </div>
        <div class="card" id="card-3">
           <h2>Laundry Management System</h2>
           <p>A Laundry Management System website is designed to streamline and optimize laundry operations, whether for a commercial laundry business or an in-house laundry facility for an organization.</p>
        </div>
        <div class="card" id="card-4">
           <h2>Gym Website</h2>
           <p>A gym website serves as the digital hub for a fitness facility, providing information, services, and engagement opportunities for both current members and potential new clients. </p>
        </div>
    </div>
    </section>
  );
}

export default About;
