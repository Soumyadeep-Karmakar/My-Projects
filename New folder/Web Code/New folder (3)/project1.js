var count = 1;
var count2= 1;
var flagProjName = false;
var flagTechDomain = false;
var flagTechDescription = false;
var flagClientName = false;
var flagStartDate = false;
var flagEndDate = false;
function getProjId()
{
    var pid = "PRJ"+count;
    var numzeroes = 6 - pid.length;
    pid = "";
    for(var i=0; i<numzeroes; i++)
    {
        pid += "0";
    }
    pid = "PRJ"+pid+count;
   
    document.getElementById("txtProjID").value = pid;
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
    document.getElementById("dtEndDate").disabled = true;
}
function checkProjectName(htmlObj) 
{
    var strPName = htmlObj.value;
    if(strPName == "") {
        flagProjName = false;
        document.getElementById("divProjectName").innerHTML = "Please Enter Tour Name.";
    }
    else {
        flagProjName = false;
        var valid = /^[a-zA-Z ]+$/;
        if(!strPName.match(valid)) {
            document.getElementById("divProjectName").innerHTML = "Invalid Course Name. Only Alphabets & Spaces Are Allowed.";
            document.getElementById("txtProjectName").className = "commonInput";
            flagProjName = false; 
        }else {
            flagProjName = true;
            document.getElementById("divProjectName").innerHTML = "<img src =tick.jpeg >";
            document.getElementById("txtProjectName").className = "commonInput";
        }
    }
}
function checkTechnologyDomain(htmlObj)
{
    var strTDomain = htmlObj.value;
    if(strTDomain == "") {
        flagTechDomain = false;
        document.getElementById("divTechnologyDomain").innerHTML = "Please Enter Technology Domain.";
    }
    else {
        flagTechDomain = true;
        document.getElementById("divTechnologyDomain").innerHTML = "<img src =tick.jpeg >";
        document.getElementById("txtTechnologyDomain").className = "commonInput";
    }
}
function checkDescription(htmlObj)
{
    var strTDes = htmlObj.value;
    if(strTDes == "") {
        flagTechDescription = false;
        document.getElementById("divDescription").innerHTML = "Please Enter Description.";
    }
    else {
        flagTechDescription = true;
        document.getElementById("divDescription").innerHTML = "<img src =tick.jpeg >";
        document.getElementById("txtDescription").className = "commonInput";
    }
}
function checkClient(htmlObj)
{
    var strCName = htmlObj.value;
    if(strCName == "") {
        flagClientName = false;
        document.getElementById("divClient").innerHTML = "Please Enter Client Name.";
    }
    else {
        flagClientName = true;
        document.getElementById("divClient").innerHTML = "<img src =tick.jpeg >";
        document.getElementById("txtClient").className = "commonInput";
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
    } 
}
function enableEndDate(htmlObj) {
    var GivenDate = htmlObj.value;
    if(GivenDate != "") {
        var minDate = new Date(GivenDate);
        minDate.setMonth(minDate.getMonth()+1);
        var maxDate = new Date(GivenDate);
        maxDate.setFullYear(maxDate.getFullYear()+7);
        var dt = String(maxDate.getDate());
        if(dt.length < 2) {
            dt = "0" + dt;
        }
        var mo = String(maxDate.getMonth()+1);
        if(mo.length < 2) {
            mo = "0" + mo;
        }
        var dateStr = maxDate.getFullYear()+ "-" + mo + "-" + dt;
        document.getElementById("dtEndDate").max = dateStr;
        
        var dt = String(minDate.getDate());
        if(dt.length < 2) {
            dt = "0" + dt;
        }
        var mo = String(minDate.getMonth()+1);
        if(mo.length < 2) {
            mo = "0" + mo;
        }
        var dateStr = minDate.getFullYear()+ "-" + mo + "-" + dt;
        document.getElementById("dtEndDate").min = dateStr;
        document.getElementById("dtLeadStartDate").value = GivenDate;
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
function enableLeadEndDate(htmlObj)
{
    var ProjEndDate = htmlObj.value;
    var LeadStartDate = document.getElementById("dtLeadStartDate").value;
    if(ProjEndDate != "") {
        var minDate = new Date(LeadStartDate);
        minDate.setMonth(minDate.getMonth()+1);
        document.getElementById("dtLeadEndDate").max = ProjEndDate;
        
        var dt = String(minDate.getDate());
        if(dt.length < 2) {
            dt = "0" + dt;
        }
        var mo = String(minDate.getMonth()+1);
        if(mo.length < 2) {
            mo = "0" + mo;
        }
        var dateStr = minDate.getFullYear()+ "-" + mo + "-" + dt;
        document.getElementById("dtLeadEndDate").min = dateStr;
        document.getElementById("dtLeadEndDate").disabled = false;        
    }
}

function getProjectLeadId()
{
    var lid = "EMP"+count;
    var numzeroes = 9 - lid.length;
    lid = "";
    for(var i=0; i<numzeroes; i++)
    {
        lid += "0";
    }
    lid = "EMP"+lid+count;
   
    document.getElementById("txtProjectLead").value = lid;
}

var userRow = "";
function checkAllInput() {
											var headerContent = "";
											headerContent = "<table border =0><tr>";
											headerContent += "<td align=center valign=center class=headerCell>Sl. No.</td>";
											headerContent += "<td align=center valign=center class=headerCell>Proj_ID</td>";
											headerContent += "<td align=center valign=center class=headerCell>Project_Name</td>";
											headerContent += "<td align=center valign=center class=headerCell>Technology_Domain</td>";
											headerContent += "<td align=center valign=center class=headerCell>Description</td>";
											headerContent += "<td align=center valign=center class=headerCell>Client</td>";
											headerContent += "<td align=center valign=center class=headerCell>Start_Date</td>";
											headerContent += "<td align=center valign=center class=headerCell>ScheduledEnd_Date</td>";
											headerContent += "<td align=center valign=center class=headerCell>Project Lead</td>";
											headerContent += "<td align=center valign=center class=headerCell>LeadStart_Date</td>";
											headerContent += "<td align=center valign=center class=headerCell>LeadEnd_Date</td>";
											headerContent += "</tr>";
											var pid = document.getElementById("txtProjID").value;
											var pName = document.getElementById("txtProjectName").value;
											var t_domain= document.getElementById("txtTechnologyDomain").value;
											var description = document.getElementById("txtDescription").value;
											var client = document.getElementById("txtClient").value;
											var start_date = document.getElementById("dtStartDate").value;
											var s_end_date = document.getElementById("dtEndDate").value;
											var p_lead = document.getElementById("txtProjectLead").value;
											var l_start_date = document.getElementById("dtLeadStartDate").value;
											var l_end_date = document.getElementById("dtLeadEndDate").value;
											userRow += "<tr>";
											userRow += "<td align=center valign=center class=commonCell>"+count+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+pid+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+pName+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+t_domain+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+description+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+client+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+start_date+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+s_end_date+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+p_lead+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+l_start_date+"</td>";
											userRow += "<td align=center valign=center class=commonCell>"+l_end_date+"</td>";
											userRow += "</tr>";
											var content = headerContent+userRow+"</table>";
											document.getElementById("showCourses").innerHTML = content;
											alert("Info Succesfully Added!!!");
											document.getElementById("frmProjectReg").reset();
											count++;
											getProjId();
}
	