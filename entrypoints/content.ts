export default defineContentScript({
  // Set "registration" to runtime so this file isn't listed in manifest
  registration: "runtime",
  matches: ["<all_urls>"],
  main(ctx) {
    const id = Math.random().toString(36).slice(2);

    console.log(`[${id}] hello`);

    ctx.onInvalidated(() => {
      console.log(`[${id}] invalidated`);
    });
  },
});
