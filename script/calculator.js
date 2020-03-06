
var x='';
function display(id)
{
    return document.getElementById('kq');    
}
function calculate(num)
{
   x += num;
   display('kq').value = x;
}
function result()
{   
    try {
        display('kq').value = eval(display('kq').value);
    } catch (error) {
        display('kq').value = 'ERR';
        x ='';
    }
}
function AC(){
    x ='';
    display('kq').value =x;
}
function DEL(){
   x = x.substr(0, x.length-1);
   display('kq').value = x;
}   
