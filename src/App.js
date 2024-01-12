import './App.css';
import HasnodeArticles from './Blogs';
// import Blogs from './Blogs';

function App() {
  return (
    <div className="App">
      <header>
        <li><a href='#intro'>./intro</a></li>
        <li><a href='#about'>./about</a></li>
        <li><a href='#skills'>./skills</a></li>
        <li><a href='#projects'>./projects</a></li>
        <li><a href='#blogs'>./blogs</a></li>
        <li><a href='#contact'>./contact</a></li>
      </header>

      <main className='main-section'>
        <div id='intro' className='section'>
          <h1>intro</h1>
          {/* <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a> */}
          <p>$ whoami</p>
          <h2>Hi, I am Emmanuella.</h2>
          <h3>A DevOps Engineer fascinated with automation and streamlining software delivery.</h3>
          <h1 className='bottom-of-the-barrel'>./intro</h1>
        </div>

        <div id='about' className='section'>
          <h1>about me</h1>
          <h2>Emmanuella Adeka</h2>
          <h4>DevOps Engineer</h4>
          <br></br>
          <br></br>
          <p style={{width:"70%"}}>Hi again, I'm Emmanuella, a DevOps Engineer with a passion for crafting seamless digital experiences.
          <br></br>
          <br></br>
          For the past three years, I've been on a thrilling journey as a Full Stack Web Developer, weaving my way through the intricate tapestry of front-end finesse and back-end brilliance. From pixel-perfect designs to robust server-side architecture, I've reveled in the art of creating web magic that not only looks good but works even better.
          <br></br>
          <br></br>
          Picture me as the tech-savvy wizard waving my magic wand (a keyboard, obviously) to transform complex problems into elegant solutions. Whether it's automating tedious tasks, optimizing workflows, or ensuring that your application runs smoother than a perfectly executed git merge, I'm your go-to DevOps sorcerer.
          <br></br>
          <br></br>When I'm not untangling the mysteries of code or fine-tuning deployment pipelines, you can find me sipping on a cup of coffee, contemplating the next algorithmic conquest, or maybe even trying my hand at a new tech stack just for the thrill of it.</p>

          <h1 className='bottom-of-the-barrel'>./about</h1>
          {/* <h1 className='bottom-of-the-barrel'>¡about</h1> */}
        </div>

        <div id='skills' className='section'>
          <h1>skills</h1>
          <h3>programming languages</h3>
          <p>Python, Bash, JavaScript, PHP</p>

          <h3>cloud</h3>
          <p>AWS</p>

          <h3>container orchestration</h3>
          <p>Docker, Kubernetes</p>

          <h3>ci/cd</h3>
          <p>Jenkins, GitHub Actions</p>

          <h3>infrastructure as code</h3>
          <p>Terraform, CloudFormation</p>

          <h3>configuration management</h3>
          <p>Ansible</p>

          <h3>monitoring & logging</h3>
          <p>Prometheus, Grafana, ELK Stack</p>

          <h1 className='bottom-of-the-barrel'>./skills</h1>
        </div>

        <div id='projects' className='section'>
          <h1>projects</h1>
          <ol>
            <li>Optimised CI/CD Pipeline</li>
            <li>Jectam</li>
          </ol>
          <h1 className='bottom-of-the-barrel'>./projects</h1>
        </div>

        <div id='blogs' className='section'>
          <h1>blogs</h1>
          <p>I mostly write at: <a href='https://hashnode.com/@ellaadeka'>hashnode</a></p>
          <p>I subsequently write at: <a href='https://dev.to/ella-adeka'>dev.to</a></p>
          
          <h3>Here are some of my most recent blogs:</h3>
          <HasnodeArticles />

          <h1 className='bottom-of-the-barrel'>./blogs</h1>
        </div>

        <div id='contact' className='section'>
          <h1>get in contact</h1>
          <p>Email: <a href='mailto:eoadeka@gmail.com'>eoadeka@gmail.com</a></p>
          <p>GitHub: <a href='https://github.com/ella-adeka/'>ella-adeka</a></p>
          <p>Hashnode: <a href='https://hashnode.com/@ellaadeka'>@ellaadeka</a></p>
          <p>LinkedIn: <a href='https://www.linkedin.com/in/emmanuella-onyowo-adeka/'>Emmanuella Onyowo Adeka</a></p>
          <p>Twitter: <a href='https://twitter.com/a_deque_a'>Ella Adeka</a></p>
          <h1 className='bottom-of-the-barrel'>./contact</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
