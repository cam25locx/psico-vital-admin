window.onload = ()=> {
    document.querySelector("#formINIcio").style.display="flex";
    console.log("Página cargada");
    
    document.querySelector("#Rcuenta").onclick = ()=>{
        console.log("Clic en #Rcuenta");
        document.querySelector("#registro").style.display="flex";
       document.querySelector("#formINIcio").style.display="none";
    }

    document.querySelector("#Rvolver").onclick = ()=>{
        console.log("Clic en #Rvolver");
        document.querySelector("#formINIcio").style.display="flex";
        document.querySelector("#registro").style.display="none";
        
    }
}