var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var f =0;
var d =0;
var c =0;
var b = 0;
var a = 0;
var highestGrade =100;
var lowestGrade =50;

//A score of 50-60 is an F
//A score of 61-70 is a D
//A score of 71-80 is a C
//A score of 81-90 is a B
//A score of 91-100 is an A

for (var i = 0; i < scores.length; i++) {
    var grade = "";
    grade += scores[i];
    
    if (grade >= 91 ) {
        a++;
    } else if (grade >= 81 && grade <= 90) {
        b++;
//        console.log(b);
    } else if (grade >=71 && grade <= 80) {
        c++;
//        console.log(c);
    } else if (grade >= 61 && grade <= 70) {
        d++;
//        console.log(d);
    } else {
        f++;
//        console.log(f);
    }
}
console.log("You have " + a + "-A's " + b + "-B's " + c + "-C's " + d + "-D's " + f + "-F's ");

highestGrade = Math.max.apply(null, scores);
lowestGrade = Math.min.apply(null, scores);
console.log("Your lowest grade is " + lowestGrade);
console.log("Your Highest grade is " + highestGrade);


