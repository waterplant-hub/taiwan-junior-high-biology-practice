import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the biology practice site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const normalizedHtml = html.replaceAll("<!-- -->", "");
  assert.match(html, /<title>生物考古題/);
  assert.match(html, /選擇練習方式/);
  assert.match(html, /正確答案依官方參考答案；詳解與選項分析由 AI 生成/);
  assert.match(normalizedHtml, /目前共 567 題/);
  assert.match(normalizedHtml, /09<\/span><strong>演化（舊課綱）/);
  assert.match(normalizedHtml, /10<\/span><strong>生物多樣性/);
  assert.match(normalizedHtml, /11<\/span><strong>生態系與環境/);
  assert.match(html, /開始作答（10 題）/);
  assert.match(html, /所有年份/);
  assert.match(html, /108 課綱後/);
  assert.match(html, /© 2026 林顯豪｜題庫規劃、內容審訂與網站維護｜v1\.0/);
  assert.doesNotMatch(html, /版本 0\.1|版本 0\.2/);
  assert.doesNotMatch(html, /不只對答案|這題你有多確定/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});
