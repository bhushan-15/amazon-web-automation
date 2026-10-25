
import { defineConfig, devices } from '@playwright/test';

const allBrowsers = process.env.BROWSERS === 'all';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 1,
  timeout: Number(process.env.TEST_TIMEOUT || 45_000),
  expect: { timeout: 10_000 },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }]
  ],

  outputDir: 'reports/test-results',

  use: {
    baseURL: process.env.BASE_URL || 'https://www.amazon.in',
    headless: process.env.HEADED !== 'true',
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    ...(allBrowsers ? [
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] }
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] }
      }
    ] : [])
  ]
});
