// 書式リセット
function formatReset(call){
    const runFlag = ((runFunc === '書式') || (call === 'call')) && isLL && okCol;
    if(runFlag){
        for(let i=0;i<(endRow-beginRow+1);i++){
            if((llData[i][0]===false) && bgData[i][0]!=='white'){
                gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('white');
                gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('black');
            }
        }
        gssSheet.getRange('C2').setValue(''); 
    }
}