import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Samuel from '../img/samu_profile.svg';
import Diego from '../img/diego_profiile.svg';
import Kauan from '../img/kauan_profile.svg';
import '../css/Equipe.scss';



function Equipe ({}) {
    
    return (
        <>
        <Header/>
        <main className="cards">
        <h1 className="title">Nossa Equipe</h1>
        <section className="card contact">
            <img src={Samuel} alt="Samuel Rocha"/>  
            <h3>Samuel Rocha</h3>
            <span>Desenvolvedor</span>
            <a href="https://github.com/samielss" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
        <section className="card contact">
            <img src={Samuel} alt="Kauan Pinheiro"/>  
            <h3>Kauan Pinheiro</h3>
            <span>DBA</span>
            <a href="https://github.com/samielss" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
        <section className="card contact">
            <img src={Samuel} alt="Diego Sampaio"/>  
            <h3>Diego Sampaio</h3>
            <span>Designer</span>
            <a href="https://github.com/diego20232" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
        <section className="card contact">
            <img src={Samuel} alt="Jennifer Melo"/>  
            <h3>Brunao</h3>
            <span>Gestor de projeto</span>
            <a href="https://github.com/samielss" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
        <section className="card contact">
            <img src={Samuel} alt="Gabriel Miranda"/>  
            <h3>Gabriel</h3>
            <span>DBA</span>
            <a href="https://github.com/GabrielMiranda05" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
    </main>
    <Footer/>
    </>
    )
}




export default Equipe;