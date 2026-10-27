// 关于、隐私政策、联系页面（中文）。{repo} 和 {email} 由 site.config.json 填入。
PAGES.zh = {
  updated: "最后更新：{d}",
  about: {
    title: "关于本站",
    desc: "关于这个欧几里得《几何原本》第一卷的交互版本：收录了什么，依据哪些底本，由谁制作。",
    body: `
<p>本站是欧几里得《几何原本》第一卷的交互版本。两千多年来，几何学一直是从这本书教起的。这里收录了第一卷的 23 条定义、5 条公设、5 条公理，以及全部 48 个命题，从作等边三角形（<a href="/">I.1</a>）一直到勾股定理和它的逆定理（<a href="/p/47">I.47</a>、<a href="/p/48">I.48</a>）。</p>
<p>每个命题都有一张可以拖动的图。拖动红圈标出的点，整个作图会跟着变化，可以看到证明的每一步在任何位置都成立，而不只是书上画的那一种情形。证明可以逐步播放，每一步都标出它依据的定义、公设、公理或前面的命题。在<a href="/sandbox">作图板</a>上，你也可以自己用直尺和圆规作图。</p>
<h3>底本</h3>
<p>英文文本依据 Thomas L. Heath 的英译本（1908 年）。图的配色取自 Oliver Byrne 1847 年的版本，那一版用红、黄、蓝三色印刷欧几里得的图形。中文和其他语言的译文是为本站翻译的，还没有经过母语者逐一审校，非常欢迎指正。</p>
<h3>制作者</h3>
<p>这是一个独立的个人项目，免费使用，不需要注册。网站的托管费用靠广告支持。源代码公开在 <a href="{repo}">GitHub</a> 上。</p>
<p>有问题或发现错误，请看<a href="/contact">联系页面</a>。</p>`
  },
  privacy: {
    title: "隐私政策",
    desc: "本站收集哪些信息，Google 广告 Cookie 如何使用，以及你可以做的选择。",
    body: `
<p>本页说明你访问本站时会收集哪些信息，以及这些信息的用途。</p>
<h3>本站收集的信息</h3>
<ul>
<li><strong>没有账号。</strong>本站不需要注册，也不会询问你的姓名或电子邮箱。</li>
<li><strong>浏览器里的设置。</strong>你选择的语言保存在浏览器的本地存储（localStorage）里；会话存储（sessionStorage）里的一个标记让访问计数每个浏览器会话只计一次。这两项都只留在你的设备上。</li>
<li><strong>访问计数。</strong>页头的计数只保存一个总数，不保存任何关于你的信息。</li>
<li><strong>统计。</strong>本站使用 Vercel Web Analytics 统计页面浏览量。它不使用 Cookie，也不识别单个访客。</li>
<li><strong>托管。</strong>托管服务商 Vercel 会处理 IP 地址、浏览器类型等技术数据，用于传送网页和防止滥用。</li>
<li><strong>字体。</strong>字体从 Google Fonts 加载，因此你的浏览器会向 Google 发送请求，其中包括你的 IP 地址。</li>
</ul>
<h3>广告</h3>
<p>本站使用 Google AdSense 展示广告。包括 Google 在内的第三方供应商会使用 Cookie，根据你以前访问本站或其他网站的情况投放广告。Google 使用广告 Cookie，使其及其合作伙伴能够根据你访问本站和/或互联网上其他网站的情况向你投放广告。</p>
<p>你可以在 Google 的<a href="https://adssettings.google.com/">广告设置</a>中关闭个性化广告，也可以在 <a href="https://www.aboutads.info/choices/">aboutads.info</a>（欧洲用户可访问 <a href="https://www.youronlinechoices.eu/">youronlinechoices.eu</a>）选择不让部分第三方供应商使用 Cookie 投放个性化广告。Google 在<a href="https://policies.google.com/technologies/partner-sites">这里</a>说明了它如何使用来自合作网站的信息。</p>
<p>来自欧洲经济区、英国和瑞士的访客，会先通过 Google 提供的同意消息被询问，同意后才会使用 Cookie 投放广告。你可以随时通过页面上的隐私和 Cookie 设置链接更改选择。</p>
<h3>儿童</h3>
<p>本站面向各个年龄的学习者，不会有意收集儿童的个人信息。</p>
<h3>你的权利</h3>
<p>根据你所在地区的法律（例如欧盟 GDPR、美国加州 CCPA），你可能有权查阅或删除个人数据，或者反对其被使用。本站自身不保存关于你的个人数据。与广告有关的数据，可以通过上面的 Google 设置管理；其他问题请与我们联系。</p>
<h3>变更</h3>
<p>本政策如有变更，页面顶部的日期也会随之更新。</p>
<p>联系方式：请看<a href="/contact">联系页面</a>。</p>`
  },
  contact: {
    title: "联系",
    desc: "如何报告证明或译文中的错误，或者就本站提问。",
    body: `
<p>发现某个证明有错，某段译文读起来别扭，或者某张图拖动时出了问题？欢迎告诉我。</p>
<p>最方便的方式是在 GitHub 上提一个 issue：<a href="{repo}/issues">{repo}/issues</a>。请写明是哪个命题（例如 I.47）、你在看哪种语言，以及你原本期望看到什么。</p>
{email}
<p>关于隐私或本站广告的问题，也欢迎来信。</p>`,
    email: "也可以发邮件到 {email}。"
  }
};
