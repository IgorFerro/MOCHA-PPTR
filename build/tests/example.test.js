"use strict";

var _mochaSteps = require("mocha-steps");

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

    (0, _mochaSteps.step)("should load google homepage", async function () {
        await page.goto("http://zero.webappsecurity.com/");
        await page.waitAndClick("#onlineBankingMenu");
        await page.waitFor(5000);
    });
});