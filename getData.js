
fetch('//www.coingecko.com/api/docs/v3');
const API = "./data.json";

const getData = async () => {
    const response = await fetch(API);
    const data = await response.jason();

}


getData()