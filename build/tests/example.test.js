"use strict";

var _mochaSteps = require("mocha-steps");

var _chai = require("chai");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _mocha = require("mocha");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mocha.describe)("Mocha steps demo", function () {
    var page = void 0;

    before(async function () {
        page = await _builder2.default.build("Desktop");
    });
    after(async function () {
        await page.close();
    });

    (0, _mochaSteps.step)("should load zero bank homepage", async function () {
        await page.goto("http://zero.webappsecurity.com");
        (0, _chai.expect)((await page.isElementVisible('#signin_button'))).to.be.true;
    });

    (0, _mochaSteps.step)("display login form", async function () {
        await page.waitAndClick("signin_button");
        (0, _chai.expect)((await page.isElementVisible("login_form"))).to.be.true;
        (0, _chai.expect)((await page.isElementVisible("#signin_button"))).to.be.false;
    });

    (0, _mochaSteps.step)("should login to appliction", async function () {
        await page.waitAndType("#user_login", "username");
        await page.waitAndType("#user_password", "password");
        await page.waitAndClick(".btn-primary");
        (0, _chai.expect)((await page.isElementVisible(".nav-tabs"))).to.be.true;
    });
    (0, _mochaSteps.step)("should have 6 navbar links", async function () {
        (0, _chai.expect)((await page.getCount(".nav-tabs li"))).to.equal(6);
    });
});