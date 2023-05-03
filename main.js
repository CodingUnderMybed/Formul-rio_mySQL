let t = document.querySelector('#phone')
let i = document.querySelector('#cpf')
function mascara(i){
    let v = i.value
    if (isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1)
        return
    }
    if (v.length === 3 || v.length === 7)
    {i.value += "."}
    if (v.length === 11)
    {i.value += "-"}
    console.log("O cpf:",i.value)
}
/*function mascaraTel(t)
{
    let tval = t.value
    if (isNaN(tval[tval.length - 1])){
        t.value = tval.substring(0, tval.length-1)
        return
    }
    if (tval.length === 2) t.value += '-'
    if (tval.length === 8) t.value += '-'
    console.log(tval)
}
*/
