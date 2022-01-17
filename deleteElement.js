let array = [1,2,3,4,5];
function deleteElement(array, index) {
    //tạo ra 1 mảng mới
    let newArray = [];
    for (let i = 0; i < index; i++) {
        newArray[i] = array[i];
    }
    for (let i = index; i < array.length - 1; i++) {
        newArray[i-1] = array[i];
    }
    return newArray;
}