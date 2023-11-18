// 行列
let llData = gssSheet.getRange(beginRow,1,endRow-beginRow,endCol).getValues();

// 日ヘッダーエラー行書式設定
function doneCheck(){
    if(typeData === 'LL'){
        for(i=0;(endCol-beginRow+1)<0;i++){
            if(llData[i][0]===TRUE){
                if(llData[i][14]===0){
                    if(llData[i][20]<5){
                        gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('black');
                        gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }else if(llData[i][20]>=5){
                        gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('#990000');
                        gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                    }
                }else if(llData[i][14]===1){
                    gssSheet.getRange(i+beginRow,1,1,endCol).setBackground('red');
                    gssSheet.getRange(i+beginRow,1,1,endCol).setFontColor('white');
                }
            }
        }
    }
}