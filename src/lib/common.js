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

export const mouseMoveHandler = (element, e) => {
  let elRect = element.getBoundingClientRect();

  let x = e.clientX - elRect.x;
  let y = e.clientY - elRect.y;

  let midCardWidth = elRect.width / 2;
  let midCardHeight = elRect.height / 2;

  let angleY = -(x - midCardWidth) / 4;
  let angleX = (y - midCardHeight) / 4;

  let highlightX = (x / elRect.width) * 100;
  let highlightY = (y / elRect.height) * 100;

  element.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  element.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  element.children[1].style.background = `radial-gradient(
    circle at ${highlightX}% ${highlightY}%,
    rgb(184, 196, 211),
    transparent)`;
};

export const mouseLeaveHandler = (element) => {
  element.addEventListener('mouseleave', () => {
    element.children[0].style.transform = 'rotateX(0) rotateY(0)';
    element.children[1].style.transform = 'rotateX(0) rotateY(0)';
  });
};
