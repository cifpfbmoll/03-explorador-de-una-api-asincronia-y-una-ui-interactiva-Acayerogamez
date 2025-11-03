document.addEventListener('DOMContentLoaded', () => {
    // --- CONSTANTES Y ELEMENTOS DEL DOM ---
    const API_URLS = {
        pokemon: 'https://pokeapi.co/api/v2/pokemon',
        species: 'https://pokeapi.co/api/v2/pokemon-species',
        type: 'https://pokeapi.co/api/v2/type'
    };

    const elements = {
        container: document.getElementById('pokemonContainer'),
        loading: document.getElementById('loading'),
        error: document.getElementById('error'),
        modal: document.getElementById('modal'),
        modalBody: document.getElementById('modalBody'),
        totalPokemon: document.getElementById('totalPokemon'),
        apiCalls: document.getElementById('apiCalls'),
    };

    const buttons = {
        random: document.getElementById('btnRandom'),
        multiple: document.getElementById('btnMultiple'),
        legendary: document.getElementById('btnLegendary'),
        search: document.getElementById('btnSearch'),
        filter: document.getElementById('btnFilter'),
        closeModal: document.querySelector('.close-btn'),
    };

    const inputs = {
        search: document.getElementById('searchInput'),
        typeFilter: document.getElementById('typeFilter'),
    };

    let apiCallCount = 0;

    // --- FUNCIONES DE ESTADO DE LA UI ---
    const toggleLoading = (show) => elements.loading.classList.toggle('hidden', !show);
    const toggleError = (show) => elements.error.classList.toggle('hidden', !show);

    const updateStats = () => {
        elements.totalPokemon.textContent = elements.container.children.length;
        elements.apiCalls.textContent = apiCallCount;
    };

    // --- LÓGICA DE LA API ---
    async function fetchApi(url) {
        apiCallCount++;
        updateStats();
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
        return await response.json();
    }

    async function fetchPokemon(idOrName) {
        return await fetchApi(`${API_URLS.pokemon}/${idOrName}`);
    }

    async function fetchSpecies(id) {
        return await fetchApi(`${API_URLS.species}/${id}`);
    }

    // --- RENDERIZADO DE POKÉMON ---
    function createPokemonCard(pokemon) {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.dataset.pokemonId = pokemon.id;

        const typesHtml = pokemon.types.map(typeInfo => 
            `<span class="type-badge type-${typeInfo.type.name}">${typeInfo.type.name}</span>`
        ).join('');

        const stats = {
            hp: pokemon.stats.find(s => s.stat.name === 'hp').base_stat,
            attack: pokemon.stats.find(s => s.stat.name === 'attack').base_stat,
            defense: pokemon.stats.find(s => s.stat.name === 'defense').base_stat,
        };

        card.innerHTML = `
            <div class="pokemon-image">
                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                <span class="pokemon-number">#${pokemon.id.toString().padStart(3, '0')}</span>
            </div>
            <div class="pokemon-info">
                <h2 class="pokemon-name">${pokemon.name}</h2>
                <div class="pokemon-types">${typesHtml}</div>
                <div class="pokemon-stats">
                    <div class="stat">
                        <span class="stat-label">HP</span>
                        <span class="stat-value">${stats.hp}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Ataque</span>
                        <span class="stat-value">${stats.attack}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Defensa</span>
                        <span class="stat-value">${stats.defense}</span>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    function addPokemonToContainer(pokemon) {
        const card = createPokemonCard(pokemon);
        elements.container.appendChild(card);
    }

    function clearContainer() {
        elements.container.innerHTML = '';
    }
    
    // --- LÓGICA DEL MODAL ---
    function createModalContent(pokemon, species) {
        const typesHtml = pokemon.types.map(t => `<span class="type-badge type-${t.type.name}">${t.type.name}</span>`).join('');
        const abilities = pokemon.abilities.map(a => a.ability.name).join(', ');
        const descriptionEntry = species.flavor_text_entries.find(entry => entry.language.name === 'es');
        const description = descriptionEntry ? descriptionEntry.flavor_text : 'No hay descripción disponible en español.';

        let statsHtml = '';
        pokemon.stats.forEach(s => {
            const statName = s.stat.name;
            const statValue = s.base_stat;
            const percentage = (statValue / 255) * 100;
            statsHtml += `
                <div class="stat-row">
                    <span class="stat-name">${statName.replace('-', ' ')}</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar" style="width: ${percentage}%"></div>
                    </div>
                    <span class="stat-number">${statValue}</span>
                </div>
            `;
        });
        
        return `
            <div class="modal-header">
                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                <div>
                    <h2 class="modal-name">${pokemon.name}</h2>
                    <span class="modal-number">#${pokemon.id.toString().padStart(3, '0')}</span>
                    <div class="modal-types">${typesHtml}</div>
                </div>
            </div>
            <div class="modal-body">
                <h3>Descripción de la Pokédex</h3>
                <p>${description}</p>
                <div class="modal-details">
                    <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                    <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                    <p><strong>Habilidades:</strong> ${abilities}</p>
                </div>
                <h3>Estadísticas Base</h3>
                <div class="modal-stats">${statsHtml}</div>
            </div>
        `;
    }

    async function openModal(pokemonId) {
        toggleLoading(true);
        try {
            const pokemon = await fetchPokemon(pokemonId);
            const species = await fetchSpecies(pokemonId);
            elements.modalBody.innerHTML = createModalContent(pokemon, species);
            elements.modal.classList.remove('hidden');
        } catch (err) {
            console.error(err);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }
    
    function closeModal() {
        elements.modal.classList.add('hidden');
        elements.modalBody.innerHTML = '';
    }
    
    // --- MANEJADORES DE EVENTOS ---
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    async function handleRandomClick() {
        clearContainer();
        toggleLoading(true);
        toggleError(false);
        try {
            const randomId = getRandomNumber(1, 898);
            const pokemon = await fetchPokemon(randomId);
            addPokemonToContainer(pokemon);
        } catch (error) {
            console.error('Error:', error);
            toggleError(true);
        } finally {
            toggleLoading(false);
            updateStats();
        }
    }

    async function handleMultipleClick() {
        clearContainer();
        toggleLoading(true);
        toggleError(false);
        try {
            const randomIds = new Set();
            while (randomIds.size < 6) {
                randomIds.add(getRandomNumber(1, 898));
            }
            const promises = Array.from(randomIds).map(id => fetchPokemon(id));
            const pokemons = await Promise.all(promises);
            pokemons.forEach(addPokemonToContainer);
        } catch (error) {
            console.error('Error:', error);
            toggleError(true);
        } finally {
            toggleLoading(false);
            updateStats();
        }
    }

    async function handleLegendaryClick() {
        clearContainer();
        toggleLoading(true);
        toggleError(false);
        const legendaryIds = [144, 145, 146, 150, 243, 244, 245, 249, 250];
        try {
            const promises = legendaryIds.map(id => fetchPokemon(id));
            const pokemons = await Promise.all(promises);
            pokemons.forEach(addPokemonToContainer);
        } catch (error) {
            console.error('Error:', error);
            toggleError(true);
        } finally {
            toggleLoading(false);
            updateStats();
        }
    }

    async function handleSearchClick() {
        const searchTerm = inputs.search.value.trim().toLowerCase();
        if (!searchTerm) return;
        clearContainer();
        toggleLoading(true);
        toggleError(false);
        try {
            const pokemon = await fetchPokemon(searchTerm);
            addPokemonToContainer(pokemon);
        } catch (error) {
            console.error('Error:', error);
            toggleError(true);
        } finally {
            toggleLoading(false);
            updateStats();
        }
    }

    async function handleFilterClick() {
        const selectedType = inputs.typeFilter.value;
        if (!selectedType) return;
        clearContainer();
        toggleLoading(true);
        toggleError(false);
        try {
            const typeData = await fetchApi(`${API_URLS.type}/${selectedType}`);
            const promises = typeData.pokemon.slice(0, 12).map(p => fetchPokemon(p.pokemon.name));
            const pokemons = await Promise.all(promises);
            pokemons.forEach(addPokemonToContainer);
        } catch (error) {
            console.error('Error:', error);
            toggleError(true);
        } finally {
            toggleLoading(false);
            updateStats();
        }
    }
    
    // --- ASIGNACIÓN DE EVENT LISTENERS ---
    buttons.random.addEventListener('click', handleRandomClick);
    buttons.multiple.addEventListener('click', handleMultipleClick);
    buttons.legendary.addEventListener('click', handleLegendaryClick);
    buttons.search.addEventListener('click', handleSearchClick);
    inputs.search.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearchClick();
    });
    buttons.filter.addEventListener('click', handleFilterClick);
    buttons.closeModal.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
    });
    elements.container.addEventListener('click', (e) => {
        const card = e.target.closest('.pokemon-card');
        if (card && card.dataset.pokemonId) {
            openModal(card.dataset.pokemonId);
        }
    });

    // --- INICIALIZACIÓN ---
    handleMultipleClick();
});