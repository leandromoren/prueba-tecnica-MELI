import { Page, expect } from "@playwright/test";

export default class ResponseTest
{
    readonly page: Page

    constructor(page) {
        this.page = page;
    }

    public async validarBusquedaDelProducto(request, baseURL: string, search: string)
    {
        const RESPONSE = await request.get(`${baseURL}${search}`);
        const RESPONSE_BODY = await RESPONSE.json();
        
        await expect(RESPONSE.ok()).toBeTruthy();
        await expect(RESPONSE.status()).toBe(200);
        await expect(RESPONSE_BODY.query).toBe('CELULAR');
    }

    public async validarDetallesDelProducto(req, baseURL: string, id_item: string )
    {
        const RESPONSE = await req.get(`${baseURL}${id_item}`);
        const RESPONSE_BODY = await RESPONSE.json();

        await expect(RESPONSE_BODY.id).toBe(id_item);
        await expect(RESPONSE_BODY.accepts_mercadopago).toBe(true);
        await expect(RESPONSE_BODY.price).toBe(94999);
        await expect(RESPONSE_BODY.currency_id).toBe('ARS');
        await expect(RESPONSE_BODY.shipping.free_shipping).toBe(true);
    }
}
