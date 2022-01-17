let ngoiSao = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let chomSao = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

//Cách 1:
function findStars(name) {
    // let  index = -1;
    for (let i = 0; i < ngoiSao.length; i++) {
        if(ngoiSao[i] == name ){
            // index = i;
            // break;
            return i;
        }
    }
    return -1;
    // return index;
}

function displayConstellation() {
    //B1: Cho nhập tên ngôi sao
    let start = prompt('Mời bạn nhập vào tên ngôi sao:');
    //B2: Đưa ra chỉ số
    let index = findStars(start);
    //B3: Kết luận chòm sao tương ứng
    if (index != -1){
        alert("Ngôi sao" + start + " thuộc chòm sao " + chomSao[index]);
    }else {
        alert("Không tìm thấy chòm sao tương ứng")
    }
}
displayConstellation();

//Cách 2:
function findTheStarName(n) {
    let stringFunction = [];
    for (let i = 0; i < ngoiSao.length; i++) {
        if(n === ngoiSao[i]){
            stringFunction = chomSao[i];
        }
    }
    return stringFunction;
}
let n = prompt('Mời bạn nhập vào tên ngôi sao: ');
let run = findTheStarName(n);
alert(run);