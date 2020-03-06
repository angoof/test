
// Chúng ta có 4 nhóm button
// NHÓM 1: SỐ (bao gồm phím . và +/-)
// NHÓM 2: PHÉP TÍNH ( + - * / %)
// NHÓM 3: XÓA ( < CE )
// NHÓM 4: =

// Chúng ta có 2 phím đặc biệt: % =

/********** Qui ước cách thao tác ***********/
/*
|||||	QUI ƯỚC NHẬP PHÉP TÍNH	: Khi bấm + mà ngay sao đó bấm - thì tính là -
|||||	QUI ƯỚC VỀ 				: Khi bấm % thì trước đó phải là phép tính dạng a/b ngược lại là 0
|||||	QUI ƯỚC ƯU TIÊN			: 1 (nhân - chia) 2 (cộng - trừ) : 5 + 6 * 2 = 5 + 12 = 17
|||||	QUI ƯỚC CÙNG ƯU TIÊN	: ưu tiên bên trái sang phải : 5 + 6 - 7 =  11 - 7 = 4						   
|||||			
*/

/* 
	NHẬP:	1 + 15 * 2 + 6 / 3 + 2 * 2

	MẢNG SỐ	:				MẢNG PT	:
				0 = 1					0 = +
				1 = 15					1 = *
				2 = 2					2 = +
				3 = 6					3 = /
				4 = 3					4 = +
				5 = 2					5 = *
				6 = 2
	-----------------------------------------
	1 + 15 * 2 + 6 / 3 + 2 * 2
	1 +   30   +   2   +   4
	   31      +   2   +   4   
	            33     +   4
					   37  
				

*/

// Object kết quả
var ketqua = document.getElementById('ketqua');
	
// Đổi dấu
var doi_dau = false;

// Vừa bấm phép tính?
var doi_phep_tinh = false;

// Số phép tính ưu tiên tìm thấy
var uu_tien = 0;

// Mảng ghi nhớ các số hạng
var mang_so_index = 0;
var mang_so = new Array();

// Mảng ghi nhớ phép tính
var mang_pt_index = 0;
var mang_pt = new Array();

// Nội dung đang có
var str_ketqua = '';

// Phím mới
var phim_moi = '';

/**************************/
// CÀI ĐẶT SỰ KIỆN
/**************************/

function ClickButton(obj){
	
	// Chuỗi hiện tại của kết quả
	if(str_ketqua=='' && phim_moi == ''){
		str_ketqua = ketqua.value;
	}
	if(str_ketqua=='0'){
		str_ketqua = '';
	}
	
	// HTML của phím bấm
	var type = obj.innerHTML;
	
	// NHÓM SỐ
	if(	type=='0' ||
		type=='1' ||
		type=='2' ||
		type=='3' ||
		type=='4' ||
		type=='5' ||
		type=='6' ||
		type=='7' ||
		type=='8' ||
		type=='9' ||
		type=='+/-' ||
		type=='.')
	{
		doi_phep_tinh = false;
		// đổi dấu
		if(type=='+/-'){
			// Đổi từ - thành +
			if(doi_dau){
				doi_dau = false;
				phim_moi = phim_moi.substring(1);
			}
			// Đổi từ + thành -
			else
			{
				doi_dau = true;			
				phim_moi = '-' + phim_moi;
			}
		}
		// Số
		else
		{
			phim_moi += type;
		}
		// Thay đổi hiển thị
		ketqua.value = str_ketqua + phim_moi;
	}
	// NHÓM PHÉP TÍNH ( + - * / )
	else if(
		type=='+' ||
		type=='-' ||
		type=='x' ||
		type=='/'
	)
	{
		// Trước đó có bấm 1 phép tính
		if(doi_phep_tinh){
			mang_pt[mang_pt_index-1] = type;
			// Xử lý hiển thị
			ketqua.value = ketqua.value.substring(0,ketqua.value.length-1) + type;
		}
		// Chưa có bấm phép tính
		else{
			mang_so[mang_so_index] = parseFloat(phim_moi);		
			mang_so_index++;						
			mang_pt[mang_pt_index] = type;		
			mang_pt_index++;
			// Xử lý hiển thị
			ketqua.value = ketqua.value + type;
		}
		// Ghi nhớ đã bấm phím phép tính
		doi_phep_tinh = true;
		// Đổi giá trị 2 chuỗi cơ bản về rỗng
		str_ketqua = '';
		phim_moi = '';
	}
	// NHÓM TÍNH KẾT QUẢ
	else if(type == '=' || type == '%')
