// Fake API data 1
const data = [
    {
        name: 'Florian', age: 35
    },
    {
        name: 'Florence', age: 18
    },
]

// -------------- 1
class GetUser {
    constructor(data) {
        this.users = data;
    }

    get usersAge() {
        return this.users.map((user) => {
            return user.age;
        })
    }
}
// ------------- 2
class GetUser2 {    
    static getUsersAge(userData) {
        return userData.map((user) => {
            return user.age;
        })
    }
}

const getUserInst = new GetUser(data);
logAverageAge(getUserInst.usersAge);// 26.5

// --------------adapter (2 -> 1)
class Adapter {
    constructor(userData) {
        this.usersAge = GetUser2.getUsersAge(userData);
    }
}

const getUser2Inst = new Adapter(data);
logAverageAge(getUser2Inst.usersAge);// 26.5


function logAverageAge(ages) {
    const sum = ages.reduce((acc, curr) => acc + curr);
    const average = sum / ages.length;
    console.log(average);
}



