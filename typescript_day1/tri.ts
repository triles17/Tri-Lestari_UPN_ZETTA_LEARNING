function Slicer(text: string, first_index: number, last_index: number): string {
    var hasil = "";
    for (var i = first_index; i < last_index; i++) {
        hasil += text[i];
    }
    return hasil;
}
console.log(Slicer("Learning Typescript is different than Javascript", 9, 19));