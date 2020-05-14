function ProcessScores() {
    let score1 = Number(document.getElementById("Score1").value);
    let score2 = Number(document.getElementById("Score2").value);
    let score3 = Number(document.getElementById("Score3").value);

    let sum = score1 + score2 + score3;
    let percentage = ((score1 + score2 + score3)/30)*100;

    document.getElementById("StudentIdOutput").innerHTML = 'StudentId: ' + document.getElementById("StudentId").value;

    document.getElementById("Score1Output").innerHTML = 'Score1: ' + score1;
    document.getElementById("Score2Output").innerHTML = 'Score2: ' + score2;
    document.getElementById("Score3Output").innerHTML = 'Score3: ' + score3;
    
    document.getElementById("TotalScore").innerHTML = 'Total Score: ' + sum;
    document.getElementById("Percentage").innerHTML = 'Percentage Score: ' + percentage.toPrecision(3);
    document.getElementById("Output").hidden = false;
    document.getElementById("Output").style.border = "1px solid #000000";
    document.getElementById("Output").style.width = "20%";
    document.getElementById("Output").style.marginTop = "40px";
    document.getElementById("Output").style.lineHeight = "0";
    document.getElementById("StudentNameOutput").innerHTML = document.getElementById("StudentName").value;

    if (sum < 15) 
    {
        document.getElementById("Description").innerHTML = "Student is failed."
        document.getElementById("Description").style.color = "red";
    }
    else 
    {
        document.getElementById("Description").innerHTML = "Student is passed in distinction."
    }
    document.getElementById("Description").style.fontWeight = "bold";

}