import { Page, expect } from "@playwright/test";

export default class ClimatizacionFunctions
{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    // Elementos del DOM
    categoriasDesplegable = () => this.page.locator("//a[contains(text(),'Categorías')]");
    verMasCategorias = () => this.page.locator("//a[contains(text(),'Ver más categorías')]");
    climatizacionPage = () => this.page.locator("//h3[contains(text(),'Climatización')]");
    climatizacionSideTitle = () => this.page.locator("//h2[contains(text(),'Climatización')]");
    climatizacionTopTitle = () => this.page.locator("//b[contains(text(),'Climatización')]");

    // Metodos
    public async validarCategoriaClimatizacion()
    {
        await this.categoriasDesplegable().hover();
        await this.verMasCategorias().click();
        await this.climatizacionPage().click();
        await expect(this.climatizacionSideTitle()).toHaveText('Climatización');
        await expect(this.climatizacionTopTitle()).toHaveText('Climatización');
        await expect(this.page).not.toHaveURL('error');
    }
}