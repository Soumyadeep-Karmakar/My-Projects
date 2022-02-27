var count = 1;
var flagMovie = false;
var flagTheatre = false;
var flagScreen = false;
var flagShowTime = false;
var flagStartDate = false;
var flagEndDate = false;

function getId()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("dtStartDate").setAttribute("min", today);
}

function checkMovieId(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagMovie = false;
        document.getElementById("divMovieId").innerHTML = "Please Enter Movie Name.";
    }
    else {
        flagMovie = true;
        document.getElementById("divMovieId").innerHTML = "<img src = tick.jpeg>";
        document.getElementById("txtMovieId").className = "commonInput";
        }
}

function checkTheatreId(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagTheatre = false;
        document.getElementById("divTheatreId").innerHTML = "Please Enter Theatre Name.";
    }
    else {
        flagTheatre = true;
        document.getElementById("divTheatreId").innerHTML = "<img src = tick.jpeg>";
        document.getElementById("txtTheatreId").className = "commonInput";
        }
	
}

function checkScreenId(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagScreen = false;
        document.getElementById("divScreenId").innerHTML = "Please Enter Screen Name.";
    }
    else {
        flagScreen = true;
        document.getElementById("divScreenId").innerHTML = "<img src = tick.jpeg>";
        document.getElementById("txtScreenId").className = "commonInput";
        }
}

function checkShowTime(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagShowTime = false;
        document.getElementById("divShowTime").innerHTML = "Please Enter Show Time.";
    }
    else {
        flagShowTime = true;
        document.getElementById("divShowTime").innerHTML = "<img src = tick.jpeg>";
        document.getElementById("txtShowTime").className = "commonInput";
        }
}

function checkStartDate(htmlObj)
{
    var GivenDate = htmlObj.value;
    if(GivenDate == "") {
        document.getElementById("divStartDate").innerHTML = "Please Enter The Start Date.";
        flagStartDate = false;
    }else {
        flagStartDate = true;
        document.getElementById("divStartDate").innerHTML = "<img src =tick.jpeg >";
        document.getElementById("dtStartDate").className = "commonInput";     
        document.getElementById("dtEndDate").disabled = false;        
    } 
}

function checkEndDate(htmlObj){
    var GivenDate = htmlObj.value;
    if(GivenDate == "") {
        document.getElementById("divEndDate").innerHTML = "Please Enter The End Date.";
        flagEndDate = false;
    }else {
        flagEndDate = true;
        document.getElementById("divEndDate").innerHTML = "<img src =tick.jpeg >";
        document.getElementById("dtEndDate").className = "commonInput";   
    }
}

function enableEndDate(htmlObj){
	var GivenDate = htmlObj.value;
	var min1 = new Date(GivenDate);
    var dd = min1.getDate()+ 7;
    var mm = min1.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = min1.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 
    min1 = yyyy+'-'+mm+'-'+dd;
    document.getElementById("dtEndDate").min=min1;
}

var userRow = "";
function checkAllInput() {
	var headerContent = "";
    headerContent = "<table border =0><tr>";
    headerContent += "<td align=center valign=center class=headerCell>Sl. No.</td>";
	headerContent += "<td align=center valign=center class=headerCell>Movie Id</td>";
	headerContent += "<td align=center valign=center class=headerCell>Theatre Id</td>";
	headerContent += "<td align=center valign=center class=headerCell>Screen Id</td>";
	headerContent += "<td align=center valign=center class=headerCell>Show Time</td>";
	headerContent += "<td align=center valign=center class=headerCell>Start Date</td>";
	headerContent += "<td align=center valign=center class=headerCell>End Date</td>";
	headerContent += "</tr>";
	var mid = document.getElementById("txtMovieId");
    mid= mid.options[mid.selectedIndex].text;
	var tid = document.getElementById("txtTheatreId");
    tid= tid.options[tid.selectedIndex].text;
	var sid= document.getElementById("txtScreenId");
    sid= sid.options[sid.selectedIndex].text;
	var st = document.getElementById("txtShowTime");
    st= st.options[st.selectedIndex].text;
    var startDate = document.getElementById("dtStartDate").value;
    var endDate = document.getElementById("dtEndDate").value;
    userRow += "<tr>";
    userRow += "<td align=center valign=center class=commonCell>"+count+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+mid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+tid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+sid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+st+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+startDate+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+endDate+"</td>";
    userRow += "</tr>";
    var content = headerContent+userRow+"</table>";
    document.getElementById("showCourses").innerHTML = content;
    alert("Movie Succefully Added!!!");
    document.getElementById("frmMovieReg").reset();  
	count++;
    getId();
}