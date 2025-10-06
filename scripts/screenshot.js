import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

const STORYBOOK_URL = "http://localhost:6006";
const SCREENSHOT_DIR = "./docs/images";

const stories = [
  {
    name: "input-states",
    url: "/iframe.html?id=design-system-atoms-input--playground",
    viewport: { width: 1200, height: 600 },
  },
  {
    name: "input-password",
    url: "/iframe.html?id=design-system-atoms-input--password-field",
    viewport: { width: 1200, height: 400 },
  },
  {
    name: "input-error",
    url: "/iframe.html?id=design-system-atoms-input--disabled-state",
    viewport: { width: 1200, height: 400 },
  },
  {
    name: "toast-success",
    url: "/iframe.html?id=design-system-atoms-toast--success-toast",
    viewport: { width: 1200, height: 400 },
  },
  {
    name: "toast-error",
    url: "/iframe.html?id=design-system-atoms-toast--error-toast",
    viewport: { width: 1200, height: 400 },
  },
  {
    name: "sidebar-closed",
    url: "/iframe.html?id=design-system-molecules-sidebar--basic-sidebar",
    viewport: { width: 1200, height: 600 },
  },
  {
    name: "sidebar-open",
    url: "/iframe.html?id=design-system-molecules-sidebar--always-visible",
    viewport: { width: 1200, height: 600 },
  },
];

async function takeScreenshots() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  for (const story of stories) {
    try {
      console.log(`Taking screenshot: ${story.name}`);

      await page.setViewport(story.viewport);
      await page.goto(`${STORYBOOK_URL}${story.url}`, {
        waitUntil: "networkidle0",
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const screenshotPath = path.join(SCREENSHOT_DIR, `${story.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
        type: "png",
      });

      console.log(`✅ Screenshot saved: ${screenshotPath}`);
    } catch (error) {
      console.error(`❌ Error taking screenshot for ${story.name}:`, error);
    }
  }

  await browser.close();
  console.log("🎉 All screenshots completed!");
}

takeScreenshots().catch(console.error);
