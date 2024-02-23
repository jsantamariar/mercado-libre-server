# Mercado Libre Server

Este repositorio contiene el servidor backend para la aplicación Mercado Libre, una plataforma de comercio electrónico que permite a los usuarios buscar y ver detalles de productos.

## Características

- Búsqueda de productos.
- Obtención de detalles de productos específicos.
- Integración con la API de Mercado Libre.
- Manejo de errores y validaciones.

## Tecnologías Utilizadas

- Node.js
- Express.js
- Axios para solicitudes HTTP.

## Configuración y Uso

Para configurar y utilizar este servidor, sigue los siguientes pasos:

### Requisitos Previos

Asegúrate de tener Node.js instalado en tu máquina. Si no lo tienes, puedes descargarlo e instalarlo desde [Node.js](https://nodejs.org/).

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jsantamariar/mercado-libre-server.git
   ```

2. Navega al directorio del repositorio:
   cd mercado-libre-server
3. Instala las dependencias:
   npm install
4. Para ejecutar el servidor, usa el siguiente comando:
   npm start o npm run dev

El servidor se iniciará y escuchará en el puerto especificado (por defecto: 3000).

### Endpoints

El servidor ofrece los siguientes endpoints:

GET /api/items?q=:query: Busca productos basados en una consulta de búsqueda.
GET /api/items/:id: Obtiene detalles de un producto específico.

### Contacto

Creado por Jorge Santamaria - siéntete libre de contactarme!

Email: santamaria.web.dev@gmail.com
LinkedIn: https://www.linkedin.com/in/santamariaramosj/
