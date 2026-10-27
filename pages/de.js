// Seiten „Über diese Seite“, Datenschutzerklärung und Kontakt (Deutsch). {repo} und {email} kommen aus site.config.json.
PAGES.de = {
  updated: "Zuletzt aktualisiert: {d}",
  about: {
    title: "Über diese Seite",
    desc: "Über diese interaktive Ausgabe von Buch I der Elemente des Euklid: was sie enthält, welchen Quellen sie folgt und wer sie macht.",
    body: `
<p>Diese Seite ist eine interaktive Ausgabe von Buch I der <cite>Elemente</cite> des Euklid, des Buches, nach dem mehr als zweitausend Jahre lang Geometrie unterrichtet wurde. Sie enthält die 23 Definitionen, die 5 Postulate und die 5 Axiome sowie alle 48 Propositionen, von der Konstruktion eines gleichseitigen Dreiecks (<a href="/">I.1</a>) bis zum Satz des Pythagoras und seiner Umkehrung (<a href="/p/47">I.47</a>, <a href="/p/48">I.48</a>).</p>
<p>Zu jeder Proposition gehört eine Figur, die man ziehen kann. Bewegen Sie einen rot umrandeten Punkt, und die ganze Konstruktion folgt. So sieht man, dass jeder Schritt des Beweises in jeder Lage gilt und nicht nur in der, die im Buch gezeichnet ist. Der Beweis läuft Schritt für Schritt ab, und bei jedem Schritt steht die Definition, das Postulat, das Axiom oder die frühere Proposition, auf die er sich stützt. Auf dem <a href="/sandbox">Konstruktionsbrett</a> können Sie selbst mit Zirkel und Lineal konstruieren.</p>
<h3>Quellen</h3>
<p>Der englische Text folgt der Übersetzung von Sir Thomas L. Heath (1908). Die Farben der Figuren stammen aus der Ausgabe von Oliver Byrne aus dem Jahr 1847, die Euklids Figuren in Rot, Gelb und Blau druckte. Die übrigen Sprachen wurden für diese Seite übersetzt und noch nicht von Muttersprachlern geprüft; Korrekturen sind sehr willkommen.</p>
<h3>Wer sie macht</h3>
<p>Dies ist ein unabhängiges Projekt. Die Nutzung ist kostenlos und ohne Konto möglich. Werbung hilft, das Hosting zu bezahlen. Der Quellcode ist öffentlich auf <a href="{repo}">GitHub</a>.</p>
<p>Fragen und Korrekturen: siehe die <a href="/contact">Kontaktseite</a>.</p>`
  },
  privacy: {
    title: "Datenschutzerklärung",
    desc: "Welche Daten diese Seite erhebt, wie Werbe-Cookies von Google eingesetzt werden und welche Wahlmöglichkeiten Sie haben.",
    body: `
<p>Diese Seite erklärt, welche Informationen bei einem Besuch dieser Website erhoben werden und wofür sie verwendet werden.</p>
<h3>Was diese Seite erhebt</h3>
<ul>
<li><strong>Keine Konten.</strong> Es gibt keine Registrierung, und die Seite fragt nie nach Ihrem Namen oder Ihrer E-Mail-Adresse.</li>
<li><strong>Einstellungen im Browser.</strong> Die gewählte Sprache wird im lokalen Speicher Ihres Browsers gespeichert, und ein Merker im Sitzungsspeicher sorgt dafür, dass der Besuchszähler jede Browsersitzung nur einmal zählt. Beides bleibt auf Ihrem Gerät.</li>
<li><strong>Besuchszähler.</strong> Der Zähler in der Kopfzeile speichert nur eine Gesamtzahl. Über Sie wird dabei nichts gespeichert.</li>
<li><strong>Statistik.</strong> Vercel Web Analytics zählt Seitenaufrufe. Es verwendet keine Cookies und identifiziert keine einzelnen Besucher.</li>
<li><strong>Hosting.</strong> Der Hosting-Anbieter Vercel verarbeitet technische Daten wie Ihre IP-Adresse und den Browsertyp, um die Seiten auszuliefern und vor Missbrauch zu schützen.</li>
<li><strong>Schriften.</strong> Schriften werden von Google Fonts geladen. Ihr Browser sendet dazu eine Anfrage, die Ihre IP-Adresse enthält, an Google.</li>
</ul>
<h3>Werbung</h3>
<p>Diese Seite verwendet Google AdSense, um Anzeigen einzublenden. Drittanbieter, darunter Google, verwenden Cookies, um Anzeigen auf Grundlage Ihrer früheren Besuche auf dieser oder anderen Websites auszuliefern. Durch Werbe-Cookies können Google und seine Partner Ihnen Anzeigen auf Grundlage Ihrer Besuche auf dieser und/oder anderen Websites im Internet präsentieren.</p>
<p>Personalisierte Werbung können Sie in den <a href="https://adssettings.google.com/">Anzeigeneinstellungen</a> von Google deaktivieren. Der Verwendung von Cookies durch einige Drittanbieter für personalisierte Werbung können Sie außerdem unter <a href="https://www.aboutads.info/choices/">aboutads.info</a> oder, in Europa, unter <a href="https://www.youronlinechoices.eu/">youronlinechoices.eu</a> widersprechen. Google erklärt, <a href="https://policies.google.com/technologies/partner-sites">wie es Informationen von Websites verwendet, die seine Dienste nutzen</a>.</p>
<p>Besucher aus dem Europäischen Wirtschaftsraum, dem Vereinigten Königreich und der Schweiz werden über eine von Google bereitgestellte Einwilligungsmeldung um Zustimmung gebeten, bevor Cookies für Werbung verwendet werden. Ihre Wahl können Sie jederzeit über den Link zu den Datenschutz- und Cookie-Einstellungen auf der Seite ändern.</p>
<h3>Kinder</h3>
<p>Die Seite richtet sich an Lernende jeden Alters. Sie erhebt wissentlich keine personenbezogenen Daten von Kindern.</p>
<h3>Ihre Rechte</h3>
<p>Je nach Wohnort, etwa nach der DSGVO oder dem CCPA, haben Sie möglicherweise das Recht auf Auskunft über Ihre personenbezogenen Daten, auf deren Löschung oder auf Widerspruch gegen ihre Verwendung. Diese Seite selbst speichert keine personenbezogenen Daten über Sie. Für Daten, die für Werbung verwendet werden, nutzen Sie bitte die oben genannten Einstellungen von Google; in allen anderen Fragen melden Sie sich gern.</p>
<h3>Änderungen</h3>
<p>Wenn sich diese Erklärung ändert, ändert sich auch das Datum oben auf dieser Seite.</p>
<p>Kontakt: siehe die <a href="/contact">Kontaktseite</a>.</p>`
  },
  contact: {
    title: "Kontakt",
    desc: "Wie Sie einen Fehler in einem Beweis oder einer Übersetzung melden oder eine Frage zu dieser Seite stellen können.",
    body: `
<p>Sie haben einen Fehler in einem Beweis gefunden, eine holprige Übersetzung oder eine Figur, die sich beim Ziehen seltsam verhält? Ich freue mich über einen Hinweis.</p>
<p>Am einfachsten ist ein Issue auf GitHub: <a href="{repo}/issues">{repo}/issues</a>. Nennen Sie bitte die Proposition (zum Beispiel I.47), die Sprache, in der Sie gelesen haben, und was Sie erwartet hätten.</p>
{email}
<p>Fragen zum Datenschutz oder zur Werbung auf dieser Seite sind ebenfalls willkommen.</p>`,
    email: "Sie können auch an {email} schreiben."
  }
};
