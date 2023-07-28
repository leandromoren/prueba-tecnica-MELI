import { Page, expect } from "@playwright/test";

export default class UbicacionCapitalFederal
{
    readonly page: Page

    constructor(page: Page) 
    {
        this.page = page;
    }

    categoriasDesplegable = () => this.page.locator("//a[contains(text(),'Categorías')]");
    tecnologiaOpcion = () => this.page.locator("header.nav-header.nav-header-plus.ui-navigation-v2:nth-child(1) div.nav-bounds.nav-bounds-with-cart.nav-bounds-with-cp div.nav-area.nav-bottom-area.nav-center-area:nth-child(5) div.nav-menu ul.nav-menu-list li.nav-menu-item:nth-child(1) div.nav-categs ul.nav-categs-departments li.nav-categs-departments__list.nav-categs-departments__list--dynamic:nth-child(4) > a:nth-child(1)");
    televisoresOpcion = () => this.page.locator("//a[contains(text(),'Televisores')]");
    busquedaMasDeseada = () => this.page.getByRole('link', { name: '1º MÁS DESEADA Primera imagen para búsqueda de smart tv 43 Segunda imagen para búsqueda de smart tv 43 Tercera imagen para búsqueda de smart tv 43 Smart tv 43' })
    capitalFederalFiltro =  () => this.page.locator("#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords.shops__search-main > aside > section > div:nth-child(15) > ul > li:nth-child(1) > a > span.ui-search-filter-name.shops-custom-secondary-font");
    tituloProductoEnTablaDeProductos = () => this.page.locator('a').filter({ hasText: 'Smart Tv Hyundai 43 Fhd Hyled-43fhd7a' })
    precioProductoEnTablaDeProductos = () => this.page.locator("//span[contains(text(),'145.000')]");
    tituloProductoSeleccionado = () => this.page.locator('//*[@id="ui-pdp-main-container"]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/h1');
    precioProductoSeleccionado = () => this.page.locator('//*[@id="ui-pdp-main-container"]/div[1]/div/div[1]/div[2]/div[2]/div[1]/div[1]/span/span[3]');
    masTardeBtn = () => this.page.locator("body > div.onboarding-cp > div > div > div.andes-tooltip-inner > div > div > div.andes-tooltip__buttons > button.onboarding-cp-button.andes-button.andes-button--transparent.andes-button--small > span");
    aceptarCookies = () => this.page.locator("body > div:nth-child(5) > div.cookie-consent-banner-opt-out > div > div.cookie-consent-banner-opt-out__actions > button.cookie-consent-banner-opt-out__action.cookie-consent-banner-opt-out__action--primary.cookie-consent-banner-opt-out__action--key-accept");

    //-------METODOS--------
    public async validarDatosDePublicacion()
{
        await this.tiempo(1000);
        await this.aceptarAlertas();
        await this.categoriasDesplegable().hover();
        await this.tecnologiaOpcion().hover();
        await this.televisoresOpcion().click();
        await this.tiempo(1000);
        await this.busquedaMasDeseada().click();
        await this.capitalFederalFiltro().click();
        await this.validarIgualdadDeValoresEnLaGrillaDeProductos('Smart Tv Hyundai 43  Fhd Hyled-43fhd7a', '145.000');
        await this.tituloProductoEnTablaDeProductos().click();
        await this.validarIgualdadDeValoresProductoSeleccionado('Smart Tv Hyundai 43  Fhd Hyled-43fhd7a', '145.000');
    }

    public async validarIgualdadDeValoresEnLaGrillaDeProductos(tituloEnLaGrilla: string, precioEnLaGrilla: string)
    {
        await expect(this.tituloProductoEnTablaDeProductos()).toHaveText(tituloEnLaGrilla);
        await expect(this.precioProductoEnTablaDeProductos()).toHaveText(precioEnLaGrilla);
    }

    public async validarIgualdadDeValoresProductoSeleccionado(tituloProductoSeleccionado: string, precioProductoSeleccionado: string)
    {
        await expect(this.tituloProductoSeleccionado()).toHaveText(tituloProductoSeleccionado);
        await expect(this.precioProductoSeleccionado()).toHaveText(precioProductoSeleccionado);
    }

    public async aceptarAlertas()
    {
        await this.aceptarCookies().click();
        await this.masTardeBtn().click();
    }

    public async tiempo(duracion)
    {
        new Promise(resolve => setTimeout(resolve, duracion));
    }
}