/// <reference types='codeceptjs' />
type homePage = typeof import('./pom/homePage');
type CustomHelper = import('./CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, homePage: homePage }
  interface Methods extends Playwright, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
