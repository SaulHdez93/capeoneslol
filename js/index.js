// index.js
import { getChampionsData } from './chmps.js'; // Importa la función desde api.js

document.getElementById('button').addEventListener('click', async function() {
  // Limpiar cualquier contenido anterior (si es necesario)
  const gridContainer = document.getElementById('champion-grid');
  gridContainer.innerHTML = ''; // Limpiar las tarjetas previas

  // Obtener los datos de los campeones desde la API usando la función importada
  try {
    const champions = await getChampionsData();

    // Iteramos sobre los campeones y generamos las tarjetas
    Object.values(champions).forEach(champion => {
      // Crear el contenedor de la tarjeta
      const card = document.createElement('div');
      card.classList.add('champion-card');

      // Crear el contenido de la tarjeta (cara delantera)
      const cardInner = document.createElement('div');
      cardInner.classList.add('champion-card-inner');
      
      // Cara frontal con la imagen, nombre y descripción
      const cardFront = document.createElement('div');
      cardFront.classList.add('champion-card-front');
      const championImg = document.createElement('img');
      championImg.src = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion.id}.png`;
      championImg.alt = champion.name;
      
      // Crear el nombre y la descripción del campeón
      const championInfo = document.createElement('div');
      championInfo.classList.add('champion-info');
      const championName = document.createElement('h3');
      championName.textContent = champion.name;
      const championDesc = document.createElement('p');
      championDesc.textContent = champion.title;  // Descripción del campeón
      championInfo.appendChild(championName);
      championInfo.appendChild(championDesc);

      cardFront.appendChild(championImg);
      cardFront.appendChild(championInfo);
      cardInner.appendChild(cardFront);

      // Cara trasera con estadísticas (Ataque, Defensa, Magia, Dificultad)
      const cardBack = document.createElement('div');
      cardBack.classList.add('champion-card-back');
      const statsTitle = document.createElement('h3');
      statsTitle.textContent = champion.name;
      cardBack.appendChild(statsTitle);

      // Agregar las estadísticas de cada campeón (ataque, defensa, magia, dificultad)
      const statsList = document.createElement('ul');
      const attackItem = document.createElement('li');
      attackItem.textContent = `Ataque: ${champion.info.attack}`;
      const defenseItem = document.createElement('li');
      defenseItem.textContent = `Defensa: ${champion.info.defense}`;
      const magicItem = document.createElement('li');
      magicItem.textContent = `Magia: ${champion.info.magic}`;
      const difficultyItem = document.createElement('li');
      difficultyItem.textContent = `Dificultad: ${champion.info.difficulty}`;
      const tagsItem = document.createElement('li');
      tagsItem.textContent= `Roles: ${champion.tags}`;

      statsList.appendChild(attackItem);
      statsList.appendChild(defenseItem);
      statsList.appendChild(magicItem);
      statsList.appendChild(difficultyItem);
      statsList.appendChild(tagsItem);
      cardBack.appendChild(statsList);

      cardInner.appendChild(cardBack);

      // Agregar la tarjeta a la cuadrícula
      card.appendChild(cardInner);
      gridContainer.appendChild(card);
    });

  } catch (error) {
    console.error('Error al cargar los campeones:', error);
    const errorMessage = document.createElement('div');
    errorMessage.textContent = '¡Error al cargar los campeones!';
    errorMessage.classList.add('error');
    document.body.appendChild(errorMessage);
  }
});
