# ⚡ Pokémon Explorer - Explorador de PokeAPI

Aplicación web interactiva que utiliza la **PokeAPI** para explorar el mundo Pokémon con programación asíncrona avanzada y una interfaz moderna.

## 🚀 Características

- ✨ **Interfaz moderna inspirada en Pokémon** con animaciones CSS
- 🔄 **Programación asíncrona avanzada** usando `async/await` y `Promise.all()`
- 🌐 **Integración completa con PokeAPI**:
  - [PokeAPI](https://pokeapi.co/) - La API RESTful de Pokémon más completa
- 🔍 **Búsqueda por nombre o número**
- 🎨 **Filtrado por tipo de Pokémon**
- ⭐ **Colección de Pokémon legendarios**
- 📊 **Estadísticas en tiempo real**
- 🎯 **Modal con información detallada**

## 📋 Funcionalidades

1. **Pokémon Aleatorio**: Carga un Pokémon aleatorio de las 8 primeras generaciones
2. **Cargar 6 Pokémon**: Carga 6 Pokémon aleatorios simultáneamente usando `Promise.all()`
3. **Pokémon Legendarios**: Muestra una selección de Pokémon legendarios famosos
4. **Búsqueda**: Busca por nombre (ej: pikachu) o número (ej: 25)
5. **Filtrar por Tipo**: Filtra Pokémon por tipo (Fuego, Agua, Planta, etc.)
6. **Detalles Completos**: Click en cualquier tarjeta para ver estadísticas completas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y modal
- **CSS3**: 
  - CSS Grid y Flexbox para layouts responsivos
  - Animaciones avanzadas (fadeIn, slideIn, spin)
  - Sistema de colores por tipo de Pokémon
  - Diseño de tarjetas con hover effects
  - Modal responsive
- **JavaScript ES6+**:
  - Async/Await para operaciones asíncronas
  - Fetch API para peticiones HTTP
  - Promise.all() para carga múltiple
  - Manipulación dinámica del DOM
  - Event Delegation
  - Sets para números únicos

## 📦 Estructura del Proyecto


pokemon-explorer/
│
├── index.html          # Estructura HTML con modal
├── styles.css          # Estilos CSS con sistema de colores por tipo
├── app.js             # Lógica JavaScript con PokeAPI
└── README.md          # Documentación del proyecto


## 🚀 Cómo Ejecutar el Proyecto

1. **Clona o descarga** este repositorio
2. **Abre** el archivo `index.html` en tu navegador web
3. **¡Explora!** Descubre diferentes Pokémon

✅ No requiere instalación de dependencias
✅ No requiere servidor backend
✅ Funciona 100% en el navegador

## 💡 Conceptos Técnicos Demostrados

### 1. Asincronía con Async/Await


async function fetchPokemon(idOrName) {
    const response = await fetch(`${API_URLS.pokemon}/${idOrName}`);
    if (!response.ok) throw new Error('Pokémon no encontrado');
    return await response.json();
}


### 2. Carga Múltiple con Promise.all()


const promises = randomIds.map(id => fetchPokemon(id));
const pokemons = await Promise.all(promises);
pokemons.forEach(pokemon => addPokemonToContainer(pokemon));


### 3. Manejo de Errores Robusto


try {
    const pokemon = await fetchPokemon(searchTerm);
    addPokemonToContainer(pokemon);
} catch (error) {
    console.error('Error:', error);
    toggleError(true);
} finally {
    toggleLoading(false);
}


### 4. Generación de Números Aleatorios Únicos


const randomIds = new Set();
while (randomIds.size < 6) {
    randomIds.add(getRandomNumber(1, 898));
}


## 🎨 Características de UI/UX

- ✅ Spinner animado con diseño de Pokébola
- ✅ Tarjetas con efecto hover y elevación
- ✅ Sistema de colores auténtico por tipo de Pokémon
- ✅ Modal con detalles completos y animaciones
- ✅ Barras de progreso para estadísticas
- ✅ Diseño 100% responsive
- ✅ Imágenes de alta calidad (official artwork)
- ✅ Badges de tipos con colores oficiales

## 🌐 Endpoints de PokeAPI Utilizados

### Obtener Pokémon

GET https://pokeapi.co/api/v2/pokemon/{id or name}


### Obtener Pokémon por Tipo

GET https://pokeapi.co/api/v2/type/{type}


### Obtener Información de Especie

GET https://pokeapi.co/api/v2/pokemon-species/{id}


## 🎯 Tipos de Pokémon Disponibles

- 🔥 Fuego (Fire)
- 💧 Agua (Water)
- 🌿 Planta (Grass)
- ⚡ Eléctrico (Electric)
- 🔮 Psíquico (Psychic)
- 🐉 Dragón (Dragon)
- 🌙 Siniestro (Dark)
- ✨ Hada (Fairy)

Y más tipos disponibles en el código fuente...

## 📊 Información Mostrada

### En Tarjetas
- Imagen oficial del Pokémon
- Número de Pokédex
- Nombre
- Tipos
- Estadísticas básicas (HP, Attack, Defense)

### En Modal (Click en tarjeta)
- Imagen grande
- Descripción de la Pokédex
- Todas las estadísticas base con barras de progreso
- Altura y peso
- Habilidades
- Tipos

## 🔧 Posibles Mejoras Futuras

- [ ] Sistema de favoritos con localStorage
- [ ] Comparador de Pokémon
- [ ] Evoluciones del Pokémon
- [ ] Movimientos y ataques
- [ ] Filtro por generación
- [ ] Modo de batalla simulado
- [ ] Búsqueda de Pokémon por habilidad
- [ ] Gráficos de estadísticas con Chart.js
- [ ] Exportar equipo Pokémon

## 📝 Datos Técnicos

- **Generaciones incluidas**: 1-8 (898 Pokémon)
- **API**: Completamente gratuita, sin necesidad de API Key
- **Límite de peticiones**: Sin límite oficial (uso responsable recomendado)
- **Idiomas**: Descripciones en español e inglés
- **Imágenes**: Official artwork de alta calidad

## 🎮 Ejemplos de Búsqueda

Prueba buscando:
- Por número: `1`, `25`, `150`
- Por nombre: `pikachu`, `charizard`, `mewtwo`
- Por generación: Números del 1-151 (Gen 1), 152-251 (Gen 2), etc.

## 🌟 Pokémon Legendarios Incluidos

- Articuno (#144)
- Zapdos (#145)
- Moltres (#146)
- Mewtwo (#150)
- Raikou (#243)
- Entei (#244)

## 👨‍💻 Propósito Educativo

Este proyecto demuestra:
- ✅ Consumo de APIs REST complejas
- ✅ Manejo de datos jerárquicos (Pokémon → Especie → Tipos)
- ✅ Programación asíncrona avanzada
- ✅ Diseño de interfaces interactivas
- ✅ Gestión de estado en aplicaciones web
- ✅ UX/UI moderno con CSS avanzado
- ✅ Modales y componentes dinámicos

## 📄 Créditos

- **API**: [PokeAPI](https://pokeapi.co/) - Mantenida por la comunidad
- **Datos**: The Pokémon Company
- **Imágenes**: Official Pokémon artwork

---

**⚡ ¡Atrapa todos los datos con esta Pokédex interactiva! ⚡**

*"Gotta Fetch 'Em All!"*
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/NJ448ipO)
# 03- Explorador de una API asincronia y una UI interactiva

- **Descripción del Proyecto**: Una aplicación web que permite a los usuarios buscar y explorar una API pública. Incluye una interfaz simple para ingresar consultas de búsqueda, mostrar resultados en tarjetas, y manejar estados como carga, errores o resultados vacíos. Esto es similar al cliente de Reddit que vimos en clase, pero enfocado en la API de GitHub (o lo que surja) para practicar conceptos como solicitudes HTTP y manejo de datos asíncronos.
- **Objetivo**: Ampliar el conocimiento básico de Angular, idealmente para reforzar habilidades en frontend development, API integration y gestión de estado reactivo usando signals.
- **Requisitos Técnicos**:
  - **Framework**: Angular ~20.3.0, con énfasis en módulos standalone para componentes reutilizables.
  - **Características Principales**: Utiliza signals para actualizaciones reactivas, servicios para lógica de negocio, y plantillas Angular para UI dinámica. Añade `HttpClientModule` para manejar solicitudes API.
  - **Dependencias**: Mantiene paquetes como `@angular/core` y `rxjs`; incluye `@angular/common/http` para API calls. Usa versiones compatibles con el proyecto actual para evitar conflictos.
  - **API**: GitHub API REST (e.g., `https://api.github.com/search/repositories`), que es gratuita y no requiere autenticación para consultas públicas. Las opciones son diversas: Spotify, Facebook, Instagram, TikTok, Shazam, Youtube, Codewars, etc. Como hemos visto en clase, y por aportación unánime, también podréis utilizar API de Guild Wars 2 o League of Legends.
- **Estructura del Proyecto**:
  - **Componentes**: Incluye un componente principal como `repo-list.component.ts` (similar a [subreddit-column.component.ts](/reddit-client/src/app/components/subreddit-column.component.ts:0:0-0:0)), con subcomponentes para detalles de repositorios. Añade un `search-bar.component.ts` para la entrada de usuario.
  - **Servicios**: Un `github.service.ts` (por ejemplo) que encapsula llamadas API, con métodos como `searchRepositories(query: string)` para devolver datos en formato observable.
  - **Plantillas**: Usa directivas como `@if`, `@for` y eventos para una UI interactiva, con estilos CSS para una apariencia moderna (p. ej., usando clases como `column`, `loading`).
- **Detalles de la API**: Debes usar, por ejemplo, el endpoint `GET /search/repositories` con parámetros como `q` para la consulta. Ejemplo de llamada: `this.http.get('https://api.github.com/search/repositories', { params: { q: query } })`. Enfatiza el manejo de errores HTTP (e.g., códigos 403 para límites de tasa) y la transformación de respuestas.
- **Características Adicionales**: Para enriquecer el proyecto, sugiero agregar:
  - Filtrado de repositorios (por ejemplo por lenguaje o estrellas). La mayoría de APIs que os proprongo tienen algún sistema similar.
  - Un componente para mostrar detalles de la información al hacer clic.
  - Integración con notificaciones usando signals para actualizaciones en tiempo real.
