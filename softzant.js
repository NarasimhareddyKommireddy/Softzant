function scrollText( txt,obj){
      let index = 0;
     let clear =  window.setInterval(()=>{
                      if(index === txt.length)
                      {
                        window.clearInterval(clear);
                      }
                      else{
                        obj.innerHTML+= txt[index];
                        index++;
                      }
      },100);
      window.clearInterval();
}
function scroll( txt,obj){
  let index = 0;
 let clear =  window.setInterval(()=>{
                  if(index === txt.length)
                  {
                    window.clearInterval(clear);
                  }
                  else{
                    obj.innerHTML+= txt[index];
                    index++;
                  }
  },190);
  window.clearInterval();
}