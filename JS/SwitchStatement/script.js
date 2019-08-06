let age = 9;

if(age == 10){}
if(age == 11){}
if(age == 12){}
if(age == 13){}


switch(age){
    //single case
    case 10:
       console.log('Age 10');
       break;

    //multi case
    //if(age == 11 || age == 12){}
    case 11:
    case 12:
        console.log('Age 11 or 12');
        break;

    default:
    console.log('Age was not 10, 11, or 12');
}