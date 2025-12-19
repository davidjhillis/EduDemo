const { chromium } = require('playwright');
const fs = require('fs');

async function testAngles() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3001');
  await page.waitForSelector('section');
  
  // Test different bottom percentages
  const angles = [
    { name: 'angle-40', left: '40%', right: '40%' },
    { name: 'angle-42', left: '42%', right: '42%' },
    { name: 'angle-45', left: '45%', right: '45%' },
    { name: 'angle-48', left: '48%', right: '48%' },
    { name: 'angle-50', left: '50%', right: '50%' },
  ];
  
  for (const angle of angles) {
    // Inject CSS to test different angles
    await page.addStyleTag({
      content: `
        @media (min-width: 1024px) {
          .hero-left-clip {
            clip-path: polygon(0% 0%, 50.2% 0%, ${angle.left} 100%, 0% 100%) !important;
          }
          .hero-right-clip {
            clip-path: polygon(49.8% 0%, 100% 0%, 100% 100%, ${angle.right} 100%) !important;
          }
        }
      `
    });
    
    await page.waitForTimeout(500);
    const heroSection = await page.locator('section').first();
    await heroSection.screenshot({ path: `hero-${angle.name}.png` });
    console.log(`Screenshot saved: hero-${angle.name}.png`);
    
    // Remove the style tag for next iteration
    await page.evaluate(() => {
      const style = document.querySelector('style[data-test-angle]');
      if (style) style.remove();
    });
  }
  
  await browser.close();
  console.log('\nAll angle variations saved. Compare them to find the best match.');
}

testAngles().catch(console.error);
