<div id="content-wrap">
  <div id="content" class="wrapper">
    <div id="content-inner">
      <article class="article-container" itemscope itemtype="http://schema.org/Article">
        <div class="article-inner">
          <div class="article">
            <div class="inner">
              <header class="article-header">
                <h1 class="article-title" itemprop="name">{{ page.title }}</h1>
              </header>
              <div class="article-content" itemprop="articleBody">
                {{ page_anchor(page.content) }}
              </div>
              <div id="footer-copyright">
      &copy; {{ moment(Date.now()).year() }} {{ config.author }} 保留一切权利。<br>
    </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
