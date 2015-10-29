var students = [];
var newAddedStudent = [];

document.getElementById('addButton').addEventListener('click', addStudent);

var studentNameInput = document.getElementById('studentName');
studentNameInput.addEventListener('keypress', keyPressed);
studentNameInput.focus();
var randomName = document.getElementById('randomName');
var groups = document.getElementById('groups');
document.getElementById('randomButton').addEventListener('click', pickRandom);
document.getElementById('groupStudents').addEventListener('click', generateGroups);
document.getElementById('groupOfNumberButton').addEventListener('click', generateGroupOf)
var groupOfInput = document.getElementById('groupOf');
groupOfInput.addEventListener('keypress', keyPressedGroupOf);

function keyPressed(e) {
	if (e.charCode === 13) {
		addStudent();
	}
}

function keyPressedGroupOf(e) {
	if (e.charCode === 13) {
		generateGroupOf();
	}
}

function addStudent(){
	var studentName = studentNameInput.value;
	if(studentName) {
		if(studentName.indexOf(',')){
			var newStudentName = studentName.split(',');
			for (var i = 0; i < newStudentName.length; i++)
				if(newStudentName[i].trim() !== "") {
					students.push(newStudentName[i].trim());
					newAddedStudent.push(newStudentName[i].trim());
				}
		}
		else if (studentName !== "") {
			students.push(studentName);
			newAddedStudent.push(studentName);
		}
		studentNameInput.value = '';
		studentNameInput.focus();
		console.log('students', students);
		updateList();
	}
}

function updateList() {
	var div;
	var bigDiv = document.createElement('div');
	newAddedStudent.forEach(function(name) {
		div = document.createElement('div');
		div.textContent = name;
		div.setAttribute('class', 'nameItem');
		bigDiv.appendChild(div);
	});
	document.getElementById('bigContainer').appendChild(bigDiv);
	newAddedStudent = [];

}

function pickRandom() {
	randomName.innerHTML = "";
	var randomNum = Math.floor(Math.random()*students.length)
	var bigDiv = document.createElement('div');
	var div = document.createElement("div");
	div.textContent = students[randomNum];
	div.setAttribute('class', 'randomName');
	bigDiv.appendChild(div);
	randomName.appendChild(bigDiv);
}

function generateGroups() {
	groups.innerHTML = "";
	var studentsCopy = students.concat();
	var shuffledStudents = [];
	while(studentsCopy.length > 0) {
		var randomPick = Math.floor(Math.random()*studentsCopy.length);
		var randomSplice = studentsCopy.splice(randomPick, 1);
		shuffledStudents = shuffledStudents.concat(randomSplice);
	}

	var div1, div2, div3;
	var bigDiv = document.createElement('div');
	var groupNumber = 1;
	for(var i = 0; i < shuffledStudents.length; i++) {
		div1 = document.createElement('div');
		div1.textContent = "Group: " + groupNumber;
		div1.setAttribute('class', 'groupNmber');
		bigDiv.appendChild(div1);
		div2 = document.createElement('div');
		div2.textContent = "Student 1: " + shuffledStudents[i];
		div2.setAttribute('class', 'firstStudentInGroup');
		bigDiv.appendChild(div2);
		i++;
		if(i < shuffledStudents.length) {
			div3 = document.createElement('div');
			div3.textContent = "Student 2: " + shuffledStudents[i];
			div3.setAttribute('class', 'secondStudentInGroup');
			bigDiv.appendChild(div3);
		}
		groupNumber++;
	}
	document.getElementById('groups').appendChild(bigDiv);

}
	

function generateGroupOf() {

}

	// var randomz = Math.floor(Math.random()*students.length)
	// // var condition;
	// var shuffledStudentsNumbers = [randomz];
	// for(var i = 0; shuffledStudentsNumbers.length < students.length; i++) {
	// 	randomz = Math.floor(Math.random()*students.length);
	// 	if(shuffledStudentsNumbers.indexOf(randomz)) {
	// 		console.log("yes");
	// 	} else {
	// 		console.log('no');
	// 		shuffledStudentsNumbers.push(randomz);
	// 	}

		// shuffledStudentsNumbers.forEach(function(number) {
		// 	if(randomz !== number) {
		// 		condition = true;
		// 		console.log("TRUE", shuffledStudentsNumbers);
		// 	} else {
		// 		condition = false;
		// 	}
		// });
		// if(condition) {
		// 	shuffledStudentsNumbers.push(randomz);
		// }


