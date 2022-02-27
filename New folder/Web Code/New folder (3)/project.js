var count = 1;
var flagName = false;
var flagTechDomain = false;
var flagDestination = false;
var flagprice = false;
var flagStartDate = false;
var flagEndDate = false;
function getId()
{
    var pid = "PRJ"+count;
    var numzeroes = 6 - pid.length;
    pid = "";
    for(var i=0; i<numzeroes; i++)
    {
        pid += "0";
    }
    pid = "PRJ"+pid+count;
	
    document.getElementById("txtPrjId").value = pid;
}
function checkPrjName(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagName = false;
        document.getElementById("divPrjName").innerHTML = "Please Enter Project Name.";
    }
    else {
        flagName = false;
        var valid = /^[a-zA-Z ]+$/;
        if(!strTName.match(valid)) {
            document.getElementById("divPrjName").innerHTML = "Invalid Project Name. Only Alphabets & Spaces Are Allowed.";
            document.getElementById("txtPrjName").className = "commonInput";
            flagName = false; 
        }else {
            flagName = true;
            document.getElementById("divPrjName").innerHTML = "<img src =tick.jpeg>";
            document.getElementById("txtPrjName").className = "commonInput";
        }
    }
}
function checkTechDomain(htmlObj)
{
    var strTDomain = htmlObj.value;
    if(strTDomain == "") {
		flagTechDomain=false;
        document.getElementById("divTechDomain").innerHTML = "Please Enter Technology Domain.";
    }
	else {
            flagTechDomain = true;
            document.getElementById("divTechDomain").innerHTML = "<img src =tick.jpeg>";
            document.getElementById("txtTechDomain").className = "commonInput";
        }
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
function enableEndDate(htmlObj) {
    var GivenDate = htmlObj.value;
    if(GivenDate != "") {
        var minDate = new Date(GivenDate);
        minDate.setDate(minDate.getDate()+1);
        var maxDate = new Date(GivenDate);
        maxDate.setMonth(maxDate.getMonth()+3);
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
var userRow = "";
function checkAllInput() {
    if(document.getElementById("txtTourId").value!="") {
        if(document.getElementById("txtTourName").value!="" && flagName!=false) {
            if(document.getElementById("txtDestination").value!="" && flagDestination!=false) {
                if(document.getElementById("dtStartDate").value!="" && flagStartDate !=false) {
                    if(document.getElementById("dtEndDate").value!="" && flagEndDate !=false) {
                        if(document.getElementById("noPricePerHead").value!="" && flagPrice!=false) {
                            var headerContent = "";
                            headerContent = "<table border =0><tr>";
                            headerContent += "<td align=center valign=center class=headerCell>Sl. No.</td>";
                            headerContent += "<td align=center valign=center class=headerCell>TourId ID</td>";
                            headerContent += "<td align=center valign=center class=headerCell>Tour Name</td>";
                            headerContent += "<td align=center valign=center class=headerCell>Destination Type</td>";
                            headerContent += "<td align=center valign=center class=headerCell>Start Date</td>";
                            headerContent += "<td align=center valign=center class=headerCell>End Date</td>";
                            headerContent += "<td align=center valign=center class=headerCell>Price Per Head</td>";
                            headerContent += "</tr>";
                            var tid = document.getElementById("txtTourId").value;
                            var tName = document.getElementById("txtTourName").value;
                            var destination= document.getElementById("txtDestination").value;
                            var startDate = document.getElementById("dtStartDate").value;
                            var endDate = document.getElementById("dtEndDate").value;
                            var pricePerHead = document.getElementById("noPricePerHead").value;
                            userRow += "<tr>";
                            userRow += "<td align=center valign=center class=commonCell>"+count+"</td>";
                            userRow += "<td align=center valign=center class=commonCell>"+tid+"</td>";
                            userRow += "<td align=center valign=center class=commonCell>"+tName+"</td>";
                            userRow += "<td align=center valign=center class=commonCell>"+destination+"</td>";
                            userRow += "<td align=center valign=center class=commonCell>"+startDate+"</td>";
                            userRow += "<td align=center valign=center class=commonCell>"+endDate+"</td>";
                            userRow += "<td align=center valign=center class=commonCell>"+pricePerHead+"</td>";
                            userRow += "</tr>";
                            var content = headerContent+userRow+"</table>";
                            document.getElementById("showCourses").innerHTML = content;
                            alert("Tour Succefully Added!!!");
                            document.getElementById("frmTourReg").reset();
                            count++;
                            getId();
                        }else {
                            alert ("Please Enter The Valid Price Per Head.");
                        }
                    }else {
                        alert ("Please Select The End Date.");
                    }
                }else {
                    alert ("Please Select The Start Date.");
                }
            }else {
                alert ("Please Enter The Valid Destination");
            }
        }else {
            alert ("Please Enter The Valid Tour Name");
        }
    }else {
        alert ("Please Reload The Page. Error On Loading");
    }
} 

var userRow = "";
function checkAllInput() {
    if(document.getElementById("txtProjID").value!="") {
        if(document.getElementById("txtProjectName").value!="" && flagProjName!=false) {
            if(document.getElementById("txtTechnologyDomain").value!="" && flagTechDomain!=false) {
                if(document.getElementById("txtDescription").value!="" && flagTechDescription !=false) {
                    if(document.getElementById("txtClient").value!="" && flagClientName !=false) {
						if(document.getElementById("dtStartDate").value!="" && flagStartDate !=false) {
							if(document.getElementById("dtEndDate").value!="" && flagEndDate !=false) {
								if(document.getElementById("txtProjectLead").value!="") {
									if(document.getElementById("dtLeadStartDate").value!="") {
										if(document.getElementById("dtLeadEndDate").value!="") {
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
											getId();
										}else {
											alert ("Please Enter The Valid Price Per Head.");
										}
									}else {
										alert ("Please Select The End Date.");
									}
								}else {
									alert ("Please Select The Start Date.");
								}
							}else {
								alert ("Please Enter The Valid Destination");
							}
						}else {
							alert ("Please Enter The Valid Tour Name");
						}
					else {
						alert ("Please Enter The Valid Tour Name");
						}
				else {
					alert ("Please Enter The Valid Tour Name");
						}
			else {
				alert ("Please Enter The Valid Tour Name");
			}
		else {
			alert ("Please Enter The Valid Tour Name");
		}
	else {
		alert ("Please Reload The Page. Error On Loading");
	}
} 