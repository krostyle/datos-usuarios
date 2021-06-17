const URL = 'https://randomuser.me/api/?results=10'
import { createData } from './module.js'

(async() => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        //console.log(data.results);
        createData(data.results)
    } catch (error) {
        console.log(error);
    }

})();