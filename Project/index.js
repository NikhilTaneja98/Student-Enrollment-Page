
function insertData(name, email, web, image, gender, skills){
    var table = document.getElementById("enrolledlist");
    var row = table.insertRow(0);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    col1.innerHTML = "<h6>"+name+"</h6>"+
    "<p>"+gender+"</p>"+"<p>"+email+"</p>"+"<p><a href=\"\">"+web+"</a></p>"+"<p>"+skills+"</p>";
    col2.innerHTML = "<img src="+image+" class=\"center\">";
    col1.setAttribute("width","70%");
    col2.setAttribute("width","30%");
}    

const submit = document.getElementById("submitbutton");
submit.addEventListener('click', function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var web = document.getElementById("web").value;
    var image = document.getElementById("studentimg").value;
    var gender;
    if(document.getElementById("gridRadios1").checked){
        gender = "Male";
    }
    else{
        gender = "Female";
    }
    var skills="";
    if(document.getElementById("inlineCheckbox1").checked == true){
        skills += "Java ";
    }
    if(document.getElementById("inlineCheckbox2").checked == true){
        skills += "HTML ";
    }
    if(document.getElementById("inlineCheckbox3").checked == true){
        skills += "CSS ";
    }
    if(skills.length == 0){
        alert("Mention atleast one skill");
        return;
    }
    skills = skills.trim().replaceAll(" " , ",");
    
    insertData(name, email, web, image, gender, skills);
    document.getElementById("form").reset();
    //window.open(web);
});


