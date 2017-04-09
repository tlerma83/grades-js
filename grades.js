var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var f;
var d;
var c;
var b;
var a;

//A score of 50-60 is an F
//A score of 61-70 is a D
//A score of 71-80 is a C
//A score of 81-90 is a B
//A score of 91-100 is an A

for (var i = 0; i < scores.length; i++) {
    var grade = "";
    grade += scores[i];
    
    if (grade >= 91 ) {
        a = "A " + grade;
        console.log(a);   
    } else if (grade >= 81 && grade <= 90) {
        b = "B " + grade;
        console.log(b);
    } else if (grade >=71 && grade <= 80) {
        c = "C " + grade;
        console.log(c);
    } else if (grade >= 61 && grade <= 70) {
        d = "D " + grade;
        console.log(d);
    } else {
        f = "F " + grade;
        console.log(f);
    }
}
