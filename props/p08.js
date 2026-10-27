// Proposition I.8
PROP(8, {
  vb: [0, 0, 720, 520],
  build(S) {
    S.free("A", 170, 140); S.free("B", 80, 400); S.free("C", 310, 400);
    S.free("E", 400, 420);
    // F turns about E; D follows so that DEF is always a copy of ABC
    S.glide("F", -0.25, (g, t) => V.add(g("E"), rot(V.sub(g("C"), g("B")), t)),
      (g, m) => angOf(V.sub(m, g("E"))) - angOf(V.sub(g("C"), g("B"))));
    S.pt("D", g => V.add(g("E"), rot(V.sub(g("A"), g("B")), angOf(V.sub(g("F"), g("E"))) - angOf(V.sub(g("C"), g("B"))))));
    S.param("t", 0);
    const moved = p => g => carry(g(p), g("B"), g("C"), g("E"), g("F"), g("t").x);
    S.pt("A1", moved("A"), { lab: false }); S.pt("B1", moved("B"), { lab: false }); S.pt("C1", moved("C"), { lab: false });
    S.poly("ghost", ["A1", "B1", "C1"], { st: "yel" });
    // G: where A would land if it missed D (mirror of D in EF), only to picture the I.7 argument
    S.pt("G", g => { const p = V.proj(g("D"), g("E"), g("F")); return V.add(p, V.mul(V.sub(p, g("D")), -0.35)); });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("AC", "A", "C", { st: "blue" }); S.seg("BC", "B", "C");
    S.seg("DE", "D", "E", { st: "red" }); S.seg("DF", "D", "F", { st: "blue" }); S.seg("EF", "E", "F");
    S.seg("EG", "E", "G", { st: "aux" }); S.seg("GF", "G", "F", { st: "aux" });
    S.ang("aA", "B", "A", "C", { st: "yel", r: 30 }); S.ang("aD", "E", "D", "F", { st: "yel", r: 30 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "AC", "BC", "DE", "DF", "EF"] },
    { show: ["ghost"], tween: ["t", 0, 1], hl: ["BC", "EF"] },
    { show: ["G", "EG", "GF"], why: ["I.7"] },
    { show: ["aA", "aD"], hide: ["G", "EG", "GF", "ghost"], why: ["A4"] }
  ],
  text: {
    zh: [
      "设三角形 ABC、DEF 中，AB 等于 DE，AC 等于 DF，底 BC 等于底 EF。断言：∠BAC 等于 ∠EDF。（拖动 F 可以转动三角形 DEF。）",
      "把三角形 ABC 移到三角形 DEF 上，使点 B 落在点 E 上，直线 BC 落在 EF 上。因为 BC 等于 EF，所以点 C 与点 F 重合。",
      "BC 与 EF 重合，于是 BA、AC 也与 ED、DF 重合。否则它们会落在别处，比如 EG、GF，那样在同一条线段 EF 上、同一侧，就会有另外两条线段交于另一点，并分别等于从同样两端作出的两条线段，这是不可能的。",
      "所以 ∠BAC 与 ∠EDF 重合，两者相等。"
    ],
    en: [
      "Let ABC, DEF be two triangles with AB equal to DE, AC equal to DF, and the base BC equal to the base EF. The claim: the angle BAC is equal to the angle EDF. (Drag F to turn the triangle DEF.)",
      "Let the triangle ABC be applied to the triangle DEF, with the point B placed on the point E and the straight line BC on EF. Since BC is equal to EF, the point C will coincide with F.",
      "BC coinciding with EF, BA and AC will also coincide with ED and DF. Otherwise they would fall beside them, as EG, GF; then on the same straight line EF, on the same side, there would be two other straight lines meeting at another point and equal to the two drawn from the same ends, which is impossible.",
      "Therefore the angle BAC coincides with the angle EDF and is equal to it."
    ],
    es: [
      "Sean ABC, DEF dos triángulos con AB igual a DE, AC igual a DF y la base BC igual a la base EF. Se afirma que el ángulo BAC es igual al ángulo EDF. (Arrastra F para girar el triángulo DEF.)",
      "Aplíquese el triángulo ABC sobre el triángulo DEF, colocando el punto B sobre el punto E y la recta BC sobre EF. Como BC es igual a EF, el punto C coincidirá con F.",
      "Coincidiendo BC con EF, también BA y AC coincidirán con ED y DF. De lo contrario caerían al lado, como EG, GF; entonces sobre la misma recta EF y del mismo lado habría otras dos rectas que se encuentran en otro punto e iguales a las dos trazadas desde los mismos extremos, lo cual es imposible.",
      "Por tanto el ángulo BAC coincide con el ángulo EDF y es igual a él."
    ],
    fr: [
      "Soient ABC, DEF deux triangles où AB est égale à DE, AC égale à DF, et la base BC égale à la base EF. Je dis que l'angle BAC est égal à l'angle EDF. (Déplacez F pour faire tourner le triangle DEF.)",
      "Appliquons le triangle ABC sur le triangle DEF, le point B sur le point E et la droite BC sur EF. Puisque BC est égale à EF, le point C coïncidera avec F.",
      "BC coïncidant avec EF, BA et AC coïncideront aussi avec ED et DF. Sinon elles tomberaient à côté, comme EG, GF ; alors sur la même droite EF, du même côté, il y aurait deux autres droites se rencontrant en un autre point et égales aux deux menées des mêmes extrémités, ce qui est impossible.",
      "Donc l'angle BAC coïncide avec l'angle EDF et lui est égal."
    ],
    de: [
      "In den Dreiecken ABC, DEF sei AB gleich DE, AC gleich DF und die Grundlinie BC gleich der Grundlinie EF. Behauptung: Der Winkel BAC ist gleich dem Winkel EDF. (Ziehen Sie F, um das Dreieck DEF zu drehen.)",
      "Man lege das Dreieck ABC so auf das Dreieck DEF, dass der Punkt B auf den Punkt E und die Strecke BC auf EF fällt. Da BC gleich EF ist, fällt der Punkt C auf F.",
      "Deckt BC die Strecke EF, so decken auch BA und AC die Strecken ED und DF. Sonst fielen sie daneben, etwa als EG, GF; dann gäbe es über derselben Strecke EF auf derselben Seite zwei andere Strecken, die sich in einem anderen Punkt treffen und den beiden von denselben Endpunkten gezogenen gleich sind, was unmöglich ist.",
      "Also deckt der Winkel BAC den Winkel EDF und ist ihm gleich."
    ],
    ru: [
      "Пусть в треугольниках ABC, DEF сторона AB равна DE, AC равна DF, а основание BC равно основанию EF. Утверждается, что угол BAC равен углу EDF. (Перетаскивайте F, чтобы поворачивать треугольник DEF.)",
      "Наложим треугольник ABC на треугольник DEF так, чтобы точка B совпала с точкой E, а прямая BC легла на EF. Так как BC равна EF, точка C совпадёт с F.",
      "Когда BC совпадает с EF, то и BA, AC совпадут с ED, DF. Иначе они легли бы рядом, как EG, GF; тогда на той же прямой EF, по ту же сторону, нашлись бы две другие прямые, встречающиеся в другой точке и равные двум, проведённым из тех же концов, что невозможно.",
      "Значит, угол BAC совмещается с углом EDF и равен ему."
    ],
    ar: [
      "ليكن المثلثان ABC، DEF، وفيهما AB مساوٍ لـ DE، وAC مساوٍ لـ DF، والقاعدة BC مساوية للقاعدة EF. فنقول: إن الزاوية BAC مساوية للزاوية EDF. (اسحب F لتدوير المثلث DEF.)",
      "نطبّق المثلث ABC على المثلث DEF، فنضع النقطة B على النقطة E والخط BC على EF. ولأن BC مساوٍ لـ EF تنطبق النقطة C على F.",
      "وإذا انطبق BC على EF انطبق BA، AC أيضًا على ED، DF. وإلا وقعا بجانبهما مثل EG، GF؛ فيكون على الخط EF نفسه، وفي الجهة نفسها، خطان آخران يلتقيان عند نقطة أخرى ويساويان الخطين الخارجين من الطرفين نفسيهما، وهذا محال.",
      "فالزاوية BAC تنطبق على الزاوية EDF وتساويها."
    ],
    hi: [
      "मान लीजिए त्रिभुजों ABC, DEF में AB, DE के बराबर है, AC, DF के बराबर है, और आधार BC आधार EF के बराबर है। दावा: कोण BAC कोण EDF के बराबर है। (त्रिभुज DEF को घुमाने के लिए F को खींचिए।)",
      "त्रिभुज ABC को त्रिभुज DEF पर इस प्रकार रखिए कि बिंदु B बिंदु E पर पड़े और सरल रेखा BC, EF पर। चूँकि BC, EF के बराबर है, इसलिए बिंदु C बिंदु F से संपाती होगा।",
      "BC के EF से संपाती होने पर BA, AC भी ED, DF से संपाती होंगी। वरना वे बगल में EG, GF की तरह पड़तीं; तब उसी सरल रेखा EF पर, उसी ओर, दो अन्य सरल रेखाएँ किसी अन्य बिंदु पर मिलतीं और उन्हीं सिरों से खींची गई दो रेखाओं के बराबर होतीं, जो असंभव है।",
      "इसलिए कोण BAC कोण EDF से संपाती है और उसके बराबर है।"
    ],
    ja: [
      "三角形 ABC、DEF において、AB が DE に、AC が DF に、底辺 BC が底辺 EF に等しいとする。主張：角 BAC は角 EDF に等しい。（F をドラッグすると三角形 DEF が回転します。）",
      "三角形 ABC を三角形 DEF に重ね、点 B を点 E に、直線 BC を EF に重ねる。BC は EF に等しいから、点 C は F と一致する。",
      "BC が EF と一致すれば、BA、AC も ED、DF と一致する。さもなければ EG、GF のようにずれて落ち、同じ直線 EF の上の同じ側に、同じ両端から引いた 2 直線に等しく別の点で交わる 2 直線があることになり、不可能である。",
      "よって角 BAC は角 EDF と一致し、それに等しい。"
    ]
  }
});
