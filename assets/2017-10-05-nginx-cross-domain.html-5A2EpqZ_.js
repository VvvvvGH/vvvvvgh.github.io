import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as n,o as i}from"./app-CUvayRIM.js";const s={};function r(o,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1><p>博客一直用的七牛cdn做图床，最近启用了https，就出现了这个Mixed Content的提示。连安全小锁都没有了，这怎么能忍？</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Mixed Content: The page at &#39;https://vistazx1.top/xxx&#39; was loaded over HTTPS, but requested an insecure image &#39;http://xxxx/ssl-config.PNG&#39;. This content should also be served over HTTPS.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件"><span>nginx 配置文件</span></a></h1><p><s>比较简单</s>，接下来只要替换图片链接就ok。</p><p><strong>此处有个小坑</strong> : 如果你写的是<code>proxy_pass http://xxx</code> 实际上是访问了http://xxx/images/xxxx.jpg 如果写的是<code>proxy_pass http://xxx/</code> 就可以访问http://xxx/xxxx.jpg</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    location /images/ {</span></span>
<span class="line"><span>       proxy_pass   http://xxx/;</span></span>
<span class="line"><span>       }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想多了,怎么可能这么简单。这种情况下如果访问 http://blog/images/fun/qwe.jpg 就会404。 我们需要一个rewrite规则，把http://blog/images/images/xxxx/qwe.jpg 替换成http://xxx/fun/qwe.jpg 下面的正则表达式即可解决此问题.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    location ^~/images/{</span></span>
<span class="line"><span>       rewrite ^/images/(.*)$ /$1 break;</span></span>
<span class="line"><span>       proxy_pass   http://xxx/;</span></span>
<span class="line"><span>       }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考信息" tabindex="-1"><a class="header-anchor" href="#参考信息"><span>参考信息</span></a></h1><p><a href="http://www.cnblogs.com/gabrielchen/p/5066120.html" target="_blank" rel="noopener noreferrer">用nginx的反向代理机制解决前端跨域问题</a><a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass" target="_blank" rel="noopener noreferrer">ngx_http_proxy_module.html#proxy_pass</a></p>`,11)]))}const d=t(s,[["render",r],["__file","2017-10-05-nginx-cross-domain.html.vue"]]),c=JSON.parse(`{"path":"/posts/2017-10-05-nginx-cross-domain.html","title":"用nginx反向代理处理跨域问题","lang":"zh-CN","frontmatter":{"title":"用nginx反向代理处理跨域问题","date":"2017-10-05T00:00:00.000Z","category":["Nginx","网络技术","Web开发"],"tag":["跨域","反向代理","HTTPS","Mixed Content","Rewrite规则","Nginx配置","安全性","图床","CDN"],"file_name":"2017-10-05-nginx-cross-domain.md","description":"前言 博客一直用的七牛cdn做图床，最近启用了https，就出现了这个Mixed Content的提示。连安全小锁都没有了，这怎么能忍？ nginx 配置文件 ，接下来只要替换图片链接就ok。 此处有个小坑 : 如果你写的是proxy_pass http://xxx 实际上是访问了http://xxx/images/xxxx.jpg 如果写的是prox...","head":[["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2017-10-05-nginx-cross-domain.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"用nginx反向代理处理跨域问题"}],["meta",{"property":"og:description","content":"前言 博客一直用的七牛cdn做图床，最近启用了https，就出现了这个Mixed Content的提示。连安全小锁都没有了，这怎么能忍？ nginx 配置文件 ，接下来只要替换图片链接就ok。 此处有个小坑 : 如果你写的是proxy_pass http://xxx 实际上是访问了http://xxx/images/xxxx.jpg 如果写的是prox..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T08:15:05.000Z"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:tag","content":"反向代理"}],["meta",{"property":"article:tag","content":"HTTPS"}],["meta",{"property":"article:tag","content":"Mixed Content"}],["meta",{"property":"article:tag","content":"Rewrite规则"}],["meta",{"property":"article:tag","content":"Nginx配置"}],["meta",{"property":"article:tag","content":"安全性"}],["meta",{"property":"article:tag","content":"图床"}],["meta",{"property":"article:tag","content":"CDN"}],["meta",{"property":"article:published_time","content":"2017-10-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T08:15:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用nginx反向代理处理跨域问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-10-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-30T08:15:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"]]},"headers":[],"git":{"createdTime":1727684105000,"updatedTime":1727684105000,"contributors":[{"name":"root","email":"root@vistazx1.top","commits":1}]},"readingTime":{"minutes":0.97,"words":291},"filePathRelative":"posts/2017-10-05-nginx-cross-domain.md","localizedDate":"2017年10月5日","excerpt":"\\n<p>博客一直用的七牛cdn做图床，最近启用了https，就出现了这个Mixed Content的提示。连安全小锁都没有了，这怎么能忍？</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>Mixed Content: The page at 'https://vistazx1.top/xxx' was loaded over HTTPS, but requested an insecure image 'http://xxxx/ssl-config.PNG'. This content should also be served over HTTPS.</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{d as comp,c as data};