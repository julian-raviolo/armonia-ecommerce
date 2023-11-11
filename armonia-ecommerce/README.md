# Proyecto de Carrito de Compras

## Descripción

Este proyecto es una aplicación web de comercio electrónico que implementa un carrito de compras. Permite a los usuarios agregar productos a su carrito, ver un resumen de la compra y proceder al pago.

## Funcionalidades Principales

### 1. Vista del Catálogo

- La página principal muestra un catálogo de productos disponibles para la compra.
- Cada producto incluye una imagen, título, descripción y precio.

### 2. Carrito de Compras

- Los usuarios pueden agregar productos al carrito de compras desde la vista del catálogo.
- Se muestra un ícono de carrito de compras en la interfaz, indicando la cantidad de elementos en el carrito.

### 3. Resumen del Carrito

- Al hacer clic en el ícono del carrito, se despliega un resumen detallado del carrito.
- El resumen incluye una tabla con imágenes, títulos, cantidades y precios de los productos en el carrito.
- Se muestra el total de la compra.

### 4. Finalización de la Compra

- Los usuarios pueden proceder al proceso de pago al hacer clic en "Finalizar Pedido".
- Se redirige a una página de checkout donde se ingresa la información de envío y se completa la compra.

## Tecnologías Utilizadas

- **React:** La aplicación está construida utilizando el marco de trabajo React para la creación de componentes interactivos y la gestión eficiente del estado de la aplicación.

- **React Router:** Se utiliza React Router para la navegación entre diferentes vistas de la aplicación, incluyendo la vista del catálogo y la página de checkout.

- **Context API:** El contexto de React se emplea para gestionar el estado global de la aplicación, especialmente para el carrito de compras.

- **CSS:** Se aplica CSS para el diseño y estilo de la interfaz de usuario, logrando una apariencia agradable y receptiva.

- **Vite.js:** Tambien parete del proyecto se trabajo en vite como libreria de estilos.

## Instalación y Ejecución

1. Clona el repositorio a tu máquina local.
2. Abre una terminal y navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en modo desarrollo.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu contribución (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.