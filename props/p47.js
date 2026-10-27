// Proposition I.47
PROP(47, {
  vb: [0, 0, 720, 570],
  build(S) {
    S.free("B", 250, 300); S.free("C", 470, 300);
    // A slides on the semicircle over BC, so ∠BAC stays a right angle.
    const frame = g => {
      const B = g("B"), C = g("C"), M = V.mid(B, C), u = V.unit(V.sub(C, B));
      return { M, u, n: { x: u.y, y: -u.x }, r: V.dist(B, C) / 2 };
    };
    S.glide("A", 0.95, (g, t) => { const F = frame(g); return V.add(F.M, V.mul(V.add(V.mul(F.u, Math.cos(t)), V.mul(F.n, Math.sin(t))), F.r)); },
      (g, m) => {
        const F = frame(g), w = V.sub(m, F.M);
        let t = Math.atan2(V.dot(w, F.n), V.dot(w, F.u));
        if (t < 0) t = V.dot(w, F.u) > 0 ? 0 : Math.PI;
        return Math.min(Math.PI * 0.86, Math.max(Math.PI * 0.14, t));
      }, { ld: { x: 0, y: -1 } });
    const sq = (a, b, away, i) => g => square(g(a), g(b), g(away))[i];
    S.pt("D", sq("B", "C", "A", 0)); S.pt("E", sq("B", "C", "A", 1));
    S.pt("F", sq("B", "A", "C", 0)); S.pt("G", sq("B", "A", "C", 1));
    S.pt("H", sq("A", "C", "B", 0)); S.pt("K", sq("A", "C", "B", 1));
    S.pt("L", g => V.proj(g("A"), g("D"), g("E")), { ld: { x: 0, y: 1 } });
    S.pt("X", g => V.proj(g("A"), g("B"), g("C")), { lab: false });

    S.poly("tABD", ["A", "B", "D"], { st: "red" }); S.poly("tFBC", ["F", "B", "C"], { st: "red" });
    S.poly("rBL", ["B", "X", "L", "D"], { st: "red" }); S.poly("sAB", ["A", "B", "F", "G"], { st: "red" });
    S.poly("tACE", ["A", "C", "E"], { st: "blue" }); S.poly("tKCB", ["K", "C", "B"], { st: "blue" });
    S.poly("rCL", ["X", "C", "E", "L"], { st: "blue" }); S.poly("sAC", ["A", "C", "K", "H"], { st: "blue" });

    S.seg("AB", "A", "B"); S.seg("AC", "A", "C"); S.seg("BC", "B", "C");
    S.seg("BD", "B", "D"); S.seg("DE", "D", "E"); S.seg("EC", "E", "C");
    S.seg("BF", "B", "F"); S.seg("FG", "F", "G"); S.seg("GA", "G", "A");
    S.seg("AH", "A", "H"); S.seg("HK", "H", "K"); S.seg("KC", "K", "C");
    S.seg("AL", "A", "L", { st: "yel" });
    S.seg("AD", "A", "D", { st: "red" }); S.seg("FC", "F", "C", { st: "red" });
    S.seg("AE", "A", "E", { st: "blue" }); S.seg("BK", "B", "K", { st: "blue" });
    S.rang("rA", "B", "A", "C");
    S.ang("aDBA", "D", "B", "A", { st: "yel", r: 22 }); S.ang("aFBC", "F", "B", "C", { st: "yel", r: 34 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "AC", "BC", "rA"] },
    { show: ["D", "E", "BD", "DE", "EC", "F", "G", "BF", "FG", "GA", "H", "K", "AH", "HK", "KC"], why: ["I.46"] },
    { show: ["L", "AL"], why: ["I.31"] },
    { show: ["AD", "FC"], why: ["P1"] },
    { hl: ["GA", "AC", "AB", "AH"], why: ["D22", "I.14"] },
    { show: ["aDBA", "aFBC"], why: ["P4", "A2"] },
    { show: ["tABD", "tFBC"], hl: ["AD", "FC"], why: ["I.4"] },
    { show: ["rBL", "sAB"], hide: ["aDBA", "aFBC"], why: ["I.41"] },
    { hide: ["tABD", "tFBC"] },
    { show: ["AE", "BK", "tACE", "tKCB"], why: ["I.4", "I.41"] },
    { show: ["rCL", "sAC"], hide: ["tACE", "tKCB"] },
    { hl: ["BD", "DE", "EC", "BC"], why: ["A2"] }
  ],
  text: {
    zh: [
      "设 ABC 是直角三角形，∠BAC 是直角。断言：BC 上的正方形等于 BA、AC 上的正方形之和。（拖动 A，它沿 BC 上的半圆移动，直角始终保持。）",
      "在 BC 上作正方形 BDEC，在 BA、AC 上作正方形 GB、HC。",
      "过 A 作 AL 平行于 BD 或 CE。",
      "连接 AD、FC。",
      "因为 ∠BAC、∠BAG 都是直角，在直线 BA 上的点 A，不在同侧的两直线 AC、AG 所成的邻角之和等于两直角，所以 CA 与 AG 在同一直线上。同理，BA 与 AH 也在同一直线上。",
      "因为 ∠DBC 等于 ∠FBA（都是直角），给它们各加上 ∠ABC，所以整个 ∠DBA 等于整个 ∠FBC。",
      "又因为 DB 等于 BC，FB 等于 BA，两边 AB、BD 分别等于两边 FB、BC，且 ∠ABD 等于 ∠FBC，所以底 AD 等于底 FC，三角形 ABD 等于三角形 FBC。",
      "平行四边形 BL 与三角形 ABD 同底 BD，且在相同两平行线 BD、AL 之间，所以 BL 是三角形 ABD 的二倍。正方形 GB 与三角形 FBC 同底 FB，且在相同两平行线 FB、GC 之间，所以正方形 GB 是三角形 FBC 的二倍。",
      "等量的二倍彼此相等，所以平行四边形 BL 等于正方形 GB。",
      "同理，连接 AE、BK，可以证明三角形 ACE 等于三角形 KCB，从而平行四边形 CL 是前者的二倍，正方形 HC 是后者的二倍。",
      "所以平行四边形 CL 等于正方形 HC。",
      "整个正方形 BDEC 等于两个正方形 GB、HC 之和。而正方形 BDEC 作在 BC 上，正方形 GB、HC 作在 BA、AC 上，所以 BC 上的正方形等于 BA、AC 上的正方形之和。"
    ],
    en: [
      "Let ABC be a right-angled triangle having the angle BAC right. The claim: the square on BC is equal to the squares on BA, AC. (Drag A: it slides along the semicircle on BC, so the angle stays right.)",
      "On BC let the square BDEC be described, and on BA, AC the squares GB, HC.",
      "Through A let AL be drawn parallel to either BD or CE.",
      "Let AD, FC be joined.",
      "Since each of the angles BAC, BAG is right, with the straight line BA, and at the point A on it, the two straight lines AC, AG not lying on the same side make the adjacent angles equal to two right angles; therefore CA is in a straight line with AG. For the same reason BA is also in a straight line with AH.",
      "The angle DBC is equal to the angle FBA, for each is right; let the angle ABC be added to each; therefore the whole angle DBA is equal to the whole angle FBC.",
      "Since DB is equal to BC, and FB to BA, the two sides AB, BD are equal to the two sides FB, BC respectively, and the angle ABD is equal to the angle FBC; therefore the base AD is equal to the base FC, and the triangle ABD is equal to the triangle FBC.",
      "The parallelogram BL is double of the triangle ABD, for they have the same base BD and are in the same parallels BD, AL. And the square GB is double of the triangle FBC, for they again have the same base FB and are in the same parallels FB, GC.",
      "But the doubles of equals are equal to one another; therefore the parallelogram BL is also equal to the square GB.",
      "Similarly, if AE, BK be joined, the triangle ACE can be proved equal to the triangle KCB; the parallelogram CL is double of the first and the square HC double of the second.",
      "Therefore the parallelogram CL is also equal to the square HC.",
      "Therefore the whole square BDEC is equal to the two squares GB, HC. And the square BDEC is described on BC, and the squares GB, HC on BA, AC. Therefore the square on the side BC is equal to the squares on the sides BA, AC."
    ],
    es: [
      "Sea ABC un triángulo rectángulo con el ángulo BAC recto. Se afirma que el cuadrado de BC es igual a los cuadrados de BA, AC. (Arrastra A: se desliza por el semicírculo sobre BC, de modo que el ángulo sigue siendo recto.)",
      "Sobre BC descríbase el cuadrado BDEC, y sobre BA, AC los cuadrados GB, HC.",
      "Por A trácese AL paralela a BD o a CE.",
      "Trácense AD, FC.",
      "Como cada uno de los ángulos BAC, BAG es recto, con la recta BA y en su punto A, las dos rectas AC, AG, no situadas del mismo lado, forman ángulos adyacentes iguales a dos rectos; por tanto CA está en línea recta con AG. Por la misma razón, BA está también en línea recta con AH.",
      "El ángulo DBC es igual al ángulo FBA, pues ambos son rectos; añádase a cada uno el ángulo ABC; por tanto el ángulo total DBA es igual al ángulo total FBC.",
      "Como DB es igual a BC y FB a BA, los dos lados AB, BD son iguales respectivamente a los dos lados FB, BC, y el ángulo ABD es igual al ángulo FBC; por tanto la base AD es igual a la base FC, y el triángulo ABD es igual al triángulo FBC.",
      "El paralelogramo BL es el doble del triángulo ABD, pues tienen la misma base BD y están entre las mismas paralelas BD, AL. Asimismo, el cuadrado GB es el doble del triángulo FBC, pues tienen la misma base FB y están entre las mismas paralelas FB, GC.",
      "Los dobles de cosas iguales son iguales entre sí; por tanto el paralelogramo BL es también igual al cuadrado GB.",
      "Del mismo modo, si se trazan AE, BK, se demuestra que el triángulo ACE es igual al triángulo KCB; el paralelogramo CL es el doble del primero y el cuadrado HC el doble del segundo.",
      "Por tanto el paralelogramo CL es también igual al cuadrado HC.",
      "Por tanto el cuadrado total BDEC es igual a los dos cuadrados GB, HC. Ahora bien, el cuadrado BDEC está descrito sobre BC, y los cuadrados GB, HC sobre BA, AC. Por tanto el cuadrado del lado BC es igual a los cuadrados de los lados BA, AC."
    ],
    fr: [
      "Soit ABC un triangle rectangle ayant l'angle BAC droit. Je dis que le carré de BC est égal aux carrés de BA, AC. (Déplacez A : il glisse sur le demi-cercle construit sur BC, si bien que l'angle reste droit.)",
      "Sur BC, décrivons le carré BDEC, et sur BA, AC les carrés GB, HC.",
      "Par A, menons AL parallèle à BD ou à CE.",
      "Menons AD, FC.",
      "Puisque chacun des angles BAC, BAG est droit, avec la droite BA et en son point A, les deux droites AC, AG, non placées du même côté, font les angles adjacents égaux à deux droits ; donc CA est en ligne droite avec AG. Pour la même raison, BA est aussi en ligne droite avec AH.",
      "L'angle DBC est égal à l'angle FBA, car chacun est droit ; ajoutons à chacun l'angle ABC ; donc l'angle total DBA est égal à l'angle total FBC.",
      "Puisque DB est égale à BC et FB à BA, les deux côtés AB, BD sont égaux aux deux côtés FB, BC, chacun à chacun, et l'angle ABD est égal à l'angle FBC ; donc la base AD est égale à la base FC, et le triangle ABD est égal au triangle FBC.",
      "Le parallélogramme BL est double du triangle ABD, car ils ont la même base BD et sont entre les mêmes parallèles BD, AL. De même, le carré GB est double du triangle FBC, car ils ont la même base FB et sont entre les mêmes parallèles FB, GC.",
      "Or les doubles de choses égales sont égaux entre eux ; donc le parallélogramme BL est aussi égal au carré GB.",
      "De la même manière, en menant AE, BK, on montre que le triangle ACE est égal au triangle KCB ; le parallélogramme CL est double du premier et le carré HC double du second.",
      "Donc le parallélogramme CL est aussi égal au carré HC.",
      "Donc le carré total BDEC est égal aux deux carrés GB, HC. Or le carré BDEC est décrit sur BC, et les carrés GB, HC sur BA, AC. Donc le carré du côté BC est égal aux carrés des côtés BA, AC."
    ],
    de: [
      "Das Dreieck ABC sei rechtwinklig mit dem rechten Winkel BAC. Behauptung: Das Quadrat über BC ist den Quadraten über BA, AC zusammen gleich. (Ziehen Sie A: Der Punkt gleitet auf dem Halbkreis über BC, so dass der Winkel ein Rechter bleibt.)",
      "Über BC zeichne man das Quadrat BDEC, über BA, AC die Quadrate GB, HC.",
      "Durch A ziehe man AL parallel zu BD oder CE.",
      "Man ziehe AD, FC.",
      "Da jeder der Winkel BAC, BAG ein Rechter ist, bilden an der Strecke BA im Punkt A auf ihr die zwei nicht auf derselben Seite liegenden Strecken AC, AG Nebenwinkel, die zusammen zwei Rechten gleich sind; also liegt CA mit AG in gerader Linie. Aus demselben Grund liegt auch BA mit AH in gerader Linie.",
      "Der Winkel DBC ist gleich dem Winkel FBA, denn beide sind Rechte; man füge beiden den Winkel ABC hinzu; dann ist der ganze Winkel DBA gleich dem ganzen Winkel FBC.",
      "Da DB gleich BC und FB gleich BA ist, sind die zwei Seiten AB, BD den zwei Seiten FB, BC entsprechend gleich, und der Winkel ABD ist gleich dem Winkel FBC; also ist die Grundlinie AD gleich der Grundlinie FC, und das Dreieck ABD ist gleich dem Dreieck FBC.",
      "Das Parallelogramm BL ist doppelt so groß wie das Dreieck ABD, denn sie haben dieselbe Grundlinie BD und liegen zwischen denselben Parallelen BD, AL. Ebenso ist das Quadrat GB doppelt so groß wie das Dreieck FBC, denn sie haben dieselbe Grundlinie FB und liegen zwischen denselben Parallelen FB, GC.",
      "Die Doppelten von Gleichem sind aber einander gleich; also ist auch das Parallelogramm BL gleich dem Quadrat GB.",
      "Ebenso lässt sich, wenn man AE, BK zieht, zeigen, dass das Dreieck ACE gleich dem Dreieck KCB ist; das Parallelogramm CL ist doppelt so groß wie das erste, das Quadrat HC doppelt so groß wie das zweite.",
      "Also ist auch das Parallelogramm CL gleich dem Quadrat HC.",
      "Also ist das ganze Quadrat BDEC den zwei Quadraten GB, HC zusammen gleich. Das Quadrat BDEC ist über BC gezeichnet, die Quadrate GB, HC über BA, AC. Also ist das Quadrat über der Seite BC den Quadraten über den Seiten BA, AC zusammen gleich."
    ],
    ru: [
      "Пусть ABC — прямоугольный треугольник с прямым углом BAC. Утверждается, что квадрат на BC равен квадратам на BA, AC. (Перетаскивайте A: точка скользит по полуокружности на BC, поэтому угол остаётся прямым.)",
      "Опишем на BC квадрат BDEC, а на BA, AC — квадраты GB, HC.",
      "Через A проведём AL параллельно BD или CE.",
      "Проведём AD, FC.",
      "Так как каждый из углов BAC, BAG прямой, то к прямой BA в её точке A две прямые AC, AG, лежащие не по одну сторону, образуют смежные углы, равные двум прямым; значит, CA находится на одной прямой с AG. По той же причине и BA находится на одной прямой с AH.",
      "Угол DBC равен углу FBA, так как каждый из них прямой; прибавим к каждому угол ABC; значит, весь угол DBA равен всему углу FBC.",
      "Так как DB равна BC, а FB равна BA, то две стороны AB, BD равны соответственно двум сторонам FB, BC, и угол ABD равен углу FBC; значит, основание AD равно основанию FC, и треугольник ABD равен треугольнику FBC.",
      "Параллелограмм BL вдвое больше треугольника ABD, так как у них одно и то же основание BD и они находятся между одними и теми же параллельными BD, AL. И квадрат GB вдвое больше треугольника FBC, так как у них одно и то же основание FB и они находятся между одними и теми же параллельными FB, GC.",
      "Удвоенные равных равны между собой; значит, и параллелограмм BL равен квадрату GB.",
      "Подобным же образом, если провести AE, BK, доказывается, что треугольник ACE равен треугольнику KCB; параллелограмм CL вдвое больше первого, а квадрат HC вдвое больше второго.",
      "Значит, и параллелограмм CL равен квадрату HC.",
      "Значит, весь квадрат BDEC равен двум квадратам GB, HC. При этом квадрат BDEC описан на BC, а квадраты GB, HC — на BA, AC. Значит, квадрат на стороне BC равен квадратам на сторонах BA, AC."
    ],
    ar: [
      "ليكن ABC مثلثًا قائم الزاوية، وزاويته BAC قائمة. فنقول: إن المربع المرسوم على BC مساوٍ لمجموع المربعين المرسومين على BA، AC. (اسحب A: تنزلق على نصف الدائرة المرسوم على BC، فتبقى الزاوية قائمة.)",
      "نرسم على BC المربع BDEC، وعلى BA، AC المربعين GB، HC.",
      "ونُخرج من A الخط AL موازيًا لـ BD أو لـ CE.",
      "ونصل AD، FC.",
      "لأن كلًّا من الزاويتين BAC، BAG قائمة، فإن الخطين AC، AG، عند النقطة A من الخط BA وليسا في جهة واحدة منه، يُحدثان زاويتين متجاورتين مساويتين لقائمتين؛ فـ CA على استقامة AG. ولمثل ذلك يكون BA على استقامة AH.",
      "والزاوية DBC مساوية للزاوية FBA، لأن كلًّا منهما قائمة؛ فإذا زدنا على كلٍّ منهما الزاوية ABC، كانت الزاوية DBA بكاملها مساوية للزاوية FBC بكاملها.",
      "ولأن DB مساوٍ لـ BC، وFB مساوٍ لـ BA، يكون الضلعان AB، BD مساويين للضلعين FB، BC كلٌّ لنظيره، والزاوية ABD مساوية للزاوية FBC؛ فالقاعدة AD مساوية للقاعدة FC، والمثلث ABD مساوٍ للمثلث FBC.",
      "ومتوازي الأضلاع BL ضعف المثلث ABD، لأنهما على قاعدة واحدة BD وبين المتوازيين BD، AL. والمربع GB ضعف المثلث FBC، لأنهما على قاعدة واحدة FB وبين المتوازيين FB، GC.",
      "وأضعاف المتساويات متساوية؛ فمتوازي الأضلاع BL مساوٍ للمربع GB.",
      "وبمثل ذلك، إذا وصلنا AE، BK، تبيّن أن المثلث ACE مساوٍ للمثلث KCB؛ ومتوازي الأضلاع CL ضعف الأول، والمربع HC ضعف الثاني.",
      "فمتوازي الأضلاع CL مساوٍ للمربع HC.",
      "فالمربع BDEC بكامله مساوٍ لمجموع المربعين GB، HC. والمربع BDEC مرسوم على BC، والمربعان GB، HC مرسومان على BA، AC. فالمربع المرسوم على الضلع BC مساوٍ لمجموع المربعين المرسومين على الضلعين BA، AC."
    ],
    hi: [
      "मान लीजिए ABC एक समकोण त्रिभुज है जिसमें कोण BAC समकोण है। दावा: BC पर बना वर्ग BA, AC पर बने वर्गों के योग के बराबर है। (A को खींचिए: यह BC पर बने अर्धवृत्त पर खिसकता है, इसलिए कोण समकोण ही रहता है।)",
      "BC पर वर्ग BDEC खींचिए, और BA, AC पर वर्ग GB, HC खींचिए।",
      "A से होकर BD या CE के समांतर AL खींचिए।",
      "AD, FC मिलाइए।",
      "चूँकि कोण BAC, BAG दोनों समकोण हैं, इसलिए सरल रेखा BA के बिंदु A पर, एक ही ओर न पड़ी दो सरल रेखाएँ AC, AG आसन्न कोणों का योग दो समकोणों के बराबर बनाती हैं; अतः CA और AG एक सीध में हैं। इसी कारण BA और AH भी एक सीध में हैं।",
      "कोण DBC कोण FBA के बराबर है, क्योंकि दोनों समकोण हैं; दोनों में कोण ABC जोड़िए; तो पूरा कोण DBA पूरे कोण FBC के बराबर है।",
      "चूँकि DB, BC के बराबर है और FB, BA के बराबर है, इसलिए दो भुजाएँ AB, BD क्रमशः दो भुजाओं FB, BC के बराबर हैं, और कोण ABD कोण FBC के बराबर है; इसलिए आधार AD आधार FC के बराबर है, और त्रिभुज ABD त्रिभुज FBC के बराबर है।",
      "समांतर चतुर्भुज BL त्रिभुज ABD का दुगुना है, क्योंकि दोनों का आधार BD एक ही है और दोनों समांतर रेखाओं BD, AL के बीच हैं। इसी प्रकार वर्ग GB त्रिभुज FBC का दुगुना है, क्योंकि दोनों का आधार FB एक ही है और दोनों समांतर रेखाओं FB, GC के बीच हैं।",
      "बराबरों के दुगुने परस्पर बराबर होते हैं; इसलिए समांतर चतुर्भुज BL भी वर्ग GB के बराबर है।",
      "इसी प्रकार AE, BK मिलाने पर सिद्ध होता है कि त्रिभुज ACE त्रिभुज KCB के बराबर है; समांतर चतुर्भुज CL पहले का दुगुना है और वर्ग HC दूसरे का दुगुना है।",
      "इसलिए समांतर चतुर्भुज CL भी वर्ग HC के बराबर है।",
      "अतः पूरा वर्ग BDEC दोनों वर्गों GB, HC के योग के बराबर है। वर्ग BDEC भुजा BC पर बना है, और वर्ग GB, HC भुजाओं BA, AC पर। इसलिए भुजा BC पर बना वर्ग भुजाओं BA, AC पर बने वर्गों के योग के बराबर है।"
    ],
    ja: [
      "ABC を角 BAC が直角である直角三角形とする。主張：BC の上の正方形は、BA、AC の上の正方形の和に等しい。（A をドラッグすると BC 上の半円に沿って動くので、角は直角のまま保たれます。）",
      "BC の上に正方形 BDEC を、BA、AC の上に正方形 GB、HC を描く。",
      "A を通り、BD または CE に平行に AL を引く。",
      "AD、FC を結ぶ。",
      "角 BAC、BAG はどちらも直角だから、直線 BA とその上の点 A において、同じ側にない 2 直線 AC、AG が隣り合う角の和を 2 直角に等しくする。よって CA は AG と一直線をなす。同じ理由で、BA も AH と一直線をなす。",
      "角 DBC は角 FBA に等しい。どちらも直角だからである。それぞれに角 ABC を加えると、角 DBA 全体は角 FBC 全体に等しい。",
      "DB は BC に、FB は BA に等しいから、2 辺 AB、BD は 2 辺 FB、BC にそれぞれ等しく、角 ABD は角 FBC に等しい。よって底辺 AD は底辺 FC に等しく、三角形 ABD は三角形 FBC に等しい。",
      "平行四辺形 BL は三角形 ABD の 2 倍である。同じ底辺 BD をもち、同じ平行線 BD、AL の間にあるからである。また正方形 GB は三角形 FBC の 2 倍である。同じ底辺 FB をもち、同じ平行線 FB、GC の間にあるからである。",
      "等しいものの 2 倍は互いに等しい。よって平行四辺形 BL は正方形 GB にも等しい。",
      "同様に、AE、BK を結べば、三角形 ACE が三角形 KCB に等しいことが示される。平行四辺形 CL は前者の 2 倍、正方形 HC は後者の 2 倍である。",
      "よって平行四辺形 CL は正方形 HC にも等しい。",
      "よって正方形 BDEC 全体は、2 つの正方形 GB、HC の和に等しい。正方形 BDEC は BC の上に、正方形 GB、HC は BA、AC の上に描かれている。よって辺 BC の上の正方形は、辺 BA、AC の上の正方形の和に等しい。"
    ]
  }
});
