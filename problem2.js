function primeNumb (n) {
    if(n<2)
        return "is not a Prime";

    for (var i=2; i< n ;i++){
        if (n%i == 0) {
            return "is not a Prime"

             }
        }
        return "is a Prime "
    }

    console.log(primeNumb(79));