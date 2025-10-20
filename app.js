const generateBtn = document.getElementById("generate");
const head = document.getElementById("head")

generateBtn.addEventListener("click", () => {
    head.style.display = "none"
    const name = document.getElementById("name").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const cnic = document.getElementById("cnic").value.trim();
    const course = document.getElementById("course").value.trim();
    const institute = document.getElementById("institute").value.trim();
    const photo = document.getElementById("photo").files[0];

    if (!name || !fname || !cnic || !course || !photo || !institute) {
        alert("Please fill all fields!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("profilePic").src = e.target.result;
    };
    reader.readAsDataURL(photo);

    const randomId = "ID-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("institute_name").textContent = institute;
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayCourse").textContent = course;
    document.getElementById("displayId").textContent = randomId;

    document.getElementById("bName").textContent = name;
    document.getElementById("bFname").textContent = fname;
    document.getElementById("bCnic").textContent = cnic;
    document.getElementById("bCourse").textContent = course;

    document.querySelector(".form-box").style.display = "none";
    document.getElementById("idContainer").style.display = "flex";
});
