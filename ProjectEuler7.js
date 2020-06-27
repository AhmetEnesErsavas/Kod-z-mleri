const onbinbirinciasal = (sayi) => { //değişkenimizi tanımladık
    let asal = [2];  //değişkenimizi sonradan değiştirmek için let fonksiyonu kullandık
    for(let i = 3; asal.length <= sayi; i+= 2) { 
      if(asal.every(v => i % v !== 0)) {
        asal.push(i); //döngümüzü kurduk şartımız 3 sayısından sonra sayılar ikişer ikişer artarak devam edecek ve bölümden kalan hiçbir zaman 0’a eşit olmayacak
        if(asal.length === sayi) return i; 
      }
    }
  }
  onbinbirinciasal(10001); //sonucu çağırdık
  