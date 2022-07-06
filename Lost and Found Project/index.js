
function updatel(){
    let lost = document.getElementById('Lost');
    let str="";
    let item=JSON.parse(localStorage.getItem('items')) || []
    item.forEach((element,index) => {
        str += `
        <tr>
                    <td><input class="inyt" id="name" type="text" value=${element[0]} ></td>
                    <td><input class="inyt" id="lost" type="text" value=${element[1]}></td>
                    <td><input class="inyt" id="thing" type="text" value=${element[2]}></td>
                    <td><input class="inyt" id="contact" type="text" value=${element[3]}></td>
                    <td><button class="bnt" id="dell" type="submit">Delete${index}</button></td>
                    <td><button class="bnt1" id="edit" onclick="edit(n)" type="button">Edit${index}</button></td>
                </tr>   
        `
    });
    lost.innerHTML=str;
}
updatel();
function updatef(){
    let found = document.getElementById('Found');
    let str1 = "";
    let itemf=JSON.parse(localStorage.getItem('itemsJson')) || []
    itemf.forEach((element,index) => {
        str1 += `
        <tr>
                    <td><input class="inyt" id="name" type="text" value=${element[0]} ></td>
                    <td><input class="inyt" id="lost" type="text" value=${element[1]}></td>
                    <td><input class="inyt" id="thing" type="text" value=${element[2]}></td>
                    <td><input class="inyt" id="contact" type="text" value=${element[3]}></td>
                    <td><button class="bnt" id='delf' type="submit">Delete${index} </button></td>
                    <td><button class="bnt1" id="edit"  type="button">Edit${index}</button></td>
                </tr>   
        `
    });
    found.innerHTML=str1;
}
updatef();
let clr=document.getElementById('delf');
clr.addEventListener('click',()=>{
    localStorage.removeItem('itemsJson');
    updatel();
    updatef();
})
let clr3=document.getElementById('dell');
clr3.addEventListener('click',()=>{
    localStorage.removeItem('items');
    updatel();
    updatef();
})
let clr2=document.getElementById('clear');
clr2.addEventListener('click',()=>{
    localStorage.clear();
    updatel();
    updatef();
})
