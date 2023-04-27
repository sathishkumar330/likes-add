let insta=document.getElementsByClassName("heart")[0];
			
			insta.addEventListener("click",increase)
				function increase(){
				 let par=this.parentNode;
				 let show=par.querySelector(".fill");
				 show.classList.add("insta");
				 let val=this.parentNode.getElementsByClassName("value")[0];
				 let count=val.innerHTML;
				 let counts=parseInt(count);
				 counts+=1;
				 val.innerHTML=counts+" likes";
				 
				 
			}
			 let hide=document.getElementsByClassName("fill")[0];
			 hide.addEventListener("click",decrease)
			 function decrease(){
			  hide.classList.remove("insta");
			  let val=this.parentNode.getElementsByClassName("value")[0];
				 let count=val.innerHTML;
				 let counts=parseInt(count);
				 counts-=1;
				 val.innerHTML=counts+" likes";
			  }
