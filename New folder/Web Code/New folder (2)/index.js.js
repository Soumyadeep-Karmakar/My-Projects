var count = 1;
var flagName = false;
var flagDestination = false;
var flagprice = false;
var flagStartDate = false;
var flagEndDate = false;
function getId()
{
    var tid = "TR"+count;
    var numzeroes = 6 - tid.length;
    tid = "";
    for(var i=0; i<numzeroes; i++)
    {
        tid += "0";
    }
    tid = "TR"+tid+count;
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
    document.getElementById("txtTourId").value = tid;
    document.getElementById("divTourName").innerHTML = "";
    document.getElementById("divDestination").innerHTML = "";
    document.getElementById("divStartDate").innerHTML = "";
    document.getElementById("divEndDate").innerHTML = "";
    document.getElementById("divPricePerHead").innerHTML = "";
}
function checkTourName(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagName = false;
        document.getElementById("divTourName").innerHTML = "Please Enter Tour Name.";
    }
    else {
        flagName = false;
        var valid = /^[a-zA-Z ]+$/;
        if(!strTName.match(valid)) {
            document.getElementById("divTourName").innerHTML = "Invalid Course Name. Only Alphabets & Spaces Are Allowed.";
            document.getElementById("txtTourName").className = "commonInput";
            flagName = false; 
        }else {
            flagName = true;
            document.getElementById("divTourName").innerHTML = "<img src =tick.jpeg>";
            document.getElementById("txtTourName").className = "commonInput";
        }
    }
}
function checkTourDestination(htmlObj)
{
    var strDestination = htmlObj.value;
    if(strDestination == "") {
        flagDestination = false;
        document.getElementById("divDestination").innerHTML = "Please Enter Destination";
    }
    else {
        flagDestination = false;
        var valid = /^[a-zA-Z, ]+$/;
        if(!strDestination.match(valid)) {
            document.getElementById("divDestination").innerHTML = "Invalid Destination. Only Alphabets & Spaces Are Allowed.";
            document.getElementById("txtDestination").className = "commonInput";
            flagDestination = false; 
        }else {
            flagDestination = true;
            document.getElementById("divDestination").innerHTML = "<img src =tick.jpeg >";
            document.getElementById("txtDestination").className = "commonInput";
        }
    }
}
function checkPrice(htmlObj)
{
    var strPrice = htmlObj.value;
    if(strPrice == "") {
        flagPrice = false;
        document.getElementById("divPricePerHead").innerHTML = "Please Enter Price Per Head.";
    }else if(strPrice <= Math.max(500,100000) && strPrice >= Math.min(500,100000)) {
        flagPrice = true;
        document.getElementById("divPricePerHead").innerHTML = "<img src =tick.jpeg >";
        document.getElementById("noPricePerHead").className = "commonInput";       
    }else {
        flagPrice = false;
        document.getElementById("divPricePerHead").innerHTML = "Please Enter Price Between 5,000 to 1,00,000.";
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