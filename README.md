#Google+ Hover Zoom

[My Google+]

[My Google+]: http://gplus.to/SkyArrow

##Download

Latest: 1.2.9.4  
Nightly: 1.3.0

<http://userscripts.org/scripts/show/106681>

##Features

* Enlarge thumbnails & profile icons on hover.
* Display picture and Youtube video links in comments directly.
* Download public albums.

##Contribution

You can help me by forking or translating.

**Localization**: <http://goo.gl/4IyfO>  

##Usages

* **Firefox**: Install [Greasemonkey] or [Scriptish] first, then install the script.
* **Chrome**: Install the script directly.
* **Safari**: Install [NinjaKit] first. then install the script.

[Greasemonkey]: https://addons.mozilla.org/firefox/addon/greasemonkey/
[Scriptish]: https://addons.mozilla.org/firefox/addon/scriptish/
[NinjaKit]: http://d.hatena.ne.jp/os0x/20100612/1276330696

##Screenshots
![Enlarge thumbnails](https://lh3.googleusercontent.com/-JEICSe4YpwA/Tj5CB0HBJ1I/AAAAAAAABYI/no36sypOX04/s0/iehweC.jpg)

![Settings](https://lh3.googleusercontent.com/-al32Pu0IP54/Tj5B6ZU3KtI/AAAAAAAABYA/4N4c5-tLbOY/s0/new_settings_page_01.png)

![History](https://lh3.googleusercontent.com/-3pKYnabk6-c/Tj5B6fxzReI/AAAAAAAABYE/nXA643DvURE/s800/new_history_page_01.jpg)

![Album download](https://lh6.googleusercontent.com/-mW5ZAj5FbN4/Tj5Ef-1opUI/AAAAAAAABYM/a9k_ebcclgw/s800/new_albums.jpg)

![Download all photos in the page](https://lh4.googleusercontent.com/-q_mfJ8pakxQ/TlB4Y62sc8I/AAAAAAAABwI/poH_4OFb1jo/s800/allpic.jpg)

##Changelog

###English

- 1.3.0
	- Rebuild Structure and improve efficient.
	- jQuery update to ver. 1.7.
	- Terminal all functions after disabled.
	- Changed loading icon and the appearance of download shortcut.
	- Fixed the problem that album download link can't be added to photo pages.
	- *Display photos as stream width*: Picture certainly fits the width of the stream.
	- *Fullscreen mode*: Update interface.
* 1.2.9.3
	- Fixed the problem of sharing Google+ Pages.
* 1.2.9
	- *Display Youtube video as stream width*.
* 1.2.8
	- *Not hide photo when hovered*.
	- *History*: Auto-delete duplicate history. (Require to clear old version history)
* 1.2.7
	- Improve efficient.
	- *Fullscreen mode*：
		- Modified Interface.
		- Right-click to skip to previous photo.
	- **Known problem**: Download links can't be added to notification area.
* 1.2.6
	* Added Japanese translation. (By [Wenli Hsu](https://plus.google.com/104770674104762685579))
* 1.2.5
	* All new interface for fullscreen mode.
	* Fixed continuos browse bug in fullscreen mode.
	* *Display photos as stream width*: 
		* Added *Only apply to the first photo of album* option.
		* Fixed the problem in notification area.
	* Added *Open all photos in new tab*.
	* *Album Download*:
		* Display link and name of uploader.
		* Display hint when errors occurred.
* 1.2.4
	* *Display photos as stream width*.
	* Fullscreen Mode: Added continuos browse.
	* Fixed the bug in auto update.
	* Fixed the bug in fullscreen mode.
* 1.2.3
	* Fixed thumbnail bug of album, history page, and detected thumbnail size more exactly.
	* If there's only one picture in post, directly display picture link.
	* Added *manually check update*.
* 1.2.2
	* Auto update.
	* Display download links below pictures.
* 1.2.1
	* Fixed the bug caused by the change of Google+ class name.
	* Fixed minor bugs.
	* Use thumbnail to display album, history and *Download all photos* page.
* 1.2.0
	* Decrease the sensitivity of *history*.
	* *Copy Links*.
* 1.1.9
	* Added more detailed *Enable* options. Users can choose whether to display contents pictures, profile icons or picture links.
	* *Download all photos*.
* 1.1.8.1
	* Fixed the bug caused by the change of Google+ class name.
	* *Show Youtube links in comments directly*:
		* Added remove button.
	* Fixed the problem of composing picture in album page.
* 1.1.8
	* *Show Youtube links in comments directly*:
		* Auto hide control bar after mouse leaved.
	* *History*:
		* Use jQuery.masonry to compose pictures, users can customize the number of columns. (2~9)
	* Fixed the bug in *Show picture links in comments directly*.
* 1.1.7
	* Auto delete history.
	* Internal CSS (prevent from external CSS blocked)
	* Language selector
* 1.1.6
	* Show Youtube links in comments directly.
	* Show the link of Picasa album.
	* Save history.
	* Change jQuery link to *https*.
* 1.1.5
	* Updated the appearance of settings, history, album page.
	* Fixed the bug of opacity option.
* 1.1.4
	* *Fullscreen Mode*: Added *Window Width* option.
* 1.1.2
	* Rebuild structure to improve efficient and fix bugs.
	* Fixed the bug in fullscreen mode in Chrome.
	* Fix *url is undefined* problem in console.
	* When the position of cursor is more than half of the width of window, use left side of page to display.
* 1.1.1
	* Shortcuts.
* 1.1.0
	* Not to move picture with mouse.
	* Album download. (only for public albums)
* 1.0.9
	* *Fullscreen Mode*: Show pictures after loaded completely.
	* Fixed the problem that download shortcut triggers repeatedly.
	* Fixed the bug in *Show picture links in comments directly*.
	* More animation!
* 1.0.8
	* Separated history page.
	* Download shortcut.
* 1.0.7
	* Fullscreen mode.
* 1.0.6
	* Display original resolution of pictures.
	* Display picture links in comments directly.
	* Not zoom when mouse hover on Youtube thumbnail.
	* Modified the appearance of settings page.
	* Not record pictures repeatedly.
* 1.0.5
	* Now it's compatible with Chrome!
	* Max records restriction.
	* Hotkeys.
* 1.0.4.1
	* Added Traditional Chinese & Simplified Chinese translation.
	* Clear history.
	* Modified the appearance of history page, use jQuery.atteeeeention.
* 1.0.4
	* Settings page
	* History
* 1.0.3
	* Improved efficiency.
* 1.0.2
	* Modified RegExp.
 
###中文

- 1.3.0
	- 重建架構並增進效能。
	- jQuery更新至1.7版。
	- 停用後停止所有功能。
	- 更改載入圖示、下載快捷鍵的外觀。
	- 修復相片頁面中，無法新增下載相簿連結的問題。
	- *以訊息串寬度顯示圖片*：使圖片寬度必定符合訊息串寬度。
	- *全螢幕模式*：介面更新。
* 1.2.9.3
	- 修復分享Google+ Pages的錯誤。
* 1.2.9
	- *以訊息串寬度顯示Youtube影片*。
* 1.2.8
	- *滑鼠移入大圖時不隱藏*。
	- *記錄*：自動刪除重複記錄。（必須先手動清除舊版的紀錄）
* 1.2.7
	- 增進效能。
	- *全螢幕模式*：
		- 變更介面。
		- 點擊右鍵可跳至上一張圖片。
	- **已知問題**：下載連結無法新增至通知區域中。
* 1.2.6
	* 新增日文語系。(By [Wenli Hsu](https://plus.google.com/104770674104762685579))
* 1.2.5
	* 全螢幕模式全新介面
	* 修復全螢幕模式連續瀏覽的混亂問題。
	* *以訊息串寬度顯示圖片*：
		* 新增*僅套用至相簿中第一張圖片*的選項。
		* 修復通知區域的錯誤。
	* 新增*開啟所有圖片於新分頁*功能。
	* *相簿下載*：
		* 顯示該上傳者的名稱與連結。
		* 錯誤時顯示提示。
* 1.2.4
	- *以訊息串寬度顯示圖片*。
	- 全螢幕模式：新增連續瀏覽功能。
	- 修復自動更新的判斷錯誤。
	- 修復全螢幕模式下，按下任何按鍵都會跳出的問題。
* 1.2.3
	- 更精確的判定相簿、記錄的縮圖大小，並解決縮圖誤判的問題。
	- 若文章內只有一張圖片，直接顯示圖片下載連結。
	- 手動更新功能。
* 1.2.2
	- 自動更新。
	- 圖片下顯示下載連結。
* 1.2.1
	- 修復因Google+ class name替換而造成部分功能無法使用的問題。
	- 修復部分bug。
	- 使用縮圖顯示相簿、記錄、下載本頁所有圖片。
* 1.2.0
	- 降低記錄的敏感度。
	- *連結拷貝*。
* 1.1.9
	- 新增更詳細的*啟用*設定，使用者可選擇是否要顯示內文圖片、個人檔案圖示、圖片連結。
	- *下載本頁所有圖片*
* 1.1.8.1
	- 修復因Google+ class name更新而造成的問題。
	- *直接顯示留言內的Youtube連結*：
		- 新增移除按鈕
	- 修復相簿頁面的照片排列問題。
* 1.1.8
	- *直接顯示留言內Youtube影片連結*：
		- 滑鼠移出後自動隱藏控制列。
	- *記錄*：
		- 使用jQuery.masonry排列圖片，使用者能自定直欄數。 (2~9)
	- 修復*直接顯示留言內圖片連結*的誤判問題
* 1.1.7
	- 自動刪除記錄。
	- 內嵌CSS。（避免外連CSS被牆擋住）
	- 語言選擇功能。
* 1.1.6
	- 直接顯示留言內的Youtube連結。
	- 顯示Picasa相簿的連結。
	- 記錄儲存。
	- 腳本內的jQuery連結改為*https*
* 1.1.5
	- 設定、記錄、相簿下載頁面更新，仿造Google+的個人檔案樣式。
	- 修復透明度選項無作用的問題。
* 1.1.4
	- *全螢幕模式*：新增*符合螢幕寬度*選項。
* 1.1.2
	- 重寫結構，增進效能並改善大圖亂飄的問題。
	- 修復Chrome上全螢幕模式的bug。
	- 修復console中*url is undefined*的問題。
	- 當滑鼠座標大於視窗寬度一半時，使用頁面左側顯示圖片。
	- 外連CSS檔案
* 1.1.1
	- 快捷鍵。
* 1.1.0
	- 圖片不隨滑鼠移動
	- 相簿下載功能（僅限公開相簿）
* 1.0.9
	- *全螢幕模式*：圖片完全載入後再顯示。
	- 修復下載快捷鍵重複觸發的問題。
	- 修復*直接顯示留言內圖片連結*載入更多留言後無法正確顯示的問題，並增進效能。
	- 擴充全螢幕模式的功能（如inspic.com可調整圖片大小）
	- 更多動畫！
* 1.0.8
	- 分離記錄頁面。
	- 下載快捷鍵。
* 1.0.7
	- 圖片完全載入後再顯示。
	- 全螢幕模式。
* 1.0.6
	- 顯示圖片原始解析度。
	- 直接顯示留言內的圖片連結。
	- 滑鼠移入Youtube影片縮圖時不放大。
	- 修改選項頁面的樣式。
	- 不重複記錄相同的圖片。
* 1.0.5
	- 現可相容於Chrome！
	- 最大記錄數限制。
	- 熱鍵功能。
* 1.0.4.1
	- 新增正體中文與簡體中文語系。
	- 記錄清除功能。
	- 修改記錄功能的外觀，使用jQuery.atteeeeention排版。
* 1.0.4
	- 選項頁面。
	- 記錄功能。
* 1.0.3
	* 增進效能。
* 1.0.2
	* 修正RegExp。