describe('Example', () => {

    it('should have lamont logo', async () => {
        await waitFor(element(by.id('test_welcome_logo'))).toBeVisible().withTimeout(500);
        await expect(element(by.id('test_welcome_logo'))).toBeVisible();
    });

    it('should login fail with ma khach hang M002', async () => {
        await waitFor(element(by.id('test_tfMaKh'))).toBeVisible().withTimeout(500);
        await element(by.id('test_tfMaKh')).tap();
        await element(by.id('test_tfMaKh')).tap();
        await element(by.id('test_tfMaKh')).replaceText('M002');
        await waitFor(element(by.id('test_tfMaKh'))).toHaveText('M002').withTimeout(500);
        await element(by.id('test_btnLogin')).tap();

        await waitFor(element(by.id('test_ValidationMessage'))).toHaveText('Wrong UserID').withTimeout(2000);
    });

    it('should login success with ma khach hang M001', async () => {
        await waitFor(element(by.id('test_tfMaKh'))).toBeVisible().withTimeout(500);
        await element(by.id('test_tfMaKh')).tap();
        await element(by.id('test_tfMaKh')).tap();
        await element(by.id('test_tfMaKh')).replaceText('M001');
        await waitFor(element(by.id('test_tfMaKh'))).toHaveText('M001').withTimeout(500);
        await element(by.id('test_btnLogin')).tap();

        await expect(element(by.id('test_ProductList'))).toBeVisible();
    });

});