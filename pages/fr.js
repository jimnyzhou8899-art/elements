// Pages « À propos », politique de confidentialité et contact (français). {repo} et {email} viennent de site.config.json.
PAGES.fr = {
  updated: "Dernière mise à jour : {d}",
  about: {
    title: "À propos de ce site",
    desc: "À propos de cette édition interactive du livre I des Éléments d'Euclide : ce qu'elle contient, les sources suivies et qui la réalise.",
    body: `
<p>Ce site est une édition interactive du livre I des <cite>Éléments</cite> d'Euclide, le livre dans lequel on a appris la géométrie pendant plus de deux mille ans. On y trouve les 23 définitions, les 5 demandes et les 5 notions communes, ainsi que les 48 propositions, de la construction d'un triangle équilatéral (<a href="/">I.1</a>) jusqu'au théorème de Pythagore et à sa réciproque (<a href="/p/47">I.47</a>, <a href="/p/48">I.48</a>).</p>
<p>Chaque proposition a une figure que l'on peut faire glisser. Déplacez un point entouré de rouge et toute la construction suit : on voit ainsi que chaque étape de la démonstration reste vraie dans toutes les positions, et pas seulement dans celle du livre. La démonstration se déroule pas à pas, et chaque étape indique la définition, la demande, la notion commune ou la proposition antérieure sur laquelle elle s'appuie. Sur la <a href="/sandbox">planche de construction</a>, vous pouvez essayer vous-même des constructions à la règle et au compas.</p>
<h3>Sources</h3>
<p>Le texte anglais suit la traduction de Sir Thomas L. Heath (1908). Les couleurs des figures viennent de l'édition d'Oliver Byrne de 1847, qui imprimait les figures d'Euclide en rouge, jaune et bleu. Les autres langues ont été traduites pour ce site et n'ont pas encore été relues par des locuteurs natifs ; les corrections sont les bienvenues.</p>
<h3>Qui le réalise</h3>
<p>C'est un projet indépendant, gratuit et sans compte. La publicité aide à payer l'hébergement. Le code source est public sur <a href="{repo}">GitHub</a>.</p>
<p>Questions et corrections : voir la <a href="/contact">page de contact</a>.</p>`
  },
  privacy: {
    title: "Politique de confidentialité",
    desc: "Les informations collectées par ce site, l'usage des cookies publicitaires de Google et les choix dont vous disposez.",
    body: `
<p>Cette page explique quelles informations sont collectées lorsque vous visitez ce site, et à quoi elles servent.</p>
<h3>Ce que ce site collecte</h3>
<ul>
<li><strong>Aucun compte.</strong> Il n'y a pas d'inscription, et le site ne vous demande jamais votre nom ni votre adresse e-mail.</li>
<li><strong>Réglages dans votre navigateur.</strong> La langue choisie est enregistrée dans le stockage local du navigateur, et un indicateur dans le stockage de session permet au compteur de ne compter chaque session qu'une fois. Les deux restent sur votre appareil.</li>
<li><strong>Compteur de visites.</strong> Le compteur de l'en-tête n'enregistre qu'un total. Rien vous concernant n'y est associé.</li>
<li><strong>Statistiques.</strong> Vercel Web Analytics compte les pages vues. Il n'utilise pas de cookies et n'identifie pas les visiteurs individuellement.</li>
<li><strong>Hébergement.</strong> L'hébergeur, Vercel, traite des données techniques comme votre adresse IP et le type de navigateur afin de servir les pages et de les protéger contre les abus.</li>
<li><strong>Polices.</strong> Les polices sont chargées depuis Google Fonts : votre navigateur envoie donc à Google une requête qui contient votre adresse IP.</li>
</ul>
<h3>Publicité</h3>
<p>Ce site utilise Google AdSense pour afficher des annonces. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce site ou sur d'autres sites. Grâce aux cookies publicitaires, Google et ses partenaires adaptent les annonces qu'ils vous présentent en fonction de vos visites sur ce site et/ou sur d'autres sites Internet.</p>
<p>Vous pouvez désactiver la publicité personnalisée dans les <a href="https://adssettings.google.com/">paramètres des annonces</a> de Google. Vous pouvez aussi refuser l'utilisation de cookies par certains fournisseurs tiers sur <a href="https://www.aboutads.info/choices/">aboutads.info</a> ou, en Europe, sur <a href="https://www.youronlinechoices.eu/">youronlinechoices.eu</a>. Google explique <a href="https://policies.google.com/technologies/partner-sites">comment il utilise les informations des sites qui utilisent ses services</a>.</p>
<p>Les visiteurs de l'Espace économique européen, du Royaume-Uni et de la Suisse sont invités, par un message de consentement fourni par Google, à donner leur accord avant que des cookies ne soient utilisés pour la publicité. Vous pouvez modifier votre choix à tout moment grâce au lien des paramètres de confidentialité et de cookies affiché sur la page.</p>
<h3>Enfants</h3>
<p>Le site s'adresse aux élèves de tout âge. Il ne collecte pas sciemment d'informations personnelles concernant des enfants.</p>
<h3>Vos droits</h3>
<p>Selon votre lieu de résidence, par exemple en vertu du RGPD ou du CCPA, vous pouvez avoir le droit d'accéder à vos données personnelles, de les faire supprimer ou de vous opposer à leur utilisation. Ce site ne conserve lui-même aucune donnée personnelle vous concernant. Pour les données utilisées par la publicité, utilisez les paramètres de Google ci-dessus ; pour tout le reste, contactez-nous.</p>
<h3>Modifications</h3>
<p>Si cette politique change, la date indiquée en haut de la page changera aussi.</p>
<p>Contact : voir la <a href="/contact">page de contact</a>.</p>`
  },
  contact: {
    title: "Contact",
    desc: "Comment signaler une erreur dans une démonstration ou une traduction, ou poser une question sur ce site.",
    body: `
<p>Vous avez trouvé une erreur dans une démonstration, une traduction maladroite ou une figure qui se comporte mal quand on la fait glisser ? N'hésitez pas à le signaler.</p>
<p>Le plus simple est d'ouvrir une <em>issue</em> sur GitHub : <a href="{repo}/issues">{repo}/issues</a>. Précisez la proposition (par exemple I.47), la langue dans laquelle vous lisiez et ce que vous vous attendiez à voir.</p>
{email}
<p>Les questions sur la confidentialité ou la publicité de ce site sont aussi les bienvenues.</p>`,
    email: "Vous pouvez aussi écrire à {email}."
  }
};
