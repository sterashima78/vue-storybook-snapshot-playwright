import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    outputDir: "vrt-test/out",
    reporter: [ ['html', { open: 'never', outputFolder: "vrt-test/report" }] ],
};
export default config;