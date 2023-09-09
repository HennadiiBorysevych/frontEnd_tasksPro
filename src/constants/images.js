import plant from 'assets/images/welcomeAndPlant/plant.png';
import plantWebp from 'assets/images/welcomeAndPlant/plant.webp';
import plantx2 from 'assets/images/welcomeAndPlant/plant@2x.png';
import plantWebpx2 from 'assets/images/welcomeAndPlant/plant@2x.webp';
import plantx3 from 'assets/images/welcomeAndPlant/plant@3x.png';
import plantWebpx3 from 'assets/images/welcomeAndPlant/plant@3x.webp';
import welcome from 'assets/images/welcomeAndPlant/welcome.png';
import welcomeWebp from 'assets/images/welcomeAndPlant/welcome.webp';
import welcomex2 from 'assets/images/welcomeAndPlant/welcome@2x.png';
import welcomeWebpx2 from 'assets/images/welcomeAndPlant/welcome@2x.webp';
import welcomex3 from 'assets/images/welcomeAndPlant/welcome@3x.png';
import welcomeWebpx3 from 'assets/images/welcomeAndPlant/welcome@3x.webp';

const plantsImages = [
  { src: plantWebpx3, type: 'image/webp', dpi: 3 },
  { src: plantWebpx2, type: 'image/webp', dpi: 2 },
  { src: plantWebp, type: 'image/webp', dpi: 1 },
  { src: plantx3, type: 'image/png', dpi: 3 },
  { src: plantx2, type: 'image/png', dpi: 2 },
  { src: plant, type: 'image/png', dpi: 1 },
];

const welcomeImages = [
  { src: welcomeWebpx3, type: 'image/webp', dpi: 3 },
  { src: welcomeWebpx2, type: 'image/webp', dpi: 2 },
  { src: welcomeWebp, type: 'image/webp', dpi: 1 },
  { src: welcomex3, type: 'image/png', dpi: 3 },
  { src: welcomex2, type: 'image/png', dpi: 2 },
  { src: welcome, type: 'image/png', dpi: 1 },
];

const images = {
  plantsImages,
  welcomeImages,
};

export default images;
