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

```
pokemon-explorer/
│
├── index.html          # Estructura HTML con modal
├── styles.css          # Estilos CSS con sistema de colores por tipo
├── app.js             # Lógica JavaScript con PokeAPI
└── README.md          # Documentación del proyecto
```

## 🚀 Cómo Ejecutar el Proyecto

1. **Clona o descarga** este repositorio
2. **Abre** el archivo `index.html` en tu navegador web
3. **¡Explora!** Descubre diferentes Pokémon

✅ No requiere instalación de dependencias
✅ No requiere servidor backend
✅ Funciona 100% en el navegador

## 💡 Conceptos Técnicos Demostrados

### 1. Asincronía con Async/Await

```javascript
async function fetchPokemon(idOrName) {
    const response = await fetch(`${API_URLS.pokemon}/${idOrName}`);
    if (!response.ok) throw new Error('Pokémon no encontrado');
    return await response.json();
}
```

### 2. Carga Múltiple con Promise.all()

```javascript
const promises = randomIds.map(id => fetchPokemon(id));
const pokemons = await Promise.all(promises);
pokemons.forEach(pokemon => addPokemonToContainer(pokemon));
```

### 3. Manejo de Errores Robusto

```javascript
try {
    const pokemon = await fetchPokemon(searchTerm);
    addPokemonToContainer(pokemon);
} catch (error) {
    console.error('Error:', error);
    toggleError(true);
} finally {
    toggleLoading(false);
}
```

### 4. Generación de Números Aleatorios Únicos

```javascript
const randomIds = new Set();
while (randomIds.size < 6) {
    randomIds.add(getRandomNumber(1, 898));
}
```

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
```
GET https://pokeapi.co/api/v2/pokemon/{id or name}
```

### Obtener Pokémon por Tipo
```
GET https://pokeapi.co/api/v2/type/{type}
```

### Obtener Información de Especie
```
GET https://pokeapi.co/api/v2/pokemon-species/{id}
```

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
