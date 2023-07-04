import './style.css'

const Landing = ( ) => {
    return (
        <div className='landing'> 
            <div className="header">
                <h2>Talent Forgers</h2>
                <div className="buttons">
                    <button>Registrarse</button>
                    <button>Entrar</button>
                </div>
            </div>
            
            <div className="presentation">
                <div className="presentationContainer">
                    <h3>Habla un idioma en tan solo 10 minutos al dia`</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse amet modi. Dignissimos, beatae autem quisquam nobis esse vel atque maxime sapiente sequi eum earum veniam architecto iure quaerat repellat!</p>
                </div>
                <h2>Aca v ala imagen</h2>
                <img src="" alt="" />
            </div>

            <div className="whiteBack">
                <div className="selector">
                    <button>Idiomas</button>
                    <button>Programacion</button>
                    {/* ACA VA EL COMPONENTE DE RENDERIZADO DE CURSOS */}
                </div>
                <div className="mentores">
                    <h2>Mentores</h2>
                    {/* COMPONENTE DE RENDERIZADO DE PROFESORES */}
                </div>
                
                <div className="paraEmpresas">
                    <h2>Aca va una imagen</h2>
                    <h3>Buscas soluciones de idiomas para tu empresa?</h3>
                    <h3 id='textoVioleta'>Averigua como podemos ayudarte</h3>
                </div>
            </div>
            
            <div className="footer">
                <div className="contact-home">
                    <h3>Contact</h3>
                    <h3>Home</h3>
                </div>
                <div className="logo-redes">
                    <h2>Aca va el logo</h2>
                    <div className="redes">
                        <h3><a href="">Instagram</a></h3>
                        <h3><a href="">Facebook</a></h3>
                        <h3><a href="">YouTube</a></h3>
                        <h3><a href="">Linkedin</a></h3>
                        <h3><a href="">Whatsapp</a></h3>
                    </div>
                </div>
                <div className="about">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eligendi illo, ducimus accusantium quidem minima, et molestiae sint odit eveniet eos. Autem impedit beatae veniam necessitatibus, corrupti explicabo fugit quod.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;