var listNumber = [];
function addNumber(){
    var number = +document.querySelector('#txtNum').value;
    listNumber.push(number);
    document.querySelector('#listNumber').innerHTML=listNumber;
}

function total(){
    var sum = 0;
    if(listNumber.length===0)
    {
        document.querySelector('#total').innerHTML="Please scan number into array !!!";
    }
    else
    {
        for(var i =0 ; i<listNumber.length;i++)
    {
        if(listNumber[i]>0)
        {
            sum += listNumber[i];
        }
        document.querySelector('#total').innerHTML=sum;
    } 
    }
}

function count(){
    var count = 0;
    if(listNumber.length===0)
    {
        document.querySelector('#count').innerHTML="Please scan number into array !!!";
    }
    else
    {
        for(var i = 0 ; i<listNumber.length;i++)
    {
        if(listNumber[i]>0)
        {
            count++;
        }
        document.querySelector('#count').innerHTML=count;
    }
    } 
}

function min(){
    
    if(listNumber.length===0)
    {
        document.querySelector('#min').innerHTML="Please scan number into array !!!";
    }
    else{
    var min = listNumber[0];
    for(var i = 1 ; i<listNumber.length;i++)
    {
        if(listNumber[i]<min)
        {
           min=listNumber[i];
        }
    } 
    document.querySelector('#min').innerHTML=min;
    }
}

// function minPositive(){
//     if(listNumber.length===0)
//     {
//         document.querySelector('#minPositive').innerHTML="Please scan number into array !!!";
//     }
//     else
//     {
//         var positive = [];
//         for(var i = 0 ; i<listNumber.length;i++)
//         {
//             if(listNumber[i] > 0)
//             {
//                 positive.push(listNumber[i]);
//             }
//         } 
//         if(positive.length===0)
//         {
//             document.querySelector('#minPositive').innerHTML="Arrays have no positive integers";
//         }
//         else
//         {
//             var minPositive = positive[0];
//             for(var i = 1 ; i<positive.length;i++)
//             {
//                 if(positive[i] < minPositive)
//                 {
//                     minPositive=positive[i];
//                 }
//             }
//             document.querySelector('#minPositive').innerHTML=minPositive;
//         }  
//     }
// }

function minPositive() {
    if(listNumber.length===0)
    {
        document.querySelector('#minPositive').innerHTML="Please scan number into array !!!";
    }
    else{
        var minPositive;
    for(var i = 0 ; i<listNumber.length;i++) {
        if(listNumber[i]>0) 
        {
            minPositive = listNumber[i];
            break;
        }
    }
    if(minPositive==undefined)
    {
        document.querySelector('#minPositive').innerHTML="Arrays have no positive integers";
    }
    else
    {
        for(var i = 0 ; i<listNumber.length;i++) {
            if(listNumber[i]>0 && listNumber[i]<minPositive)
                minPositive = listNumber[i];
        }
        document.querySelector('#minPositive').innerHTML=minPositive;
    }
    }
}

function lastEven()
{
    if(listNumber.length===0)
    {
        document.querySelector('#lastEven').innerHTML="Please scan number into array !!!";
    }
    else{
        var lastEven = 0;
        for(var i = 0 ; i<listNumber.length;i++) 
        {
            if(listNumber[i]%2===0)
            {
               lastEven = listNumber[i];
            }
        }
        document.querySelector('#lastEven').innerHTML = lastEven;
        if(lastEven == 0)
        {
            document.querySelector('#lastEven').innerHTML = "Arrays have no even number";
        }
    }
}

function change()
{
    if(listNumber.length===0)
    {
        document.querySelector('#change').innerHTML="Please scan number into array !!!";
    }
    else
    {
        var index1 = +document.querySelector('#txtIndex1').value;
        var index2 = +document.querySelector('#txtIndex2').value;
        
        if(listNumber[index1]==undefined || listNumber[index2]==undefined)
        {
            document.querySelector('#change').innerHTML = "Wrong index";
        }
        else
        {
            var temp = listNumber[index1];
            listNumber[index1]=listNumber[index2];
            listNumber[index2]=temp;
            document.querySelector('#change').innerHTML = listNumber;
        }
    }
}

function sortAscending()
{
    if(listNumber.length===0)
    {
        document.querySelector('#sortAscending').innerHTML="Please scan number into array !!!";
    }
    else
    {
        for(var k= listNumber.length -1; k >= 0 ;k--)
        {
            for( var i=0 ; i<k; i++)
            {
                if(listNumber[i]>listNumber[i+1])
                {
                    var temp = listNumber[i+1];
                    listNumber[i+1]=listNumber[i];
                    listNumber[i] = temp;
                }
            }
        }
        document.querySelector('#sortAscending').innerHTML = listNumber;
    }
}

function findPrime(n)
{
    if(n<2)
    {
        return 0;
    }
    for(var i =2 ; i <= Math.sqrt(n); i++)
    {
        if(n%i===0)
        {
            return 0;
        }
    }
    return 1;
}

function firstPrime()
{
    if(listNumber.length===0)
    {
        document.querySelector('#firstPrime').innerHTML="Please scan number into array !!!";
    }
    else
    {
        var first=0;
        for(var i = 0; i < listNumber.length; i++)
        {
            if(findPrime(listNumber[i])==1)
            {
                first = listNumber[i];
                break;
            }
        }
        document.querySelector('#firstPrime').innerHTML = first;
    }
    
}

function addFloat(){
    var number = +document.querySelector('#txtFloat').value;
    listNumber.push(number);
    document.querySelector('#listFloat').innerHTML=listNumber;
}
function countInteger(){
    if(listNumber.length===0)
    {
        document.querySelector('#countInteger').innerHTML="Please scan number into array !!!";
    }
    else
    {
        var countInt=0;
        for(var i = 0; i < listNumber.length; i++)
        {
            if(Number.isInteger(listNumber[i]) == true)
            {
                countInt++;
            }
        }
        document.querySelector('#countInteger').innerHTML = countInt;
    }
}

function compare(){
    if(listNumber.length===0)
    {
        document.querySelector('#compare').innerHTML="Please scan number into array !!!";
    }
    else
    {
        var countPositive=0;
        var countNegative=0;
        for(var i = 0; i < listNumber.length; i++)
        {
            if(listNumber[i] > 0)
            {
                countPositive++;
            }
            else if(listNumber[i] < 0)
            {
                countNegative++;
            }
        }
        if(countPositive>countNegative)
        {
            document.querySelector('#compare').innerHTML = "Positive > Negative";
        }
        else if(countPositive<countNegative)
        {
            document.querySelector('#compare').innerHTML = "Positive < Negative";
        }
        else{
            document.querySelector('#compare').innerHTML = "Positive = Negative";
        }
    }
}