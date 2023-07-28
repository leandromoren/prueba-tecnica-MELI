import { Page, expect } from "@playwright/test";

export default class CelularesYSmartphones
{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    // Elementos del dom
    categoriasDesplegable = () => this.page.locator("//a[contains(text(),'Categorías')]");
    tecnologiaOpcion = () => this.page.locator("//a[contains(text(),'Tecnología')]");
    celularesYSmartphones = () => this.page.locator("//a[contains(text(),'Celulares y Smartphones')]");
    celularesYSmartphonesSideTitle = () => this.page.locator("//h2[contains(text(),'Celulares y Smartphones')]");
    celularesYSmartphonesTopTitle = () => this.page.locator("//b[contains(text(),'Celulares y Smartphones')]");

    public async validarCelularesYSmartphones()
    {
        await this.categoriasDesplegable().hover();
        await this.tecnologiaOpcion().hover();
        await this.celularesYSmartphones().click();
        await expect(this.celularesYSmartphonesSideTitle()).toHaveText('Celulares y Smartphones');
        await expect(this.celularesYSmartphonesTopTitle()).toHaveText('Celulares y Smartphones');
        await expect(this.page).not.toHaveURL('error');
    }
}