function clicked(){
			var x; 
			x = document.getElementById('nameCheck').value;
			if(x !=""){
				document.getElementById('greeting').innerHTML='Hi, '+x+'! Welcome to my site!';
				}
				else{
					document.getElementById('errorMsg').innerHTML='<font color="red">(required) Name:</font>';
				}				
			}

document.write(Date());
