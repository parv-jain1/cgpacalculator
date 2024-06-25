// script.js
document.getElementById('generateCourses').addEventListener('click', generateCourses);
document.getElementById('calculateCGPA').addEventListener('click', calculateCGPA);

function generateCourses() {
    const numCourses = document.getElementById('numCourses').value;
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';

        const courseName = document.createElement('input');
        courseName.type = 'text';
        courseName.placeholder = `Course ${i + 1} Name`;
        courseName.required = true;

        const courseCredits = document.createElement('input');
        courseCredits.type = 'number';
        courseCredits.placeholder = 'Credits';
        courseCredits.min = '1';
        courseCredits.required = true;

        const courseGrade = document.createElement('select');
        const grades = ['S','A', 'B', 'C', 'D', 'E','f','U','W'];
        const gradePoints = [9.0, 8.0, 7.0, 6.0, 4.0,0.0,0.0,0.0];
        for (let j = 0; j < grades.length; j++) {
            const option = document.createElement('option');
            option.value = gradePoints[j];
            option.textContent = grades[j];
            courseGrade.appendChild(option);
        }

        courseDiv.appendChild(courseName);
        courseDiv.appendChild(courseCredits);
        courseDiv.appendChild(courseGrade);
        coursesContainer.appendChild(courseDiv);
    }
}

function calculateCGPA() {
    const coursesContainer = document.getElementById('coursesContainer');
    const courses = coursesContainer.getElementsByClassName('course');
    let totalCredits = 0;
    let totalPoints = 0;

    for (let course of courses) {
        const credits = parseFloat(course.children[1].value);
        const grade = parseFloat(course.children[2].value);
        totalCredits += credits;
        totalPoints += credits * grade;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is ${cgpa.toFixed(2)}`;
}
