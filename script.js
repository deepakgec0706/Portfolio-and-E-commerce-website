// JavaScript to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const mobile = document.getElementById('mobile').value;
    const lctn = document.getElementById('lctn').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (firstname && lastname && gender && dob && mobile && lctn && email && address) {
        alert(`Thank you, ${firstname}! Your message has been received.`);
    } else {
        alert('Please fill out all required fields.');
    }
});

function toggleAbout(sectionId) {
    const sec=document.getElementById(sectionId);
    const isVisible=sec.style.display==='block';
    document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
    if(!isVisible){
        sec.style.display='block';
    }
}
function toggleSkills(sectionId){
    const sec=document.getElementById(sectionId);
    const isVisible=sec.style.display==='block';
    document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
    if(!isVisible){
        sec.style.display='block';
    }
} 
function toggleContacts(sectionId){
    const sec=document.getElementById(sectionId);
    const isVisible=sec.style.display==='block';
    document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
    if(!isVisible){
        sec.style.display='block';
    }
}
function toggleProjects(sectionId){
    const sec=document.getElementById(sectionId);
    const isVisible=sec.style.display==='block';
    document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
    if(!isVisible){
        sec.style.display='block';
    }
}

function toggleShop(sectionId){
    const sec=document.getElementById(sectionId);
    const isVisible=sec.style.display==='block';
    document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
    if(!isVisible){
        sec.style.display='block';
    }
}

let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

function search() {
    alert("Search feature coming soon!");
  }
  