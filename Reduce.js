const numbers = [12, 23, 30, 14, 55, 60];
const total=numbers.map(num =>num * 2);
console.log(total);

const newNumbersFilter = numbers.filter(num => num > 25);
console.log(newNumbersFilter);

const newNumbersFind = numbers.find(num => num < 30);
console.log(newNumbersFind);

//By Reduce function

const newTotal =numbers.reduce((sum,num)=>

{
    console.log(sum,num);
   return sum+num
}

,0)
console.log(newTotal);

//Reduce Function with object

const friends=[
    {name:"Fred",Money:23},
    {name:"Red",Money:25},
    {name:"Greed",Money:30},
    {name:"Lred",Money:40}
]

const totalFriendMoney=friends.reduce((sum,friend)=>
{   
    console.log(sum,friend);
    return sum+friend.Money;
}
,0)
console.log(totalFriendMoney);
