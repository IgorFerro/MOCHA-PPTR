import puppeteer from "puppeteer";

export default class Builder {
  static async build(viewport) {
    const launchOptions = {
      headless: true,
      slowMo: 0,
      args: [
        "--no-sandbox",
        "--disable=setui-sandbox",
        "--disable-web-security"
      ]
    };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    const extendPage = new Builder(page);
    await page.setDefaultNavigationTimeout(10000);

    switch (viewport) {
      case "Mobile":
        const mobileViewport = puppeteer.devices["iPhone X"];
        await page.emulate(mobileViewport);
        break;
      case "Tablet":
        const tabletViewport = puppeteer.devices["ipad landscape"];
        await page.emulate(tabletViewport);
        break;
      case "Desktop":
        await page.setViewport({ width: 800, height: 600 });
        break;
      default:
        throw new Error("Supported devices are ony Mobile | Tablet | Desktop");
    }
      return new Proxy(extendPage, {
          get: function(_target, property){
              return extendPage[property] || browser[property] || page[property];
          }
      });  
  }
    constructor(page){
        this.page=page;
    }
    
    async waitAndClick(selector){
        await this.page.waitAndClick(selector);
        await this.page.click(selector);
    }
   
    async waitAndType(selector, text){
        await this.page.waitForSelector(selector);
        await this.page.type(selector,text);

    }
}
