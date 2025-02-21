# Usar una imagen base de Node.js para construir el frontend
FROM node:20-bullseye AS build


# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias y construir
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Servir con Nginx
FROM nginx:1.23-alpine

# Copiar la compilación del frontend
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
