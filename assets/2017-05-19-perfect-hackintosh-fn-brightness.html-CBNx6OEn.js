import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as i}from"./app-BPW93emm.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="debug-patch" tabindex="-1"><a class="header-anchor" href="#debug-patch"><span>Debug Patch</span></a></h1><p><strong>首先要给DSDT 打上补丁，查看FN亮度按键触发了什么。具体看国外大佬的</strong><a href="https://www.tonymacx86.com/threads/guide-patching-dsdt-ssdt-for-laptop-backlight-control.152659/" target="_blank" rel="noopener noreferrer">参考资料：</a></p><p><strong>我的是EC Query</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Method (_Q12, 0, NotSerialized)  // _Qxx: EC Query</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    Store (0x12, P80H)</span></span>
<span class="line"><span>                    If (And (WINF, One))</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        If (LEqual (OSYS, 0x03E8))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            If (And (PSF0, 0x10))</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                Notify (^^^PEG0.PEGP.LCD0, 0x86)</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                            Else</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                Notify (^^^GFX0.DD1F, 0x86)</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        ElseIf (And (PSF0, 0x10))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            Notify (^^^PEG0.PEGP.LCD0, 0x86)</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        ElseIf (LEqual (^^^GFX0.CDDS (0x0410), 0x1F))</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            Notify (^^^GFX0.DD1F, 0x86)</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    ElseIf (^^^^WMI.HKDR)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        Add (OEM2, 0xE0, ^^^^WMI.EVNT)</span></span>
<span class="line"><span>                        Notify (WMI, 0xD0)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="analyse" tabindex="-1"><a class="header-anchor" href="#analyse"><span>Analyse</span></a></h1><p><strong>两个按键都使用了Q12这个Method，所以我们现在给加入debug相关的代码，看那些变量的值是怎样变化的。</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Store (PSF0, Local0)</span></span>
<span class="line"><span>\\RMDT.P2 (&quot;#1 PSF0 is: &quot;, Local0)</span></span>
<span class="line"><span>Store (WINF, Local1)</span></span>
<span class="line"><span>\\RMDT.P2 (&quot;#1 WINF is: &quot;, Local1)</span></span>
<span class="line"><span>Store (WINF, Local2)</span></span>
<span class="line"><span>\\RMDT.P2 (&quot;#1 OSYS is: &quot;, Local2)</span></span>
<span class="line"><span>Store (OEM2, Local2)</span></span>
<span class="line"><span>\\RMDT.P2 (&quot;#1 OEM2 is: &quot;, Local2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.vistazx1.top/images/202409281715943.webp" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h1 id="success" tabindex="-1"><a class="header-anchor" href="#success"><span>Success</span></a></h1><p><strong>我们看到OEM2 发生了变化，所以我们现在就可以做对应修改了。 以下代码正常工作</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Method (_Q12, 0, NotSerialized)  // _Qxx: EC Query</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    Store (0x12, P80H)</span></span>
<span class="line"><span>                    Store (OEM2, Local0)</span></span>
<span class="line"><span>                    If (LEqual (Local0, One))</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        Notify (PS2K, 0x0405)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    If (LEqual (Local0, 0x03))</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        Notify (PS2K, 0x0406)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    Store (0x02, OEM2)</span></span>
<span class="line"><span>                }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const r=n(l,[["render",p],["__file","2017-05-19-perfect-hackintosh-fn-brightness.html.vue"]]),o=JSON.parse('{"path":"/posts/2017-05-19-perfect-hackintosh-fn-brightness.html","title":"Perfect Hackintosh 之FN亮度按键","lang":"zh-CN","frontmatter":{"title":"Perfect Hackintosh 之FN亮度按键","date":"2017-05-19T00:00:00.000Z","category":["Hackintosh","技术教程","系统优化"],"tag":["FN按键","亮度调节","DSDT补丁","EC查询","Debug调试","Hackintosh配置","系统定制","PS2K通知","OEM2变量","技术指南"],"file_name":"2017-05-19-perfect-hackintosh-fn-brightness.md","description":"Debug Patch 首先要给DSDT 打上补丁，查看FN亮度按键触发了什么。具体看国外大佬的 参考资料： 我的是EC Query Analyse 两个按键都使用了Q12这个Method，所以我们现在给加入debug相关的代码，看那些变量的值是怎样变化的。 imageimage Success 我们看到OEM2 发生了变化，所以我们现在就可以做对应修...","head":[["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2017-05-19-perfect-hackintosh-fn-brightness.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"Perfect Hackintosh 之FN亮度按键"}],["meta",{"property":"og:description","content":"Debug Patch 首先要给DSDT 打上补丁，查看FN亮度按键触发了什么。具体看国外大佬的 参考资料： 我的是EC Query Analyse 两个按键都使用了Q12这个Method，所以我们现在给加入debug相关的代码，看那些变量的值是怎样变化的。 imageimage Success 我们看到OEM2 发生了变化，所以我们现在就可以做对应修..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.vistazx1.top/images/202409281715943.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T03:35:04.000Z"}],["meta",{"property":"article:tag","content":"FN按键"}],["meta",{"property":"article:tag","content":"亮度调节"}],["meta",{"property":"article:tag","content":"DSDT补丁"}],["meta",{"property":"article:tag","content":"EC查询"}],["meta",{"property":"article:tag","content":"Debug调试"}],["meta",{"property":"article:tag","content":"Hackintosh配置"}],["meta",{"property":"article:tag","content":"系统定制"}],["meta",{"property":"article:tag","content":"PS2K通知"}],["meta",{"property":"article:tag","content":"OEM2变量"}],["meta",{"property":"article:tag","content":"技术指南"}],["meta",{"property":"article:published_time","content":"2017-05-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T03:35:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Perfect Hackintosh 之FN亮度按键\\",\\"image\\":[\\"https://cdn.vistazx1.top/images/202409281715943.webp\\"],\\"datePublished\\":\\"2017-05-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-30T03:35:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"]]},"headers":[],"git":{"createdTime":1727667304000,"updatedTime":1727667304000,"contributors":[{"name":"root","email":"root@vistazx1.top","commits":1}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"posts/2017-05-19-perfect-hackintosh-fn-brightness.md","localizedDate":"2017年5月19日","excerpt":"\\n<p><strong>首先要给DSDT 打上补丁，查看FN亮度按键触发了什么。具体看国外大佬的</strong>\\n<a href=\\"https://www.tonymacx86.com/threads/guide-patching-dsdt-ssdt-for-laptop-backlight-control.152659/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考资料：</a></p>\\n<p><strong>我的是EC Query</strong></p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>Method (_Q12, 0, NotSerialized)  // _Qxx: EC Query</span></span>\\n<span class=\\"line\\"><span>                {</span></span>\\n<span class=\\"line\\"><span>                    Store (0x12, P80H)</span></span>\\n<span class=\\"line\\"><span>                    If (And (WINF, One))</span></span>\\n<span class=\\"line\\"><span>                    {</span></span>\\n<span class=\\"line\\"><span>                        If (LEqual (OSYS, 0x03E8))</span></span>\\n<span class=\\"line\\"><span>                        {</span></span>\\n<span class=\\"line\\"><span>                            If (And (PSF0, 0x10))</span></span>\\n<span class=\\"line\\"><span>                            {</span></span>\\n<span class=\\"line\\"><span>                                Notify (^^^PEG0.PEGP.LCD0, 0x86)</span></span>\\n<span class=\\"line\\"><span>                            }</span></span>\\n<span class=\\"line\\"><span>                            Else</span></span>\\n<span class=\\"line\\"><span>                            {</span></span>\\n<span class=\\"line\\"><span>                                Notify (^^^GFX0.DD1F, 0x86)</span></span>\\n<span class=\\"line\\"><span>                            }</span></span>\\n<span class=\\"line\\"><span>                        }</span></span>\\n<span class=\\"line\\"><span>                        ElseIf (And (PSF0, 0x10))</span></span>\\n<span class=\\"line\\"><span>                        {</span></span>\\n<span class=\\"line\\"><span>                            Notify (^^^PEG0.PEGP.LCD0, 0x86)</span></span>\\n<span class=\\"line\\"><span>                        }</span></span>\\n<span class=\\"line\\"><span>                        ElseIf (LEqual (^^^GFX0.CDDS (0x0410), 0x1F))</span></span>\\n<span class=\\"line\\"><span>                        {</span></span>\\n<span class=\\"line\\"><span>                            Notify (^^^GFX0.DD1F, 0x86)</span></span>\\n<span class=\\"line\\"><span>                        }</span></span>\\n<span class=\\"line\\"><span>                    }</span></span>\\n<span class=\\"line\\"><span>                    ElseIf (^^^^WMI.HKDR)</span></span>\\n<span class=\\"line\\"><span>                    {</span></span>\\n<span class=\\"line\\"><span>                        Add (OEM2, 0xE0, ^^^^WMI.EVNT)</span></span>\\n<span class=\\"line\\"><span>                        Notify (WMI, 0xD0)</span></span>\\n<span class=\\"line\\"><span>                    }</span></span>\\n<span class=\\"line\\"><span>                }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,o as data};