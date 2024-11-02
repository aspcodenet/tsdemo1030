// List<int>, List<float>
// Two scenarios - function generics
//                 data generics 

function firstInOrder<DataType>(t1:DataType,t2:DataType,t3:DataType) : DataType{
    if(t1 < t2 && t1 < t3){
        return t1
    }
    if(t2 < t1 && t2 < t3){
        return t2
    }
    return t3
}

const first = firstInOrder<number>(9,4,2)
console.log(first) // 2

const firstString = firstInOrder<string>("Stefan","Anna","Pelle")
console.log(firstString) // "Anna"


function firstInOrder2<DataType>(array:DataType[]) : DataType{
    let smallest:DataType = array[0]
    for( let x of array){
        if ( x < smallest){
            smallest = x
        }
    }
    return smallest
}

const a2 = firstInOrder2<string>(["Stefan", "Anna", "Pelle"])
const a3 = firstInOrder2<number>([1,2,3])
console.log(a2)









interface User{
    id:number,
    email:string,
    username:string
}

interface Product{
    id:number,
    title:string,
}


async function fetchProduct(id: number) : Promise<Product> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
}
const product = await fetchProduct(1)
console.log(product)



async function fetchUser(id: number) : Promise<User> {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    return response.json();
}
const user = await fetchUser(1)
console.log(user)



async function fetchFromApi<T>( resource:string, id: number) : Promise<T> {
    const response = await fetch(`https://fakestoreapi.com/${resource}/${id}`);
    return response.json();
}



const user2 = await fetchFromApi<User>("users", 1)
console.log(user2)

const prod2 = await fetchFromApi<Product>("products", 1)
console.log(prod2)




// Data generics 1 Burger
// 2 


class Burger<T>{
    constructor(public size:T, public name:string){}
}



const b1 = new Burger<string>('small','Smashburger')
const b2 = new Burger('medium','Smashburger')
const b3 = new Burger('large','Smashburger')
const b4 = new Burger<number>(300,'Superburgare')
console.log(b1.size)
console.log(b4.size)
  
  

class PagingData<T>{
    page_number:number
    page_size:number
    total_record_count:number
    records:T[]   
}

const p = new PagingData<Product>();
const p2 = new PagingData<User>();




/* {
  "page_number": 5,
  "page_size": 20,
  "total_record_count": 521,
  "records": [
    {
      "id": 1,
      "name": "Widget #1"
    },
    {
      "id": 2,
      "name": "Widget #2"
    },
    {
      "id": 3,
      "name": "Widget #3"
    }
  ]
} */




const freight = document.getElementById("freight") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
const totalPrice = document.getElementById("totalPrice") as HTMLElement;

function calculateTotalPrice(frakt:number, pris:number) {
    totalPrice.innerText = (frakt+pris).toString()
}

function onRecalculate(){
    calculateTotalPrice(parseInt(freight.value), parseInt(price.value));
}

price.addEventListener("input", onRecalculate);
freight.addEventListener("input", onRecalculate);