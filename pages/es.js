// Páginas «Acerca de», política de privacidad y contacto (español). {repo} y {email} se rellenan desde site.config.json.
PAGES.es = {
  updated: "Última actualización: {d}",
  about: {
    title: "Acerca de este sitio",
    desc: "Sobre esta edición interactiva del Libro I de los Elementos de Euclides: qué contiene, en qué fuentes se basa y quién la hace.",
    body: `
<p>Este sitio es una edición interactiva del Libro I de los <cite>Elementos</cite> de Euclides, el libro con el que se enseñó geometría durante más de dos mil años. Contiene las 23 definiciones, los 5 postulados y las 5 nociones comunes, y las 48 proposiciones, desde la construcción de un triángulo equilátero (<a href="/">I.1</a>) hasta el teorema de Pitágoras y su recíproco (<a href="/p/47">I.47</a>, <a href="/p/48">I.48</a>).</p>
<p>Cada proposición tiene una figura que se puede arrastrar. Mueve un punto marcado con un círculo rojo y toda la construcción lo sigue: así se ve que cada paso de la demostración vale en cualquier posición, no solo en la que dibuja el libro. La demostración avanza paso a paso, y cada paso indica la definición, el postulado, la noción común o la proposición anterior en que se apoya. En el <a href="/sandbox">tablero de construcción</a> puedes probar tú mismo construcciones con regla y compás.</p>
<h3>Fuentes</h3>
<p>El texto inglés sigue la traducción de Sir Thomas L. Heath (1908). Los colores de las figuras proceden de la edición de Oliver Byrne de 1847, que imprimió las figuras de Euclides en rojo, amarillo y azul. Los demás idiomas se tradujeron para este sitio y todavía no los han revisado hablantes nativos; las correcciones son muy bienvenidas.</p>
<h3>Quién lo hace</h3>
<p>Es un proyecto independiente, gratuito y sin necesidad de cuenta. La publicidad ayuda a pagar el alojamiento. El código fuente es público en <a href="{repo}">GitHub</a>.</p>
<p>Preguntas y correcciones: consulta la <a href="/contact">página de contacto</a>.</p>`
  },
  privacy: {
    title: "Política de privacidad",
    desc: "Qué información recoge este sitio, cómo se usan las cookies publicitarias de Google y qué opciones tienes.",
    body: `
<p>Esta página explica qué información se recoge cuando visitas este sitio y para qué se usa.</p>
<h3>Qué recoge este sitio</h3>
<ul>
<li><strong>Sin cuentas.</strong> No hay registro, y el sitio nunca te pide tu nombre ni tu correo electrónico.</li>
<li><strong>Ajustes en tu navegador.</strong> El idioma que eliges se guarda en el almacenamiento local del navegador, y una marca en el almacenamiento de sesión hace que el contador cuente cada sesión del navegador una sola vez. Ambos se quedan en tu dispositivo.</li>
<li><strong>Contador de visitas.</strong> El contador de la cabecera guarda un único total. No se guarda nada sobre ti.</li>
<li><strong>Estadísticas.</strong> Vercel Web Analytics cuenta las páginas vistas. No usa cookies y no identifica a los visitantes individuales.</li>
<li><strong>Alojamiento.</strong> El proveedor de alojamiento, Vercel, trata datos técnicos como tu dirección IP y el tipo de navegador para servir las páginas y protegerlas contra abusos.</li>
<li><strong>Fuentes tipográficas.</strong> Las fuentes se cargan desde Google Fonts, de modo que tu navegador envía a Google una solicitud que incluye tu dirección IP.</li>
</ul>
<h3>Publicidad</h3>
<p>Este sitio usa Google AdSense para mostrar anuncios. Proveedores externos, incluido Google, usan cookies para mostrar anuncios basados en tus visitas anteriores a este sitio web o a otros sitios web. El uso de cookies publicitarias permite a Google y a sus socios mostrarte anuncios basados en tus visitas a este sitio y/o a otros sitios de Internet.</p>
<p>Puedes desactivar la publicidad personalizada en la <a href="https://adssettings.google.com/">configuración de anuncios</a> de Google. También puedes impedir que algunos proveedores externos usen cookies para publicidad personalizada en <a href="https://www.aboutads.info/choices/">aboutads.info</a> o, en Europa, en <a href="https://www.youronlinechoices.eu/">youronlinechoices.eu</a>. Google explica <a href="https://policies.google.com/technologies/partner-sites">cómo usa la información de los sitios que utilizan sus servicios</a>.</p>
<p>A los visitantes del Espacio Económico Europeo, el Reino Unido y Suiza se les pide su consentimiento, mediante un mensaje proporcionado por Google, antes de usar cookies para publicidad. Puedes cambiar tu elección en cualquier momento con el enlace de configuración de privacidad y cookies de la página.</p>
<h3>Menores</h3>
<p>El sitio está pensado para estudiantes de cualquier edad. No recoge a sabiendas información personal de menores.</p>
<h3>Tus derechos</h3>
<p>Según dónde vivas, por ejemplo en virtud del RGPD o de la CCPA, puedes tener derecho a acceder a tus datos personales, a pedir que se borren o a oponerte a su uso. Este sitio no guarda por sí mismo datos personales sobre ti. Para los datos usados en publicidad puedes usar la configuración de Google indicada arriba; para cualquier otra cosa, escríbenos.</p>
<h3>Cambios</h3>
<p>Si esta política cambia, también cambiará la fecha que aparece al principio de la página.</p>
<p>Contacto: consulta la <a href="/contact">página de contacto</a>.</p>`
  },
  contact: {
    title: "Contacto",
    desc: "Cómo informar de un error en una demostración o en una traducción, o hacer una pregunta sobre este sitio.",
    body: `
<p>¿Has encontrado un error en una demostración, una traducción que suena mal o una figura que se comporta de forma extraña al arrastrarla? Me gustaría saberlo.</p>
<p>Lo más sencillo es abrir un <em>issue</em> en GitHub: <a href="{repo}/issues">{repo}/issues</a>. Indica la proposición (por ejemplo, I.47), el idioma en que la leías y lo que esperabas ver.</p>
{email}
<p>También son bienvenidas las preguntas sobre la privacidad o la publicidad de este sitio.</p>`,
    email: "También puedes escribir a {email}."
  }
};
