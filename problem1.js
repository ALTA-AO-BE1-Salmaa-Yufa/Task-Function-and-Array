let studentScore = process.argv[2]

switch (true){
    case studentScore > 100:
        console.log("invalid")
    break;
    case studentScore >= 80:
        console.log("A") 
    break; 
    case studentScore >= 65:
        console.log("B")
    break;
    case studentScore >= 50:
        console.log("B+")
    break;
    case studentScore >= 35:
        console.log("C")
    break;
    case studentScore >= 0:
        console.log("D")
    break;
    }
