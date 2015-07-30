module.exports = function (node,pos){

    if(!node){
        return false;
    } else if(node.createTextRange) {
        var textRange = node.createTextRange();
        textRange.collapse(true);
        textRange.moveEnd(pos);
        textRange.moveStart(pos);
        textRange.select();
        return true;
        
    } else if(node.setSelectionRange) {
        node.setSelectionRange(pos,pos);
        return true;
    }
}