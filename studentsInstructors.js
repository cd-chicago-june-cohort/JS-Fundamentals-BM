
var students = [
    {first_name : 'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

var instructors = [
    {first_name : 'Michael', last_name : 'Choi'},
    {first_name : 'Martin', last_name : 'Puryear'},  
]



console.log("Students");
for (var s=0; s < students.length; s++) {
    console.log ((s+1) + " " + students[s].first_name + " " + students[s].last_name + " " + (students[s].first_name.length+students[s].last_name.length));
}
console.log("Instructors");
for (var i=0; i<instructors.length; i++) {
    console.log ((i+1) + " " + instructors[i].first_name + " " + instructors[i].last_name + " " + (instructors[i].first_name.length+instructors[i].last_name.length));
}