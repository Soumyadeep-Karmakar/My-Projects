var count = 1;
flagPName = false;
flagPAddress = false;
flagPhNo = false;
flagTestName = false;
flagMParameter = false;
flagRec = false;
flagPValue = false;

function getId()
{
    var pid = "PT"+count;
    var numzeroes = 12 - pid.length;
    pid = "";
    for(var i=0; i<numzeroes; i++)
    {
        pid += "0";
    }
    pid = "PT"+pid+count;
    
    document.getElementById("txtPatientId").value = pid;
}

function checkPName(htmlObj)
{
    var strPName = htmlObj.value;
    if(strPName == "") {
        flagPName = false;
        document.getElementById("divPatientName").innerHTML = "Please Enter Patient Name.";
    }
    else {
        flagPName = true;
        document.getElementById("divPatientName").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtPatientName").className = "commonInput";
        }
}

function checkPAddress(htmlObj)
{
    var strPAddress = htmlObj.value;
    if(strPAddress == "") {
        flagPAddress = false;
        document.getElementById("divPAddress").innerHTML = "Please Enter Patient Address.";
    }
    else {
        flagPAddress = true;
        document.getElementById("divPAddress").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtPAddress").className = "commonInput";
        }
}

function checkPhNo(htmlObj)
{
    var strPhNo = htmlObj.value;
    if(strPhNo == "") {
        flagPhNo = false;
        document.getElementById("divPhNo").innerHTML = "Please Enter Patient Phone Number.";
    }
    else {
        flagPhNo = true;
        document.getElementById("divPhNo").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("noPhNo").className = "commonInput";
        }
}

function checkRec(htmlObj)
{
    var strRec = htmlObj.value;
    if(strRec == "") {
        flagRec = false;
        document.getElementById("divRec").innerHTML = "Please Enter Recommended Doctor.";
    }
    else {
        flagRec = true;
        document.getElementById("divRec").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtRec").className = "commonInput";
        }
}

function checkTestName(htmlObj)
{
    var strTestName = htmlObj.value;
    if(strTestName == "") {
        flagTestName = false;
        document.getElementById("divTestName").innerHTML = "Please Enter Test Name.";
    }
    else {
        flagTestName = true;
        document.getElementById("divTestName").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtTestName").className = "commonInput";
        }
}

function checkMParameter(htmlObj)
{
    var strMParameter = htmlObj.value;
    if(strMParameter == "") {
        flagMParameter = false;
        document.getElementById("divMParameter").innerHTML = "Please Enter Test Parameter.";
    }
    else {
        flagMParameter = true;
        document.getElementById("divMParameter").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtMParameter").className = "commonInput";
        }
}

function checkPValue(htmlObj)
{
    var strPValue = htmlObj.value;
    if(strPValue == "") {
        flagPValue = false;
        document.getElementById("divPValue").innerHTML = "Please Enter Test Parameter Value.";
    }
    else {
        flagPValue = true;
        document.getElementById("divPValue").innerHTML = "<img src =tick.jpeg>";
        document.getElementById("txtPValue").className = "commonInput";
        }
}

var userRow = "";
function checkAllInput() {
	var headerContent = "";
    headerContent = "<table border =0><tr>";
    headerContent += "<td align=center valign=center class=headerCell>Sl. No.</td>";
	headerContent += "<td align=center valign=center class=headerCell>Patient Id</td>";
    headerContent += "<td align=center valign=center class=headerCell>Patient Name</td>";
	headerContent += "<td align=center valign=center class=headerCell>Address</td>";
	headerContent += "<td align=center valign=center class=headerCell>Phone No.</td>";
    headerContent += "<td align=center valign=center class=headerCell>Recommended Doctor</td>";
    headerContent += "<td align=center valign=center class=headerCell>Test Name</td>";
    headerContent += "<td align=center valign=center class=headerCell>Measuring Parameter</td>";
    headerContent += "<td align=center valign=center class=headerCell>Test Parameter Value</td>";
	
    var pid = document.getElementById("txtPatientId").value;
	var pn = document.getElementById("txtPatientName").value;
    var pa = document.getElementById("txtPAddress").value;
    var phno = document.getElementById("noPhNo").value;
    var tn = document.getElementById("txtTestName").value;
    var mp = document.getElementById("txtMParameter").value;
    var rc = document.getElementById("txtRec").value;
    var tpv = document.getElementById("txtPValue").value;
    
    userRow += "<tr>";
    userRow += "<td align=center valign=center class=commonCell>"+count+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+pid+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+pn+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+pa+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+phno+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+rc+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+tn+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+mp+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+tpv+"</td>";
    userRow += "</tr>";
    var content = headerContent+userRow+"</table>";
    document.getElementById("showPDetails").innerHTML = content;
    alert("Patient Details Successfully Added!!!");
    document.getElementById("frmPatientReg").reset();  
	
    count++;
    getId();
}



