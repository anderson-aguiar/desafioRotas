import { NavLink } from 'react-router-dom';
import './styles.css';

export default function CardProducts() {
    return (
        <main>
            <section className='container'>
                <div className='nav-products-container mt20'>
                    <NavLink to='computers' className={({isActive}) => isActive ? 'nav-product-item menu-active' : 'nav-product-item'}>
                        Computadores
                    </NavLink>
                    <NavLink to='eletronics' className={({isActive}) => isActive ? 'nav-product-item menu-active' : 'nav-product-item'}>
                        Eletrônicos
                    </NavLink>
                    <NavLink to='books' className={({isActive}) => isActive ? 'nav-product-item menu-active' : 'nav-product-item'}>
                        Livros
                    </NavLink>
                </div>
            </section>
        </main>
    );
}