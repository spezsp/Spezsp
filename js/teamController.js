angular
.module("myApp")
.controller("teamController", function() {
	var vm = this;
	vm.players = [
		{
			name : "Thibaut Courtois", 
			date : "11.05.1992", 
			position : "Goalkeeper", 
			number : "13",
			flag : "img/belgium.png",
			country : "Belgium"
		},
		{
			name : "Asmir Begovic", 
			date : "20.06.1987", 
			position : "Goalkeeper", 
			number : "1",
			flag : "img/bosnia-herzegovina.png",
			country : "Bosnia-Herzegovina"},
		{
			name : "César Azpilicueta ", 
			date : "28.08.1989", 
			position : "Defender", 
			number : "28",
			flag : "img/spain.png",
			country : "Spain"},
		{
			name : "Baba Rahman", 
			date : "02.07.1994", 
			position : "Defender", 
			number : "6",
			flag : "img/ghana.png",
			country : "Ghana"},
		{
			name : "Kurt Zouma", 
			date : "27.10.1994", 
			position : "Defender", 
			number : "5",
			flag : "img/france.png",
			country : "France"},
		{
			name : "John Terry", 
			date : "07.12.1980", 
			position : "Defender", 
			number : "26",
			flag : "img/england.png",
			country : "England"},
		{
			name : "Branislav Ivanovic", 
			date : "22.02.1984", 
			position : "Defender", 
			number : "2",
			flag : "img/serbia.png",
			country : "Serbia"},
		{
			name : "Gary Cahill", 
			date : "19.12.1985", 
			position : "Defender", 
			number : "24",
			flag : "img/england.png",
			country : "England"},
		{
			name : "Eden Hazard", 
			date : "07.01.1991", 
			position : "Midfielder", 
			number : "10",
			flag : "img/belgium.png",
			country : "Belgium"},
		{
			name : "Cesc Fàbregas", 
			date : "04.05.1987", 
			position : "Midfielder", 
			number : "4",
			flag : "img/spain.png",
			country : "Spain"},
		{
			name : "Nemanja Matic", 
			date : "01.08.1988", 
			position : "Midfielder", 
			number : "21",
			flag : "img/serbia.png",
			country : "Serbia"},
		{
			name : "John Mikel Obi", 
			date : "22.04.1987", 
			position : "Midfielder", 
			number : "12",
			flag : "img/nigeria.png",
			country : "Nigeria"},
		{
			name : "Oscar ", 
			date : "09.09.1991", 
			position : "Midfielder", 
			number : "8",
			flag : "img/brazil.png",
			country : "Brazil"},
		{
			name : "Pedro", 
			date : "28.07.1987", 
			position : "Midfielder", 
			number : "17",
			flag : "img/spain.png",
			country : "Spain"},
		{
			name : "Willian", 
			date : "09.08.1988", 
			position : "Midfielder", 
			number : "22",
			flag : "img/brazil.png",
			country : "Brazil"},
		{
			name : "Kenedy", 
			date : "08.02.1996", 
			position : "Midfielder", 
			number : "16",
			flag : "img/brazil.png",
			country : "Brazil"},
		{
			name : "Diego Costa", 
			date : "07.10.1988", 
			position : "Forward", 
			number : "19",
			flag : "img/spain.png",
			country : "Spain"},
		{
			name : "Loïc Remy", 
			date : "02.01.1987", 
			position : "Forward", 
			number : "18",
			flag : "img/france.png",
			country : "France"}
	];
});