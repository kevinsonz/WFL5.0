// 数式リセット
function formulaReset(call,addRows){
    const formulaCols = [2,3,4,5,14,15,16,17,18,19,20,21,22,23,24,25];
    const runFlag = (runFunc === '数式') && isLL && okCol;
    const callFlag = (call === 'call') && isLL && okCol;
    if(runFlag || callFlag){
        for(let i=0; i<formulaCols.length; i++){
            const llFormula = templateSheet.getRange(beginRow,formulaCols[i]).getFormula();
            gssSheet.getRange(beginRow,formulaCols[i],endRow-beginRow+1+addRows,1).setFormula(llFormula);
        }
        gssSheet.getRange('C2').setValue('');
    }
}