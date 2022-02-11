Feature('Typescript Example');
Scenario('test something', async ({ I, homePage }) => {
    homePage.goToHome();
    I.printMessage('Helper message');
    I.see('Google offered in');
});
