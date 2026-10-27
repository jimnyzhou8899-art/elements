// Proposition I.44
PROP(44, {
  vb: [0, 0, 720, 460],
  build(S) {
    S.free("A", 70, 210, { ld: { x: -1, y: 0 } }); S.free("B", 320, 210, { ld: { x: -0.7, y: -0.8 } });
    // the given triangle C and the given angle D
    S.free("C", 560, 130, { ld: { x: -1, y: -0.3 } }); S.free("C2", 700, 140, { lab: false }); S.free("C3", 610, 260, { lab: false });
    S.free("D", 540, 420, { ld: { x: -1, y: 0.3 } }); S.free("D1", 690, 420, { lab: false }); S.free("D2", 610, 310, { lab: false });
    const th = g => Math.acos(Math.max(-1, Math.min(1, V.dot(V.unit(V.sub(g("D1"), g("D"))), V.unit(V.sub(g("D2"), g("D")))))));
    const area = g => { const p = V.sub(g("C2"), g("C")), q = V.sub(g("C3"), g("C")); return Math.abs(p.x * q.y - p.y * q.x) / 2; };
    const u = g => V.unit(V.sub(g("B"), g("A")));
    const a = g => V.dist(g("A"), g("B"));
    const BG = 150;
    const v = g => V.mul(rot(u(g), -th(g)), BG);
    const e = g => area(g) / (BG * Math.max(0.05, Math.sin(th(g))));
    // BEFG: the parallelogram equal to C in the angle D (I.42), with BE in line with AB
    S.pt("E", g => V.add(g("B"), V.mul(u(g), e(g))), { ld: { x: 0.4, y: 1 } });
    S.pt("G", g => V.add(g("B"), v(g)), { ld: { x: 0, y: -1 } });
    S.pt("F", g => V.add(g("E"), v(g)), { ld: { x: 0.4, y: -1 } });
    S.pt("H", g => V.add(g("A"), v(g)), { ld: { x: 0, y: -1 } });
    const k = g => e(g) / a(g);
    S.pt("K", g => V.sub(g("E"), V.mul(v(g), k(g))), { ld: { x: 0.6, y: 1 } });
    S.pt("L", g => V.sub(g("A"), V.mul(v(g), k(g))), { ld: { x: -0.6, y: 1 } });
    S.pt("M", g => V.sub(g("B"), V.mul(v(g), k(g))), { ld: { x: 0, y: 1 } });
    S.poly("tC", ["C", "C2", "C3"], { st: "blue" });
    S.poly("qBEFG", ["B", "E", "F", "G"], { st: "blue" }); S.poly("qLMBA", ["L", "M", "B", "A"], { st: "red" });
    S.seg("AB", "A", "B"); S.seg("sC1", "C", "C2"); S.seg("sC2", "C2", "C3"); S.seg("sC3", "C3", "C");
    S.seg("DD1", "D", "D1"); S.seg("DD2", "D", "D2");
    S.seg("BE", "B", "E"); S.seg("EF", "E", "F"); S.seg("FG", "F", "G"); S.seg("GB", "G", "B");
    S.seg("HG", "H", "G"); S.seg("AH", "A", "H");
    S.seg("HK", "H", "K", { st: "aux" }); S.seg("EK", "E", "K");
    S.seg("KL", "K", "L"); S.seg("AL", "A", "L"); S.seg("BM", "B", "M");
    S.ang("aD", "D1", "D", "D2", { st: "yel", r: 34 }); S.ang("aEBG", "E", "B", "G", { st: "yel", r: 26 });
    S.ang("aABM", "A", "B", "M", { st: "yel", r: 26 });
  },
  steps: [
    { show: ["A", "B", "AB", "C", "C2", "C3", "sC1", "sC2", "sC3", "tC", "D", "D1", "D2", "DD1", "DD2", "aD"] },
    { show: ["E", "F", "G", "BE", "EF", "FG", "GB", "qBEFG", "aEBG"], why: ["I.42"] },
    { show: ["H", "HG", "AH"], why: ["P2", "I.31"] },
    { show: ["K", "HK", "EK"], why: ["I.29", "P5"] },
    { show: ["L", "M", "KL", "AL", "BM"], why: ["I.31"] },
    { show: ["qLMBA"], why: ["I.43"] },
    { show: ["aABM"], why: ["A1", "I.15"] }
  ],
  text: {
    zh: [
      "设 AB 是已知直线，C 是已知三角形，D 是已知直线角。要求在直线 AB 上贴合作一个平行四边形，使它等于三角形 C，并且有一个角等于 ∠D。（各点都可以拖动。）",
      "作平行四边形 BEFG 等于三角形 C，使 ∠EBG 等于 ∠D，并使 BE 与 AB 在同一条直线上。",
      "把 FG 延长到 H，过 A 作 AH 平行于 BG 或 EF。",
      "连接 HB。因为 ∠AHF、∠HFE 之和等于两个直角，所以 ∠BHG、∠GFE 之和小于两个直角，于是 HB、FE 延长后必定相交，设交于 K。",
      "过 K 作 KL 平行于 EA 或 FH，并把 HA、GB 延长到 L、M。",
      "于是 HLKF 是平行四边形，HK 是它的对角线，LB、BF 是补形，所以 LB 等于 BF。",
      "而 BF 等于三角形 C，所以 LB 也等于 C。又 ∠GBE 等于 ∠ABM，也就等于 ∠D。这样就在直线 AB 上贴合作出了等于三角形 C、且 ∠ABM 等于 ∠D 的平行四边形 LB。"
    ],
    en: [
      "Let AB be the given straight line, C the given triangle and D the given rectilineal angle. It is required to apply to the straight line AB, in an angle equal to the angle D, a parallelogram equal to the triangle C. (Every point can be dragged.)",
      "Let the parallelogram BEFG be constructed equal to the triangle C, in the angle EBG equal to the angle D, and let it be placed so that BE is in a straight line with AB.",
      "Let FG be drawn through to H, and through A let AH be drawn parallel to either BG or EF.",
      "Let HB be joined. Since the angles AHF, HFE are equal to two right angles, the angles BHG, GFE are less than two right angles; so HB, FE when produced will meet. Let them meet at K.",
      "Through K let KL be drawn parallel to either EA or FH, and let HA, GB be produced to the points L, M.",
      "Then HLKF is a parallelogram, HK is its diameter, and LB, BF are the complements; therefore LB is equal to BF.",
      "But BF is equal to the triangle C; therefore LB is also equal to C. And the angle GBE is equal to the angle ABM, and so to the angle D. Therefore the parallelogram LB, equal to the triangle C, has been applied to the straight line AB in the angle ABM equal to the angle D."
    ],
    es: [
      "Sea AB la recta dada, C el triángulo dado y D el ángulo rectilíneo dado. Hay que aplicar a la recta AB, en un ángulo igual al ángulo D, un paralelogramo igual al triángulo C. (Todos los puntos se pueden arrastrar.)",
      "Constrúyase el paralelogramo BEFG igual al triángulo C, en el ángulo EBG igual al ángulo D, y colóquese de modo que BE esté en línea recta con AB.",
      "Prolónguese FG hasta H, y por A trácese AH paralela a BG o a EF.",
      "Trácese HB. Como los ángulos AHF, HFE son iguales a dos rectos, los ángulos BHG, GFE son menores que dos rectos; así HB, FE prolongadas se encontrarán. Encuéntrense en K.",
      "Por K trácese KL paralela a EA o a FH, y prolónguense HA, GB hasta los puntos L, M.",
      "Entonces HLKF es un paralelogramo, HK es su diagonal, y LB, BF son los complementos; por tanto LB es igual a BF.",
      "Pero BF es igual al triángulo C; por tanto LB es también igual a C. Además el ángulo GBE es igual al ángulo ABM, y así al ángulo D. Por tanto se ha aplicado a la recta AB el paralelogramo LB, igual al triángulo C, en el ángulo ABM igual al ángulo D."
    ],
    fr: [
      "Soit AB la droite donnée, C le triangle donné et D l'angle rectiligne donné. Il faut appliquer à la droite AB, dans un angle égal à l'angle D, un parallélogramme égal au triangle C. (Tous les points peuvent être déplacés.)",
      "Construisons le parallélogramme BEFG égal au triangle C, dans l'angle EBG égal à l'angle D, et plaçons-le de sorte que BE soit en ligne droite avec AB.",
      "Prolongeons FG jusqu'en H, et par A menons AH parallèle à BG ou à EF.",
      "Menons HB. Puisque les angles AHF, HFE sont égaux à deux droits, les angles BHG, GFE sont plus petits que deux droits ; donc HB, FE prolongées se rencontreront. Qu'elles se rencontrent en K.",
      "Par K menons KL parallèle à EA ou à FH, et prolongeons HA, GB jusqu'aux points L, M.",
      "Alors HLKF est un parallélogramme, HK sa diagonale, et LB, BF sont les compléments ; donc LB est égal à BF.",
      "Mais BF est égal au triangle C ; donc LB est aussi égal à C. Et l'angle GBE est égal à l'angle ABM, donc à l'angle D. Ainsi on a appliqué à la droite AB le parallélogramme LB, égal au triangle C, dans l'angle ABM égal à l'angle D."
    ],
    de: [
      "Die gegebene Gerade sei AB, das gegebene Dreieck C und der gegebene geradlinige Winkel D. Man soll an die Gerade AB in einem Winkel gleich dem Winkel D ein Parallelogramm anlegen, das dem Dreieck C gleich ist. (Alle Punkte lassen sich ziehen.)",
      "Man errichte das Parallelogramm BEFG gleich dem Dreieck C im Winkel EBG gleich dem Winkel D, und zwar so, dass BE mit AB in gerader Linie liegt.",
      "Man verlängere FG bis H und ziehe durch A die Gerade AH parallel zu BG oder EF.",
      "Man ziehe HB. Da die Winkel AHF, HFE zusammen zwei Rechten gleich sind, sind die Winkel BHG, GFE kleiner als zwei Rechte; also treffen sich HB, FE verlängert. Sie mögen sich in K treffen.",
      "Durch K ziehe man KL parallel zu EA oder FH und verlängere HA, GB bis zu den Punkten L, M.",
      "Dann ist HLKF ein Parallelogramm, HK seine Diagonale, und LB, BF sind die Ergänzungen; also ist LB gleich BF.",
      "BF ist aber dem Dreieck C gleich; also ist auch LB gleich C. Und der Winkel GBE ist gleich dem Winkel ABM und damit gleich dem Winkel D. Also ist an die Gerade AB das Parallelogramm LB, gleich dem Dreieck C, im Winkel ABM gleich dem Winkel D angelegt."
    ],
    ru: [
      "Пусть AB — данная прямая, C — данный треугольник, а D — данный прямолинейный угол. Требуется приложить к прямой AB в угле, равном углу D, параллелограмм, равный треугольнику C. (Все точки можно перетаскивать.)",
      "Построим параллелограмм BEFG, равный треугольнику C, в угле EBG, равном углу D, и расположим его так, чтобы BE была на одной прямой с AB.",
      "Продолжим FG до H и через A проведём AH параллельно BG или EF.",
      "Проведём HB. Так как углы AHF, HFE вместе равны двум прямым, углы BHG, GFE меньше двух прямых; значит, HB, FE при продолжении встретятся. Пусть они встречаются в точке K.",
      "Через K проведём KL параллельно EA или FH и продолжим HA, GB до точек L, M.",
      "Тогда HLKF — параллелограмм, HK — его диаметр, а LB, BF — дополнения; значит, LB равен BF.",
      "Но BF равен треугольнику C; значит, и LB равен C. А угол GBE равен углу ABM, то есть углу D. Итак, к прямой AB приложен параллелограмм LB, равный треугольнику C, в угле ABM, равном углу D."
    ],
    ar: [
      "ليكن AB الخط المستقيم المعلوم، وC المثلث المعلوم، وD الزاوية المستقيمة الخطين المعلومة. ونريد أن نضيف إلى الخط AB، في زاوية مساوية للزاوية D، متوازي أضلاع مساويًا للمثلث C. (يمكن سحب جميع النقاط.)",
      "نعمل متوازي الأضلاع BEFG مساويًا للمثلث C في الزاوية EBG المساوية للزاوية D، ونضعه بحيث يكون BE على استقامة AB.",
      "ونُخرج FG إلى H، ونُخرج من A الخط AH موازيًا لـ BG أو EF.",
      "ونصل HB. لأن الزاويتين AHF، HFE مساويتان لقائمتين، فالزاويتان BHG، GFE أصغر من قائمتين؛ فإذا أُخرج HB، FE التقيا. فليلتقيا عند K.",
      "ونُخرج من K الخط KL موازيًا لـ EA أو FH، ونُخرج HA، GB إلى النقطتين L، M.",
      "فيكون HLKF متوازي أضلاع، وHK قطره، وLB، BF المتمّمان؛ فـ LB مساوٍ لـ BF.",
      "لكن BF مساوٍ للمثلث C؛ فـ LB أيضًا مساوٍ لـ C. والزاوية GBE مساوية للزاوية ABM، أي للزاوية D. فقد أضفنا إلى الخط AB متوازي الأضلاع LB مساويًا للمثلث C في الزاوية ABM المساوية للزاوية D."
    ],
    hi: [
      "मान लीजिए AB दी गई सरल रेखा है, C दिया गया त्रिभुज है और D दिया गया ऋजुरेखीय कोण है। सरल रेखा AB पर, कोण D के बराबर कोण में, त्रिभुज C के बराबर समांतर चतुर्भुज लगाना है। (सभी बिंदुओं को खींचा जा सकता है।)",
      "त्रिभुज C के बराबर समांतर चतुर्भुज BEFG बनाइए, जिसका कोण EBG कोण D के बराबर हो, और उसे इस प्रकार रखिए कि BE, AB की सीध में हो।",
      "FG को H तक बढ़ाइए, और A से होकर BG या EF के समांतर AH खींचिए।",
      "HB मिलाइए। चूँकि कोण AHF, HFE का योग दो समकोणों के बराबर है, कोण BHG, GFE का योग दो समकोणों से कम है; अतः HB, FE बढ़ाने पर मिलेंगी। मान लीजिए वे K पर मिलती हैं।",
      "K से होकर EA या FH के समांतर KL खींचिए, और HA, GB को बिंदुओं L, M तक बढ़ाइए।",
      "तब HLKF समांतर चतुर्भुज है, HK उसका विकर्ण है, और LB, BF पूरक हैं; अतः LB, BF के बराबर है।",
      "पर BF त्रिभुज C के बराबर है; अतः LB भी C के बराबर है। और कोण GBE कोण ABM के बराबर है, यानी कोण D के बराबर। इस प्रकार सरल रेखा AB पर त्रिभुज C के बराबर समांतर चतुर्भुज LB, कोण D के बराबर कोण ABM में, लगा दिया गया।"
    ],
    ja: [
      "AB を与えられた直線、C を与えられた三角形、D を与えられた直線角とする。直線 AB に、角 D に等しい角をもち三角形 C に等しい平行四辺形を付置しなければならない。（すべての点をドラッグできます。）",
      "三角形 C に等しく、角 EBG が角 D に等しい平行四辺形 BEFG を、BE が AB と一直線になるように作図する。",
      "FG を H まで延長し、A を通って BG または EF に平行に AH を引く。",
      "HB を結ぶ。角 AHF、HFE の和は 2 直角に等しいから、角 BHG、GFE の和は 2 直角より小さい。よって HB、FE を延長すると交わる。K で交わるとする。",
      "K を通って EA または FH に平行に KL を引き、HA、GB を点 L、M まで延長する。",
      "すると HLKF は平行四辺形で HK はその対角線、LB、BF は補形である。よって LB は BF に等しい。",
      "しかし BF は三角形 C に等しい。よって LB も C に等しい。また角 GBE は角 ABM に、すなわち角 D に等しい。ゆえに直線 AB に、三角形 C に等しく角 ABM が角 D に等しい平行四辺形 LB が付置された。"
    ]
  }
});
