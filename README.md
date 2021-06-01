# Portal EAD

Portal EAD es una solución rápida destinada a pequeñas herramientas escritas
en JavaScript desde el lado del cliente.

El objetivo es generar formularios intuitivos para los docentes de la facultad
puedan generar sus propias piezas gráficas, con la imagen institucional, y de
esta forma ordenar su aula virtual.

## Desarrollo

Cada una de las herramientas debían ser autónomas y ejecutadas del lado del cliente
para poder utilizar el editor HTML del aula virtual.

### Instalación

> **Requisito:** tener Nodejs instalado

Los siguientes comandos en la consola permitirán clonar este repositorio desde
GitHub, y luego instalar las dependencias necesarias.

```
git clone https://github.com/espinosajuanma/ead-portal-docentes.git
cd ead-portal-docentes
npm install
```

### Directorios

- `/public`: Archivos estáticos.
- `/moodle`: Backups de los recursos de tipo página que se utilizaron
dentro del aula virtual
- `/assets`: Se utilizaron íconos de una página de terceros que tuvieron que
ser convertidos a 

### Comandos

Para correr el servidor utilizar `npm run dev` y luego en otra terminal
usar `npm run sync`.

Esto debería iniciar el servidor de archivos estáticos con express necesario
para setear las rutas del sevidor "surge" (sin extensiones) y el index en
la página 200.html, que a su vez sirve como respuesta ante un error 404.

El servidor con `browser-sync` permite actualizar la página en el navegador
a medida que se actualizan los archivos.

## Legal

> Icons made by [Kiranshastry](https://www.flaticon.com/authors/kiranshastry) from [www.flaticon.com](https://www.flaticon.com/)