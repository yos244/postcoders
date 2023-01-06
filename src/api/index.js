import axios from 'axios';


const areaDataCache = {};
export const getAreaData = async (postcode) => {

  if (!areaDataCache[postcode]) {


    const { data } = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);
    areaDataCache[postcode] = data.places
  }

  return areaDataCache[postcode];
};
