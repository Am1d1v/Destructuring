

/*

const userProfile = {
    name: "Dima",
    age: 23,
    hasSignedAgreement: true
}

const {name, age} = userProfile;
const {hasSignedAgreement} = userProfile;

console.log(name);
console.log(hasSignedAgreement);

*/

/*

const fruits = ["Apple", "Banana"];
const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);

*/

/*

const userProfile = {
    name: "Dima",
    comments: 30,
    hasSignedAgreement: true
}

const userInfo = ({name, comments}) => {
    if(!comments){
        console.log(`User ${name} has no comments`);
        return `User ${name} has no comments`
    } else {
        console.log(`User ${name} has ${comments} comments`);
        return `User ${name} has ${comments} comments`
    } 
}

userInfo(userProfile);

*/

const userProfile = {
    name: "Dima",
    comments: 10,
    hasSignedAgreement: true
}

const userInfo = (profile)=>{
const {name, comments} = profile;
if (comments > 0) {
    console.log(`User ${name} has ${comments} comments`);
}
}

userInfo(userProfile);