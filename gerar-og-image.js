const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1200, height: 630 });

  const filePath = path.resolve(__dirname, 'proposta-desenvolvimento-web.html');
  await page.goto('file:///' + filePath.replace(/\\/g, '/'));

  // Aguarda fontes e imagens carregarem
  await page.waitForLoadState('networkidle');

  // Captura apenas os primeiros 630px (área da hero)
  await page.screenshot({
    path: path.resolve(__dirname, 'og-image.png'),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });

  await browser.close();
  console.log('og-image.png gerada com sucesso.');
})();
