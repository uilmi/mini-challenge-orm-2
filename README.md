# Mini Challenge 6 Part 2 - Mengirim form untuk melakukan update & delete data

This app is connected to postgres DB on dev mode:

     "database": "ulul_db",
     "host": "sql.madecanggih.dev"

GET /users/delete/:id akan menghapus data user dengan id tertentu dari tabel.
GET /users/update/:id akan menampilkan form ejs yang otomatis berisi data user yang memiliki id tertentu.
POST /users/update/:id akan memperbarui data user dengan id tertentu.
(extra) GET /users akan menunjukkan semua data user dan password.
(extra) POST /users/create akan membuat user baru dan GET untuk render halaman /users/create.
(extra) GET /users/:id akan menunjukkan data user dengan id tertentu.
