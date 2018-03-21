// browser actionアイコンを押下したときのイベント  
chrome.browserAction.onClicked.addListener(function(tab) {
  // 擬似的なテキストエリアにマークダウン形式のリンク（[title](http://...)）を入力する 
  var text_area = document.createElement('textarea');
  text_area.value = "[" + tab.title + "](" + tab.url + ")";
  document.body.appendChild(text_area);

  // 擬似的なテキストエリアを選択し、クリップボードに保存する
  text_area.select();
  document.execCommand('copy');

  // 擬似的なテキストエリアを削除する
  document.body.removeChild(text_area);
});