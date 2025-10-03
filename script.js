
//animacion del sidebar C:
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
})

document.getElementById("downloadBtn").addEventListener("click", function () {
    document.getElementById("downloadLink").click();
});