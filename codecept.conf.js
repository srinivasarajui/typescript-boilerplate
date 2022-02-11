require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrap } = require('./presettings.ts');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://google.com',
      show: true,
      windowSize: '1200x900',
      browser: 'chromium',
    },
    CustomHelper: {
      require: './CustomHelper.ts',
    },
  },
  bootstrap,
  include: {
    loginPage: './loginPage.ts',
    homePage: './pom/homePage.ts',
  },
  mocha: {},
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './step_definitions/AuroraContractDetails/contractGridViewStepImp.ts',
      './step_definitions/AuroraRepository/auroraContractGridViewStepImp.ts',
      './step_definitions/ContractDetails/contractDetailsStepImp.ts',
      './step_definitions/ContractingParty/contractingPartyStepImp.ts',
      './step_definitions/Document/DocumentStepImp.ts',
      './step_definitions/Milestone/AddMilestone/AddMilestoneStepImp.ts',
      './step_definitions/Repository/Contract Details/AuroraContractDetailsStepImp.ts',
      './step_definitions/Repository/ContractHierarchy/LinkedContractStepImp.ts',
      './step_definitions/Repository/UploadContract/BasicInformationStepImp.ts',
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
  },
  tests: './tests/**_test.ts',
  name: 'typescript-boilerplate',
};
