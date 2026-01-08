import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Proyectos</h1>
            <h3>de Software</h3>
            <br />
            <p>
                A continuación encontrarás algunos de mis proyectos de software favoritos
                en los que he trabajado durante los últimos años, incluyendo proyectos profesionales
                y personales que demuestran mis habilidades en desarrollo web.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Unityagency</h2>
                <br />
                <p>
                    Unityagency es una agencia de fotografía y marketing digital con sede en Granada.
                    Durante mi tiempo allí, desarrollé y mantuve sitios web corporativos utilizando
                    tecnologías modernas como HTML, CSS, JavaScript y PHP.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figura 1:</b> Sitio web corporativo para agencia de marketing y fotografía.
                        </sub>
                    </p>
                </div>
                <p>
                    Como desarrollador web en Unityagency, trabajé en múltiples proyectos para diversos clientes,
                    enfocándome en crear sitios web responsivos, optimizados para SEO y con excelente rendimiento.
                    Implementé soluciones personalizadas con WordPress y WooCommerce, adaptándome a las necesidades
                    específicas de cada proyecto.
                </p>
                <br />
                <h3>Enlaces:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://unityagency.es"
                        >
                            <p>
                                <b>[Sitio Web]</b> - unityagency.es
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    <b>Tecnologías:</b> HTML5, CSS3, JavaScript, PHP, WordPress, WooCommerce
                    <br />
                    <b>Rol:</b> Desarrollador Web (Enero 2025 - Noviembre 2025)
                    <br />
                    <b>Características:</b> Diseño Responsivo, Optimización SEO, Integración WordPress
                </p>
            </div>
            <div className="text-block">
                <h2>Fabricantes de Complementos</h2>
                <br />
                <p>
                    Fabricantes de Complementos es un sitio web corporativo multiidioma que desarrollé
                    para una empresa dedicada a la fabricación de complementos y accesorios. Este proyecto
                    destaca por su capacidad de presentar contenido en 6 idiomas diferentes, facilitando
                    el alcance internacional de la empresa.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figura 2:</b> Sitio web multiidioma desarrollado con HTML5, CSS3 y JavaScript.
                        </sub>
                    </p>
                </div>
                <p>
                    El sitio fue construido utilizando HTML5, CSS3, JavaScript y PHP, con un enfoque
                    especial en la optimización SEO y la experiencia de usuario. Implementé un sistema
                    de traducción que permite a los visitantes cambiar entre idiomas de forma fluida,
                    manteniendo la coherencia del diseño y la funcionalidad en todas las versiones
                    lingüísticas.
                </p>
                <br />
                <h3>Enlaces:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://fabricantesdecomplementos.com"
                        >
                            <p>
                                <b>[Sitio Web]</b> - fabricantesdecomplementos.com
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    <b>Tecnologías:</b> HTML5, CSS3, JavaScript, PHP
                    <br />
                    <b>Características:</b> Multiidioma (6 idiomas), Diseño Responsivo, Optimización SEO
                </p>
            </div>
            <div className="text-block">
                <h2>Café La Malicia - E-commerce</h2>
                <br />
                <p>
                    Café La Malicia es un proyecto de comercio electrónico completo que desarrollé
                    utilizando WordPress y WooCommerce. El sitio permite a los clientes explorar el
                    catálogo de productos, realizar pedidos online y gestionar sus compras de manera
                    intuitiva.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figura 3: </b> Plataforma de e-commerce con WooCommerce,
                                sistema de pagos integrado y gestión de inventario.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Este proyecto presenta varios desafíos técnicos interesantes, incluyendo la
                    integración de pasarelas de pago, gestión de inventario en tiempo real, y
                    optimización del rendimiento para manejar un alto volumen de productos y
                    transacciones. Implementé un diseño responsivo que garantiza una experiencia
                    de compra fluida tanto en dispositivos móviles como de escritorio.
                </p>
                <br />
                <h3>Enlaces:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://cafelamalicia.com"
                        >
                            <p>
                                <b>[Sitio Web]</b> - cafelamalicia.com
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    <b>Tecnologías:</b> WordPress, WooCommerce, PHP, CSS
                    <br />
                    <b>Características:</b> Carrito de compras, Pasarela de pago, Gestión de inventario, Panel de administración
                </p>
            </div>
            <div className="text-block">
                <h2>El Nopal - Sistema de Reservas</h2>
                <br />
                <p>
                    El Nopal es una aplicación web completa para un restaurante mexicano que incluye
                    un sistema de reservas online. Desarrollé este proyecto utilizando JavaScript,
                    React para el frontend, y Node.js con MongoDB para el backend, creando una
                    solución full-stack robusta y escalable.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figura 4:</b> Sistema de reservas con React y Node.js,
                            incluyendo gestión de mesas y calendario interactivo.
                        </sub>
                    </p>
                </div>
                <p>
                    Este proyecto me permitió profundizar en el stack MERN (MongoDB, Express, React, Node.js).
                    Implementé funcionalidades como autenticación de usuarios, gestión de reservas en tiempo real,
                    notificaciones por email, y un panel de administración para que el restaurante pueda gestionar
                    todas las reservas de manera eficiente.
                </p>
                <br />
                <h3>Enlaces:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yalilms/elnopal-app"
                        >
                            <p>
                                <b>[GitHub]</b> - El Nopal Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    <b>Tecnologías:</b> JavaScript, React, MongoDB, Node.js, Express
                    <br />
                    <b>Características:</b> Sistema de reservas, Autenticación de usuarios, Panel de administración, Gestión en tiempo real
                </p>
            </div>
            <div className="text-block">
                <h2>Otros Proyectos</h2>
                <br />
                <p>
                    Además de los proyectos mencionados, también he trabajado en:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>SoftCrown</b> - Proyecto personal en desarrollo utilizando TypeScript,
                            JavaScript y MySQL -{' '}
                            <a href="https://softcrown.es" target="_blank" rel="noreferrer">
                                softcrown.es
                            </a>
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    Si estás interesado en colaborar en algún proyecto o simplemente quieres charlar
                    sobre desarrollo web, no dudes en contactarme a través de mi email o redes sociales.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
