const { chromium } = require('playwright');

async function testHeroSection() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Navigate to the page
  await page.goto('http://localhost:3001');
  
  // Wait for the hero section to load
  await page.waitForSelector('section');
  
  // Take screenshot of the hero section
  const heroSection = await page.locator('section').first();
  await heroSection.screenshot({ path: 'hero-screenshot.png', fullPage: false });
  
  console.log('Screenshot saved as hero-screenshot.png');
  
  // Keep browser open for inspection
  await page.waitForTimeout(5000);
  
  await browser.close();
}

testHeroSection().catch(console.error);


