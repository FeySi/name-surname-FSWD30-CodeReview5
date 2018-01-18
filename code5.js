   
function myFunction1(){
     Persons[0].Like = Persons[0].Like + 1;
     document.getElementById("morelikes1").innerHTML = (Persons[0].Like);
}
function myFunction2(){
     Persons[1].Like = Persons[1].Like + 1;
     document.getElementById("morelikes2").innerHTML = (Persons[1].Like);
}
function myFunction3(){
     Persons[2].Like = Persons[2].Like + 1;
     document.getElementById("morelikes3").innerHTML = (Persons[2].Like);
}
function myFunction4(){
     Persons[3].Like = Persons[3].Like + 1;
     document.getElementById("morelikes4").innerHTML = (Persons[3].Like);

}


var Persons = [
	{
	Name: " Maxina",
	Surname: " Doe",
	FavouritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	Age: 25,
	myPhoto: "face1.png",
	Like: 0,
	},

	{
	Name: " Max",
	Surname: " Doe",
	FavouritePerformers: ["Brad Pitt", "Sean Connery", "Emma Watson"],
	Age: 32,
	myPhoto: "face2.png",
	Like: 0,
	},

	{
	Name: " Robert",
	Surname: " Musterman",
	FavouritePerformers: ["Justin Timberlake", "Angelina Jolie", "Heath Leadger"],
	Age: 27,
	myPhoto: "face3.ico",
	Like: 0,
	},

	{
	Name: " Thomas",
	Surname: " Musterman",
	FavouritePerformers: ["Dustin Hofmann", "Ed Sheeran", "Justin Timberlake"],
	Age: 29,
	myPhoto: "face4.ico",
	Like: 0,
	}
];
	


document.getElementById("Maxina1").innerHTML = Persons[0].Name;
document.getElementById("Maxina2").innerHTML = Persons[0].Surname; 
document.getElementById("Maxina3").innerHTML = Persons[0].Age;
document.getElementById("morelikes1").innerHTML = Persons[0].Like;
document.getElementById("myPhoto1").innerHTML  =  '<img class="myFunction4css" src="' + Persons[0].myPhoto +'">'

document.getElementById("Max1").innerHTML = Persons[1].Name; 
document.getElementById("Max2").innerHTML = Persons[1].Surname; 
document.getElementById("Max3").innerHTML = Persons[1].Age;
document.getElementById("morelikes2").innerHTML = Persons[1].Like;
document.getElementById("myPhoto2").innerHTML = '<img class="myFunction4css" src="' + Persons[1].myPhoto +'">';

document.getElementById("Robert1").innerHTML = Persons[2].Name;
document.getElementById("Robert2").innerHTML = Persons[2].Surname; 
document.getElementById("Robert3").innerHTML = Persons[2].Age;
document.getElementById("morelikes3").innerHTML = Persons[2].Like;
document.getElementById("myPhoto3").innerHTML = '<img class="myFunction4css" src="' + Persons[2].myPhoto +'">';

document.getElementById("Thomas1").innerHTML = Persons[3].Name; 
document.getElementById("Thomas2").innerHTML = Persons[3].Surname; 
document.getElementById("Thomas3").innerHTML = Persons[3].Age;
document.getElementById("morelikes4").innerHTML = Persons[3].Like;
document.getElementById("myPhoto4").innerHTML = '<img class="myFunction4css" src="' + Persons[3].myPhoto +'">';

												