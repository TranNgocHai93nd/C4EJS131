
// function myDate () {
//     document.getElementById("demo").innerHTML = Date();
// }

//Thưc hiện chèn thêm phần tử con vào
// them 1 <p></p> vào


function delpara () {
    const para = document.createElement("p");
    const node = document.createTextNode("this me.");
    para.appendChild(node);//tao xong the p
    let parent1 = document.getElementById("div1");
    let Child = document.getElementById("demo2");

    //parent1.appendChild(para);
    parent1.replaceChild(para, Child);// chen vào nut con nào
}
function backg () {
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let z = Math.floor(Math.random()*100);
    document.body.style.backgroundColor= `rgb(${x}, ${y}, ${z},0.4)`;
    let doc = document.getElementById("but");
    doc.title="Change Color"
}
function addMe () {
    // const divmain = document.createElement("div");
        //divmain.setAttribute("class","main-content");
        //document.getElementsByClassName("main-content").innerHTML
        const mainOwn =document.getElementById("demo3");
    const content = document.getElementById("nameContent").value;// lay noi dung user input
    const maincontent = document.createElement("div");
        maincontent.className = ("main-content");

    const boxEmty = document.createElement("div");
        boxEmty.className = ("main-content_box1");
    const boxConent = document.createElement("div");
        boxConent.className = ("main-content_box2");
    const nodeCo = document.createTextNode(content);
        boxConent.appendChild(nodeCo);

    const boxBut = document.createElement("button");
        boxBut.className = "but-dele";
        boxBut.setAttribute=("onclick","Del()")
        boxConent.appendChild(boxBut);
    const nodebut = document.createTextNode("Delete");
        boxBut.appendChild(nodebut);
    
    
        
        
        

        

    const element = document.getElementById("demo3");
    const boxFind = document.getElementById("demo5");
    maincontent.appendChild(boxEmty);
    maincontent.appendChild(boxConent);
    maincontent.appendChild(boxBut);
    element.insertBefore(maincontent,boxFind);
    
    console.log(mainOwn)
  


}

function Del () {
    const delcontent = mainOwn.getElementsByClassName("main-content")
    mainOwn.removeChild(delcontent)
}




