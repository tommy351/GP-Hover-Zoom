// ==UserScript==
// @id             google_hover_zoom
// @name           Google+ Hover Zoom
// @description    Enlarge thumbnails & profile icons on mouse hover. Display pictures in comments directly. Download albums quickly.
// @author         SkyArrow
// @website        http://userscripts.org/scripts/show/106681
// @namespace      http://zespia.twbbs.org
// @version        1.3.0
// @include        https://plus.google.com/*
// @exclude        https://plus.google.com/ripples/*
// ==/UserScript==

var hoverzoom = function(){
	var	version = '1.3.0',
		picRegex = /\.(jpg|jpeg|gif|bmp|png|tiff)/i,
		picasaRegex = /\/\w\d+(-\w\d*)*\/([^\/]+)$/,
		mouse = [];
	
	// Options
	var	options = {
		hz_delay: parseInt(localStorage.hz_delay) || 500,
		hz_opacity: parseInt(localStorage.hz_opacity) || 100,
		hz_maxwidth: parseInt(localStorage.hz_maxwidth) || 0,
		hz_download: localStorage.hz_download || 'false',
		hz_his: localStorage.hz_his || 'false',
		hz_his_max: parseInt(localStorage.hz_his_max) || 100,
		hz_trigger: parseInt(localStorage.hz_trigger) || 0,
		hz_direct: localStorage.hz_direct || 'true',
		hz_direct_max: parseInt(localStorage.hz_direct_max) || 0,
		hz_resolution: localStorage.hz_resolution || 'false',
		hz_fullscreen: parseInt(localStorage.hz_fullscreen) || 0,
		hz_dl_key: parseInt(localStorage.hz_dl_key) || 0,
		hz_drift: localStorage.hz_drift || 'true',
		hz_shortcut: localStorage.hz_shortcut || 'false',
		hz_album: localStorage.hz_album || 'true',
		hz_direct_yt: localStorage.hz_direct_yt || 'false',
		hz_direct_ytaspect: parseInt(localStorage.hz_direct_ytaspect) || 2,
		hz_direct_ytmaxwidth: parseInt(localStorage.hz_direct_ytmaxwidth) || 0,
		hz_language: localStorage.hz_language || navigator.language,
		hz_his_columns: parseInt(localStorage.hz_his_columns) || 5,
		hz_enable_main: localStorage.hz_enable_main || 'true',
		hz_enable_icon: localStorage.hz_enable_icon || 'true',
		hz_enable_link: localStorage.hz_enable_link || 'true',
		hz_allpics: localStorage.hz_allpic || 'false',
		hz_update: localStorage.hz_update || 'true',
		hz_dl_link: localStorage.hz_dl_link || 'true',
		hz_maxpic: localStorage.hz_maxpic || 'false',
		hz_maxpic_option: localStorage.hz_maxpic_option || '0',
		hz_hovering: localStorage.hz_hovering || 'false',
		hz_maxyt: localStorage.hz_maxyt || 'false',
		hz_maxyt_aspect: parseInt(localStorage.hz_maxyt_aspect) || 2
	};

	// Localization
	var locale = {
		'en-US': {
			menu01: 'Disable Hover Zoom',
			menu02: 'Enable Hover Zoom',
			fs01: 'Press full screen mode trigger or click here to exit fullscreen mode.',
			fs03: 'Download',
			fs04: 'Loading…',
			fs06: 'Page Width',
			fs07: 'Actual Size (100%)',
			fs08: 'Fullscreen',
			fs09: 'Window Size',
			fs10: 'Prev (&larr; / Right-click)',
			fs11: 'Next (&rarr; / Left-click)',
			al01: 'Download Album',
			al02: 'Browse',
			al03: 'Open with Picasa',
			al04: 'If you can\'t download this album directly, please open it with Picasa. (Require Picasa)',
			al05: 'Copy Links',
			al06: 'Open in New Tab',
			al07: 'This album is private and can\'t be fetched. Please use "Open with Picasa" button to download this album.',
			yt01: 'Remove',
			allpic01: 'Download All Photos',
			piclink01: 'Download Photos:',
			maxpic01: 'Zoom',
			update01: 'Update',
			update02: 'New: ',
			update03: 'Current: ',
			update04: 'Cancel',
			update05: 'Check Update',
			update06: 'is the latest version!',
			set01: 'Hover Zoom Settings',
			set02: 'Save & Reload page',
			set03: 'Reset',
			set04: 'Are you sure to reset all options?',
			set05: 'Hover Zoom History',
			set06: 'History',
			set07: ' photo',
			set08: ' photos',
			set09: 'Clear',
			set10: 'Close',
			set11: 'General',
			set12: 'Shortcuts',
			set13: 'Other',
			set14: 'Delay:',
			set15: 'ms',
			set16: 'Opacity:',
			set17: 'Max Width:',
			set18: 'px (0: Unlimited)',
			set19: 'Enable Download Button',
			set20: 'Enable History, Max Records:',
			set21: ', Columns:',
			set22: '(0: Unlimited)',
			set23: 'Trigger:',
			set24: 'None',
			set25: 'Show photos links in comments directly, max width:',
			set26: 'Show Resolution',
			set27: 'Full Screen Mode:',
			set28: 'Download Shortcut:',
			set30: 'Not to move pictures with cursor',
			set31: 'Show Shortcuts',
			set32: 'Enable Album Download (Only for public albums)',
			set33: 'Show Youtube links in comments directly, video aspect:',
			set34: ', max width:',
			set35: 'Language:',
			set36: 'Enable:',
			set37: 'Contents',
			set38: 'Profile Icon',
			set39: 'Links',
			set40: 'Enable "Download All Photos in This Page"',
			set41: 'Enable Auto Update',
			set42: 'Display download links below pictures',
			set43: 'Display photos as stream width',
			set44: 'Apply to all photos',
			set45: 'Only apply to the first photo in album',
			set46: 'Not hide photo when hovered',
			set47: 'Display Youtube video as stream width, video aspect:'
		},
		'zh-TW': {
			menu01: '停用 Hover Zoom',
			menu02: '啟用 Hover Zoom',
			fs01: '輕按全螢幕觸發鍵，或點擊此處離開全螢幕模式。',
			fs03: '下載',
			fs04: '載入中…',
			fs06: '頁面寬度',
			fs07: '實際大小 (100%)',
			fs08: '全螢幕',
			fs09: '視窗大小',
			fs10: '上一張 (&larr; / 右鍵)',
			fs11: '下一張 (&rarr; / 左鍵)',
			al01: '下載相簿',
			al02: '瀏覽',
			al03: '以 Picasa 開啟',
			al04: '若您無法直接下載本相簿，請使用 Picasa 開啟。(需安裝 Picasa)',
			al05: '複製網址',
			al06: '開啟於新分頁',
			al07: '此相簿為私密相簿，無法取得相簿內容，請使用右上角的「以 Picasa 開啟」按鈕下載此相簿。',
			yt01: '移除',
			allpic01: '下載本頁所有圖片',
			piclink01: '圖片下載：',
			maxpic01: '縮小',
			update01: '更新',
			update02: '更新版本：',
			update03: '目前版本：',
			update04: '取消',
			update05: '檢查更新',
			update06: '已是最新版本！',
			set01: 'Hover Zoom 設定',
			set02: '儲存並重載頁面',
			set03: '重設',
			set04: '您確定要重設所有設定值嗎？',
			set05: 'Hover Zoom 記錄',
			set06: '記錄',
			set07: ' 張相片',
			set08: ' 張相片',
			set09: '清除',
			set10: '關閉',
			set11: '一般',
			set12: '快捷鍵',
			set13: '其它',
			set14: '延遲：',
			set15: '毫秒 (ms)',
			set16: '透明度：',
			set17: '最大寬度：',
			set18: 'px (0: 無限制)',
			set19: '啟用下載按鈕',
			set20: '啟用記錄，最大記錄數：',
			set21: '，直欄數：',
			set22: '(0: 無限制)',
			set23: '觸發鍵：',
			set24: '無',
			set25: '直接顯示留言內的圖片連結，最大寬度：',
			set26: '顯示圖片解析度',
			set27: '全螢幕模式：',
			set28: '下載快捷鍵：',
			set30: '圖片不隨滑鼠飄移',
			set31: '顯示快捷鍵',
			set32: '啟用相簿下載 (僅限公開相簿)',
			set33: '直接顯示留言內的 Youtube 連結，影片長寬比例：',
			set34: '，最大寬度：',
			set35: '語言：',
			set36: '啟用：',
			set37: '內文',
			set38: '個人資料相片',
			set39: '連結',
			set40: '啟用「下載本頁所有圖片」',
			set41: '啟用自動更新',
			set42: '在圖片下方顯示下載連結',
			set43: '以訊息串寬度顯示圖片',
			set44: '套用至所有圖片',
			set45: '僅套用至相簿第一張圖片',
			set46: '滑鼠移入大圖時不隱藏',
			set47: '以訊息串寬度顯示 Youtube 影片，影片長寬比例：'
		},
		'zh-CN': {
			menu01: '停用 Hover Zoom',
			menu02: '启用 Hover Zoom',
			fs01: '轻按全屏触发键，或点击此处离开全屏模式。',
			fs03: '下载',
			fs04: '加载中…',
			fs06: '页面宽度',
			fs07: '实际大小 (100%)',
			fs08: '全屏',
			fs09: '窗口大小',
			fs10: '上一张 (&larr; / 右键)',
			fs11: '下一张 (&rarr; / 左键)',
			al01: '下载相簿',
			al02: '浏览',
			al03: '以 Picasa 开启',
			al04: '若您无法直接下载本相簿，请使用 Picasa 开启。(需安装 Picasa)',
			al05: '复制网址',
			al06: '开启于新分页',
			al07: '此相簿为私密相簿，无法取得相簿内容，请使用右上角的「以 Picasa 开启」按钮下载此相簿。',
			yt01: '移除',
			allpic01: '下载本页所有图片',
			piclink01: '图片下载：',
			maxpic01: '缩小',
			update01: '更新',
			update02: '更新版本：',
			update03: '当前版本：',
			update04: '取消',
			update05: '检查更新',
			update06: '已是最新版本！',
			set01: 'Hover Zoom 设置',
			set02: '保存并重载页面',
			set03: '重设',
			set04: '您确定要重设所有设定值吗？',
			set05: 'Hover Zoom 记录',
			set06: '记录',
			set07: ' 张相片',
			set08: ' 张相片',
			set09: '清除',
			set10: '关闭',
			set11: '通用',
			set12: '热键',
			set13: '其它',
			set14: '延迟：',
			set15: '毫秒 (ms)',
			set16: '透明度：',
			set17: '最大宽度：',
			set18: 'px (0: 无限制)',
			set19: '启用下载按钮',
			set20: '启用记录，最大记录数：',
			set21: '，直栏数：',
			set22: '(0: 无限制)',
			set23: '触发键：',
			set24: '无',
			set25: '直接显示评论内的图片连结，最大宽度：',
			set26: '显示图片分辨率',
			set27: '全屏模式：',
			set28: '下载热键：',
			set30: '图片不随鼠标飘移',
			set31: '显示热键',
			set32: '启用相簿下载 (仅限公开相簿)',
			set33: '直接显示留言内的 Youtube 连结，视频长宽比例：',
			set34: '，最大宽度：',
			set35: '语言：',
			set36: '启用：',
			set37: '內文',
			set38: '个人资料相片',
			set39: '链结',
			set40: '启用「下载本页所有图片」',
			set41: '启用自动更新',
			set42: '在图片下方显示下载链结',
			set43: '以讯息流宽度显示图片',
			set44: '套用至所有图片',
			set45: '仅套用至相簿第一张图片',
			set46: '鼠标移入大图时不隐藏',
			set47: '以讯息流宽度显示 Youtube 视频，视频长宽比例：'
		},
		'ja-JP': {
			menu01: 'Hover Zoom を無効にする',
			menu02: 'Hover Zoom を有効にする',
			fs01: 'フルスクリーントリガーを押してください、まだはこちらをクリックしてフルスクリーンモードを終了します。',
			fs03: 'ダウンロード',
			fs04: '読み込み中…',
			fs06: 'ページ幅',
			fs07: 'オリジナルサイズ (100%)',
			fs08: 'フルスクリーン',
			fs09: 'ウィンドウサイズ',
			fs10: '前の画像 (&larr; / 右クリック)',
			fs11: '次の画像 (&rarr; / 左クリック)',
			al01: 'アルバムダウンロード',
			al02: '閲覧する',
			al03: 'Picasa で閲覧',
			al04: 'このアルバムをダウンロードできない場合、Picasa でアクセスして下さい。(Picasa インストール必要)',
			al05: 'リンクをコビー',
			al06: '新しいタブで開け',
			al07: 'プライベートアルバムの為、アルバムをアクセスできない。右上辺りの「Picasa で閲覧」ボタンを押して、アルバムをダウンロードして下さい。',
			yt01: '削除',
			allpic01: '画像を全てダウンロード',
			piclink01: '画像をダウンロード：',
			maxpic01: 'ズーム',
			update01: 'アップデート',
			update02: '新しいバージョン：',
			update03: '現行バージョン：',
			update04: 'キャンセル',
			update05: 'アップデートチェック',
			update06: 'もう更新済！',
			set01: 'Hover Zoom 設定',
			set02: '設定保存とページ再読込',
			set03: 'リセット',
			set04: '全ての設定をリセットしますが？',
			set05: 'Hover Zoom 閲覧記録',
			set06: '閲覧記録',
			set07: ' 枚写真',
			set08: ' 枚写真',
			set09: 'クリア',
			set10: '閉じる',
			set11: '一般',
			set12: 'ショートカット',
			set13: 'その他',
			set14: '遅れ：',
			set15: 'ミリセカンド (ms)',
			set16: '不透明度：',
			set17: '最大幅：',
			set18: 'px (0：限制無し)',
			set19: 'ダウンロードボタンを有効にする',
			set20: '閲覧記録を有効にする、最大記録数：',
			set21: '、段数：',
			set22: '(0: 限制無し)',
			set23: 'トリガー：',
			set24: '無',
			set25: 'コメント欄内の画像リンクを表示、最大幅：',
			set26: '画像解像度を表示',
			set27: 'フルスクリーンモード：',
			set28: 'ダウンロードショートカット：',
			set30: '画像とカーソルを連動しない',
			set31: 'ショートカットを表示',
			set32: 'アルバムダウンロードを有効にする (公開アルバム限定)',
			set33: 'コメント欄内の Youtube リンクを表示、長さと幅の比：',
			set34: '，最大幅：',
			set35: '言語：',
			set36: '有効にする：',
			set37: 'コンテンツ',
			set38: 'プロフィールアイコン',
			set39: 'リンク',
			set40: '「当ページの画像を全てダウンロード」を有効にする',
			set41: '自動的にアップデートチェック',
			set42: '画像の下にダウンロードリンクを表示',
			set43: 'ストリーム幅で画像表示',
			set44: '全ての画像に適用する',
			set45: 'アルバムの一つ目の画像に適用する',
			set46: '画像にカーソルを重ねた時に画像を隠さない',
			set47: 'ストリームの幅で Youtube 動画表示、長さと幅の比：'
		},
		'index': ['English', '正體中文', '简体中文', '日本語']
	};
	var	lang = locale[options.hz_language] || locale['en-US'];
	
	// Append elements
	var $content = $('#content'),
		fragment = {
			body: document.createDocumentFragment(),
			menu: document.createDocumentFragment()
		},
		elements = {
			body: {
				hz: {
					id: 'hoverzoom',
					css: {
						opacity: options.hz_opacity / 100
					}
				},
				load: {
					id: 'hz_loading'
				},
				db: {
					id: 'hoverzoom_db',
					type: 'a',
					html: '<div></div>'
				},
				fs: {
					id: 'hoverzoom_fs',
					html: '<div class="back"></div><div class="main"></div><div class="ctrlbar"><div class="prev"></div><div class="next"></div><div class="close"></div></div><div class="meta"></div>'
				},
				set: {
					id: 'hz_set_page',
					class: 'hz_settings',
					html: '<div class="back"></div><div class="main"><h3>'+lang.set01+'</h3><small>Ver. '+version+' by <a href="https://plus.google.com/105931860008509594725" target="_blank">SkyArrow</a></small><div class="close" title="'+lang.set10+'"></div>'+
						'<ul class="menu"><li>'+lang.set11+'</li><li>'+lang.set12+'</li><li>'+lang.set13+'</li></ul>'+
						// General tab
						'<div class="tabs"><div>'+
						'<label>'+lang.set36+'</label><input id="hz_enable_main" type="checkbox"><label for="hz_enable_main">'+lang.set37+'</label><input id="hz_enable_icon" type="checkbox"><label for="hz_enable_icon">'+lang.set38+'</label><input id="hz_enable_link" type="checkbox"><label for="hz_enable_link">'+lang.set39+'</label><br>'+
						'<label for="hz_delay">'+lang.set14+'</label><input id="hz_delay" type="text" maxlength="4"><label for="hz_delay">'+lang.set15+'</label><br>'+
						'<label for="hz_opacity">'+lang.set16+'</label><input id="hz_opacity" type="text" maxlength="3"><label for="hz_opacity">%</label><br>'+
						'<label for="hz_maxwidth">'+lang.set17+'</label><input id="hz_maxwidth" type="text" maxlength="4"><label for="hz_maxwidth">'+lang.set18+'</label><br>'+
						'<input id="hz_drift" type="checkbox"><label for="hz_drift">'+lang.set30+'</label><br>'+
						'<input id="hz_resolution" type="checkbox"><label for="hz_resolution">'+lang.set26+'</label><br>'+
						'<input id="hz_hovering" type="checkbox"><label for="hz_hovering">'+lang.set46+'</label>'+
						// Shortcuts tab
						'</div><div>'+
						'<label for="hz_trigger">'+lang.set23+'</label><select id="hz_trigger"></select><br>'+
						'<label for="hz_dl_key">'+lang.set28+'</label><select id="hz_dl_key"></select><br>'+
						'<label for="hz_fullscreen">'+lang.set27+'</label><select id="hz_fullscreen"></select><br>'+
						'<input id="hz_download" type="checkbox"><label for="hz_download">'+lang.set19+'</label><br>'+
						'<input id="hz_shortcut" type="checkbox"><label for="hz_shortcut">'+lang.set31+'</label><br>'+
						'<input id="hz_dl_link" type="checkbox"><label for="hz_dl_link">'+lang.set42+'</label>'+
						// Others tab
						'</div><div>'+
						'<label for="hz_language">'+lang.set35+'</label><select id="hz_language"></select><br>'+
						'<input id="hz_update" type="checkbox"><label for="hz_update">'+lang.set41+'</label> <a id="hz_checkupdate" href="javascript:void(0)">('+lang.update05+')</a><br>'+
						'<input id="hz_maxpic" type="checkbox"><label for="hz_maxpic">'+lang.set43+'</label><select id="hz_maxpic_option"></select><br>'+
						'<input id="hz_maxyt" type="checkbox"><label for="hz_maxyt">'+lang.set47+'</label><select id="hz_maxyt_aspect"><option value="1">4:3</option><option value="2">16:9</option><option value="3">16:10</option></select><br>'+
						'<input id="hz_direct" type="checkbox"><label for="hz_direct">'+lang.set25+'</label><input id="hz_direct_max" type="text" maxlength="4"><label for="hz_direct_max">'+lang.set18+'</label><br>'+
						'<input id="hz_direct_yt" type="checkbox"><label for="hz_direct_yt">'+lang.set33+'</label><select id="hz_direct_ytaspect"><option value="1">4:3</option><option value="2">16:9</option><option value="3">16:10</option></select><label for="hz_direct_ytaspect">'+lang.set34+'</label><input id="hz_direct_ytmaxwidth" type="text" maxlength="4"><label for="hz_direct_ytmaxwidth">'+lang.set18+'</label><br>'+
						'<input id="hz_album" type="checkbox"><label for="hz_album">'+lang.set32+'</label><br>'+
						'<input id="hz_allpics" type="checkbox"><label for="hz_allpics">'+lang.set40+'</label><br>'+
						'<input id="hz_his" type="checkbox"><label for="hz_his">'+lang.set20+'</label><input id="hz_his_max" type="text" maxlength="4"><label for="hz_his_columns">'+lang.set21+'</label><input id="hz_his_columns" type="text" maxlength="1">'+
						'</div></div>'+
						'<div class="functions bottom"><div class="hz_button white">'+lang.set03+'</div><div class="hz_button green">'+lang.set02+'</div></div></div>'
				}
			},
			menu: {
				divide: {
					html: '<div class="gbmt gbmh"></div>'
				},
				disable: {
					id: 'disable_hz',
					html: lang.menu01
				},
				setting: {
					id: 'hz_set_open',
					html: lang.set01
				},
				history: {
					id: 'hz_history_open',
					html: lang.set05
				},
				allPic: {
					id: 'hz_allpic_dl',
					html: lang.allpic01
				}
			}
		};

	var appendElement = {
		body: function(obj){
			if (typeof obj.type === 'undefined') obj.type = 'div';
			var element = document.createElement(obj.type);

			if (typeof obj.id !== 'undefined') element.id = obj.id;
			if (typeof obj.class !== 'undefined') element.className = obj.class;
			if (typeof obj.html !== 'undefined') element.innerHTML = obj.html;
			if (typeof obj.css !== 'undefined') {
				var style = obj.css;
				for (var i=0; i<style.length; i++) {
					element.style[style[i][0]] = style[i][1];
				}
			}

			fragment.body.appendChild(element);
		},
		menu: function(obj){
			var element = document.createElement('li');
			element.className = 'gbmtc';
			
			if (typeof obj.id !== 'undefined') {
				element.innerHTML = '<a id="'+obj.id+'" class="gbmt">'+obj.html+'</a>';
			} else {
				element.innerHTML = obj.html;
			}

			fragment.menu.appendChild(element);
		}
	}

	appendElement.body(elements.body.hz);
	appendElement.body(elements.body.load);
	if (options.hz_download === 'true') appendElement.body(elements.body.db);
	appendElement.body(elements.body.fs);
	appendElement.body(elements.body.set);
	$content.parent().append(fragment.body);

	appendElement.menu(elements.menu.divide);
	appendElement.menu(elements.menu.disable);
	appendElement.menu(elements.menu.setting);
	$('#gbom').append(fragment.menu);

	// Detect the position of cursor
	document.addEventListener('mousemove', function(e){
		mouse.x = e.pageX;
		mouse.y = e.pageY;
	}, false);

	// Main
	var main = function(){
		var tag = $(this).prop('tagName'),
			self = $(this),
			$main = $('#hoverzoom'),
			$loading = $('#hz_loading');
		
		if (tag === 'IMG') {
			var url = $(this).attr('src');
			url = ( url.match(/\?sz|\/proxy/) ) ? $(this).attr('src').replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : $(this).attr('src').replace(picasaRegex,'/s0/$2');
		} else if (tag === 'A') {
			var url = $(this).attr('href');
			if (url.match(picRegex) === null) return false;
		}
		
		var show = function(){
			$loading.show().offset({top: mouse.y - 10, left: mouse.x - 10});
			if (options.hz_download === 'true') $('#hoverzoom_db').data('url', url);
			
			$('<img>').attr('src', url).load(function(){
				var nWidth = this.naturalWidth,
					nHeight = this.naturalHeight,
					inner = document.createDocumentFragment();
				inner.appendChild(this);
				if (options.hz_resolution === 'true') {
					var meta = document.createElement('small');
					meta.innerHTML = nWidth+' x '+nHeight;
					inner.appendChild(meta);
				}
				$loading.hide();
				$main.empty().append(inner);
				resize();
			});
			$main.fadeIn(300);
		}

		var hide = function(){
			$main.hide().empty();
			$loading.hide();
			self.off('mouseleave', hide);
			clearTimeout(timer1);
		}

		// Todo: 檢驗滑鼠飄移時圖片跟著飄移的選項是否可行
		var resize = function(){
			var x, y,
				img = $main.children('img');
			if (options.hz_drift === 'true') {
				x = mouse.x;
				y = mouse.y;
			} else {
				self.on('mousemove', function(e){
					x = e.pageX;
					y = e.pageY;
				});
			}

			var left = function(){
				var picWidth = options.hz_maxwidth > 0 && picWidth > options.hz_maxwidth ? options.hz_maxwidth : x - 30;
				
				img.css('maxWidth', picWidth);
				options.hz_resolution === 'true' ? img.css('maxHeight', wHeight - 45) : img.css('maxHeight', wHeight - 35);
				
				$main.offset({top: y + 20, left: x - $main.width() - 20});
				
				if ( y + $main.height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $main.offset().top - $main.height() < $(document).scrollTop() + 20) ?	$main.offset({'top': $(document).scrollTop() + 10}) : $main.offset({top: y - $main.height() - 20});
			}

			var right = function(){
				var picWidth = options.hz_maxwidth > 0 && picWidth > options.hz_maxwidth ? options.hz_maxwidth : wWidth - x - 40;
				
				if (options.hz_maxwidth > 0 && picWidth > options.hz_maxwidth)
					picWidth = options.hz_maxwidth;
				
				img.css('maxWidth', picWidth);
				options.hz_resolution === 'true' ? img.css('maxHeight', wHeight - 45) : $main.children('img').css('maxHeight', wHeight - 35);
				
				$main.offset({'top': y + 20, 'left': x + 20});
				
				if (y + $main.height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $main.offset().top - $main.height() < $(document).scrollTop() + 20) ?	$main.offset({'top': $(document).scrollTop() + 10}) : $main.offset({'top': y - $main.height() - 20});
			}

			$main.offset({top: mouse.y + 20, left: mouse.x + 20});

			if (mouse.x > wWidth / 2) {
				left();
			} else {
				right();
			}
		}

		var fullscreen = function(){
			hide();
			var $fs = $('#hz_fullscreen'),
				wWidth = $fs.width(),
				wHeight = $fs.height(),
				trigger = true,
				arr = self.parent().parent().find('img'),
				i = $.inArray(self, arr);
		}

		var timer1,
			wWidth = $(window).width(),
			wHeight = $(window).height();
		
		self.on('mouseleave', hide);

		clearTimeout(timer1);
		timer1 = setTimeout(show, options.hz_delay);
	}

	// Enable & Disable
	var enable = function(){
		if (options.hz_enable_main === 'true')
			$content.on('mouseenter', 'div[data-content-type^="image"] img', main);
		if (options.hz_enable_icon === 'true')
			$content.on('mouseenter', '.Nm img', main);
		if (options.hz_enable_link === 'true')
			$content.on('mouseenter', '.ot-anchor', main);
		
		$('#hoverzoom_db').show();
		timer.start();
	}

	var disable = function(){
		if (options.hz_enable_main === 'true')
			$content.off('mouseenter', 'div[data-content-type^="image"] img', main);
		if (options.hz_enable_icon === 'true')
			$content.off('mouseenter', '.Nm img', main);
		if (options.hz_enable_link === 'true')
			$content.off('mouseenter', '.ot-anchor', main);
		
		$('#hz_dl_link').hide();
		timer.stop();
	}

	var albumDL = function(){
		
	}

	var timer = new function(){
		var interval;

		var comment = function(){
			$('.zj .ot-anchor').each(function(){
				var url = this.href;
				if (options.hz_direct === 'true' && url.match(picRegex) && !$(this).hasClass('img-in-post')){
					var item = $('<img>').attr('src', url);

					if (options.hz_direct_max > 0) {
						item.css('maxWidth', options.hz_direct_max);
					}

					$(this).addClass('img-in-post').html(item);
				} else if (url.match(/youtube.com\/watch\?v=/) && !$(this).hasClass('yt-in-post') && options.hz_direct_yt === 'true'){
					if (options.hz_direct_ytaspect == 1) {
						var aspect = 3/4;
					} else if (options.hz_direct_ytaspect == 3) {
						var aspect = 10/16;
					} else {
						var aspect = 9/16;
					}
					var maxWidth = (options.hz_direct_ytmaxwidth > 0) ? options.hz_direct_ytmaxwidth : $(this).parent().parent().width();
						url = url.replace(/(.*)watch\?v=(.*)/, '$1v/$2').replace(/&(.*)/g, '') + '?version=3&autohide=1&feature=player_embedded';

					var close = document.createElement('div'),
						object = document.createElement('object'),
						fragment = document.createDocumentFragment();

					$(close).addClass('closeYT').attr('title', lang.yt01).html('X').click(function(){
						$(this).prev().attr('style', '');
						$(this).next().remove();
						$(this).remove();
					});
					fragment.appendChild(close);

					$(object).css({height: maxWidth*aspect, width: maxWidth}).html('<param name="movie" value="'+url+'"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="'+url+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="'+maxWidth+'" height="'+maxWidth*aspect+'"></object>');
					fragment.appendChild(object);

					$(this).after(fragment).css({display: 'block', fontWeight: 'bold', marginRight: 11}).addClass('yt-in-post');
				} 
			});
		}

		var album = function(){
			var page = location.href.replace(/\?(.*)/, '');

			if (page.match(/\/photos\/\w+\/albums\/\w+/)) {
				$main = ( $('#contentPane').children().length > 1 ) ? $('#contentPane div:eq(1) div:eq(0) div:eq(0) div:eq(0) div:eq(0)') : $('#contentPane div:eq(0) div:eq(0) div:eq(0) div:eq(0) div:eq(0)');
				
				if (!$main.hasClass('album-in-post')) {
					var button = $('<div>').attr({id: page, title: lang.al01}).addClass('in-albumDownload hz_button blue').html(lang.al01).click(albumDL);

					$main.children().length > 2 ? $main.children().eq(1).after(button) : $main.children().eq(0).after(button);
					$main.addClass('album-in-post');
				}
			} else {
				$('.B-u-Y-j').each(function(){
					var url = this.href;

					if (url.match(/albums/) && !$(this).hasClass('album-in-post')){
						var button = $('<span>');
						button.data('url', url).addClass('a-j albumDownload').html(lang.fs03).attr('title', lang.al01).click(albumDL);
						$(this).addClass('album-in-post').parentsUntil('.Ve').find('.dl').append(button);
					}
				});
			}
		}

		var links = function(){
			$('.Jm').each(function(){
				if (!$(this).hasClass('pic-in-post')){
					var target = $(this).find('div[data-content-type^="image"]'),
						count = target.length;
						fragment = document.createDocumentFragment();
					
					if (count > 1) {
						var stacks = document.createElement('span');
						$(stacks).addClass('a-j picStacks').html(lang.fs03+' ('+count+')').click(function(){
							$(this).next().is(':hidden') ? $(this).next().fadeIn(300).offset({left: $(this).offset().left + 10, top: $(this).offset().top + 25}) : $(this).next().fadeOut(300);
						});
						fragment.appendChild(stacks);

						var popup = document.createElement('div'),
							popInner = '<div class="closeButton" title="'+lang.set10+'"></div><strong>'+lang.piclink01+'</strong><br>';
						
						for (var i=0; i<count; i++){
							var url = target[i].childNodes[0].src,
								number = i + 1;
							url = url.match(/\?sz|\/proxy/) ? url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : url.replace(picasaRegex,'/s0/$2');
							popInner += i == 0 ? '<a class="a-j" tabindex="0" role="button" href="'+url+'">'+number+'</a>' : ' - <a class="a-j" tabindex="0" role="button" href="'+url+'">'+number+'</a>';
						}
						
						$(popup).addClass('clickDetail').html(popInner + '</div>').on('click', '.closeButton', function(){
							$(this).parent().fadeOut(300);
						});
						fragment.appendChild(popup);
					} else if (count === 1) {
						var url = target[0].childNodes[0].src,
							link = document.createElement('a');
						url = url.match(/\?sz|\/proxy/) ? url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : url.replace(picasaRegex,'/s0/$2');

						$(link).addClass('a-j picStacks').attr({tabindex: 0, role: 'button', href: url}).html(lang.fs03);
						fragment.appendChild(link);
					}
					$(this).addClass('pic-in-post').parentsUntil('.Ve').find('.dl').append(fragment);
				}
			});
		}

		var maxPic = function(){
			var width = $('div[id^="update"]:visible').children().width();

			$('div[id^="update"] div[data-content-type^="image"] img').each(function(){
				if (!$(this).parent().hasClass('maxPic')){
					var url = this.src,
						$parent = $(this).parent().parent();
					
					if (width === null) width = $parent.width();

					$(this).attr({
						original: url,
						src: url.match(/\?sz|\/proxy/) ? url.replace(/resize_\D?=\d+/, 'resize_w='+width) : url.replace(picasaRegex,'/w'+width+'/$2')
					});

					if (!$parent.hasClass('maxPicAdded')) {
						var zoom = $('<span>');
						zoom.attr({class: 'a-j', title: lang.maxpic01}).html(' - '+lang.maxpic01).click(function(){
							$(this).parent().parent().find('.maxPic').each(function(){
								$(this).attr('style', '');
								$(this).children('img').attr('src', $(this).children('img').attr('original'));
							});
							$(document).scrollTop($(this).parent().parent().parent().parent().offset().top - 100);
							$(this).remove();
						});

						$(this).parentsUntil('.Ve').find('.dl').append(zoom);
						$parent.addClass('maxPicAdded');
					}

					if (options.hz_maxpic_option === '1') {
						$parent.find('div[data-content-type^="image"]').addClass('maxPic');
					}

					$(this).parent().addClass('maxPic').css({height: 'auto', width: 'auto', maxHeight: 'none', maxWidth: 'none', marginBottom: 5});
				}
			});
		}

		return {
			start: function(){
				interval = setInterval(function(){
					comment();
					if (options.hz_album === 'true') album();
					if (options.hz_dl_link === 'true') links();
					if (options.hz_maxpic === 'true') maxPic();
				}, 2500);
			},
			stop: function(){
				clearInterval(interval);
			}
		}
	}

	// Add CSS
	/*
	var addStyle = function(css){
		$('<style>').html(css).appendTo($('head')[0]);
	}
	*/

	// Initialize
	var init = {
		normal: function(){
			$('#disable_hz').toggle(function(){
				disable();
				$(this).html(lang.menu02);
			}, function(){
				enable();
				$(this).html(lang.menu01);
			});

			// Settings page
			var $set = $('#hz_set_page'),
				keys = '<option value="0">'+lang['set24']+'</option><option value="16">Shift</option><option value="17">Ctrl</option>';

			keys += (navigator.appVersion.indexOf('Macintosh') > -1) ? '<option value="18">Option</option><option value="13">Return</option>' : '<option value="18">Alt</option><option value="13">Enter</option>';
			
			for (i=65; i<91; i++){
				keys += '<option value="'+i+'">&#'+i+';</option>';
			}
			$('#hz_trigger, #hz_fullscreen, #hz_dl_key').append(keys);

			$('#hz_language').append(
			'<option value="en-US">'+locale.index[0]+'</option>'+
			'<option value="zh-TW">'+locale.index[1]+'</option>'+
			'<option value="zh-CN">'+locale.index[2]+'</option>'+
			'<option value="ja-JP">'+locale.index[3]+'</option>'
			);

			$('#hz_maxpic_option').append(
			'<option value="0">'+lang.set44+'</option>'+
			'<option value="1">'+lang.set45+'</option>'
			);

			$('#hz_set_open').click(function(){
				$set.fadeIn(300);

				$set.find(':text').each(function(){
					$(this).val(options[$(this).attr('id')]);
				});
				$set.find('select').each(function(){
					$(this).children('option[value="'+options[$(this).attr('id')]+'"]').prop('selected', true);
				});
				$set.find(':checkbox').each(function(){
					if ( options[$(this).attr('id')] === 'true' )
						$(this).prop('checked', true);
				});
			});

			$set.on('click', '.close, .back', function(){
				$set.fadeOut(300);
			}).on('click', '.green', function(){
				$set.find(':text').each(function(){
					localStorage[$(this).attr('id')] = $(this).val();
				});
				$set.find('select').each(function(){
					localStorage[$(this).attr('id')] = $(this).find(':selected').val();
				});
				$set.find(':checkbox').each(function(){
					localStorage[$(this).attr('id')] = $(this).prop('checked').toString();
				});
				location.reload();
			}).on('click', '.white', function(){
				var sure = confirm(lang.set04);
				if (sure) {
					localStorage.clear();
					location.reload();
				} else {
					return false;
				}
			}).find('.menu li').each(function(i){
				if (i === 0){
					$(this).addClass('current');
				}

				$(this).data('tab', i).click(function(){
					var $current = $(this).parent().children('.current'),
						gap = 590 * (i - $current.data('tab')),
						height = $set.find('.tabs div').eq(i).height();

					$set.find('.tabs').animate({left: '-='+gap}, 500);
					$set.find('.main').animate({height: height + 140}, 500);

					$current.removeClass('current');
					$(this).addClass('current');
				});
			});
		},
		dl: function(){
			$('#hz_dl_link').mouseenter(function(){
				$(this).attr('href', $(this).data('url'));
			});
			
		},
		fs: function(){
			$('#hz_fullscreen').on('click', '.back, .close', function(){
				$(this).hide().children('.main').empty();
			});
		}
	}
	init.normal();
	init.dl();
	init.fs();
	enable();
}

// Load jQuery
var jq = document.createElement('script');
jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js';
jq.addEventListener('load', function(){
	var script = document.createElement('script');
	script.textContent = '(' + hoverzoom.toString() + ')();';
	document.body.appendChild(script);
}, false);
document.body.appendChild(jq);

// Add styles
GM_addStyle('#hoverzoom{position:fixed;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10002;display:none;background:rgba(255,255,255,0.5);width:auto;height:auto}#hoverzoom img{display:block;margin:5px}#hoverzoom small{display:block;text-align:center;line-height:1;margin:0 5px 5px}#hz_loading{width:20px;height:20px;box-shadow:0 -2px 1px 1px #db4937;position:fixed;pointer-events:none;z-index:10000;display:none;-moz-border-radius:50%;-webkit-border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-khtml-border-radius:50%;border-radius:50%;-moz-animation:loading infinite 0.8s linear;-webkit-animation:loading infinite 0.8s linear}#hoverzoom_db{position:fixed;top:45%;right:0;background:#f5f5f5;border:1px solid #d2d2d2;border-right:none;box-shadow:0 0 5px rgba(0,0,0,0.1);width:37px;height:37px;display:none;-moz-border-radius:2px 0 0 2px;-webkit-border-radius:2px 0 0 2px;-o-border-radius:2px 0 0 2px;-ms-border-radius:2px 0 0 2px;-khtml-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px}#hoverzoom_db:hover div{background:#666}#hoverzoom_db div{margin:6px;width:25px;height:25px;background:#aaa;-moz-border-radius:50%;-webkit-border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-khtml-border-radius:50%;border-radius:50%;-moz-transition:0.5s;-webkit-transition:0.5s;-o-transition:0.5s;transition:0.5s}#hoverzoom_db div:before,#hoverzoom_db div:after{position:absolute;content:""}#hoverzoom_db div:before{width:6px;height:8px;background:#f5f5f5;top:12px;left:15px}#hoverzoom_db div:after{border-style:solid;border-width:7px 8px;border-color:#f5f5f5 transparent transparent;top:19px;left:10px}.albumDownload{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACl0lEQVQ4jX1TX2iOcRR+zvm97++d720R1mxlLlg2EjWlFhe0tkUW1tRnSGFpUlJu9blgWUmKsmRo2lbaxcpopklq0tCKopRCjWWabeb73j+/33Fh1sbHU6fOxfM853SeDiELMp5XrJSqE+CwuKQ4xiVLdNf7/v1VNv4MWup71lzb13d8an5BmU3Mey++L7Hvi/i+RAn/43hV3oqR5qXLZ2v4d9Oa7N2iSfflsHehbUdnw9cFxZUQ+1wBsAAgUGYhlsCaB6NNhRVzDFqSvSVQ6CRQfjqagi+2oavi4rl3RTV7ROyT6Ski1sQQKiRCx5dzhSsBgAVCikyTyzovttHMam6cyTlT0/mJfqRrDPAQgD/tE3ouLbYWTQIQX6+/V0rgrWEcgEDQykMYBzfGo8mdrc00ScCo0nonWbnlhsoBgEwkYNC2z2eLStkKtrtKaxCglIPIhudzo4lDJ27vTv/ehsbGxlXw41hQ7H6BgEUAz4GGxNsdARqtGChSBsacPNhefSFbQgTISK6KAQMBEBoBkxxhEDRAabZxsjuM39bV9RX9N+s/4JClFCMc7g6pwAPdFBOu+xeZHCEACV8TtCKMpe0VAoC62runtNKnjQkDzuhV7T0V77IZSBnmx7vyG0HkhkxuALrqpFIpfv0SG5gdmDiKMssGF21qW3vAiJMggcw2KAfJBFFaeeSMRfTo496nHwgAkrW9JWB5LDFyv5X2b5so6bvDnpMzV/4L7BBM2kwJ88aB+sEhBoCOrqo3ZJEE0bAyjgOStA0s5lRoAQAmY0dEpGagfnAImPUL7V3VDzhIVAT+6DCEY9YMYgIxgTWDiDI2ki5j7eaB/S/6Zw7796VA5W3rV4OkEoKj06zLELo/sP/ZX+/8E1gaKlGc2T23AAAAAElFTkSuQmCC) no-repeat;padding-left:15px;margin-left:20px}.albumDownload:before{content:"-";cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid #fff}.in-albumDownload{margin:25px 18px 25px 0;background:none}.picDownload{background:#bbb;-moz-border-radius:10px;-webkit-border-radius:10px;-o-border-radius:10px;-ms-border-radius:10px;-khtml-border-radius:10px;border-radius:10px;color:#fff !important;display:inline-block;font-size:12px;line-height:1em;height:1em;width:1em;margin:0 2px;padding:5px;text-align:center}.picStacks{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jbXRQUoDQRAF0DeTjhjExWwcdOVCxAu48/4X0EUUPYVgFonTLqYSmk7UDOKHhu6qrvq/fvFHNLjCDdqJtQNeGzwgRWAKWmwS5tjgEZ+RzJXKEhlnuMM8RSDjvWjQo8PLD8oycjqQuMQtZnGeQ2GJnaq6QR/FbTD3EV9iEbGPsiBV9+tg3coecGH0aREjPik8Kle3lVUauH13OMW5ceW7P/UIjX3Xa5x8N0LG6oCCmmDPg6ZILo9QkI3jQJOwjkb3v7DXSlqsZ8Ydd0b32wlnwNuRhP+IL+1ZLCIrPZQEAAAAAElFTkSuQmCC) no-repeat;padding-left:15px;margin-left:20px}.picStacks:before{content:"-";cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid #fff}.hz_button{display:inline-block;position:relative;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-khtml-border-radius:2px;border-radius:2px;cursor:pointer;font-size:11px;font-weight:bold;height:27px;line-height:27px;margin-right:16px;min-width:54px;outline:none;padding:0 8px;text-align:center;float:left;text-decoration:none !important}.hz_button.green{background-color:#3D9400;border:1px solid #29691D;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #3d9400), color-stop(100%, #398a00));background-image:-webkit-linear-gradient(left top, #3d9400,#398a00);background-image:-moz-linear-gradient(left top, #3d9400,#398a00);background-image:-o-linear-gradient(left top, #3d9400,#398a00);background-image:-ms-linear-gradient(left top, #3d9400,#398a00);background-image:linear-gradient(left top, #3d9400,#398a00)}.hz_button.green:hover{background-color:#368200;border:1px solid #2D6200;text-shadow:0 1px rgba(0,0,0,0.3);background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #3d9400), color-stop(100%, #368200));background-image:-webkit-linear-gradient(left top, #3d9400,#368200);background-image:-moz-linear-gradient(left top, #3d9400,#368200);background-image:-o-linear-gradient(left top, #3d9400,#368200);background-image:-ms-linear-gradient(left top, #3d9400,#368200);background-image:linear-gradient(left top, #3d9400,#368200)}.hz_button.green:focus,.hz_button.green:active{box-shadow:0 0 0 1px #fff inset}.hz_button.blue{background-color:#4D90FE;border:1px solid #3079ed;color:#fff;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #4d90fe), color-stop(100%, #4787ed));background-image:-webkit-linear-gradient(left top, #4d90fe,#4787ed);background-image:-moz-linear-gradient(left top, #4d90fe,#4787ed);background-image:-o-linear-gradient(left top, #4d90fe,#4787ed);background-image:-ms-linear-gradient(left top, #4d90fe,#4787ed);background-image:linear-gradient(left top, #4d90fe,#4787ed)}.hz_button.blue:hover{background-color:#357AE8;border:1px solid #2F5BB7;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #4d90fe), color-stop(100%, #357ae8));background-image:-webkit-linear-gradient(left top, #4d90fe,#357ae8);background-image:-moz-linear-gradient(left top, #4d90fe,#357ae8);background-image:-o-linear-gradient(left top, #4d90fe,#357ae8);background-image:-ms-linear-gradient(left top, #4d90fe,#357ae8);background-image:linear-gradient(left top, #4d90fe,#357ae8)}.hz_button.blue:focus,.hz_button.blue:active{box-shadow:0 0 0 1px #fff inset}.hz_button.white{background-color:#F5F5F5;border:1px solid rgba(0,0,0,0.1);color:#444;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #f5f5f5), color-stop(100%, #f1f1f1));background-image:-webkit-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:-o-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:linear-gradient(left top, #f5f5f5,#f1f1f1)}.hz_button.white:hover{background-color:#F8F8F8;border:1px solid #c6c6c6;color:#333;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #f8f8f8), color-stop(100%, #f1f1f1));background-image:-webkit-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:-o-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:linear-gradient(left top, #f8f8f8,#f1f1f1)}.hz_button.white:focus,.hz_button.white:active{box-shadow:0 1px 2px rgba(0,0,0,0.1) inset}.hz_button.orange{background-color:#D14836;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);border:1px solid transparent;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #dd4b39), color-stop(100%, #d14836));background-image:-webkit-linear-gradient(left top, #dd4b39,#d14836);background-image:-moz-linear-gradient(left top, #dd4b39,#d14836);background-image:-o-linear-gradient(left top, #dd4b39,#d14836);background-image:-ms-linear-gradient(left top, #dd4b39,#d14836);background-image:linear-gradient(left top, #dd4b39,#d14836)}.hz_button.orange:hover{background-color:#C53727;border:1px solid #B0281A;box-shadow:0 1px 1px rgba(0,0,0,0.2);background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #dd4b39), color-stop(100%, #c53727));background-image:-webkit-linear-gradient(left top, #dd4b39,#c53727);background-image:-moz-linear-gradient(left top, #dd4b39,#c53727);background-image:-o-linear-gradient(left top, #dd4b39,#c53727);background-image:-ms-linear-gradient(left top, #dd4b39,#c53727);background-image:linear-gradient(left top, #dd4b39,#c53727)}.hz_button.orange:focus,.hz_button.orange:active{box-shadow:0 0 0 1px #fff inset}#hoverzoom_fs{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:10010;display:none}#hoverzoom_fs .back{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8)}#hoverzoom_fs .main{position:absolute;white-space:nowrap}#hoverzoom_fs .main img{opacity:0;box-shadow:0 4px 16px rgba(0,0,0,0.2);vertical-align:top}#hoverzoom_fs .ctrlbar{display:none}#hoverzoom_fs .ctrlbar .prev,#hoverzoom_fs .ctrlbar .next{position:absolute;top:10%;width:50px;height:80%;opacity:0.3;z-index:10020;cursor:pointer;-moz-transition:0.5s;-webkit-transition:0.5s;-o-transition:0.5s;transition:0.5s}#hoverzoom_fs .ctrlbar .prev:hover,#hoverzoom_fs .ctrlbar .next:hover{opacity:1}#hoverzoom_fs .ctrlbar .prev:before,#hoverzoom_fs .ctrlbar .next:before{content:"";position:absolute;top:50%;border-top:7px solid #fff;border-left:7px solid #fff;width:20px;height:20px}#hoverzoom_fs .ctrlbar .prev{left:0}#hoverzoom_fs .ctrlbar .prev:before{left:20px;-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#hoverzoom_fs .ctrlbar .next{right:0}#hoverzoom_fs .ctrlbar .next:before{right:20px;-moz-transform:rotate(135deg);-webkit-transform:rotate(135deg);-o-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}#hoverzoom_fs .ctrlbar .close{position:absolute;top:10px;right:15px;width:32px;height:32px;z-index:10020;cursor:pointer;opacity:0.3;-moz-transition:0.3s;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s}#hoverzoom_fs .ctrlbar .close:hover{opacity:1}#hoverzoom_fs .ctrlbar .close:before,#hoverzoom_fs .ctrlbar .close:after{background:#fff;content:"";height:32px;position:absolute;top:0;left:50%;width:5px}#hoverzoom_fs .ctrlbar .close:before{-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}#hoverzoom_fs .ctrlbar .close:after{-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#hoverzoom_fs .meta{position:absolute;top:-100%;left:-100%;font:300 13px "HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;display:none}.hz_settings{position:fixed;top:0;left:0;width:100%;height:100%;display:none}.hz_settings .back{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.75);z-index:10000}.hz_settings .main{position:absolute;top:50%;left:50%;width:550px;height:315px;margin-top:-250px;margin-left:-285px;background:#fff;border:1px solid #acacac;border-bottom:1px solid #999;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10001;border-radius:2px;padding:20px;overflow:hidden}.hz_settings .main h3{font-size:20px;font-weight:normal;margin:0}.hz_settings .main small{color:#666}.hz_settings .main .close{background:url(https://ssl.gstatic.com/s2/oz/images/dialogx.png) no-repeat;cursor:pointer;height:15px;width:15px;position:absolute;right:16px;top:16px}.hz_settings .main .menu{background:#f5f5f5;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb;padding:0 5px 0 10px;margin:15px -20px}.hz_settings .main .menu li{display:inline-block;padding:7px 12px;color:#666;cursor:pointer}.hz_settings .main .menu li.current{font-weight:bold;color:#dd4839}.hz_settings .main .menu li:hover{color:#dd4839}.hz_settings .main .tabs{border-top:1px solid #ddd;position:absolute;left:0;top:105px;width:1770px}.hz_settings .main .tabs div{float:left;width:550px;padding:15px 20px 0}.hz_settings .main input[type="text"]{border:1px solid #d9d9d9;padding:2px 5px;margin-right:5px;width:50px}.hz_settings .main input[type="checkbox"]{margin:0 5px 0 0}.hz_settings .main label{line-height:2;margin-right:5px;display:inline-block;min-width:120px}.hz_settings .main input + label,.hz_settings .main select + label{min-width:0}.hz_settings .main textarea{border:1px solid #ccc;font-family:Consolas, Monaco, "Courier New", Courier, monospace !important;font-size:12px;height:310px;width:540px;padding:10px 0 0 10px;margin-top:10px}.hz_settings .main .functions{float:right}.hz_settings .main .functions.bottom{position:absolute;right:20px;bottom:20px}.hz_settings .main .functions div:last-child{margin-right:0}.closeButton{background:url(https://ssl.gstatic.com/ui/v1/icons/common/x_8px.png) no-repeat;cursor:pointer;height:21px;width:21px;position:absolute;right:2px;top:2px;opacity:0.4;border:1px solid transparent}.closeButton:active,.closeButton:focus{opacity:1;border:1px solid #71a7ff}.detailButton{display:inline-block;border-color:#eee transparent transparent;border-style:solid;border-width:5px;height:0;margin:0 0 -4px 5px;top:3px;width:0}.img-in-post img{max-width:100%;height:auto;margin:3px 0;display:block}.img-in-post + br{display:none}.yt-in-post{margin:3px 0}.closeYT{cursor:pointer;float:right;margin-top:-22px;font-weight:bold}.clickDetail{position:absolute;top:25px;left:0;background:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:16px 32px 16px 16px;position:absolute;z-index:1201;display:none;min-width:150px;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-khtml-border-radius:2px;border-radius:2px}.clickDetail strong{color:#000 !important}.clickDetail:before{position:absolute;top:-9px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #ccc;content:""}.clickDetail:after{position:absolute;top:-7px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #fff;content:""}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes loading{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(360deg)}}');
