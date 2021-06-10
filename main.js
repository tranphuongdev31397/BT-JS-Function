/* Bài 1: Viết chương trình cho biết thí sinh đậu hay rớt và điểm chuẩn
B1: Input:
Điểm chuẩn hội đồng thi
Điểm 3 môn của thí sinh
Đối tượng ưu tiên : selector : 0 - 0đ : Đối tượng không ưu tiên
                               1 - 2.5đ : Đối tượng ưu tiên 1
                               2 - 1.5 đ :Đối tượng ưu tiên 2
                               3 - 0.5 đ : Đối tượng ưu tiên 3
Khu vực ưu tiên : selector : X - 0 : khu vực không ưu tiên
                            A - 2 
                            B - 1
                            C - 0.5
B2: Handle
Tạo hàm lấy id
Tạo hàm tính tổng điểm : điểm 1 + điểm 2 + điểm 3 + điểm  đối tượng + điểm khu vực
Tạo hàm đậu rớt:
DOM tới các giá trị
Xét điều kiện báo lỗi : diem 1 2 3 <0 hoặc >10 , diemChuan > 30 hoặc < 0 , các khu vực chưa được chọn (value = 10)
else if diem 1 2 3 == 0 báo Rớt do điểm liệt
    else {
        if diemChuan < diemTongKet -> đậu
        else :Rớt
    }
B3: Output
In ra thí sinh đậu hay rớt
In ra tổng số điểm đạt được (bao gồm điểm ưu tiên)
*/
var getEle = function (id){
    return  document.getElementById(id)
}


// Bài 1
var tinhTongDiem = function(diem1, diem2, diem3, diemDoiTuong, diemKhuVuc){
    return diem1 + diem2 + diem3 + diemDoiTuong + diemKhuVuc
} 
var ketQua = getEle ('ketQua')

// Hàm kết quả đậu rớt
var kqDauRot = function (){
    var dauRot 
//Lấy giá trị
var diem1 = Number(getEle('diem1').value)
var diem2 = Number(getEle('diem2').value)
var diem3 = Number(getEle('diem3').value)
var diemDoiTuong = Number(getEle('diemDoiTuong').value)
var diemKhuVuc = Number(getEle ('diemKhuVuc').value)
var diemChuan = Number( getEle('diemChuan').value)
var diemTongKet = tinhTongDiem (diem1, diem2, diem3, diemDoiTuong, diemKhuVuc);

 if ((diem1 <0 || diem1>10) || (diem2 <0 || diem2>10) || (diem2 <0 || diem2>10) || (diemChuan<=0 || diemChuan >30) || diemDoiTuong === 10 || diemKhuVuc === 10){
    alert ('Vui lòng nhập đúng giá trị')
}else{
if (diem1 == 0 || diem2 == 0 || diem3 == 0){
    dauRot = "Rớt do điểm liệt"
}

else if (diem1 !== 0 && diem2 !== 0 && diem3 !==0){
    if(diemTongKet >= diemChuan){
        dauRot = "Đậu"
    }else{
        dauRot = "Rớt"
    }
}
ketQua.style.display = 'block'
ketQua.innerHTML = 'Bạn đã: '+ dauRot + '<div> Điểm tổng kết là: ' + diemTongKet + '</div>'
}
}

//Bắt sự kiện click
var btnTinh = getEle('btnTinh')
btnTinh.addEventListener ('click', kqDauRot)




/* Bài 2 : Chương trình in hóa đơn tièn điện
B1 : Input :
Tên : cho người dùng nhập
Số kw đã sử dụng : ng dùng nhập
B2 Handle:
Tạo hàm tinhTienDien (soKw)
<> 50kw đầu (<=50): 500d / kw  = soKw * 500


<> 51 - 100 kw(>50 và <=100) : 650d / kw = (soKw - 50) * 650 + (50*500)


<> 101 - 200 kw (>100 và <= 200) : 850d / kw = (soKw - 100) * 850 + 50 * 650 + 50 * 500

<> 201 - 350 kw (>200 và <= 350): 1100d /kw = (soKw - 200) * 1100 + 100* 850 + 50 *650 + 50*500


<> >350kw :1300d /kw   = (soKw - 350)*1300 + 350 * 1100 + 100* 850 + 50 *650 + 50*500

Tạo hàm hóa đơn 
Dom tới các giá trị cần : hoVaTen, soKw
Xét các điều kiện lỗi : soKw<0
 else{
     tongHoaDon = tinhTienDien (soKw)
 }
B3 : Output
Xuất ra tổng tiền điện và họ tên người sử dụng

*/


//Tính tiền điện

var tinhTienDien = function(soKw){
    var tongTienDien = 0
    if (soKw <= 50){
        tongTienDien = soKw * 50;
    }
    else if (soKw > 50 && soKw <= 100){
        tongTienDien = (soKw - 50) * 650 + (50*500);
    }
    else if (soKw > 100 && soKw <= 200){
        tongTienDien = (soKw - 100) * 850 + 50 * 650 + 50 * 500;
    }
    else if (soKw > 200 && soKw <= 350){
        tongTienDien = (soKw - 200) * 1100 + 100* 850 + 50 *650 + 50*500;
    }
    else if (soKw > 350){
        tongTienDien = (soKw - 350)*1300 + 350 * 1100 + 100* 850 + 50 *650 + 50*500
    }

    return tongTienDien
}

var hoaDon = function() {
    var soKw = Number(getEle('soKw').value);
    var hoVaTen = getEle('hoVaTen').value
    var ketQuaB2 = getEle('ketQuaB2')
    var tongHoaDon = 0
    ketQuaB2.style.display = "block"
    if (soKw < 0){
        alert ('Hãy nhập giá trị lớn hơn 0')
    }
    else if(hoVaTen ==  Number(hoVaTen)){
        alert ('Vui lòng điền tên của bạn')
    }
    else{
        tongHoaDon = tinhTienDien (soKw)
        ketQuaB2.innerHTML = 'Họ và tên: ' + hoVaTen + '<div>Tổng hóa đơn cần phải trả: ' + tongHoaDon + '</div>'
    }
}

var btnTinhTien = getEle ('btnTinhTien')

btnTinhTien.addEventListener('click',hoaDon)


