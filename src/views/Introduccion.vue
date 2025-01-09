<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 En un mundo laboral en constante evolución y creciente complejidad, la gestión del desarrollo del potencial humano se ha vuelto crucial para alcanzar el éxito profesional. Este aspecto es especialmente relevante en áreas que demandan un alto nivel de colaboración y adaptación, como lo son las habilidades sociales y la inteligencia competitiva. En esta unidad, nos enfocaremos en las competencias, actitudes y herramientas que los profesionales deben desarrollar para optimizar el rendimiento del equipo y promover un ambiente de trabajo colaborativo y eficaz.
        .bg-amarillo.p-4
          span Al concluir esta unidad, los estudiantes deberán ser capaces de identificar y describir las habilidades sociales necesarias para abordar de manera efectiva los desafíos en el ámbito laboral. Además, se espera que sean capaces de aplicar técnicas de solución de problemas en situaciones reales y trabajar de manera efectiva en equipo, promoviendo un análisis crítico y la generación de ideas innovadoras. Estas habilidades no solo son relevantes para su desarrollo académico, sino que también son esenciales para su crecimiento personal y profesional como futuros líderes en sus respectivos campos.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-1.png", alt="Texto que describa la imagen")
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La habilidad para gestionar el potencial humano es fundamental para fomentar un entorno laboral productivo y cohesionado. Al perfeccionar estas competencias, no solo se convierten en profesionales más capacitados, sino que también contribuyen al bienestar de sus colegas y al éxito global de la organización.




</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
