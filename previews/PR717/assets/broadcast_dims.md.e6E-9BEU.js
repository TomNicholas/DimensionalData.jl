import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.BfvSibfy.js";const c=JSON.parse('{"title":"broadcast_dims and broadcast_dims!","description":"","frontmatter":{},"headers":[],"relativePath":"broadcast_dims.md","filePath":"broadcast_dims.md","lastUpdated":null}'),e={name:"broadcast_dims.md"},h=n(`<h1 id="broadcast_dims-and-broadcast_dims!" tabindex="-1"><code>broadcast_dims</code> and <code>broadcast_dims!</code> <a class="header-anchor" href="#broadcast_dims-and-broadcast_dims!" aria-label="Permalink to &quot;\`broadcast_dims\` and \`broadcast_dims!\` {#broadcast_dims-and-broadcast_dims!}&quot;">​</a></h1><p><a href="/DimensionalData.jl/previews/PR717/api/reference#DimensionalData.broadcast_dims"><code>broadcast_dims</code></a> is a dimension-aware extension to Base julia <code>broadcast</code>.</p><p>Because we know the names of the dimensions there is no ambiguity in which one we mean to broadcast together. We can permute and reshape dims so that broadcasts that would fail with a regular <code>Array</code> just work with a <code>DimArray</code>.</p><p>As an added bonus, <code>broadcast_dims</code> even works on <code>DimStack</code>s.</p><h2 id="Example:-scaling-along-the-time-dimension" tabindex="-1">Example: scaling along the time dimension <a class="header-anchor" href="#Example:-scaling-along-the-time-dimension" aria-label="Permalink to &quot;Example: scaling along the time dimension {#Example:-scaling-along-the-time-dimension}&quot;">​</a></h2><p>Define some dimensions:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DimensionalData, Dates, Statistics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x, y, t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> X</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Ti</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 1:100</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">→ </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;"> 1:25</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Ti</span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;"> Dates.DateTime(&quot;2000-01-01T00:00:00&quot;):Dates.Month(1):Dates.DateTime(&quot;2000-12-01T00:00:00&quot;)</span></span></code></pre></div><p>A DimArray from 1:12 to scale with:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> month_scalars </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DimArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(month, t)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭────────────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">12-element </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">DimArray{Int64,1}</span><span style="--shiki-light:#00afaf;--shiki-dark:#00afaf;"> month(Ti)</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────────────┴─────────────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Dates.DateTime} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Dates.DateTime(&quot;2000-01-01T00:00:00&quot;):Dates.Month(1):Dates.DateTime(&quot;2000-12-01T00:00:00&quot;)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-01-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   1</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-02-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   2</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-03-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   3</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-04-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   4</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-05-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   5</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-06-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   6</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-07-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   7</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-08-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   8</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-09-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   9</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-10-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  10</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-11-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  11</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-12-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  12</span></span></code></pre></div><p>And a larger DimArray for example data:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, t)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭───────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">100</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">25</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">12</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> DimArray{Float64,3}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────────────────────┴──────────────────────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">1:100</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">1:25</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Dates.DateTime} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Dates.DateTime(&quot;2000-01-01T00:00:00&quot;):Dates.Month(1):Dates.DateTime(&quot;2000-12-01T00:00:00&quot;)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">[</span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">:</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">, </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">:</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">, </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">]</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   ↓</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;"> →</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  1</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         2</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         3</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">         …  </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">23</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         24</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         25</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.565306  0.81176   0.625534      0.790395   0.290551   0.717108</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   2</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.556999  0.716166  0.396516      0.830339   0.241498   0.680783</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   3</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.613395  0.441974  0.495973      0.653648   0.486307   0.819806</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   4</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.507427  0.210782  0.655965      0.41907    0.934118   0.453144</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   ⋮                                  ⋱                         ⋮</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  97</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.569706  0.408051  0.856288      0.486287   0.89027    0.551692</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  98</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.637665  0.583297  0.584623      0.4608     0.921453   0.160918</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  99</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.785719  0.459878  0.114104      0.340359   0.373956   0.175284</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 100</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.617436  0.404017  0.933143  …   0.160226   0.352494   0.0174632</span></span></code></pre></div><p>A regular broadcast fails:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scaled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> month_scalars</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">ERROR: DimensionMismatch: arrays could not be broadcast to a common size; got a dimension with lengths 100 and 12</span></span></code></pre></div><p>But <code>broadcast_dims</code> knows to broadcast over the <code>Ti</code> dimension:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scaled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> broadcast_dims</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data, month_scalars)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭───────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">100</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">25</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">×</span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">12</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> DimArray{Float64,3}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├───────────────────────────────┴──────────────────────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">X </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">1:100</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  → </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">Y </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Int64} </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">1:25</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">,</span></span>
<span class="line"><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">  ↗ </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Dates.DateTime} </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">Dates.DateTime(&quot;2000-01-01T00:00:00&quot;):Dates.Month(1):Dates.DateTime(&quot;2000-12-01T00:00:00&quot;)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">[</span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">:</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">, </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">:</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">, </span><span style="--shiki-light:#5fd7ff;--shiki-dark:#5fd7ff;">1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">]</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   ↓</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;"> →</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">  1</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         2</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         3</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">         …  </span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">23</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         24</span><span style="--shiki-light:#0087d7;--shiki-dark:#0087d7;">         25</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.565306  0.81176   0.625534      0.790395   0.290551   0.717108</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   2</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.556999  0.716166  0.396516      0.830339   0.241498   0.680783</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   3</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.613395  0.441974  0.495973      0.653648   0.486307   0.819806</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">   4</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.507427  0.210782  0.655965      0.41907    0.934118   0.453144</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   ⋮                                  ⋱                         ⋮</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  97</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.569706  0.408051  0.856288      0.486287   0.89027    0.551692</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  98</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.637665  0.583297  0.584623      0.4608     0.921453   0.160918</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  99</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.785719  0.459878  0.114104      0.340359   0.373956   0.175284</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 100</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">    0.617436  0.404017  0.933143  …   0.160226   0.352494   0.0174632</span></span></code></pre></div><p>We can see the means of each month are scaled by the broadcast :</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eachslice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data; dims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, Y)))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">12-element </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">DimArray{Float64,1}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────┴─────────────────────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Dates.DateTime} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Dates.DateTime(&quot;2000-01-01T00:00:00&quot;):Dates.Month(1):Dates.DateTime(&quot;2000-12-01T00:00:00&quot;)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-01-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.486583</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-02-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.512277</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-03-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.498208</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-04-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.502656</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-05-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.507222</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-06-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.4947</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-07-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.491729</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-08-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.494385</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-09-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.498642</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-10-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.494142</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-11-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.494316</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-12-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.493395</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eachslice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scaled; dims</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X, Y)))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">╭────────────────────────────────╮</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">12-element </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">DimArray{Float64,1}</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> │</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">├────────────────────────────────┴─────────────────────────────────────── dims ┐</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">  ↓ </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Ti</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Sampled{Dates.DateTime} </span><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;">Dates.DateTime(&quot;2000-01-01T00:00:00&quot;):Dates.Month(1):Dates.DateTime(&quot;2000-12-01T00:00:00&quot;)</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> ForwardOrdered</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Regular</span><span style="--shiki-light:#808080;--shiki-dark:#808080;"> Points</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">└──────────────────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-01-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  0.486583</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-02-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  1.02455</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-03-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  1.49462</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-04-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2.01062</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-05-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2.53611</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-06-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  2.9682</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-07-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  3.4421</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-08-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  3.95508</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-09-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  4.48778</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-10-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  4.94142</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-11-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  5.43747</span></span>
<span class="line"><span style="--shiki-light:#ff875f;--shiki-dark:#ff875f;"> 2000-12-01T00:00:00</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  5.92074</span></span></code></pre></div>`,25),l=[h];function t(k,p,d,f,r,g){return a(),i("div",null,l)}const o=s(e,[["render",t]]);export{c as __pageData,o as default};