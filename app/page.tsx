import Link from "next/link";
import './page.tsx.css'; 

const Homepage = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Service">Service</Link></li>
        </ul>
      </nav>

      
      <div className="container">
        <h1 className="title">WELCOME TO MY WEBSITE</h1>
        <p className="p">This is the homepage content.</p>
      </div>
      
    </div>
  );
};

export default Homepage;


