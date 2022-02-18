// Fake API data
const fakeData = {
    data: [
        {"name":"Amsterdam","latLng":"52.3700° N, 4.8900° E"},
        {"name":"London","latLng":"51.5171° N, 0.1062° W"}
    ]
}

class GeoLoc {
    constructor(data) {
        this.responseAPI = data;
    }
    getLatLng(city) {
        console.log('from API');
        const cityData = this.responseAPI.data.filter((cityData) => {
            return cityData.name === city;
        })
        return cityData[0];
    }
}

// without Proxy
const city = 'London';
const geoLocInst = new GeoLoc(fakeData);
console.log(geoLocInst.getLatLng(city)); //  from API: { name: "London", latLng: "51.5171° N, 0.1062° W" }

// ------------- Proxy
class ProxyGeoLoc {
    constructor() {
        this.cache = [];
        this.geoLoc = new GeoLoc(fakeData);
    }
    getLatLng(city) {
        const cachedData = this.cache.find((cityData) => {
            return cityData.name === city;
        })
        if (cachedData) {
            console.log('from cache');
            return cachedData;
        }
        const data = this.geoLoc.getLatLng(city);
        this.cache.push(data);
        return data;
    }
}

const proxyInst = new ProxyGeoLoc();

console.log(proxyInst.getLatLng(city)); // from API  { name: "London", latLng: "51.5171° N, 0.1062° W" }
console.log(proxyInst.getLatLng(city)); // from cache  { name: "London", latLng: "51.5171° N, 0.1062° W" }
console.log(proxyInst.getLatLng(city)); // from cache  { name: "London", latLng: "51.5171° N, 0.1062° W" }