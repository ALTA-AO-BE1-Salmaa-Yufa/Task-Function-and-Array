function primeNumb (n) {
    if(n<2)
        return "false";

    for (var i=2; i< n ;i++){
        if (n%i == 0) {
            return "false"

             }
        }
        return "is a true"
    }

    console.log(primeNumb(79));