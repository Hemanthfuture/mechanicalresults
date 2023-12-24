// Define 'students' array if it's not already defined
if (!window.students) {
    window.students = [
        { rollNumber: 1, name: 'John Doe', marks: [85, 92, 78, 90], photo: 'https://images.unsplash.com/photo-1700393289642-0b9b7f3c6aea?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk3MzR8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 2, name: 'Alice Johnson', marks: [78, 88, 92, 85], photo: 'https://images.unsplash.com/photo-1701014159141-639d07c4eba4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk3MzR8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 3, name: 'Bob Smith', marks: [90, 85, 92, 88], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 4, name: 'Emily Davis', marks: [95, 88, 91, 82], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 5, name: 'Michael Wilson', marks: [82, 90, 87, 94], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 6, name: 'Sophia Clark', marks: [88, 92, 85, 79], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 7, name: 'Daniel Martinez', marks: [91, 85, 94, 88], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 8, name: 'Olivia Thompson', marks: [84, 91, 87, 90], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 9, name: 'Ethan Garcia', marks: [89, 92, 88, 85], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 10, name: 'Ava Hernandez', marks: [87, 90, 84, 92], photo: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk4MzN8&ixlib=rb-4.0.3&q=85' }
    ];
}

function showResult() {
    const rollNumberInput = document.getElementById('rollNumber');
    const rollNumber = parseInt(rollNumberInput.value);

    console.log('Entered Roll Number:', rollNumber);

    const student = window.students.find(student => student.rollNumber === rollNumber);

    console.log('Student Found:', student);

    if (student) {
        displayStudentResult(student);
    } else {
        alert('Student not found!');
    }
}

function displayStudentResult(student) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');

    const studentImage = document.createElement('img');
    studentImage.src = student.photo;
    studentImage.alt = `${student.name}'s Photo`;
    studentDiv.appendChild(studentImage);

    const studentName = document.createElement('h2');
    studentName.textContent = student.name;
    studentDiv.appendChild(studentName);

    const studentMarks = document.createElement('p');
    studentMarks.textContent = `Marks: ${student.marks.join(', ')}`;
    studentDiv.appendChild(studentMarks);

    resultContainer.appendChild(studentDiv);
}
