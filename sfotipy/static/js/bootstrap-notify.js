


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>bootstrap-notify/bootstrap-notify.js at master · goodybag/bootstrap-notify · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="goodybag/bootstrap-notify" name="twitter:title" /><meta content="bootstrap-notify - Bootstrap alert system made better, builds off of bootstrap-alert.js" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/812185?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/812185?v=3&amp;s=400" property="og:image" /><meta content="goodybag/bootstrap-notify" property="og:title" /><meta content="https://github.com/goodybag/bootstrap-notify" property="og:url" /><meta content="bootstrap-notify - Bootstrap alert system made better, builds off of bootstrap-alert.js" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="BE5C305B:17DA:58CE195:5654993E" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="4cf7ddf8f8f0941682e645e9b05b14fc571a642d" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-3698fb0adc53fda9a2672a02c3fa3b20b89480f2a47ce38216b21cf3eb5b4750.css" integrity="sha256-Npj7CtxT/amiZyoCw/o7ILiUgPKkfOOCFrIc8+tbR1A=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-84f5bb59141e497516d920891b2b4b9546f973becc8d7a34706b8ad2d556ef40.css" integrity="sha256-hPW7WRQeSXUW2SCJGytLlUb5c77MjXo0cGuK0tVW70A=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="efef53cedb8e9d707a094b7ee9bb1be4">

      
  <meta name="description" content="bootstrap-notify - Bootstrap alert system made better, builds off of bootstrap-alert.js">
  <meta name="go-import" content="github.com/goodybag/bootstrap-notify git https://github.com/goodybag/bootstrap-notify.git">

  <meta content="812185" name="octolytics-dimension-user_id" /><meta content="goodybag" name="octolytics-dimension-user_login" /><meta content="4659467" name="octolytics-dimension-repository_id" /><meta content="goodybag/bootstrap-notify" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4659467" name="octolytics-dimension-repository_network_root_id" /><meta content="goodybag/bootstrap-notify" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/goodybag/bootstrap-notify/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-notify:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fgoodybag%2Fbootstrap-notify%2Fblob%2Fmaster%2Fjs%2Fbootstrap-notify.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/goodybag/bootstrap-notify/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/goodybag/bootstrap-notify/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fgoodybag%2Fbootstrap-notify"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/goodybag/bootstrap-notify/watchers">
    83
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fgoodybag%2Fbootstrap-notify"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/goodybag/bootstrap-notify/stargazers">
      778
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fgoodybag%2Fbootstrap-notify"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/goodybag/bootstrap-notify/network" class="social-count">
      248
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/goodybag" class="url fn" itemprop="url" rel="author"><span itemprop="title">goodybag</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/goodybag/bootstrap-notify" data-pjax="#js-repo-pjax-container">bootstrap-notify</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/goodybag/bootstrap-notify/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/goodybag/bootstrap-notify" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /goodybag/bootstrap-notify">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/goodybag/bootstrap-notify/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /goodybag/bootstrap-notify/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/goodybag/bootstrap-notify/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /goodybag/bootstrap-notify/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/goodybag/bootstrap-notify/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /goodybag/bootstrap-notify/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/goodybag/bootstrap-notify/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /goodybag/bootstrap-notify/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/goodybag/bootstrap-notify.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/goodybag/bootstrap-notify" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="4cf7ddf8f8f0941682e645e9b05b14fc571a642d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="//vtL2qIvqXrZ0XigRbW+F0m/HjwcraiEEXpBKEKKkwxwoBOqWLynpu40iNfTCsG9r0/r/m7ndh5tP/WC9Mhuw==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="4cf7ddf8f8f0941682e645e9b05b14fc571a642d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eyAv9KKwZ6mkNfbGXGkm79ZhZXT+gqRIP1VpLhajDD6M/3sasPRSoWUyb4rU7rbExnyxnoU+ejIYyEVZV1ZCTw==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save goodybag/bootstrap-notify to your computer and use it in GitHub Desktop." aria-label="Save goodybag/bootstrap-notify to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/goodybag/bootstrap-notify/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of goodybag/bootstrap-notify as a zip file"
                 title="Download the contents of goodybag/bootstrap-notify as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/goodybag/bootstrap-notify/blob/3126eacae19201014d6fb5cfcb31d6299a87ac5c/js/bootstrap-notify.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:54df2c516924425da347407f735f075e -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/goodybag/bootstrap-notify/blob/gh-pages/js/bootstrap-notify.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/goodybag/bootstrap-notify/blob/master/js/bootstrap-notify.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/goodybag/bootstrap-notify/tree/v0.2.0/js/bootstrap-notify.js"
                 data-name="v0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.0">v0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/goodybag/bootstrap-notify/tree/0.1.0/js/bootstrap-notify.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/goodybag/bootstrap-notify/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/goodybag/bootstrap-notify" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-notify</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/goodybag/bootstrap-notify/tree/master/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">bootstrap-notify.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/goodybag/bootstrap-notify/commit/40121327180a52128a814c70932f11fe80b9e0d7" data-pjax>
          4012132
        </a>
        <time datetime="2014-07-29T19:41:58Z" is="relative-time">Jul 29, 2014</time>
      </span>
      <div>
        <img alt="@ernestoalejo" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/961966?v=3&amp;s=40" width="20" />
        <a href="/ernestoalejo" class="user-mention" rel="contributor">ernestoalejo</a>
          <a href="/goodybag/bootstrap-notify/commit/40121327180a52128a814c70932f11fe80b9e0d7" class="message" data-pjax="true" title="Add braces to conditionals to fix some errors.">Add braces to conditionals to fix some errors.</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>7</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="Laboratory" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=Laboratory"><img alt="@Laboratory" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1676506?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lalitkapoor" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=lalitkapoor"><img alt="@lalitkapoor" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/140436?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="younes0" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=younes0"><img alt="@younes0" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/886042?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Nijikokun" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=Nijikokun"><img alt="@Nijikokun" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/198276?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gcirne" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=gcirne"><img alt="@gcirne" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/41139?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ernestoalejo" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=ernestoalejo"><img alt="@ernestoalejo" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/961966?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="cbou" href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js?author=cbou"><img alt="@cbou" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/611389?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@Laboratory" height="24" src="https://avatars0.githubusercontent.com/u/1676506?v=3&amp;s=48" width="24" />
            <a href="/Laboratory">Laboratory</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lalitkapoor" height="24" src="https://avatars0.githubusercontent.com/u/140436?v=3&amp;s=48" width="24" />
            <a href="/lalitkapoor">lalitkapoor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@younes0" height="24" src="https://avatars1.githubusercontent.com/u/886042?v=3&amp;s=48" width="24" />
            <a href="/younes0">younes0</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Nijikokun" height="24" src="https://avatars0.githubusercontent.com/u/198276?v=3&amp;s=48" width="24" />
            <a href="/Nijikokun">Nijikokun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gcirne" height="24" src="https://avatars2.githubusercontent.com/u/41139?v=3&amp;s=48" width="24" />
            <a href="/gcirne">gcirne</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ernestoalejo" height="24" src="https://avatars3.githubusercontent.com/u/961966?v=3&amp;s=48" width="24" />
            <a href="/ernestoalejo">ernestoalejo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cbou" height="24" src="https://avatars0.githubusercontent.com/u/611389?v=3&amp;s=48" width="24" />
            <a href="/cbou">cbou</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/goodybag/bootstrap-notify/raw/master/js/bootstrap-notify.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/goodybag/bootstrap-notify/blame/master/js/bootstrap-notify.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/goodybag/bootstrap-notify/commits/master/js/bootstrap-notify.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      98 lines (85 sloc)
      <span class="file-info-divider"></span>
    2.86 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bootstrap-notify.js v1.0</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * --</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  * Copyright 2012 Goodybag, Inc.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * --</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> (<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">Notification</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">element</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Element collection</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.$element <span class="pl-k">=</span> $(element);</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.$note    <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;alert&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.<span class="pl-c1">options</span>  <span class="pl-k">=</span> $.<span class="pl-en">extend</span>(<span class="pl-c1">true</span>, {}, $.<span class="pl-smi">fn</span>.<span class="pl-smi">notify</span>.<span class="pl-smi">defaults</span>, options);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Setup from options</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">transition</span>) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">transition</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">transition</span>);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">addClass</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">transition</span>);</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alert-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">type</span>);</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alert-success<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>message<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-c">// dom text</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">html</span>(<span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>message<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span>.<span class="pl-smi">html</span>)</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">html</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span>.<span class="pl-smi">html</span>);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span>.<span class="pl-c1">text</span>)</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-c1">text</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span>.<span class="pl-c1">text</span>);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">html</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">message</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">closable</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> link <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a class=&quot;close pull-right&quot; href=&quot;#&quot;&gt;&amp;times;&lt;/a&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      $(link).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, $.<span class="pl-en">proxy</span>(<span class="pl-c1">onClose</span>, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">prepend</span>(link);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">onClose</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onClose</span>();</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    $(<span class="pl-smi">this</span>.$note).<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">onClosed</span>();</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">Notification</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">show</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fadeOut</span>.<span class="pl-smi">enabled</span>)</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">delay</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fadeOut</span>.<span class="pl-smi">delay</span> <span class="pl-k">||</span> <span class="pl-c1">3000</span>).<span class="pl-en">fadeOut</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span>, $.<span class="pl-en">proxy</span>(<span class="pl-c1">onClose</span>, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-en">append</span>(<span class="pl-smi">this</span>.$note);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-c1">alert</span>();</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">Notification</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hide</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fadeOut</span>.<span class="pl-smi">enabled</span>)</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">this</span>.$<span class="pl-smi">note</span>.<span class="pl-en">delay</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">fadeOut</span>.<span class="pl-smi">delay</span> <span class="pl-k">||</span> <span class="pl-c1">3000</span>).<span class="pl-en">fadeOut</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span>, $.<span class="pl-en">proxy</span>(<span class="pl-c1">onClose</span>, <span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> <span class="pl-smi">onClose</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">notify</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Notification</span>(<span class="pl-v">this</span>, options);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">  $.<span class="pl-smi">fn</span>.<span class="pl-smi">notify</span>.<span class="pl-smi">defaults</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>success<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    closable<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    transition<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    fadeOut<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      enabled<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">      delay<span class="pl-k">:</span> <span class="pl-c1">3000</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    message<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">onClose</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {},</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">onClosed</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">})(<span class="pl-smi">window</span>.<span class="pl-smi">jQuery</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07975s from github-fe124-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-fRgMK7V3nst6tdBM6K+ZnnODbc8N8ajES2nGKh3gcy8=" src="https://assets-cdn.github.com/assets/frameworks-7d180c2bb5779ecb7ab5d04ce8af999e73836dcf0df1a8c44b69c62a1de0732f.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-zj+N7WT8qDCpOKfFVGvoaJ/gjTaHzXGpwD8UHTfG5Ak=" src="https://assets-cdn.github.com/assets/github-ce3f8ded64fca830a938a7c5546be8689fe08d3687cd71a9c03f141d37c6e409.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

