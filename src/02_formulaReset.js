// 列
const formulaCols = [2,3,4,5,14,15,16,17,18,19,20,21,22,23];

// 識別
let runFunc = '';
if(typeData === 'LL'){
    runFunc = gssSheet.getRange('C2').getValue();
}
const runFlag1 = (runFunc === '数式');
const runFlag2 = (endCol === 23);

// 数式リセット
function formulaReset(){
    if(runFlag1){
        if(runFlag2){
            for(i=0; i<formulaCols.length; i++){
                const llFormula = templateSheet.getRange(beginRow,formulaCols[i]).getFormula();
                gssSheet.getRange(beginRow,formulaCols[i],endRow-beginRow+1,1).setFormula(llFormula);
            }   
        }
        gssSheet.getRange('C2').setValue(''); 
    }
}