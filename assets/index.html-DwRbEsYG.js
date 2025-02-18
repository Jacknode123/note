import{_ as t,c as i,a as s,o}from"./app-NYTIPvMv.js";const a={};function r(n,e){return o(),i("div",null,e[0]||(e[0]=[s('<h2 id="web-security" tabindex="-1"><a class="header-anchor" href="#web-security"><span>Web Security</span></a></h2><p>Web security aims to protect web applications and their users from malicious attacks, data breaches, and unauthorized access.</p><h2 id="common-web-security-issues" tabindex="-1"><a class="header-anchor" href="#common-web-security-issues"><span>Common Web Security Issues</span></a></h2><h3 id="sql-injection" tabindex="-1"><a class="header-anchor" href="#sql-injection"><span>SQL Injection</span></a></h3><ul><li><p><strong><code>Description</code></strong> Attackers manipulate the database to execute unauthorized operations by inserting malicious SQL statements into input fields.</p></li><li><p><strong><code>Solutions</code></strong></p><ol><li>Use parameterized queries or prepared statements.</li><li>Avoid dynamically concatenating SQL statements.</li><li>Strictly validate and escape user input.</li></ol></li></ul><h3 id="cross-site-scripting-xss" tabindex="-1"><a class="header-anchor" href="#cross-site-scripting-xss"><span>Cross-Site Scripting (XSS)</span></a></h3><ul><li><p><strong><code>Description</code></strong> Attackers inject malicious scripts into the victim&#39;s browser to steal user data or hijack sessions.</p></li><li><p><strong><code>Solutions</code></strong></p><ol><li>HTML encode user input (special characters like &lt;&gt;&amp; should be encoded to avoid being treated as HTML tags).</li><li>Use CSP (Content-Security-Policy HTTP response header to restrict which resources can be loaded).</li><li>Prevent users from uploading or executing untrusted scripts.</li></ol></li></ul><h3 id="cross-site-request-forgery-csrf" tabindex="-1"><a class="header-anchor" href="#cross-site-request-forgery-csrf"><span>Cross-Site Request Forgery (CSRF)</span></a></h3><ul><li><strong><code>Description</code></strong> Attackers exploit the victim&#39;s identity to send unauthorized requests to a website.</li></ul><p>After the user logs into a trusted website, the attacker tricks the user into visiting a malicious site or clicking a malicious link through email, social media, or other means. When the user visits the malicious site, it sends a forged request to the trusted target site via JavaScript or other methods. Since the request is initiated by the victim&#39;s browser, it carries the user&#39;s authentication information (such as cookies).</p><ul><li><strong><code>Solutions</code></strong><ol><li>Add CSRF tokens to requests. The principle is to generate a unique token when the user requests an operation and attach it to the request. The server verifies the token to ensure the request is initiated by a trusted user, not a forged attack request.</li><li>Use POST method for sensitive operations.</li><li>Validate the request&#39;s origin (e.g., via Referer or Origin headers).</li></ol></li></ul><h3 id="clickjacking" tabindex="-1"><a class="header-anchor" href="#clickjacking"><span>Clickjacking</span></a></h3><ul><li><p><strong><code>Description</code></strong> A deceptive attack technique where attackers construct a &quot;hidden&quot; malicious page to trick users into clicking elements on the page, thinking they are clicking on other content.</p></li><li><p><strong><code>Solutions</code></strong></p><ol><li>Use the X-Frame-Options HTTP response header. X-Frame-Options is an HTTP response header that controls whether a page can be embedded in other pages via the <code>&lt;iframe&gt;</code> tag.</li><li>Use the frame-ancestors directive of Content Security Policy (CSP). The frame-ancestors directive controls which sources can embed the current page.</li></ol><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Content-Security-Policy:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> frame-ancestors &#39;self&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>Use UI design to prevent clickjacking:</li></ol><ul><li>Mask important buttons: Add a protective layer over important interactive buttons (e.g., &quot;pay&quot; buttons) to prevent them from being covered by transparent malicious iframes.</li><li>Use challenge/confirmation steps: Require users to confirm again (e.g., via pop-ups, captchas) when performing sensitive operations to ensure the operation is voluntary.</li></ul></li></ul><h3 id="data-transmission-leakage" tabindex="-1"><a class="header-anchor" href="#data-transmission-leakage"><span>Data Transmission Leakage</span></a></h3><ul><li><p><strong><code>Description</code></strong> Sensitive information (e.g., passwords, credit card numbers) is not properly protected during storage or transmission.</p></li><li><p><strong><code>Solutions</code></strong></p><ol><li>Use HTTPS for encrypted communication.</li><li>Encrypt sensitive data in storage.</li><li>Implement strong password policies.</li></ol></li></ul><h3 id="file-upload-vulnerabilities" tabindex="-1"><a class="header-anchor" href="#file-upload-vulnerabilities"><span>File Upload Vulnerabilities</span></a></h3><ul><li><p><strong><code>Description</code></strong> Attackers execute code or access sensitive server information by uploading malicious files. For example:</p><ol><li>Uploading a web shell to execute files on the server and view sensitive information.</li><li>Uploading malicious scripts.</li><li>Uploading files with malicious macros.</li><li>Uploading large files to crash the server.</li></ol></li><li><p><strong><code>Solutions</code></strong></p><ol><li>Validate file extensions and MIME types.</li><li>Restrict execution permissions of the upload directory.</li><li>Inspect file content and rename files.</li></ol></li></ul><h3 id="distributed-denial-of-service-ddos" tabindex="-1"><a class="header-anchor" href="#distributed-denial-of-service-ddos"><span>Distributed Denial of Service (DDoS)</span></a></h3><ul><li><p><strong><code>Description</code></strong> Attackers exhaust server resources through a large number of requests, making the service unavailable.</p></li><li><p><strong><code>Solutions</code></strong></p><ol><li>Use WAF (Web Application Firewall, requires installation or purchase of corresponding software services).</li><li>Deploy DDoS protection tools (requires installation or purchase of corresponding software services).</li><li>Monitor traffic and rate limit.</li></ol></li></ul><h3 id="insecure-deserialization" tabindex="-1"><a class="header-anchor" href="#insecure-deserialization"><span>Insecure Deserialization</span></a></h3><ul><li><strong><code>Description</code></strong> Attackers execute malicious code by exploiting deserialization vulnerabilities. The key issue with deserialization attacks is that the application fails to properly validate the source of deserialized data, leading to the deserialization of malicious data and triggering unsafe operations.</li></ul><p>For example, in Java, deserializing a malicious object may execute dangerous commands like Runtime.getRuntime().exec(), triggering command execution attacks.</p><ul><li><strong><code>Solutions</code></strong><ol><li>Disable deserialization from untrusted sources.</li><li>Use secure serialization formats like JSON.</li></ol></li></ul>',23)]))}const c=t(a,[["render",r],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/learn/front/FHkSPfT2yC4cA3tVuw/","title":"Web Security","lang":"en-US","frontmatter":{"title":"Web Security","createTime":"2025/01/19 17:00:48","permalink":"/learn/front/FHkSPfT2yC4cA3tVuw/","author":"Jack","tags":["Web Security","Browser"],"description":"description","head":[["meta",{"property":"og:url","content":"https://duduainy.top/learn/front/FHkSPfT2yC4cA3tVuw/"}],["meta",{"property":"og:site_name","content":"Seasoned Jack"}],["meta",{"property":"og:title","content":"Web Security"}],["meta",{"property":"og:description","content":"description"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-18T05:19:47.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Web Security"}],["meta",{"property":"article:tag","content":"Browser"}],["meta",{"property":"article:modified_time","content":"2025-02-18T05:19:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Web Security\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T05:19:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.32,"words":696},"git":{"updatedTime":1739855987000},"filePathRelative":"notes/learn/techs/13. Web Security.md","bulletin":false}');export{c as comp,d as data};
