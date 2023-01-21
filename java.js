//Bài 1 Tính tiền lương nhân viên
console.log("Bài 1:Tính tiền lương nhân viên")
//input: lương 1 ngày, số ngày làm
const luong = 100000;
var soNgay = 5;
console.log("Lương 1 ngày:",luong)
console.log("Số ngày làm:",soNgay)
//process
var luongNhanvien = soNgay * luong;
//output: lương
console.log("Tiền lương:",luongNhanvien)

//Bài 2 Tính giá trị trung bình
console.log("Bài 2:Tính giá trị trung bình của 5 số")
//input: nhập 5 số thực.
var a1 = 1;
console.log("Số thứ nhất:",a1)
var a2 = 2;
console.log("Số thứ hai:",a2)
var a3 = 3;
console.log("Số thứ ba:",a3)
var a4 = 4;
console.log("Số thứ tư:",a4)
var a5 = 5;
console.log("Số thứ năm:",a5)

//process
var giatriTrungBinh = (a1 + a2 + a3 + a4 + a5) /5;

//output: giá trị trung bình
console.log("Gía trị trung bình:",giatriTrungBinh)

//Bài 3 Quy đổi tiền
console.log("Bài 3:Quy đổi tiền")
//input: Nhập vào tiền USD
const tiGia = 23500;
console.log("Tỉ giá:",tiGia)
var tienUSD = 2;
console.log("Tiền USD:",tienUSD)

//process
var quyDoi = tienUSD * tiGia;

//output: Xuất ra tiền sau quy đổi VND
console.log("Quy đổi tiền VND:",quyDoi)

//Bài 4: Tính diện tích,chu vi hcn
console.log("Bài 4:Tính diện tích,chu vi HCN")
//input: Nhập chiều dài, chiều rộng
var chieuDai = 6;
console.log("Chiều dài:",chieuDai)
var chieuRong = 4;
console.log("Chiều rộng:",chieuRong)

//process
var chuVi = (chieuDai + chieuRong)*2;
var dienTich = chieuDai * chieuRong;

//output: Chu vi và diện tích HCN
console.log("Chu vi HCN:",chuVi);
console.log("Diện tích HCN:",dienTich);

//Bài 5:Tính tổng 2 ký số
console.log("Bài 5:Tính tổng 2 ký số")
//input: nhập 1 số 2 chữ số
var a = 44;
console.log("Số:",a);
//process
var donVi = a % 10;
var chuc = Math.floor(a / 10);
var tong = donVi + chuc;
//output: tỏng 2 ký số của số vừa nhập
console.log("Tổng 2 ký tự của số:",tong);