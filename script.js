// Thay đổi nội dung búc thư ở đây
var letterContent ="Chào mừng đến với thế giới trong tui, Mặt Trời Nhỏ. Có đôi lời tui muốn gửi tới Hằng. Rằng từ cái nhìn đầu tiên hình ảnh của bạn đã in sâu trong tâm trí. Hình ảnh một cô gái ngồi trên ghế tươi cười rạng rỡ, như một mặt trời chiếu sáng đêm đen trong tui. Ban đầu tui cho rằng chỉ là cảm xúc bồng bột. Lâu dần, tui nhận ra rằng những cảm xúc ban đầu dành cho bạn khong đơn thuần là bồng bột nữa mà là tình cảm thực sự. Tui thích được ở bên bạn, dù chưa được nhiều lần nhưng mỗi lần ở bên cạnh bạn đều rất vui. Tui thích được trò chuyện và chia sẻ mọi điều với bạn. Hôm nay tui nhờ bạn ''bồ câu đưa thư'' muốn gửi tới bạn:'Mong rằng sau này có thể được nắm tay bạn cùng tiến về con đường phía trước. Cho tui cơ hội được làm người yêu của bạn nhé! "

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})