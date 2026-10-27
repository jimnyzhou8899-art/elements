// Proposition I.42
PROP(42, {
  vb: [0, 0, 720, 420],
  build(S) {
    S.free("B", 50, 340, { ld: { x: 0, y: 1 } }); S.free("C", 390, 340, { ld: { x: 0, y: 1 } });
    S.free("A", 140, 110, { ld: { x: 0, y: -1 } });
    // the given angle D, between the rays D→D1 and D→D2
    S.free("D", 540, 340, { ld: { x: -1, y: 0.3 } }); S.free("D1", 690, 340, { lab: false }); S.free("D2", 620, 210, { lab: false });
    const th = g => Math.acos(Math.max(-1, Math.min(1, V.dot(V.unit(V.sub(g("D1"), g("D"))), V.unit(V.sub(g("D2"), g("D")))))));
    const u = g => V.unit(V.sub(g("C"), g("B")));
    S.pt("E", g => V.mid(g("B"), g("C")), { ld: { x: 0, y: 1 } });
    // EF makes the angle CEF equal to D, on A's side; F lies on the parallel to BC through A
    S.pt("F", g => {
      const n = u(g), a = V.sub(g("A"), g("B")), s = Math.sign(n.x * a.y - n.y * a.x) || -1;
      const dir = rot(n, s * th(g));
      return intersect({ k: "L", a: g("E"), b: V.add(g("E"), dir), seg: false }, { k: "L", a: g("A"), b: V.add(g("A"), n), seg: false })[0];
    }, { ld: { x: 0, y: -1 } });
    S.pt("G", g => V.add(g("F"), V.sub(g("C"), g("E"))), { ld: { x: 0, y: -1 } });
    S.poly("tABE", ["A", "B", "E"], { st: "red" }); S.poly("tAEC", ["A", "E", "C"], { st: "red" });
    S.poly("qFECG", ["F", "E", "C", "G"], { st: "blue" });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CA", "C", "A");
    S.seg("DD1", "D", "D1"); S.seg("DD2", "D", "D2");
    S.seg("AE", "A", "E", { st: "aux" }); S.seg("EF", "E", "F"); S.seg("AG", "A", "G", { st: "aux" });
    S.seg("FG", "F", "G"); S.seg("CG", "C", "G");
    S.ang("aD", "D1", "D", "D2", { st: "yel", r: 36 }); S.ang("aCEF", "C", "E", "F", { st: "yel", r: 36 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "BC", "CA", "D", "D1", "D2", "DD1", "DD2", "aD"] },
    { show: ["E", "AE"], why: ["I.10", "P1"] },
    { show: ["EF", "aCEF"], why: ["I.23"] },
    { show: ["F", "G", "AG", "FG", "CG"], why: ["I.31"] },
    { show: ["tABE", "tAEC"], why: ["I.38"] },
    { show: ["qFECG"], hide: ["tABE", "tAEC"], why: ["I.41", "A1"] }
  ],
  text: {
    zh: [
      "设 ABC 是已知三角形，D 是已知直线角。要求在等于 ∠D 的角内作一个平行四边形，使它等于三角形 ABC。（各点都可以拖动，包括角 D 的两边。）",
      "把 BC 二等分于 E，连接 AE。",
      "在直线 EC 上的点 E 处作 ∠CEF 等于 ∠D。",
      "过 A 作 AG 平行于 EC，过 C 作 CG 平行于 EF。于是 FECG 是平行四边形。",
      "因为 BE 等于 EC，所以三角形 ABE 等于三角形 AEC，于是三角形 ABC 是三角形 AEC 的两倍。",
      "平行四边形 FECG 与三角形 AEC 同底、在同一对平行线之间，所以也是 AEC 的两倍。因此 FECG 等于三角形 ABC，而且它的 ∠CEF 等于 ∠D。"
    ],
    en: [
      "Let ABC be the given triangle, and D the given rectilineal angle. It is required to construct in the rectilineal angle D a parallelogram equal to the triangle ABC. (Every point can be dragged, including the arms of the angle D.)",
      "Let BC be bisected at E, and let AE be joined.",
      "On the straight line EC, at the point E on it, let the angle CEF be constructed equal to the angle D.",
      "Through A let AG be drawn parallel to EC, and through C let CG be drawn parallel to EF. Then FECG is a parallelogram.",
      "Since BE is equal to EC, the triangle ABE is equal to the triangle AEC; therefore the triangle ABC is double of the triangle AEC.",
      "The parallelogram FECG is on the same base with the triangle AEC and in the same parallels, so it too is double of AEC. Therefore FECG is equal to the triangle ABC, and it has the angle CEF equal to the angle D."
    ],
    es: [
      "Sea ABC el triángulo dado y D el ángulo rectilíneo dado. Hay que construir en el ángulo rectilíneo D un paralelogramo igual al triángulo ABC. (Todos los puntos se pueden arrastrar, incluidos los lados del ángulo D.)",
      "Divídase BC en dos partes iguales en E, y trácese AE.",
      "Sobre la recta EC, en su punto E, constrúyase el ángulo CEF igual al ángulo D.",
      "Por A trácese AG paralela a EC, y por C trácese CG paralela a EF. Entonces FECG es un paralelogramo.",
      "Como BE es igual a EC, el triángulo ABE es igual al triángulo AEC; por tanto el triángulo ABC es el doble del triángulo AEC.",
      "El paralelogramo FECG está sobre la misma base que el triángulo AEC y entre las mismas paralelas, así que también es el doble de AEC. Por tanto FECG es igual al triángulo ABC, y tiene el ángulo CEF igual al ángulo D."
    ],
    fr: [
      "Soit ABC le triangle donné et D l'angle rectiligne donné. Il faut construire dans l'angle rectiligne D un parallélogramme égal au triangle ABC. (Tous les points peuvent être déplacés, y compris les côtés de l'angle D.)",
      "Partageons BC en deux parties égales en E, et menons AE.",
      "Sur la droite EC, en son point E, construisons l'angle CEF égal à l'angle D.",
      "Par A menons AG parallèle à EC, et par C menons CG parallèle à EF. Alors FECG est un parallélogramme.",
      "Puisque BE est égale à EC, le triangle ABE est égal au triangle AEC ; donc le triangle ABC est double du triangle AEC.",
      "Le parallélogramme FECG est sur la même base que le triangle AEC et entre les mêmes parallèles, donc il est aussi double de AEC. Donc FECG est égal au triangle ABC, et il a l'angle CEF égal à l'angle D."
    ],
    de: [
      "Das gegebene Dreieck sei ABC und der gegebene geradlinige Winkel D. Man soll im geradlinigen Winkel D ein Parallelogramm errichten, das dem Dreieck ABC gleich ist. (Alle Punkte lassen sich ziehen, auch die Schenkel des Winkels D.)",
      "Man halbiere BC in E und ziehe AE.",
      "An der Geraden EC errichte man im Punkt E den Winkel CEF gleich dem Winkel D.",
      "Durch A ziehe man AG parallel zu EC und durch C ziehe man CG parallel zu EF. Dann ist FECG ein Parallelogramm.",
      "Da BE gleich EC ist, ist das Dreieck ABE dem Dreieck AEC gleich; also ist das Dreieck ABC doppelt so groß wie das Dreieck AEC.",
      "Das Parallelogramm FECG hat mit dem Dreieck AEC dieselbe Grundlinie und liegt zwischen denselben Parallelen, also ist es ebenfalls doppelt so groß wie AEC. Also ist FECG dem Dreieck ABC gleich, und es hat den Winkel CEF gleich dem Winkel D."
    ],
    ru: [
      "Пусть ABC — данный треугольник, а D — данный прямолинейный угол. Требуется в прямолинейном угле D построить параллелограмм, равный треугольнику ABC. (Все точки можно перетаскивать, включая стороны угла D.)",
      "Рассечём BC пополам в точке E и проведём AE.",
      "На прямой EC при точке E построим угол CEF, равный углу D.",
      "Через A проведём AG параллельно EC, а через C проведём CG параллельно EF. Тогда FECG — параллелограмм.",
      "Так как BE равна EC, треугольник ABE равен треугольнику AEC; значит, треугольник ABC вдвое больше треугольника AEC.",
      "Параллелограмм FECG имеет то же основание, что и треугольник AEC, и находится между теми же параллельными, так что он тоже вдвое больше AEC. Значит, FECG равен треугольнику ABC и имеет угол CEF, равный углу D."
    ],
    ar: [
      "ليكن ABC المثلث المعلوم، وD الزاوية المستقيمة الخطين المعلومة. ونريد أن نعمل في زاوية مساوية لـ D متوازي أضلاع مساويًا للمثلث ABC. (يمكن سحب جميع النقاط، ومنها ضلعا الزاوية D.)",
      "نقسم BC بنصفين عند E، ونصل AE.",
      "ونعمل على الخط EC عند النقطة E الزاوية CEF مساوية للزاوية D.",
      "ونُخرج من A الخط AG موازيًا لـ EC، ومن C الخط CG موازيًا لـ EF. فيكون FECG متوازي أضلاع.",
      "لأن BE مساوٍ لـ EC، فالمثلث ABE مساوٍ للمثلث AEC؛ فالمثلث ABC ضعف المثلث AEC.",
      "ومتوازي الأضلاع FECG على قاعدة المثلث AEC نفسها وبين المتوازيين نفسيهما، فهو أيضًا ضعف AEC. فـ FECG مساوٍ للمثلث ABC، وزاويته CEF مساوية للزاوية D."
    ],
    hi: [
      "मान लीजिए ABC दिया गया त्रिभुज है, और D दिया गया ऋजुरेखीय कोण है। कोण D के बराबर कोण में त्रिभुज ABC के बराबर एक समांतर चतुर्भुज बनाना है। (सभी बिंदुओं को खींचा जा सकता है, कोण D की भुजाओं समेत।)",
      "BC को E पर समद्विभाजित कीजिए, और AE मिलाइए।",
      "सरल रेखा EC पर बिंदु E पर कोण CEF को कोण D के बराबर बनाइए।",
      "A से होकर EC के समांतर AG खींचिए, और C से होकर EF के समांतर CG खींचिए। तब FECG समांतर चतुर्भुज है।",
      "चूँकि BE, EC के बराबर है, इसलिए त्रिभुज ABE त्रिभुज AEC के बराबर है; अतः त्रिभुज ABC त्रिभुज AEC का दुगुना है।",
      "समांतर चतुर्भुज FECG और त्रिभुज AEC का आधार एक ही है और वे एक ही समांतर रेखाओं के बीच हैं, अतः FECG भी AEC का दुगुना है। इसलिए FECG त्रिभुज ABC के बराबर है, और उसका कोण CEF कोण D के बराबर है।"
    ],
    ja: [
      "ABC を与えられた三角形、D を与えられた直線角とする。直線角 D に等しい角をもち、三角形 ABC に等しい平行四辺形を作図しなければならない。（角 D の 2 辺も含め、すべての点をドラッグできます。）",
      "BC を E で 2 等分し、AE を結ぶ。",
      "直線 EC 上の点 E において、角 CEF を角 D に等しく作図する。",
      "A を通って EC に平行に AG を、C を通って EF に平行に CG を引く。すると FECG は平行四辺形である。",
      "BE は EC に等しいから、三角形 ABE は三角形 AEC に等しい。よって三角形 ABC は三角形 AEC の 2 倍である。",
      "平行四辺形 FECG は三角形 AEC と同じ底辺をもち、同じ平行線の間にあるから、これも AEC の 2 倍である。ゆえに FECG は三角形 ABC に等しく、角 CEF は角 D に等しい。"
    ]
  }
});
