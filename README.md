Jawaban Quiz 

1. setiap komponen dalam angular disalurkan melalui 8 fase berbeda dalam siklus hidupnya. tepatnya yaitu saat pertama kali 
diinisialisasi, dan kemudian root dibuat dan kemudian dijadikan ke komponen-komponen. itu selalu diperiksa setiap kali kompo-
nen dimuat selama pengembangan aplikasi dan diperbarui secara bertahap. ketika komponen tetap tidak digunakan, fase kematian
didekati dengan menghancurkan dan meneluarkannya dari DOM. sangat menarik untuk dicatat bahwa angular dapat mengawasi semua 
siklus hidup komponen dan arahannya dan dapat dengan cerdas memahami hasilnya dengan data sebelumnya, membuat integrasi aplikasi
menjadi lancar. Secara kolektif, komponen membuat blok bangunan utama dari versi, dan Direktif menyalurkan versi ini dengan build. 
Hal lain yang menarik tentang siklus hidup Angular adalah bahwa setiap komponen memiliki siklus hidupnya, dan pada setiap tahap, 
siklus hidup bergerak dari inisialisasi ke kehancuran. Setiap komponen melewati 8 tahap. Langkah-langkahnya dapat dijelaskan dalam poin-poin berikut.

2. ngOnIit dipanggil saat setelah angular menginisialisasi semua properti yang terikat data dari sebuah arahannya

3. ngAfterViewInit dipanggil saat setelah angular telah sepenuhnya mmenginisialisasi tampilan pada komponen. 
maka dari itu tentukan metode pada ngAfterViewInit() untuk menangani tugas inisialisasi tambahan 

4. ngOnCanges dipanggil saat properti terikat data dari direktif berubah, sehingga ngOnCanges akan menangani perubahan. 

5. urutan hooks lifecycle :
    a. ngOnChanges 
    b. ngOnInit
    c. ngDoCheck
    d. ngAfterContentInit
    e. ngAfterContentChecked
    f. ngAfterViewInit
    g. ngAfterViewChecked
