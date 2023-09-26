# Establecer la imagen base
FROM node:lts as builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Iniciar desde la imagen base de Node.js LTS para la etapa de ejecución
FROM node:lts

WORKDIR /app

# Copiar las dependencias y el código construido desde la etapa de construcción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
