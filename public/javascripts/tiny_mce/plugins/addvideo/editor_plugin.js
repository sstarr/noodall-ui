(function(){tinymce.PluginManager.requireLangPack('addvideo');tinymce.create('tinymce.plugins.AddvideoPlugin',{init:function(ed,url){ed.addCommand('mceAddvideo',function(){ed.windowManager.open({file:url+'/dialog.htm',width:320+parseInt(ed.getLang('addvideo.delta_width',0)),height:120+parseInt(ed.getLang('addvideo.delta_height',0)),inline:1},{plugin_url:url,some_custom_arg:'custom arg'})});ed.addButton('addvideo',{title:'addvideo.desc',cmd:'mceAddvideo',image:url+'/img/youtube.gif'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('youtube',n.nodeName=='IMG')})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'Addvideo plugin',author:'Some author',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/addvideo',version:"1.0"}}});tinymce.PluginManager.add('addvideo',tinymce.plugins.AddvideoPlugin)})();