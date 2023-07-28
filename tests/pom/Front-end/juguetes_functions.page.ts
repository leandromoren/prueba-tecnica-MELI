import { Page, expect } from "@playwright/test";

export default class JuguetesParaBebes
{
    readonly page: Page

    constructor(page: Page)
    {
        this.page = page;
    }

    // Elementos del DOM
    categoriasDesplegable = () => this.page.locator("//a[contains(text(),'Categorías')]");
    juegosYJuguetesOpcion = () => this.page.locator("header.nav-header.nav-header-plus.ui-navigation-v2:nth-child(1) div.nav-bounds.nav-bounds-with-cart.nav-bounds-with-cp div.nav-area.nav-bottom-area.nav-center-area:nth-child(5) div.nav-menu ul.nav-menu-list li.nav-menu-item.nav-menu-chevron-down:nth-child(1) div.nav-categs ul.nav-categs-departments li.nav-categs-departments__list.nav-categs-departments__list--static:nth-child(12) > a:nth-child(1)");
    ceroAVeinticuatroMeses = () => this.page.locator("div.default.hub section.hub__boxed-width div.content div.splinter-row.special__grid-containerx4.special__containerx4 div.special.splinter-col-mobile-12.splinter-col-tablet-12.splinter-col-desktop-3:nth-child(1) a:nth-child(1) div:nth-child(1) div.andes-card.hub__grid-item.item__banner.banner__label.andes-card--flat.andes-card--padding-16.andes-card--animated > div.label");
    nuevoSideTitle = () => this.page.locator("//h1[contains(text(),'Nuevo')]");
    nResultados = () => this.page.locator('//*[@id="root-app"]/div/div[2]/aside/div[2]/span');
    masTardeBtn = () => this.page.getByRole('button', { name: 'Más tarde' });

    public async  validarTitulo()
    {
        await this.categoriasDesplegable().hover();
        await this.juegosYJuguetesOpcion().click();
        await this.ceroAVeinticuatroMeses().click();
        await expect(this.nuevoSideTitle()).toHaveText('Nuevo');
        await this.tiempo(3000);
        await this.masTardeBtn().click();
    }

    public async validarResultados()
    {
        await expect(this.nResultados()).toContainText("resultados");
    }

    public async tiempo(duracion)
    {
        new Promise(resolve => setTimeout(resolve, duracion));
    }
}