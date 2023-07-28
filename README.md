# prueba-tecnica-MELI
Prueba técnica de Mercado Libre

A continuacion les voy a dejar las consignas que se requerian para hacer los tests

## Ejercicio 1
Realizar 5 (cinco) casos de prueba de navegabilidad de categorías de MercadoLibre
validando, una vez que se accede a ellas, el título de la categoría accedida y que se
muestre el total de resultados. Las categorías que deberán automatizarse son:
* Categorías > Hogar y Electrodomésticos > Climatización
* Categorías > Tecnología > Celulares y Smartphones
* Categorías > Belleza y Cuidado Personal > Perfumes Importados
* Categorías > Herramientas e Industria > Industria Textil
* Categorías > Juguetes y Bebés > Cuarto del Bebé

## Ejercicio 2
Ingresar a una categoría a elección (que sea lo suficientemente común para que el
listado de productos que contenga sea amplio). Una vez dentro de la categoría, filtrar
por ubicación "Capital Federal". Seleccionar una publicación al azar y validar que los datos de la publicación
accedida coincidan con los datos que se habían mostrado de ella en el listado de
productos

## Automatización de Back End
Realizar la búsqueda de un producto existente y validar sobre la respuesta
(response de búsqueda) los siguientes conceptos:
* Total de productos encontrados
* Cantidad de productos devueltos y que esta no exceda el límite del paginado
De los resultados obtenidos en el punto anterior, elegir un id al azar, obtener su
detalle, y sobre este validar que los atributos coincidan con su equivalente en el
response de búsqueda de producto. Los atributos a validar son:
* Titulo
* Precio
* Acepta MercadoPago
* Moneda
* Envío gratis
Notas:
 Para ambos puntos, agregar todas las validaciones adicionales que crea
necesarias.
 La búsqueda de producto se realiza por medio del siguiente endpoint:
https://api.mercadolibre.com/sites/MLA/search?q=VALOR_A_BUSCAR
 El detalle de producto se obtiene por medio del siguiente endpoint:
https://api.mercadolibre.com/items/ID_PRODUCTO
