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
// ==/UserScript==;
var hoverzoom, init;
hoverzoom = function() {
  var al, albumDL, ap, back, ca, content, copyArea, db, disable, enable, fragment, fs, history, hs, hz, lang, locale, mouse, newTab, options, picRegex, picasaRegex, sc, set, sortPic, version;
  content = $('#content');
  version = '1.3.0';
  picRegex = /\.(jpg|jpeg|gif|bmp|png|tiff)/i;
  picasaRegex = /\/\w\d+(-\w\d*)*\/([^\/]+)$/;
  mouse = [];
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
    hz_hovering: localStorage['hz_hovering'] || 'false',
    hz_maxyt: localStorage['hz_maxyt'] || 'false',
    hz_maxyt_aspect: parseInt(localStorage['hz_maxyt_aspect']) || 2
  };
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
      set21: ' Columns:',
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
      set34: ' max width:',
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
  lang = locale[options['hz_language']] || locale['en-US'];
  fragment = document.createDocumentFragment();
  hz = sc = fs = hs = al = ap = ca = back = set = document.createElement('div');
  $(hz).attr('id', 'hoverzoom').css('opacity', options['hz_opacity'] / 100);
  db = document.createElement('a');
  $(db).attr('id', 'picbefore').html(lang['fs03']);
  $(sc).attr({
    'id': 'hz_functions',
    'class': 'button_style whiteButton'
  }).html('<a>' + lang['fs03'] + '</a><a href="javascript:void(0)">' + lang['fs08'] + '</a>');
  $(fs).attr('id', 'hoverzoom_fs').html('<div class="back"></div><div class="bar"><div class="prev" title="' + lang['fs10'] + '"></div><div class="info"></div><ul><li>' + lang['fs09'] + '</li><li>' + lang['fs06'] + '</li><li>' + lang['fs07'] + '</li><li><a href="">' + lang['fs03'] + '</a></li><li id="hoverzoom_fs_exit" title="' + lang['fs01'] + '">' + lang['set10'] + '</li></ul><div class="next" title="' + lang['fs11'] + '"></div></div>');
  $(hs).attr({
    'id': 'hz_history_page',
    'class': 'hz_settings'
  }).html('<h3>' + lang['set06'] + '</h3><small></small><div class="hz_set_function"><div id="hz_his_clear" class="whiteButton button_style" title="' + lang['set09'] + '">' + lang['set09'] + '</div><div id="hz_history_list" class="button_style blueButton" title="' + lang['al05'] + '">' + lang['al05'] + '</div><div id="hz_his_newtab" class="greenButton button_style" title="' + lang['al06'] + '">' + lang['al06'] + '</div></div><div id="hz_his_close" class="closeButton" title="' + lang['set10'] + '"></div><div id="hz_history_out"><div id="hz_history"></div></div>');
  $(al).attr({
    'id': 'hz_albums_page',
    'class': 'hz_settings'
  }).html('<h3>' + lang['al01'] + '</h3><small></small><div class="hz_set_function"><div id="hz_albums_list" class="button_style blueButton" title="' + lang['al05'] + '">' + lang['al05'] + '</div><div id="hz_albums_newtab" class="button_style greenButton" title="' + lang['al06'] + '">' + lang['al06'] + '</div><a id="hz_albums_picasa" class="button_style orangeButton" title="' + lang['al04'] + '">' + lang['al03'] + '</a></div><div title="' + lang['set10'] + '" class="closeButton" id="hz_albums_close"></div><div id="hz_albums_out"><div id="hz_albums"></div></div>');
  $(ap).attr({
    'id': 'hz_allpic_page',
    'class': 'hz_settings'
  }).html('<h3>' + lang['allpic01'] + '</h3><small></small><div class="hz_set_function"><div id="hz_allpic_list" class="button_style blueButton" title="' + lang['al05'] + '">' + lang['al05'] + '</div><div id="hz_allpic_newtab" class="button_style greenButton" title="' + lang['al06'] + '">' + lang['al06'] + '</div></div><div title="' + lang['set10'] + '" class="closeButton" id="hz_allpic_close"></div><div id="hz_allpic_out"><div id="hz_allpic"></div></div>');
  $(ca).attr({
    'id': 'hz_copyarea',
    'class': 'hz_settings'
  }).html('<h3>' + lang['al05'] + '</h3><div title="' + lang['set10'] + '" class="closeButton" id="hz_copyarea_close"></div><textarea readonly wrap="off"></textarea>');
  $(back).attr('id', 'hz_set_back');
  $(set).attr({
    'id': 'hz_set_page',
    'class': 'hz_settings'
  }).html('<h3>' + lang['set01'] + '</h3><small>Ver. ' + version + ' by <a href="https://plus.google.com/105931860008509594725/posts" target="_blank">SkyArrow</a></small><div id="hz_set_close" class="closeButton" title="' + lang['set10'] + '"></div></div>' + '<ul class="hz_menu"><li tabid="0" class="current">' + lang['set11'] + '</li><li tabid="1">' + lang['set12'] + '</li><li tabid="2">' + lang['set13'] + '</li></ul>' + '<div class="tabP"><div class="hz_set_tab">' + '<label>' + lang['set36'] + '</label><input id="hz_enable_main" type="checkbox"/><label for="hz_enable_main">' + lang['set37'] + '</label><input id="hz_enable_icon" type="checkbox"/><label for="hz_enable_icon">' + lang['set38'] + '</label><input id="hz_enable_link" type="checkbox"/><label for="hz_enable_link">' + lang['set39'] + '</label><br />' + '<label for="hz_delay">' + lang['set14'] + '</label><input id="hz_delay" type="text" maxlength="4"/><label for="hz_delay">' + lang['set15'] + '</label><br />' + '<label for="hz_opacity">' + lang['set16'] + '</label><input id="hz_opacity" type="text" maxlength="3"/><label for="hz_opacity">%</label><br />' + '<label for="hz_maxwidth">' + lang['set17'] + '</label><input id="hz_maxwidth" type="text" maxlength="4"/><label for="hz_maxwidth">' + lang['set18'] + '</label><br />' + '<input id="hz_drift" type="checkbox"/><label for="hz_drift">' + lang['set30'] + '</label><br />' + '<input id="hz_resolution" type="checkbox"/><label for="hz_resolution">' + lang['set26'] + '</label><br />' + '<input id="hz_hovering" type="checkbox"/><label for="hz_hovering">' + lang['set46'] + '</label>' + '</div><div class="hz_set_tab">' + '<label for="hz_trigger">' + lang['set23'] + '</label><select id="hz_trigger"></select><br />' + '<label for="hz_dl_key">' + lang['set28'] + '</label><select id="hz_dl_key"></select><br />' + '<label for="hz_fullscreen">' + lang['set27'] + '</label><select id="hz_fullscreen"></select><br />' + '<input id="hz_download" type="checkbox"/><label for="hz_download">' + lang['set19'] + '</label><br />' + '<input id="hz_shortcut" type="checkbox"/><label for="hz_shortcut">' + lang['set31'] + '</label><br />' + '<input id="hz_dl_link" type="checkbox"/><label for="hz_dl_link">' + lang['set42'] + '</label>' + '</div><div class="hz_set_tab">' + '<label for="hz_language">' + lang['set35'] + '</label><select id="hz_language"></select><br />' + '<input id="hz_update" type="checkbox"/><label for="hz_update">' + lang['set41'] + '</label> <a id="hz_checkupdate" href="javascript:void(0)">(' + lang['update05'] + ')</a><br />' + '<input id="hz_maxpic" type="checkbox"/><label for="hz_maxpic">' + lang['set43'] + '</label><select id="hz_maxpic_option"></select><br />' + '<input id="hz_maxyt" type="checkbox"/><label for="hz_maxyt">' + lang['set47'] + '</label><select id="hz_maxyt_aspect"><option value="1">4:3</option><option value="2">16:9</option><option value="3">16:10</option></select><br />' + '<input id="hz_direct" type="checkbox"/><label for="hz_direct">' + lang['set25'] + '</label><input id="hz_direct_max" type="text" maxlength="4"/><label for="hz_direct_max">' + lang['set18'] + '</label><br />' + '<input id="hz_direct_yt" type="checkbox"/><label for="hz_direct_yt">' + lang['set33'] + '</label><select id="hz_direct_ytaspect"><option value="1">4:3</option><option value="2">16:9</option><option value="3">16:10</option></select><label for="hz_direct_ytaspect">' + lang['set34'] + '</label><input id="hz_direct_ytmaxwidth" type="text" maxlength="4"/><label for="hz_direct_ytmaxwidth">' + lang['set18'] + '</label><br />' + '<input id="hz_album" type="checkbox"/><label for="hz_album">' + lang['set32'] + '</label><br />' + '<input id="hz_allpics" type="checkbox"/><label for="hz_allpics">' + lang['set40'] + '</label><br />' + '<input id="hz_his" type="checkbox"/><label for="hz_his">' + lang['set20'] + '</label><input id="hz_his_max" type="text" maxlength="4"/><label for="hz_his_columns">' + lang['set21'] + '</label><input id="hz_his_columns" type="text" maxlength="1"/></div></div>' + '<div class="buttonP"><div id="hz_set_save" class="button_style greenButton" title="' + lang['set02'] + '">' + lang['set02'] + '</div><div title="' + lang['set03'] + '" class="button_style whiteButton" id="hz_set_clear">' + lang['set03'] + '</div>');
  fragment.appendChild(hz);
  if (options['hz_download'] === true) {
    fragment.appendChild(db);
  }
  if (options['hz_shortcut'] === true) {
    fragment.appendChild(sc);
  }
  if (options['hz_fullscreen'] === true || options['hz_shortcut'] === true) {
    fragment.appendChild(fs);
  }
  if (options['hz_his'] === true) {
    fragment.appendChild(hs);
  }
  if (options['hz_album'] === true) {
    fragment.appendChild(al);
  }
  if (options['hz_allpics'] === true) {
    fragment.appendChild(ap);
  }
  fragment.appendChild(ca);
  fragment.appendChild(back);
  fragment.appendChild(set);
  content.append(fragment);
  $(document).bind('mousemove', function(e) {
    mouse.x = e.pageX;
    return mouse.y = e.pageY;
  }, false);
  enable = function() {
    if (options['hz_enable_main'] === true) {
      $('div[data-content-type^="image"] img').live('mouseenter', main);
    }
    if (options['hz_enable_icon'] === true) {
      $('.Nm img').live('mouseenter', main);
    }
    if (options['hz_enable_link'] === true) {
      return $('.ot-anchor').live('mouseenter', main);
    }
  };
  disable = function() {
    if (options['hz_enable_main'] === true) {
      $('div[data-content-type^="image"] img').die('mouseenter', main);
    }
    if (options['hz_enable_icon'] === true) {
      $('.Nm img').die('mouseenter', main);
    }
    if (options['hz_enable_link'] === true) {
      $('.ot-anchor').die('mouseenter', main);
    }
    return $(db).hide();
  };
  copyArea = function(obj) {
    var appends, count, textarea, _fn, _i, _len;
    textarea = $(ca).children('textarea');
    if (textarea.html() === '') {
      appends = '';
      count = obj.children().length;
      _fn = function(count) {
        var pic;
        pic = obj.children('a').eq(i).attr('href');
        if (pic.substring(0, 2) === '//') {
          pic = 'https:' + pic;
        }
        if (i === count - 1) {
          return appends += pic;
        } else {
          return appends + pic + '\n';
        }
      };
      for (_i = 0, _len = i.length; _i < _len; _i++) {
        count = i[_i];
        _fn(count);
      }
      textarea.append(appends).click(function() {
        return $(this).select();
      });
      return $(ca).fadeIn(300);
    }
  };
  newTab = function(obj) {
    var count, _i, _len, _results;
    count = obj.children().length;
    _results = [];
    for (_i = 0, _len = i.length; _i < _len; _i++) {
      count = i[_i];
      _results.push((function(count) {
        return window.open(obj.children('a').eq(i).attr('href'), 'newtab' + i);
      })(count));
    }
    return _results;
  };
  sortPic = function(obj) {
    var wHeight, wWidth;
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    obj.parent().parent().css({
      width: wWidth - 200,
      height: wHeight - 140,
      marginLeft: -(wWidth / 2 - 100),
      marginTop: -(wHeight / 2 - 50)
    });
    return setTimeout(function() {
      return obj.imagesLoaded(function() {
        if (obj.hasClass('masonry')) {
          return obj.masonry('reload');
        } else {
          return obj.masonry({
            isFitWidth: true,
            itemSelector: 'a'
          });
        }
      });
    }, 0);
  };
  history = function() {
    $('#hz_history_open').click(function() {
      var count, his, histories, max, newhistories, picWidth, prepends, _fn, _i, _len;
      histories = localStorage['hz_histories'];
      if (histories == null) {
        histories = [];
      }
      his = histories.length;
      max = his >= options['hz_his_max'] ? options['hz_his_max'] : 0;
      count = his > options['hz_his_max'] ? options['hz_his_max'] : his;
      picWidth = (window.innerWidth - 200) / options['hz_his_columns'] - 10;
      newhistories = [];
      prepends = '';
      if (count > 0) {
        _fn = function(max) {
          var indiv, thumbnail;
          indiv = histories[i].split(';');
          thumbnail = indiv[0].match(picasaRegex) ? indiv[0].replace(picasaRegex, '/w' + parseInt(picWidth) + '/$2') : indiv[0];
          prepends = '<a href="' + indiv[0] + '" title="' + indiv[1] + '"><img src="' + thumbnail + '" width="' + picWidth + '"/></a>' + prepends;
          return newhistories.push(histories[i]);
        };
        for (_i = 0, _len = i.length; _i < _len; _i++) {
          max = i[_i];
          _fn(max);
        }
        $(hs).append(prepends);
        localStorage['hz_histories'] = newhistories.join('|||');
      }
      if (count > 1) {
        $(hz).find('small').html('<strong>' + count + '</strong> / ' + options['hz_his_max'] + lang['set08']);
      } else {
        $(hz).find('small').html('<strong>' + count + '</strong> / ' + options['hz_his_max'] + lang['set07']);
      }
      $(back, hs).fadeIn(300);
      sortPic($(hs));
      $('#hz_history_list').click(function() {
        return copyArea($(hs));
      });
      $('#hz_his_newtab').click(function() {
        return newTab($(hs));
      });
      return false;
    });
    return $('#hz_his_clear').click(function() {
      $(hs).empty().find('small').html('<strong>0</strong> / ' + options['hz_his_max'] + lang['set07']);
      return localStorage['hz_histories'] = '';
    });
  };
  return albumDL = function() {};
};
init = function(callback) {
  var script;
  script = document.createElement('script');
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js';
  script.onload = function() {
    var target;
    target = document.createElement('script');
    return target.textContent = '(' + callback.toString() + ')();';
  };
  return document.body.appendChild(script);
};
init(hoverzoom);