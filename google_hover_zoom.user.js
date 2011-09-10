// ==UserScript==
// @id             google_hover_zoom
// @name           Google+ Hover Zoom
// @description    Enlarge thumbnails & profile icons on mouse hover. Display pictures in comments directly. Download albums quickly.
// @author         SkyArrow
// @website        http://userscripts.org/scripts/show/106681
// @namespace      http://zespia.twbbs.org
// @version        1.2.4
// @include        https://plus.google.com/*
// ==/UserScript==

function hoverzoom(){
	// jQuery masonry
	(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)):this.offset.x=Math.round(i.position().left),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this._getColumns("masonry"),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y,this.options.isFitWidth&&(l.width=this.cols*this.columnWidth-this.options.gutterWidth),this.styleQueue.push({$el:this.element,style:l});var m=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",n=this.options.animationOptions,o;for(j=0,k=this.styleQueue.length;j<k;j++)o=this.styleQueue[j],o.$el[m](o.style,n);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g={top:c};g[this.horizontalDirection]=this.columnWidth*d+this.offset.x,this.styleQueue.push({$el:a,style:g});var h=c+a.outerHeight(!0),i=this.cols+1-f;for(e=0;e<i;e++)this.colYs[d+e]=h},resize:function(){var a=this.cols;this._getColumns("masonry"),this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){var b=this.find("img"),c=[],d=this,e=b.length;if(!b.length){a.call(this);return this}b.one("load error",function(){--e===0&&(e=b.length,b.one("load error",function(){--e===0&&a.call(d)}).each(function(){this.src=c.shift()}))}).each(function(){c.push(this.src),this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});return this};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
	
	// jQuery atteeeeention
	$.fn.atteeeeention=function(a){return this.each(function(){var k=$.extend({margin:12,hideLastRow:false},a),l=$(this),f=l.find("img"),e=k.margin,c=f.length,g=0,m=l.innerWidth(),n,h=[],d=0,b=1000,o=0,i=0,j=function(){var s=m-(d-n)+e,q=Math.floor(s/o),t=s-(q*o),r=0;$.each(h,function(w,x){var v=$(f[i]),u=v.parent();r=x+q;u.height(b);if(o===(w+1)){u.css("margin-right",0);v.width(r+t);}else{v.width(r);}i++;});},p=function(){var r=0,q=o;if(k.hideLastRow===true){for(;r<q;r++){$(f[i]).parent().hide();i++;}}else{for(;r<q;r++){$(f[i]).parent().height(b);i++;}}};l.addClass("clearfix");f.css({border:0,margin:0,padding:0}).parent().css({"float":"left",display:"inline","margin-top":0,"margin-right":e,"margin-bottom":e,"margin-left":0,overflow:"hidden","vertical-align":"top"});f.each(function(){var q=$(this),r=q.attr("src");q.attr("src","").load(function(){g++;if(g===c){f.each(function(u){var t=$(this),s=t.width(),v=t.height();n=s+e;d=d+n;if(v<b){b=v;}if(d>m){j();d=n;b=v;h=[s];o=1;}else{h.push(s);o++;}if((c-1)===u){p();}});}}).attr("src",r);});});};
	
	var $window = $(window),
		$content = $('#content').parent(),
		wWidth = $window.width(),
		wHeight = $window.height(),
		version = '1.2.4',
		picRegex = /\.(jpg|jpeg|gif|bmp|png|tiff)/i,
		picasaRegex = /\/\w\d+(-\w\d*)*\/([^\/]+)$/;
		
	$content.append('<div id="hoverzoom"></div>');
	var $zoom = $('#hoverzoom');
	
	// Get mouse position
	var mouse = {};
	
	$(document).mousemove(function(e){
		mouse.x = e.pageX;
		mouse.y = e.pageY;
		
		if ( options['hz_shortcut'] === 'true' ) {
			$shortcut = $('#hz_functions');
			if ( e.pageX > $shortcut.offset().left + 150 || e.pageY > $shortcut.offset().top + 80 || e.pageX < $shortcut.offset().left - 100 || e.pageY < $shortcut.offset().top - 80 )
				$shortcut.hide();
		}
	});
	
	// Window resize
	$(window).resize(function(){
		wWidth = $(window).width();
		wHeight = $(window).height();
	});
	
	// Load settings
	var options = {
		'hz_delay': parseInt(localStorage['hz_delay']) || 500,
		'hz_opacity': parseInt(localStorage['hz_opacity']) || 100,
		'hz_maxwidth': parseInt(localStorage['hz_maxwidth']) || 0,
		'hz_download': localStorage['hz_download'] || 'false',
		'hz_his': localStorage['hz_his'] || 'false',
		'hz_his_max': parseInt(localStorage['hz_his_max']) || 100,
		'hz_trigger': parseInt(localStorage['hz_trigger']) || 0,
		'hz_direct': localStorage['hz_direct'] || 'true',
		'hz_direct_max': parseInt(localStorage['hz_direct_max']) || 0,
		'hz_resolution': localStorage['hz_resolution'] || 'false',
		'hz_fullscreen': parseInt(localStorage['hz_fullscreen']) || 0,
		'hz_dl_key': parseInt(localStorage['hz_dl_key']) || 0,
		'hz_complete': localStorage['hz_complete'] || 'true',
		'hz_drift': localStorage['hz_drift'] || 'true',
		'hz_shortcut': localStorage['hz_shortcut'] || 'false',
		'hz_album': localStorage['hz_album'] || 'true',
		'hz_direct_yt': localStorage['hz_direct_yt'] || 'false',
		'hz_direct_ytaspect': parseInt(localStorage['hz_direct_ytaspect']) || 2,
		'hz_direct_ytmaxwidth': parseInt(localStorage['hz_direct_ytmaxwidth']) || 0,
		'hz_language': localStorage['hz_language'] || navigator.language,
		'hz_his_columns': parseInt(localStorage['hz_his_columns']) || 5,
		'hz_enable_main': localStorage['hz_enable_main'] || 'true',
		'hz_enable_icon': localStorage['hz_enable_icon'] || 'true',
		'hz_enable_link': localStorage['hz_enable_link'] || 'true',
		'hz_allpics': localStorage['hz_allpics'] || 'false',
		'hz_update': localStorage['hz_update'] || 'true',
		'hz_dl_link': localStorage['hz_dl_link'] || 'true',
		'hz_maxpic': localStorage['hz_maxpic'] || 'false'
	};
	
	enable();
	
	// Localization
	var locale = options['hz_language'],
		locale_db_1 = 'Download the picture hovered',
		locale_menu_1 = 'Disable Hover Zoom',
		locale_menu_2 = 'Enabele Hover Zoom',
		locale_lang_01 = 'English',
		locale_lang_02 = '正體中文',
		locale_lang_03 = '简体中文',
		locale_fs_1 = 'Press full screen mode trigger or click here to exit fullscreen mode.',
		locale_fs_2 = 'Exit fullscreen',
		locale_fs_3 = 'Download',
		locale_fs_4 = 'Loading…',
		locale_fs_5 = 'View as',
		locale_fs_6 = 'Page Width',
		locale_fs_7 = 'Actual Size (100%)',
		locale_fs_8 = 'Fullscreen',
		locale_fs_9 = 'Window Size',
		locale_fs_10 = 'Prev',
		locale_fs_11 = 'Next',
		locale_al_1 = 'Download Album',
		locale_al_2 = 'Browse',
		locale_al_3 = 'Open with Picasa',
		locale_al_4 = 'If you can\'t download this album directly, please open it with Picasa. (Require Picasa)',
		locale_al_5 = 'Copy Links',
		locale_yt_1 = 'Remove',
		locale_allpic_1 = 'Download All Photos',
		locale_piclink_1 = 'Download Photos:',
		locale_maxPic_1 = 'Zoom',
		locale_update_1 = 'Update',
		locale_update_2 = 'New: ',
		locale_update_3 = 'Current: ',
		locale_update_4 = 'Cancel',
		locale_update_5 = 'Check Update',
		locale_update_6 = 'is the latest version!',
		locale_set_title = 'Hover Zoom Settings',
		locale_set_save = 'Save & Reload page',
		locale_set_reset = 'Reset',
		locale_set_reset_confirm = 'Are you sure to reset all options?',
		locale_set_history = 'Hover Zoom History',
		locale_history_title = 'History',
		locale_his_count_1 = ' photo',
		locale_his_count_2 = ' photos',
		locale_set_clear = 'Clear',
		locale_set_close = 'Close',
		locale_tab_1 = 'General',
		locale_tab_2 = 'Shortcuts',
		locale_tab_3 = 'Other',
		locale_set_1_1 = 'Delay:',
		locale_set_1_2 = 'ms',
		locale_set_2 = 'Opacity:',
		locale_set_3_1 = 'Max Width:',
		locale_set_3_2 = 'px (0: Unlimited)',
		locale_set_4 = 'Enable Download Button',
		locale_set_5_1 = 'Enable History, Max Records:',
		locale_set_5_2 = ', Columns:',
		locale_set_6 = '(0: Unlimited)',
		locale_set_7_1 = 'Trigger:',
		locale_set_7_2 = 'None',
		locale_set_8 = 'Show Picture Links in Comments Directly, Max Width:',
		locale_set_9 = 'Show Resolution',
		locale_set_10 = 'Full Screen Mode:',
		locale_set_11 = 'Download Shortcut:',
		locale_set_12 = 'Show picture after loaded completely',
		locale_set_13 = 'Not to move pictures with mouse',
		locale_set_14 = 'Show Shortcuts',
		locale_set_15 = 'Enable Album Download (Only for public albums)',
		locale_set_16_1 = 'Show Youtube Links in Comments Directly, Video Aspect:',
		locale_set_16_2 = ', Max Width:',
		locale_set_17 = 'Language:',
		locale_set_18_1 = 'Enable:',
		locale_set_18_2 = 'Content',
		locale_set_18_3 = 'Profile Icon',
		locale_set_18_4 = 'Links',
		locale_set_19 = 'Enable "Download All Photos in This Page"',
		locale_set_20 = 'Enable Auto Update',
		locale_set_21 = 'Display download links below pictures',
		locale_set_22 = 'Display photos as stream width';
	
	switch (locale)
	{
		case 'zh-TW':
		case 'zh-HK':
			locale_db_1 = '下載圖片',
			locale_menu_1 = '停用 Hover Zoom',
			locale_menu_2 = '啟用 Hover Zoom',
			locale_fs_1 = '輕按全螢幕觸發鍵，或點擊此處離開全螢幕模式。',
			locale_fs_2 = '離開全螢幕',
			locale_fs_3 = '下載',
			locale_fs_4 = '載入中...',
			locale_fs_5 = '顯示方式',
			locale_fs_6 = '頁面寬度',
			locale_fs_7 = '實際大小 (100%)',
			locale_fs_8 = '全螢幕',
			locale_fs_9 = '視窗大小',
			locale_fs_10 = '上一張',
			locale_fs_11 = '下一張',
			locale_al_1 = '下載相簿',
			locale_al_2 = '瀏覽',
			locale_al_3 = '以 Picasa 開啟',
			locale_al_4 = '若您無法直接下載本相簿，請使用 Picasa 開啟。(需安裝 Picasa)',
			locale_al_5 = '複製網址',
			locale_yt_1 = '移除',
			locale_allpic_1 = '下載本頁所有圖片',
			locale_piclink_1 = '圖片下載：',
			locale_maxPic_1 = '縮小',
			locale_update_1 = '更新',
			locale_update_2 = '更新版本：',
			locale_update_3 = '目前版本：',
			locale_update_4 = '取消',
			locale_update_5 = '檢查更新',
			locale_update_6 = '已是最新版本！',
			locale_set_title = 'Hover Zoom 設定',
			locale_set_save = '儲存並重載頁面',
			locale_set_reset = '重設',
			locale_set_reset_confirm = '您確定要重設所有設定值嗎？',
			locale_set_history = 'Hover Zoom 記錄',
			locale_history_title = '記錄',
			locale_his_count_1 = ' 張相片',
			locale_his_count_2 = ' 張相片',
			locale_set_clear = '清除',
			locale_set_close = '關閉',
			locale_tab_1 = '一般',
			locale_tab_2 = '快捷鍵',
			locale_tab_3 = '其他',
			locale_set_1_1 = '延遲：',
			locale_set_1_2 = '毫秒 (ms)',
			locale_set_2 = '透明度：',
			locale_set_3_1 = '最大寬度：',
			locale_set_3_2 = 'px (0：無限制)',
			locale_set_4 = '啟用下載按鈕',
			locale_set_5_1 = '啟用記錄，最大記錄數：',
			locale_set_5_2 = '，直欄數：',
			locale_set_6 = '(0: 無限制)',
			locale_set_7_1 = '觸發鍵：',
			locale_set_7_2 = '無',
			locale_set_8 = '直接顯示留言內的圖片連結，最大寬度：',
			locale_set_9 = '顯示圖片解析度',
			locale_set_10 = '全螢幕模式：',
			locale_set_11 = '下載快捷鍵：',
			locale_set_12 = '完全載入後再顯示圖片',
			locale_set_13 = '圖片不隨滑鼠飄移',
			locale_set_14 = '顯示快捷鍵',
			locale_set_15 = '啟用相簿下載 (僅限公開相簿)',
			locale_set_16_1 = '直接顯示留言內的 Youtube 連結，長寬比例：',
			locale_set_16_2 = '，最大寬度：',
			locale_set_17 = '語言：',
			locale_set_18_1 = '啟用：',
			locale_set_18_2 = '內文',
			locale_set_18_3 = '個人檔案圖示',
			locale_set_18_4 = '連結',
			locale_set_19 = '啟用「下載本頁所有圖片」',
			locale_set_20 = '啟用自動更新',
			locale_set_21 = '在圖片下顯示下載連結',
			locale_set_22 = '以訊息串寬度顯示圖片';
			break;
		
		case 'zh-CN':
			locale_db_1 = '下载图片',
			locale_menu_1 = '停用 Hover Zoom',
			locale_menu_2 = '启用 Hover Zoom',
			locale_fs_1 = '轻按全屏触发键，或点击此处离开全屏模式。',
			locale_fs_2 = '离开全屏模式',
			locale_fs_3 = '下载',
			locale_fs_4 = '加载中...',
			locale_fs_5 = '显示方式',
			locale_fs_6 = '页面宽度',
			locale_fs_7 = '实际大小 (100%)',
			locale_fs_8 = '全屏',
			locale_fs_9 = '窗口大小',
			locale_fs_10 = '上一张',
			locale_fs_11 = '下一张',
			locale_al_1 = '下载相簿',
			locale_al_2 = '浏览',
			locale_al_3 = '以 Picasa 开启',
			locale_al_4 = '若您无法直接下载本相簿，请使用 Picasa 开启。(需安装 Picasa)',
			locale_al_5 = '复制网址',
			locale_yt_1 = '移除',
			locale_allpic_1 = '下载本页所有图片',
			locale_piclink_1 = '图片下载：',
			locale_maxPic_1 = '缩小',
			locale_update_1 = '更新',
			locale_update_2 = '更新版本：',
			locale_update_3 = '当前版本：',
			locale_update_4 = '取消',
			locale_update_5 = '检查更新',
			locale_update_6 = '已是最新版本！',
			locale_set_title = 'Hover Zoom 设定',
			locale_set_save = '储存并重载页面',
			locale_set_reset = '重设',
			locale_set_reset_confirm = '您确定要重设所有设定值吗？',
			locale_set_history = 'Hover Zoom 记录',
			locale_history_title = '记录',
			locale_his_count_1 = ' 张相片',
			locale_his_count_2 = ' 张相片',
			locale_set_clear = '清除',
			locale_set_close = '关闭',
			locale_tab_1 = '通用',
			locale_tab_2 = '快捷键',
			locale_tab_3 = '其它',
			locale_set_1_1 = '延迟：',
			locale_set_1_2 = '毫秒 (ms)',
			locale_set_2 = '透明度：',
			locale_set_3_1 = '最大宽度：',
			locale_set_3_2 = 'px (0：无限制)',
			locale_set_4 = '启用下载按钮',
			locale_set_5_1 = '启用记录，最大记录数：',
			locale_set_5_2 = '，直栏数：',
			locale_set_6 = '(0: 无限制)',
			locale_set_7_1 = '触发键：',
			locale_set_7_2 = '无',
			locale_set_8 = '直接显示评论内的图片连结，最大宽度：',
			locale_set_9 = '显示图片分辨率',
			locale_set_10 = '全屏模式',
			locale_set_11 = '下载快捷键：',
			locale_set_12 = '完全载入后再显示图片',
			locale_set_13 = '图片不随鼠标飘移',
			locale_set_14 = '显示快捷键',
			locale_set_15 = '启用相簿下载 (仅限公开相簿)',
			locale_set_16_1 = '直接显示留言内的 Youtube 连结，长宽比例：',
			locale_set_16_2 = '，最大宽度：',
			locale_set_17 = '语言：',
			locale_set_18_1 = '启用：',
			locale_set_18_2 = '内文',
			locale_set_18_3 = '个人档案图标',
			locale_set_18_4 = '链结',
			locale_set_19 = '启用「下载本页所有图片」',
			locale_set_20 = '启用自动更新',
			locale_set_21 = '在图片下显示下载链结',
			locale_set_22 = '以讯息流显示图片';
			break;
	}
	
	var init = {
		normal: function(){
			$('#gbd5 ol.gbmcc').append('<li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbkp gbmtc"><a id="disable_hz" class="gbmt" href="javascript:void(0)">'+locale_menu_1+'</a></li><li class="gbkp gbmtc"><a id="hz_set_open" class="gbmt" href="javascript:void(0)">'+locale_set_title+'</a></li>');
			
			$content.append('<div id="hz_set_back"></div><div id="hz_set_page" class="hz_settings"><h3>'+locale_set_title+'</h3><small>Ver. '+version+' by <a href="https://plus.google.com/105931860008509594725/posts" target="_blank">SkyArrow</a></small><div id="hz_set_close" class="closeButton" title="'+locale_set_close+'"></div></div>');
			
			$zoom.css('opacity', options['hz_opacity'] / 100);
			
			$('#hz_set_page').append(
			'<ul class="hz_menu"><li tabid="0" class="current">'+locale_tab_1+'</li><li tabid="1">'+locale_tab_2+'</li><li tabid="2">'+locale_tab_3+'</li></ul>'+
			// General Tab
			'<div class="hz_set_tab">'+
			'<label>'+locale_set_18_1+'</label><input id="hz_enable_main" type="checkbox"/><label for="hz_enable_main">'+locale_set_18_2+'</label><input id="hz_enable_icon" type="checkbox"/><label for="hz_enable_icon">'+locale_set_18_3+'</label><input id="hz_enable_link" type="checkbox"/><label for="hz_enable_link">'+locale_set_18_4+'</label><br />'+
			'<label for="hz_delay">'+locale_set_1_1+'</label><input id="hz_delay" type="text" maxlength="4"/><label for="hz_delay">'+locale_set_1_2+'</label><br />'+
			'<label for="hz_opacity">'+locale_set_2+'</label><input id="hz_opacity" type="text" maxlength="3"/><label for="hz_opacity">%</label><br />'+
			'<label for="hz_maxwidth">'+locale_set_3_1+'</label><input id="hz_maxwidth" type="text" maxlength="4"/><label for="hz_maxwidth">'+locale_set_3_2+'</label><br />'+
			'<input id="hz_complete" type="checkbox"/><label for="hz_complete">'+locale_set_12+'</label><br />'+
			'<input id="hz_drift" type="checkbox"/><label for="hz_drift">'+locale_set_13+'</label><br />'+
			'<input id="hz_resolution" type="checkbox"/><label for="hz_resolution">'+locale_set_9+'</label>'+
			// Shortcuts Tab
			'</div><div class="hz_set_tab" style="display: none;">'+
			'<label for="hz_trigger">'+locale_set_7_1+'</label><select id="hz_trigger"></select><br />'+
			'<label for="hz_dl_key">'+locale_set_11+'</label><select id="hz_dl_key"></select><br />'+
			'<label for="hz_fullscreen">'+locale_set_10+'</label><select id="hz_fullscreen"></select><br />'+
			'<input id="hz_download" type="checkbox"/><label for="hz_download">'+locale_set_4+'</label><br />'+
			'<input id="hz_shortcut" type="checkbox"/><label for="hz_shortcut">'+locale_set_14+'</label><br />'+
			'<input id="hz_dl_link" type="checkbox"/><label for="hz_dl_link">'+locale_set_21+'</label>'+
			// Other Tab
			'</div><div class="hz_set_tab" style="display: none;">'+
			'<label for="hz_language">'+locale_set_17+'</label><select id="hz_language"></select><br />'+
			'<input id="hz_update" type="checkbox"/><label for="hz_update">'+locale_set_20+'</label> <a id="hz_checkupdate" href="javascript:void(0)">('+locale_update_5+')</a><br />'+
			'<input id="hz_maxpic" type="checkbox"/><label for="hz_maxpic">'+locale_set_22+'</label><br />'+
			'<input id="hz_direct" type="checkbox"/><label for="hz_direct">'+locale_set_8+'</label><input id="hz_direct_max" type="text" maxlength="4"/><label for="hz_direct_max">'+locale_set_3_2+'</label><br />'+
			'<input id="hz_direct_yt" type="checkbox"/><label for="hz_direct_yt">'+locale_set_16_1+'</label><select id="hz_direct_ytaspect"><option value="1">4:3</option><option value="2">16:9</option><option value="3">16:10</option></select><label for="hz_direct_ytaspect">'+locale_set_16_2+'</label><input id="hz_direct_ytmaxwidth" type="text" maxlength="4"/><label for="hz_direct_ytmaxwidth">'+locale_set_3_2+'</label><br />'+
			'<input id="hz_album" type="checkbox"/><label for="hz_album">'+locale_set_15+'</label><br />'+
			'<input id="hz_allpics" type="checkbox"/><label for="hz_allpics">'+locale_set_19+'</label><br />'+
			'<input id="hz_his" type="checkbox"/><label for="hz_his">'+locale_set_5_1+'</label><input id="hz_his_max" type="text" maxlength="4"/><label for="hz_his_columns">'+locale_set_5_2+'</label><input id="hz_his_columns" type="text" maxlength="1"/></div>'+
			'<div id="hz_set_save" class="button_style greenButton" title="'+locale_set_save+'">'+locale_set_save+'</div><div title="'+locale_set_reset+'" class="button_style whiteButton" id="hz_set_clear">'+locale_set_reset+'</div>'
			);
			
			$('#hz_trigger, #hz_fullscreen, #hz_dl_key').append('<option value="0">'+locale_set_7_2+'</option><option value="16">Shift</option><option value="17">Control</option>');
			
			(navigator.appVersion.indexOf('Macintosh') > -1) ? $('#hz_trigger, #hz_fullscreen, #hz_dl_key').append('<option value="18">Option</option><option value="13">Return</option>') : $('#hz_trigger, #hz_fullscreen, #hz_dl_key').append('<option value="18">Alt</option><option value="13">Enter</option>');
			
			for ( var i=65; i<91; i++ ) {
				$('#hz_trigger, #hz_fullscreen, #hz_dl_key').append('<option value="'+i+'">&#'+i+';</option>');
			}
			
			$('#hz_language').append(
			'<option value="en">'+locale_lang_01+'</option>'+
			'<option value="zh-TW">'+locale_lang_02+'</option>'+
			'<option value="zh-CN">'+locale_lang_03+'</option>'
			);
			
			$('#disable_hz').toggle(function(){
				disable();
				$(this).text(locale_menu_2);
			}, function(){
				enable();
				$(this).text(locale_menu_1);
			});
			
			$('.hz_menu li').click(function(){
				var id = $(this).attr('tabid');
				$(this).parent().parent().children('.hz_set_tab').hide();
				$(this).parent().parent().children('.hz_set_tab:eq('+id+')').show();
				$(this).parent().children().removeClass('current');
				$(this).parent().children().eq(id).addClass('current');
			});
			
			$('#hz_set_save').click(function(){
				$('#hz_set_page').find(':text').each(function(){
					localStorage[$(this).attr('id')] = $(this).val();
				});
				
				$('#hz_set_page').find('select').each(function(){
					localStorage[$(this).attr('id')] = $(this).find(':selected').val();
				});
				
				$('#hz_set_page').find(':checkbox').each(function(){
					localStorage[$(this).attr('id')] = $(this).prop('checked').toString();
				});
				
				location.reload();
			});
			
			$('#hz_set_clear').click(function(){
				var sure = confirm(locale_set_reset_confirm);
				
				if ( sure ) {
					localStorage.clear();
					location.reload();
				} else {
					return false;
				}
			});
			
			$('#hz_checkupdate').click(function(){
				autoUpdate(true);
			});
			
			settingPage();
		},
		download: function(){
			$content.append('<a id="picbefore" title="'+locale_db_1+'"></a>');
		},
		fullscreen: function(){
			$content.append('<div id="hoverzoom_info"><div class="right"><span title="'+locale_fs_1+'" id="hoverzoom_fs_exit">'+locale_fs_2+'</span><span><a href="" target="_blank">'+locale_fs_3+'</a></span><span>'+locale_fs_5+'<div class="detailButton"></div><ul><li id="hoverzoom_fs_01" class="current">'+locale_fs_9+'</li><li id="hoverzoom_fs_02">'+locale_fs_6+'</li><li id="hoverzoom_fs_03">'+locale_fs_7+'</li></ul></span><span></span><span></span></div></div><img id="hoverzoom_fs" />');
		},
		shortcut: function(){
			$content.append('<div id="hz_functions" class="button_style whiteButton"><a href="" target="_blank">'+locale_fs_3+'</a><a href="javascript:void(0)">'+locale_fs_8+'</a></div>');
		},
		history: function(){
			$('#gbd5 ol.gbmcc').append('<li class="gbkp gbmtc"><a id="hz_history_open" class="gbmt" href="javascript:void(0)">'+locale_set_history+'</a></li>');
			$('#content').append('<div id="hz_history_page" class="hz_settings"><h3>'+locale_history_title+'</h3><small></small><div class="hz_set_function"><div id="hz_his_clear" class="whiteButton button_style" title="'+locale_set_clear+'">'+locale_set_clear+'</div><div id="hz_history_list" class="button_style blueButton" title="'+locale_al_5+'">'+locale_al_5+'</div></div><div id="hz_his_close" class="closeButton" title="'+locale_set_close+'"></div><div id="hz_history_out"><div id="hz_history"></div></div></div>');
			
			var histories = localStorage['hz_histories'].split('|||'),
				his = histories.length - 1;
				
			if ( his > 0 ) { 
				for ( var i=0; i<his; i++ ) {
					var indiv = histories[i].split(';'),
						thumbnail = ( indiv[0].match(/googleusercontent/) && indiv[0].match(picasaRegex) ) ? indiv[0].replace(picasaRegex, '/w'+parseInt((wWidth - 200) / options['hz_his_columns'] - 10)+'/$2') : indiv[0];
					$('#hz_history').prepend('<a href="'+indiv[0]+'" title="'+indiv[1]+'" target="_blank"><img src="'+thumbnail+'"/></a>');
				}
				
				$('#hz_history').children().eq(options['hz_his_max']-1).nextAll().remove();
				
				if ( $('#hz_history').children().length > 0 ) {
					localStorage['hz_histories'] = '';
					for ( var x=his-1; x>=0; x-- ) {
						var item = $('#hz_history').children('a').eq(x);
						localStorage['hz_histories'] = localStorage['hz_histories'] + item.attr('href') + ';' + item.attr('title') + '|||';
					}
				}
			}
			
			history();
		},
		album: function(){
			$content.append('<div id="hz_albums_page" class="hz_settings"><h3>'+locale_al_1+'</h3><small></small><div class="hz_set_function"><div id="hz_albums_list" class="button_style blueButton" title="'+locale_al_5+'">'+locale_al_5+'</div><a id="hz_albums_picasa" class="button_style orangeButton" title="'+locale_al_4+'">'+locale_al_3+'</a></div><div title="'+locale_set_close+'" class="closeButton" id="hz_albums_close"></div><div id="hz_albums_out"><div id="hz_albums"></div></div></div>');
			
			albumDL();
		},
		allPic: function(){
			$('#gbd5 ol.gbmcc').append('<li class="gbkp gbmtc"><a id="hz_allpic_dl" class="gbmt" href="javascript:void(0)">'+locale_allpic_1+'</a></li>');
			$content.append('<div id="hz_allpic_page" class="hz_settings"><h3>'+locale_allpic_1+'</h3><small></small><div id="hz_allpic_list" class="button_style blueButton hz_set_function" title="'+locale_al_5+'">'+locale_al_5+'</div><div title="'+locale_set_close+'" class="closeButton" id="hz_allpic_close"></div><div id="hz_allpic_out"><div id="hz_allpic"></div></div></div>');
			
			allPic();
		},
		copyArea: function(){
			$content.append('<div id="hz_copyarea" class="hz_settings"><h3>'+locale_al_5+'</h3><div title="'+locale_set_close+'" class="closeButton" id="hz_copyarea_close"></div><textarea readonly wrap="off"></textarea></div>');
			
			$('#hz_copyarea textarea').click(function(){
				$(this).select();
			});
			
			$('#hz_copyarea_close').click(function(){
				$('#hz_copyarea').fadeOut(300);
				$('#hz_copyarea textarea').empty();
			});
		}
	};
	
	init.normal();
	if ( options['hz_download'] === 'true' ) init.download();
	if ( options['hz_fullscreen'] > 0 ) init.fullscreen();
	if ( options['hz_shortcut'] === 'true' ) init.shortcut();
	if ( options['hz_his'] === 'true' ) init.history();
	if ( options['hz_album'] === 'true' ) init.album();
	if ( options['hz_allpics'] === 'true' ) init.allPic();
	if ( options['hz_direct'] === 'true' ) directPic();
	if ( options['hz_direct_yt'] === 'true' ) directYT();
	if ( options['hz_update'] === 'true' ) autoUpdate();
	if ( options['hz_dl_link'] === 'true' ) picLink();
	if ( options['hz_maxpic'] === 'true' ) maxPic();
	init.copyArea();
	
	function main(url){
		var tag = $(this).prop('tagName'),
			self = $(this);
		
		if ( tag == 'IMG' ) {
			var url = $(this).attr('src');

			url = ( url.match(/\?sz|\/proxy/) ) ? $(this).attr('src').replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : $(this).attr('src').replace(picasaRegex,'/s0/$2');
		} else if ( tag == 'A' ) {
			var url = $(this).attr('href');
			
			if ( url.match(picRegex) == null )
				return false;
		} else {
			return false;
		}
		
		var img = new Image();
			img.src = url;
		
		var nWidth, nHeight, timer1, timer2, timerSC;
		
		img.onload = function(){
			nWidth = img.naturalWidth;
			nHeight = img.naturalHeight;
			
			if ( options['hz_resolution'] === 'true' ) {
				$zoom.children('small').remove();
				$zoom.append('<small>'+nWidth+' x '+nHeight+'</small>');
			}
		}
		
		
		trigger();
		$('#picbefore').attr('href', url).show();
		
		self.bind('mouseleave', hide);
		$(document).unbind('keydown');
		$(document).bind('keydown', function(e){
			var code = e.keyCode || e.which;
			if ( code == options['hz_trigger'] ) {
				show();
			} else if ( code == options['hz_fullscreen'] ) {
				fullscreen();
				history();
			} else if ( code == options['hz_dl_key'] ) {
				open(url);
				history();
			}
		});
		
		function trigger(){
			if ( options['hz_trigger'] == 0 ) {
				clearTimeout(timer1);
				timer1 = setTimeout(function(){
					show();
				}, options['hz_delay']);
			}
			
			if ( options['hz_shortcut'] === 'true' )
				timerSC = setTimeout(shortcut, options['hz_delay']);
		}
		
		function show(){
			var target = document.createElement('img'),
				hz = document.getElementById('hoverzoom');
			target.src = img.src;
			$zoom.children('img').remove();
			hz.appendChild(target);
			
			if ( options['hz_complete'] === 'false' )
				$zoom.children('img').show();
			$zoom.children('img').after($zoom.children('small'));
			
			if ( options['hz_drift'] === 'true' ) {
				$zoom.fadeIn(300).offset({'top': mouse.y + 20, 'left': mouse.x + 20});
			} else {
				if ( mouse.x > wWidth / 2 ) {
					$(this).mousemove(function(e){
						resize.left(e);
					});
				} else {
					$(this).mousemove(function(e){
						resize.right(e);
					});
				}
				$zoom.fadeIn(300).offset({'top': mouse.y + 20, 'left': mouse.x + 20});
			}
			
			target.onload = function(){
				if ( options['hz_complete'] === 'true' ) {
					$zoom.children('img').show();
				}
				
				if ( options['hz_drift'] === 'true' ) {
					if ( mouse.x > wWidth / 2 )
						resize.left();
					else
						resize.right();
				}
				
				history();
			}
		}
		
		var resize = {
			left: function(e){
				if ( options['hz_drift'] === 'true' ) {
					var x = mouse.x,
						y = mouse.y;
				} else {
					var x = e.pageX,
						y = e.pageY;
				}
				
				var picWidth = x - 30;
				
				if ( options['hz_maxwidth'] > 0 && picWidth > options['hz_maxwidth'] )
					picWidth = options['hz_maxwidth'];
				
				$zoom.children('img').css('maxWidth', picWidth);
				( options['hz_resolution'] === 'true' ) ? $zoom.children('img').css('maxHeight', wHeight - 50) : $zoom.children('img').css('maxHeight', wHeight - 35);
				
				$zoom.offset({'top': y + 20, 'left': x - $zoom.width() - 20});
				
				if ( y + $zoom.height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $zoom.offset().top - $zoom.height() < $(document).scrollTop() + 20) ?	$zoom.offset({'top': $(document).scrollTop() + 10}) : $zoom.offset({'top': y - $zoom.height() - 20});
			},
			right: function(e){
				if ( options['hz_drift'] === 'true' ) {
					var x = mouse.x,
						y = mouse.y;
				} else {
					var x = e.pageX,
						y = e.pageY;
				}
				
				$zoom.offset({'top': y + 20, 'left': x + 20});
				
				var picWidth = wWidth - x - 40;
				
				if ( options['hz_maxwidth'] > 0 && picWidth > options['hz_maxwidth'] )
					picWidth = options['hz_maxwidth'];
				
				$zoom.children('img').css('maxWidth', picWidth);
				( options['hz_resolution'] === 'true' ) ? $zoom.children('img').css('maxHeight', wHeight - 50) : $zoom.children('img').css('maxHeight', wHeight - 35);
				
				if ( y + $zoom.height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $zoom.offset().top - $zoom.height() < $(document).scrollTop() + 20) ?	$zoom.offset({'top': $(document).scrollTop() + 10}) : $zoom.offset({'top': y - $zoom.height() - 20});
			}
		};
		
		function history(){
			if ( img.src != $('#hz_history').children().eq(0).attr('href') ) {
				var time = new Date(),
					month = time.getMonth() + 1,
					day = time.getDate(),
					hour = time.getHours(),
					minute = time.getMinutes(),
					second = time.getSeconds();
					if ( minute < 10 ) minute = '0' + minute;
					if ( second < 10 ) second = '0' + second;
					
				var date = month+'/'+day+' '+hour+':'+minute+':'+second,
					thumbnail = ( url.match(/googleusercontent/) && url.match(picasaRegex) ) ? url.replace(picasaRegex, '/w'+parseInt((wWidth - 200) / options['hz_his_columns'] - 10)+'/$2') : url;
				
				$('#hz_history').prepend('<a href="'+url+'" target="_blank" title="'+date+'"><img src="'+thumbnail+'"/></a>');
				
				localStorage['hz_histories'] = localStorage['hz_histories'] + url + ';' + date + '|||';
				
				if ( $('#hz_history').children().length > options['hz_his_max']) {
					$('#hz_history').children().eq(options['hz_his_max']).remove();
				}
			}
		}
		
		function shortcut(){
			clearTimeout(timerSC);
			$shortcut = $('#hz_functions');
			$shortcut.children('a:eq(0)').attr('href', img.src);
			$shortcut.children('a:eq(1)').click(fullscreen);
			
			$shortcut.fadeIn(300);
			var timer;
			clearTimeout(timer);
			timer = setTimeout(function(){
				$shortcut.offset({'top': mouse.y + 20, 'left': mouse.x + 20});
				history();
			}, 0);
		}
		
		function fullscreen(){
			$('#hoverzoom, #hz_functions').hide();
			$(document).unbind('keydown');
			$(document).bind('keydown', function(e){
				var code = e.keyCode || e.which;
				if ( code == options['hz_fullscreen'] || code == 27 ) {
					exit();
				} else if ( code == options['hz_dl_key'] ) {
					open(url);
				}
			});
			
			var fs = document.getElementById('hoverzoom_fs'),
				$fs = $('#hoverzoom_fs'),
				xScroll = $(document).scrollTop(),
				picCount = self.parent().parent().children('div[data-content-type^="image"]').length;
			fs.src = img.src;
			fs.onload = function(){screenSize()};
			
			$('#hoverzoom_info, #hz_set_back').fadeIn(300);
			$('#hoverzoom_info .right span:eq(3)').text(locale_fs_4);
			$('#hoverzoom_info .right span:eq(1) a').attr('href', img.src);
			$fs.show();
			
			if (picCount > 1) {
				continous();
				$('#hoverzoom_info .right span:eq(4)').show();
			} else {
				$('#hoverzoom_info .right span:eq(4)').hide();
			}
			
			$('#hoverzoom_fs_01').click(screenSize);
			$('#hoverzoom_fs_02').click(pageWidth);
			$('#hoverzoom_fs_03').click(actualSize);
			$('#hz_set_back, #hoverzoom_fs_exit').click(exit);
			
			$('#hoverzoom_info .right span:eq(2)').hover(function(){
				$(this).children('ul').stop().animate({top: 14, opacity: 1}, 300);
			}, function(){
				$(this).children('ul').stop().animate({top: 0, opacity: 0}, 300);
			});
			
			function screenSize(){
				$fs.css('maxHeight', wHeight - 20).css('maxWidth', wWidth - 20);
				
				var timer;
				clearTimeout(timer);
				timer = setTimeout(function(){
					$fs.offset({'top': xScroll + wHeight / 2 - $fs.height() / 2, 'left': wWidth / 2 - $fs.width() / 2});
					
					detect();
					
					$('#hoverzoom_info .right span:eq(3)').text(nWidth+' x '+nHeight + ' ('+parseInt($fs.width()/nWidth*100)+'%)');
				}, 0);

				$('#hoverzoom_fs_02, #hoverzoom_fs_03').removeClass('current');
				$('#hoverzoom_fs_01').addClass('current');
			}
			
			function pageWidth(){
				$fs.css('maxWidth', wWidth).css('maxHeight', nHeight);
				
				if ( nWidth > wWidth - 20 && nHeight > wHeight - 20 ) {
					( nWidth > nHeight ) ? $fs.offset({'top': xScroll + wHeight / 2 - $fs.height() / 2, 'left': wWidth / 2 - $fs.width() / 2}) : $fs.offset({'top': xScroll, 'left': wWidth / 2 - $fs.width() / 2});
				} else {
					if ( nWidth > wWidth - 20 )
						$fs.offset('left', 0);
					if ( nHeight > wHeight - 20 )
						$fs.offset({'top': xScroll, 'left': wWidth / 2 - $fs.width() / 2});
				}
				
			$('#hoverzoom_info .right span:eq(3)').text(nWidth+' x '+nHeight + ' ('+parseInt($fs.width()/nWidth*100)+'%)');
				
				$('#hoverzoom_fs_01, #hoverzoom_fs_03').removeClass('current');
				$('#hoverzoom_fs_02').addClass('current');
			}
			
			function actualSize(){
				$fs.css('maxHeight', nHeight).css('maxWidth', nWidth);
				
				if ( nWidth > wWidth - 20 && nHeight > wHeight - 20 ) {
					$fs.offset({'top': xScroll, 'left': 0});
				} else {
					if ( nWidth > wWidth - 20 )
						$fs.offset('left', 0);
					if ( nHeight > wHeight - 20 )
						$fs.offset({'top': xScroll, 'left': wWidth / 2 - $fs.width() / 2});
				}
				
				$('#hoverzoom_info .right span:eq(3)').text(nWidth+' x '+nHeight + ' (100%)');
				
				$('#hoverzoom_fs_01, #hoverzoom_fs_02').removeClass('current');
				$('#hoverzoom_fs_03').addClass('current');
			}
			
			function detect(){
				$('#hoverzoom_fs_01').text(locale_fs_6+' ('+parseInt($fs.width()/nWidth*100)+'%)');
				
				(nWidth > wWidth ) ? $('#hoverzoom_fs_02').text(locale_fs_9+' ('+parseInt(wWidth/nWidth*100)+'%)') : $('#hoverzoom_fs_02').text(locale_fs_9+' (100%)');
				
				if ( wWidth > nWidth && wHeight > nHeight )
					$('#hoverzoom_info .right span:eq(2)').hide();
				else
					$('#hoverzoom_info .right span:eq(2)').show();
					
				( $('#hoverzoom_fs_02').text().replace(/\D/g,'') == $('#hoverzoom_fs_03').text().replace(/\D/g, '') ) ? $('#hoverzoom_fs_02').hide() : $('#hoverzoom_fs_02').show();
			}
			
			function continous(){
				var now, links = {};
				
				for (var i=0; i<picCount; i++){
					links[i] = self.parent().parent().children('div[data-content-type^="image"]').eq(i).children('img').attr('src');
					if (links[i] == self.attr('src'))
						now = i;
				}
				
				$('#hoverzoom_info .right span:eq(4)').html('<strong>'+parseInt(now+1)+'</strong> / '+picCount);
				
				$('#hoverzoom_fs').click(next);
				$(document).bind('keyup', function(e){
					var code = e.keyCode || e.which;
					if (code == 39){
						next();
					} else if (code == 37){
						prev();
					}
				});
				
				function next(){
					var next = (now+1)%picCount,
						nextUrl = ( links[next].match(/\?sz|\/proxy/) ) ? links[next].replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : links[next].replace(picasaRegex,'/s0/$2');
					now=next;
					$('#hoverzoom_info .right span:eq(4)').html('<strong>'+parseInt(next+1)+'</strong> / '+picCount);
					
					var nextImg = new Image();
					nextImg.src = nextUrl;
					
					$('#hoverzoom_info .right span:eq(3)').text(locale_fs_4);
					$('#hoverzoom_info .right span:eq(1) a').attr('href', nextImg.src);
					
					nextImg.onload = function(){
						nWidth = nextImg.naturalWidth;
						nHeight = nextImg.naturalHeight;
						fs.src = nextImg.src;
						screenSize();
					}
				}
				
				function prev(){
					var prev = (now == 0) ? picCount-1 : (now-1)%picCount,
						prevUrl = ( links[prev].match(/\?sz|\/proxy/) ) ? links[prev].replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : links[prev].replace(picasaRegex,'/s0/$2');
					now=prev;
					$('#hoverzoom_info .right span:eq(4)').html('<strong>'+parseInt(prev+1)+'</strong> / '+picCount);
					
					var prevImg = new Image();
					prevImg.src = prevUrl;
					
					$('#hoverzoom_info .right span:eq(3)').text(locale_fs_4);
					$('#hoverzoom_info .right span:eq(1) a').attr('href', prevImg.src);
					
					prevImg.onload = function(){
						nWidth = prevImg.naturalWidth;
						nHeight = prevImg.naturalHeight;
						fs.src = prevImg.src;
						screenSize();
					}
				}
			}
			
			function exit(){
				$('#hoverzoom_info, #hoverzoom_fs, #hz_set_back, #hoverzoom_navi_next, #hoverzoom_navi_prev').fadeOut(300);
				$fs.attr('src', '');
				$(document).unbind('keydown, keypress');
				$(document).scrollTop(xScroll);
			}
		}
		
		function hide(){
			clearTimeout(timer2);
			timer2 = setTimeout(function(){
				clearTimeout(timer1, timerSC);
				$zoom.hide().empty();
				self.unbind('mouseleave', hide);
			}, 100);
		}
	}
	
	function enable(){
		if ( options['hz_enable_main'] === 'true' )
			$('div[data-content-type^="image"] img').live('mouseenter', main);
		if ( options['hz_enable_icon'] === 'true' )
			$('.Km img').live('mouseenter', main);
		if ( options['hz_enable_link'] === 'true' )
			$('.ot-anchor').live('mouseenter', main);
	}
	
	function disable(){
		if ( options['hz_enable_main'] === 'true' )
			$('div[data-content-type^="image"] img').die('mouseenter', main);
		if ( options['hz_enable_icon'] === 'true' )
			$('.Km img').die('mouseenter', main);
		if ( options['hz_enable_link'] === 'true' )
			$('.ot-anchor').die('mouseenter', main);
		$('#picbefore').hide();
	}
	
	function directPic(){
		var timer;
		clearInterval(timer);
		timer = setInterval(function(){
			$('.zj .ot-anchor').each(function(){
				uri = $(this).attr('href');
				if ( uri.match(picRegex) && !$(this).children().hasClass('img-in-post')) {
					this.innerHTML = '<img class="img-in-post" src="'+uri+'"/>';
					if ( options['hz_direct_max'] > 0 ) {
						$(this).children().css('maxWidth', options['hz_direct_max']);
					}
					$(this).next().remove();
				}
			});
		}, 2500);
	}
	
	function directYT(){
		var timer;
		clearInterval(timer);
		timer = setInterval(function(){
			$('.zj .ot-anchor').each(function(){
				uri = $(this).attr('href'),
				maxWidth = ( options['hz_direct_ytmaxwidth'] > 0 ) ? options['hz_direct_ytmaxwidth'] : $(this).parent().parent().width();
				switch (options['hz_direct_ytaspect'])
				{
					case 1:
						aspect = 3/4;
						break;
					case 3:
						aspect = 10/16;
						break;
					case 2:
					default:
						aspect = 9/16;
						break;
				}
				if ( uri.match(/youtube.com\/watch\?v=/) && !$(this).hasClass('yt-in-post')) {
					$(this).css({'display': 'block', 'fontWeight': 'bold', 'marginRight': '11px'}).addClass('yt-in-post');
					
					url = uri.replace(/(.*)watch\?v=(.*)/, '$1v/$2').replace(/&(.*)/g, '') + '?version=3&autohide=1&feature=player_embedded';
					
					$(this).after('<div class="closeYT" title="'+locale_yt_1+'">X</div><object style="height: '+maxWidth*aspect+'px; width: '+maxWidth+'px"><param name="movie" value="'+url+'"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="'+url+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="'+maxWidth+'" height="'+maxWidth*aspect+'"></object>');
				}
			});
		}, 2500);
		
		$('.closeYT').live('click', function(){
			$(this).next().remove();
			$(this).prev().removeAttr('style');
			$(this).remove();
		});
	}
	
	function picLink(){
		var timer;
		clearInterval(timer);
		timer = setInterval(function(){
			$('.Jm').each(function(){
				if ( $(this).children().children().hasClass('B-u-ac') && !$(this).hasClass('pic-in-post') ) {
					var count = $(this).children('div:eq(0)').children('div[data-content-type^="image"]').length;
					
					if ( count > 1 ) {
						$(this).parentsUntil('.Ve').find('.dl').append(' - <span class="a-j picStacks" tabindex="0" role="button">'+locale_fs_3+' ('+count+')</span><div class="clickDetail"><div class="triangle_out"><div class="triangle_01"></div><div class="triangle_02"></div></div><div class="closeButton" title="'+locale_set_close+'"></div><strong>'+locale_piclink_1+'</strong><br/></div>');
						
						$(this).find('div[data-content-type^="image"]').each(function(i){
							var url = $(this).children('img').attr('src');
							
							url = ( url.match(/\?sz|\/proxy/) ) ? url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : url.replace(picasaRegex,'/s0/$2');
							
							content = '<a class="a-j" tabindex="0" role="button" href="'+url+'" target="_blank">'+parseInt(i+1)+'</a>';
							
							( i == 0 ) ? $(this).parentsUntil('.Ve').find('.clickDetail').append(content) : $(this).parentsUntil('.Ve').find('.clickDetail').append(' - ' + content);
						});
					} else if ( count == 1 ) {
						$(this).find('div[data-content-type^="image"]').each(function(i){
							var url = $(this).children('img').attr('src');
							
							url = ( url.match(/\?sz|\/proxy/) ) ? url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : url.replace(picasaRegex,'/s0/$2');
							
							$(this).parentsUntil('.Ve').find('.dl').append(' - <a class="a-j picStacks" tabindex="0" role="button" href="'+url+'">'+locale_fs_3+'</a>');
						});
					}

					$(this).addClass('pic-in-post');
				}
			});
		}, 2500);

		$('.picStacks').live('click', function(){
			( $(this).next().is(':hidden') ) ? $(this).next().fadeIn(300).offset({'left': $(this).offset().left + 10, 'top': $(this).offset().top + 25}) : $(this).next().fadeOut(300);
		});
		
		$('.clickDetail .closeButton').live('click', function(){
			$(this).parent().fadeOut(300);
		});
	}
	
	function allPic(){
		var xScroll, pic = {};
		
		$('#hz_allpic_dl').click(function(){
			$('#hz_set_back, #hz_allpic_page').fadeIn(300);
			
			xScroll = $(document).scrollTop();
						
			$('#hz_allpic_page').css({'width': wWidth - 200, 'height': wHeight - 140, 'marginLeft': -(wWidth / 2 - 100), 'marginTop': -(wHeight / 2 - 50)});
			$('#hz_allpic_out').css('height', wHeight - 190);
			
			$('#hz_allpic').css('width', wWidth - 200);
			$('#hz_allpic_out').css('width', wWidth - 180);
			
			$('div[data-content-type^="image"] img, .ot-anchor, .Sl img, .ru img').each(function(i){
				var tag = $(this).prop('tagName'),
					self = $(this);
				
				if ( tag == 'IMG' ) {
					var url = $(this).attr('src');
					
					url = ( url.match(/\?sz|\/proxy/) ) ? $(this).attr('src').replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : $(this).attr('src').replace(picasaRegex,'/s0/$2');
					thumbnail = ( url.match(/googleusercontent/) && url.match(picasaRegex) ) ? url.replace(picasaRegex, '/w'+parseInt((wWidth - 200) / options['hz_his_columns'] - 10)+'/$2') : url;
					
					$('#hz_allpic').append('<a href="'+url+'"><img src="'+thumbnail+'"/></a>');
					
					pic[i] = url;
				} else if ( tag == 'A' ) {
					var url = $(this).attr('href');
					
					if ( url.match(picRegex) ) {
						$('#hz_allpic').append('<a href="'+url+'"><img src="'+url+'"/></a>');
						pic[i] = url;
					}
				}
			});
			
			var timer;
			clearTimeout(timer);
			timer = setTimeout(function(){
				$('#hz_allpic img').width((wWidth - 200) / options['hz_his_columns'] - 10);
				$('#hz_allpic').imagesLoaded(function(){
					( $('#hz_allpic').hasClass('masonry') ) ? $('#hz_allpic').masonry('reload') : $('#hz_allpic').masonry({isFitWidth: true, itemSelector: 'a'});
				});
			}, 0);
			
			var counts = $('#hz_allpic').children().length;
			( counts > 1 ) ? $('#hz_allpic_page small').html('<strong>'+counts+'</strong>'+locale_his_count_2) : $('#hz_allpic_page small').html('<strong>'+counts+'</strong>'+locale_his_count_1);
		});
		
		$('#hz_allpic_list').click(function(){
			copyArea( $('#hz_allpic') );
		});
		
		$('#hz_set_back, #hz_allpic_close').click(function(){
			$('#hz_set_back, #hz_allpic_page, #hz_copyarea').fadeOut(300);
			$('#hz_allpic, #hz_copyarea textarea').empty();
			$(document).scrollTop(xScroll);
		});
	}
	
	function history(){
		var xScroll;
		
		$('#hz_history_open').click(function(){
			xScroll = $(document).scrollTop();
			
			$('#hz_set_back, #hz_history_page').fadeIn(300);
			
			var counts = $('#hz_history').children().length;
			( counts > 1 ) ? $('#hz_history_page small').html('<strong>'+counts+'</strong> / '+options['hz_his_max'] +locale_his_count_2) : $('#hz_history_page small').html('<strong>'+counts+'</strong> / '+options['hz_his_max'] +locale_his_count_1);
			
			$('#hz_history_page').css({'width': wWidth - 200, 'height': wHeight - 140, 'marginLeft': -(wWidth / 2 - 100), 'marginTop': -(wHeight / 2 - 50)});
			$('#hz_history_out').css('height', wHeight - 190);
			
			$('#hz_history').css('width', wWidth - 200);
			$('#hz_history_out').css('width', wWidth - 180);
			
			$('#hz_history img').width((wWidth - 200) / options['hz_his_columns'] - 10);
			$('#hz_history').imagesLoaded(function(){
				( $('#hz_history').hasClass('masonry') ) ? $('#hz_history').masonry('reload') : $('#hz_history').masonry({isFitWidth: true, itemSelector: 'a'});
			});
		});
		
		$('#hz_history_list').click(function(){
			copyArea( $('#hz_history') );
		});
		
		$('#hz_his_close, #hz_set_back').click(function(){
			$('#hz_set_back, #hz_history_page, #hz_copyarea').fadeOut(300);
			$('#hz_copyarea textarea').empty();
			$(document).scrollTop(xScroll);
		});
		
		$('#hz_his_clear').click(function(){
			$('#hz_history').empty();
			$('#hz_history_page small').html('<strong>0</strong> / '+options['hz_his_max'] + locale_his_count_1);
			localStorage['hz_histories'] = '';
		});
	}
	
	function settingPage(){
		var xScroll;
		
		$('#hz_set_open').click(function(){
			xScroll = $(document).scrollTop();
			
			$('#hz_set_back, #hz_set_page').fadeIn(300);
			
			$('.hz_settings').find(':text').each(function(){
				$(this).val(options[$(this).attr('id')]);
			});
			
			$('.hz_settings').find('select').each(function(){
				$(this).children('option[value="'+options[$(this).attr('id')]+'"]').prop('selected', true);
			});
			
			$('.hz_settings').find(':checkbox').each(function(){
				if ( options[$(this).attr('id')] === 'true' )
					$(this).prop('checked', true);
			});
		});
		
		$('#hz_set_close, #hz_set_back').click(function(){
			$('#hz_set_back, #hz_set_page').fadeOut(300);
			$(document).scrollTop(xScroll);
		});
	}
	
	function albumDL(){
		var timer,
			xScroll;
		clearInterval(timer);
		timer = setInterval(function(){
			var url = location.href.replace(/\?(.*)/, '');
			if ( url.match(/\/photos\/\w+\/albums\/\w+/) ) {
				$main = ( $('#contentPane').children().length > 1 ) ? $('#contentPane').children(':eq(1)').children(':eq(0)').children(':eq(0)').children(':eq(0)').children(':eq(0)') : $('#contentPane').children(':eq(0)').children(':eq(0)').children(':eq(0)').children(':eq(0)').children(':eq(0)');
				
				$main.each(function(){
					if ( !$(this).hasClass('album-in-post') || $('.albumDownload').attr('title') == ' ()') {
						$('.albumDownload').remove();
						$title = ( $main.children().length > 2 ) ? $main.children(':eq(0)').children(':eq(0)').children(':eq(0)') : $main.children(':eq(0)');
						$count = $main.parent().parent().children(':eq(1)').children(':eq(0)').children(':eq(0)').children(':eq(1)').children(':eq(0)');
						
						var title = $title.text() + ' (' + $count.text() + ')',
							content = '<div tabindex="0" class="albumDownload in-albumDownload button_style blueButton" id="'+url+'" role="button" title="'+title+'">'+locale_al_1+'</div>';
							
						( $(this).children().length > 2 ) ? $(this).children().eq(1).after(content) : $(this).children().eq(0).after(content);
						$(this).addClass('album-in-post');
					}
				});
			} else {
				$('.B-u-Y-j').each(function(){
					var url = $(this).attr('href'),
						title = $(this).text();
					if ( url.match(/albums/) && !$(this).hasClass('album-in-post') ) {
						$(this).parentsUntil('.Ve').find('.dl').append(' - <span class="a-j albumDownload" tabindex="0" id="'+url+'" role="button" title="'+title+'">'+locale_fs_3+'</span>');
						$(this).addClass('album-in-post');
					}
				});
			}
		}, 2500);
		
		$('.albumDownload').live('click', function(){
			var album = $(this).attr('title'),
				userid = $(this).attr('id').replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$2'),
				albumid = $(this).attr('id').replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$3'),
				url = 'https://picasaweb.google.com/data/feed/api/user/'+userid+'/albumid/'+albumid+'?fields=entry(media:group(media:content,media:title))&alt=json&callback=?',
				aUrl = 'https://picasaweb.google.com/data/feed/api/user/'+userid+'?alt=json&callback=?';
			
			xScroll = $(document).scrollTop();
			
			$('#hz_albums_page, #hz_set_back').fadeIn(300);
			$('#hz_albums_page').css({'width': wWidth - 200, 'height': wHeight - 140, 'marginLeft': -(wWidth / 2 - 100), 'marginTop': -(wHeight / 2 - 50)});
			$('#hz_albums_out').css('height', wHeight - 190);
			
			$('#hz_albums').css('width', wWidth - 200).css('height', wHeight - 200);
			$('#hz_albums_out').css('width', wWidth - 180);
			
			$('#hz_albums_picasa').attr('href', 'picasa://downloadfeed/?url=https://picasaweb.google.com/data/feed/back_compat/user/'+userid+'/albumid/'+albumid);
					
			$.getJSON(aUrl, function(json){
				var albumLink;
				$(json.feed.entry).each(function(i, item){
					var url = item.link[0].href;
						
					if ( url.match(albumid) ) {
						albumLink = item.link[1].href;
					}
				});
				$('#hz_albums_page small').html('<a href="'+albumLink+'" target="_blank"><strong>'+album+'</strong></a>');
			});
			
			$.ajax({
				url: url,
				dataType: 'json',
				type: 'GET',
				beforeSend: function(){
					$('#hz_albums_page small').html('<strong>'+locale_fs_4+'</strong>');
				},
				success: function(json){
					$(json.feed.entry).each(function(i, data){
						a=data.media$group;
						var title=a.media$title.$t,
							url=a.media$content[0].url,
							original = url.replace(/(.*)\//, '$1/s0/'),
							thumbnail = url.replace(/(.*)\//, '$1/w'+parseInt((wWidth - 200) / options['hz_his_columns'] - 10)+'/');
							
						$('#hz_albums').append('<a href="'+original+'" title="'+title+'"><img src="'+thumbnail+'"/></a>');
					});
					
					var timer;
					clearTimeout(timer);
					timer = setTimeout(function(){
						$('#hz_albums img').width((wWidth - 200) / options['hz_his_columns'] - 10);
						
						$('#hz_albums').imagesLoaded(function(){
							( $('#hz_albums').hasClass('masonry') ) ? $('#hz_albums').masonry('reload') : $('#hz_albums').masonry({isFitWidth: true, itemSelector: 'a'});
						});
					}, 0);
					
				}
			});
			return false;
		});
		
		$('#hz_albums_list').click(function(){
			copyArea( $('#hz_albums') );
		});
		
		$('#hz_albums_close, #hz_set_back').click(function(){
			$('#hz_albums_page, #hz_set_back, #hz_copyarea').fadeOut(300);
			$('#hz_albums, #hz_copyarea textarea').empty();
			$(document).scrollTop(xScroll);
		});
	}
	
	function copyArea(obj){
		if ( $('#hz_copyarea textarea').html() == '' ) {
			var count = obj.children('a').length;
			
			for ( var i=0; i<count; i++ ) {
				var pic = obj.children('a').eq(i).attr('href');
				
				if ( pic.substring(0,2) == '//' )
					pic = 'https:' + pic;
				
				if ( i == count - 1 ) {
					$('#hz_copyarea textarea').append(pic);
				} else {
					$('#hz_copyarea textarea').append(pic+'\n');
				}
			}
			
			$('#hz_copyarea').fadeIn(300);
		}
	}
	
	function autoUpdate(manual){
		$.getScript('https://sites.google.com/site/hoverzoomplus/sources/version.js', function(){
			var nowVer = version.split('.'),
				newVer = hz_newVersion.version.split('.'),
				newContent = hz_newVersion.content[options['hz_language']] || hz_newVersion.content['en'],
				subVer = ( nowVer.length > newVer.length ) ? nowVer.length : newVer.length;
			
			for ( var i=0; i<subVer; i++ ) {	
				if (typeof nowVer[i] == 'undefined')
					nowVer[i] = 0;
				
				if (newVer[i] > nowVer[i]) {
					main(hz_newVersion.version, newContent, false);
					break;
				} else if (nowVer[i] > newVer[i]) {
					break;
				}
			}
			
			if ( manual == true ) {
				main(hz_newVersion.version, newContent, true);
			}
		});
		
		function main(newVer, content, latest){
			$content.append('<div id="hz_update" class="hz_settings"><h3>'+locale_update_1+'</h3><small></small><div title="'+locale_set_close+'" class="closeButton" id="hz_update_close"></div>'+content+'<a id="hz_update_install" class="button_style greenButton" href="http://userscripts.org/scripts/source/106681.user.js" title="'+locale_update_1+'">'+locale_update_1+'</a><div id="hz_update_cancel" class="button_style whiteButton" title="'+locale_update_4+'">'+locale_update_4+'</div></div>');
			
			if ( latest == true ) {
				$('#hz_update_install').remove();
				$('#hz_update small').html('<strong>'+version+'</strong> '+locale_update_6);
			} else {
				$('#hz_update small').html(locale_update_2+'<strong>'+newVer+'</strong> / '+locale_update_3+'<strong>'+version+'</strong>');
			}
			
			if ( manual == true ) {
				$('#hz_set_page').fadeOut(300);
			}
			
			$('#hz_update, #hz_set_back').fadeIn(300);
		}
		
		$('#hz_update_close, #hz_set_back, #hz_update_cancel').live('click',function(){
			$('#hz_set_back').fadeOut(300);
			$('div#hz_update').fadeOut(300).remove();
		});
	}
	
	function maxPic(){
		var timer;
		clearInterval(timer);
		timer = setInterval(function(){
			$('div[data-content-type^="image"] img').each(function(){
				var width = $(this).parent().parent().width();
				if (!$(this).parent().hasClass('maxPic')){
					var url = $(this).attr('src');
					
					$(this).attr('original', url).attr('src', ( url.match(/\?sz|\/proxy/) ) ? url.replace(/resize_\D?=\d+/, 'resize_w='+width) : url.replace(picasaRegex,'/w'+width+'/$2'));
					
					$(this).parent().css({'maxHeight': 'none', 'maxWidth': width, 'width': 'auto'});
					$(this).css('maxWidth', width);
					
					if (!$(this).parent().parent().hasClass('maxPicAdded')){
						$(this).parentsUntil('.Ve').find('.dl').append('<span class="a-j maxPicRemove" title="'+locale_maxPic_1+'"> - '+locale_maxPic_1+'</span>');
						$(this).parent().parent().addClass('maxPicAdded');
					}
				}
				$(this).parent().addClass('maxPic');
			});
		}, 2500);
		
		$('.maxPicRemove').live('click', function(){
			$(this).parent().parent().find('.maxPic').each(function(){
				$(this).attr('style', '');
				$(this).children('img').attr('src', $(this).children('img').attr('original'));
			});
			$(this).remove();
		});
	}
}

// CSS
GM_addStyle('#hoverzoom{position:fixed;padding:5px;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10002;height:auto;width:auto;top:15px;display:none;min-width:40px;min-height:40px;background:rgba(255,255,255,0.8) no-repeat center center url(https://lh4.googleusercontent.com/-ojhuYU3X2hk/Tmo0HHoNodI/AAAAAAAACFc/0z2zQ4P7MNM/s0/ajax-loader.gif)}#hoverzoom small{display:block;text-align:center;line-height:1;margin:3px 0 2px}#hoverzoom img{display:none}#picbefore{position:fixed;width:45px;height:45px;box-shadow:0 0 5px #666;right:0;top:40%;display:none;background:#2d2d2d no-repeat url(https://sites.google.com/site/hoverzoomplus/sources/download.png);background-position:7px 7px;transition:.2s;-moz-transition:.2s;-webkit-transition:.2s;-o-transition:.2s;border-radius:10px 0 0 10px;outline:none}#picbefore:hover{width:50px}#hz_set_back{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.75);z-index:10000;box-shadow:0 0 150px #999 inset;display:none}.hz_settings{position:fixed;width:550px;height:auto;top:50%;left:50%;margin-left:-285px;margin-top:-250px;background:#fff;border:1px solid #acacac;border-bottom:1px solid #999;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10001;padding:10px;display:none;border-radius:2px;padding:20px;overflow:hidden}.hz_settings h3{font-size:20px;font-weight:normal;margin:0}.hz_settings small{color:#666}.hz_settings p{margin-top:10px}.hz_settings input[type="text"]{border:1px solid #d9d9d9;padding:2px 5px;margin-right:5px;width:50px}.hz_settings input[type="checkbox"]{margin:0 5px 0 0}.hz_settings label{line-height:2;margin-right:5px;display:inline-block;min-width:120px}.hz_settings input+label,.hz_settings select+label{min-width:0}.hz_settings textarea{border:1px solid #ccc;font-family:Consolas,Monaco,"Courier New",Courier,monospace!important;font-size:12px;height:310px;width:540px;padding:10px 0 0 10px;margin-top:10px}.hz_settings .hz_menu{background:#f5f5f5;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb;list-style:none;margin:15px -20px;padding:0 5px 0 10px}.hz_settings .hz_menu li{padding:7px 12px;color:#666;display:inline-block;cursor:pointer}.hz_settings .hz_menu li.current{font-weight:bold;color:#dd4839}.hz_settings .hz_menu li:hover{color:#dd4839}.hz_settings .update{line-height:2;margin:0 -20px;padding:15px 20px 0 35px}.hz_set_tab{border-top:1px solid #ddd;margin:-15px -20px 15px;padding:15px 20px 0;overflow:hidden}#hz_set_save,#hz_set_clear,#hz_update_install,#hz_update_cancel{float:right;margin:0 0 0 16px}#hz_history,#hz_albums,#hz_allpic{display:block}#hz_history a,#hz_albums a,#hz_allpic a{outline:none}#hz_history_out,#hz_albums_out,#hz_allpic_out{display:inline-block;overflow-x:hidden;overflow-y:auto;margin:10px 0}#hz_history img,#hz_albums img,#hz_allpic img{margin-right:10px;margin-top:5px}.hz_set_function{position:absolute!important;right:15px;top:25px}#hoverzoom_fs{position:absolute;z-index:10001;display:none;box-shadow:0 4px 16px rgba(0,0,0,0.2)}#hoverzoom_info{position:fixed;top:0;left:0;width:100%;height:auto;display:none;z-index:10002}#hoverzoom_info span{background:rgba(0,0,0,0.75);color:#fff;padding:5px 10px;float:right;margin-left:2px;cursor:pointer;position:relative}#hoverzoom_info .right{position:absolute;top:0;right:0}#hoverzoom_info a{color:#fff;outline:none}#hoverzoom_info ul{display:block;right:0;top:0;list-style:none;position:absolute;padding:0;white-space:nowrap;opacity:0}#hoverzoom_info li{margin-bottom:2px;background:rgba(0,0,0,0.75);padding:5px 10px 5px 10px}#hoverzoom_info li:hover{background:#000}#hoverzoom_info li.current{font-weight:bold}#hz_functions{position:fixed;z-index:10005;display:none;box-shadow:0 4px 16px rgba(0,0,0,0.2)}#hz_functions a{outline:none}#hz_functions a:first-child{border-right:1px solid #eee;padding-right:5px}#hz_functions a:last-child{border-left:1px solid #eee;padding-left:5px}.albumDownload{background:url(https://sites.google.com/site/hoverzoomplus/sources/picasa.png) no-repeat;padding-left:20px;margin-left:5px}.in-albumDownload{margin:25px 18px 25px 0;background:none}.picDownload{background:#bbb;border-radius:10px;color:#fff!important;display:inline-block;font-size:12px;line-height:1em;height:1em;width:1em;margin:0 2px;padding:5px;text-align:center}.picStacks{background:url(https://sites.google.com/site/hoverzoomplus/sources/pictures.png) no-repeat;padding-left:20px;margin-left:5px}.button_style{display:inline-block;position:relative;border-radius:2px;cursor:pointer;font-size:11px;font-weight:bold;height:27px;line-height:27px;margin-right:16px;min-width:54px;outline:none;padding:0 8px;text-align:center;float:left;text-decoration:none!important}.greenButton{background-color:#3d9400;border:1px solid #29691d;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);background-image:-webkit-gradient(linear,left top,left bottom,from(#3d9400),to(#398a00));background-image:-webkit-linear-gradient(top,#3d9400,#398a00);background-image:-moz-linear-gradient(top,#3d9400,#398a00);background-image:-ms-linear-gradient(top,#3d9400,#398a00);background-image:-o-linear-gradient(top,#3d9400,#398a00);background-image:linear-gradient(top,#3d9400,#398a00)}.greenButton:hover{background-color:#368200;border:1px solid #2d6200;text-shadow:0 1px rgba(0,0,0,0.3);background-image:-webkit-gradient(linear,left top,left bottom,from(#3d9400),to(#368200));background-image:-webkit-linear-gradient(top,#3d9400,#368200);background-image:-moz-linear-gradient(top,#3d9400,#368200);background-image:-ms-linear-gradient(top,#3d9400,#368200);background-image:-o-linear-gradient(top,#3d9400,#368200);background-image:linear-gradient(top,#3d9400,#368200)}.greenButton:focus,.greenButton:active{box-shadow:0 0 0 1px #fff inset;outline:none}.blueButton{background-color:#4d90fe;border:1px solid #3079ed;color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(top,#4d90fe,#4787ed)}.blueButton:hover{background-color:#357ae8;border:1px solid #2f5bb7;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(top,#4d90fe,#357ae8)}.blueButton:focus,.blueButton:active{box-shadow:0 0 0 1px #fff inset;outline:none}.whiteButton{background-color:#f5f5f5;border:1px solid rgba(0,0,0,0.1);color:#444;background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(top,#f5f5f5,#f1f1f1)}.whiteButton:hover{background-color:#f8f8f8;border:1px solid #c6c6c6;color:#333;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(top,#f8f8f8,#f1f1f1)}.whiteButton:focus,.whiteButton:active{box-shadow:0 1px 2px rgba(0,0,0,0.1) inset}.orangeButton{background-color:#d14836;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);border:1px solid transparent;background-image:-webkit-gradient(linear,left top,left bottom,from(#dd4b39),to(#d14836));background-image:-webkit-linear-gradient(top,#dd4b39,#d14836);background-image:-moz-linear-gradient(top,#dd4b39,#d14836);background-image:-ms-linear-gradient(top,#dd4b39,#d14836);background-image:-o-linear-gradient(top,#dd4b39,#d14836);background-image:linear-gradient(top,#dd4b39,#d14836)}.orangeButton:hover{background-color:#c53727;border:1px solid #b0281a;box-shadow:0 1px 1px rgba(0,0,0,0.2);background-image:-webkit-gradient(linear,left top,left bottom,from(#dd4b39),to(#c53727));background-image:-webkit-linear-gradient(top,#dd4b39,#c53727);background-image:-moz-linear-gradient(top,#dd4b39,#c53727);background-image:-ms-linear-gradient(top,#dd4b39,#c53727);background-image:-o-linear-gradient(top,#dd4b39,#c53727);background-image:linear-gradient(top,#dd4b39,#c53727)}.orangeButton:focus,.orangeButton:active{box-shadow:0 0 0 1px #fff inset;outline:none}.closeButton{background:url(https://ssl.gstatic.com/s2/tt/images/sharebox/sprite2.png) no-repeat 0 -162px;cursor:pointer;height:9px;width:9px;margin:1px;position:absolute;right:11px;top:11px}.detailButton{display:inline-block;border-color:#eee transparent transparent;border-style:solid;border-width:5px;height:0;margin:0 0 -4px 5px;top:3px;width:0}.img-in-post{max-width:100%;height:auto;margin:3px 0;display:block}.yt-in-post{margin:3px 0}.maxPic{margin-bottom:10px}.closeYT{cursor:pointer;float:right;margin-top:-22px;font-weight:bold}.clickDetail{position:absolute;top:25px;left:0;background:#fff;border:1px solid #ccc;border-radius:2px;box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:16px 32px 16px 16px;position:absolute;z-index:1201;display:none;min-width:150px}.clickDetail strong{color:#000!important}.triangle_out{position:absolute;left:30px;top:-9px}.triangle_01{position:absolute;left:-9px;border:9px solid;border-color:#ccc transparent;border-top-width:0;height:0;width:0}.triangle_02{position:absolute;top:1px;left:-8px;border:8px solid;border-color:#fff transparent;border-top-width:0;height:0;width:0}');

function hz_init(callback){
	var script = document.createElement('script');
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';
	script.addEventListener('load', function(){
		var script = document.createElement('script');
		script.textContent = '(' + callback.toString() + ')();';
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
}

hz_init(hoverzoom);