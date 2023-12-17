/* eslint-disable no-octal-escape */
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MansoryGrid = () => {
    return (
        <div className="mansory">
            <div className='mansory_piece'>
                <figure>
                    <img src={require('../assets/imgs/pictures/8.jpg')} alt="Festa" />
                </figure>
            </div>
            <div className='mansory_piece'>
                <p className='mansory_piece-title'>Onde os rebuçados caiem do céu</p>
                <p className='mansory_piece-text'>Nasceu em Sebaste, na atual Arménia no final do século III, onde veio a morrer, na perseguição do imperador Licínio, cunhado de Constantino Magno, nos princípios do Séc. IV. Seus pais eram abastados e puderam facultar-lhe os estudos, até à especialização em medicina. Já médico, preferiu retirar-se do mundo, para uma consagração total a Deus na vida eremita. Mas,morto o bispo da Cidade, os cristãos, que reconheciam nele um autêntico Santo, foram requesita-lo para lhe suceder. Aceitou, numa atitude humilde de serviço, mas continuando a viver na gruta onde estava antes, no monte Argeu. Dela descia à cidade sempre que as suas obrigações de pastor o exigiam.<br />
                    Foi preso por ordem de Licínio que, querendo obriga-lo a abandonar a sua fé para adorar os deuses pagãos, obteve dele esta resposta, com toda a convicção: " Não quero ser amigo deles, porque não quero arder eternamente com os demónios".<br />
                    Foi açoitado com vergas de boi, submetido aos garfos com puas de ferro, lançado a um lago gelado e por fim degolado.<br />
                    É invocado como padroeiro nas doenças da garganta.<br />
                    O seu culto irradiou a partir de Roma sobretudo no séc. XI, tornando-se muito popular em toda a Europa , na Idade Média onde nessa altura já havia, só na cidade Santa, mais de três dezenas de igrejas a ele consagradas. <br />
                    A liturgia venera-o no dia três de Fevereiro, em toda a igreja católica.</p>
                <Link to={'/SaoBraz/historia'}>História <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
            </div>
            <div className='mansory_piece'>
                <figure>
                    <img src={require('../assets/imgs/pictures/18.jpg')} alt="História" />
                </figure>
            </div>
            <div className='mansory_piece'>
                <p className='mansory_piece-title'>Atividades</p>
                <p className='mansory_piece-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nunc eu massa pretium feugiat. Aliquam aliquet sed dui lacinia commodo. Aliquam erat volutpat. Phasellus leo augue, aliquam non placerat ac, lacinia sit amet dui. Quisque ac vestibulum justo, ac pharetra orci. Vestibulum quis porta enim. Donec cursus arcu et lacus tristique fermentum. Praesent malesuada, nisl vestibulum tempus venenatis, mi urna porta urna, non varius felis turpis et massa. Phasellus iaculis fringilla placerat. Proin aliquet mauris in turpis viverra, non mattis felis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vehicula erat. Duis vitae elit neque. Cras sit amet interdum sapien. Maecenas egestas metus consequat massa imperdiet suscipit. Cras in posuere sem.
                    Praesent vel iaculis quam. Quisque pulvinar euismod consequat. Curabitur ac est ac dolor molestie facilisis. Etiam maximus libero at purus semper convallis id ac tortor. Curabitur semper lacus sit amet condimentum volutpat. Nulla dapibus congue nunc eget vestibulum. Nulla ultricies vehicula sem eget iaculis.
                    Vivamus ipsum justo, scelerisque non leo eget, consequat porta nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis leo eget risus rutrum blandit et eu risus. Cras ut varius risus. Nullam placerat vulputate ipsum.</p>
                <Link to={'/SaoBraz/atividades'}>Atividades <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
            </div>
            <div className='mansory_piece'>
                <figure>
                    <img src={require('../assets/imgs/pictures/6.jpg')} alt="Atividades" />
                </figure>
            </div>
            <div className='mansory_piece'>
                <p className='mansory_piece-title'>Quem somos?</p>
                <p className='mansory_piece-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nunc eu massa pretium feugiat. Aliquam aliquet sed dui lacinia commodo. Aliquam erat volutpat. Phasellus leo augue, aliquam non placerat ac, lacinia sit amet dui. Quisque ac vestibulum justo, ac pharetra orci. Vestibulum quis porta enim. Donec cursus arcu et lacus tristique fermentum. Praesent malesuada, nisl vestibulum tempus venenatis, mi urna porta urna, non varius felis turpis et massa. Phasellus iaculis fringilla placerat. Proin aliquet mauris in turpis viverra, non mattis felis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vehicula erat. Duis vitae elit neque. Cras sit amet interdum sapien. Maecenas egestas metus consequat massa imperdiet suscipit. Cras in posuere sem.
                    Praesent vel iaculis quam. Quisque pulvinar euismod consequat. Curabitur ac est ac dolor molestie facilisis. Etiam maximus libero at purus semper convallis id ac tortor. Curabitur semper lacus sit amet condimentum volutpat. Nulla dapibus congue nunc eget vestibulum. Nulla ultricies vehicula sem eget iaculis.
                    Vivamus ipsum justo, scelerisque non leo eget, consequat porta nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis leo eget risus rutrum blandit et eu risus. Cras ut varius risus. Nullam placerat vulputate ipsum.</p>
                <Link to={'/SaoBraz/mordomos'}>Mordomos <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
            </div>
            <div className='mansory_piece'>
                <figure>
                    <img src={require('../assets/imgs/pictures/19.jpg')} alt="Mordomos" />
                </figure>
            </div>
            <div className='mansory_piece'>
                <p className='mansory_piece-title'>Patrocinadores</p>
                <p className='mansory_piece-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nunc eu massa pretium feugiat. Aliquam aliquet sed dui lacinia commodo. Aliquam erat volutpat. Phasellus leo augue, aliquam non placerat ac, lacinia sit amet dui. Quisque ac vestibulum justo, ac pharetra orci. Vestibulum quis porta enim. Donec cursus arcu et lacus tristique fermentum. Praesent malesuada, nisl vestibulum tempus venenatis, mi urna porta urna, non varius felis turpis et massa. Phasellus iaculis fringilla placerat. Proin aliquet mauris in turpis viverra, non mattis felis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vehicula erat. Duis vitae elit neque. Cras sit amet interdum sapien. Maecenas egestas metus consequat massa imperdiet suscipit. Cras in posuere sem.
                    Praesent vel iaculis quam. Quisque pulvinar euismod consequat. Curabitur ac est ac dolor molestie facilisis. Etiam maximus libero at purus semper convallis id ac tortor. Curabitur semper lacus sit amet condimentum volutpat. Nulla dapibus congue nunc eget vestibulum. Nulla ultricies vehicula sem eget iaculis.
                    Vivamus ipsum justo, scelerisque non leo eget, consequat porta nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis leo eget risus rutrum blandit et eu risus. Cras ut varius risus. Nullam placerat vulputate ipsum.</p>
            </div>
            <div className='mansory_piece'>
                <figure>
                    <img src={require('../assets/imgs/pictures/12.jpg')} alt="Mordomos" />
                </figure>
            </div>
        </div>
    )
}

export default MansoryGrid;
