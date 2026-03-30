function greetUser() { 
alert("Welcome to SECJ3483 Web Technology!"); 
} 

document.getElementById("announcement").innerText = "📢 📢 Midterm assessment is on Week 7!"; 

function searchKeyword() { const input = document.querySelector(".srch").value; alert("You searched for: " + input); }

const resources = [ 
{ title: "Lecture 1", link: "lecture1.pdf" }, 
{ title: "Lecture 2", link: "lecture2.pdf" } 
]; 

const container = document.getElementById("announcement"); 
resources.forEach(item => { 
container.innerHTML += `<p><a 
href="${item.link}">${item.title}</a></p>`; 
}); 