// 書式リセット

function formatReset(call,addRows){
    const runFlag = (runFunc === '書式') && isLL && okCol;
    const callFlag = (call === 'call') && isLL && okCol;
    if(runFlag || callFlag){
        if(call !== 'call'){
            addRows = 0;
        }
        llData = wflSheet.getRange(beginRow_LL,1,endRow-beginRow_LL+1+addRows,endCol).getValues();
        bgData = wflSheet.getRange(beginRow_LL,1,endRow-beginRow_LL+1+addRows,endCol).getBackgrounds();    
        for(let i=0;i<(endRow-beginRow_LL+1+addRows);i++){
            if((llData[i][0]===false) && bgData[i][0]!=='white'){
                wflSheet.getRange(i+beginRow_LL,1,1,endCol).setBackground('white');
                wflSheet.getRange(i+beginRow_LL,1,1,endCol).setFontColor('black');
            }
        }
        wflSheet.getRange(runCell).setValue(''); 
    }
}