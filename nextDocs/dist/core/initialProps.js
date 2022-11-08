"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialProps = void 0;
const readDir_1 = require("./readDir");
function initialProps(RootElement) {
    RootElement.getInitialProps = async () => {
        const dirs = await (0, readDir_1.readDirs)("./src/pages/docs/");
        const navDir = await (0, readDir_1.readNavDir)("./src/pages/docs");
        let pageProps = { dirs: dirs, navDir: navDir };
        return pageProps;
    };
}
exports.initialProps = initialProps;
