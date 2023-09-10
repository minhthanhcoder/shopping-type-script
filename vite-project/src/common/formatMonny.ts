function formatCash(str:number) {
    var x = 1000;
    x = x.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    console.log(x);
    return 
}