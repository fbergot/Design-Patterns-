import { get } from "http";

class FecthData {
   constructor(private url: string) {
      this.url = url;
   }

   fetch(observer: { next: (arg: any) => void }) {
      get(this.url, (response) => {
         let data = "";

         response.on("data", (chunk) => {
            data += chunk;
         });

         response.on("end", () => {
            observer.next(JSON.parse(data));
         });

         response.on("err", (err) => {
            console.log(err.message);
         });
      });
   }
}

export default FecthData;
