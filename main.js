// 로그인 처리 함수
function handleLogin() {
  // 입력값 가져오기
  var userID = document.getElementById('userID').value // 아이디 상자에서 이름 가져와
  var password = document.getElementById('pw').value // 비밀번호 상자에서 비밀코드 가져와
  var saveSignedIn = document.getElementById('saveSignedIn').checked // "로그인 유지" 체크박스 눌렀는지 확인

  // 저장된 사용자 정보 가져오기: 비밀 상자에서 이름이 있는지 찾아봐
  var storedUser = localStorage.getItem('user_' + userID)

  if (storedUser) {
    // JSON으로 사용자 정보 읽기
    var user = JSON.parse(storedUser)
    if (user.password == password) {
      // 로그인 유지 체크
      if (saveSignedIn) {
        // 브라우저 꺼도 로그인 유지
        localStorage.setItem('loggedInUser', userID)
      } else {
        // 탭 닫으면 로그아웃
        sessionStorage.setItem('loggedInUser', userID)
      }
      alert('로그인 성공!')
      window.location.href = 'main.html'
    } else {
      alert('비밀번호가 틀렸습니다.')
    }
  } else {
    var signup = confirm('계정 정보가 없습니다. 회원가입 하시겠습니까?')
    if (signup) {
      window.location.href = 'signup.html'
    }
  }
}

// 회원가입 처리 함수
function handleSignup() {
  // 입력값 가져오기
  var userID = document.getElementById('userID').value
  var password = document.getElementById('pw').value

  // 이미 있는 아이디인지 확인
  if (localStorage.getItem('user_' + userID)) {
    alert('이미 있는 아이디입니다.')
    return
  }

  // 사용자 정보 JSON으로 저장: 새 이름과 비밀코드를 비밀 편지에 써
  var user = { userID: userID, password: password }
  localStorage.setItem('user_' + userID, JSON.stringify(user))
  alert('회원가입 성공!')
  window.location.href = 'index.html'
}
