import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='header'>
            <Link className='header__link' to={'/SaoBraz/'}>
                <img src={require('../assets/imgs/São Braz.png')}  alt="sao_braz" />
            </Link>
            <input type="checkbox" id="menutoggle" />
            <label htmlFor="menutoggle" className='hamburger'>
                <span className='bum bum-top'>
                    <span className='bum-crust bum-crust-top'></span>
                </span>
                <span className='bum bum-bottom'>
                    <span className='bum-crust bum-crust-bottom'></span>
                </span>
            </label>
            <div className='menu'>
                <ul className='menu-list'>
                    <li><Link className='menulink' to={'/SaoBraz/contactos'}>Contactos</Link></li>
                    <li><Link className='menulink' to={'/SaoBraz/mordomos'}>Mordomos</Link></li>
                    <li><Link className='menulink' to={'/SaoBraz/atividades'}>Atividades</Link></li>
                    <li><Link className='menulink' to={'/SaoBraz/historia'}>História</Link></li>
                </ul>
            </div>
        </div>
    )
}