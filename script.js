update();

add = document.getElementById("add");
add.addEventListener("click",addtolist);

function addtolist()
{
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem('itemlist')==null) {

        itemlistarray = [];
        itemlistarray.push([tit, desc]);
        localStorage.setItem('itemlist', JSON.stringify(itemlistarray));
    }
    else {

        itemlistarraystr = localStorage.getItem('itemlist')
        itemlistarray = JSON.parse(itemlistarraystr);
        itemlistarray.push([tit, desc]);
        console.log(itemlistarray);
        localStorage.setItem('itemlist', JSON.stringify(itemlistarray));
    }
    update();
}


function update(){

    if (localStorage.getItem('itemlist')==null) {

        itemlistarray = [];
    }
    else {

        itemlistarraystr = localStorage.getItem('itemlist')
        itemlistarray = JSON.parse(itemlistarraystr);
    }
    //populate table
    let tablebody=document.getElementById('tableBody');
    let str="";   
    itemlistarray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick=deleted(${index})>Delete</button></td> 
      </tr>              `
    });
    tablebody.innerHTML = str;
}


function deleted(itemindex){
    itemlistarraystr=localStorage.getItem('itemlist');
    itemlistarray=JSON.parse(itemlistarraystr);
    //delete array
    itemlistarray.splice(itemindex,1);
    localStorage.setItem('itemlist', JSON.stringify(itemlistarray));
    update();

}
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }

}
