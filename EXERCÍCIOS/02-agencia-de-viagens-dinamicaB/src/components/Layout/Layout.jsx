import { Footer, Header } from '../index';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <div className='app'>
        {children}
      </div>
      <Footer/>
    </div>
  );
}
