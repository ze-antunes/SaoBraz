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
                    <li><a className='menulink' href="/SaoBraz/contactos">Contactos</a></li>
                    <li><a className='menulink' href="/SaoBraz/mordomos">Mordomos</a></li>
                    <li><a className='menulink' href="/SaoBraz/atividades">Atividades</a></li>
                    <li><a className='menulink' href="/SaoBraz/historia">História</a></li>
                </ul>
            </div>
        </div>
    )
}