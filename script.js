document.addEventListener('DOMContentLoaded', function() {
  // 예시 데이터를 테이블에 추가합니다
  const requests = [
    { name: '홍길동', equipment: '블랙매직 카메라', date: '2025-03-25', status: '대기중' },
    { name: '김철수', equipment: '어퍼쳐 조명', date: '2025-03-26', status: '대기중' }
  ];

  const tableBody = document.querySelector('#requests tbody');
  requests.forEach(request => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${request.name}</td>
      <td>${request.equipment}</td>
      <td>${request.date}</td>
      <td>${request.status}</td>
      <td>
        <button>승인</button>
        <button>반려</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
});
