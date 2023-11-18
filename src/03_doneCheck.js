// 日ヘッダーエラー行書式設定
function doneCheck(){
    if(typeData === 'LL'){
        const llData = gssFile.getRange(beginRow,1,endRow,endCol).getValues();
        for(i=0;(endCol-beginRow+1)<0;i++){
            if(llData[i][0]===TRUE){
                if(llData[i][14]===0){
                    if(llData[i][20]<5){
                        gssFile.getRange(i+beginRow,1,1,endCol).setBackground('black');
                        gssFile.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }else if(llData[i][20]>=5){
                        gssFile.getRange(i+beginRow,1,1,endCol).setBackground('#990000');
                        gssFile.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }
                }else if(llData[i][14]===1){
                    gssFile.getRange(i+beginRow,1,1,endCol).setBackground('red');
                    gssFile.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                }
            }
        }
    }
}