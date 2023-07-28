import { Page, expect } from "@playwright/test";

export default class HerramientasElectricas
{
    readonly page: Page

    constructor(page: Page)
    {
        this.page = page;
    }

    // Elementos del DOM
    categoriasDesplegable = () => this.page.locator("//a[contains(text(),'Categorías')]");
    herramientasOpcion = ()  => this.page.locator("header.nav-header.nav-header-plus.ui-navigation-v2:nth-child(1) div.nav-bounds.nav-bounds-with-cart.nav-bounds-with-cp div.nav-area.nav-bottom-area.nav-center-area:nth-child(5) div.nav-menu ul.nav-menu-list li.nav-menu-item.nav-menu-chevron-down:nth-child(1) div.nav-categs ul.nav-categs-departments li.nav-categs-departments__list.nav-categs-departments__list--static:nth-child(7) > a:nth-child(1)");
    electricasOpcion = ()  => this.page.locator("//body/main[@id='root-app']/div[@id='hub']/div[2]/section[1]/div[2]/div[1]/div[1]/a[1]/div[1]/div[1]/div[2]");
    herramientasElectricasSideTitle = () =>  this.page.locator("//h1[contains(text(),'Herramientas Eléctricas')]");
    nResultados = () => this.page.locator('//*[@id="root-app"]/div/div[2]/aside/div[2]/span');
    masTardeBtn = () => this.page.getByRole('button', { name: 'Más tarde' });

    public async validarTitulo()
    {
        await this.categoriasDesplegable().hover();
        await this.herramientasOpcion().click();
        await this.electricasOpcion().click();
        await expect(this.herramientasElectricasSideTitle()).toHaveText('Herramientas Eléctricas');
        await this.tiempo(3000);
        await this.masTardeBtn().click();
    }

    public async validarNResultados()
    {
        await expect(this.nResultados()).toContainText("resultados");
        await expect(this.nResultados()).toHaveClass("ui-search-search-result__quantity-results shops-custom-secondary-font");
    }

    public async tiempo(duracion)
    {
        new Promise(resolve => setTimeout(resolve, duracion));
    }
}