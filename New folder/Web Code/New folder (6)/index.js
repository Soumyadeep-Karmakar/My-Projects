var subCode;
var flagMNo = false;
var flagMName = false;
var count=0;

function checkMNo(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagMNo = false;
        document.getElementById("divModelNo").innerHTML = "Please Enter Model No.";
    }
    else {
        flagName = false;
        var valid = /^[a-zA-Z0-9]+$/;
        if(!strTName.match(valid)) {
            document.getElementById("divModelNo").innerHTML = "Invalid Model No. Only Alphabets Are Allowed.";
            document.getElementById("txtModelNo").className = "commonInput";
            flagMNo = false; 
        }else {
            flagMNo = true;
            document.getElementById("divModelNo").innerHTML = "<img src =tick.jpeg>";
            document.getElementById("txtModelNo").className = "commonInput";
        }
    }
}

function checkMName(htmlObj)
{
    var strTName = htmlObj.value;
    if(strTName == "") {
        flagMName = false;
        document.getElementById("divModelName").innerHTML = "Please Enter Model Name.";
    }
    else {
        flagMName = false;
        var valid = /^[a-zA-Z0-9 ]+$/;
        if(!strTName.match(valid)) {
            document.getElementById("divModelName").innerHTML = "Invalid Model Name. Only Alphabets Are Allowed.";
            document.getElementById("txtModelName").className = "commonInput";
            flagMName = false; 
        }else {
            flagMName = true;
            document.getElementById("divModelName").innerHTML = "<img src =tick.jpeg>";
            document.getElementById("txtModelName").className = "commonInput";
        }
    }
}

function loadPType(htmlObj)
{
    subCode= htmlObj.value;
    if(subCode==""){
        document.getElementById("divPCategory").innerHTML = "Please select the Product Category.";        
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
            document.getElementById("dvPType").innerHTML= "<img src = loading.gif>";
        }, false);
        XMLHTTP.onreadystatechange = function() {
            if(XMLHTTP.readyState == 4 && XMLHTTP.status == 200){
                document.getElementById("dvPType").innerHTML=XMLHTTP.responseText;
            }
        }
        var url= "";
        if(subCode=="PC000001")
            url= "Electronics.html"
        if(subCode=="PC000002")
            url= "LD.html"
        if(subCode=="PC000003")
            url= "Tl.html"
        if(subCode=="PC000004")
            url= "SHA.html"
        if(subCode=="PC000005")
            url= "CA.html"
        if(subCode=="PC000006")
            url= "LHA.html"
        XMLHTTP.open('GET', url, true);
        XMLHTTP.send();
    }
}

var userRow = "";
function checkAllInput() {
	var headerContent = "";
    headerContent = "<table border =0><tr>";
    headerContent += "<td align=center valign=center class=headerCell>Sl. No.</td>";
	headerContent += "<td align=center valign=center class=headerCell>Model No</td>";
    headerContent += "<td align=center valign=center class=headerCell>Model Name</td>";
	headerContent += "<td align=center valign=center class=headerCell>Description</td>";
	headerContent += "<td align=center valign=center class=headerCell>Manufacturer</td>";
    headerContent += "<td align=center valign=center class=headerCell>Product Category</td>";
    headerContent += "<td align=center valign=center class=headerCell>Product Type</td>";
    headerContent += "<td align=center valign=center class=headerCell>Price</td>";
    headerContent += "<td align=center valign=center class=headerCell>Color</td>";
	var mno = document.getElementById("txtModelNo").value;
    var mname = document.getElementById("txtModelName").value;
    var des = document.getElementById("txtDescription").value;
    var mn = document.getElementById("txtManufacturer");
    mn= mn.options[mn.selectedIndex].text;
    var pc = document.getElementById("txtPCategory");
    pc= pc.options[pc.selectedIndex].text;
    
    if(subCode=="PC000001")
	    var pt= document.getElementById("optelectronicsid");
    if(subCode=="PC000002")
        var pt= document.getElementById("optldid");
    if(subCode=="PC000003")
        var pt= document.getElementById("optlid");
    if(subCode=="PC000004")
	    var pt= document.getElementById("optshaid");
    if(subCode=="PC000005")
        var pt= document.getElementById("optcaid");
    if(subCode=="PC000006")
        var pt= document.getElementById("optlhaid");
    pt= pt.options[pt.selectedIndex].text;
    
    var pr = document.getElementById("txtPrice").value;
    var color = document.getElementById("txtColor");
    color= color.options[color.selectedIndex].text;

    userRow += "<tr>";
    userRow += "<td align=center valign=center class=commonCell>"+count+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+mno+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+mname+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+des+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+mn+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+pc+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+pt+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+pr+"</td>";
    userRow += "<td align=center valign=center class=commonCell>"+color+"</td>";
    userRow += "</tr>";
    var content = headerContent+userRow+"</table>";
    document.getElementById("showCourses").innerHTML = content;
    alert("Model Successfully Added!!!");
    document.getElementById("frmModelReg").reset();  
	count++;
}
