console.log("Day 21 challenge");
// Question 61:
// (enum) list  for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // 0
// student information
var student = {
    name: "Alica",
    age: 22,
    courses: ["Computer", " Accounting", "History"]
};
console.log(student);
// circle Shape 
var circle = {
    kind: "circle",
    radius: 5
};
// rectangle Shape
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
