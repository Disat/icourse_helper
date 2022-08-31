const s = document.createElement('script');
s.src = chrome.runtime.getURL('video_helper.js');
window.document.body.append(s)