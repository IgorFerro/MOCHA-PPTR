import {step} from "mocha-steps";

import Page from "../builder";
import { describe } from "mocha";

describe("Mocha steps demo", ()=>{
    let page;

    before(async()=>{
        page= await Page.build("Desktop");
    });
    after(async ()=>{
        await page.close();
    })

    step("should load google homepage", async () => {
       await page.goto("http://zero.webappsecurity.com/");
       await page.waitAndClick("#onlineBankingMenu");
       await page.waitFor(5000); 
    })
})