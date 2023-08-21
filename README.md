# dashboardmetrics_frontend

## Instalación

1. Instalar Node

`https://nodejs.org/es/download`

2. Clonar repositorio

```bash
git clone https://github.com/intersoftwareProjects/dashboardmetrics_frontend.git
```

```bash
cd dashboardmetrics_frontend
```

3. Instalar dependencias

```bash
npm install
```

4. Iniciar servidor Next

```bash
npm run dev
```

## Folder Structure

The folder structure is organized as follows:

- `components/`: This folder contains reusable components such as inputs, buttons, forms, etc.

- `app/`: Here you will find the Next.js pages that represent the different routes and views of your application. Each page can import components and others to complete its functionality.

- `config/`: This folder is the configuration api and enviroment variables of your application.

- `hooks/`: This folder contains the custom hooks. <Implements if necessary>

- `utils/`: You can include utilities and helper functions here, such as helper functions, date formatters, validators, interfaces, etc.