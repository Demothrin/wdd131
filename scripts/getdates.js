const currentYear = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = `&copy; ${currentYear}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;