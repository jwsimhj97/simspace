// HTML 파일을 가져와서 특정 요소에 삽입하는 함수
function includeHTML(elementId, filePath) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    // 비동기 방식으로 파일을 요청
    xhr.open("GET", filePath, true);
    xhr.send();
}

// 각 파일을 원하는 위치에 포함 (경로 확인 필수!)
includeHTML("header-container", "/simspace/html/common/header.html");
includeHTML("content-container", "/simspace/content.html");
includeHTML("footer-container", "/simspace/html/common/footer.html");