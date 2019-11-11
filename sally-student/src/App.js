import React from 'react';



function App() {
  return (
  <div>
    <header>
      <h1>Sally Student</h1>
      <address>
        <p>(555) 555-5555</p>
        <a href="mailto:Sally.Student@tmail.com">Sally.Student@tmail.com</a>
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" 
        alt="a portrait of Sally Student" />
      </address>
    </header>

    <main>
        <section>
        <h2>Summary</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>

        <section>
            <h2>Education</h2>
              <h3>Western Kentucky University</h3>
                <h4>Bachelor of Science in Software Engineering</h4>
                <p>Aug '13- Dec '17</p>

            <ul>
              <li>Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.</li>
              <li>Ultricies lacus sed turpis tincidunt id.</li>
            </ul>
        </section>
        <section>
        <h2>Experience</h2>
          <h3>Junior Web Developer</h3>
            <h4>Fake Company</h4>
            <p>Jan '18 - Current</p>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</li>
              <li>Etiam sit amet nisl purus in mollis nunc sed.</li>
              <li>Risus feugiat in ante eros in cursus turpis massa tincidunt metus dictum.</li>
            </ul>

          <h3>Software Engineer Intern</h3>
            <h4>Another Fictional Company</h4>
            <p>May '17 - Aug '17</p>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Sed vulputate mi sit amet mauris commodo quis.</li>
              <li>Nunc sed id semper risus in metus vulputate eu scelerisque felis imperdiet.</li>
            </ul>
      </section>

      <section>
        <h2>Skills</h2>
          <ul>
            <li>Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.</li>
            <li>Ultricies lacus sed turpis tincidunt id.</li>
            <li>Arcu dui vivamus arcu felis bibendum ut tristique et egestas.</li>
            <li>Urna nec tincidunt praesent semper feugiat nibh sed.</li>
          </ul>
      </section>
    </main>
  </div>
  );
}


export default App;
