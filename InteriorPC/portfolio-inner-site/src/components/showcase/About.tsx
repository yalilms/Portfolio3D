import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Bienvenido</h1>
            <h3>Soy Yalil Musa Talhaoui</h3>
            <br />
            <div className="text-block">
                <p>
                    Soy Desarrollador de Software especializado en desarrollo web full-stack y aplicaciones multiplataforma.
                    Actualmente curso 2º año de DAM (Desarrollo de Aplicaciones Multiplataforma) en Granada, España,
                    mientras trabajo profesionalmente en proyectos de software que abarcan desde aplicaciones web
                    corporativas hasta sistemas de e-commerce y soluciones modernas con React y Node.js.
                </p>
                <br />
                <p>
                    Mi enfoque se centra en crear soluciones tecnológicas robustas, escalables y con alta calidad de código.
                    Si estás buscando colaborar en algún proyecto o simplemente quieres intercambiar ideas sobre desarrollo,
                    no dudes en contactarme a través de{' '}
                    <Link to="/contact">este formulario</Link> o directamente en{' '}
                    <a href="mailto:yalil.ms72@gmail.com">
                        yalil.ms72@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>Sobre Mí</h3>
                <br />
                <p>
                    Mi trayectoria en el desarrollo de software combina formación técnica sólida con experiencia
                    práctica en proyectos reales. Actualmente resido en Granada, España, donde curso el segundo
                    año de DAM (Desarrollo de Aplicaciones Multiplataforma) en el IES Hermenegildo Lanz, mientras
                    trabajo profesionalmente como Desarrollador de Software.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figura 1:</b> Desarrollando este sitio web :)
                        </sub>
                    </p>
                </div>

                <p>
                    Mi experiencia profesional abarca el desarrollo de aplicaciones web corporativas multiidioma,
                    sistemas de e-commerce con WooCommerce, y aplicaciones modernas utilizando tecnologías como
                    React, Node.js y bases de datos relacionales. Me especializo en arquitecturas full-stack que
                    priorizan la escalabilidad, el rendimiento y la mantenibilidad del código. Puedes explorar
                    algunos de mis proyectos más destacados en{' '}
                    <Link to="/projects/software">Proyectos de Software</Link>.
                </p>
                <br />
                <p>
                    Mi formación técnica comenzó con el grado de Sistemas Microinformáticos y Redes en Melilla,
                    donde realicé prácticas como Técnico Informático en el IES Miguel Marmolejo. Esta base en
                    infraestructura y redes me proporciona una visión integral del ciclo completo de desarrollo,
                    desde la arquitectura del sistema hasta el despliegue y mantenimiento de aplicaciones en
                    producción.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Stack Tecnológico</h3>
                        <br />
                        <p>
                            Mi stack tecnológico abarca el desarrollo full-stack con tecnologías modernas.
                            En el frontend trabajo con HTML5, CSS3, JavaScript (ES6+), React y frameworks de
                            diseño responsivo. En el backend desarrollo con Java, Python y Node.js, implementando
                            APIs RESTful y arquitecturas escalables. Gestiono bases de datos relacionales (MySQL)
                            y utilizo Git para control de versiones y colaboración en equipo.
                        </p>
                        <br />
                        <p>
                            Cuento con certificaciones profesionales en Python (OpenWebinars) e Inteligencia
                            Artificial y Productividad con Google. Actualmente me especializo en desarrollo de
                            aplicaciones multiplataforma con React Native, arquitecturas de microservicios y
                            mejores prácticas de ingeniería de software moderna.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figura 2:</b> Yalil Musa, 2025
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Gracias por visitar mi portfolio. Si estás interesado en colaborar en algún proyecto,
                    discutir oportunidades laborales o simplemente intercambiar ideas sobre tecnología y
                    desarrollo de software, estaré encantado de conversar. Puedes encontrarme en LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/yalil-musa/"
                    >
                        linkedin.com/in/yalil-musa
                    </a>{' '}
                    o a través de mi email profesional.
                </p>
                <br />
                <p>
                    Para consultas o propuestas, no dudes en contactarme a través de la{' '}
                    <Link to="/contact">página de contacto</Link> o directamente en{' '}
                    <a href="mailto:yalil.ms72@gmail.com">
                        yalil.ms72@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
