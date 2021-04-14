class Room{
    constructor(name, length, width, capacity = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.capacity = capacity;
        this.available = true;
    }
    getArea(){
        const area =(this.length * this.width); {
            return area;
        }
                
    }

    getPerimeter(){
        const perimeter = (this.length + this.width)*2;{
            return perimeter;
        }
    }
    
}

let room1 = new Room ('Sun', 30, 20);
let room2 = new Room ('Green', 15 , 20, 18);
room2.available = false;


console.log(room1);
console.log(room2);
console.log(room1.getArea())
console.log(room1.getPerimeter())
console.log(room2.getArea())
console.log(room2.getPerimeter())
console.log(room2.capacity)
console.log(room1.available)
console.log(room2.available)


