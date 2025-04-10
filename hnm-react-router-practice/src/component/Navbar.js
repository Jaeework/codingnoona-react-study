import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar = () => {
    const menuList = ['Women', 'Men', 'Kids', 'Home'];
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const goToHome = () => {
        navigate("/");
    }

    return (
        <div className="mb-5">
            <Container>
                <div className="login-area">
                    <div className='search-area d-flex d-lg-none'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' placeholder='검색' />
                    </div>
                    <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                </div>
                <div className='nav-section'>
                    <img onClick={goToHome}
                        width={100}
                        src='https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg'
                        alt='hnm logo' />
                </div>
                <div className='menu-area'>
                    <div></div>
                    <ul className='menu-list'>
                        {menuList.map((item) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                    <div className='search-area d-lg-flex d-none'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' placeholder='검색' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar