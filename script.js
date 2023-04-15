// console.log("helo")
/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(e){
      if(e.profession=='developer')
      console.log(e)
    } );
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(valueAllDev){
      if(valueAllDev.profession=='developer')
        console.log(valueAllDev)
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newValueAdd = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(newValueAdd);
    // console only this value 

    // arr.forEach(function(newValuePrint){
    //   if(newValuePrint.profession=="intern")
    //   console.log(newValuePrint)
    // });
    // console all value  using this  
     console.log(arr)

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArr = arr.filter(function(arrayValue){
        return arrayValue.profession!=="admin";
    });
    console.log(newArr)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let oneMoreArr =  [{id:4,name:"ShriGanesh",age:"20",profession:"Full Stack Web Developer"},{id:5,name:"Ram",age:"21",profession:"designer"},{id:6,name:"Shiva",age:"22",profession:"tester"}]
  
    let concatArray = arr.concat(oneMoreArr);
    console.log(concatArray);
  }






