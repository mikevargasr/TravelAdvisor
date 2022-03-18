import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '67f4a1cafemshc9d647683d6daa7p1689d5jsn94543a597008'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
};

