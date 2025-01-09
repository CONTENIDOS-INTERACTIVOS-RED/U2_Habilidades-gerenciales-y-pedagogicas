export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Gestionando el desarrollo del potencial humano',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Las habilidades sociales e Inteligencia competitiva',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Solución de problemas en el ámbito laboral',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trabajo en equipo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguado, D. y Arranz, V. (2014). Habilidades para el trabajo en equipo: programa de entrenamiento. Editorial Universidad Autónoma de Madrid.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53968?page=17',
    },
    {
      referencia:
        'Borrego Polo, V. (2016). Manual Entrenamiento en Habilidades Sociales. Formación para el Empleo. Editorial CEP, S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50971',
    },
    {
      referencia:
        'Córdoba Bueno, M. (2004). Metodología para la toma de decisiones. Delta Publicaciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/170114?page=',
    },
    {
      referencia:
        'Cruz Lablanca, I. D. L. (2014). Comunicación efectiva y trabajo en equipo. Ministerio de Educación y Formación Profesional de España.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49382?page=109',
    },
    {
      referencia:
        'Escales Sánchez, R. y Pujantell Obiols, M. (2024). Habilidades sociales (1 ed.). Macmillan Iberia, S.A.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/267596?page=13',
    },
    {
      referencia:
        'García Vidal, G. (2012). El proceso de solución de problemas. B - EUMED.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/34498?page=4',
    },
    {
      referencia:
        'Olaz Capitán, Á. (2016). Cómo trabajar en equipo a través de competencias. Narcea Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/46262?page=22',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (Coord.). (2015). Entrenamiento en habilidades sociales (2 ed.). Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/120574?page=17',
    },
    {
      referencia:
        'Ramos Ramos, P. (Coord.). (2010). Afrontamiento del estrés y habilidades sociales (2 ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106681',
    },
    {
      referencia:
        'Rosales Jiménez, J. J. (2013). Habilidades sociales. McGraw-Hill España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50255?page=33',
    },
    {
      referencia:
        'Varios, A. (2013). Manual trabajo en equipo. Editorial CEP, S.L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50717?page=10',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad para ajustarse a nuevas condiciones o cambios en el entorno laboral o personal.',
    },
    {
      termino: 'Colaboración',
      significado:
        'Proceso en el que dos o más personas trabajan juntas para lograr un objetivo común.',
    },
    {
      termino: 'Competencias blandas',
      significado:
        'Habilidades interpersonales que incluyen comunicación, empatía y trabajo en equipo, esenciales para un liderazgo efectivo.',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'Transmisión clara y precisa de ideas, emociones o información, facilitando la comprensión entre las partes involucradas.',
    },
    {
      termino: 'Empatía',
      significado:
        'Habilidad de comprender y compartir los sentimientos o perspectivas de otra persona.',
    },
    {
      termino: 'Inteligencia competitiva',
      significado:
        'Proceso de recopilación y análisis de información sobre competidores y el entorno para tomar decisiones estratégicas.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad para gestionar las propias emociones y entender las de los demás, facilitando interacciones positivas.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Habilidad para influir, motivar y guiar a un equipo hacia el logro de metas comunes.',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'Proceso de análisis y evaluación de información para tomar decisiones fundamentadas y resolver problemas de manera efectiva.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'Estrategias y habilidades utilizadas para manejar y resolver desacuerdos de manera constructiva.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de recuperarse rápidamente de situaciones adversas y adaptarse a cambios o desafíos.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso de seleccionar entre diferentes alternativas para resolver un problema o alcanzar un objetivo.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'Coordinación y cooperación entre personas para alcanzar un objetivo común, maximizando sus habilidades individuales.',
    },
    {
      termino: 'Visión estratégica',
      significado:
        'Habilidad para prever y planificar a largo plazo, considerando oportunidades y amenazas en el entorno.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
