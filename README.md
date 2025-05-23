
# PokéDex Vue App

Una aplicación frontend construida con Vue 3 para explorar información de Pokémon desde la API pública [PokeAPI](https://pokeapi.co/).

---

## 🧩 Descripción

Esta aplicación permite visualizar una lista de Pokémon, acceder a sus detalles individuales y explorar sus habilidades y estadísticas. Se utilizan herramientas modernas de JavaScript como:

- **Vue 3 (Composition API)**
- **Pinia** para gestión de estado
- **Tailwind CSS** para estilos
- **Axios** para llamadas HTTP
- **Vitest + Vue Test Utils** para pruebas
---

## 📦 Instalación y ejecución

### Requisitos

- Node.js >= 18
- npm o yarn

### Clonar el repositorio

```bash
git clone https://github.com/dsalazars/poke-app.git
cd poke-app
```

### Instalar dependencias

```bash
npm install
# o
yarn install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

### Compilar aplicación

```bash
npm run build
```

### Vista previa de la app

```bash
npm run preview
```

### Ejecutar pruebas

```bash
npm run test
```

### Generar reporte de cobertura

```bash
npm run coverage
```

---

## 🏗️ Arquitectura del proyecto

```
src/
├── api/                # Configuración de Axios
│   └── axios.js
|   └── pokemonApi.js   # Servicios de la API
├── components/         # Componentes generales, layout principal y componentes
│   └── Layout/, pokemon/
├── router/             # Configuración de rutas
├── stores/             # Pinia (gestión de estado)
├── utils/              # Funciones auxiliares
├── views/              # Vistas principales (Welcome, List)
└── App.vue, main.js    # Raíz de la aplicación
```

---

## ⚙️ Datos técnicos

- **Pinia**: Elegido por ser el store oficial para Vue 3, con mejor integración y DX frente a Vuex.
- **Tailwind CSS**: Permite un desarrollo de UI ágil, con clases utilitarias y sin necesidad de definir estilos CSS personalizados, se puede integrar Headless UI poara componentes nativos de tailwindCSS
- **Axios + Interceptores**: Para manejar respuestas y errores de forma centralizada.
- **Vitest**: Rápido, compatible con, Vite y Vue Test Utils para pruebas unitarias.
- **Modularidad**: Servicios API, lógica de estado y componentes desacoplados para facilitar mantenimiento.

---

## 📊 Diagrama de flujo simplificado

```plaintext
+--------+
| Usuario|
+--------+
     |
     v
+------------------+
| WelcomeView.vue  |
+------------------+
     |
     v
+----------------------+
| PokemonListView.vue  |
+----------------------+
     |
     v
+------------------+
|  pokemonStore    |  <-- Pinia
+------------------+
     |
     v
+---------------------+
|  pokemonService.js  |  <-- Capa de servicio
+---------------------+
     |
     v
+------------------+
|     pokeApi      |  <-- Axios instance
+------------------+
     |
     v
+------------------------------------+
| https://pokeapi.co/api/v2/pokemon |
+------------------------------------+
     |
     v
+---------------------------+
| Datos renderizados en:   |
| - PokemonItem.vue        |
| - PokemonModal.vue       |
+---------------------------+
```

---

## 🧱 Patrones de diseño aplicados

### 📦 Modularización por dominio

- Componentes, stores y servicios agrupados por dominio (`pokemon/`), facilitando la escalabilidad.

### 📡 Service Layer

- `pokemonService` aísla las llamadas HTTP del resto de la app, lo que permite sustituir o cambiar la fuente de datos fácilmente.

### 🗂️ Single Responsibility Principle

- Cada componente y módulo tiene una única responsabilidad: visualización, lógica o comunicación.

---

## 🚀 Estrategia de escalabilidad

- **Modularidad**: Se pueden añadir nuevas entidades (por ejemplo, objetos, movimientos) creando nuevos stores y servicios.
- **Cache de datos**: Posibilidad de implementar cache local con Pinia y persistencia.
- **Testabilidad**: Base de pruebas ya estructurada con cobertura creciente.

---

## 📚 Integrar nuevas funcionalidades:

### 1. Crear un nuevo módulo

```bash
src/
├── api/myService.js
├── stores/myServiceStore.js
├── components/myEntity.vue/
├── views/MyView.vue
```

### 2. Añadir una nueva ruta

```js
// src/router/index.js
{
  path: '/my-view',
  component: () => import('@/views/MyView.vue')
}

// Tambien se puede aplicar lazy loading para cagar componentes cuando sea necesario

{
  path: '/my-view',
  name: 'view',
  component: () => import('@/views/MyView.vue')
}


```

### 3. Agregar pruebas

Crea una carpeta junto al modulo de componente `__tests__/` y el archivo con `.spec.js`, al momento de terminar las pruebas, ejecutas:

```bash
npm run test
```

### 4. Buenas prácticas

- Usa `defineStore` de Pinia para separar la lógica de estado.
- Evita lógica compleja en los componentes; colócala en `utils/` o `stores/`.
- Nombra los commits siguiendo convenciones como Conventional Commits (`feat:`, `fix:`, etc.).

---

