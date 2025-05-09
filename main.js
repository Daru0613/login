// 로그인 처리 함수
function handleLogin() {
  // 입력값 가져오기
  var userID = document.getElementById('userID').value
  var password = document.getElementById('pw').value
  var saveSignedIn = document.getElementById('saveSignedIn').checked

  // 저장된 사용자 정보 가져오기
  var storedUser = localStorage.getItem('user_' + userID)

  if (storedUser) {
    // JSON으로 사용자 정보 읽기
    var user = JSON.parse(storedUser)
    // 비밀번호 맞는지 확인
    if (user.password == password) {
      // 로그인 유지 체크
      if (saveSignedIn) {
        // 브라우저 꺼도 로그인 유지
        localStorage.setItem('loggedInUser', userID)
      } else {
        // 탭 닫으면 로그아웃
        sessionStorage.setItem('loggedInUser', userID)
      }
      // 로그인 성공
      alert('로그인 성공!')
      window.location.href = 'main.html'
    } else {
      // 비밀번호 틀림
      alert('비밀번호가 틀렸습니다.')
    }
  } else {
    // 디버깅: 계정 없음 확인
    console.log('계정 없음, confirm 창 표시')
    // 계정 없음
    var signup = confirm('계정 정보가 없습니다. 회원가입 하시겠습니까?')
    console.log('Confirm 결과:', signup)
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

  // 디버깅: 입력값 확인
  console.log('회원가입 아이디:', userID, '비밀번호:', password)

  // 이미 있는 아이디인지 확인
  if (localStorage.getItem('user_' + userID)) {
    alert('이미 있는 아이디입니다.')
    return
  }

  // 사용자 정보 JSON으로 저장
  var user = { userID: userID, password: password }
  localStorage.setItem('user_' + userID, JSON.stringify(user))
  // 회원가입 성공
  alert('회원가입 성공!')
  window.location.href = 'index.html'
}
