import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as e}from"./app-CJlMl9Ja.js";const p={};function o(i,t){return e(),a("div",null,t[0]||(t[0]=[n(`<p>飞书实现 @ 人操作</p><p><strong>第一步</strong></p><p>自建应用获取 tenant_access_token （可以缓存2个小时）</p><p>https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal</p><p>说明： <code>app_access_token</code> 的最大有效期是 2 小时。如果在有效期小于 30 分钟的情况下，调用本接口，会返回一个新的 <code>app_access_token</code>，这会同时存在两个有效的 <code>app_access_token</code>。</p><p><strong>第二步</strong></p><p>通过手机号或邮箱获取用户 ID （仅支持组织范围内）</p><h3 id="通过手机号或邮箱获取用户-id" tabindex="-1"><a class="header-anchor" href="#通过手机号或邮箱获取用户-id"><span>通过手机号或邮箱获取用户 ID</span></a></h3><p>contact:user.id:readonly</p><p>https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id</p><p><strong>第三步</strong></p><p>webhook 调用机器人即可</p><p>https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN</p><p>如果使用阿里云SLS对接，请使用 Markdown语法</p><p>https://open.feishu.cn/document/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN?spm=5176.2020520112.help.10.53c534c0OKWv7y</p><h3 id="如何实现-指定人、-所有人" tabindex="-1"><a class="header-anchor" href="#如何实现-指定人、-所有人"><span>如何实现@指定人、@所有人</span></a></h3><p>可以在机器人发送的普通文本消息（text）、富文本消息（post）、消息卡片（interactive）中，使用at标签实现@人效果。具体请求示意如下： <strong>(1) 在普通文本消息 (text) 中@人、@所有人:</strong><code>at</code>标签说明:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// at 指定用户</span></span>
<span class="line"><span>&lt;at user_id=&quot;ou_xxx&quot;&gt;Name&lt;/at&gt; //取值必须使用ou_xxxxx格式的 open_id 来at指定人</span></span>
<span class="line"><span>// at 所有人</span></span>
<span class="line"><span>&lt;at user_id=&quot;all&quot;&gt;所有人&lt;/at&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请求体示意：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;msg_type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>	&quot;content&quot;: {</span></span>
<span class="line"><span>		&quot;text&quot;: &quot;&lt;at user_id = \\&quot;ou_f43d7bf0bxxxxxxxxxxxxxxx\\&quot;&gt;Tom&lt;/at&gt; text content&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>(2) 在富文本消息 (post) 中@人、@所有人:</strong><code>at</code>标签说明:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// at 指定用户</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	&quot;tag&quot;: &quot;at&quot;,</span></span>
<span class="line"><span>	&quot;user_id&quot;: &quot;ou_xxxxxxx&quot;,//取值必须使用ou_xxxxx格式的 open_id 来at指定人</span></span>
<span class="line"><span>	&quot;user_name&quot;: &quot;tom&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// at 所有人</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	&quot;tag&quot;: &quot;at&quot;,</span></span>
<span class="line"><span>	&quot;user_id&quot;: &quot;all&quot;,//取值使用&quot;all&quot;来at所有人</span></span>
<span class="line"><span>	&quot;user_name&quot;: &quot;所有人&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请求体示意：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;msg_type&quot;: &quot;post&quot;,</span></span>
<span class="line"><span>	&quot;content&quot;: {</span></span>
<span class="line"><span>		&quot;zh_cn&quot;: {</span></span>
<span class="line"><span>			&quot;title&quot;: &quot;我是一个标题&quot;,</span></span>
<span class="line"><span>			&quot;content&quot;: [</span></span>
<span class="line"><span>				[{</span></span>
<span class="line"><span>						&quot;tag&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>						&quot;text&quot;: &quot;第一行 :&quot;</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					{</span></span>
<span class="line"><span>						&quot;tag&quot;: &quot;at&quot;,</span></span>
<span class="line"><span>						&quot;user_id&quot;: &quot;ou_xxxxxx&quot;,</span></span>
<span class="line"><span>						&quot;user_name&quot;: &quot;tom&quot;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				],</span></span>
<span class="line"><span>				[{</span></span>
<span class="line"><span>						&quot;tag&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>						&quot;text&quot;: &quot;第二行:&quot;</span></span>
<span class="line"><span>					},</span></span>
<span class="line"><span>					{</span></span>
<span class="line"><span>						&quot;tag&quot;: &quot;at&quot;,</span></span>
<span class="line"><span>						&quot;user_id&quot;: &quot;all&quot;,</span></span>
<span class="line"><span>						&quot;user_name&quot;: &quot;所有人&quot;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				]</span></span>
<span class="line"><span>			]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>(3) 在消息卡片 (interactive) 中@人、@所有人:</strong> 可以使用消息卡片Markdown内容中的at人标签，标签示意：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// at 指定用户</span></span>
<span class="line"><span>	&lt;at id=ou_xxx&gt;&lt;/at&gt; //取值必须使用ou_xxxxx格式的 open_id 来at指定人</span></span>
<span class="line"><span>// at 所有人</span></span>
<span class="line"><span>	&lt;at id=all&gt;&lt;/at&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请求体中的 <code>card</code> 内容示意：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;msg_type&quot;: &quot;interactive&quot;,</span></span>
<span class="line"><span>	&quot;card&quot;: {</span></span>
<span class="line"><span>		&quot;elements&quot;: [{</span></span>
<span class="line"><span>			&quot;tag&quot;: &quot;div&quot;,</span></span>
<span class="line"><span>			&quot;text&quot;: {</span></span>
<span class="line"><span>				&quot;content&quot;: &quot;at所有人&lt;at id=all&gt;&lt;/at&gt; \\n at指定人&lt;at id=ou_xxxxxx&gt;&lt;/at&gt;&quot;,</span></span>
<span class="line"><span>				&quot;tag&quot;: &quot;lark_md&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,28)]))}const u=s(p,[["render",o]]),r=JSON.parse('{"path":"/posts/2024-05-06-feishu-at.html","title":"飞书AT人","lang":"zh-CN","frontmatter":{"title":"飞书AT人","date":"2024-05-06T00:00:00.000Z","category":["飞书","技术开发","企业应用"],"tag":["飞书API","tenant_access_token","用户ID获取","webhook","机器人调用","AT功能","Markdown语法","阿里云SLS","消息发送","交互式卡片"],"file_name":"2024-05-06-feishu-at.md","description":"飞书实现 @ 人操作 第一步 自建应用获取 tenant_access_token （可以缓存2个小时） https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal 说明： app_access_token...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"飞书AT人\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-29T15:21:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"],["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2024-05-06-feishu-at.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"飞书AT人"}],["meta",{"property":"og:description","content":"飞书实现 @ 人操作 第一步 自建应用获取 tenant_access_token （可以缓存2个小时） https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal 说明： app_access_token..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T15:21:40.000Z"}],["meta",{"property":"article:tag","content":"交互式卡片"}],["meta",{"property":"article:tag","content":"消息发送"}],["meta",{"property":"article:tag","content":"阿里云SLS"}],["meta",{"property":"article:tag","content":"Markdown语法"}],["meta",{"property":"article:tag","content":"AT功能"}],["meta",{"property":"article:tag","content":"机器人调用"}],["meta",{"property":"article:tag","content":"webhook"}],["meta",{"property":"article:tag","content":"用户ID获取"}],["meta",{"property":"article:tag","content":"tenant_access_token"}],["meta",{"property":"article:tag","content":"飞书API"}],["meta",{"property":"article:published_time","content":"2024-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T15:21:40.000Z"}]]},"git":{"createdTime":1727623300000,"updatedTime":1727623300000,"contributors":[{"name":"root","username":"root","email":"root@vistazx1.top","commits":1,"url":"https://github.com/root"}]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"posts/2024-05-06-feishu-at.md","excerpt":"<p>飞书实现 @ 人操作</p>\\n<p><strong>第一步</strong></p>\\n<p>自建应用获取 tenant_access_token （可以缓存2个小时）</p>\\n<p>https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal</p>\\n<p>说明： <code>app_access_token</code> 的最大有效期是 2 小时。如果在有效期小于 30 分钟的情况下，调用本接口，会返回一个新的 <code>app_access_token</code>，这会同时存在两个有效的 <code>app_access_token</code>。</p>","autoDesc":true}');export{u as comp,r as data};
