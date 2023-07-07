let arrayVids=[];
fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=UU5uIWd_FJNNeKj5bL_uJMKg&key=AIzaSyC1qeQOUKy7dNZPbiv0U_x9N3UZqQNqzRc')
.then(res => {
   return res.json();
 })
.then(data=>{
  data.items.forEach((curr,index) => {
  let vidTitle = curr.snippet.title;
  let vidURL = 'https://www.youtube.com/watch?v='+curr.contentDetails.videoId;
  let markup=`<a href ='${vidURL}}' target='_blank'>${vidTitle} <p>`;

  arrayVids.push(markup);
 
   });

   var html = `<b>Recent Videos<p></b><div style="overflow-x:auto"><table style="width:100%;";><tr>`, perRow = 1;
   for (i=0; i<arrayVids.length; i++){
     html+=`<td>${i+1}. ${arrayVids[i]}</td>`;
     var next = i+1;

     if (next%perRow ==0 && next!=arrayVids.length){
       html+="</tr><tr>";
     }
   }
   html+=`</tr></table>`;
   document.getElementById("apiResult").innerHTML = html;

 })
 
 
