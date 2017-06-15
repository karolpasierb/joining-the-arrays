//umieszczam dwie tablice
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
//łączę je ze sobą
var allNames = femaleNames.concat(maleNames);
//miejsce gdzie wpisujemy dowolną wartość zmiennej "newName"
var newName = 'Marian';
//sprawdzam czy połączona tablica zawiera już to imię, korzystając z funkcji "indexOf"
var indexOfNewName = allNames.indexOf(newName);
/*
poprzez instrukcję warunkową upewniam się, że nowe imię znajdzie się w tablicy tylko wówczas,
gdy nie ma go tu jeszcze, a więc, gdy "indexOfNewName" równa się "-1" i wtenczas uruchamiam funkcję "push"
*/
if (indexOfNewName === -1) {
	allNames.push(newName);
}
//wyświetlam połączoną tablicę z ewentualnym dodaniem nowego imienia
console.log(allNames);