// 書式リセット
function formatReset(call,addRows){
    const runFlag = (runFunc === '書式') && isLL && okCol;
    const callFlag = (call === 'call') && isLL && okCol;
    if(runFlag || callFlag){
        if(call !== 'call'){
            addRows = 0;
        }
        llData = llSheet.getRange(beginRow,1,endRow-beginRow+1+addRows,endCol).getValues();
        bgData = llSheet.getRange(beginRow,1,endRow-beginRow+1+addRows,endCol).getBackgrounds();    
        for(let i=0;i<(endRow-beginRow+1+addRows);i++){
            if((llData[i][0]===false) && bgData[i][0]!=='white'){
                llSheet.getRange(i+beginRow,1,1,endCol).setBackground('white');
                llSheet.getRange(i+beginRow,1,1,endCol).setFontColor('black');
            }
        }
        llSheet.getRange('C2').setValue(''); 
    }
}