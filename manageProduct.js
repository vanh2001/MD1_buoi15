// let products = ["Iphone 11", "Iphone 11 pro max", "Iphone 12 pro max", "Samsung Galaxy Z Flip"];
class Product {
    constructor(name, price, number, color) {
        this.name = name;
        this.price = price;
        this.number = number;
        this.color = color;
    }
}
let products = [
    new Product("But Thien Long", 5000, 20, "Xanh"),
    new Product("So Ghi Chep", 25000, 100, "Hồng")
]
//hàm để hiển thị danh sách sản phẩm từ mảng vào table
// 1. Tên hàm: showAllProduct
// 2. Tham số: không có
// 3. Thực thi:
// 4. Trả về: void
function showAllProduct() {
    let content = "<table border=\"\">\n" +
        "    <tr>\n" +
        "        <th>Product Name</th>\n" +
        "        <th>Price</th>\n" +
        "        <th>Amount</th>\n" +
        "        <th>Color</th>\n" +
        "        <th></th>\n" +
        "        <th></th>\n" +
        "    </tr>";
    //duyệt mảng
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>\n" +
            "            <td>"+ products[i].name +"</td>\n" +
            "            <td>"+ products[i].price +"</td>\n" +
            "            <td>"+ products[i].number +"</td>\n" +
            "            <td>"+ products[i].color +"</td>\n" +
            "            <td><button onclick='editProduct("+i+")'>Edit</button></td>\n" +
            "            <td><button onclick='deleteProduct("+i+")'>Delete</button></td>\n" +
            "        </tr>";
        content += temp;
    }
    content += "</table>";
    document.getElementById('content').innerHTML = content;
}
showAllProduct();

//tạo mới sản phẩm:
// 1. Tên hàm: createProduct
// 2. Tham số: không có
// 3. Thực thi:
// Lấy tên sản phẩm từ ô input
// Push phần tử mới vào mảng
// Hiển thị danh sách lại
// 4. Trả về: void
function createProduct() {
    let name = document.getElementById('newProduct').value;
    let price = document.getElementById('price').value;
    let number = document.getElementById('number').value;
    let color = document.getElementById('color').value;
    let newP = new Product(name, price, number,color);
    products.push(newP);
    showAllProduct();
    document.getElementById('newProduct').value = "";
}

//xóa sản phẩm:
// 1. Tên hàm: deleteProduct
// 2. Tham số: không có
// 3. Thực thi:
// xóa phần tử
// Hiển thị danh sách lại
// 4. Trả về: void
function deleteProduct(index) {
    products.splice(index, 1);
    showAllProduct();
}

function editProduct(index) {
    let newName = prompt("Mời bạn nhập tên sản phẩm: ", products[index]);
    products[index] = newName;
    showAllProduct();
}

function findByName() {
    let newProducts=[];
    //B1: Lấy dữ liệu từ ô input
    let name = document.getElementById('name').value;
    //B2: Tìm kiếm và trả về 1 mảng
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(name)){
            newProducts.push(products[i]);
        }
    }
    //B3: In ra mảng đó
    let content = "<table border=\"\">\n" +
        "    <tr>\n" +
        "        <th>Product Name</th>\n" +
        "        <th>Price</th>\n" +
        "        <th>Amount</th>\n" +
        "        <th>Color</th>\n" +
        "        <th></th>\n" +
        "        <th></th>\n" +
        "    </tr>";
    //duyệt mảng
    for (let i = 0; i < newProducts.length; i++) {
        let temp = "<tr>\n" +
            "            <td>"+ newProducts[i].name +"</td>\n" +
            "            <td>"+ newProducts[i].price +"</td>\n" +
            "            <td>"+ newProducts[i].number +"</td>\n" +
            "            <td>"+ newProducts[i].color +"</td>\n" +
            "            <td><button onclick='editProduct("+i+")'>Edit</button></td>\n" +
            "            <td><button onclick='deleteProduct("+i+")'>Delete</button></td>\n" +
            "        </tr>";
        content += temp;
    }
    content += "</table>";
    document.getElementById('content').innerHTML = content;
}