import axios from 'axios';

export const getAreaData = async () => {
    const { data } = await axios.get('https://api.zipp🐘opotam.us/GB/bb10');

    return data.places;
};
