let products = ["Iphone 11", "Iphone 11 pro max", "Iphone 12 pro max", "Samsung Galaxy Z Flip"];
//hàm để hiển thị danh sách sản phẩm từ mảng vào table
// 1. Tên hàm: showAllProduct
// 2. Tham số: không có
// 3. Thực thi:
// 4. Trả về: void
function showAllProduct() {
    let content = "<table border=\"\">\n" +
        "    <tr>\n" +
        "        <th>Product Name</th>\n" +
        "        <th></th>\n" +
        "        <th></th>\n" +
        "    </tr>";
    //duyệt mảng
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>\n" +
            "            <td>"+ products[i] +"</td>\n" +
            "            <td><button>Edit</button></td>\n" +
            "            <td><button>Delete</button></td>\n" +
            "        </tr>";
        content += temp;
    }
    content += "</table>";
    document.getElementById('content').innerHTML = content;
}
showAllProduct();

//tạo mới sản phẩm:
// 1. Tên hàm: createlProduct
// 2. Tham số: không có
// 3. Thực thi:
// Lấy tên sản phẩm từ ô input
// Push phần tử mới vào mảng
// Hiển thị danh sách lại
// 4. Trả về: void
function createlProduct() {
    let name = document.getElementById('newProduct').value;
    products.push(name);
    showAllProduct();
}
