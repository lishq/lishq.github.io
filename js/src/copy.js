function addLink() 
{ 
    var body_element = document.body; var selection;
    selection = window.getSelection(); 
    if (window.clipboardData) { // Internet Explorer 
        var pagelink ="\r\n\r\n 原文出自[ I code,I crash ](https://blog.tolvyou.cn/) \n除特别声明外，均采用CC BY-NC-SA 4.0许可协议\n转载请保留原文链接: "+document.location.href+""; 
        var copytext = selection + pagelink;
        window.clipboardData.setData ("Text", copytext); 
        return false; 
    }
    else {
        var pagelink = "<br/>原文出自[ I code,I crash ](https://blog.tolvyou.cn/)<br/>除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议<br/>转载请保留原文链接: "+document.location.href+"";
        var copytext = selection + "<br/>"+pagelink;
        var newdiv = document.createElement('div');
        newdiv.style.position='absolute';
        newdiv.style.left='-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function() { body_element.removeChild(newdiv);},0);
    } 
} 
document.oncopy = addLink;