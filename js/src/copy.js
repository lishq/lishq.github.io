function addLink(){var o,t=document.body;if(o=window.getSelection(),window.clipboardData){var e=o+("\r\n\r\n 原文出自[ I code,I crash ](https://blog.tolvyou.cn/) \n除特别声明外，均采用CC BY-NC-SA 4.0许可协议\n转载请保留原文链接: "+document.location.href);return window.clipboardData.setData("Text",e),!1}e=o+"<br/>"+("<br/>原文出自[ I code,I crash ](https://blog.tolvyou.cn/)<br/>除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议<br/>转载请保留原文链接: "+document.location.href);var n=document.createElement("div");n.style.position="absolute",n.style.left="-99999px",t.appendChild(n),n.innerHTML=e,o.selectAllChildren(n),window.setTimeout(function(){t.removeChild(n)},0)}document.oncopy=addLink;