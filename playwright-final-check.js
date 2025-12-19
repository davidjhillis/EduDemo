const { chromium } = require('playwright');

async function finalCheck() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3001');
  await page.waitForSelector('section');
  
  // Take full page screenshot
  await page.screenshot({ path: 'final-hero-check.png', fullPage: false });
  
  // Take hero section screenshot
  const heroSection = await page.locator('section').first();
  await heroSection.screenshot({ path: 'final-hero-section.png' });
  
  console.log('Screenshots saved:');
  console.log('- final-hero-check.png (full viewport)');
  console.log('- final-hero-section.png (hero section only)');
  console.log('\nBrowser will stay open for 10 seconds for manual inspection...');
  
  await page.waitForTimeout(10000);
  await browser.close();
}

finalCheck().catch(console.error);


