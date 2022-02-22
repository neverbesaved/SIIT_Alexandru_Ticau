var array = [1,2,3,4,56,232,45,12,4,6,8,8,1,1];

// 1. display in the console the numbers from 1 to 20
for(i=0;i<array.length;i++){
    if(array[i]>0 && array[i]<21){
        console.log(array[i])
    }
}

// 2. display in the console the odd numbers from 1 to 20
for(i=0;i<array.length;i++){
    if(array[i]>20 && array[i]%2!=0){
        console.log(array[i])
    }
}

// 3. compute the sum of the elements of an array and display it in the console
var summ=0;
for(i=0;i<array.length;i++){
    summ+=array[i];
}
console.log(summ);

// 4. compute the maximum of the elements of an array and display it in the console
max=array[0];
for(i=0;i<array.length;i++){
if(array[i]>max){
    max=array[i];
}
}
console.log(max)

// 5. compute how many times a certain element appears in an array - tips: use object, var element = 2
function repeatedElement(element){
    let elementObject = {
    elementName:element,
    apparitionNumber:0
    }
    for(i=0;i<array.length;i++){
        if(array[i]==elementObject.elementName){
            elementObject.apparitionNumber++;
        }
    }
    return elementObject;
}

// 6. Using nested control structures (doua for + if) for generate the following pattern
function twoDimensionalArray(a,b){
    let arr=[];
    for(i=0;i<a;i++){
        for(j=0;j<b;j++){
            arr[i]=[];
        }
    }

    for(i=0;i<a;i++){
        for(j=0;j<b;j++) {
            if(i%2==0 && j%2==0){
                arr[i][j]=0;
            } else {
                arr[i][j]=1;
            }
        }
    }
}
var twoDimensionalArray = [[],[],[],[]]
for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        if(i%2==0 && j%2==0){
            console.log("0 \n" )
        } else {
            console.log("1 \n ")
        }
    }
}