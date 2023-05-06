const KV_A = 2;
const KV_B = 1;
const KV_C = 0.5;
const KV_X = 0;

const DT_1 = 2.5;
const DT_2 = 1.5;
const DT_3 = 1;
const DT_4 = 0;

function main(){
var diemC = document.getElementById("diemChuan").value;
var diem1 = document.getElementById("diemMon1").value;
var diem2 = document.getElementById("diemMon2").value;
var diem3 = document.getElementById("diemMon3").value;

var typeKV = checkKv(KV_A, KV_B, KV_C, KV_X);
}
function calcSum(){
   var total = 0; 
   total = 'diem1' + 'diem2' + 'diem3' + 'checkKv()' + 'checkDt()';
   if(total > diemC && diem1>0 && diem2>0 && diem3>0){
    document.getElementById("txtResult").innerHTML = "Kết quả:" + "Đậu";
   }else {
    document.getElementById("txtResult").innerHTML = "Kết quả:" + "Rớt";
   }
}
document.getElementById("btnSum").onclick = calcSum;


function checkKv(typeKv1, typeKv2, typeKv3, typeKv4){
    if(typeKv1.checked) {
        return "KV_A";
    }else if(typeKv2.checked) {
        return "KV_B";
    }else if(typeKv3.checked) {
        return "KV_C";
    }else {
        return "KV_X";
    }
}

function checkDt(type1, type2, type3, type4){
    if(type1.checked) {
        return "DT_1";
    }else if(type2.checked) {
        return "DT_2";
    }else if(type3.checked) {
        return "DT_3";
    }else {
        return "DT_4";
    }
}


