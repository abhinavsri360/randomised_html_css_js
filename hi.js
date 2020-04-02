/*alert("Aur batao");
document.getElementById("eu").innerHTML = "Hello JavaScript!";
var c = document.getElementById("canvo");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(800, 400);
ctx.stroke();*/
var names = new Array(3);
for(i=0;i<1;i++)
{
	names[i] = prompt("Enter a Name","Bloop");
}

document.write(names[0]);

function funcc()
{
	var x = document.form_one.name.value.length;
	if (x < 8) 
	{
		var elem = document.getElementById("bar");
		var width = 10;
		var id = setInterval(frame,50);
		function frame()
		{
			if(width==100)
				clearInterval(id);
			else
			{
				width++;
				elem.style.width=width+'%';
			}
		}
	}
	else
	{
		alert("Congo Perfect name");
	}
}