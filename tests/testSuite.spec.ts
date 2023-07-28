import { expect, test } from '@playwright/test';
import ClimatizacionFunctions from './pom/Front-end/climatizacion_functions.page';
import CelularesYSmartphones from './pom/Front-end/celulares_y_smartphones_functions.page';
import Perfumes from './pom/Front-end/perfumes_functions.page';
import HerramientasElectricas from './pom/Front-end/herramientas_functions.page';
import JuguetesParaBebes from './pom/Front-end/juguetes_functions.page';
import UbicacionCapitalFederal from './pom/Front-end/filtrar_ubicacion_functions.page';
import ResponseTest from './pom/Back-end/response_functions.page';

const URL = [
  'https://www.mercadolibre.com.ar/',
  'https://api.mercadolibre.com/sites/MLA/search?q=',
  'https://api.mercadolibre.com/items/'
]

const SEARCH = [
  'CELULAR',
  'BICICLETA'
]

const ID_ITEM = [
  'MLA1192485308'
]

test.beforeEach( async ({ page }) =>
  {
    await page.goto(URL[0]);
  })

test.describe("Front-end | Prueba tecnica en la web de Mercado Libre", () =>
{
  test("Validar que la categoria 'Climatizacion' se visualice correctamente", async ({ page }) =>
  {
    const climatizacionFunctions = new ClimatizacionFunctions(page);
    await climatizacionFunctions.validarCategoriaClimatizacion();
  });

  test("Validar que la categoria 'Celulares y Smartphones' se visualice correctamente", async ({ page }) =>
  {
    const celularesYSmartphones = new CelularesYSmartphones(page);
    await celularesYSmartphones.validarCelularesYSmartphones();
  });

  test("Validar que la categoria 'Perfumes' se visualice correctamente", async ({ page }) =>
  {
    const perfumes = new Perfumes(page);
    await perfumes.validarPerfumes();
  });

  test("Validar que la categoria 'Herramientas Electricas' se visualice correctamente", async ({ page }) =>
  {
    const herramientasElectricas = new HerramientasElectricas(page);
    await herramientasElectricas.validarTitulo();
    await herramientasElectricas.validarNResultados();
  });

  test("Validar que la categoria 'Juguetes para bebes' se visualice correctamente", async ({ page }) =>
  {
    const juegosParaBebes = new JuguetesParaBebes(page);
    await juegosParaBebes.validarTitulo();
    await juegosParaBebes.validarResultados();
  });

  test('Filtrar por ubicación Capital Federal y validar [titulo / precio] del producto', async ({ page }) =>
  {
    const filtrarUbicacion = new UbicacionCapitalFederal(page);
    await filtrarUbicacion.validarDatosDePublicacion();
  })
});

test.describe("Validacion del Back-end", () =>
{
  test('Validacion de la busqueda y detalles del producto desde el lado del servidor', async ({request,page}) =>
  {
    const responseTest = new ResponseTest(page);
    await responseTest.validarBusquedaDelProducto(request, URL[1], SEARCH[0]); 
    await responseTest.validarDetallesDelProducto(request, URL[2], ID_ITEM[0]);
  })
})
