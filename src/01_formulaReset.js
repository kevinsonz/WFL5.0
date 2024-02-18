// 数式リセット

function formulaReset(call,addRows){
    const formulaCols = [1,3,4,5,6,15,16,17,18,19,20,21,22,23,24,25,26];
    const runFlag = (runFunc === '数式') && isLL && okCol;
    const callFlag = (call === 'call') && isLL && okCol;
    if(runFlag || callFlag){
        if(call !== 'call'){
            addRows = 0;
        }
        for(let i=0; i<formulaCols.length; i++){
            const llFormula = templateSheet.getRange(beginRow_LL,formulaCols[i]).getFormula();
            wflSheet.getRange(beginRow_LL,formulaCols[i],endRow_LL-beginRow_LL+1+addRows,1).setFormula(llFormula);
        }
        wflSheet.getRange(runCell).setValue('');
    }
}