webpackJsonp([72],{853:function(n,a){n.exports={content:["article",["h3","\u5f00\u59cb\u4f7f\u7528"],["p","pro \u901a\u8fc7 umi \u63d2\u4ef6 ",["a",{title:null,href:"https://github.com/umijs/umi-plugin-locale"},"umi-plugin-locale"]," \u6765\u5b9e\u73b0\u5168\u7403\u5316\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u9ed8\u8ba4\u5f00\u542f\u3002\n",["code","umi-plugin-locale"]," \u7ea6\u5b9a \u5728src/locales \u4e2d\u5f15\u5165 \u76f8\u5e94\u7684 js\uff0c\u4f8b\u5982 en-US.js \u548c zh-CN.js\uff0c\n\u5e76\u4e14\u5728 ",["code","config/config.js"]," \u4e2d\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"],["pre",{lang:"js",highlighted:'plugins<span class="token punctuation">:</span><span class="token punctuation">[</span>\n   <span class="token operator">...</span><span class="token punctuation">,</span>\n   locale<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        enable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string">\'zh-CN\'</span><span class="token punctuation">,</span> \n        baseNavigator<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> \n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span><span class="token punctuation">.</span>\n<span class="token punctuation">]</span>'},["code","plugins:[\n   ...,\n   locale: {\n        enable: true,\n        default: 'zh-CN', \n        baseNavigator: true, \n    },\n    ....\n]"]],["p","\u5c31\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u5168\u7403\u5316\u7684\u529f\u80fd\u4e86\u3002\u8be6\u7ec6\u914d\u7f6e\u53c2\u89c1",["a",{title:null,href:"https://github.com/umijs/umi-plugin-locale#usage"},"config"],"\u3002"],["p",["code","umi-plugin-locale"]," \u5c01\u88c5\u4e86",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"],", api \u4e0e ",["code","react-intl"]," \u57fa\u672c\u76f8\u540c\uff0c\u5e76\u505a\u4e86\u5c01\u88c5\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf\u3002\u5168\u90e8 api \u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  formatMessage<span class="token punctuation">,</span>\n  setLocale<span class="token punctuation">,</span>\n  getLocale<span class="token punctuation">,</span>\n  FormattedMessage<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'umi/locale\'</span><span class="token punctuation">;</span>'},["code","import {\n  formatMessage,\n  setLocale,\n  getLocale,\n  FormattedMessage,\n} from 'umi/locale';"]],["h3","\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"],["p","\u5982\u679c\u6211\u4eec\u5728  ",["code","en-US.js"]," \u548c ",["code","zh-CN.js"]," \u4e2d\u5206\u522b\u4f5c\u4e86\u5982\u4e0b\u914d\u7f6e\uff1a"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// en-US.js</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token string">\'navbar.lang\'</span><span class="token punctuation">:</span> <span class="token string">\'\u4e2d\u6587\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// zh-CN.js</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token string">\'navbar.lang\'</span><span class="token punctuation">:</span> <span class="token string">\'English\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","// en-US.js\n\nexport default {\n  'navbar.lang': '\u4e2d\u6587',\n}\n\n// zh-CN.js\n\nexport default {\n  'navbar.lang': 'English',\n}"]],["p","\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u8fd9\u6837\u4f7f\u7528"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  FormattedMessage<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'umi/locale\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span>FormattedMessage id<span class="token operator">=</span><span class="token string">"navbar.lang"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">}</span>'},["code","import {\n  FormattedMessage,\n} from 'umi/locale';\n\nexport default () => {\n  return <div><FormattedMessage id=\"navbar.lang\" /></div>\n}"]],["p","\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u76f4\u63a5\u8fd4\u56de string\u3002\u4f60\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  formatMessage<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'umi/locale\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">formatMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>id<span class="token punctuation">:</span><span class="token string">\'navbar.lang\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">}</span>'},["code","import {\n  formatMessage,\n} from 'umi/locale';\n\nexport default () => {\n  return <div>{formatMessage({id:'navbar.lang'})}</div>\n}"]],["h3","\u8bbe\u7f6e\u533a\u57df"],["p",["code","umi-plugin-locale"],"  \u66b4\u9732\u4e86\u540d\u4e3a ",["code","setLocale"]," \u548c ",["code","getLocale"]," \u7684 api\uff0c\u901a\u8fc7\u8fd9\u4e24\u4e2a api \u53ef\u4ee5\u65b9\u4fbf\u7684\u5207\u6362\u533a\u57df\u3002\n\u4ee3\u7801\u770b\u8d77\u6765\u50cf\u8fd9\u6837\u7684\uff1a"],["pre",{lang:"js",highlighted:' <span class="token operator">...</span>\n changLang <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">getLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>locale <span class="token operator">||</span> locale <span class="token operator">===</span> <span class="token string">\'zh-CN\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">\'zh-CN\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token operator">&lt;</span>Button\n          size<span class="token operator">=</span><span class="token string">"small"</span>\n          ghost<span class="token operator">=</span><span class="token punctuation">{</span>theme <span class="token operator">===</span> <span class="token string">\'dark\'</span><span class="token punctuation">}</span>\n          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            margin<span class="token punctuation">:</span> <span class="token string">\'0 8px\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token operator">&lt;</span>FormattedMessage id<span class="token operator">=</span><span class="token string">"navbar.lang"</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n  <span class="token punctuation">}</span>'},["code"," ...\n changLang = () => {\n    const locale = getLocale();\n    if (!locale || locale === 'zh-CN') {\n      setLocale('en-US');\n    } else {\n      setLocale('zh-CN');\n    }\n  };\n  render(){\n        <Button\n          size=\"small\"\n          ghost={theme === 'dark'}\n          style={{\n            margin: '0 8px',\n          }}\n          onClick={() => {\n            this.changLang();\n          }}\n        >\n          <FormattedMessage id=\"navbar.lang\" />\n        </Button>\n  }"]],["p","\u66f4\u591a\u9ad8\u7ea7\u7684\u7528\u6cd5\u53ef\u4ee5\u53c2\u7167 ",["a",{title:null,href:"https://github.com/yahoo/react-intl/wiki#getting-started"},"react-intl \u7684 api"],"\u3002"]],meta:{order:13,title:"\u56fd\u9645\u5316",type:"\u8fdb\u9636",filename:"docs/i18n.zh-CN.md"},toc:["ul"]}}});