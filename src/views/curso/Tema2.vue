<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. La comunicación como fundamento del éxito empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-marron-claro.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") La resolución de problemas es una habilidad esencial en el ámbito laboral que se enfrenta a desafíos diarios de diversa magnitud y repercusión en las organizaciones. Aunque términos como "situación" o "desafío" son utilizados para suavizar la percepción de un problema, la esencia de su abordaje radica en desarrollar competencias que permitan gestionarlos de manera efectiva, sin generar alarmas innecesarias y con un enfoque en la generación de soluciones.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    h2 Causas y fuentes de problemas
    p.mb-4 En el contexto organizacional, los problemas surgen frecuentemente de aspectos como:
    .row.mb-4
      .col-6.col-md-4.mx-auto.mb-4(data-aos="fade-right")
        .bg-rojo.p-4.h-100.d-flex.justify-content-center
          p.mb-0.text-bold.text-center.my-auto Conflictos entre objetivos de la empresa y de los colaboradores
      .col-6.col-md-4.mx-auto.mb-4(data-aos="fade-up")
        .bg-rojo.p-4.h-100.d-flex.justify-content-center
          p.mb-0.text-bold.text-center.my-auto Responsabilidades mal definidas
      .col-6.col-md-4.mx-auto.mb-4(data-aos="fade-left")
        .bg-rojo.p-4.h-100.d-flex.justify-content-center
          p.mb-0.text-bold.text-center.my-auto Cambios mal gestionados o comunicados
      .col-6.col-md-4.mx-auto.ms-md-auto.me-md-0(data-aos="fade-right")
        .bg-rojo.p-4.h-100.d-flex.justify-content-center
          p.mb-0.text-bold.text-center.my-auto Competencia por recursos limitados
      .col-6.col-md-4.mx-auto.me-md-auto.ms-md-0(data-aos="fade-up")
        .bg-rojo.p-4.h-100.d-flex.justify-content-center
          p.mb-0.text-bold.text-center.my-auto Choques por aspiraciones individuales o valores incompatibles
    h2 Habilidades para la solución de problemas
    p.mb-4 La solución de problemas combina diversas competencias:
    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="22%" y="36%" numero="+")
        .h5.mb-2 Pensamiento crítico
        p Analizar información y evaluar argumentos de manera objetiva y fundamentada.
      .tarjeta.bg-white.p-4(x="46%" y="21%" numero="+")
        .h5.mb-2 Creatividad
        p Generar ideas innovadoras que aporten soluciones nuevas y efectivas.
      .tarjeta.bg-white.p-4(x="62%" y="21%" numero="+")
        .h5.mb-2 Comunicación
        p Expresar ideas de forma clara y comprender diferentes perspectivas para enriquecer el diálogo.
      .tarjeta.bg-white.p-4(x="38.4%" y="79%" numero="+")
        .h5.mb-2 Colaboración
        p Trabajar en equipo aprovechando las fortalezas individuales para alcanzar objetivos comunes.
      .tarjeta.bg-white.p-4(x="54%" y="79%" numero="+")
        .h5.mb-2 Gestión del tiempo
        p Priorizar tareas y actuar de manera oportuna para cumplir con los plazos establecidos.
      .tarjeta.bg-white.p-4(x="68.7%" y="79%" numero="+")
        .h5.mb-2 Adaptabilidad
        p Ajustar enfoques y estrategias según las circunstancias cambiantes del entorno.

    h2 Proceso sistemático para la resolución de problemas
    p.mb-4 Un enfoque estructurado facilita la identificación y solución efectiva de problemas. Este proceso incluye:
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Identificación del problema
              p Reconocer señales como la disminución en el rendimiento o conflictos en el ambiente laboral para determinar la raíz del problema.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Análisis
              p Reunir información relevante utilizando herramientas como el diagrama de Ishikawa o los "5 porqués" para identificar las causas principales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Generación de soluciones
              p Utilizar técnicas como la lluvia de ideas que involucre perspectivas diversas para proponer posibles soluciones al problema.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Evaluación y selección de soluciones
              p Analizar las opciones considerando factores como costo, tiempo y viabilidad para seleccionar la solución más adecuada.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Plan de acción
              p Diseñar pasos claros para implementar la solución elegida y comunicarla eficazmente a todas las partes involucradas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Monitoreo y evaluación
              p Observar la implementación de la solución, realizar ajustes si es necesario y documentar las lecciones aprendidas para futuras mejoras.

    h2 Impacto en el ambiente laboral
    p.mb-4 Una gestión adecuada de problemas fomenta:
    .row.mb-4
      .col-12.col-md-10.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
        
    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-marron-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-29.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La resolución de problemas no es un evento único, sino un proceso continuo que fortalece la resiliencia y la adaptabilidad en las organizaciones. Al cultivar estas habilidades, los colaboradores y equipos no solo gestionan desafíos actuales, sino que también están mejor preparados para anticipar y abordar problemas futuros. Esto contribuye al éxito organizacional y al desarrollo de una cultura basada en el aprendizaje y la mejora continua.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/49382") Cruz Lablanca, I. D. L. (2014). Comunicación efectiva y trabajo en equipo. Ministerio de Educación.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/170114") Córdoba Bueno, M. (2004). Metodología para la toma de decisiones. Delta Publicaciones.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=zqRL7GbqsDM") Profe de Economía. (2018). Gestión de los recursos humanos por competencias [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
