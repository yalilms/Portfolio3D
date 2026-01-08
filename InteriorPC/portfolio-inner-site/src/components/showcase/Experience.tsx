import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Unityagency</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://unityagency.es'}
                        >
                            <h4>www.unityagency.es</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Desarrollador de Software</h3>
                        <b>
                            <p>Enero 2025 - Enero 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Unityagency es una agencia de fotografía y marketing digital con sede en Granada.
                    Me incorporé a la empresa con el objetivo de establecer un nuevo departamento de desarrollo
                    de software, en acuerdo con el CEO, para ofrecer a los clientes de la agencia soluciones
                    tecnológicas integrales: desde aplicaciones web y páginas corporativas hasta aplicaciones
                    de escritorio y móviles, adaptándome a las necesidades específicas de cada proyecto.
                </p>
                <br />
                <h3 style={styles.indent}>Proyectos Desarrollados y Mantenidos:</h3>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Sitio Web Oficial de Unityagency</b> - Desarrollé y mantengo la página web
                            corporativa de la agencia ({' '}
                            <a href="https://unityagency.es" target="_blank" rel="noreferrer">
                                unityagency.es
                            </a>
                            ), utilizando tecnologías modernas para garantizar una presencia profesional online.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Fabricantes de Complementos</b> - Desarrollé y mantuve una página web completa
                            con HTML, CSS, JavaScript y PHP ({' '}
                            <a href="https://fabricantesdecomplementos.com" target="_blank" rel="noreferrer">
                                fabricantesdecomplementos.com
                            </a>
                            ), implementando campañas de publicidad con Google Ads para maximizar el alcance
                            y conversión del negocio.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Restaurante Las Rejas</b> - Desarrollo y mantenimiento continuo del sitio web ({' '}
                            <a href="https://restaurantelasrejas.com" target="_blank" rel="noreferrer">
                                restaurantelasrejas.com
                            </a>
                            ), optimizado para mejorar la presencia online del restaurante y facilitar
                            la interacción con los clientes.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Café La Malicia</b> - Desarrollé y mantengo una plataforma de e-commerce completa ({' '}
                            <a href="https://cafelamalicia.com" target="_blank" rel="noreferrer">
                                cafelamalicia.com
                            </a>
                            ) utilizando WooCommerce, permitiendo la venta online de productos con sistema
                            de carrito, pasarela de pago y gestión de pedidos.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implementé soluciones personalizadas según las necesidades de cada cliente,
                            ofreciendo desde sitios web informativos hasta sistemas de e-commerce robustos
                            con integración de pasarelas de pago y herramientas de marketing digital.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IES Miguel Marmolejo</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.iesmiguelmarmolejo.es/'}
                        >
                            <h4>www.iesmiguelmarmolejo.es</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Técnico Informático en Prácticas</h3>
                        <b>
                            <p>Marzo 2024 - Junio 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Realicé las prácticas del Grado Medio de Sistemas Microinformáticos y Redes del{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={'https://www.iesleopoldoqueipo.com/'}
                    >
                        IES Leopoldo Queipo
                    </a>{' '}
                    (Melilla) en el IES Miguel Marmolejo. Durante este periodo, adquirí experiencia
                    práctica en soporte técnico, mantenimiento de sistemas informáticos y gestión de redes,
                    trabajando en un entorno educativo real y proporcionando soluciones técnicas a docentes
                    y estudiantes.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Proporcioné soporte técnico a profesores y estudiantes, resolviendo incidencias
                            de hardware y software de manera eficiente.
                        </p>
                    </li>
                    <li>
                        <p>
                            Realicé mantenimiento preventivo y correctivo de equipos informáticos,
                            asegurando el funcionamiento óptimo de las aulas de informática.
                        </p>
                    </li>
                    <li>
                        <p>
                            Colaboré en la configuración y administración de la red del centro,
                            garantizando la conectividad y seguridad de los sistemas.
                        </p>
                    </li>
                    <li>
                        <p>
                            Documenté procedimientos técnicos y creé guías de usuario para facilitar
                            el uso de las herramientas informáticas del centro.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Top Móviles</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://iesvirgendelavictoria.educacion.es/'}
                        >
                            <h4>Tienda de Informática - Melilla</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Dependiente de Tienda Informática</h3>
                        <b>
                            <p>Marzo 2022 - Junio 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Realicé las prácticas del Grado Básico de Informática de Oficina del{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={'https://iesvirgendelavictoria.educacion.es/'}
                    >
                        IES Virgen de la Victoria
                    </a>{' '}
                    (Melilla) en Top Móviles, una tienda de informática en Melilla. Esta fue mi primera
                    experiencia en el sector tecnológico y marcó el inicio de mi trayectoria profesional.
                    Durante este periodo desarrollé habilidades fundamentales de atención al cliente y
                    adquirí conocimientos técnicos sobre productos informáticos, desde smartphones hasta
                    componentes de PC.
                </p>
                <br />
                <h3 style={styles.indent}>Responsabilidades:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Atención y asesoramiento a clientes</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Venta de productos informáticos y electrónicos</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Diagnóstico básico de problemas técnicos</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Gestión de inventario y stock</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Soporte postventa y resolución de incidencias</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
