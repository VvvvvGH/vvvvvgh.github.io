import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as n,o as l}from"./app-DHwh7nCw.js";const e={};function t(p,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="uwsgi配置" tabindex="-1"><a class="header-anchor" href="#uwsgi配置"><span>uwsgi配置</span></a></h1><p>配置文件config.ini</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[uwsgi]</span></span>
<span class="line"><span>socket = 127.0.0.1:8001</span></span>
<span class="line"><span># python module</span></span>
<span class="line"><span>module = blog:app</span></span>
<span class="line"><span>processes = 1     //处理器个数</span></span>
<span class="line"><span>threads = 2     //线程个数</span></span>
<span class="line"><span>master = true</span></span>
<span class="line"><span>home = venv //python 的位置，这里是virtualenv</span></span>
<span class="line"><span>pidfile=/var/run/uwsgi.pid // pidfile 便于停止进程</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>	location /admin {</span></span>
<span class="line"><span>        include        uwsgi_params;    </span></span>
<span class="line"><span>        uwsgi_pass     127.0.0.1:8001;   </span></span>
<span class="line"><span>        uwsgi_param UWSGI_PYHOME /www/blog/venv;   </span></span>
<span class="line"><span>        uwsgi_param UWSGI_CHDIR  /www/blog;</span></span>
<span class="line"><span>        uwsgi_param UWSGI_SCRIPT blog:app; # 指定启动程序</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置其实不难，按这个做应该就不会有大问题，一些小坑还得看文档或Google</p><p>OK， 现在手动启动uwsgi， 服务应该可以启动了。</p><h1 id="编写脚本" tabindex="-1"><a class="header-anchor" href="#编写脚本"><span>编写脚本</span></a></h1><p>参考了以下资料 <a href="http://www.zhaoyanan.cn/uwsgi-joined-system-services.html" target="_blank" rel="noopener noreferrer">uwsgi加入系统服务</a><a href="https://wiki.linuxfoundation.org/en/LSB_Wiki" target="_blank" rel="noopener noreferrer">LSB_Wiki</a><a href="read.pudn.com/downloads132/doc/564275/Linux%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%BC%96%E7%A8%8B%E7%95%8C%E9%9D%A2%E8%A7%84%E8%8C%83.pdf">Linux应用程序编程界面规范.pdf</a></p><p>然后弄了个基本能用的脚本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uwsgi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uwsgi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">●</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uwsgi.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LSB:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uwsgi</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   Loaded:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> loaded</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (/etc/init.d/uwsgi; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">generated</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vendor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> preset:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   Active:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (exited) since Wed 2017-10-04 03:46:01 EDT; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ago</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">     Docs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> man:systemd-sysv-generator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Process:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1826</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ExecStart=/etc/init.d/uwsgi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (code=exited, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">status=0/SUCCESS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Oct</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 03:46:01</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> XXXX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemd[1]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Starting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LSB:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uwsgi...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Oct</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 03:46:01</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> XXXX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemd[1]:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Started</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LSB:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uwsgi.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">### BEGIN INIT INFO</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Provides:           uwsgi</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Required-Start:     $local_fs </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Should-Start: </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Required-Stop: </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Should-Stop: </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Default-Start:      2 3 5</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Default-Stop:       0 1 2 6</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Description: uwsgi</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DESC</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;uwsgi daemon&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">uwsgi</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DAEMON</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">uwsgi</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">SCRIPTNAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/init.d/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$NAME</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONFFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/uwsgi/uwsgi.ini</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PIDFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/var/run/uwsgi.pid</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -x</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $DAEMON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> || </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d_start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    $DAEMON</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  $CONFFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> || </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; already running&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d_stop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    $DAEMON</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --stop</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $PIDFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> || </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; not running&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d_reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    $DAEMON</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $PIDFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> || </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; counld not reload&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">d_freload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    $DAEMON</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --die-on-term</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $PIDFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> || </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot; counld not force reload&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">$1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Starting </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$DESC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    d_start</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">stop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Stopping </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$DESC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    d_stop</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Reloading </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$DESC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> configuration...&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    d_reload</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;reloaded.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">force_reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;The official provision of the parameters, tested and found not to support...&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # d_freload</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # echo &quot;force reloaded.&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Restarting </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$DESC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    d_stop</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sleep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    d_start</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Status:&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	cat</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $PIDFILE</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Usage: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$SCRIPTNAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {start|stop|restart|reload|force_reload}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&amp;2</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">esac</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const d=i(e,[["render",t],["__file","2017-10-03-uwsgi-flask-deploy.html.vue"]]),r=JSON.parse('{"path":"/posts/2017-10-03-uwsgi-flask-deploy.html","title":"uwsgi部署flask应用","lang":"zh-CN","frontmatter":{"title":"uwsgi部署flask应用","date":"2017-10-03T00:00:00.000Z","category":["Flask","uWSGI","Nginx","Linux"],"tag":["uwsgi配置","Flask部署","Nginx配置","系统服务","脚本编写","LSB规范","PID文件","服务器管理"],"file_name":"2017-10-03-uwsgi-flask-deploy.md","description":"uwsgi配置 配置文件config.ini nginx配置 配置其实不难，按这个做应该就不会有大问题，一些小坑还得看文档或Google OK， 现在手动启动uwsgi， 服务应该可以启动了。 编写脚本 参考了以下资料 uwsgi加入系统服务 LSB_Wiki Linux应用程序编程界面规范.pdf 然后弄了个基本能用的脚本","head":[["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2017-10-03-uwsgi-flask-deploy.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"uwsgi部署flask应用"}],["meta",{"property":"og:description","content":"uwsgi配置 配置文件config.ini nginx配置 配置其实不难，按这个做应该就不会有大问题，一些小坑还得看文档或Google OK， 现在手动启动uwsgi， 服务应该可以启动了。 编写脚本 参考了以下资料 uwsgi加入系统服务 LSB_Wiki Linux应用程序编程界面规范.pdf 然后弄了个基本能用的脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T15:47:18.000Z"}],["meta",{"property":"article:tag","content":"uwsgi配置"}],["meta",{"property":"article:tag","content":"Flask部署"}],["meta",{"property":"article:tag","content":"Nginx配置"}],["meta",{"property":"article:tag","content":"系统服务"}],["meta",{"property":"article:tag","content":"脚本编写"}],["meta",{"property":"article:tag","content":"LSB规范"}],["meta",{"property":"article:tag","content":"PID文件"}],["meta",{"property":"article:tag","content":"服务器管理"}],["meta",{"property":"article:published_time","content":"2017-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T15:47:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uwsgi部署flask应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-29T15:47:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"]]},"headers":[],"git":{"createdTime":1727624838000,"updatedTime":1727624838000,"contributors":[{"name":"VvvvvGH","email":"cheng123xp@gmail.com","commits":1}]},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"posts/2017-10-03-uwsgi-flask-deploy.md","localizedDate":"2017年10月3日","excerpt":"\\n<p>配置文件config.ini</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>[uwsgi]</span></span>\\n<span class=\\"line\\"><span>socket = 127.0.0.1:8001</span></span>\\n<span class=\\"line\\"><span># python module</span></span>\\n<span class=\\"line\\"><span>module = blog:app</span></span>\\n<span class=\\"line\\"><span>processes = 1     //处理器个数</span></span>\\n<span class=\\"line\\"><span>threads = 2     //线程个数</span></span>\\n<span class=\\"line\\"><span>master = true</span></span>\\n<span class=\\"line\\"><span>home = venv //python 的位置，这里是virtualenv</span></span>\\n<span class=\\"line\\"><span>pidfile=/var/run/uwsgi.pid // pidfile 便于停止进程</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,r as data};