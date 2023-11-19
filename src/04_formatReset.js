// 書式リセット
function formatReset(call,addRows){
    llData = gssSheet.getRange(beginRow,1,endRow-beginRow+1+addRows,endCol).getValues();
    bgData = gssSheet.getRange(beginRow,1,endRow-beginRow+1+addRows,endCol).getBackgrounds();
    const runFlag = (runFunc === '書式') && isLL && okCol;
    const callFlag = (call === 'call') && isLL && okCol;
    if(runFlag || callFlag){
        if(call !== 'call'){
            addRows = 0;
        }
        for(let i=0;i<(endRow-beginRow+1+addRows);i++){
            if((llData[i][0]===false) && bgData[i][0]!=='white'){
                gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('white');
                gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('black');
            }
        }
        gssSheet.getRange('C2').setValue(''); 
    }
}