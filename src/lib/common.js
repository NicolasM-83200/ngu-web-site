import axios from 'axios';

export async function getDatas() {
  try {
    const response = await axios.get(
      // `https://graph.facebook.com/v19.0/me/albums?fields=photos%7Bid%2Cimages%2Cname%2Cheight%2Cwidth%7D%2Cpicture%2Cname&access_token=${
      //   import.meta.env.VITE_ACCESS_TOKEN
      // }`
      `https://graph.facebook.com/v19.0/me?fields=photos%7Balbum%2Cwebp_images%7D%2Calbums%7Bname%2Cpicture%7Burl%7D%2Cphotos%7Balbum%2Cwebp_images%7D%7D%2Cfeed%7Bfull_picture%7D&access_token=${
        import.meta.env.VITE_ACCESS_TOKEN
      }`
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des album:', error);
    return null;
  }
}
