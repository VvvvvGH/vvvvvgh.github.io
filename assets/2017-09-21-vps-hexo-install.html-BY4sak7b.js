import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as n}from"./app-sa-9POAZ.js";const t={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1><p>安装nodejs</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://deb.nodesource.com/setup_6.x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodejs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装hexo 和主题相关依赖</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hexo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  hexo-generator-feed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hexo-neat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hexo-generator-sitemap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hexo-renderer-pug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hexo-generator-archive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="tip"> 如果提示这个，是因为没有安装git <code>root@debian:~# hexo init blog INFO Cloning hexo-starter to ~/blog WARN git clone failed. Copying data instead WARN Failed to install dependencies. Please run &#39;npm install&#39; manually! </code></div><h1 id="hexo-配置" tabindex="-1"><a class="header-anchor" href="#hexo-配置"><span>hexo 配置</span></a></h1><h2 id="添加-gitment评论" tabindex="-1"><a class="header-anchor" href="#添加-gitment评论"><span>添加 gitment评论</span></a></h2><p>在hexo analote 中使用用最近挺火热的gitment， 就是用 github repo 的issue 来存评论</p><p>跟随下面教程即可<br><a href="https://imsun.net/posts/gitment-introduction/" target="_blank" rel="noopener noreferrer">Gitment：使用 GitHub Issues 搭建评论系统</a></p><blockquote><p>在comment.jade 里添加</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> theme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gitment</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    #</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">gitment_thread</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> gitment</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Gitment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        owner</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#{theme.github_owner}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        repo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#{theme.github_repo}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        oauth</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        client_id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#{theme.github_oauth_client_id}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        client_secret</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#{theme.github_oauth_client_secret}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        gitment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">render</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;gitment_thread&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在theme 的_config.yml 添加</p></blockquote><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Comment</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gitment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">github_owner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">github_repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">github_oauth_client_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">github_oauth_client_secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后手动引入 css和js即可。</p></blockquote><h2 id="提供rss订阅" tabindex="-1"><a class="header-anchor" href="#提供rss订阅"><span>提供RSS订阅</span></a></h2><p>本来是没什么用，现在很少人会用的，不过为了自己方便还是加上去。</p><blockquote><p>安装 hexo-generator-feed</p></blockquote><blockquote><p>给hexo 的_config.yml 添加</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Feed Atom</span></span>
<span class="line"><span>feed:</span></span>
<span class="line"><span>type: atom</span></span>
<span class="line"><span>path: atom.xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><p>用的百度bae一毛钱一天的服务，不做优化简直是作死</p><blockquote><p>安装 hexo-neat</p></blockquote><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># hexo-neat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">neat_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">neat_html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">neat_css</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;*.min.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">neat_js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  mangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  output</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  compress</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;*.min.js&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索引擎sitemap" tabindex="-1"><a class="header-anchor" href="#搜索引擎sitemap"><span>搜索引擎sitemap</span></a></h2><p>坚决不专为百度生成sitemap</p><blockquote><p>安装 hexo-generator-sitemap 给hexo 的_config.yml 添加</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span># sitemap</span></span>
<span class="line"><span>sitemap:</span></span>
<span class="line"><span>path: sitemap.xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const r=i(t,[["render",l],["__file","2017-09-21-vps-hexo-install.html.vue"]]),d=JSON.parse('{"path":"/posts/2017-09-21-vps-hexo-install.html","title":"在vps上安装hexo","lang":"zh-CN","frontmatter":{"title":"在vps上安装hexo","date":"2017-09-21T00:00:00.000Z","category":["VPS","Hexo","博客搭建"],"tag":["Node.js","Hexo安装","Gitment","RSS订阅","优化","Sitemap","百度BAE","评论系统","依赖管理"],"file_name":"2017-09-21-vps-hexo-install.md","description":"安装 安装nodejs 安装hexo 和主题相关依赖 如果提示这个，是因为没有安装git root@debian:~# hexo init blog INFO Cloning hexo-starter to ~/blog WARN git clone failed. Copying data instead WARN Failed to install...","head":[["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2017-09-21-vps-hexo-install.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"在vps上安装hexo"}],["meta",{"property":"og:description","content":"安装 安装nodejs 安装hexo 和主题相关依赖 如果提示这个，是因为没有安装git root@debian:~# hexo init blog INFO Cloning hexo-starter to ~/blog WARN git clone failed. Copying data instead WARN Failed to install..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T03:00:04.000Z"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"Hexo安装"}],["meta",{"property":"article:tag","content":"Gitment"}],["meta",{"property":"article:tag","content":"RSS订阅"}],["meta",{"property":"article:tag","content":"优化"}],["meta",{"property":"article:tag","content":"Sitemap"}],["meta",{"property":"article:tag","content":"百度BAE"}],["meta",{"property":"article:tag","content":"评论系统"}],["meta",{"property":"article:tag","content":"依赖管理"}],["meta",{"property":"article:published_time","content":"2017-09-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T03:00:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在vps上安装hexo\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-09-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-30T03:00:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"]]},"headers":[{"level":2,"title":"添加 gitment评论","slug":"添加-gitment评论","link":"#添加-gitment评论","children":[]},{"level":2,"title":"提供RSS订阅","slug":"提供rss订阅","link":"#提供rss订阅","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[]},{"level":2,"title":"搜索引擎sitemap","slug":"搜索引擎sitemap","link":"#搜索引擎sitemap","children":[]}],"git":{"createdTime":1727665204000,"updatedTime":1727665204000,"contributors":[{"name":"root","email":"root@vistazx1.top","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"posts/2017-09-21-vps-hexo-install.md","localizedDate":"2017年9月21日","excerpt":"\\n<p>安装nodejs</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -sL</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://deb.nodesource.com/setup_6.x</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> | </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">bash</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> -</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">apt-get</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -y</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> nodejs</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};