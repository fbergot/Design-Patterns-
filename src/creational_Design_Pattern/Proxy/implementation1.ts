const fakeData = {
   data: [
      { name: "Amsterdam", latLng: "52.3700° N, 4.8900° E" },
      { name: "London", latLng: "51.5171° N, 0.1062° W" },
   ],
};

type City = { name: string; latLng: string };
type DataType = {
   data: City[];
};

class GeoLoc {
   responseAPI: DataType;

   constructor(data: DataType) {
      this.responseAPI = data;
   }
   getLatLng(city: string): City {
      console.log("from API");
      const cityData = this.responseAPI.data.filter((cityData) => {
         return cityData.name === city;
      });
      return cityData[0];
   }
}

// without Proxy
const city = "London";
const geoLocInst = new GeoLoc(fakeData);
console.log(geoLocInst.getLatLng(city)); //  from API: { name: "London", latLng: "51.5171° N, 0.1062° W" }
console.log(geoLocInst.getLatLng(city)); //  from API: { name: "London", latLng: "51.5171° N, 0.1062° W" }

// ------------------------------------ Proxy
class ProxyGeoLoc {
   cache: City[];
   geoLoc: GeoLoc;

   constructor() {
      this.cache = [];
      this.geoLoc = new GeoLoc(fakeData);
   }
   getLatLng(city: string): City {
      const cachedData = this.cache.length
         ? this.cache.find((cityData) => {
              return cityData.name === city;
           })
         : null;
      if (cachedData) {
         console.log("from cache");
         return cachedData;
      }
      const data = this.geoLoc.getLatLng(city);
      this.cache.push(data);
      return data;
   }
}

const city2 = "Amsterdam";
const proxyInst = new ProxyGeoLoc();

console.log(proxyInst.getLatLng(city)); // from API  { name: "London", latLng: "51.5171° N, 0.1062° W" }
console.log(proxyInst.getLatLng(city)); // from cache  { name: "London", latLng: "51.5171° N, 0.1062° W" }

console.log(proxyInst.getLatLng(city2)); // from API { name: 'Amsterdam', latLng: '52.3700° N, 4.8900° E' }
console.log(proxyInst.getLatLng(city2)); // from cache  { name: 'Amsterdam', latLng: '52.3700° N, 4.8900° E' }
