<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Las habilidades sociales e Inteligencia competitiva'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 Ser líder en el entorno laboral actual exige más que conocimientos técnicos; requiere habilidades interpersonales avanzadas, conocidas como soft skills. Estas competencias, como la resolución de problemas, la comunicación efectiva y la empatía, son esenciales para inspirar, guiar y consolidar equipos de trabajo exitosos.
        .d-flex.align-items-start.mb-4.bg-amarillo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El liderazgo efectivo se fundamenta en construir y mantener relaciones interpersonales sólidas. Habilidades como escuchar activamente, empatizar y resolver conflictos fomentan ambientes de trabajo positivos y productivos. Estas habilidades sociales no son innatas, sino adquiridas y perfeccionadas a lo largo del tiempo, siendo fundamentales para el desarrollo personal y organizacional.
        span Según Rosales (2013), las habilidades sociales son conductas aprendidas necesarias para establecer relaciones efectivas. Su desarrollo comienza en la infancia y adolescencia, cuando se forman vínculos significativos que impactan el crecimiento emocional y social. Estas habilidades se dividen en tres componentes principales (Escales y Pujantell, 2024):
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Conductuales", :iconUrl="require('@/assets/curso/unidad/img-5.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Conductuales
            p(data-aos="fade-up") - Comunicación no verbal: Gestos, expresiones faciales, postura y apariencia. <br>- Comunicación paralingüística: Volumen, tono, claridad y ritmo del habla. <br>- Comunicación verbal: Contenido, humor, formalidad y turnos de palabra. <br>- Percepción del entorno: Influencias del ambiente formal o cálido, privado o público.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Cognitivos", :iconUrl="require('@/assets/curso/unidad/img-5.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Cognitivos
            p(data-aos="fade-up") Incluyen la interpretación y procesamiento de información durante la interacción social.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fisiológicos", :iconUrl="require('@/assets/curso/unidad/img-5.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Fisiológicos
            p(data-aos="fade-up") Factores como la tasa cardíaca, la respiración y las respuestas musculares que influyen en cómo se comunica y percibe un individuo.

    h2 Importancia del desarrollo de habilidades sociales

    .row.mb-5
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.mb-4.bg-rojo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-9.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El fortalecimiento de las habilidades sociales favorece relaciones más efectivas y enriquecedoras, impactando tanto el ámbito personal como profesional. Estas habilidades no solo mejoran la interacción diaria, sino que también optimizan el cumplimiento de objetivos organizacionales, creando un entorno de trabajo más armónico y colaborativo.
        span Las habilidades sociales son esenciales para el liderazgo y la interacción humana. Los componentes conductuales, cognitivos y fisiológicos subrayan la complejidad de estas interacciones, mientras que su desarrollo continuo garantiza relaciones interpersonales más efectivas, contribuyendo al éxito en cualquier ámbito.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen') 

    p.mb-3 <b>Figura 1.</b> Componentes de las habilidades sociales
    .row.mb-4
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen') 
        
    p.mb-4 Las habilidades sociales son esenciales para liderar en un entorno laboral dinámico y competitivo. Más allá de las habilidades técnicas, las competencias blandas (soft skills) como la comunicación efectiva, la empatía, y la capacidad de resolución de conflictos son vitales para inspirar y gestionar equipos. Estas habilidades son fundamentales para establecer relaciones interpersonales sólidas, promover la colaboración y construir confianza dentro de un equipo.
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-amarillo.p-4
          span La clasificación de Goldstein (1987), mencionada por Pérez (2015), establece seis grupos de habilidades sociales que abarcan desde competencias básicas como escuchar y formular preguntas, hasta habilidades avanzadas como la planificación y manejo del estrés. Estas habilidades se desarrollan a lo largo del tiempo y contribuyen significativamente al éxito personal y profesional.
    p.mb-4 En un líder, estas habilidades permiten la motivación del equipo, la resolución efectiva de conflictos y la creación de un entorno laboral positivo. Además, refuerzan la capacidad de adaptarse a diferentes situaciones y de gestionar equipos diversos, asegurando así el cumplimiento de los objetivos organizacionales.
    h2 Inteligencia competitiva y su impacto estratégico
    p.mb-4 La inteligencia competitiva se define como un proceso estructurado de recopilación y análisis de información sobre competidores, mercados y el entorno empresarial, con el fin de tomar decisiones estratégicas informadas. Este enfoque permite a las empresas adaptarse a cambios del mercado, anticiparse a movimientos de la competencia y optimizar su posicionamiento.

    h2 Aspectos clave de la inteligencia competitiva
    p.mb-4 La inteligencia competitiva es una herramienta estratégica clave para que las organizaciones mantengan su relevancia en mercados dinámicos.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Recopilación de información
              p Utilizar fuentes legales y éticas como informes de mercado, bases de datos y redes sociales para obtener datos relevantes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Análisis de competidores
              p Identificar fortalezas, debilidades y estrategias de los competidores para comprender su posición en el mercado.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Estudio del entorno de mercado
              p Evaluar factores como tendencias económicas, regulaciones y avances tecnológicos que influyen en el contexto competitivo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Toma de decisiones estratégicas
              p Definir planes de acción en áreas como marketing, desarrollo de productos y expansión de mercados para fortalecer la competitividad.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Monitorización continua
              p Adaptarse constantemente a los cambios del entorno competitivo mediante un seguimiento regular del mercado y los competidores.

    p.mb-4 Además de los aspectos técnicos, la inteligencia competitiva se beneficia de un enfoque emocional saludable. La inteligencia emocional complementa este proceso al fomentar una competencia ética y respetuosa, basada en la empatía y el respeto por los demás.
    h2 Sinergia entre habilidades sociales e inteligencia competitiva
    .row.mb-5
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.mb-4.bg-azul.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La combinación de habilidades sociales e inteligencia competitiva permite a los líderes no solo gestionar equipos de manera efectiva, sino también adaptarse a un entorno empresarial cambiante. Mientras las habilidades sociales facilitan la creación de relaciones interpersonales sólidas, la inteligencia competitiva ofrece herramientas para tomar decisiones estratégicas y enfrentar desafíos de mercado.
        span En conjunto, estas competencias no solo potencian el desempeño individual y organizacional, sino que también promueven un entorno de aprendizaje y desarrollo continuo. Esta integración fomenta una visión equilibrada y sostenible del liderazgo, donde la competencia se convierte en una herramienta para el crecimiento mutuo.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')  

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/267596") Escales Sánchez, R. & Pujantell Obiols, M. (2024). Habilidades sociales. Macmillan Iberia.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/50255") Rosales Jiménez, J. J. (2013). Habilidades sociales. McGraw-Hill España.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50971") Borrego Polo, V. (2016). Manual Entrenamiento en Habilidades Sociales. Editorial CEP.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=fR6nKQ0BtEs") ManpowerGroup España. (2022). Las 20 tendencias para el Talento y las organizaciones en el 2022 [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
