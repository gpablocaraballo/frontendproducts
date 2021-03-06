#############################################################
# Demo de productos Pablo Caraballo
react + react context (de react hooks) + styled component + axios + debounce + lodash

_sitio frontend activo:_ 
_https://frontendproducts-developergit001.vercel.app/_

_repo frontend:_ 
_https://github.com/gpablocaraballo/frontendproducts_

#############################################################

_backend activo:_ 
_https://nodegraphqlproducts-developergit001.vercel.app/api/items?q=xx_

_repo backend:_ 
_https://github.com/gpablocaraballo/nodegraphqlproducts_

### VARIABLES DE ENTORNO

_Se puede verificar las url y puertos (se podrian cambiar por otro) en el archivo .env _

### INSTRUCTIONS STEPS 📋

_1 . Install the dependencies_

```
npm install
```

_2 . start the app_

```
npm run start
``` 

## Estructura general

_Pagina principal_
```
    App.js (contiene el context provider, el Route y los componentes principales)
```
```
_Componentes principales_

```
    _AppLayout: Componente general, cuyo comportamiento solo agrega el <Header /> con el logo general para ir a la HOME_
    _Header: Componente siempre visible donde tiene el Logo de la App (con un efecto) y se puede hacer click para volver a la HOME_

    _ProductSearch (aka Search box): Componente que realiza la peticion ajax para filtrar los productos y setearlos en el reducer haciendo un dispatch, redirecciona a /items?search=xx como se pidió. A tener en cuenta: este componente siempre esta visible, para no dejarlo en algunos lugares si y en otros no, decidí dejarlo visible en todos_

    _ProductList (aka Search Results): Muestra un listado que tiene a cada item de producto con su respectivo comportamiento y muestra los datos (name, price, image), al hacer click, dispara el dispatch para que el reducer setee el producto seleccionado en base al action y redirige al detalle (a items/xx como se pidió, en esta instancia no se vuelve a ejecutar un ajax pidiendo el producto by id, ya que lo tenemos en memoria con el uso de react context)._

    _ProductDetail (aka Item/Product Details): Muestra los datos del detalle del producto (image, name, description, price), como primera accion verifica si los datos principales del producto estan en memoria (si viene del context o no) (si viene desde la raiz / previo resultado de búsqueda (en ese caso ya lo tenemos en memoria), caso contrario viene por que se "pegó" una url directo en el browser y en ese caso si, es necesario hacer la peticion preguntando por el id del producto al endpoint del detalle, a su vez, una vez obtenido el producto, hace uso del componente RelatedProducts donde en base a la categoria_id (catId) hacemos un ajax preguntando por los productos relacionados a esa categoría._

    _RelatedProducts: Es un componente dentro de ProductDetail donde ejecutamos un request preguntando por los productos relacionados en base al campo catId, en nodejs cree un endpoint related/catId donde simplemente tiene un sortRandom para simular dichos campos relacionados, tambien hace uso de useRef para emular un infinite scroll como se habia
    requerido (son campos aleatorios generados por el endpoint y tiene un maximo de 60 items, esto se encuentra
    en constant.js)._

```
```
    libs: En este directorio se pueden encontras las constantes, context-lib, reducer y reducerAction respectivamente.
    
    libs\config.js (url de node seteada por variable de entorno .env)
    libs\constants.js (constantes)
    libs\context-lib.js (context hooks)
    libs\reducer-lib.js (reducer)
    libs\reducerAction-lib.j (actions)
    libs\theme.j (configuracion de colores y algunos valores para mediaqueries)
```

