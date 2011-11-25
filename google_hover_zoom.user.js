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

// Todo: 浮動下載快捷鍵
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
		hz_allpics: localStorage.hz_allpics || 'false',
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
			maxpic01: '縮放',
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
			maxpic01: '缩放',
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
					html: '<div class="back"></div><div class="main"></div><div class="ctrl"><div class="close" title="'+lang.fs01+'"></div><div class="center"><div class="prev" title="'+lang.fs10+'"></div><span></span><div class="next" title="'+lang.fs11+'"></div></div><div class="right"><small></small><a>'+lang.fs03+'</a><div class="zoom">'+lang.maxpic01+'<ul>'+
						'<li>'+lang.fs09+'</li><li>'+lang.fs06+'</li><li>'+lang.fs07+'</li>'+
						'</ul></div></div></div><div class="loading"></div>'
				},
				his: {
					id: 'hz_history_page',
					class: 'hz_settings',
					html: '<div class="back"></div><div class="main"><h3>'+lang.set06+'</h3><small></small><div class="close" title="'+lang.set10+'"></div><div class="wrap"><div class="inner"></div></div><div class="functions top">'+
						'<div class="hz_button white" title="'+lang.set09+'">'+lang.set09+'</div>'+
						'<div class="hz_button blue" title="'+lang.al05+'">'+lang.al05+'</div>'+
						'<div class="hz_button green" title="'+lang.al06+'">'+lang.al06+'</div>'+
						'</div></div>'
				},
				album: {
					id: 'hz_album_page',
					class: 'hz_settings',
					html: '<div class="back"></div><div class="main"><h3>'+lang.al01+'</h3><small></small><div class="close" title="'+lang.set10+'"></div><div class="wrap"><div class="inner"></div></div><div class="functions top">'+
						'<div class="hz_button blue" title="'+lang.al05+'">'+lang.al05+'</div>'+
						'<div class="hz_button green" title="'+lang.al06+'">'+lang.al06+'</div>'+
						'<a class="hz_button orange" title="'+lang.al04+'">'+lang.al03+'</div>'+
						'</div></div>'
				},
				ap: {
					id: 'hz_allpic_page',
					class: 'hz_settings',
					html: '<div class="back"></div><div class="main"><h3>'+lang.allpic01+'</h3><small></small><div class="close" title="'+lang.set10+'"></div><div class="wrap"><div class="inner"></div></div><div class="functions top">'+
						'<div class="hz_button blue" title="'+lang.al05+'">'+lang.al05+'</div>'+
						'<div class="hz_button green" title="'+lang.al06+'">'+lang.al06+'</div>'+
						'</div></div>'
				},
				copyarea: {
					id: 'hz_copyarea',
					class: 'hz_settings',
					html: '<div class="back"></div><div class="main"><h3>'+lang.al05+'</h3><small></small><div class="close" title="'+lang.set10+'"></div><textarea readonly wrap="off"></textarea></div>'
				},
				update: {
					id: 'hz_update_note',
					class: 'hz_settings',
					html: '<div class="back"></div><div class="main"><h3>'+lang.update01+'</h3><small></small><div class="close" title="'+lang.set10+'"></div><p></p><div>'+
						'<a href="http://userscripts.org/scripts/source/106681.user.js" class="hz_button green" title="'+lang.update01+'">'+lang.update01+'</a>'+
						'<div class="hz_button white" title="'+lang.update04+'">'+lang.update04+'</div>'+
						'</div></div>'
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
	if (options.hz_fullscreen > 0 || options.hz_shortcut === 'true') appendElement.body(elements.body.fs);
	if (options.hz_his === 'true') appendElement.body(elements.body.his);
	if (options.hz_album === 'true') appendElement.body(elements.body.album);
	if (options.hz_allpics === 'true') appendElement.body(elements.body.ap);
	appendElement.body(elements.body.copyarea);
	appendElement.body(elements.body.set);
	appendElement.body(elements.body.update);
	$content.parent().append(fragment.body);

	appendElement.menu(elements.menu.divide);
	appendElement.menu(elements.menu.disable);
	appendElement.menu(elements.menu.setting);
	if (options.hz_his === 'true') appendElement.menu(elements.menu.history);
	if (options.hz_allpics === 'true') appendElement.menu(elements.menu.allPic);
	$('#gbom').append(fragment.menu);

	// Detect the position of cursor
	document.addEventListener('mousemove', function(e){
		mouse.x = e.pageX;
		mouse.y = e.pageY;
	}, false);

	// Main
	var main = function(){
		var tag = $(this).prop('tagName'),
			self = this,
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
			history();
			
			$('<img>').attr('src', url).load(function(){
				if (trigger1 == true){
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
					$main.empty().append(inner).fadeIn(300).offset({top: mouse.y + 20, left: mouse.x + 20});
					resize();

					if (options.hz_hovering === 'true') {
						$main.on({
							mouseenter: function(){clearTimeout(timer2)},
							mouseleave: hide
						})
					}
				}
			});
		}

		var hide = function(){
			clearTimeout(timer2);
			timer2 = setTimeout(function(){
				trigger1 = false;
				$main.hide().empty().off();
				$loading.hide();
				$(self).off('mouseleave', hide);
				$(document).off('keydown', keys);
				clearTimeout(timer1);
			}, 100);
		}

		var resize = function(){
			var	img = $main.children('img');

			var left = function(e){
				if ( options.hz_drift === 'true' ) {
					var x = mouse.x,
						y = mouse.y;
				} else {
					var x = e.pageX,
						y = e.pageY;
				}

				var picWidth = options.hz_maxwidth > 0 && picWidth > options.hz_maxwidth ? options.hz_maxwidth : x - 30;
				
				img.css('maxWidth', picWidth);
				options.hz_resolution === 'true' ? img.css('maxHeight', wHeight - 45) : img.css('maxHeight', wHeight - 35);
				
				$main.offset({top: y + 20, left: x - $main.width() - 20});
				
				if ( y + $main.height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $main.offset().top - $main.height() < $(document).scrollTop() + 20) ?	$main.offset({'top': $(document).scrollTop() + 10}) : $main.offset({top: y - $main.height() - 20});
			}

			var right = function(e){
				if ( options.hz_drift === 'true' ) {
					var x = mouse.x,
						y = mouse.y;
				} else {
					var x = e.pageX,
						y = e.pageY;
				}

				var picWidth = options.hz_maxwidth > 0 && picWidth > options.hz_maxwidth ? options.hz_maxwidth : wWidth - x - 40;
				
				if (options.hz_maxwidth > 0 && picWidth > options.hz_maxwidth)
					picWidth = options.hz_maxwidth;
				
				img.css('maxWidth', picWidth);
				options.hz_resolution === 'true' ? img.css('maxHeight', wHeight - 45) : $main.children('img').css('maxHeight', wHeight - 35);
				
				$main.offset({'top': y + 20, 'left': x + 20});
				
				if (y + $main.height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $main.offset().top - $main.height() < $(document).scrollTop() + 20) ?	$main.offset({'top': $(document).scrollTop() + 10}) : $main.offset({'top': y - $main.height() - 20});
			}

			if (options.hz_drift === 'true') {
				mouse.x > wWidth / 2 ? left() : right();
			} else {
				if ( mouse.x > wWidth / 2 )
					$(self).mousemove(function(e){left(e)});
				else
					$(self).mousemove(function(e){right(e)});
			}
		}

		var history = function(){
			var time = new Date(),
				month = time.getMonth() + 1,
				day = time.getDate(),
				hour = time.getHours(),
				minute = time.getMinutes(),
				second = time.getSeconds();
			if ( minute < 10 ) minute = '0' + minute;
			if ( second < 10 ) second = '0' + second;
			
			var date = month+'/'+day+' '+hour+':'+minute+':'+second,
				storage = localStorage.hz_histories !== '' && typeof localStorage.hz_histories !== 'undefined' ? localStorage.hz_histories.split('|||') : [];
			
			for (var i=0; i<storage.length; i++){
				var item = storage[i].split(';');
				if (item[0] === url){
					storage.splice(i, 1);
				}
			}

			storage.push(url+';'+date);
			localStorage.hz_histories = storage.join('|||');
		}

		var keys = function(e){
			var code = e.keyCode || e.which;
			if (code == options.hz_trigger) {
				show();
			} else if (code == options.hz_fullscreen) {
				fullscreen();
				history();
			} else if (code == options.hz_dl_key) {
				window.open(url, 'hz_dlwindow');
				history();
			}
		}

		var fullscreen = function(){
			var fs = document.getElementById('hoverzoom_fs'),
				$main = $(fs).children('.main'),
				$ctrl = $(fs).children('.ctrl'),
				scroll = $(document).scrollTop(),
				trigger = true,
				arr = $(self).parent().parent().find('div[data-content-type^="image"] img, div[data-content-url*="picasa"] img'),
				i = $.inArray(self, arr),
				url;

			var insert = function(num, repeat){
				if (trigger == true){
					if (num < 0) {
						num = arr.length - 1;
					} else if (num == arr.length) {
						num = 0;
					}

					i = num;
					trigger = false;
					if (typeof arr[i] !== 'undefined') {
						url = arr[i].src.match(/\?sz|\/proxy/) ? arr[i].src.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : arr[i].src.replace(picasaRegex,'/s0/$2');
					} else {
						url = self.href || self.src;
					}

					$(fs).addClass('load').find('a').attr('href', url);
					$('<img>').attr('src', url).load(function(){
						var img = this;

						if (repeat == true){
							$main.children('img:eq(0)').fadeOut(300, function(){
								$(this).remove();
								resize.start(img);
								trigger = true;
							});
						} else {
							resize.start(img);
							trigger = true;
						}

						$(fs).removeClass('load');
					}).appendTo($main);
				}
			}

			var prev = function(){
				if (arr.length > 1) {
					insert(i-1, true);
					return false;
				}
			}

			var next = function(){
				if (arr.length > 1) {
					insert(i+1, true);
					return false;
				}
			}

			var resize = new function(){
				var $func = $(fs).find('li'),
					wWidth, wHeight, nWidth, nHeight, item;

				var main = function(top, left){
					var percent = parseInt($(item).width() / nWidth * 100);

					$main.css({top: top, left: left});
					$(fs).find('small').html(nWidth+' x '+nHeight+' ('+percent+'%)').end().find('span').html(parseInt(i+1)+' / '+arr.length);
				}

				var resize = [
					function(){
						$(item).css({maxWidth: wWidth - 50, maxHeight: wHeight - 50});
						$func.css('fontWeight', 'normal').eq(0).css('fontWeight', 'bold');
						main((wHeight - $(item).height()) / 2, (wWidth - $(item).width()) / 2);
					}, function(){
						$(item).css('maxHeight', 'none');
						getSize();
						$(item).css('maxWidth', wWidth);
						$func.css('fontWeight', 'normal').eq(1).css('fontWeight', 'bold');
						main(0, (wWidth - $(item).width()) / 2);
					}, function(){
						$(item).css({maxWidth: 'none', maxHeight: 'none'});
						$func.css('fontWeight', 'normal').eq(2).css('fontWeight', 'bold');
						main(0, 0);
					}
				]

				var detect = function(){
					if (wWidth > nWidth && wHeight > nHeight){
						$(fs).removeClass('zoom');
					} else {
						if (nWidth > wWidth){
							var html = lang.fs06+' ('+parseInt(wWidth/nWidth*100)+'%)';
							$(fs).addClass('actual')
						} else {
							var html = lang.fs06+' (100%)';
							$(fs).removeClass('actual');
						}

						$(fs).find('li').each(function(i){
							$(this).off('click').on('click', resize[i]);
						}).eq(0).html(lang.fs09+' ('+parseInt($(item).width()/nWidth*100)+'%)').end().eq(1).html(html);
						
						$(fs).addClass('zoom');
					}
				}

				var getSize = function(){
					wWidth = fs.clientWidth;
					wHeight = fs.clientHeight;
				}

				return {
					start: function(obj){	
						nWidth = obj.naturalWidth;
						nHeight = obj.naturalHeight;
						item = obj;

						getSize();
						$(obj).css({maxWidth: wWidth - 50, maxHeight: wHeight - 50}).animate({opacity: 1}, 300);
						$func.css('fontWeight', 'normal').eq(0).css('fontWeight', 'bold');
						main((wHeight - $(obj).height()) / 2, (wWidth - $(obj).width()) / 2);
						detect();
					}
				}
			}

			var close = function(){
				$(fs).hide().off().attr('class', '').children('.main').empty().end().children('.ctrl').attr('style', '');
				$('html').css('overflowY', 'auto');
				$(document).scrollTop(scroll).off('keyup').off('keydown');
			}

			$(fs).show().on('click', '.back, .close', close).on('click', '.prev', prev).on('click', '.next', next).on('click', 'img', next).on('contextmenu', 'img', prev).on('scroll', function(){
				$ctrl.css({top: this.scrollTop, left: this.scrollLeft});
			});

			hide();
			$('html, body').css('overflowY', 'hidden');
			insert(i, false);
			if (arr.length > 1) $(fs).addClass('multi');

			$(document).on('keyup', function(e){
				var code = e.keyCode || e.which;
				if (code == 39) next();
				else if (code == 37) prev();
			}).on('keydown', function(e){
				var code = e.keyCode || e.which;
				if ( code == options.hz_fullscreen || code == 27 ) {
					close();
				} else if ( code == options.hz_dl_key ) {
					window.open(url, 'hz_dlwindow');
				}
			});
		}

		var timer1, timer2,
			trigger1 = true,
			wWidth = $(window).width(),
			wHeight = $(window).height();
		
		$(self).on('mouseleave', hide);

		clearTimeout(timer1);
		if (options.hz_trigger == 0) timer1 = setTimeout(show, options.hz_delay);
		$(document).on('keydown', keys);
	}

	var enable = function(){
		if (options.hz_enable_main === 'true')
			$content.on('mouseenter', 'div[data-content-type^="image"] img, div[data-content-url*="picasa"] img', main);
		if (options.hz_enable_icon === 'true')
			$content.on('mouseenter', '.Nm img', main);
		if (options.hz_enable_link === 'true')
			$content.on('mouseenter', '.ot-anchor', main);
		
		$('#hoverzoom_db').show();
		timer.start();
	}

	var disable = function(){
		if (options.hz_enable_main === 'true')
			$content.off('mouseenter', 'div[data-content-type^="image"] img, div[data-content-url*="picasa"] img', main);
		if (options.hz_enable_icon === 'true')
			$content.off('mouseenter', '.Nm img', main);
		if (options.hz_enable_link === 'true')
			$content.off('mouseenter', '.ot-anchor', main);
		
		$('#hoverzoom_db').hide();
		timer.stop();
	}

	var sortPic = function(obj, fragment){
		var wWidth = obj.width(),
			wHeight = obj.height();

		obj.fadeIn(300).find('.main').css({width: wWidth - 200, height: wHeight - 140, marginLeft: -(wWidth / 2) + 100, marginTop: -(wHeight / 2) + 50})
		.find('.wrap').css({width: wWidth - 180, height: wHeight - 190})
		.find('.inner').css('width', wWidth - 200).append(fragment).imagesLoaded(function(){
			$(this).hasClass('masonry') ? $(this).masonry('reload') : $(this).masonry({isFitWidth: true});
		});
	}

	var history = function(){
		var $page = $('#hz_history_page'),
			width = parseInt(($page.width() - 200) / options.hz_his_columns - 10),
			storage = localStorage.hz_histories !== '' && typeof localStorage.hz_histories !== 'undefined' ? localStorage.hz_histories.split('|||') : [],
			length = storage.length,
			max = length >= options.hz_his_max ? length - options.hz_his_max : 0,
			count = length > options.hz_his_max ? options.hz_his_max : length,
			width = parseInt(($page.width() - 200) / options.hz_his_columns - 10),
			fragment = document.createDocumentFragment(),
			newarr = [];

		if (storage.length > 0){
			for (var i=max; i<storage.length; i++){
				if (storage[i] !== '') newarr.push(storage[i]);
			}

			localStorage.hz_histories = newarr.join('|||');

			for (var a=newarr.length-1; a>=0; a--){
				var img = document.createElement('a'),
					item = newarr[a].split(';'),
					thumbnail = item[0].match(/googleusercontent/) && item[0].match(picasaRegex) ? item[0].replace(picasaRegex, '/w'+parseInt(width)+'/$2') : item[0];
				
				$(img).attr({href: item[0], title: item[1]}).html('<img src="'+thumbnail+'" width="'+width+'">');
				fragment.appendChild(img);
			}
		}

		count > 1 ? $page.find('small').html('<strong>'+count+'</strong> / '+options.hz_his_max + lang.set08) : $page.find('small').html('<strong>'+count+'</strong> / '+options.hz_his_max + lang.set07);

		sortPic($page, fragment);
	}

	var albumDL = function(){
		var $page = $('#hz_album_page'),
			$meta = $page.find('small'),
			data = $(this).data('url'),
			userid = data.replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$2'),
			albumid = data.replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$3'),
			width = parseInt(($page.width() - 200) / options.hz_his_columns - 10),
			fragment = document.createDocumentFragment();

		$page.fadeIn(300).find('.orange').attr('href', 'picasa://downloadfeed/?url=https://picasaweb.google.com/data/feed/back_compat/user/'+userid+'/albumid/'+albumid);

		$.getJSON('https://picasaweb.google.com/data/feed/api/user/'+userid+'?alt=json&callback=?', function(json){
			var album, appends,
				author = [json.feed.author[0].name.$t, json.feed.author[0].uri.$t];
			
			$(json.feed.entry).each(function(i, item){
				var id = item.gphoto$id.$t;

				if (id === albumid)
					album = [item.link[1].href, item.media$group.media$title.$t, item.gphoto$numphotos.$t];
			});

			if (typeof album !== 'undefined') {
				appends = parseInt(album[2] > 1) ? '<a href="'+author[1]+'">'+author[0]+'</a> &raquo; <a href="'+album[0]+'" target="_blank"><strong>'+album[1]+'</strong></a> ('+album[2]+' '+lang.set08+')' : '<a href="'+author[1]+'">'+author[0]+'</a> &raquo; <a href="'+album[0]+'" target="_blank"><strong>'+album[1]+'</strong></a> ('+album[2]+' '+lang.set07+')';
				$page.addClass('success');
			} else {
				appends = '<a href="'+author[1]+'">'+author[0]+'</a> &raquo; '+lang.al07;
				$page.removeClass('success');
			}

			$meta.html(appends);
		});

		$.ajax({
			url: 'https://picasaweb.google.com/data/feed/api/user/'+userid+'/albumid/'+albumid+'?fields=entry(media:group(media:content,media:title))&alt=json&callback=?',
			dataType: 'json',
			type: 'GET',
			beforeSend: function(){
				$meta.html('<strong>'+lang.fs04+'</strong>');
			},
			success: function(json){
				$(json.feed.entry).each(function(i, data){
					var a = data.media$group,
						title = a.media$title.$t,
						url = a.media$content[0].url,
						original = url.replace(/(.*)\//, '$1/s0/'),
						thumbnail = url.replace(/(.*)\//, '$1/w'+width+'/'),
						item = document.createElement('a');
					
					$(item).attr({href: original, title: title}).html('<img src="'+thumbnail+'" width="'+width+'">');
					fragment.appendChild(item);
				});
				sortPic($page, fragment);
			}
		});
	}

	var allPic = function(){
		var $page = $('#hz_allpic_page'),
			width = parseInt(($page.width() - 200) / options.hz_his_columns - 10),
			fragment = document.createDocumentFragment();

		$('div[data-content-type^="image"] img, div[data-content-url*="picasa"] img, .ot-anchor, .Sl img, .ru img').each(function(){
			var tag = $(this).prop('tagName');
			
			if (tag === 'IMG') {
				var img = document.createElement('a'),
					url = this.src;
				
				url = url.match(/\?sz|\/proxy/) ? this.src.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : this.src.replace(picasaRegex,'/s0/$2');
				thumbnail = url.match(/googleusercontent/) && url.match(picasaRegex) ? url.replace(picasaRegex, '/w'+width+'/$2') : url;
				
				$(img).attr('href', url).html('<img src="'+thumbnail+'" width="'+width+'">');
				fragment.appendChild(img);
			} else if (tag === 'A') {
				var img = document.createElement('a'),
					url = $(this).attr('href');
				
				if (url.match(picRegex)) {
					$(img).attr('href', url).html('<img src="'+thumbnail+'" width="'+width+'">');
					fragment.appendChild(img);
				}
			}
		});

		sortPic($page, fragment);

		var count = $page.find('.inner').children().length;
		count > 1 ? $page.find('small').html('<strong>'+count+'</strong>'+lang.set08) : $page.find('small').html('<strong>'+count+'</strong>'+lang.set07);
	}

	var copyLink = function(){
		var $page = $('#hz_copyarea'),
			$textarea = $page.find('textarea');

		if ($textarea.html() === ''){
			var	item = $(this).parent().parent().children('.wrap').children('.inner').children(),
				appends = '';
			
			item.each(function(){
				var url = this.href;
				if (url.substring(0,2) === '//') url = 'https:' + url;
				appends += url + '\n'; 
			});

			$textarea.html(appends).click(function(){
				$(this).select();
			});

			$page.fadeIn(300);
		}
	}

	var newTab = function(){
		var	item = $(this).parent().parent().children('.wrap').children('.inner').children();

		item.each(function(i){
			window.open(this.href, 'newtab'+i);
		});
	}

	var maxYT = function(){
		$content.on('click', 'div[data-content-type$="flash"]', function(){
			var width = $(this).parent().parent().width();
			if (options.hz_maxyt_aspect == 1) {
				var aspect = 3/4;
			} else if (options.hz_maxyt_aspect == 3) {
				var aspect = 10/16;
			} else {
				var aspect = 9/16;
			}

			$(this).attr('style', 'max-height: none; max-width: none; width: 100%;').children('iframe').load(function(){
				var iframe = $(this),
					button = $('<span>');

				button.addClass('a-j').attr('title', lang.set10).html(' - '+lang.set10).click(function(){
					iframe.nextAll().show().parent().attr('style', 'height: 226px;').click(function(){
						$(this).children().hide();
						$(this).attr('style', 'max-height: none; max-width: none; width: 100%;').prepend(iframe);
						button.show();
						return false;
					});

					iframe.remove();
					$(this).hide();
				});

				iframe.attr({width: width, height: width * aspect}).parentsUntil('.Ve').find('.dl').append(button);
			});
		});
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
				var $main = $('.Pk:visible');

				if (!$main.hasClass('album-in-page')){
					var button = $('<div>').attr('title', lang.al01).data('url', page).addClass('in-albumDownload hz_button blue').html(lang.al01).click(albumDL);

					$main.children().length > 1 ? $main.children().eq(1).after(button) : $main.append(button);

					$main.addClass('album-in-page');
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
					var target = $(this).find('div[data-content-type^="image"], div[data-content-url*="picasa"]'),
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
			var dWidth = $('div[id^="update"]:visible').children().width();

			$content.find('div[id^="update"]').find('div[data-content-type^="image"], div[data-content-url*="picasa"]').each(function(){
				var img = this.childNodes[0];

				if (!$(img).parent().hasClass('maxPic')){
					var url = img.src,
						$parent = $(img).parent().parent(),
						width = $parent.width() == 0 ? dWidth : $parent.width();

					$(img).attr({
						original: url,
						src: url.match(/\?sz|\/proxy/) ? url.replace(/resize_\D?=\d+/, 'resize_w='+width) : url.replace(picasaRegex,'/w'+width+'/$2')
					}).css('maxWidth', width);

					if (!$parent.hasClass('maxPicAdded')) {
						var zoom = $('<span>');
						zoom.attr({class: 'a-j', title: lang.maxpic01}).html(' - '+lang.maxpic01).click(function(){
							$(img).parent().parent().find('.maxPic').each(function(){
								$(img).attr('style', '');
								$(img).children('img').attr('src', $(img).children('img').attr('original'));
							});
							$(document).scrollTop($(img).parent().parent().parent().parent().offset().top - 100);
							$(img).remove();
						});

						$(img).parentsUntil('.Ve').find('.dl').append(zoom);
						$parent.addClass('maxPicAdded');
					}

					if (options.hz_maxpic_option === '1') {
						$parent.find('div[data-content-type^="image"], div[data-content-url*="picasa"]').addClass('maxPic');
					}

					$(img).parent().addClass('maxPic').css({height: 'auto', width: 'auto', maxHeight: 'none', maxWidth: 'none', marginBottom: 5});
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

	var update = function(manual){
		var main = function(news, log, latest){
			var $page = $('#hz_update_note');

			if (latest === true){
				$page.find('.green').hide();
				$page.find('small').html('<strong>'+version+'</strong> '+lang.update06);
			} else {
				$page.find('.green').show();
				$page.find('small').html(lang.update02+'<strong>'+news+'</strong> / '+lang.update03+'<strong>'+version+'</strong>');
			}

			$page.fadeIn(300).find('p').html(log);
		}

		$.getScript('https://sites.google.com/site/hoverzoomplus/sources/version.js', function(){
			var now = version.split('.'),
				news = hz_newVersion.version.split('.'),
				log = hz_newVersion.content[options.hz_language] || hz_newVersion.content['en-US'],
				sub = ( now.length > news.length ) ? now.length : news.length;

			for (var i=0; i<sub; i++){
				if (typeof now[i] == 'undefined') now[i] = 0;

				if (news[i] > now[i]) {
					main(hz_newVersion.version, log, false);
					break;
				} else if (now[i] > news[i]) {
					break;
				}
			}

			if (manual == true) {
				main(version, log, true);
			}
		});
	}

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

			for (var i=65; i<91; i++){
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

			$('#hz_checkupdate').click(function(){update(true)});
			
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
			$('#hoverzoom_db').mouseenter(function(){
				$(this).attr('href', $(this).data('url'));
			});
		},
		his: function(){
			var $page = $('#hz_history_page');

			$('#hz_history_open').on('click', history);
			
			$page.on('click', '.back, .close', function(){
				$page.fadeOut(300, function(){
					$(this).find('.inner').empty();
				});
			}).on('click', '.white', function(){
				$page.find('.inner').empty();
				$page.find('small').html('<strong>0</strong> / '+options.hz_his_max + lang.set07);
				localStorage.hz_histories = '';
			}).on('click', '.blue', copyLink)
			.on('click', '.green', newTab);
		},
		album: function(){
			var $page = $('#hz_album_page');

			$page.on('click', '.back, .close', function(){
				$page.fadeOut(300, function(){
					$(this).find('.inner').empty();
				});
			}).on('click', '.blue', copyLink)
			.on('click', '.green', newTab);
		},
		allPic: function(){
			var $page = $('#hz_allpic_page');

			$('#hz_allpic_dl').on('click', allPic);
			$page.on('click', '.back, .close', function(){
				$page.fadeOut(300, function(){
					$(this).find('.inner').empty();
				});
			}).on('click', '.blue', copyLink)
			.on('click', '.green', newTab);
		},
		copyarea: function(){
			var $page = $('#hz_copyarea');

			$page.on('click', '.back, .close', function(){
				$page.fadeOut(300, function(){
					$(this).find('textarea').empty();
				});
			});
		},
		update: function(){
			var $page = $('#hz_update_note');

			$page.on('click', '.back, .close, .white', function(){
				$page.fadeOut(300, function(){
					$()
				});
			});
		}
	}
	init.normal();
	if (options.hz_download === 'true') init.dl();
	if (options.hz_his === 'true') init.his();
	if (options.hz_album === 'true') init.album();
	if (options.hz_allpics === 'true') init.allPic();
	init.copyarea();
	init.update();

	enable();
	if (options.hz_update === 'true') update();
	if (options.hz_maxyt === 'true') maxYT();

	/**
	 * jQuery Masonry v2.0.111015
	 * A dynamic layout plugin for jQuery
	 * The flip-side of CSS Floats
	 * http://masonry.desandro.com
	 *
	 * Licensed under the MIT license.
	 * Copyright 2011 David DeSandro
	 */
	(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)):this.offset.x=Math.round(i.position().left),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y;if(this.options.isFitWidth){var m=0,j=this.cols;while(--j){if(this.colYs[j]!==this.offset.y)break;m++}l.width=(this.cols-m)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:l});var n=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",o=this.options.animationOptions,p;for(j=0,k=this.styleQueue.length;j<k;j++)p=this.styleQueue[j],p.$el[n](p.style,o);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g={top:c};g[this.horizontalDirection]=this.columnWidth*d+this.offset.x,this.styleQueue.push({$el:a,style:g});var h=c+a.outerHeight(!0),i=this.cols+1-f;for(e=0;e<i;e++)this.colYs[d+e]=h},resize:function(){var a=this.cols;this._getColumns(),this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){--e<=0&&this.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
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

// CSS
GM_addStyle('#hoverzoom{position:fixed;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10002;display:none;background:rgba(255,255,255,0.5);width:auto;height:auto}#hoverzoom img{display:block;margin:5px}#hoverzoom small{display:block;text-align:center;line-height:1;margin:0 5px 5px}#hz_loading{width:20px;height:20px;box-shadow:0 -2px 1px 1px #dd4839;position:absolute;pointer-events:none;z-index:10000;display:none;-moz-border-radius:50%;-webkit-border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-khtml-border-radius:50%;border-radius:50%;animation:loading infinite 0.8s linear;-moz-animation:loading infinite 0.8s linear;-webkit-animation:loading infinite 0.8s linear}#hoverzoom_db{position:fixed;top:45%;right:0;background:#f5f5f5;border:1px solid #d2d2d2;border-right:none;box-shadow:0 0 5px rgba(0,0,0,0.1);width:37px;height:37px;display:none;-moz-border-radius:2px 0 0 2px;-webkit-border-radius:2px 0 0 2px;-o-border-radius:2px 0 0 2px;-ms-border-radius:2px 0 0 2px;-khtml-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px}#hoverzoom_db:hover div{background:#666}#hoverzoom_db div{margin:6px;width:25px;height:25px;background:#aaa;-moz-border-radius:50%;-webkit-border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-khtml-border-radius:50%;border-radius:50%;-moz-transition:0.3s;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s}#hoverzoom_db div:before,#hoverzoom_db div:after{position:absolute;content:""}#hoverzoom_db div:before{width:6px;height:8px;background:#f5f5f5;top:12px;left:15px}#hoverzoom_db div:after{border-style:solid;border-width:7px 8px;border-color:#f5f5f5 transparent transparent;top:19px;left:10px}.albumDownload{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACl0lEQVQ4jX1TX2iOcRR+zvm97++d720R1mxlLlg2EjWlFhe0tkUW1tRnSGFpUlJu9blgWUmKsmRo2lbaxcpopklq0tCKopRCjWWabeb73j+/33Fh1sbHU6fOxfM853SeDiELMp5XrJSqE+CwuKQ4xiVLdNf7/v1VNv4MWup71lzb13d8an5BmU3Mey++L7Hvi/i+RAn/43hV3oqR5qXLZ2v4d9Oa7N2iSfflsHehbUdnw9cFxZUQ+1wBsAAgUGYhlsCaB6NNhRVzDFqSvSVQ6CRQfjqagi+2oavi4rl3RTV7ROyT6Ski1sQQKiRCx5dzhSsBgAVCikyTyzovttHMam6cyTlT0/mJfqRrDPAQgD/tE3ouLbYWTQIQX6+/V0rgrWEcgEDQykMYBzfGo8mdrc00ScCo0nonWbnlhsoBgEwkYNC2z2eLStkKtrtKaxCglIPIhudzo4lDJ27vTv/ehsbGxlXw41hQ7H6BgEUAz4GGxNsdARqtGChSBsacPNhefSFbQgTISK6KAQMBEBoBkxxhEDRAabZxsjuM39bV9RX9N+s/4JClFCMc7g6pwAPdFBOu+xeZHCEACV8TtCKMpe0VAoC62runtNKnjQkDzuhV7T0V77IZSBnmx7vyG0HkhkxuALrqpFIpfv0SG5gdmDiKMssGF21qW3vAiJMggcw2KAfJBFFaeeSMRfTo496nHwgAkrW9JWB5LDFyv5X2b5so6bvDnpMzV/4L7BBM2kwJ88aB+sEhBoCOrqo3ZJEE0bAyjgOStA0s5lRoAQAmY0dEpGagfnAImPUL7V3VDzhIVAT+6DCEY9YMYgIxgTWDiDI2ki5j7eaB/S/6Zw7796VA5W3rV4OkEoKj06zLELo/sP/ZX+/8E1gaKlGc2T23AAAAAElFTkSuQmCC) no-repeat;padding-left:15px;margin-left:20px}.albumDownload:before{content:"-";cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid #fff}.in-albumDownload{margin:25px 18px 25px 0;background:none}.picDownload{background:#bbb;-moz-border-radius:10px;-webkit-border-radius:10px;-o-border-radius:10px;-ms-border-radius:10px;-khtml-border-radius:10px;border-radius:10px;color:#fff !important;display:inline-block;font-size:12px;line-height:1em;height:1em;width:1em;margin:0 2px;padding:5px;text-align:center}.picStacks{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jbXRQUoDQRAF0DeTjhjExWwcdOVCxAu48/4X0EUUPYVgFonTLqYSmk7UDOKHhu6qrvq/fvFHNLjCDdqJtQNeGzwgRWAKWmwS5tjgEZ+RzJXKEhlnuMM8RSDjvWjQo8PLD8oycjqQuMQtZnGeQ2GJnaq6QR/FbTD3EV9iEbGPsiBV9+tg3coecGH0aREjPik8Kle3lVUauH13OMW5ceW7P/UIjX3Xa5x8N0LG6oCCmmDPg6ZILo9QkI3jQJOwjkb3v7DXSlqsZ8Ydd0b32wlnwNuRhP+IL+1ZLCIrPZQEAAAAAElFTkSuQmCC) no-repeat;padding-left:15px;margin-left:20px}.picStacks:before{content:"-";cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid #fff}.hz_button{position:relative;cursor:pointer;font-size:11px;font-weight:bold;height:27px;line-height:27px;margin-right:16px;min-width:54px;outline:none;padding:0 8px;text-align:center;float:left;text-decoration:none !important;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-khtml-border-radius:2px;border-radius:2px;user-select:none;-moz-user-select:none;-webkit-user-select:none}.hz_button.green{background-color:#3D9400;border:1px solid #29691D;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #3d9400), color-stop(100%, #398a00));background-image:-webkit-linear-gradient(left top, #3d9400,#398a00);background-image:-moz-linear-gradient(left top, #3d9400,#398a00);background-image:-o-linear-gradient(left top, #3d9400,#398a00);background-image:-ms-linear-gradient(left top, #3d9400,#398a00);background-image:linear-gradient(left top, #3d9400,#398a00)}.hz_button.green:hover{background-color:#368200;border:1px solid #2D6200;text-shadow:0 1px rgba(0,0,0,0.3);background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #3d9400), color-stop(100%, #368200));background-image:-webkit-linear-gradient(left top, #3d9400,#368200);background-image:-moz-linear-gradient(left top, #3d9400,#368200);background-image:-o-linear-gradient(left top, #3d9400,#368200);background-image:-ms-linear-gradient(left top, #3d9400,#368200);background-image:linear-gradient(left top, #3d9400,#368200)}.hz_button.green:focus,.hz_button.green:active{box-shadow:0 0 0 1px #fff inset}.hz_button.blue{background-color:#4D90FE;border:1px solid #3079ed;color:#fff;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #4d90fe), color-stop(100%, #4787ed));background-image:-webkit-linear-gradient(left top, #4d90fe,#4787ed);background-image:-moz-linear-gradient(left top, #4d90fe,#4787ed);background-image:-o-linear-gradient(left top, #4d90fe,#4787ed);background-image:-ms-linear-gradient(left top, #4d90fe,#4787ed);background-image:linear-gradient(left top, #4d90fe,#4787ed)}.hz_button.blue:hover{background-color:#357AE8;border:1px solid #2F5BB7;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #4d90fe), color-stop(100%, #357ae8));background-image:-webkit-linear-gradient(left top, #4d90fe,#357ae8);background-image:-moz-linear-gradient(left top, #4d90fe,#357ae8);background-image:-o-linear-gradient(left top, #4d90fe,#357ae8);background-image:-ms-linear-gradient(left top, #4d90fe,#357ae8);background-image:linear-gradient(left top, #4d90fe,#357ae8)}.hz_button.blue:focus,.hz_button.blue:active{box-shadow:0 0 0 1px #fff inset}.hz_button.white{background-color:#F5F5F5;border:1px solid rgba(0,0,0,0.1);color:#444;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #f5f5f5), color-stop(100%, #f1f1f1));background-image:-webkit-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:-o-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(left top, #f5f5f5,#f1f1f1);background-image:linear-gradient(left top, #f5f5f5,#f1f1f1)}.hz_button.white:hover{background-color:#F8F8F8;border:1px solid #c6c6c6;color:#333;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #f8f8f8), color-stop(100%, #f1f1f1));background-image:-webkit-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:-o-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(left top, #f8f8f8,#f1f1f1);background-image:linear-gradient(left top, #f8f8f8,#f1f1f1)}.hz_button.white:focus,.hz_button.white:active{box-shadow:0 1px 2px rgba(0,0,0,0.1) inset}.hz_button.orange{background-color:#D14836;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);border:1px solid transparent;background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #dd4b39), color-stop(100%, #d14836));background-image:-webkit-linear-gradient(left top, #dd4b39,#d14836);background-image:-moz-linear-gradient(left top, #dd4b39,#d14836);background-image:-o-linear-gradient(left top, #dd4b39,#d14836);background-image:-ms-linear-gradient(left top, #dd4b39,#d14836);background-image:linear-gradient(left top, #dd4b39,#d14836)}.hz_button.orange:hover{background-color:#C53727;border:1px solid #B0281A;box-shadow:0 1px 1px rgba(0,0,0,0.2);background-image:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #dd4b39), color-stop(100%, #c53727));background-image:-webkit-linear-gradient(left top, #dd4b39,#c53727);background-image:-moz-linear-gradient(left top, #dd4b39,#c53727);background-image:-o-linear-gradient(left top, #dd4b39,#c53727);background-image:-ms-linear-gradient(left top, #dd4b39,#c53727);background-image:linear-gradient(left top, #dd4b39,#c53727)}.hz_button.orange:focus,.hz_button.orange:active{box-shadow:0 0 0 1px #fff inset}#hoverzoom_fs{position:fixed;top:0;left:0;height:100%;width:100%;z-index:10010;display:none;background:rgba(0,0,0,0.8);color:#ccc;text-shadow:1px 1px 2px #000;overflow:auto}#hoverzoom_fs.zoom .ctrl .right .zoom{display:inline-block}#hoverzoom_fs.load .loading{opacity:0.8}#hoverzoom_fs.multi .ctrl .center{display:block}#hoverzoom_fs.actual .ctrl .right .zoom ul li:last-of-type{display:block}#hoverzoom_fs .back{position:absolute;top:0;left:0;width:100%;height:100%}#hoverzoom_fs .main{position:absolute}#hoverzoom_fs .main img{opacity:0;box-shadow:0 4px 16px rgba(0,0,0,0.2);max-width:0;max-height:0;display:block}#hoverzoom_fs .ctrl{position:absolute;top:0;width:100%;height:100px;margin-top:-50px;-moz-transition:margin 0.5s;-webkit-transition:margin 0.5s;-o-transition:margin 0.5s;transition:margin 0.5s;background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(0,0,0,0.8)), color-stop(50%, rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);background-image:-moz-linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);background-image:-o-linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);background-image:-ms-linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);background-image:linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%)}#hoverzoom_fs .ctrl:hover{margin-top:0}#hoverzoom_fs .ctrl div{-moz-transition:0.3s;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s}#hoverzoom_fs .ctrl div:before,#hoverzoom_fs .ctrl div:after{content:"";position:absolute}#hoverzoom_fs .ctrl .close{position:absolute;left:23px;opacity:0.3;height:50px;cursor:pointer}#hoverzoom_fs .ctrl .close:hover{opacity:1}#hoverzoom_fs .ctrl .close:before,#hoverzoom_fs .ctrl .close:after{background:#fff;height:32px;bottom:10px;width:5px}#hoverzoom_fs .ctrl .close:before{-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#hoverzoom_fs .ctrl .close:after{-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}#hoverzoom_fs .ctrl .center{position:absolute;left:50%;top:15px;width:200px;margin-left:-100px;text-align:center;display:none}#hoverzoom_fs .ctrl .center .prev,#hoverzoom_fs .ctrl .center .next{position:absolute;top:5px;cursor:pointer;opacity:0.3}#hoverzoom_fs .ctrl .center .prev:hover,#hoverzoom_fs .ctrl .center .next:hover{opacity:1}#hoverzoom_fs .ctrl .center .prev:before,#hoverzoom_fs .ctrl .center .next:before{top:50%;border-top:5px solid #fff;border-left:5px solid #fff;width:10px;height:10px}#hoverzoom_fs .ctrl .center .prev{left:0}#hoverzoom_fs .ctrl .center .prev:before{left:0;-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#hoverzoom_fs .ctrl .center .next{right:0}#hoverzoom_fs .ctrl .center .next:before{right:0;-moz-transform:rotate(135deg);-webkit-transform:rotate(135deg);-o-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}#hoverzoom_fs .ctrl .center span{font-size:20px}#hoverzoom_fs .ctrl .right{float:right;margin:15px 25px;position:relative}#hoverzoom_fs .ctrl .right a{color:#ccc;margin-left:20px;-moz-transition:0.3s;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s}#hoverzoom_fs .ctrl .right a:hover{color:#fff;text-decoration:none}#hoverzoom_fs .ctrl .right small{font-size:13px}#hoverzoom_fs .ctrl .right .zoom{margin-left:20px;padding-right:15px;display:none;position:relative;cursor:pointer}#hoverzoom_fs .ctrl .right .zoom:after{border-style:solid;border-color:#ccc transparent transparent;border-width:5px;top:6px;right:0}#hoverzoom_fs .ctrl .right .zoom:hover{color:#fff;border-top-color:#fff}#hoverzoom_fs .ctrl .right .zoom:hover ul{display:block}#hoverzoom_fs .ctrl .right .zoom ul{position:absolute;top:100%;right:0;list-style:none;color:#ccc;margin:0;padding:5px 0 0;white-space:nowrap;font-size:12px;z-index:10020;display:none}#hoverzoom_fs .ctrl .right .zoom ul li{padding:5px 10px;background:rgba(0,0,0,0.8)}#hoverzoom_fs .ctrl .right .zoom ul li:hover{background:#000;color:#fff}#hoverzoom_fs .ctrl .right .zoom ul li:last-of-type{display:none}#hoverzoom_fs .loading{background:#000;border-radius:50%;width:50px;height:50px;overflow:hidden;position:absolute;top:50%;left:50%;margin-top:-25px;margin-left:-25px;opacity:0;-moz-transition:0.3s;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s;animation:loading 2s infinite linear;-moz-animation:loading 2s infinite linear;-webkit-animation:loading 2s infinite linear}#hoverzoom_fs .loading:before,#hoverzoom_fs .loading:after{position:absolute;content:""}#hoverzoom_fs .loading:before{border:5px solid #fff;border-radius:50%;height:24px;width:24px;top:8px;left:8px}#hoverzoom_fs .loading:after{background:#000;content:"";height:12px;width:36px;top:30px;left:7px}.hz_settings{position:fixed;top:0;left:0;width:100%;height:100%;display:none}.hz_settings .back{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.75);z-index:10000}.hz_settings .wrap{display:inline-block;overflow-x:hidden;overflow-y:auto;margin:10px 0}.hz_settings .wrap img{margin-right:10px;margin-top:5px}.hz_settings .main{position:absolute;top:50%;left:50%;width:550px;height:315px;margin-top:-250px;margin-left:-285px;background:#fff;border:1px solid #acacac;border-bottom:1px solid #999;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10001;border-radius:2px;padding:20px;overflow:hidden}.hz_settings .main h3{font-size:20px;font-weight:normal;margin:0}.hz_settings .main small{color:#666}.hz_settings .main .close{background:url(https://ssl.gstatic.com/s2/oz/images/dialogx.png) no-repeat;cursor:pointer;height:15px;width:15px;position:absolute;right:16px;top:16px}.hz_settings .main .menu{background:#f5f5f5;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb;padding:0 5px 0 10px;margin:15px -20px 0}.hz_settings .main .menu li{display:inline-block;padding:7px 12px;color:#666;cursor:pointer}.hz_settings .main .menu li.current{font-weight:bold;color:#dd4839}.hz_settings .main .menu li:hover{color:#dd4839}.hz_settings .main .tabs{border-top:1px solid #ddd;position:absolute;left:0;width:1770px}.hz_settings .main .tabs div{float:left;width:550px;padding:15px 20px 0}.hz_settings .main input[type="text"]{border:1px solid #d9d9d9;padding:2px 5px;margin-right:5px;width:50px}.hz_settings .main input[type="checkbox"]{margin:0 5px 0 0}.hz_settings .main label{line-height:2;margin-right:5px;display:inline-block;min-width:120px}.hz_settings .main input + label,.hz_settings .main select + label{min-width:0}.hz_settings .main textarea{border:1px solid #ccc;font:12px Consolas, Monaco, "Courier New", Courier, monospace !important;height:265px;width:540px;padding:10px 0 0 10px;margin-top:10px;resize:none}.hz_settings .main .functions{position:absolute}.hz_settings .main .functions.top{top:20px;right:50px}.hz_settings .main .functions.bottom{bottom:20px;right:20px}.hz_settings .main .functions :last-child{margin-right:0}#hz_copyarea .back{z-index:10001}#hz_album_page .blue,#hz_album_page .green{display:none}#hz_album_page.success .blue,#hz_album_page.success .green{display:block}#hz_update_note{z-index:10001}#hz_update_note .main{height:auto}#hz_update_note .hz_button{float:right;margin-left:16px;margin-right:0}#hz_update_note ul{padding-left:15px;line-height:2}.closeButton{background:url(https://ssl.gstatic.com/ui/v1/icons/common/x_8px.png) no-repeat;cursor:pointer;height:21px;width:21px;position:absolute;right:2px;top:2px;opacity:0.4;border:1px solid transparent}.closeButton:active,.closeButton:focus{opacity:1;border:1px solid #71a7ff}.detailButton{display:inline-block;border-color:#eee transparent transparent;border-style:solid;border-width:5px;height:0;margin:0 0 -4px 5px;top:3px;width:0}.img-in-post img{max-width:100%;height:auto;margin:3px 0;display:block}.img-in-post + br{display:none}.yt-in-post{margin:3px 0}.closeYT{cursor:pointer;float:right;margin-top:-22px;font-weight:bold}.clickDetail{position:absolute;top:25px;left:0;background:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:16px 32px 16px 16px;position:absolute;z-index:1201;display:none;min-width:150px;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-khtml-border-radius:2px;border-radius:2px}.clickDetail strong{color:#000 !important}.clickDetail:before{position:absolute;top:-9px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #ccc;content:""}.clickDetail:after{position:absolute;top:-7px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #fff;content:""}@keyframes loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes loading{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(360deg)}}');
