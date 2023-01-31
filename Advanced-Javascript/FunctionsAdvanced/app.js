async function getData(){
    const response = await fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`);
    const data = await response.json();
    console.log(data);

    let maleArray = [];
    let femaleArray = [];

    data.forEach(student => {
        if(student.gender === "Male"){
            maleArray.push(student);
        } else if(student.gender === "Female"){
            femaleArray.push(student);
        } 
    });
    console.log("Female students: ", femaleArray);
    console.log("Male students: ", maleArray);


    let gradeHigher = data.filter(student => student.averageGrade > 3);
    let femaleAverageGrade = femaleArray.filter(femaleArray => femaleArray.averageGrade === 5);
    let maleNamesThatLiveInSkopje = maleArray.filter(maleArray => maleArray.city === "Skopje" && maleArray.age > 18);
    let maleNamesStartWithB = maleArray.filter(maleArray => maleArray.firstName.startsWith("B") && maleArray.averageGrade > 2);
    let femaleNamesOver24 = femaleArray.filter(femaleArray => femaleArray.age > 24);
    let sumOfTotalGrades = femaleNamesOver24.map(femaleNamesOver24 => femaleNamesOver24.averageGrade).reduce((a,b) => a + b);
    let sumOfAverageGrades = sumOfTotalGrades / femaleNamesOver24.length;
    console.log("The students with grades higher than 3 are:", gradeHigher);
    console.log("The female names with an average grade of 5 are:", femaleAverageGrade);
    console.log("The male students that live in Skopje and have over 18 years:",maleNamesThatLiveInSkopje);
    console.log("The students with the name that starts with B & have average grade over 2:", maleNamesStartWithB);
    console.log("The sum of average grades of females over 24 is:",sumOfAverageGrades);


}

getData();
