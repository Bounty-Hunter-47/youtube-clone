const eye = ['normal', 'happy', 'sleepy', 'mischief'];
const mouth = ['smile', 'open', 'surprise', 'unhappy'];

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getMoodieData = () => {
  const data = {
    name: eye[randomNumber(0, eye.length - 1)],
    eye: eye[randomNumber(0, eye.length - 1)],
    mouth: mouth[randomNumber(0, mouth.length - 1)],
  }
  return data;
}
export default getMoodieData;