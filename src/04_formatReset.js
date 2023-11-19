// 行列
let bgData = gssSheet.getRange(beginRow,1,endRow-beginRow+1,endCol).getBackgrounds();

// 書式リセット
function formatReset(call,addRows){
    const runFlag = ((runFunc === '書式') || (call === 'call')) && isLL && okCol;
    if(runFlag){
        llData = gssSheet.getRange(beginRow,1,endRow-beginRow+1+addRows,endCol).getValues();
        bgData = gssSheet.getRange(beginRow,1,endRow-beginRow+1+addRows,endCol).getBackgrounds();
        for(let i=0;i<(endRow-beginRow+1);i++){
            if((llData[i][0]===false) && bgData[i][0]!=='white'){
                gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('white');
                gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('black');
            }
        }
        gssSheet.getRange('C2').setValue(''); 
    }
}