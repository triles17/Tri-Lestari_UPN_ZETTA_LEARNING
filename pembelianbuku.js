function HargaPembelianBuku (buku, potonganharga, pajak){
    let result= 0;
    if (buku && buku.harga){
        const harga=buku.harga;
        const potonganhargaAmount=harga*(potonganharga/100);
        const hargaAfterPotonganHarga= harga - potonganhargaAmount;
        const pajakAmount= hargaAfterPotonganHarga *(pajak/100);
        const hargaAfterPajak= hargaAfterPotonganHarga+pajakAmount;
        

        console.group();
        console.log("Judul Buku: ", buku.judul);
        console.log("Harga Buku: ",harga);
        console.log("Persentase Potongan Harga: ",potonganharga,"%");
        console.log("Biaya setelah Potongan Harga: ", hargaAfterPotonganHarga);
        console.log("Persentase Pajak : ", pajakAmount,"%");
        console.log("Total Pembayaran : ",hargaAfterPajak);
        console.groupEnd();
    }

    return 0;
}

HargaPembelianBuku({judul: "Rembulan Tenggelam Di Wajahmu", harga: 99000, status: true},35,5);

