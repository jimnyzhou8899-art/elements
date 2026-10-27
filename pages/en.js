// About, privacy policy and contact pages (English). {issues} and {email} are filled in from site.config.json.
PAGES.en = {
  updated: "Last updated: {d}",
  about: {
    title: "About this site",
    desc: "About this interactive edition of Book I of Euclid's Elements: what it contains, the sources it follows, and who makes it.",
    body: `
<p>This site is an interactive edition of Book I of Euclid's <cite>Elements</cite>, the book from which geometry was taught for more than two thousand years. It contains the 23 definitions, the 5 postulates and the 5 common notions, and all 48 propositions, from the construction of an equilateral triangle (<a href="/">I.1</a>) to the Pythagorean theorem and its converse (<a href="/p/47">I.47</a>, <a href="/p/48">I.48</a>).</p>
<p>Every proposition has a figure you can drag. Move a point circled in red and the whole construction follows, so you can see that each step of the proof holds in every position, not only in the one drawn in the book. The proof plays step by step, and each step names the definition, postulate, common notion or earlier proposition it rests on. On the <a href="/sandbox">construction board</a> you can try compass-and-straightedge constructions yourself.</p>
<h3>Sources</h3>
<p>The English text follows Sir Thomas L. Heath's translation (1908). The colours of the figures come from Oliver Byrne's 1847 edition, which printed Euclid's figures in red, yellow and blue. The other languages were translated for this site and have not yet been checked by native speakers, so corrections are very welcome.</p>
<h3>Who makes it</h3>
<p>This is an independent project. It is free to use and needs no account. Advertising helps pay for hosting. The source code is public on <a href="{repo}">GitHub</a>.</p>
<p>Questions and corrections: see the <a href="/contact">contact page</a>.</p>`
  },
  privacy: {
    title: "Privacy policy",
    desc: "What information this site collects, how advertising cookies from Google are used, and the choices you have.",
    body: `
<p>This page explains what information is collected when you visit this site, and how it is used.</p>
<h3>What this site collects</h3>
<ul>
<li><strong>No accounts.</strong> There is no sign-up, and the site never asks for your name or email address.</li>
<li><strong>Settings in your browser.</strong> Your choice of language is saved in your browser's local storage, and a flag in session storage lets the visit counter count each browser session only once. Both stay on your device.</li>
<li><strong>Visit counter.</strong> The counter in the header stores a single total. Nothing about you is stored with it.</li>
<li><strong>Statistics.</strong> Vercel Web Analytics counts page views. It does not use cookies and does not identify individual visitors.</li>
<li><strong>Hosting.</strong> The hosting provider, Vercel, processes technical data such as your IP address and browser type in order to deliver pages and to protect against abuse.</li>
<li><strong>Fonts.</strong> Fonts are loaded from Google Fonts, so your browser sends a request, including your IP address, to Google.</li>
</ul>
<h3>Advertising</h3>
<p>This site uses Google AdSense to show ads. Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this website or to other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet.</p>
<p>You can turn off personalised advertising in Google's <a href="https://adssettings.google.com/">Ads Settings</a>. You can also opt out of some third-party vendors' use of cookies for personalised advertising at <a href="https://www.aboutads.info/choices/">aboutads.info</a>, or in Europe at <a href="https://www.youronlinechoices.eu/">youronlinechoices.eu</a>. Google explains <a href="https://policies.google.com/technologies/partner-sites">how it uses information from sites that use its services</a>.</p>
<p>Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for consent before cookies are used for advertising, through a consent message provided by Google. You can change your choice at any time with the privacy and cookie settings link on the page.</p>
<h3>Children</h3>
<p>The site is meant for learners of every age. It does not knowingly collect personal information from children.</p>
<h3>Your rights</h3>
<p>Depending on where you live, for example under the GDPR or the CCPA, you may have the right to access or delete personal data, or to object to its use. This site does not itself store personal data about you. For data used in advertising, you can use Google's settings above; for anything else, please get in touch.</p>
<h3>Changes</h3>
<p>If this policy changes, the date at the top of this page will change too.</p>
<p>Contact: see the <a href="/contact">contact page</a>.</p>`
  },
  contact: {
    title: "Contact",
    desc: "How to report a mistake in a proof or a translation, or ask a question about this site.",
    body: `
<p>Found a mistake in a proof, a translation that reads badly, or a figure that misbehaves when you drag it? I would like to hear about it.</p>
<p>The easiest way is to open an issue on GitHub: <a href="{repo}/issues">{repo}/issues</a>. Please mention the proposition (for example I.47), the language you were reading, and what you expected to see.</p>
{email}
<p>Questions about privacy or advertising on this site are welcome too.</p>`,
    email: "You can also write to {email}."
  }
};
