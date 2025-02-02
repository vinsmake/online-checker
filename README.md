﻿# **Descripción del Proyecto**

Este proyecto es una aplicación de monitoreo de sitios web que verifica el estado, tiempo de respuesta y códigos de estado HTTP de una lista de URLs definidas. Está diseñada para mostrar el estado en tiempo real mediante una interfaz web amigable y un backend escalable.

La aplicación utiliza tecnologías modernas como **React**, **Node.js**, y **Axios**, y puede desplegarse tanto en entornos locales como en servicios en la nube.

# **Tecnologías y Dependencias Utilizadas**

## **Frontend (React con Vite)**

- **React**: Para la construcción de la interfaz de usuario.
- **Vite**: Herramienta moderna para desarrollar y construir aplicaciones React.
- **Axios**: Para manejar solicitudes HTTP al backend.
- **Tailwind CSS**: Framework de diseño CSS para crear una interfaz responsiva y estilizada.

## **Backend (Node.js con Express)**

- **Node.js**: Entorno de ejecución para construir el servidor backend.
- **Express.js**: Framework para la creación del servidor.
- **Axios**: Cliente HTTP para verificar el estado de las URLs.
- **Axios-Retry**: Manejo automático de reintentos en caso de fallos.
- **Cors**: Middleware para habilitar solicitudes CORS.
- **Path** y **FS**: Módulos de Node.js para manejar rutas y archivos.

# **Requisitos Previos**

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

1. **Node.js**:
    - Descarga e instala [Node.js](https://nodejs.org/) (versión LTS recomendada).
    - Verifica la instalación (Node.js incluye NPM):
        
        ```bash
        node -v
        npm -v
        ```
        
2. **Git**:
    - Asegúrate de tener instalado [Git](https://git-scm.com/).
    - Verifica la instalación:
        
        ```bash
        git --version
        ```
        

# **Estructura del Proyecto**

### **Backend (`online-checker-backend`)**

- **`index.js`**:
    - Configura el servidor Express.
    - Maneja las solicitudes HTTP al endpoint `/api/check`.
    - Verifica el estado de las URLs utilizando `axios` y `axios-retry`.
- **`/data/weblist.json`**:
    - Contiene la lista de URLs que serán monitoreadas.
- **Dependencias Clave**:
    - **Axios**: Realiza solicitudes HTTP para verificar el estado de las URLs.
    - **Axios-Retry**: Reintenta solicitudes en caso de fallos temporales.
    - **Cors**: Habilita solicitudes entre el frontend y backend.

### **Frontend (`online-checker-front`)**

- **`Checker.jsx`**:
    - Maneja la lógica principal de comunicación con el backend.
    - Implementa reintentos automáticos y muestra errores o resultados.
- **`Webs.jsx`**:
    - Renderiza la lista de sitios web en un diseño responsivo usando Tailwind CSS.
- **`Loading.jsx`**:
    - Muestra un indicador de carga mientras se obtienen los datos.
- **`Error.jsx`**:
    - Muestra un mensaje cuando el backend no responde.
- **`ServerError.jsx**:`
    - Muestra un mensaje cuando el backend no responde durante un periodo mas largo, avisando de posible caída en el servidor.

# **Pasos de Instalación**

## **1. Clonar el Repositorio**

Clona el repositorio en tu máquina local:

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

## **2. Configurar el Backend**

1. Ve al directorio del backend:
    
    ```bash
    cd online-checker-backend
    ```
    
2. Instala las dependencias del backend:
    
    ```bash
    npm install
    ```
    
3. Configura las variables de entorno:
    - Crea un archivo `.env` en el directorio del backend:
        
        ```bash
        touch .env
        ```
        
    - Agrega la configuración para el puerto si es necesario:
        
        ```
        PORT=5000
        ```
        
        NOTA: En index.js se encuentra el siguiente codigo
        
        ```php
        const port = process.env.PORT || 5000;
        ```
        
        El cual permite tomar PORT como variable de entorno en repostorios auitomaticos (como Render), caso contrario, tomara como PORT el 5000
        
        Este PORT puede ser agregado al .env y modificado.
        
    - Opcionalmente, puedes personalizar la ruta a `weblist.json`. Pues actualmente es este archivo el que contiene la lista de webs a verificar.
4. Ejecuta el archivo:
    
    ```bash
    node index.js
    ```
    
    - El servidor estará disponible en: `http://localhost:5000`.

---

## **3. Configurar el Frontend**

1. Ve al directorio del frontend:
    
    ```bash
    cd online-checker-front
    ```
    
2. Instala las dependencias del frontend:
    
    ```bash
    npm install
    ```
    
3. Configura las variables de entorno:
    - Crea un archivo `.env` en el directorio del frontend:
        
        ```bash
        touch .env
        ```
        
    - Agrega la URL del backend:
        
        ```
        VITE_API_URL=http://localhost:5000
        ```
        
4. Ejecuta la aplicación:
    
    ```bash
    npm run dev
    ```
    
    - La aplicación estará disponible en: `http://localhost:5173`.

## 4. Configuración adicional

Recuerda utilizar .env.example para crear tus archivos .env y .env.production, de esta manera se tendrá un control mas claro y sincronizado con tu repositorio. Modifica la variable de entorno VITE_API_URL según lo requerido.

Los scripts del package.json del root cuentan con un sistema para actualizar el repositorio remoto y hacer uso de github Pages. Estos pueden ser utilizados o modificados según las necesidades requeridas.

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "install-front": "cd online-checker-front && npm install",
    "build-front": "cd online-checker-front && npm run build",
    "move-to-docs": "rmdir /S /Q docs && mkdir docs && xcopy online-checker-front\\dist docs /E /I /Y",
    "update-front-docs": "npm run build-front && npm run move-to-docs",
    "gitUpdate": "git status && git add . && git commit -m \"Project updated\" && git push origin main:develop",
    "gitUpdate-front": "npm run update-front-docs && npm run gitUpdate",
    "gitUpdate-full": "npm run update-front-docs && npm run gitUpdate"
  },
```

# **Explicación del Funcionamiento**

1. **Inicio de la Aplicación**:
    - Al iniciar el backend, lee la lista de URLs desde `weblist.json`.
    - Verifica el estado de cada URL con solicitudes HTTP.
2. **Reintentos y Manejo de Errores**:
    - Si una solicitud falla (por ejemplo, timeout o problema SSL), el backend reintenta automáticamente hasta 3 veces.
    - Los resultados se envían al frontend con información como:
        - Estado (`Online`, `Offline`, `Danger`).
        - Tiempo de respuesta.
        - Código de estado HTTP.
3. **Interfaz del Usuario**:
    - El frontend consulta el backend cada 60 segundos.
    - Los sitios se muestran en una tabla estilizada, y se destacan problemas como certificados expirados o dominios no encontrados.

# Notas adicionales sobre sistema.

El código contiene una lógica de consulta periódica y manejo de errores para verificar el estado de los sitios web. Aquí está el análisis detallado de su funcionamiento, con puntos importantes.

### **1. Frecuencia de Consulta Exitosa**

Cuando el backend responde correctamente, el sistema programa automáticamente la siguiente consulta después de **60 segundos**, mediante esta línea:

```jsx
setTimeout(fetchWebsites, 60000);
```

### **Significado**:

- Esto asegura que el sistema obtenga datos actualizados del backend cada minuto.
- **Impacto Positivo**:
    - Reduce la carga en el servidor, ya que no realiza solicitudes excesivas.
    - Proporciona datos actualizados regularmente.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8336c31e-d8c9-4956-901a-b94995690a43/a1a11573-5e5e-4af0-a7f8-6c37d9fddc23/image.png)

### **2. Frecuencia en Caso de Error**

Si ocurre un error (por ejemplo, el backend no responde o la conexión falla), el sistema entra en el bloque `catch` y comienza un proceso de reintentos:

```jsx
javascript
Copiar código
if (retryCountRef.current <= firstTry) {
    console.log(`Reintentando... (${retryCountRef.current + 1}/${firstTry})`);
    setTimeout(fetchWebsites, 3000);
    retryCountRef.current += 1;
}

```

### **Significado**:

- **Reintentos Rápidos**:
    - Los primeros `firstTry` (3 intentos) se realizan cada 3 segundos.
    - Esto ayuda a recuperar rápidamente los datos si el problema es temporal.
- **Estado Intermedio**:
    - Si los primeros 3 intentos fallan, activa una **alarma de error estándar (`Error`)**:
        
        ```jsx
        javascript
        Copiar código
        setErrorAlarm(true);
        
        ```
        
    - Aun así, continúa intentando hasta el límite de `secondTry` (6 intentos en total).

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8336c31e-d8c9-4956-901a-b94995690a43/6b56e5bc-e5e9-4134-8558-158254584cfb/image.png)

### **3. Límite de Reintentos**

Después de 6 intentos (definidos por `secondTry`), el sistema entra en el siguiente bloque:

```jsx
javascript
Copiar código
seterrorServerAlarm(true);
setErrorAlarm(false);
console.log(`Reintentando... (${retryCountRef.current + 1} veces)`);
setTimeout(fetchWebsites, 3000);
retryCountRef.current += 1;

```

### **Significado**:

- Marca el estado como un **error crítico (`ServerError`)**.
- **Problema Potencial**:
    - Aunque marca el estado como crítico, los reintentos no se detienen. Esto significa que el sistema sigue intentando cada 3 segundos incluso después de superar el límite de `secondTry`. SIN EMBARGO, al usuario se le mostrara un mensaje de error de servidor, pidiéndole que consulte al administrador.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8336c31e-d8c9-4956-901a-b94995690a43/55105fe2-64e9-4430-b067-c872fd5ba2e1/image.png)

### weblist.JSON contiene el json a consultar, este puede ser cambiado por un archivo en un repositorio externo

```json
[
    "google.com",
    "facebook.com",
    "youtube.com",
    "twitter.com",
    "amazon.com",
    "wikipedia.org",
    "instagram.com",
    "linkedin.com"
]

```

### **Resumen del Comportamiento**

1. **Consulta Exitosa**:
    - El sistema consulta el backend cada **60 segundos** cuando todo está funcionando correctamente.
2. **En Caso de Error**:
    - Reintenta cada **3 segundos** mientras no supere el límite de reintentos (`secondTry`).
3. **Después del Límite de Reintentos**:
    - Se activa un estado de error crítico (`ServerError`), pero los reintentos continúan indefinidamente.
4. **Problemas Potenciales**:
    - **Reintentos Infinitos**: El sistema no detiene los reintentos incluso después de alcanzar el estado crítico.
