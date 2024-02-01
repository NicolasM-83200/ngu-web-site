import axios from 'axios';

export async function getAlbums() {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v19.0/me/albums?fields=photos%7Bid%2Cimages%2Cname%2Cheight%2Cwidth%7D%2Cpicture%2Cname&access_token=${
        import.meta.env.VITE_ACCESS_TOKEN
      }`
    );
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des album:', error);
  }
}
