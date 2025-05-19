
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins bg-white'>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;