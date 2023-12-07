document.getElementById("sub").addEventListener("click",execute)
    function execute()
    {
        let b=document.getElementById("bhk").value;
        let s=document.getElementById("sq").value;
        if(s/b<300 || s/b>600)
        {console.log("hi")
        document.getElementById("ou").innerHTML="Please enter valid data"}
        
        else {
            let a=[25,26,19,23,24];
            let n=a.length;
            let r=Math.random()*n;
            r=Math.floor(r)
            document.getElementById("dis").innerHTML=a[r]+" Lacs"   
        }
    }