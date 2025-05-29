import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as p}from"./app-CJlMl9Ja.js";const t={};function i(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1><p>前段时间看师兄在分享会上写了用selenium搞作业订阅的程序。 当时庆幸我院的老师都用静态网页发作业，看看<strong>Last-Modified</strong> 属性即可监测作业更新。然而好景不长，我院的服务器被黑了(黑人脸)，好久没修，老师只好使用blackboard系统更新作业。于是只能参照师兄写一个。其实动手做之后发现并不是很难。只是编程技术一般，写的并不是简洁。</p><h1 id="selenium-使用" tabindex="-1"><a class="header-anchor" href="#selenium-使用"><span>selenium 使用</span></a></h1><p>比较简单，需要webdriver 网上有资料。webdriver 用 Chrome 或 PhantomJS 都可以。 我是调试时用Chrome ，部署时用 PhantomJS。因为PhantomJS是没有图形界面的，比较方便。</p><p>Google 的例子</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>import time </span></span>
<span class="line"><span>from selenium import webdriver</span></span>
<span class="line"><span>import selenium.webdriver.chrome.service as service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service = service.Service(&#39;C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe&#39;)</span></span>
<span class="line"><span>service.start()</span></span>
<span class="line"><span>capabilities = {&#39;chrome.binary&#39;:&#39;C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe&#39;}</span></span>
<span class="line"><span>browser = webdriver.Remote(self.service.service_url, self.capabilities)</span></span>
<span class="line"><span>browser.get(&quot;www.baidu.com&quot;)</span></span>
<span class="line"><span>time.sleep(2)</span></span>
<span class="line"><span>browser.quit()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>from selenium import webdriver</span></span>
<span class="line"><span>import selenium.webdriver.chrome.service as service</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class HomeworkCheck:</span></span>
<span class="line"><span>    def __init__(self, classes, keyword):</span></span>
<span class="line"><span>        self.service = service.Service(&#39;C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe&#39;)</span></span>
<span class="line"><span>        self.service.start()</span></span>
<span class="line"><span>        self.capabilities = {&#39;chrome.binary&#39;: &#39;C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe&#39;}</span></span>
<span class="line"><span>        self.browser = webdriver.Remote(self.service.service_url, self.capabilities)</span></span>
<span class="line"><span>        self.selected_classes = classes</span></span>
<span class="line"><span>        self.key_words = keyword</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def login(self):</span></span>
<span class="line"><span>        self.browser.get(&quot;http://study.jnu.edu.cn&quot;)</span></span>
<span class="line"><span>        # 为了安全，请使用环境变量。&quot;os.environ.get()&quot;</span></span>
<span class="line"><span>        self.browser.find_element_by_name(&#39;user_id&#39;).send_keys(&#39;账号&#39;) </span></span>
<span class="line"><span>        self.browser.find_element_by_name(&#39;password&#39;).send_keys(&#39;密码&#39;)</span></span>
<span class="line"><span>        self.browser.find_element_by_xpath(&quot;//*[@id=\\&quot;login\\&quot;]/table/tbody/tr[3]/td[2]/input&quot;).click()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据课名和keyword来搜索页面，返回对应的url。理论上修改keyword可以搜索其他页面。</span></span>
<span class="line"><span>    def find_homework_pages(self):</span></span>
<span class="line"><span>        self.login()</span></span>
<span class="line"><span>        self.browser.get(&quot;http://study.jnu.edu.cn/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1&quot;)</span></span>
<span class="line"><span>        time.sleep(1)</span></span>
<span class="line"><span>        course_page = self.browser.page_source</span></span>
<span class="line"><span>        courses = re.findall(&quot;%3DCourse%26id%3D(.*?)%26url%3D.+?target=\\&quot;_top\\&quot;&gt;(.*?)&lt;/a&gt;&quot;, course_page)</span></span>
<span class="line"><span>        homework_urls = []</span></span>
<span class="line"><span>        for i in courses:</span></span>
<span class="line"><span>            for j in self.selected_classes:</span></span>
<span class="line"><span>                if j.encode(&#39;utf-8&#39;) == i[1].encode(&#39;utf-8&#39;):</span></span>
<span class="line"><span>                    print(i)</span></span>
<span class="line"><span>                    course_id = i[0]</span></span>
<span class="line"><span>                    course_url = &quot;http://study.jnu.edu.cn/webapps/blackboard/execute/launcher?type=Course&amp;id=%s&amp;url=&quot; % course_id</span></span>
<span class="line"><span>                    self.browser.get(course_url)</span></span>
<span class="line"><span>                    homework_page = self.browser.page_source</span></span>
<span class="line"><span>                    for key in self.key_words:</span></span>
<span class="line"><span>                        homework_id = re.findall(&quot;content_id=(.*?)&amp;amp.*?%s&quot; % key, homework_page)</span></span>
<span class="line"><span>                        if homework_id:</span></span>
<span class="line"><span>                            print(homework_id)</span></span>
<span class="line"><span>                            homework_urls.append(</span></span>
<span class="line"><span>                                &quot;http://study.jnu.edu.cn/webapps/blackboard/content/listContent.jsp?course_id=%s&amp;content_id=%s&amp;mode=reset&quot; % (</span></span>
<span class="line"><span>                                    course_id, homework_id[0]))</span></span>
<span class="line"><span>                    time.sleep(2)</span></span>
<span class="line"><span>        print(homework_urls)</span></span>
<span class="line"><span>        return homework_urls</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_homework(self):</span></span>
<span class="line"><span>        homework_urls = self.find_homework_pages()</span></span>
<span class="line"><span>        for url in homework_urls:</span></span>
<span class="line"><span>            self.browser.get(url)</span></span>
<span class="line"><span>            time.sleep(2)</span></span>
<span class="line"><span>            content = self.browser.find_element_by_id(&quot;content_listContainer&quot;).get_attribute(&#39;innerHTML&#39;)</span></span>
<span class="line"><span>            print(len(content)) # 作业的页面是一个表格，我粗暴地把表格长度记下来，下一次更新时长度肯定会变的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># key words 用来搜索作业或实验的发布页面。 class name 就不必多说了</span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    class_names = [&#39;离散数学Ⅰ（全英）&#39;, &#39;问题求解与程序设计实验（全英）&#39;]</span></span>
<span class="line"><span>    key_words = [&#39;Assignments&#39;, &#39;Labs&#39;]</span></span>
<span class="line"><span>    action = HomeworkCheck(class_names, key_words)</span></span>
<span class="line"><span>    action.get_homework()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8)]))}const c=n(t,[["render",i]]),m=JSON.parse('{"path":"/posts/2017-05-26-selenium-blackboard-homework.html","title":"selenium 登陆 blackboard系统 订阅作业更新","lang":"zh-CN","frontmatter":{"title":"selenium 登陆 blackboard系统 订阅作业更新","date":"2017-05-26T00:00:00.000Z","category":["自动化测试","教育技术","编程开发"],"tag":["Selenium","Blackboard","作业订阅","自动化脚本","WebDriver","PhantomJS","Python编程","教育平台","作业更新","网页爬虫"],"description":"前言 前段时间看师兄在分享会上写了用selenium搞作业订阅的程序。 当时庆幸我院的老师都用静态网页发作业，看看Last-Modified 属性即可监测作业更新。然而好景不长，我院的服务器被黑了(黑人脸)，好久没修，老师只好使用blackboard系统更新作业。于是只能参照师兄写一个。其实动手做之后发现并不是很难。只是编程技术一般，写的并不是简洁。 ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"selenium 登陆 blackboard系统 订阅作业更新\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-05-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-29T15:21:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guohao\\",\\"url\\":\\"https://space.vistazx1.top\\"}]}"],["meta",{"property":"og:url","content":"https://space.vistazx1.top/posts/2017-05-26-selenium-blackboard-homework.html"}],["meta",{"property":"og:site_name","content":"Vista"}],["meta",{"property":"og:title","content":"selenium 登陆 blackboard系统 订阅作业更新"}],["meta",{"property":"og:description","content":"前言 前段时间看师兄在分享会上写了用selenium搞作业订阅的程序。 当时庆幸我院的老师都用静态网页发作业，看看Last-Modified 属性即可监测作业更新。然而好景不长，我院的服务器被黑了(黑人脸)，好久没修，老师只好使用blackboard系统更新作业。于是只能参照师兄写一个。其实动手做之后发现并不是很难。只是编程技术一般，写的并不是简洁。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T15:21:40.000Z"}],["meta",{"property":"article:tag","content":"网页爬虫"}],["meta",{"property":"article:tag","content":"作业更新"}],["meta",{"property":"article:tag","content":"教育平台"}],["meta",{"property":"article:tag","content":"Python编程"}],["meta",{"property":"article:tag","content":"PhantomJS"}],["meta",{"property":"article:tag","content":"WebDriver"}],["meta",{"property":"article:tag","content":"自动化脚本"}],["meta",{"property":"article:tag","content":"作业订阅"}],["meta",{"property":"article:tag","content":"Blackboard"}],["meta",{"property":"article:tag","content":"Selenium"}],["meta",{"property":"article:published_time","content":"2017-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T15:21:40.000Z"}]]},"git":{"createdTime":1727623300000,"updatedTime":1727623300000,"contributors":[{"name":"root","username":"root","email":"root@vistazx1.top","commits":1,"url":"https://github.com/root"}]},"readingTime":{"minutes":2.05,"words":614},"filePathRelative":"posts/2017-05-26-selenium-blackboard-homework.md","excerpt":"\\n<p>前段时间看师兄在分享会上写了用selenium搞作业订阅的程序。  当时庆幸我院的老师都用静态网页发作业，看看<strong>Last-Modified</strong> 属性即可监测作业更新。然而好景不长，我院的服务器被黑了(黑人脸)<!--more-->，好久没修，老师只好使用blackboard系统更新作业。于是只能参照师兄写一个。其实动手做之后发现并不是很难。只是编程技术一般，写的并不是简洁。</p>\\n<h1>selenium 使用</h1>\\n<p>比较简单，需要webdriver 网上有资料。webdriver 用 Chrome 或 PhantomJS 都可以。\\n我是调试时用Chrome ，部署时用 PhantomJS。因为PhantomJS是没有图形界面的，比较方便。</p>","autoDesc":true}');export{c as comp,m as data};
