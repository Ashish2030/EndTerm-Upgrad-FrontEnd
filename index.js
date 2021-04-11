function save()
{
    var country=document.getElementById('country').value;
    var startdate=document.getElementById('startdate').value;
    var enddate=document.getElementById('enddate').value;
    if(country.length==0||startdate.length==0||enddate.length==0)
    {
alert("Invalid");
    }
    else
    {
        var url=`https://api.covid19api.com/country/${country}?from=${startdate}T00:00:00Z&to=${enddate}T00:00:00Z`;
var xhr= new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange=()=>
{
    if(xhr.readyState==4 && xhr.status==200)
    {
   
        var m=JSON.parse(xhr.responseText);
        console.log(m);
        var x=document.getElementById("data");
        for(var i=0;i<m.length;i++)
        {
            var temp=document.createElement("div");
            temp.setAttribute('id','add');

            var b=document.createElement("p");
            b.innerHTML=`Confirmed Cases: ${m[i].Confirmed}`; 
            var b1=document.createElement("p");
            b1.innerHTML=`Active Cases: ${m[i].Active}`; 
            var b2=document.createElement("p");
            b2.innerHTML=`Deaths: ${m[i].Deaths}`;    
            temp.appendChild(b);
            temp.appendChild(b1);
            temp.appendChild(b2); 
            x.appendChild(temp);

        }


    }
}
xhr.send();

    }
}