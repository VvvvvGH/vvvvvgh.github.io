import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as t,o as n}from"./app-DHwh7nCw.js";const e={};function l(h,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1><p>我的思路是这样的，master跑redis，mysql,spider1。slave就只跑spider2。这样子能做到分布式处理。 spider1负责维护在redis上增量更新的待爬取队列。spider2则分布式的处理队列，爬取并处理每一个网页，处理完毕后上传数据到mysql。 master服务器性能羸弱，这样做其实是无奈之举，若学校能提供更强大的服务器就好了。</p><h1 id="代码及需求" tabindex="-1"><a class="header-anchor" href="#代码及需求"><span>代码及需求</span></a></h1><h2 id="需求1-分布式处理spider1的item" tabindex="-1"><a class="header-anchor" href="#需求1-分布式处理spider1的item"><span>需求1：分布式处理spider1的item</span></a></h2><p>scrapy-redis 默认是读取url 队列，而我要处理的是json队列。几番Google未果，故直接看源码。发现作者早就想到了这个问题。RedisMixin这个类里面就可以看到。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make_request_from_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;&quot;&quot;Returns a Request instance from data coming from Redis.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        By default, \`\`data\`\` is an encoded URL. You can override this method to</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        provide your own message decoding.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        Parameters</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        data : bytes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            Message from redis.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        url </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> bytes_to_str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.redis_encoding)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">make_requests_from_url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(url)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我现在只需要override这个方法就行了。 对了，还有一个窍门，如果想给请求的回调函数传参的话呢，网上很多人用lambda，我Google到可以从meta传入。在回调函数的response.request.meta就可以取到参数了。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make_request_from_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        data </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># </span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">FIXME</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">:有安全问题</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">            method</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;GET&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">            url</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">data[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;url&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">            meta</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                &#39;title&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: data[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;title&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                &#39;resource_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: data[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;resource_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                &#39;type_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: data[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;type_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">            callback</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.parse_text,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">            dont_filter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="需求2-url去重" tabindex="-1"><a class="header-anchor" href="#需求2-url去重"><span>需求2：url去重</span></a></h2><p>这个可以利用redis的哈希表，写一个PIPELINE来过滤掉重复的item。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> redis</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> .settings </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> REDIS_PORT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">REDIS_HOST</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> scrapy.exceptions </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> DropItem</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pool </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> redis.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">ConnectionPool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    host</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">REDIS_HOST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">REDIS_PORT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    decode_responses</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> redis.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">Redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">connection_pool</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pool)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GdprojectPipeline</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">object</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> process_item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> spider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # item的hash已存在表中，dropitem</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> r.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">hexists</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;gdggzy_project_hash&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(item[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;resource_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            raise</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> DropItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Duplicate item found:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> item[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;resource_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # item的hash不存在，添加hash到表中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        r.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">hset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;gdggzy_project_hash&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(item[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;resource_id&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]), </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> item</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在设置里面添加自己的pipeline</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ITEM_PIPELINES</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;gdproject.pipelines.GdprojectPipeline&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    。。。。。。。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=s(e,[["render",l],["__file","2018-05-17-scrapy-redis-spider.html.vue"]]),d=JSON.parse('{"path":"/posts/2018-05-17-scrapy-redis-spider.html","title":"初试scrapy + redis 爬虫","lang":"zh-CN","frontmatter":{"title":"初试scrapy + redis 爬虫","date":"2018-05-17T00:00:00.000Z","category":["爬虫技术","分布式系统","Python开发"],"tag":["Scrapy","Redis","分布式爬虫","URL去重","数据处理","MySQL","源码分析","请求处理","管道配置","项目实践"],"file_name":"2018-05-17-scrapy-redis-spider.md","description":"前言 我的思路是这样的，master跑redis，mysql,spider1。slave就只跑spider2。这样子能做到分布式处理。 spider1负责维护在redis上增量更新的待爬取队列。spider2则分布式的处理队列，爬取并处理每一个网页，处理完毕后上传数据到mysql。 master服务器性能羸弱，这样做其实是无奈之举，若学校能提供更强大的...","head":[["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2018-05-17-scrapy-redis-spider.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"初试scrapy + redis 爬虫"}],["meta",{"property":"og:description","content":"前言 我的思路是这样的，master跑redis，mysql,spider1。slave就只跑spider2。这样子能做到分布式处理。 spider1负责维护在redis上增量更新的待爬取队列。spider2则分布式的处理队列，爬取并处理每一个网页，处理完毕后上传数据到mysql。 master服务器性能羸弱，这样做其实是无奈之举，若学校能提供更强大的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T15:47:18.000Z"}],["meta",{"property":"article:tag","content":"Scrapy"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"分布式爬虫"}],["meta",{"property":"article:tag","content":"URL去重"}],["meta",{"property":"article:tag","content":"数据处理"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"源码分析"}],["meta",{"property":"article:tag","content":"请求处理"}],["meta",{"property":"article:tag","content":"管道配置"}],["meta",{"property":"article:tag","content":"项目实践"}],["meta",{"property":"article:published_time","content":"2018-05-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T15:47:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初试scrapy + redis 爬虫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-05-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-29T15:47:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"]]},"headers":[{"level":2,"title":"需求1：分布式处理spider1的item","slug":"需求1-分布式处理spider1的item","link":"#需求1-分布式处理spider1的item","children":[]},{"level":2,"title":"需求2：url去重","slug":"需求2-url去重","link":"#需求2-url去重","children":[]}],"git":{"createdTime":1727624838000,"updatedTime":1727624838000,"contributors":[{"name":"VvvvvGH","email":"cheng123xp@gmail.com","commits":1}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"posts/2018-05-17-scrapy-redis-spider.md","localizedDate":"2018年5月17日","excerpt":"\\n<p>我的思路是这样的，master跑redis，mysql,spider1。slave就只跑spider2。这样子能做到分布式处理。\\nspider1负责维护在redis上增量更新的待爬取队列。spider2则分布式的处理队列，爬取并处理每一个网页，处理完毕后上传数据到mysql。\\nmaster服务器性能羸弱，这样做其实是无奈之举，若学校能提供更强大的服务器就好了。</p>\\n<h1>代码及需求</h1>\\n<h2>需求1：分布式处理spider1的item</h2>\\n<p>scrapy-redis 默认是读取url 队列，而我要处理的是json队列。几番Google未果，故直接看源码。发现作者早就想到了这个问题。RedisMixin这个类里面就可以看到。</p>","autoDesc":true}');export{r as comp,d as data};