function showProjects(category) {

    let projects = document.getElementsByClassName("project");

    for (let i = 0; i < projects.length; i++) {

        if (category == "all") {
            projects[i].style.display = "block";
        }

        else if (projects[i].classList.contains(category)) {
            projects[i].style.display = "block";
        }

        else {
            projects[i].style.display = "none";
        }
    }
}


function comingSoon() {

    alert("This project is coming soon!");

}


document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    if (name == "") {
        error.innerHTML = "Please enter your name.";
        error.style.color = "red";
        return;
    }

    if (email == "") {
        error.innerHTML = "Please enter your email.";
        error.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Please enter a valid email.";
        error.style.color = "red";
        return;
    }

    if (message == "") {
        error.innerHTML = "Please enter your message.";
        error.style.color = "red";
        return;
    }

    error.innerHTML = "Message submitted successfully!";
    error.style.color = "green";

});