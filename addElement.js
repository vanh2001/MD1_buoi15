let array = [1,2,3,4,5];
// hàm có mảng cố định
function run(value, index) {
    for (let i = array.length; i > index; i--) {
        array[i]= array[i-1];
    }
    return array[index]=value;
}
run(-2,2);

//hàm có mảng có thể thêm theo ý mình
function run2(array, value, index) {
    for (let i = array.length; i > index; i--) {
        array[i]= array[i-1];
    }
    return array[index]=value;
}