<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Trabajo en equipo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-marron-claro.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Hablar sobre el trabajo en equipo puede abarcar un análisis extenso, ya que su importancia trasciende tanto en la vida cotidiana como en el ámbito organizacional. En las organizaciones actuales, el trabajo en equipo se presenta como una herramienta imprescindible para lograr los objetivos estratégicos y alcanzar un funcionamiento eficiente en los procesos. Cada área, cada departamento dentro de una organización, desempeña un papel crucial en un engranaje colectivo que necesita colaboración efectiva para generar resultados significativos.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
    
    h2 La relevancia del trabajo en equipo
    p.mb-4 El trabajo en equipo no solo consiste en que varias personas colaboren, sino que implica crear sinergias, establecer una comunicación fluida, alinear objetivos y trabajar de manera conjunta hacia metas comunes. Esto requiere la capacidad de generar acuerdos, ceder protagonismo cuando sea necesario, escuchar diferentes opiniones y priorizar el bienestar colectivo sobre el interés individual. Este enfoque fomenta el sentido de pertenencia y la cohesión dentro de los equipos de trabajo, fortaleciendo su dinamismo y efectividad.
    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-marron-claro.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-32.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Actualmente, las competencias relacionadas con el trabajo en equipo son altamente valoradas en los procesos de selección. En este contexto, los departamentos de recursos humanos desarrollan estrategias y capacitaciones orientadas a mejorar las habilidades colaborativas de los colaboradores, promoviendo el aprendizaje colectivo y optimizando las dinámicas laborales. No se trata únicamente de una competencia deseable, sino de una necesidad estratégica en las organizaciones modernas que buscan desarrollar un entorno de trabajo que potencie el rendimiento, la motivación y el compromiso del equipo.

    p.text-bold.mb-4 Desafíos en el desarrollo del trabajo en equipo
    p.mb-4 A pesar de su importancia, trabajar en equipo no es algo natural para todos. Muchas personas priorizan sus propios objetivos y resultados, lo que dificulta la colaboración efectiva. Además, el trabajo en equipo es una competencia blanda intrínsecamente relacionada con la personalidad de cada individuo, lo que significa que no puede ser aprendida únicamente a través de la teoría o la instrucción académica. En cambio, requiere un proceso de desarrollo y adaptación que, en algunos casos, implica un cambio significativo en la forma de trabajar y relacionarse con los demás.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span Desde la infancia, se fomenta el desarrollo de habilidades colaborativas a través de actividades simples, como compartir juguetes o realizar proyectos grupales en la escuela. Sin embargo, estas experiencias iniciales no siempre garantizan que un individuo esté completamente preparado para trabajar en equipo en un entorno organizacional. Por ello, las empresas enfrentan el desafío de evaluar no solo las habilidades técnicas de los candidatos, sino también su disposición para colaborar y adaptarse a las dinámicas específicas de la organización.
        span Es importante mencionar que, dentro de una organización, algunos roles pueden requerir un nivel más alto de habilidad para el trabajo en equipo que otros. Sin embargo, la colaboración sigue siendo fundamental en todos los niveles, ya que cada empleado, de alguna manera, impacta en los objetivos generales de la organización. La capacidad de colaborar se convierte, por tanto, en un elemento clave para el éxito colectivo y la sostenibilidad organizacional.
      .d-none.d-xl-block.col-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    h2 Tipos de equipos de trabajo
    p.mb-4 Los equipos de trabajo desempeñan un papel esencial en las organizaciones, adaptándose a diversas necesidades y contextos. Entre los tipos más destacados están:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    p.text-bold.mb-4 Estrategias para desarrollar el trabajo en equipo
    p.mb-4 Existen diversas estrategias para fomentar y mejorar la dinámica del trabajo en equipo dentro de las organizaciones. Algunas de las más destacadas son:

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Definición de roles y responsabilidades claras")
            p Cada miembro debe entender su papel y cómo contribuye a los objetivos colectivos, evitando solapamientos y conflictos de tareas.
          .div(titulo="Establecimiento de metas SMART")
            p Las metas deben ser específicas, medibles, alcanzables, relevantes y con un tiempo definido para brindar una dirección clara y motivar al equipo.
          .div(titulo="Fomento de la comunicación abierta")
            p Promover una comunicación efectiva y transparente para evitar malentendidos y fortalecer la confianza entre los miembros del equipo.
          .div(titulo="Construcción de relaciones de confianza")
            p Generar confianza mediante la apertura, consistencia y respeto mutuo, fomentando la colaboración y la capacidad de enfrentar desafíos conjuntos.
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Uso de herramientas tecnológicas")
            p Implementar plataformas de gestión de proyectos, aplicaciones de mensajería y software de videoconferencia para optimizar comunicación y coordinación.
          .div(titulo="Reconocimiento y recompensas")
            p Reconocer logros individuales y colectivos para motivar a los colaboradores y reforzar la cohesión del equipo.
          .div(titulo="Desarrollo personal y profesional")
            p Ofrecer oportunidades de capacitación y crecimiento para mejorar habilidades, aumentando el compromiso y satisfacción laboral.
          .div(titulo="Evaluación y mejora continua")
            p Reflexionar sobre el desempeño del equipo y realizar ajustes para garantizar dinámicas laborales efectivas y adaptables.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    p.mb-4 El trabajo en equipo es una competencia fundamental que va más allá de la colaboración superficial. Implica construir relaciones basadas en la confianza, establecer metas comunes y desarrollar una comunicación abierta y efectiva. Las organizaciones que invierten en estrategias para fortalecer el trabajo en equipo no solo alcanzan sus objetivos más eficientemente, sino que también crean un entorno laboral que fomenta la innovación, el compromiso y el desarrollo personal y profesional de sus colaboradores.
    .row.mb-5
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .d-flex.align-items-start.bg-marron-claro.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-37.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Además, fomentar una cultura de trabajo en equipo no solo beneficia a la organización, sino que también prepara a los empleados para enfrentar desafíos futuros, tanto a nivel individual como colectivo. Al implementar prácticas que promuevan la colaboración y la cohesión, las empresas pueden garantizar un éxito sostenible en un entorno laboral cada vez más dinámico y competitivo.

    .bg-full-width.border-top-9-azul.mb-5
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/53968") Aguado, D. y Arranz, V. (2014). Habilidades para el trabajo en equipo. Editorial Universidad Autónoma de Madrid.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/46262") Olaz Capitán, Á. (2016). Cómo trabajar en equipo a través de competencias. Narcea Ediciones.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/50717") Varios, A. (2013). Manual trabajo en equipo. Editorial CEP.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=AMk6yiFaoxM") Fernando Pena. (2018). LIDERAZGO y Gestión de equipos [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Habilidades Sociales en el Liderazgo',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué habilidad ayuda a prevenir conflictos en el trabajo?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Asertividad', esCorrecta: true },
            { id: 'b', texto: 'Toma de decisiones', esCorrecta: false },
            { id: 'c', texto: 'Conocimientos técnicos', esCorrecta: false },
            { id: 'd', texto: 'Análisis de datos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el objetivo de la escucha activa?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hablar más que los demás', esCorrecta: false },
            {
              id: 'b',
              texto: 'Comprender y responder adecuadamente',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar las emociones de otros',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Controlar la conversación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes habilidades se relaciona con la adaptación en el liderazgo?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estrategias de control', esCorrecta: false },
            { id: 'b', texto: 'Habilidades sociales', esCorrecta: true },
            { id: 'c', texto: 'Conocimientos técnicos', esCorrecta: false },
            { id: 'd', texto: 'Habilidades matemáticas', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una consecuencia de no desarrollar habilidades sociales?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mejora de la comunicación', esCorrecta: false },
            {
              id: 'b',
              texto: 'Disminución de la cohesión del equipo',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Aumento de la colaboración', esCorrecta: false },
            { id: 'd', texto: 'Mejora de la empatía', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Las habilidades sociales son innatas y no se pueden aprender.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
