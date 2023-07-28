import { Page, expect } from "@playwright/test";

export default class Perfumes
{
    readonly page: Page

    constructor(page: Page)
    {
        this.page = page;
    }

    // Elementos del DOM
    categoriasDesplegable = () => this.page.locator("//a[contains(text(),'Categorías')]");
    bellezaYCuidadoPersonal = () => this.page.locator("//a[contains(text(),'Belleza y Cuidado Personal')]");
    perfumesCategoria = () => this.page.locator("//h4[contains(text(),'Perfumes')]");
    perfumesSideTitle = () => this.page.locator("//h2[contains(text(),'Perfumes')]");
    perfumesTopTitle = () =>  this.page.locator("//b[contains(text(),'Perfumes')]");

    public async validarPerfumes()
    {
        await this.categoriasDesplegable().hover();
        await this.bellezaYCuidadoPersonal().click();
        await this.perfumesCategoria().click();
        await expect(this.perfumesSideTitle()).toHaveText('Perfumes');
        await expect(this.perfumesTopTitle()).toHaveText('Perfumes');
    }
}
