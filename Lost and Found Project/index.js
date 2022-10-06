
function updatel(){
    let lost1 = document.getElementById('Lost');
    let str="";
    let item=JSON.parse(localStorage.getItem('items')) || []
    item.forEach((element,index) => {
        str += `
        <tr>
                    <td><input class="inyt"  type="text" value=${element[0]} ></td>
                    <td><input class="inyt"  type="text" value=${element[1]}></td>
                    <td><input class="inyt" type="text" value=${element[2]}></td>
                    <td><input class="inyt"  type="text" value=${element[3]}></td>
                    <td><button class="bnt"  onclick='Deletel(${index})' type="button" >Delete</button></td>  
                </tr>   
        `
    });
    lost1.innerHTML=str;
}
updatel();
function updatef(){
    let found = document.getElementById('Found');
    let str1 = "";
    let itemf=JSON.parse(localStorage.getItem('itemsJson')) || []
    itemf.forEach((element,index) => {
        str1 += `
        <tr>
                    <td><input class="inyt" type="text" value=${element[0]} ></td>
                    <td><input class="inyt"  type="text" value=${element[1]}></td>
                    <td><input class="inyt" type="text" value=${element[2]}></td>
                    <td><input class="inyt" type="text" value=${element[3]}></td>
                    <td><button class="bnt" onclick='Deletef(${index})' type="button">Delete</button></td>
                </tr>   
        `
    });
    found.innerHTML=str1;
}
updatef();
let clr2=document.getElementById('clear');
clr2.addEventListener('click',()=>{
localStorage.clear();
    updatel();
    updatef();
})
function Deletel(id){
    let dataList1=JSON.parse(localStorage.getItem('items'))
    let dataList=JSON.parse(localStorage.getItem('itemsJson'))
    for (let i in dataList1) {
        if(i==id)
        dataList1.splice(i,1);  
    }
    localStorage.clear();
    localStorage.setItem('itemsJson', JSON.stringify(dataList));
    localStorage.setItem('items', JSON.stringify(dataList1));
    updatel();
}
    function Deletef(id){
        let dataList1=JSON.parse(localStorage.getItem('items'))
        let dataList=JSON.parse(localStorage.getItem('itemsJson'))
        for (let i in dataList) {
            if(i==id)
            dataList.splice(i,1);  
        }
        localStorage.clear();
        localStorage.setItem('itemsJson', JSON.stringify(dataList));
        localStorage.setItem('items', JSON.stringify(dataList1));
        updatef();
    }
