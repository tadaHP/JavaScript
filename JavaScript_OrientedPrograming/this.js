var teamA = {
    firstPoint:10,
    secondPoint:20,
    sum:function(){
        return this.firstPoint+this.secondPoint;
    }
}
console.log("teamA.sum:", teamA.sum(teamA.firstPoint, teamA.secondPoint));
console.log("this.sum:", teamA.sum(this.firstPoint, this.secondPoint));