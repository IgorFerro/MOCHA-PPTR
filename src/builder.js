import puppeteer from "puppeteer";

export default class Builder {
    static async build(viewport){
    const launchOptions = {
        headless: true,
        slowMo: 0,
        args:[
            "--no-sandbox",
            "--disable=setui-sandbox",
            "--disable-web-security"
        ]
    };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    const extendPage = new Builder(page);
    await page.setDefaultNavigationTimeout(10000);
    }
}