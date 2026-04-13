/* providing accessToken in bearer */
fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzYxMDk2NzIsImV4cCI6MTc3NjExMTQ3Mn0.lrs_smhkiBfwXZf86ZwD5xPGbhNDB_-DfFIeb0gVgQo', // Pass JWT via Authorization header
  }, 
  credentials: 'include' // Include cookies (e.g., accessToken) in the request
})
.then(res => res.json())
.then(console.log);