let a=new Array();
document.getElementById("demo").addEventListener('click', function(){
    a[0]=
        document.getElementById("user1").value
    a[1] =   
        document.getElementById("user2").value
    a[2] =
        document.getElementById("user3").value    
        document.getElementById("demo3").innerHTML=a
        console.log(a)
    })

    document.getElementById("demo1").addEventListener('click', function(){
        let b=prompt("which index no you want to delete")
        delete a[b];
        document.getElementById("demo3").innerHTML=a
        console.log(a)
    })  

    document.getElementById("demo2").addEventListener('click', function(){
        let b=prompt("which index no you want to update")
        a[b]=prompt("enetr the updated value")
        document.getElementById("demo3").innerHTML=a
        console.log(a)
    })  