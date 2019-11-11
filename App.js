
function App() {
    return (
        <header>
            <h1>Sally Student</h1>
            <address>
                <p>(555) 555-5555</p>
                <a href="mailto:Sally.Student@tmail.com">Sally.Student@tmail.com</a>
                <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" 
      alt="a portrait of Sally Student"> />
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
        </main>
    );
  };

  ReactDOM.render(<App />, document.querySelector('#application-root'));

  export default {
      
  }