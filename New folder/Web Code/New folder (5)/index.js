var count = 1;
flagSName = false;
flagTname = false;
var subCode;
function getId()
{
    var tid = "TPC"+count;
    var numzeroes = 12 - tid.length;
    tid = "";
    for(var i=0; i<numzeroes; i++)
    {
        tid += "0";
    }
    tid = "TPC"+tid+count;
    
    document.getElementById("txtTopicId").value = tid;
    count++;
}

function checkSubjectName(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagSName = false;
        document.getElementById("divSubject").innerHTML = "Please Enter Subject Name.";
    }
    else {
        flagSName = true;
        document.getElementById("divSubject").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtSubject").className = "commonInput";
        }
}

function loadTopic(htmlObj)
{
    subCode= htmlObj.value;
    if(subCode==""){
        document.getElementById("divSubject").innerHTML = "Please select the Subject.";        
        }
    else{
        var XMLHTTP;
        if(window.XMLHttpRequest){
            XMLHTTP= new XMLHttpRequest();
        }
        else{
            XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
        }
        XMLHTTP.addEventListener('progress',function() {
            document.getElementById("dvModule").innerHTML= "<img src = loading.gif>";
        }, false);
        XMLHTTP.onreadystatechange = function() {
            if(XMLHTTP.readyState == 4 && XMLHTTP.status == 200){
                document.getElementById("dvModule").innerHTML=XMLHTTP.responseText;
            }
        }
        var url= "";
        if(subCode=="ESC501")
            url= "se.html"
        if(subCode=="PCCCS501")
            url= "cd.html"
        if(subCode=="PCCCS502")
            url= "os.html"
        XMLHTTP.open('GET', url, true);
        XMLHTTP.send();
    }
}

function checkTopicName(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagTName = false;
        document.getElementById("divTopicName").innerHTML = "Please Enter Topic Name.";
    }
    else {
        flagTName = false;
        var valid = /^[a-zA-Z ]+$/;
        if(!strTName.match(valid)) {
            document.getElementById("divTopicName").innerHTML = "Invalid Topic Name. Only Alphabets & Spaces Are Allowed.";
            document.getElementById("txtTopicName").className = "commonInput";
            flagTName = false; 
        }else {
            flagTName = true;
            document.getElementById("divTopicName").innerHTML = "<img src =tick.jpeg>";
            document.getElementById("txtTopicName").className = "commonInput";
        }
    }
}

var userRow = "";
function checkAllInput() {
	var headerContent = "";
    headerContent = "<table border =0><tr>";
    headerContent += "<td align=center valign=center class=headerCell>Sl. No.</td>";
	headerContent += "<td align=center valign=center class=headerCell>Topic Id</td>";
    headerContent += "<td align=center valign=center class=headerCell>Subject</td>";
	headerContent += "<td align=center valign=center class=headerCell>Module</td>";
	headerContent += "<td align=center valign=center class=headerCell>Topic Name</td>";
	var tid = document.getElementById("txtTopicId").value;
	var sid = document.getElementById("txtSubject");
    sid= sid.options[sid.selectedIndex].text;
    if(subCode=="ESC501")
	    var mid= document.getElementById("optmoduleid");
    if(subCode=="PCCCS501")
        var mid= document.getElementById("optmodulecdid");
    if(subCode=="PCCCS502")
        var mid= document.getElementById("optmoduleosid");
    mid= mid.options[mid.selectedIndex].text;
	var tn = document.getElementById("txtTopicName").value;
    userRow += "<tr>";
    userRow += "<td align=center valign=center class=commonCell>"+count+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+tid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+sid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+mid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+tn+"</td>";
    userRow += "</tr>";
    var content = headerContent+userRow+"</table>";
    document.getElementById("showCourses").innerHTML = content;
    alert("Topic Successfully Added!!!");
    document.getElementById("frmMovieReg").reset();  
	
    getId();
}