import{_ as i,c as a,a as n,o as l}from"./app-CCGQQFBl.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="关于webassembly" tabindex="-1"><a class="header-anchor" href="#关于webassembly"><span>关于WebAssembly</span></a></h2><p>WebAssembly (Wasm) 是一种高性能、低级别的二进制指令集，专为网页运行设计。它是一种跨平台、紧凑、高效的编程语言，提供接近原生性能的运行能力，主要用于在浏览器中运行复杂计算任务或资源密集型应用。</p><h2 id="关键特性" tabindex="-1"><a class="header-anchor" href="#关键特性"><span>关键特性</span></a></h2><ul><li><strong><code>高性能</code></strong></li><li><strong><code>支持多种编程语言</code></strong> 最终都将编译成 WebAssembly 后运行于浏览器</li><li><strong><code>安全性</code></strong> WebAssembly 在沙箱环境中执行，遵循浏览器的安全模型，避免了直接操作底层硬件的风险</li><li><strong><code>跨平台支持</code></strong> 能在任何支持 WebAssembly 的环境中运行，包括主流浏览器（Chrome、Firefox、Safari、Edge）和服务器端（如 Node.js）</li></ul><h2 id="webassembly-的工作原理" tabindex="-1"><a class="header-anchor" href="#webassembly-的工作原理"><span>WebAssembly 的工作原理</span></a></h2><ol><li>开发者使用支持的语言（如 C、C++、Rust）编写代码</li><li>使用工具链（如 LLVM 或 Emscripten）将代码编译为 .wasm 文件</li><li>在 JavaScript 中通过 WebAssembly API 加载和解析 .wasm 文件</li><li>创建 WebAssembly 模块的实例，并分配所需资源</li><li>使用 JavaScript 调用 WebAssembly 导出的函数</li><li>WebAssembly 和 JavaScript 可以通过 内存 和 导入/导出接口 进行交互</li></ol><h2 id="应用示例" tabindex="-1"><a class="header-anchor" href="#应用示例"><span>应用示例</span></a></h2><ol><li>使用C编写功能逻辑</li></ol><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stdint.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> a </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编译为 WebAssembly</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">emcc</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add.c</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add.wasm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> WASM=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>什么是emcc</p><p>emcc 是 Emscripten Compiler Frontend 的命令行工具，属于 Emscripten 工具链的一部分，用于将 C 和 C++ 代码编译为 WebAssembly (.wasm) 或 JavaScript 文件（包括 asm.js）。</p><p>而Emscripten 是一个开源的 LLVM 到 Web 的编译器工具链，能够将以 C/C++ 编写的代码转译为可以在浏览器中运行的代码。</p><p>gcc 是一个通用的编译器，支持多种编程语言（C、C++、Fortran、Ada 等），主要用于生成可在本地平台运行的二进制文件。</p></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>emcc 的工作流程</p><p><strong>1. 编译器管道</strong></p><p>emcc 使用 LLVM 工具链，将 C/C++ 源代码逐步转换为 WebAssembly：</p><ul><li>源代码 → 中间表示 (IR)： 使用 clang 解析 C/C++ 代码，生成 LLVM 的中间表示（IR）。</li><li>中间表示 → 字节码： LLVM 的后端将中间表示转译为 WebAssembly 字节码。</li><li>字节码 → WebAssembly 文件： 最终生成 .wasm 文件和必要的 glue 代码。</li></ul><p><strong>2. 生成结果</strong></p><p>运行 emcc，可以生成以下输出文件：</p><ul><li>.wasm：WebAssembly 文件，包含编译后的二进制代码。</li><li>.js：JavaScript glue 文件，用于加载 WebAssembly 并提供辅助功能。主要辅助 WebAssembly 的加载和运行，提供与浏览器 API（如 DOM、Canvas）的交互桥梁。</li><li>.html：如果使用特定选项，还可以生成一个完整的 HTML 页面用于测试。</li></ul></div><ol start="3"><li id="callc">JavaScript中调用</li></ol><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 加载和实例化 WebAssembly 模块</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fetch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">add.wasm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">arrayBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bytes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  WebAssembly</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">instantiate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bytes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">results</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> results</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">instance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 输出 5</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript和webassembly互通" tabindex="-1"><a class="header-anchor" href="#javascript和webassembly互通"><span>JavaScript和WebAssembly互通</span></a></h2><h3 id="javascript调用c" tabindex="-1"><a class="header-anchor" href="#javascript调用c"><span>Javascript调用C</span></a></h3><p>通过实例化后的对象引用，可以调用到C程序里暴露的方法，如<a href="#callc">示例</a></p><h3 id="c调用javascript" tabindex="-1"><a class="header-anchor" href="#c调用javascript"><span>C调用Javascript</span></a></h3><p>WebAssembly 不会直接在编译时将 JavaScript 函数嵌入 C 代码。WebAssembly 模块和 JavaScript 是通过 导入机制 进行交互的。</p><p>C 代码需要与 JavaScript 交互时，通常是在 WebAssembly 模块外部（通过导入）提供 JavaScript 函数作为接口。C 代码中并不会直接嵌入 JavaScript 函数调用，而是通过导入的函数来间接调用 JavaScript。例如</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> call_js_log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Calling JavaScript function...</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// JavaScript 中定义的函数</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> jsLog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">From JS: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//通过instantiate初始化时导入javascript函数接口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fetch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">module.wasm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">arrayBuffer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">())</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bytes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> WebAssembly</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">instantiate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bytes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    env</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      jsLog</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> jsLog</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 将 JavaScript 中的 jsLog 函数导入 WebAssembly 模块</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }))</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">wasmModule</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // WebAssembly 模块已经实例化，调用其中的函数</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    wasmModule</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">instance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">call_js_log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // WebAssembly 调用 JavaScript 函数</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与浏览器api交互" tabindex="-1"><a class="header-anchor" href="#与浏览器api交互"><span>与浏览器API交互</span></a></h2><p>WebAssembly 可以与浏览器的其他 Web API 一起使用。例如，你可以通过 WebAssembly 进行高效的图像处理或数学运算，然后将结果传递回浏览器 API（如 Canvas 或 WebGL）进行渲染。</p>`,25)]))}const k=i(e,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/learn/front/K8AbMwyElo/","title":"WebAssembly","lang":"en-US","frontmatter":{"title":"WebAssembly","createTime":"2025/01/18 07:30:40","permalink":"/learn/front/K8AbMwyElo/","author":"Jack","tags":["WebAssembly","前端原生技术","C编程"],"description":null},"headers":[],"readingTime":{"minutes":3.43,"words":1028},"git":{"updatedTime":1738483360000,"contributors":[{"name":"美神猎手","username":"美神猎手","email":"meishenlieshou@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/美神猎手?v=4","url":"https://github.com/美神猎手"}],"changelog":[{"hash":"60cb2a59006034e7c457a49f4b91aefce8dfede7","date":1738483360000,"email":"meishenlieshou@users.noreply.github.com","author":"美神猎手","message":"更新 Knowledge points for react.md","commitUrl":"https://github.com/meishenlieshou/note/commit/60cb2a59006034e7c457a49f4b91aefce8dfede7"}]},"filePathRelative":"notes/learn/techs/WebAssembly.md","bulletin":false}');export{k as comp,d as data};
