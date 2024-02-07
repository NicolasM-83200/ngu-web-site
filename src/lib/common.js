import axios from 'axios';

export async function getDatas() {
  try {
    const response = await axios.get(
      // `https://graph.facebook.com/v19.0/me/albums?fields=photos%7Bid%2Cimages%2Cname%2Cheight%2Cwidth%7D%2Cpicture%2Cname&access_token=${
      //   import.meta.env.VITE_ACCESS_TOKEN
      // }`
      `https://graph.facebook.com/v19.0/me?fields=id%2Calbums%7Bpicture%7Burl%7D%2Cname%2Cphotos.limit(25)%7Bheight%2Cwidth%2Cwebp_images%2Cname%7D%7D%2Cphotos.limit(25)%7Bheight%2Cwebp_images%2Cwidth%2Cname%7D%2Cvideos%7Bsource%2Cthumbnails%2Ctitle%7D&access_token=${
        import.meta.env.VITE_ACCESS_TOKEN
      }`
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des album:', error);
    return null;
  }
}
