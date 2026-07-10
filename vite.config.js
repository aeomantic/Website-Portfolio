import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

/**
 * Injects content.js (rendered by render.js) into index.html at
 * build/dev time, so the site ships as fully static HTML.
 * Cache-busted imports keep dev in sync with content edits.
 */
function contentPlugin() {
  return {
    name: 'inject-content',
    transformIndexHtml: {
      order: 'pre', // replace placeholders before Vite's own HTML parsing
      async handler(html) {
        const bust = `?t=${Date.now()}`;
        const contentUrl = pathToFileURL(resolve('src/content.js')).href + bust;
        const renderUrl = pathToFileURL(resolve('src/render.js')).href + bust;
        const [content, { renderAll }] = await Promise.all([
          import(contentUrl),
          import(renderUrl),
        ]);
        let out = html;
        for (const [slot, markup] of Object.entries(renderAll(content))) {
          out = out.replaceAll(slot, markup);
        }
        return out;
      },
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('content.js') || file.endsWith('render.js')) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
    },
  };
}

export default defineConfig({
  plugins: [contentPlugin()],
});
