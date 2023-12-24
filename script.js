// Only define 'students' array if it's not already defined
if (!window.students) {
    const students = [
        { rollNumber: 1, name: 'John Doe', marks: [85, 92, 78, 90], photo: 'https://images.unsplash.com/photo-1700393289642-0b9b7f3c6aea?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk3MzR8&ixlib=rb-4.0.3&q=85' },
        { rollNumber: 2, name: 'Alice Johnson', marks: [78, 88, 92, 85], photo: 'https://images.unsplash.com/photo-1701014159141-639d07c4eba4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM0MDk3MzR8&ixlib=rb-4.0.3&q=85' },
        // Add other student data here with correct image URLs
    ];

    function showResult() {
        const rollNumberInput = document.getElementById('rollNumber');
        const rollNumber = parseInt(rollNumberInput.value);

        console.log('Entered Roll Number:', rollNumber);

        const student = students.find(student => student.rollNumber === rollNumber);

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
}
