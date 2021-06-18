import axios from 'axios';

export const getCharacters = async () => {
  const res = await axios(
    'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
  );
  const { data } = res;

  return data;
};
