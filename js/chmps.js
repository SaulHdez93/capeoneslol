// api.js
export async function getChampionsData() {
  try {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json');
    const data = await response.json();
    return data.data;  // Devuelve solo los datos de los campeones
  } catch (error) {
    console.error('Error al cargar los campeones:', error);
    throw error;  // Lanza el error para que pueda ser manejado en index.js
  }
}
