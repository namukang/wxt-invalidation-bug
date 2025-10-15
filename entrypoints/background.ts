export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  browser.action.onClicked.addListener(async (tab: Browser.tabs.Tab) => {
    const tabId = tab.id!;
    injectContentScript(tabId);
    injectContentScript(tabId);
  });
});

async function injectContentScript(tabId: number) {
  await browser.scripting.executeScript({
    target: { tabId },
    files: ["content-scripts/content.js"],
  });
}
