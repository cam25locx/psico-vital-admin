window.onload = ()=> {
    document.querySelector("#Rcuenta").onclick = ()=>{
        document.querySelector("#formREgistro").style.display="flex";
        document.querySelector("#formINIcio").style.display="none";
        
    }

    document.querySelector("#Rvolver").onclick = ()=>{
        document.querySelector("#formINIcio").style.display="flex";
        document.querySelector("#formREgistro").style.display="none";
        
    }
}