# Usar una imagen base de Node.js
FROM node:20-bullseye AS build

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias e instalar
COPY package*.json ./
RUN npm install --production

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto 5000 para comunicación
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]