chrome.action.onClicked.addListener((tab) => {

  if (!tab.url) return;

  const blockedProtocols = [
    "chrome://",
    "edge://",
    "about:",
    "chrome-extension://"
  ];

  if (blockedProtocols.some(p => tab.url.startsWith(p))) {
    console.warn("Cannot open this page in incognito:", tab.url);
    return;
  }

  chrome.windows.create({
    url: tab.url,
    incognito: true,
    state: "maximized"
  });

});