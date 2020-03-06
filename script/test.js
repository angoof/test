function giai_phuong_trinh(){
    let a = parseInt(document.getElementById('textA').value);
    let b = parseInt(document.getElementById('textB').value);
    let c = parseInt(document.getElementById('textC').value);
    const delta = b**2 - 4*a*c;
    console.log(delta)
    if (delta < 0){
        alert('phuong trinh vo nghiem')
    }
    else if(delta == 0){
        let x = -b/(2*a) ;
        alert('phuong trinh co 1 nghiem x =' +x);
    }
    else{
        let x1 = (-b + Math.sqrt(delta))/(2*a); 
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        alert('phuong tring co 2 nghiem x1 = ; x2 = '+x1,+x2);
    }


}