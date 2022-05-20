//catching number
//catching number
function history_var(a)
{
    var x=document.getElementById('btn_'+a);
    x.addEventListener('click',function(){
        var b=document.getElementById('current').innerHTML;
        document.getElementById('current').innerHTML=b+x.innerHTML;
    })
}
//catching operator
//catching operator
function operator(b)
{
    var y=document.getElementById('op_'+b);
    y.addEventListener('click',function()
    {
        switch(b){
            case '1':
                remove_last(1);
                break;
            case '2':
                allClear(2);
                break;
            case '3':
                goToHistory(3);
                break;
            case '4':
                goToHistory(4);
                break;
            case '5':
                goToHistory(5);
                break;
            case '6':
                goToHistory(6);
                break;
            case '7':
                goToHistory(7);
                break;
            case '8':
                finalOutput();
                break;
        }
    })
}
//remove last element form current
//remove last element form current
function remove_last(b)
{
    var x=document.getElementById('current').innerHTML;
    var len=x.length;
    document.getElementById('current').innerHTML=x.substring(0,len-1);
}
//remove all element form current
//remove all element form current
function allClear(b)
{
    document.getElementById('current').innerHTML="";
}
//take current element to history element
//take current element to history element
function goToHistory(b)
{
    var current=document.getElementById('current').innerHTML;
    var d=document.getElementById('op_'+b).innerHTML;
    document.getElementById('his_op').innerHTML=d;
    document.getElementById('history').innerHTML=current;
    document.getElementById('current').innerHTML="";
}
//Final Output
//Final Output
function finalOutput()
{
    var x=document.getElementById('history').innerHTML;
    var y=document.getElementById('his_op').innerHTML;
    var z=document.getElementById('current').innerHTML;
    var ans;
    var dev= String.fromCharCode(247);
    var mul= String.fromCharCode(215);
    x=parseFloat(x);
    z=parseFloat(z);
    switch(y)
    {
        case '%':
            ans=x%z;
            break;
        case '-':
            ans=x-z;
            break;
        case '+':
            ans=x+z;
            break;
    }
    if(y==dev)
    {
        ans=x/z;
        ans=ans.toFixed(3);
    }
    else if(y==mul)
    {
        ans=x*z;
    }
    document.getElementById('current').innerHTML=ans;
    document.getElementById('history').innerHTML="";
    document.getElementById('his_op').innerHTML="";
    
}
//Calling operator
//Calling operator
operator('1');
operator('2');
operator('3');
operator('4');
operator('5');
operator('6');
operator('7');
operator('8');
//calling number
//calling number
history_var('1');
history_var('2');
history_var('3');
history_var('4');
history_var('5');
history_var('6');
history_var('7');
history_var('8');
history_var('9');
history_var('0');