import './Service.css';
import Link from 'next/link';

const ServicePage = () => {
  return (
    <div className='container'>
      <br /><h1 className='title'>Welcome to the Service Page</h1>
      
      <br />
      
      <Link href="/Service/Nestedpage">
      <button className="btn">Go to Nested Service Page</button>
      </Link>
    </div>
  );
};

export default ServicePage;


