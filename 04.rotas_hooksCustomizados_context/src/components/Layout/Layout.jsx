import { Header } from '../index';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='app'>
        {children}
      </div>
    </>
  );
}
