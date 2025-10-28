export default defineContentScript({
  // Set "registration" to runtime so this file isn't listed in manifest
  registration: "runtime",
  matches: ["<all_urls>"],
  main(ctx) {
    const id = Math.random().toString(36).slice(2);

    const isTopFrame = window.self === window.top;
    const frameTag = isTopFrame ? "" : "[INSIDE IFRAME] ";
    const color = isTopFrame ? "" : "color: blue; font-weight: bold;";

    console.log(`%c${frameTag}[${id}] hello`, color);

    ctx.onInvalidated(() => {
      console.log(
        `%c${frameTag}[${id}] %cinvalidated`,
        color,
        "color: red; font-weight: bold;",
      );
    });
  },
});
