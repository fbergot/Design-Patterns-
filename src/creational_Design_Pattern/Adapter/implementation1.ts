const _data = [
   {
      name: "Florian",
      age: 35,
   },
   {
      name: "Florence",
      age: 18,
   },
];

type Data = { name: string; age: number }[];

// -------------- 1 (Old version)
class GetUser {
   users: Data;
   constructor(data: Data) {
      this.users = data;
   }

   get usersAge(): number[] {
      return this.users.map((user) => {
         return user.age;
      });
   }
}

// ------------- 2 (new Version)
class GetUser2 {
   static getUsersAge(userData: Data): number[] {
      return userData.map((user) => {
         return user.age;
      });
   }
}

// -------------------------------- Adapter (1 -> 2)
class Adapter {
   usersAge: number[];
   constructor(userData: Data) {
      this.usersAge = GetUser2.getUsersAge(userData);
   }
}

function logAverageAge(ages: number[]) {
   const sum = ages.reduce((acc, curr) => acc + curr);
   const average = sum / ages.length;
   console.log(average);
}

const adapter = new Adapter(_data);

logAverageAge(adapter.usersAge); // 26.5
