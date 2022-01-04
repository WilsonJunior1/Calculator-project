let resul_view = document.querySelector("#resul-view")

const keys = [

    document.querySelector("#zero-number"),
    document.querySelector("#one"),
    document.querySelector("#two"),
    document.querySelector("#three"),
    document.querySelector("#four"),
    document.querySelector("#five"),
    document.querySelector("#six"),
    document.querySelector("#seven"),
    document.querySelector("#eight"),
    document.querySelector("#nine"),
    

]

const methods = {

    sum: document.querySelector("#sum"),
    subtraction: document.querySelector("#subtraction"),
    multiply: document.querySelector("#multiply"),
    division: document.querySelector("#division"),
    percent: document.querySelector("#percent"),
    equal: document.querySelector("#equal"),
    sum_method: function(initial, middle, end){
        let resul = initial + middle + end
        return resul
    }

}

methods.sum.addEventListener("click", function(){
    resul_view.innerHTML += "+"
})
methods.subtraction.addEventListener("click", function(){
    resul_view.innerHTML += "-"
})
methods.multiply.addEventListener("click", function(){
    resul_view.innerHTML += "X"
})
methods.division.addEventListener("click", function(){
    resul_view.innerHTML += "/"
})
methods.percent.addEventListener("click", function(){
    resul_view.innerHTML += "%"
})
methods.equal.addEventListener("click", function(){
    let resul_view_innerHTML = resul_view.innerHTML
    let initial = Number(resul_view_innerHTML.substring(0, resul_view_innerHTML.indexOf("+")));
    let n = resul_view_innerHTML.lastIndexOf('+')
    let end = Number(resul_view_innerHTML.substring(n + 1));
    let result = resul_view_innerHTML.match(/(?<=\+)\w+(?=\+)/g) || [];
    let result_number = result.map(function(x){
        return parseInt(x, 10)
    })

    let sum_result_number = result_number.reduce((a, b) => a + b, 0)
    resul_view.innerHTML = methods.sum_method(initial, sum_result_number , end)
    methods.sum_method(initial , sum_result_number, end)
})



for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function(){
        keys[i] = i
        resul_view.innerHTML += keys[i]
    })
}


