console.log("Day 21 challenge");
// Question 61:
// (enum) list  for different types of vehicles
enum VehicleType {
    Car,
    Truck,
    Motorcycle
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car); // 0


// Question 62:
// student information data type
interface student {
    name: string;
    age: number;
    courses: string[]; 
}
// student information
let student : student = {
    name: "Alica",
    age: 22,
    courses:["Computer" ," Accounting", "History"]

};
console.log(student);



// Question 63:

//  type alias
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number;  // Only for rectangles
    height?: number; // Only for rectangles
};

// circle Shape 
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// rectangle Shape
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle





  
 
    

