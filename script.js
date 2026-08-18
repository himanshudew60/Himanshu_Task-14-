let students = [
    {
        name: "Himanshu Dewangan",
        marks: "90%",
        class: "10th",
        address: "New Delhi"
    },
    {
        name: "Ajay Kumar",
        marks: "80%",
        class: "10th",
        address: "Mumbai"
    },
    {
        name: "Sanjay Kumar",
        marks: "92%",
        class: "11th",
        address: "Pune"
    },
    {
        name: "Priya Sharma",
        marks: "88%",
        class: "9th",
        address: "Jaipur"
    },
    {
        name: "Rahul Verma",
        marks: "75%",
        class: "12th",
        address: "Lucknow"
    },
    {
        name: "Neha Singh",
        marks: "95%",
        class: "11th",
        address: "Bhopal"
    },
    {
        name: "Amit Patel",
        marks: "82%",
        class: "10th",
        address: "Ahmedabad"
    },
    {
        name: "Pooja Gupta",
        marks: "89%",
        class: "9th",
        address: "Indore"
    },
    {
        name: "Rohit Sharma",
        marks: "77%",
        class: "12th",
        address: "Nagpur"
    },
    {
        name: "Anjali Mishra",
        marks: "91%",
        class: "11th",
        address: "Raipur"
    },
    {
        name: "Vikas Yadav",
        marks: "84%",
        class: "10th",
        address: "Patna"
    },
    {
        name: "Sneha Joshi",
        marks: "93%",
        class: "12th",
        address: "Chandigarh"
    },
    {
        name: "Arjun Mehta",
        marks: "79%",
        class: "9th",
        address: "Surat"
    },
    {
        name: "Kavita Roy",
        marks: "87%",
        class: "11th",
        address: "Kolkata"
    },
    {
        name: "Deepak Sahu",
        marks: "85%",
        class: "10th",
        address: "Raipur"
    }
];

let searchInput = document.querySelector(".search-box input");
let searchButton = document.querySelector(".search-btn");
let dataSection = document.querySelector("#data-section");

function showStudents(studentData) {

    dataSection.innerHTML = studentData.map(function(student) {
        return `
            <div class="boxes">
                <p>Student Name: <span>${student.name}</span></p>
                <p>Marks: <span>${student.marks}</span></p>
                <p>Class: <span>${student.class}</span></p>
                <p>Address: <span>${student.address}</span></p>
            </div>
        `;
    }).join("");
}

showStudents(students);

searchButton.addEventListener("click", function() {

    let searchValue = searchInput.value.toLowerCase().trim();

    let filteredStudents = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchValue);
    });

    

    showStudents(filteredStudents);
});