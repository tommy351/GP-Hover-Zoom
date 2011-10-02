// ==UserScript==
// @id             google_hover_zoom
// @name           Google+ Hover Zoom
// @description    Enlarge thumbnails & profile icons on mouse hover. Display pictures in comments directly. Download albums quickly.
// @author         SkyArrow
// @website        http://userscripts.org/scripts/show/106681
// @namespace      http://zespia.twbbs.org
// @version        1.2.8
// @include        https://plus.google.com/*
// ==/UserScript==

var hoverzoom = function(){
	var content = document.getElementById('content'),
		version = '1.2.8',
		picRegex = /\.(jpg|jpeg|gif|bmp|png|tiff)/i,
		picasaRegex = /\/\w\d+(-\w\d*)*\/([^\/]+)$/,
		mouse = new Array(),
		options = {
			hz_delay: parseInt(localStorage['hz_delay']) || 500,
			hz_opacity: parseInt(localStorage['hz_opacity']) || 100,
			hz_maxwidth: parseInt(localStorage['hz_maxwidth']) || 0,
			hz_download: localStorage['hz_download'] || 'false',
			hz_his: localStorage['hz_his'] || 'false',
			hz_his_max: parseInt(localStorage['hz_his_max']) || 100,
			hz_trigger: parseInt(localStorage['hz_trigger']) || 0,
			hz_direct: localStorage['hz_direct'] || 'true',
			hz_direct_max: parseInt(localStorage['hz_direct_max']) || 0,
			hz_resolution: localStorage['hz_resolution'] || 'false',
			hz_fullscreen: parseInt(localStorage['hz_fullscreen']) || 0,
			hz_dl_key: parseInt(localStorage['hz_dl_key']) || 0,
			hz_drift: localStorage['hz_drift'] || 'true',
			hz_shortcut: localStorage['hz_shortcut'] || 'false',
			hz_album: localStorage['hz_album'] || 'true',
			hz_direct_yt: localStorage['hz_direct_yt'] || 'false',
			hz_direct_ytaspect: parseInt(localStorage['hz_direct_ytaspect']) || 2,
			hz_direct_ytmaxwidth: parseInt(localStorage['hz_direct_ytmaxwidth']) || 0,
			hz_language: localStorage['hz_language'] || navigator.language,
			hz_his_columns: parseInt(localStorage['hz_his_columns']) || 5,
			hz_enable_main: localStorage['hz_enable_main'] || 'true',
			hz_enable_icon: localStorage['hz_enable_icon'] || 'true',
			hz_enable_link: localStorage['hz_enable_link'] || 'true',
			hz_allpics: localStorage['hz_allpics'] || 'false',
			hz_update: localStorage['hz_update'] || 'true',
			hz_dl_link: localStorage['hz_dl_link'] || 'true',
			hz_maxpic: localStorage['hz_maxpic'] || 'false',
			hz_maxpic_option: localStorage['hz_maxpic_option'] || '0',
			hz_hovering: localStorage['hz_hovering'] || 'false'
		},
		locale = {
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
				set25: 'Show Picture Links in Comments Directly, Max Width:',
				set26: 'Show Resolution',
				set27: 'Full Screen Mode:',
				set28: 'Download Shortcut:',
				set30: 'Not to move pictures with cursor',
				set31: 'Show Shortcuts',
				set32: 'Enable Album Download (Only for public albums)',
				set33: 'Show Youtube Links in Comments Directly, Video Aspect:',
				set34: ', Max Width:',
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
				set46: 'Not hide photo when hovered'
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
				set46: '滑鼠移入大圖時不隱藏'
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
				set02: '储存并重载页面',
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
				set46: '鼠标移入大图时不隐藏'
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
				set46: 'カーソルが画像と重ねる時、画像隠しなし'
			},
			'index': ['English', '正體中文', '简体中文', '日本語']
		},
		lang = locale[options['hz_language']] || locale['en-US'],
		fragment = document.createDocumentFragment();
		
	// Append Elements
	var hz = document.createElement('div');
	hz.id = 'hoverzoom';
	hz.style.opacity = options['hz_opacity'] / 100;
	
	var db = document.createElement('a');
	db.id = 'picbefore';
	db.innerHTML = lang['fs03'];
	
	var sc = document.createElement('div');
	sc.id = 'hz_functions';
	sc.className = 'button_style whiteButton';
	sc.innerHTML = '<a>'+lang['fs03']+'</a><a href="javascript:void(0)">'+lang['fs08']+'</a>';
	
	var fs = document.createElement('div');
	fs.id = 'hoverzoom_fs';
	fs.innerHTML = '<div class="back"></div><div class="bar"><div class="prev" title="'+lang['fs10']+'"></div><div class="info"></div><ul><li>'+lang['fs09']+'</li><li>'+lang['fs06']+'</li><li>'+lang['fs07']+'</li><li><a href="">'+lang['fs03']+'</a></li><li id="hoverzoom_fs_exit" title="'+lang['fs01']+'">'+lang['set10']+'</li></ul><div class="next" title="'+lang['fs11']+'"></div></div>';
	
	var hs = document.createElement('div');
	hs.id = 'hz_history_page';
	hs.className = 'hz_settings';
	hs.innerHTML = '<h3>'+lang['set06']+'</h3><small></small><div class="hz_set_function"><div id="hz_his_clear" class="whiteButton button_style" title="'+lang['set09']+'">'+lang['set09']+'</div><div id="hz_history_list" class="button_style blueButton" title="'+lang['al05']+'">'+lang['al05']+'</div><div id="hz_his_newtab" class="greenButton button_style" title="'+lang['al06']+'">'+lang['al06']+'</div></div><div id="hz_his_close" class="closeButton" title="'+lang['set10']+'"></div><div id="hz_history_out"><div id="hz_history"></div></div>';
	
	var al = document.createElement('div');
	al.id = 'hz_albums_page';
	al.className = 'hz_settings';
	al.innerHTML = '<h3>'+lang['al01']+'</h3><small></small><div class="hz_set_function"><div id="hz_albums_list" class="button_style blueButton" title="'+lang['al05']+'">'+lang['al05']+'</div><div id="hz_albums_newtab" class="button_style greenButton" title="'+lang['al06']+'">'+lang['al06']+'</div><a id="hz_albums_picasa" class="button_style orangeButton" title="'+lang['al04']+'">'+lang['al03']+'</a></div><div title="'+lang['set10']+'" class="closeButton" id="hz_albums_close"></div><div id="hz_albums_out"><div id="hz_albums"></div></div>';
	
	var ap = document.createElement('div');
	ap.id = 'hz_allpic_page';
	ap.className = 'hz_settings';
	ap.innerHTML = '<h3>'+lang['allpic01']+'</h3><small></small><div class="hz_set_function"><div id="hz_allpic_list" class="button_style blueButton" title="'+lang['al05']+'">'+lang['al05']+'</div><div id="hz_allpic_newtab" class="button_style greenButton" title="'+lang['al06']+'">'+lang['al06']+'</div></div><div title="'+lang['set10']+'" class="closeButton" id="hz_allpic_close"></div><div id="hz_allpic_out"><div id="hz_allpic"></div></div>';
	
	var ca = document.createElement('div');
	ca.id = 'hz_copyarea';
	ca.className = 'hz_settings';
	ca.innerHTML = '<h3>'+lang['al05']+'</h3><div title="'+lang['set10']+'" class="closeButton" id="hz_copyarea_close"></div><textarea readonly wrap="off"></textarea>';
	
	var back = document.createElement('div');
	back.id = 'hz_set_back';
	
	var set = document.createElement('div');
	set.id = 'hz_set_page';
	set.className = 'hz_settings';
	set.innerHTML = '<h3>'+lang['set01']+'</h3><small>Ver. '+version+' by <a href="https://plus.google.com/105931860008509594725/posts" target="_blank">SkyArrow</a></small><div id="hz_set_close" class="closeButton" title="'+lang['set10']+'"></div></div>';
	set.innerHTML += '<ul class="hz_menu"><li tabid="0" class="current">'+lang['set11']+'</li><li tabid="1">'+lang['set12']+'</li><li tabid="2">'+lang['set13']+'</li></ul>';
	// General Tab
	set.innerHTML += '<div class="tabP"><div class="hz_set_tab">'+
	'<label>'+lang['set36']+'</label><input id="hz_enable_main" type="checkbox"/><label for="hz_enable_main">'+lang['set37']+'</label><input id="hz_enable_icon" type="checkbox"/><label for="hz_enable_icon">'+lang['set38']+'</label><input id="hz_enable_link" type="checkbox"/><label for="hz_enable_link">'+lang['set39']+'</label><br />'+
	'<label for="hz_delay">'+lang['set14']+'</label><input id="hz_delay" type="text" maxlength="4"/><label for="hz_delay">'+lang['set15']+'</label><br />'+
	'<label for="hz_opacity">'+lang['set16']+'</label><input id="hz_opacity" type="text" maxlength="3"/><label for="hz_opacity">%</label><br />'+
	'<label for="hz_maxwidth">'+lang['set17']+'</label><input id="hz_maxwidth" type="text" maxlength="4"/><label for="hz_maxwidth">'+lang['set18']+'</label><br />'+
	'<input id="hz_drift" type="checkbox"/><label for="hz_drift">'+lang['set30']+'</label><br />'+
	'<input id="hz_resolution" type="checkbox"/><label for="hz_resolution">'+lang['set26']+'</label><br />'+
	'<input id="hz_hovering" type="checkbox"/><label for="hz_hovering">'+lang['set46']+'</label>'+
	// Shortcut Tab
	'</div><div class="hz_set_tab">'+
	'<label for="hz_trigger">'+lang['set23']+'</label><select id="hz_trigger"></select><br />'+
	'<label for="hz_dl_key">'+lang['set28']+'</label><select id="hz_dl_key"></select><br />'+
	'<label for="hz_fullscreen">'+lang['set27']+'</label><select id="hz_fullscreen"></select><br />'+
	'<input id="hz_download" type="checkbox"/><label for="hz_download">'+lang['set19']+'</label><br />'+
	'<input id="hz_shortcut" type="checkbox"/><label for="hz_shortcut">'+lang['set31']+'</label><br />'+
	'<input id="hz_dl_link" type="checkbox"/><label for="hz_dl_link">'+lang['set42']+'</label>'+
	// Others Tab
	'</div><div class="hz_set_tab">'+
	'<label for="hz_language">'+lang['set35']+'</label><select id="hz_language"></select><br />'+
	'<input id="hz_update" type="checkbox"/><label for="hz_update">'+lang['set41']+'</label> <a id="hz_checkupdate" href="javascript:void(0)">('+lang['update05']+')</a><br />'+
	'<input id="hz_maxpic" type="checkbox"/><label for="hz_maxpic">'+lang['set43']+'</label><select id="hz_maxpic_option"></select><br />'+
	'<input id="hz_direct" type="checkbox"/><label for="hz_direct">'+lang['set25']+'</label><input id="hz_direct_max" type="text" maxlength="4"/><label for="hz_direct_max">'+lang['set18']+'</label><br />'+
	'<input id="hz_direct_yt" type="checkbox"/><label for="hz_direct_yt">'+lang['set33']+'</label><select id="hz_direct_ytaspect"><option value="1">4:3</option><option value="2">16:9</option><option value="3">16:10</option></select><label for="hz_direct_ytaspect">'+lang['set34']+'</label><input id="hz_direct_ytmaxwidth" type="text" maxlength="4"/><label for="hz_direct_ytmaxwidth">'+lang['set18']+'</label><br />'+
	'<input id="hz_album" type="checkbox"/><label for="hz_album">'+lang['set32']+'</label><br />'+
	'<input id="hz_allpics" type="checkbox"/><label for="hz_allpics">'+lang['set40']+'</label><br />'+
	'<input id="hz_his" type="checkbox"/><label for="hz_his">'+lang['set20']+'</label><input id="hz_his_max" type="text" maxlength="4"/><label for="hz_his_columns">'+lang['set21']+'</label><input id="hz_his_columns" type="text" maxlength="1"/></div></div>'+
	'<div class="buttonP"><div id="hz_set_save" class="button_style greenButton" title="'+lang['set02']+'">'+lang['set02']+'</div><div title="'+lang['set03']+'" class="button_style whiteButton" id="hz_set_clear">'+lang['set03']+'</div>';
	
	fragment.appendChild(hz);
	if (options['hz_download'] === 'true') fragment.appendChild(db);
	if (options['hz_shortcut'] === 'true') fragment.appendChild(sc);
	if (options['hz_fullscreen'] > 0 || options['hz_shortcut'] === 'true') fragment.appendChild(fs);
	if (options['hz_his'] === 'true') fragment.appendChild(hs);
	if (options['hz_album'] === 'true') fragment.appendChild(al);
	if (options['hz_allpics'] === 'true') fragment.appendChild(ap);
	fragment.appendChild(ca);
	fragment.appendChild(back);
	fragment.appendChild(set);
	content.parentNode.appendChild(fragment);
	
	// Cursor Position
	document.addEventListener('mousemove', function(e){
		mouse.x = e.pageX;
		mouse.y = e.pageY;
	}, false);
	
	var main = function(){
		var tag = $(this).prop('tagName'),
			self = $(this);
		if (tag == 'IMG') {
			var url = $(this).attr('src');
			url = ( url.match(/\?sz|\/proxy/) ) ? $(this).attr('src').replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : $(this).attr('src').replace(picasaRegex,'/s0/$2');
		} else if (tag == 'A') {
			var url = $(this).attr('href');
			if (url.match(picRegex) == null) return false;
		} else {
			return false;
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
				histories = localStorage['hz_histories'].split('|||');
			for (i=0; i<histories.length; i++){
				var item = histories[i].split(';');
				if (item[0] == url){
					histories.splice(i,1);
				}
			}
			histories.push(url+';'+date);
			localStorage['hz_histories'] = histories.join('|||');
		};
		
		var resize = {
			main: function(){
				if (options['hz_drift'] === 'true') {
					(mouse.x > wWidth / 2) ? resize.left() : resize.right();
				} else {
					if ( mouse.x > wWidth / 2 ) {
						self.mousemove(function(e){resize.left(e);});
					} else {
						self.mousemove(function(e){resize.right(e);});
					}
				}
			},
			left: function(e){
				if ( options['hz_drift'] === 'true' ) {
					var x = mouse.x,
						y = mouse.y;
				} else {
					var x = e.pageX,
						y = e.pageY;
				}
				
				var picWidth = (options['hz_maxwidth'] > 0 && picWidth > options['hz_maxwidth']) ? options['hz_maxwidth'] : x - 30;
				
				$(hz).children('img').css('maxWidth', picWidth);
				( options['hz_resolution'] === 'true' ) ? $(hz).children('img').css('maxHeight', wHeight - 50) : $(hz).children('img').css('maxHeight', wHeight - 35);
				
				$(hz).offset({'top': y + 20, 'left': x - $(hz).width() - 20});
				
				if ( y + $(hz).height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $(hz).offset().top - $(hz).height() < $(document).scrollTop() + 20) ?	$(hz).offset({'top': $(document).scrollTop() + 10}) : $(hz).offset({'top': y - $(hz).height() - 20});
			},
			right: function(e){
				if ( options['hz_drift'] === 'true' ) {
					var x = mouse.x,
						y = mouse.y;
				} else {
					var x = e.pageX,
						y = e.pageY;
				}
				
				var picWidth = (options['hz_maxwidth'] > 0 && picWidth > options['hz_maxwidth']) ? options['hz_maxwidth'] : wWidth - x - 40;
				
				if ( options['hz_maxwidth'] > 0 && picWidth > options['hz_maxwidth'] )
					picWidth = options['hz_maxwidth'];
				
				$(hz).children('img').css('maxWidth', picWidth);
				( options['hz_resolution'] === 'true' ) ? $(hz).children('img').css('maxHeight', wHeight - 50) : $(hz).children('img').css('maxHeight', wHeight - 35);
				
				$(hz).offset({'top': y + 20, 'left': x + 20});
				
				if ( y + $(hz).height() + 20 > $(document).scrollTop() + wHeight - 20)
					( $(hz).offset().top - $(hz).height() < $(document).scrollTop() + 20) ?	$(hz).offset({'top': $(document).scrollTop() + 10}) : $(hz).offset({'top': y - $(hz).height() - 20});
			}
		};
		
		var shortcut = function(){
			sc.childNodes[0].href = url;
			sc.childNodes[1].addEventListener('click', fullscreen, false);
			$(sc).fadeIn(300).offset({'top': mouse.y+10, 'left': mouse.x+10}).bind({
				'mouseenter': function(){clearTimeout(timer4);},
				'mouseleave': function(){hide();}
			});
		};
		
		var keys = {
			normal: function(e){
				var code = e.keyCode || e.which;
				if ( code == options['hz_trigger'] ) {
					show();
				} else if ( code == options['hz_fullscreen'] ) {
					fullscreen();
					history();
				} else if ( code == options['hz_dl_key'] ) {
					window.open(url, 'hz_dlwindow');
					history();
				}
			}
		};
		
		var show = function(){
			hz.innerHTML = '<div class="loading"></div>';
			var hzImg = new Image();
			hzImg.src = img.src;
			hzImg.onload = function(){
				var nWidth = hzImg.naturalWidth,
					nHeight = hzImg.naturalHeight;
				$(hz).empty().append(hzImg);
				if (options['hz_resolution'] === 'true') {
					$(hz).append('<small>'+nWidth+' x '+nHeight+'</small>');
				}
				resize.main();
			};
			$(hz).fadeIn(300).offset({'top': mouse.y+20, 'left': mouse.x+20});
			$(db).attr('href', url).show();
			resize.main();
			history();
			if (options['hz_hovering'] === 'true'){
				$(hz).bind({
				'mouseenter': function(){clearTimeout(timer2);},
				'mouseleave': function(){hide();}
				});
			}
		};
		
		var hide = function(){
			$(document).unbind('keydown', keys.normal);
			clearTimeout(timer2);
			timer2 = setTimeout(function(){
				$(hz).hide().empty();
				self.unbind('mouseleave', hide);
				clearTimeout(timer1);
			}, 100);
			if (options['hz_shortcut'] === 'true') {
				clearTimeout(timer4);
				timer4 = setTimeout(function(){
					$(sc).hide().unbind('mouseenter').unbind('mouseleave');
					sc.childNodes[1].removeEventListener('click', fullscreen, false);
					self.unbind('mouseleave', hide);
					clearTimeout(timer3);
				}, 500);
			}
		};
		
		var fullscreen = function(){
			hide();
			$(sc).hide();
			var picCount = picCount = self.parent().parent().children('div[data-content-type^="image"]').length,
				info = fs.childNodes[1].childNodes[1],
				menu = fs.childNodes[1].childNodes[2],
				fImg = new Image(),
				wWidth = window.innerWidth,
				wHeight = window.innerHeight,
				scrollTop = $(document).scrollTop(),
				nWidth, nHeight, timeout, timeint;
			
			var styleSet = function(obj, arr){
				for (i=0; i<arr.length; i++){
					menu.childNodes[i].style[obj] = arr[i];
				}
			};
			
			var detect = function(){
				menu.childNodes[0].innerHTML = lang['fs09']+' ('+parseInt(fImg.offsetWidth/nWidth*100)+'%)';
				menu.childNodes[1].innerHTML = (nWidth > wWidth ) ? lang['fs06']+' ('+parseInt(wWidth/nWidth*100)+'%)' : lang['fs06']+' (100%)';
				
				if ( wWidth > nWidth && wHeight > nHeight ) {
					styleSet('display', ['none', 'none', 'none']);
				} else {
					styleSet('display', ['block', 'block', 'block']);
				}
				
				if ( menu.childNodes[1].innerHTML.replace(/\D/g,'') == menu.childNodes[2].innerHTML.replace(/\D/g, '') ) {
					menu.childNodes[2].style.display = 'none';
				} else {
					menu.childNodes[2].style.display = 'block';
				}
			};
			
			var resize = {
				screenSize: function(){
					$(fImg).css({'maxHeight': wHeight-20, 'maxWidth': wWidth-20});
					fImg.style.top = parseInt(wHeight/2-fImg.offsetHeight/2) + 'px';
					fImg.style.left = parseInt(wWidth/2-fImg.offsetWidth/2) + 'px';
					$(fs).css('padding', 10);
					if (picCount > 1) {
						info.childNodes[1].innerHTML = '<span>'+nWidth+' x '+nHeight+' ('+parseInt(fImg.offsetWidth/nWidth*100)+'%)</span>';
					} else {
						info.innerHTML = '<span>'+nWidth+' x '+nHeight+' ('+parseInt(fImg.offsetWidth/nWidth*100)+'%)</span>';
					}
					
					detect();
					styleSet('fontWeight', ['bold', 'normal', 'normal']);
				},
				pageWidth: function(){
					$(fImg).css({'maxHeight': nHeight, 'maxWidth': wWidth});
					fImg.style.top = 0;
					fImg.style.left = parseInt(wWidth/2-fImg.offsetWidth/2) + 'px';
					$(fs).css({'padding': 0, 'overflowX': 'hidden', 'overflowY': 'scroll'});
					if (picCount > 1) {
						info.childNodes[1].innerHTML = '<span>'+nWidth+' x '+nHeight+' ('+parseInt(fImg.offsetWidth/nWidth*100)+'%)</span>';
					} else {
						info.innerHTML = '<span>'+nWidth+' x '+nHeight+' ('+parseInt(fImg.offsetWidth/nWidth*100)+'%)</span>';
					}
					styleSet('fontWeight', ['normal', 'bold', 'normal']);
				},
				actualSize: function(){
					$(fImg).css({'maxHeight': 'none', 'maxWidth': 'none'});
					fImg.style.top = 0;
					fImg.style.left = 0;
					$(fs).css({'padding': 0, 'overflowX': 'scroll', 'overflowY': 'scroll'});
					if (picCount > 1) {
						info.childNodes[1].innerHTML = '<span>'+nWidth+' x '+nHeight+' (100%)</span>';
					} else {
						info.innerHTML = '<span>'+nWidth+' x '+nHeight+' (100%)</span>';
					}
					styleSet('fontWeight', ['normal', 'normal', 'bold']);
				}
			};
			
			var continous = function(){
				var now, links = new Array();
				for (var i=0; i<picCount; i++){
					links[i] = self.parent().parent().children('div[data-content-type^="image"]').eq(i).children('img').attr('src');
					if (links[i] == self.attr('src'))
						now = i;
				}
				var next = function(){
					var next = (now+1)%picCount,
						nextUrl = ( links[next].match(/\?sz|\/proxy/) ) ? links[next].replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : links[next].replace(picasaRegex,'/s0/$2');
					now = next;
					info.innerHTML = '<small><div class="loading"></div></small><span>'+lang['fs04']+'</span>';
					ctrlbar();
					
					var nextImg = new Image();
					nextImg.src = nextUrl;
					menu.childNodes[3].childNodes[0].href = nextUrl;
					nextImg.onload = function(){
						nWidth = nextImg.naturalWidth;
						nHeight = nextImg.naturalHeight;
						fImg.src = nextImg.src;
						resize.screenSize();
						info.childNodes[0].innerHTML = '<strong>'+parseInt(now+1)+'</strong> / '+picCount;
					};
				}
				var prev = function(){
					var prev = (now == 0) ? picCount-1 : (now-1)%picCount,
						prevUrl = ( links[prev].match(/\?sz|\/proxy/) ) ? links[prev].replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : links[prev].replace(picasaRegex,'/s0/$2');
					now = prev;
					info.innerHTML = '<small><div class="loading"></div></small><span>'+lang['fs04']+'</span>';
					ctrlbar();
					
					var prevImg = new Image();
					prevImg.src = prevUrl;
					menu.childNodes[3].childNodes[0].href = prevUrl;
					prevImg.onload = function(){
						nWidth = prevImg.naturalWidth;
						nHeight = prevImg.naturalHeight;
						fImg.src = prevImg.src;
						resize.screenSize();
						info.childNodes[0].innerHTML = '<strong>'+parseInt(now+1)+'</strong> / '+picCount;
					};
				}
				info.childNodes[0].innerHTML = '<strong>'+parseInt(now+1)+'</strong> / '+picCount;
				fImg.onclick = next;
				fImg.oncontextmenu = function(e){
					prev();
					e.preventDefault();
				};
				$(document).bind('keyup', function(e){
					var code = e.keyCode || e.which;
					if (code == 39) next();
					else if (code == 37) prev();
				});
				fs.childNodes[1].childNodes[0].onclick = prev;
				fs.childNodes[1].childNodes[3].onclick = next;
			}
			
			var ctrlbar = function(){
				fs.childNodes[1].style.top = 10 + 'px';
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					fs.childNodes[1].style.top = -40 + 'px';
				}, 2000);
			}
			
			var exit = function(){
				$(fs).fadeOut(300);
				$('html').css('overflowY', 'scroll');
				$(document).scrollTop(scrollTop).unbind('keydown');
				$(fs).children('img').remove();
			}
			
			fImg.src = img.src;
			info.innerHTML = '<small><div class="loading"></div></small><span>'+lang['fs04']+'</span>';
			fImg.onload = function(){
				nWidth = fImg.naturalWidth;
				nHeight = fImg.naturalHeight;
				resize.screenSize();
			};
			$(fs).append(fImg).fadeIn(300).bind({
			'mousemove': function(){
				ctrlbar();
			},
			'mouseenter': function(){
				clearTimeout(timeout);
			}
			});
			$(fs).children(':eq(1)').bind({
			'mouseenter': function(){
				timeint = setInterval(function(){clearTimeout(timeout);}, 2000);
			},
			'mouseleave': function(){
				clearInterval(timeint);
				ctrlbar();
			}
			});
			$(document).bind('keydown', function(e){
				var code = e.keyCode || e.which;
				if ( code == options['hz_fullscreen'] || code == 27 ) {
					exit();
				} else if ( code == options['hz_dl_key'] ) {
					window.open(fImg.src, 'hz_dlwindow');
				}
			});
			fs.childNodes[0].onclick = exit;
			menu.childNodes[0].onclick = resize.screenSize;
			menu.childNodes[1].onclick = resize.pageWidth;
			menu.childNodes[2].onclick = resize.actualSize;
			menu.childNodes[3].childNodes[0].href = img.src;
			menu.childNodes[4].onclick = exit;
			$('html, body').css('overflowY', 'hidden');
			
			if (picCount > 1) {
				fs.className = '';
				continous();
			} else {
				fs.className = 'normal';
			}
		}
		var img = new Image(), timer1, timer2, timer3, timer4,
			wWidth = $(window).width(),
			wHeight = $(window).height();
		img.src = url;
		self.bind('mouseleave', hide);
		
		clearTimeout(timer1);
		if (options['hz_trigger'] == 0) timer1 = setTimeout(show, options['hz_delay']);
		if(options['hz_shortcut'] === 'true') timer3 = setTimeout(shortcut, 500);
		$(document).bind('keydown', keys.normal);
	}
	
	var enable = function(){
		if ( options['hz_enable_main'] === 'true' )
			$('div[data-content-type^="image"] img').live('mouseenter', main);
		if ( options['hz_enable_icon'] === 'true' )
			$('.Nm img').live('mouseenter', main);
		if ( options['hz_enable_link'] === 'true' )
			$('.ot-anchor').live('mouseenter', main);
	};
	
	var disable = function(){
		if ( options['hz_enable_main'] === 'true' )
			$('div[data-content-type^="image"] img').die('mouseenter', main);
		if ( options['hz_enable_icon'] === 'true' )
			$('.Nm img').die('mouseenter', main);
		if ( options['hz_enable_link'] === 'true' )
			$('.ot-anchor').die('mouseenter', main);
		db.style.display = 'none';
	};
	
	var copyArea = function(obj){
		if ($('#hz_copyarea textarea').html() == '') {
			var	appends = '',
				count = obj.children().length;
			for ( var i=0; i<count; i++ ) {
				var pic = obj.children('a').eq(i).attr('href');
				if ( pic.substring(0,2) == '//' ) pic = 'https:' + pic;
				(i == count - 1) ? appends += pic : appends += pic + '\n';
			}
			$('#hz_copyarea textarea').append(appends).click(function(){
				$(this).select();
			});
			$('#hz_copyarea').fadeIn(300);
		}
	}
	
	var newTab = function(obj){
		var count = obj.children().length;
		for (var i=0; i<count; i++){
			window.open(obj.children('a').eq(i).attr('href'), 'newtab'+i);
		}
	}
	
	var sortPic = function(obj){
		var wWidth = window.innerWidth,
			wHeight = window.innerHeight;
		
		obj.parent().parent().css({'width': wWidth - 200, 'height': wHeight - 140, 'marginLeft': -(wWidth / 2 - 100), 'marginTop': -(wHeight / 2 - 50)});
		obj.css('width', wWidth - 200);
		obj.parent().css({'width': wWidth - 180, 'height': wHeight - 190});
		
		setTimeout(function(){
			obj.imagesLoaded(function(){
				(obj.hasClass('masonry')) ? obj.masonry('reload') : obj.masonry({isFitWidth: true, itemSelector: 'a'});
			});
		}, 0);
	}
	
	var history = function(){
		$('#hz_history_open').click(function(){
			$('#hz_set_back, #hz_history_page').fadeIn(300);
			
			var	histories = localStorage['hz_histories'].split('|||'),
				his = histories.length,
				max = (his >= options['hz_his_max']) ? his-options['hz_his_max'] : 0,
				count = (his > options['hz_his_max']) ? options['hz_his_max'] : his,
				picWidth = (window.innerWidth - 200) / options['hz_his_columns'] - 10,
				newhistories = new Array(),
				prepends = '';
				
			if (count > 0){
				for (var i=max; i<his; i++){
					var indiv = histories[i].split(';'),
						thumbnail = ( indiv[0].match(/googleusercontent/) && indiv[0].match(picasaRegex) ) ? indiv[0].replace(picasaRegex, '/w'+parseInt(picWidth)+'/$2') : indiv[0];
					prepends = '<a href="'+indiv[0]+'" title="'+indiv[1]+'"><img src="'+thumbnail+'" width="'+picWidth+'"/></a>' + prepends;
					newhistories.push(histories[i]);
				}
				$('#hz_history').append(prepends);
				localStorage['hz_histories'] = newhistories.join('|||');
			}
			(count > 1) ? $('#hz_history_page small').html('<strong>'+count+'</strong> / '+options['hz_his_max'] + lang['set08']) : $('#hz_history_page small').html('<strong>'+count+'</strong> / '+options['hz_his_max'] + lang['set07']);
		
			sortPic($('#hz_history'));
			
			$('#hz_history_list').click(function(){copyArea($('#hz_history'));});
			$('#hz_his_newtab').click(function(){newTab($('#hz_history'));});
			return false;
		});
		
		$('#hz_his_clear').click(function(){
			$('#hz_history').empty();
			$('#hz_history_page small').html('<strong>0</strong> / '+options['hz_his_max'] + lang['set07']);
			localStorage['hz_histories'] = '';
		});
	}
	
	var albumDL = function(){
		var	userid = $(this).attr('id').replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$2'),
			albumid = $(this).attr('id').replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$3'),
			url = 'https://picasaweb.google.com/data/feed/api/user/'+userid+'/albumid/'+albumid+'?fields=entry(media:group(media:content,media:title))&alt=json&callback=?',
			aUrl = 'https://picasaweb.google.com/data/feed/api/user/'+userid+'?alt=json&callback=?',
			picWidth = (window.innerWidth - 200) / options['hz_his_columns'] - 10,
			appends = '';
		$('#hz_set_back, #hz_albums_page').fadeIn(300);
		$('#hz_albums_picasa').attr('href', 'picasa://downloadfeed/?url=https://picasaweb.google.com/data/feed/back_compat/user/'+userid+'/albumid/'+albumid);
		
		sortPic($('#hz_albums'));
		
		$.getJSON(aUrl, function(json){
			var albumLink, albumTitle, albumCounts,
				author = json.feed.author[0].name.$t,
				authorLink = json.feed.author[0].uri.$t;
			
			$(json.feed.entry).each(function(i, item){
				var url = item.gphoto$id.$t;
					
				if ( url == albumid ) {
					albumLink = item.link[1].href;
					albumTitle = item.media$group.media$title.$t;
					albumCounts = item.gphoto$numphotos.$t;
				}
			});
			
			if (typeof albumLink != 'undefined'){
				(parseInt(albumCounts) > 1) ? $('#hz_albums_page small').html('<a href="'+authorLink+'">'+author+'</a> &raquo; <a href="'+albumLink+'" target="_blank"><strong>'+albumTitle+'</strong></a> ('+albumCounts+' '+lang['set08']+')') : $('#hz_albums_page small').html('<a href="'+authorLink+'">'+author+'</a> &raquo; <a href="'+albumLink+'" target="_blank"><strong>'+albumTitle+'</strong></a> ('+albumCounts+' '+lang['set07']+')');
				$('#hz_albums_list').click(function(){copyArea($('#hz_albums'));});
				$('#hz_albums_newtab').click(function(){newTab($('#hz_albums'));});
			} else {
				$('#hz_albums_page small').html('<a href="'+authorLink+'">'+author+'</a> &raquo; '+lang['al07']);
			}
		});
		
		$.ajax({
			url: url,
			dataType: 'json',
			type: 'GET',
			beforeSend: function(){
				$('#hz_albums_page small').html('<strong>'+lang['fs04']+'</strong>');
			},
			success: function(json){
				$(json.feed.entry).each(function(i, data){
					a=data.media$group;
					var title=a.media$title.$t,
						url=a.media$content[0].url,
						original = url.replace(/(.*)\//, '$1/s0/'),
						thumbnail = url.replace(/(.*)\//, '$1/w'+parseInt(picWidth)+'/');
						
					appends += '<a href="'+original+'" title="'+title+'"><img src="'+thumbnail+'" width="'+picWidth+'"/></a>';
				});
				$('#hz_albums').append(appends);
				sortPic($('#hz_albums'));
			}
		});
	}
	
	var allPic = function(){
		$('#hz_set_back, #hz_allpic_page').fadeIn(300);
		var appends = '',
			picWidth = parseInt((window.innerWidth - 200) / options['hz_his_columns'] - 10);
		$('div[data-content-type^="image"] img, .ot-anchor, .Sl img, .ru img').each(function(i){
			var tag = $(this).prop('tagName');
			
			if ( tag == 'IMG' ) {
				var url = $(this).attr('src');
				
				url = ( url.match(/\?sz|\/proxy/) ) ? $(this).attr('src').replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : $(this).attr('src').replace(picasaRegex,'/s0/$2');
				thumbnail = ( url.match(/googleusercontent/) && url.match(picasaRegex) ) ? url.replace(picasaRegex, '/w'+parseInt(picWidth)+'/$2') : url;
				
				appends += '<a href="'+url+'"><img src="'+thumbnail+'" width="'+picWidth+'"/></a>';
			} else if ( tag == 'A' ) {
				var url = $(this).attr('href');
				
				if ( url.match(picRegex) )
					appends += '<a href="'+url+'"><img src="'+url+'" width="'+picWidth+'"/></a>';
			}
		});
		$('#hz_allpic').append(appends);
		sortPic($('#hz_allpic'));
		
		var count = $('#hz_allpic').children().length;
		( count > 1 ) ? $('#hz_allpic_page small').html('<strong>'+count+'</strong>'+lang['set08']) : $('#hz_allpic_page small').html('<strong>'+count+'</strong>'+lang['set07']);
		$('#hz_allpic_list').click(function(){copyArea($('#hz_allpic'));});
		$('#hz_allpic_newtab').click(function(){newTab($('#hz_allpic'));});
		return false;
	};
	
	var autoUpdate = function(manual){
		var main = function(newVer, content, latest){
			$('#content').parent().append('<div id="hz_update" class="hz_settings"><h3>'+lang['update01']+'</h3><small></small><div title="'+lang['set10']+'" class="closeButton" id="hz_update_close"></div>'+content+'<a id="hz_update_install" class="button_style greenButton" href="http://userscripts.org/scripts/source/106681.user.js" title="'+lang['update01']+'">'+lang['update01']+'</a><div id="hz_update_cancel" class="button_style whiteButton" title="'+lang['update04']+'">'+lang['update04']+'</div></div>');
			
			if ( latest == true ) {
				$('#hz_update_install').remove();
				$('#hz_update small').html('<strong>'+version+'</strong> '+lang['update06']);
			} else {
				$('#hz_update small').html(lang['update02']+'<strong>'+newVer+'</strong> / '+lang['update03']+'<strong>'+version+'</strong>');
			}

			if ( manual == true ) {
				$('#hz_set_page').fadeOut(300);
			}
			$('#hz_update, #hz_set_back').fadeIn(300);
		}
		
		$.getScript('https://sites.google.com/site/hoverzoomplus/sources/version.js', function(){
			var nowVer = version.split('.'),
				newVer = hz_newVersion.version.split('.'),
				newContent = hz_newVersion.content[options['hz_language']] || hz_newVersion.content['en-US'],
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
		
		$('#hz_update_close, #hz_set_back, #hz_update_cancel').live('click', function(){
			$('#hz_set_back').fadeOut(300);
			$('div#hz_update').fadeOut(300).remove();
		});
	}

	var timer = {
		// !Todo: 通知區域內無反應
		inComment: function(){
			var commLinks = document.querySelectorAll('.zj .ot-anchor');
			for (a=0; a<commLinks.length; a++){
				var item = commLinks[a],
					url = item.href;
				if (options['hz_direct'] === 'true' && url.match(picRegex) && !$(item).hasClass('img-in-post')){
					item.innerHTML = '<img src="'+url+'"/>';
					if ( options['hz_direct_max'] > 0 ) {
						item.childNodes[0].style.maxWidth = options['hz_direct_max'] + 'px';
					}
					$(item).addClass('img-in-post');
				} else if (url.match(/youtube.com\/watch\?v=/) && !$(item).hasClass('yt-in-post') && options['hz_direct_yt'] === 'true'){
					if (options['hz_direct_ytaspect'] == 1) {
						var aspect = 3/4;
					} else if (options['hz_direct_ytaspect'] == 3) {
						var aspect = 10/16;
					} else {
						var aspect = 9/16;
					}
					var maxWidth = (options['hz_direct_ytmaxwidth'] > 0) ? options['hz_direct_ytmaxwidth'] : $(item).parent().parent().width();
						url = url.replace(/(.*)watch\?v=(.*)/, '$1v/$2').replace(/&(.*)/g, '') + '?version=3&autohide=1&feature=player_embedded';
					$(item).after('<div class="closeYT" title="'+lang['yt01']+'">X</div><object style="height: '+maxWidth*aspect+'px; width: '+maxWidth+'px"><param name="movie" value="'+url+'"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="'+url+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="'+maxWidth+'" height="'+maxWidth*aspect+'"></object>').css({'display': 'block', 'fontWeight': 'bold', 'marginRight': 11}).addClass('yt-in-post');
					$(item).next().click(function(){
						$(this).prev().attr('style', '');
						$(this).next().remove();
						$(this).remove();
					});
				}
			}
		},
		album: function(){
			var pageUrl = location.href.replace(/\?(.*)/, '');
			if (pageUrl.match(/\/photos\/\w+\/albums\/\w+/)) {
				$main = ( $('#contentPane').children().length > 1 ) ? $('#contentPane div:eq(1) div:eq(0) div:eq(0) div:eq(0) div:eq(0)') : $('#contentPane div:eq(0) div:eq(0) div:eq(0) div:eq(0) div:eq(0)');
				
				if (!$main.hasClass('album-in-post')) {
					var button = document.createElement('div');
					button.className = 'in-albumDownload button_style blueButton';
					button.id = pageUrl;
					button.title = lang['al01'];
					button.innerHTML = lang['al01'];
					button.onclick = albumDL;
					($main.children().length > 2) ? $main.children().eq(1).after(button) : $main.children().eq(0).after(button);
					$main.addClass('album-in-post');
				}
			} else {
				var picasaLink = document.getElementsByClassName('B-u-Y-j');
				for (i=0; i<picasaLink.length; i++){
					var item = picasaLink[i],
						url = item.href;
					if (url.match(/albums/) && !$(item).hasClass('album-in-post')){
						var button = document.createElement('span');
						button.className = 'a-j albumDownload';
						button.id = url;
						button.title = lang['al01'];
						button.innerHTML = lang['fs03'];
						button.onclick = albumDL;
						$(item).parentsUntil('.Ve').find('.dl').append(button);
						$(item).addClass('album-in-post');
					}
				}
			}
		},
		// !Todo: 通知區域內無反應
		picLink: function(){
			var Jm = document.getElementsByClassName('Jm');
			for (b=0; b<Jm.length; b++){
				var item = Jm[b];
				if (!$(item).hasClass('pic-in-post')){
					var target = item.querySelectorAll('div[data-content-type^="image"]'),
						count = target.length,
						appends = '';
					
					if (count > 1) {
						var picStacks = document.createElement('span');
						picStacks.className = 'a-j picStacks';
						picStacks.innerHTML = lang['fs03']+' ('+count+')';
						picStacks.onclick = function(){
							( $(this).next().is(':hidden') ) ? $(this).next().fadeIn(300).offset({'left': $(this).offset().left + 10, 'top': $(this).offset().top + 25}) : $(this).next().fadeOut(300);
						};
						$(item).parentsUntil('.Ve').find('.dl').append(picStacks);
						appends += '<div class="clickDetail"><div class="closeButton" title="'+lang['set10']+'"></div><strong>'+lang['piclink01']+'</strong><br/>';
						for (i=0; i<count; i++){
							var url = target[i].childNodes[0].src;
							url = ( url.match(/\?sz|\/proxy/) ) ? url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : url.replace(picasaRegex,'/s0/$2');
							appends += (i == 0) ? '<a class="a-j" tabindex="0" role="button" href="'+url+'" target="_blank">'+parseInt(i+1)+'</a>' : ' - <a class="a-j" tabindex="0" role="button" href="'+url+'" target="_blank">'+parseInt(i+1)+'</a>';
						}
						appends += '</div>';
					} else if (count == 1) {
						var url = target[0].childNodes[0].src;
							url = ( url.match(/\?sz|\/proxy/) ) ? url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') : url.replace(picasaRegex,'/s0/$2'); 
						appends += '<a class="a-j picStacks" tabindex="0" role="button" href="'+url+'">'+lang['fs03']+'</a>';
					}
					$(item).parentsUntil('.Ve').find('.dl').append(appends);
					if (count > 1 ) {
						picStacks.nextSibling.childNodes[0].onclick = function(){
							$(this).parent().fadeOut(300);
						};
					}
					$(item).addClass('pic-in-post');
				}
			}
		},
		maxPic: function(){
			var img = document.querySelectorAll('div[data-content-type^="image"] img');	
			for (c=0; c<img.length; c++){
				if (!$(img[c]).parent().hasClass('maxPic')){
					var pic = img[c],
						url = pic.src,
						parent = pic.parentNode.parentNode,
						width = parent.offsetWidth;
					pic.parentNode.setAttribute('style', 'max-height: none; max-width: none; width: 100%; padding-bottom: 5px;');
					pic.setAttribute('original', url);
					pic.src = (url.match(/\?sz|\/proxy/)) ? url.replace(/resize_\D?=\d+/, 'resize_w='+width) : url.replace(picasaRegex,'/w'+width+'/$2');
					pic.style.width = 'auto';
					if (!$(parent).hasClass('maxPicAdded')){
						var zoom = document.createElement('span');
						zoom.className = 'a-j';
						zoom.title = lang['maxpic01'];
						zoom.innerHTML = ' - '+lang['maxpic01'];
						zoom.onclick = function(){
							$(this).parent().parent().find('.maxPic').each(function(){
								$(this).attr('style', '');
								$(this).children('img').attr('src', $(this).children('img').attr('original'));
							});
							$(document).scrollTop($(this).parent().parent().parent().parent().offset().top - 100);
							$(this).remove();
						};
						$(pic).parentsUntil('.Ve').find('.dl').append(zoom);
						$(parent).addClass('maxPicAdded');
					}
					if (options['hz_maxpic_option'] == '1'){
						var neighbor = parent.querySelectorAll('div[data-content-type^="image"]');
						for (i=1; i<neighbor.length; i++){
							$(neighbor[i]).addClass('maxPic');
						}
					}
					$(pic).parent().addClass('maxPic');
				}
			}
		},
		main: function(){
			setTimeout(function(){
				timer.inComment();
				if (options['hz_album'] === 'true') timer.album();
				if (options['hz_dl_link'] === 'true') timer.picLink();
				if (options['hz_maxpic'] === 'true') timer.maxPic();
				timer.main();
			}, 2500);
		}
	};
		
	var	init = {
		normal: function(){
			$('#gbom').append('<li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbkp gbmtc"><a id="disable_hz" class="gbmt" href="javascript:void(0)">'+lang['menu01']+'</a></li><li class="gbkp gbmtc"><a id="hz_set_open" class="gbmt" href="javascript:void(0)">'+lang['set01']+'</a></li>');
			var keys = '<option value="0">'+lang['set24']+'</option><option value="16">Shift</option><option value="17">Ctrl</option>';
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
			'<option value="0">'+lang['set44']+'</option>'+
			'<option value="1">'+lang['set45']+'</option>'
			);
			$('#disable_hz').toggle(function(){
				disable();
				this.innerHTML = lang['menu02'];
				return false;
			}, function(){
				enable();
				this.innerHTML = lang['menu01'];
				return false;
			});
			$('#hz_set_open').click(function(){
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
				return false;
			});
			$('#hz_set_close').click(function(){
				$('#hz_set_back, #hz_set_page').fadeOut(300);
				return false;
			});
			$('.hz_menu li').click(function(){
				var id = $(this).attr('tabid'),
					current = $(this).parent().children('.current').attr('tabid'),
					tabs = $(this).parent().next().children(),
					tabHeight = tabs.eq(id).height();
				if (id > current){
					var gap = 570*(id-current);
					tabs.animate({left: '-='+gap}, 500);
				} else {
					var gap = 570*(current-id);
					tabs.animate({left: '+='+gap}, 500);
				}
				$('#hz_set_page').animate({height: tabHeight + 140}, 500);
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
				var sure = confirm(lang['set04']);
				if (sure) {
					localStorage.clear();
					location.reload();
				} else {
					return false;
				}
			});
			var style = '#picbefore{position:fixed;top:45%;background:#2d2d2d;border-radius:10px 0 0 10px;box-shadow:0 0 5px #666;color:#fff;padding:10px 10px 10px 45px;outline:none;display:none;transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-o-transition:.3s;user-select:none;-moz-user-select:none;-webkit-user-select:none;'
			switch (options['hz_language']){
				case 'zh-TW':
				case 'zh-CN':
					addStyle(style+'right:-40px}');
					break;
				case 'ja-JP':
					addStyle(style+'right:-92px}');
					break;
				case 'en-US':
				default:
					addStyle(style+'right:-72px}');
					break;
			}
			back.onclick = function(){
				$('.hz_settings, #hz_set_back').fadeOut(300);
				$('#hz_history, #hz_albums, #hz_allpic, #hz_copyarea textarea').empty();
			};
			$('#hz_copyarea_close').click(function(){
				$(this).parent().fadeOut(300);
				$('#hz_copyarea textarea').empty();
			});
			function addStyle(css){
				var head = document.getElementsByTagName('head')[0],
					style = document.createElement('style');
				style.type = 'text/css';
				style.innerHTML = css;
				head.appendChild(style);
			}
		},
		history: function(){
			$('#gbom').append('<li class="gbkp gbmtc"><a id="hz_history_open" class="gbmt" href="javascript:void(0)">'+lang['set05']+'</a></li>');
			history();
			$('#hz_his_close').click(function(){
				$('#hz_set_back, #hz_history_page').fadeOut(300);
				$('#hz_history').empty();
			});
		},
		album: function(){
			$('#hz_albums_close').click(function(){
				$('#hz_albums_page, #hz_set_back').fadeOut(300);
				$('#hz_albums').empty();
			});
		},
		allPic: function(){
			$('#gbom').append('<li class="gbkp gbmtc"><a id="hz_allpic_dl" class="gbmt" href="javascript:void(0)">'+lang['allpic01']+'</a></li>');
			$('#hz_allpic_dl').click(allPic);
			$('#hz_allpic_close').click(function(){
				$('#hz_set_back, #hz_allpic_page').fadeOut(300);
				$('#hz_allpic').empty();
			});
		}
	};
	init.normal();
	if (options['hz_his'] === 'true') init.history();
	if (options['hz_allpics'] === 'true') init.allPic();
	if (options['hz_album'] === 'true') init.album();
	if ( options['hz_update'] === 'true' ) autoUpdate();
	$('#hz_checkupdate').click(function(){autoUpdate(true);});
	enable();
	timer.main();
	
	// jQuery masonry
	(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)):this.offset.x=Math.round(i.position().left),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this._getColumns("masonry"),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y,this.options.isFitWidth&&(l.width=this.cols*this.columnWidth-this.options.gutterWidth),this.styleQueue.push({$el:this.element,style:l});var m=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",n=this.options.animationOptions,o;for(j=0,k=this.styleQueue.length;j<k;j++)o=this.styleQueue[j],o.$el[m](o.style,n);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g={top:c};g[this.horizontalDirection]=this.columnWidth*d+this.offset.x,this.styleQueue.push({$el:a,style:g});var h=c+a.outerHeight(!0),i=this.cols+1-f;for(e=0;e<i;e++)this.colYs[d+e]=h},resize:function(){var a=this.cols;this._getColumns("masonry"),this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){var b=this.find("img"),c=[],d=this,e=b.length;if(!b.length){a.call(this);return this}b.one("load error",function(){--e===0&&(e=b.length,b.one("load error",function(){--e===0&&a.call(d)}).each(function(){this.src=c.shift()}))}).each(function(){c.push(this.src),this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});return this};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
}

var hz_init = function(callback){
	var script = document.createElement('script');
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js';
	script.addEventListener('load', function(){
		var script = document.createElement('script');
		script.textContent = '(' + callback.toString() + ')();';
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
}

hz_init(hoverzoom);

GM_addStyle('#hoverzoom{position:fixed;padding:5px;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10002;display:none;background:rgba(255,255,255,0.5);width:auto;height:auto}#hoverzoom small{display:block;text-align:center;line-height:1;margin:3px 0 2px}#hoverzoom .loading{width:32px;height:32px;border-radius:50%;margin:8px;border-top:3px solid rgba(0,0,0,0.5);animation:loading infinite .8s linear;-moz-animation:loading infinite .8s linear;-webkit-animation:loading infinite .8s linear}#picbefore:hover{right:0;text-decoration:none}#picbefore:before{border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px dashed #fff;position:absolute;left:11px;top:14px;content:""}#hz_set_back{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.75);z-index:10000;box-shadow:0 0 150px #999 inset;display:none}#hz_set_page{height:322px}.hz_settings{position:fixed;width:550px;height:auto;top:50%;left:50%;margin-left:-285px;margin-top:-250px;background:#fff;border:1px solid #acacac;border-bottom:1px solid #999;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10001;padding:10px;display:none;border-radius:2px;padding:20px;overflow:hidden}.hz_settings h3{font-size:20px;font-weight:normal;margin:0}.hz_settings small{color:#666}.hz_settings p{margin-top:10px}.hz_settings input[type="text"]{border:1px solid #d9d9d9;padding:2px 5px;margin-right:5px;width:50px}.hz_settings input[type="checkbox"]{margin:0 5px 0 0}.hz_settings label{line-height:2;margin-right:5px;display:inline-block;min-width:120px}.hz_settings input+label,.hz_settings select+label{min-width:0}.hz_settings textarea{border:1px solid #ccc;font-family:Consolas,Monaco,"Courier New",Courier,monospace!important;font-size:12px;height:310px;width:540px;padding:10px 0 0 10px;margin-top:10px}.hz_settings .hz_menu{background:#f5f5f5;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb;list-style:none;margin:15px -20px;padding:0 5px 0 10px}.hz_settings .hz_menu li{padding:7px 12px;color:#666;display:inline-block;cursor:pointer}.hz_settings .hz_menu li.current{font-weight:bold;color:#dd4839}.hz_settings .hz_menu li:hover{color:#dd4839}.hz_settings .tabP :first-child{left:0}.hz_settings .tabP :nth-child(2){left:570px}.hz_settings .tabP :last-child{left:1140px}.hz_settings .buttonP{position:absolute;bottom:20px;right:20px}.hz_settings .update{line-height:2;margin:0 -20px;padding:15px 20px 0 35px}.hz_set_tab{border-top:1px solid #ddd;overflow:hidden;height:100%;position:absolute;margin-top:-15px;padding:15px 0 0 20px;width:570px;height:auto}#hz_set_save,#hz_set_clear,#hz_update_install,#hz_update_cancel{float:right;margin:0 0 0 16px}#hz_history,#hz_albums,#hz_allpic{display:block}#hz_history a,#hz_albums a,#hz_allpic a{outline:0}#hz_history_out,#hz_albums_out,#hz_allpic_out{display:inline-block;overflow-x:hidden;overflow-y:auto;margin:10px 0}#hz_history img,#hz_albums img,#hz_allpic img{margin-right:10px;margin-top:5px}.hz_set_function{position:absolute!important;right:15px;top:25px}#hoverzoom_fs{width:100%;height:100%;z-index:10000;display:none;position:fixed;top:0;left:0}#hoverzoom_fs .back{background:rgba(0,0,0,0.8);position:fixed;top:0;left:0;width:100%;height:100%;box-shadow:0 0 150px #000 inset;z-index:10000}#hoverzoom_fs.normal .bar{width:238px;margin-left:-119px}#hoverzoom_fs.normal .bar .prev,#hoverzoom_fs.normal .bar .next{display:none}#hoverzoom_fs.normal .bar .info{border:0}#hoverzoom_fs.normal .bar ul{width:178px}#hoverzoom_fs img{position:absolute;z-index:10001;user-select:none;-moz-user-select:none;-webkit-user-select:none}#hoverzoom_fs .bar{position:fixed;top:-40px;left:50%;color:#eee;width:300px;margin-left:-150px;background:rgba(0,0,0,0.4);box-shadow:0 0 4px rgba(0,0,0,0.5);line-height:1;border-radius:5px;height:30px;cursor:pointer;z-index:10002;transition:.5s;-moz-transition:.5s;-webkit-transition:.5s;-o-transition:.5s;user-select:none;-moz-user-select:none;-webkit-user-select:none}#hoverzoom_fs .bar:hover{top:10px}#hoverzoom_fs .bar:hover ul{opacity:1}#hoverzoom_fs .bar .prev{border-color:transparent rgba(255,255,255,0.4) transparent transparent;border-style:solid;border-width:10px;float:left;margin:4px 10px 4px 0;transition:.25s;-moz-transition:.25s;-webkit-transition:.25s;-o-transition:.25s}#hoverzoom_fs .bar .prev:hover{border-color:transparent rgba(255,255,255,0.8) transparent transparent}#hoverzoom_fs .bar .next{border-color:transparent transparent transparent rgba(255,255,255,0.4);border-style:solid;border-width:10px;float:right;margin:4px 0 4px 10px;transition:.25s;-moz-transition:.25s;-webkit-transition:.25s;-o-transition:.25s}#hoverzoom_fs .bar .next:hover{border-color:transparent transparent transparent rgba(255,255,255,0.8)}#hoverzoom_fs .bar .info{text-align:center;line-height:15px;border-left:1px solid rgba(0,0,0,0.1);border-right:1px solid rgba(0,0,0,0.1);float:left;line-height:30px;text-align:center;width:238px;overflow:hidden;height:30px}#hoverzoom_fs .bar .info small{display:block;position:relative;top:0;font-size:13px;transition:.5s;-moz-transition:.5s;-webkit-transition:.5s;-o-transition:.5s}#hoverzoom_fs .bar .info small+span{position:relative;display:block;top:0;transition:.5s;-moz-transition:.5s;-webkit-transition:.5s;-o-transition:.5s}#hoverzoom_fs .bar .info small .loading{width:20px;height:20px;border-radius:50%;border-top:2px solid #fff;position:relative;left:50%;margin:4px -10px;animation:loading .8s linear infinite;-moz-animation:loading .8s linear infinite;-webkit-animation:loading .8s linear infinite}#hoverzoom_fs .bar .info:hover small{top:-30px}#hoverzoom_fs .bar .info:hover small+span{top:-30px}#hoverzoom_fs .bar ul{position:absolute;top:30px;left:30px;background:rgba(0,0,0,0.5);box-shadow:0 10px 10px rgba(0,0,0,0.3);font-size:12px;list-style:none;width:240px;border-radius:0 0 5px 5px;opacity:0;margin:0;padding:0;transition:.5s;-moz-transition:.5s;-webkit-transition:.5s;-o-transition:.5s}#hoverzoom_fs .bar ul a{color:#eee;text-decoration:none;display:block;outline:0}#hoverzoom_fs .bar ul li{padding:5px 10px;border-bottom:1px solid rgba(0,0,0,0.1);transition:.25s;-moz-transition:.25s;-webkit-transition:.25s;-o-transition:.25s}#hoverzoom_fs .bar ul li:hover{background:rgba(255,255,255,0.1)}#hoverzoom_fs .bar ul li:last-child{border-radius:0 0 5px 5px;border-bottom:0}#hz_functions{position:fixed;z-index:10005;display:none;box-shadow:0 4px 16px rgba(0,0,0,0.2)}#hz_functions a{outline:0}#hz_functions a:first-child{border-right:1px solid #eee;padding-right:5px}#hz_functions a:last-child{border-left:1px solid #eee;padding-left:5px}.albumDownload{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACl0lEQVQ4jX1TX2iOcRR+zvm97++d720R1mxlLlg2EjWlFhe0tkUW1tRnSGFpUlJu9blgWUmKsmRo2lbaxcpopklq0tCKopRCjWWabeb73j+/33Fh1sbHU6fOxfM853SeDiELMp5XrJSqE+CwuKQ4xiVLdNf7/v1VNv4MWup71lzb13d8an5BmU3Mey++L7Hvi/i+RAn/43hV3oqR5qXLZ2v4d9Oa7N2iSfflsHehbUdnw9cFxZUQ+1wBsAAgUGYhlsCaB6NNhRVzDFqSvSVQ6CRQfjqagi+2oavi4rl3RTV7ROyT6Ski1sQQKiRCx5dzhSsBgAVCikyTyzovttHMam6cyTlT0/mJfqRrDPAQgD/tE3ouLbYWTQIQX6+/V0rgrWEcgEDQykMYBzfGo8mdrc00ScCo0nonWbnlhsoBgEwkYNC2z2eLStkKtrtKaxCglIPIhudzo4lDJ27vTv/ehsbGxlXw41hQ7H6BgEUAz4GGxNsdARqtGChSBsacPNhefSFbQgTISK6KAQMBEBoBkxxhEDRAabZxsjuM39bV9RX9N+s/4JClFCMc7g6pwAPdFBOu+xeZHCEACV8TtCKMpe0VAoC62runtNKnjQkDzuhV7T0V77IZSBnmx7vyG0HkhkxuALrqpFIpfv0SG5gdmDiKMssGF21qW3vAiJMggcw2KAfJBFFaeeSMRfTo496nHwgAkrW9JWB5LDFyv5X2b5so6bvDnpMzV/4L7BBM2kwJ88aB+sEhBoCOrqo3ZJEE0bAyjgOStA0s5lRoAQAmY0dEpGagfnAImPUL7V3VDzhIVAT+6DCEY9YMYgIxgTWDiDI2ki5j7eaB/S/6Zw7796VA5W3rV4OkEoKj06zLELo/sP/ZX+/8E1gaKlGc2T23AAAAAElFTkSuQmCC) no-repeat;padding-left:15px;margin-left:20px}.albumDownload:before{content:"-";cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid #fff}.in-albumDownload{margin:25px 18px 25px 0;background:0}.picDownload{background:#bbb;border-radius:10px;color:#fff!important;display:inline-block;font-size:12px;line-height:1em;height:1em;width:1em;margin:0 2px;padding:5px;text-align:center}.picStacks{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jbXRQUoDQRAF0DeTjhjExWwcdOVCxAu48/4X0EUUPYVgFonTLqYSmk7UDOKHhu6qrvq/fvFHNLjCDdqJtQNeGzwgRWAKWmwS5tjgEZ+RzJXKEhlnuMM8RSDjvWjQo8PLD8oycjqQuMQtZnGeQ2GJnaq6QR/FbTD3EV9iEbGPsiBV9+tg3coecGH0aREjPik8Kle3lVUauH13OMW5ceW7P/UIjX3Xa5x8N0LG6oCCmmDPg6ZILo9QkI3jQJOwjkb3v7DXSlqsZ8Ydd0b32wlnwNuRhP+IL+1ZLCIrPZQEAAAAAElFTkSuQmCC) no-repeat;padding-left:15px;margin-left:20px}.picStacks:before{content:"-";cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid #fff}.button_style{display:inline-block;position:relative;border-radius:2px;cursor:pointer;font-size:11px;font-weight:bold;height:27px;line-height:27px;margin-right:16px;min-width:54px;outline:0;padding:0 8px;text-align:center;float:left;text-decoration:none!important}.greenButton{background-color:#3d9400;border:1px solid #29691d;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);background-image:-webkit-gradient(linear,left top,left bottom,from(#3d9400),to(#398a00));background-image:-webkit-linear-gradient(top,#3d9400,#398a00);background-image:-moz-linear-gradient(top,#3d9400,#398a00);background-image:-ms-linear-gradient(top,#3d9400,#398a00);background-image:-o-linear-gradient(top,#3d9400,#398a00);background-image:linear-gradient(top,#3d9400,#398a00)}.greenButton:hover{background-color:#368200;border:1px solid #2d6200;text-shadow:0 1px rgba(0,0,0,0.3);background-image:-webkit-gradient(linear,left top,left bottom,from(#3d9400),to(#368200));background-image:-webkit-linear-gradient(top,#3d9400,#368200);background-image:-moz-linear-gradient(top,#3d9400,#368200);background-image:-ms-linear-gradient(top,#3d9400,#368200);background-image:-o-linear-gradient(top,#3d9400,#368200);background-image:linear-gradient(top,#3d9400,#368200)}.greenButton:focus,.greenButton:active{box-shadow:0 0 0 1px #fff inset;outline:0}.blueButton{background-color:#4d90fe;border:1px solid #3079ed;color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#4787ed));background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(top,#4d90fe,#4787ed)}.blueButton:hover{background-color:#357ae8;border:1px solid #2f5bb7;background-image:-webkit-gradient(linear,left top,left bottom,from(#4d90fe),to(#357ae8));background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(top,#4d90fe,#357ae8)}.blueButton:focus,.blueButton:active{box-shadow:0 0 0 1px #fff inset;outline:0}.whiteButton{background-color:#f5f5f5;border:1px solid rgba(0,0,0,0.1);color:#444;background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(top,#f5f5f5,#f1f1f1)}.whiteButton:hover{background-color:#f8f8f8;border:1px solid #c6c6c6;color:#333;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(top,#f8f8f8,#f1f1f1)}.whiteButton:focus,.whiteButton:active{box-shadow:0 1px 2px rgba(0,0,0,0.1) inset}.orangeButton{background-color:#d14836;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);border:1px solid transparent;background-image:-webkit-gradient(linear,left top,left bottom,from(#dd4b39),to(#d14836));background-image:-webkit-linear-gradient(top,#dd4b39,#d14836);background-image:-moz-linear-gradient(top,#dd4b39,#d14836);background-image:-ms-linear-gradient(top,#dd4b39,#d14836);background-image:-o-linear-gradient(top,#dd4b39,#d14836);background-image:linear-gradient(top,#dd4b39,#d14836)}.orangeButton:hover{background-color:#c53727;border:1px solid #b0281a;box-shadow:0 1px 1px rgba(0,0,0,0.2);background-image:-webkit-gradient(linear,left top,left bottom,from(#dd4b39),to(#c53727));background-image:-webkit-linear-gradient(top,#dd4b39,#c53727);background-image:-moz-linear-gradient(top,#dd4b39,#c53727);background-image:-ms-linear-gradient(top,#dd4b39,#c53727);background-image:-o-linear-gradient(top,#dd4b39,#c53727);background-image:linear-gradient(top,#dd4b39,#c53727)}.orangeButton:focus,.orangeButton:active{box-shadow:0 0 0 1px #fff inset;outline:0}.closeButton{background:url(https://ssl.gstatic.com/s2/tt/images/sharebox/sprite2.png) no-repeat 0 -162px;cursor:pointer;height:9px;width:9px;margin:1px;position:absolute;right:11px;top:11px}.detailButton{display:inline-block;border-color:#eee transparent transparent;border-style:solid;border-width:5px;height:0;margin:0 0 -4px 5px;top:3px;width:0}.img-in-post img{max-width:100%;height:auto;margin:3px 0;display:block}.img-in-post+br{display:none}.yt-in-post{margin:3px 0}.closeYT{cursor:pointer;float:right;margin-top:-22px;font-weight:bold}.clickDetail{position:absolute;top:25px;left:0;background:#fff;border:1px solid #ccc;border-radius:2px;box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:16px 32px 16px 16px;position:absolute;z-index:1201;display:none;min-width:150px}.clickDetail strong{color:#000!important}.clickDetail:before{position:absolute;top:-9px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #ccc;content:""}.clickDetail:after{position:absolute;top:-7px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #fff;content:""}@keyframes loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes loading{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(360deg)}}');