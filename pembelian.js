function pembelianbuku (buku, potonganharga,pajak,stock,order, kredit){
    let totalHargapembayaran = 0;
    const harga=buku.harga;
    const totalpotonganharga= harga*(potonganharga/100);
    const hargaAfterpotonganharga = harga- totalpotonganharga;
    const jumlahpajak = hargaAfterpotonganharga * (pajak/100);
    const hargaAfterpajak= hargaAfterpotonganharga + jumlahpajak;
    let totalhargabuku = 0;
    let totalhargaAfterpotonganharga = 0;
    let totalpajak=0;

    for(let index = 0; index < order; index++){
        if(buku && buku.harga && index < stock){
            totalhargaAfterpotonganharga += hargaAfterpotonganharga;
            totalhargabuku += buku.harga;
            totalpajak += jumlahpajak;
        }else{
            console.log("stock habis mohon maaf");
            break;
        }
    }
    totalHargapembayaran = totalhargaAfterpotonganharga + totalpajak;
    if (buku && buku.harga && order <= stock){
        console.group();
        console.log("Judul Buku:", buku.judul);
        console.log("Harga Satuan: ", harga);
        console.log("Jumlah Yang di beli : ", order);
        console.log("Total Harga semuanya : ",totalhargabuku);
        console.log("Persentase diskon: ", potonganharga, "%");
        console.log("Biaya Setelah Diskon: ", hargaAfterpotonganharga);
        console.log("Persentasi Pajak : ",pajak, "%");
        console.log("Biaya Pajak: ",totalpajak);
        console.log("Total Pembayaran : ", totalHargapembayaran );
        // console.log("");
        console.log("Sisa Stock Buku :", stock-order);
        if (stock - order === 0) {
        console.log(" stock habis, silahkan datang setelah stock ready");
        }else {
            console.log("stock masih tersedia silahkan membeli");
        }
        console.log("");
        console.log("cicilan anda : ", kredit, "kali");
        console.groupEnd();
    }

    let kreditPerBulan = totalPembayaran / kredit;
    let pembayaranKredit = [];
    let i=0;

    while (i < kredit) {
        pembayaranKredit.push({
            cicilan : i+1,
            pembayaran: kreditPerBulan,
        });
        i++;
    }
    console.log(array.from(pembayaranKredit));
    return totalPembayaran;   
}

  pembelianbuku({judul: "Senja", harga: 99000}, 50,10,10,9,16);





