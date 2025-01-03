        //     // Please multiply few number in array
        //     let sonuc=1 
        //     let carpma = [55, 65, 75, 85, 90]
        //     const carpim = (x) => {
             
        //         for( i=0; i < x.length; i++ )
        //         sonuc *= x[i]
        //         return sonuc
            
        //  } 
        //  console.log(carpim(carpma));



//*************************************************************************************** */
         // Please find first negative number index in array
          
        // const FirstNegativeNumber = (arr) => {

        //     for( let i = 0; i < arr.length; i++){
        //         if(arr[i] < 0 ){
        //             return i;
        //         }
        //     }
        // } 

        //     let number = [23, 43, 132, -73, 23, -95]
        //     console.log(FirstNegativeNumber(number));

//1. Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den 
//büyük olanları döndüren bir fonksiyon yazın.

// let sayilar = [-20, 3, 5, 19, -40, -90, 50]

// const big = sayilar.filter((x) => x > 0).map((x) => x**2).filter((x) => x > 50)
// console.log(big);

//2. Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.

// let sonuc=1 
// let carpma = [55, 65, 75, 85, 90]
// const carpim = (x) => {
 
//     for( i=0; i < x.length; i++ )
//     sonuc *= x[i]
//     return sonuc

// } 
// console.log(carpim(carpma));

// const multiply = [50, 60, 15, -16, 25, -85]
// const result = multiply.reduce((acc,item) => acc*item, 1) 
// console.log(result);

//3. Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.

// const FirstNegativeNumber = (arr) => {

//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] < 0 ){
//             return i;
//         }
//     }
// } 

//     let number = [23, 43, 132, -73, 23, -95]
//     console.log(FirstNegativeNumber(number));


//***************************************** */

//4. Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.

// const buyukHarf = ["recep", "musa", "emre", "sumeyye"]

// const UpperCase = buyukHarf.map((kelime) => kelime.toUpperCase())

// console.log(UpperCase);

//5. Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.

// const elli = [102, 200, 50, 40, -70, 60, 49]
// const result = elli.find((x) => x > 50)
// console.log(result);

/**************************************** */

//6. Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın

// let sayilar = [100, 2, 5, 50, 40, 35 ]

// let sonuc = sayilar.map((x) => x**2).filter((x) => x < 100)

// console.log(sonuc);

/**************************************** */

//7. Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın

// const oddOrEven = [40, 35, 75, 10, 23, 78]

// let sonuctwo = oddOrEven.map((x) => x%2==0)
// console.log(sonuctwo);

/**************************************** */

//8. Bir diziyi tersten oluşturmak için bir fonksiyon yazın.

// console.clear

// const reverseBir = [1, 2, 3, 4, 5, 6, 7]

// reverseBir.reverse()

// console.log(reverseBir);

// let sayilar=[-10, 3, 7, 2, -5, 8]
// let ters=[]
// for (let i =sayilar.length-1;i>=0;i--){
//   ters.push(sayilar[i])
  
// }
// console.log(ters);

/**************************************** */

//9. Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın

// let sayilar=[9, 3, 7, 2, -5, 20]

// const result = sayilar.find((x) => x%10==0)

// console.log(result);



//************************************** */

// const arr3 = [50, 65, 23, 38, 45, 75, 80]
// const ellidenKucukler = []
// const ellidenBuyukler = []

// for (let i = 0;  i < arr3.length; i++ ){
//     arr3[i] < 50 ? ellidenKucukler.push(arr3[i]) : ellidenBuyukler.push(arr3[i])
// }
// console.log(ellidenBuyukler);
// console.log(ellidenKucukler);

/**************************************** */

// 2. Yontem

// for(let i in arr3){
// console.log(arr3[i]);
// arr3[i] < 50 ? ellidenKucukler.push(arr3[i]) : ellidenBuyukler.push(arr3[i])
// }
// console.log(ellidenBuyukler);
// console.log(ellidenKucukler);

/**************************************** */

// const arr4 = [40000, 30000, 60000, 70000, 100000]
// let toplam=0;

// for(let i in arr4){
//     toplam += arr4[i]
// }
// console.log(toplam);
// const ortalama = toplam/arr4.length
// console.log(ortalama);

/**************************************** */

// arr4.forEach((x) => console.log(x))

// const arr5 = [16, 17, 18, 21, 25, 7, 8, 11]
// arr5.forEach((item)=> item>=18 ? console.log("Yetiskin") : console.log("Cocuk"))



//10. Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.

// const arr = ["Dilek", "Fatma", "Mujgan", "Gizem", "Ayse"]

// const result1= arr.reverse()
// console.log(arr);

/*********************************************************** */

//11. Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.

// const arr1 = [43, 23, 12, 24, 55, 56, 60]
// const result2 = arr1.filter((item) => item%2!==0)
// console.log(result2);

/*********************************************************** */

//12. Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın

// const newList = [2, 3, 5, 6, 7, 8, 3, 232, 2, 322, 43] 
// const newArray = newList.map((item, i) =>  console.log(`Number ${item}, index ${i}`))

/*********************************************************** */

//13.Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın
// const numbers = [10, 25, 5, 47, 9];

// function findMax(arr) {
      
//         return Math.max(...arr);
//     }
    
//     console.log(findMax(numbers));

//14.Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).

// const arr6 = [12, 11, 10, 15, 18, 17]
// let result = arr6.map((item) => item + 3 )
// console.log(result);

//15. Yapamadim

//16. Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon yazın

// const arr7 = [-1, -3, 4, 5, 6, 10, 20]

// const result= arr7.forEach((item) => item<0 ? console.log("Not all values positive") : null)

//17. Bir dizideki 4  karakterden uzun kelimeleri döndüren bir fonksiyon yazın.

// const arr8 = ["Selma", "Musa", "Selami", "Nur", "Ayse"]
// const result7= arr8.filter((item) => item.length>4)
// console.log(result7);

//18. Bir dizideki alt dizileri düz bir liste haline getiren bir fonksiyon yazın
// const arr9 = [232,[23],24,[26,27,42],28]
// const result10 = arr9.flat()
// console.log(result10);

//19! Yapamadim

//20. Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.
// let sum=0;
// const numbers = [12, 14, 15, 13, 22];
// const even = numbers.filter((number) => number%2===0);
//  for(number of even){
//         sum+=number;
//  }
// console.log(sum);


// 1. Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın
// const arr= [10, -11, -23, 40, 30, 70, 90];

// const big = arr.filter((x) => x > 0).map((x)=> x**2).filter((x)=>x>50)
// console.log(big);


const arr= [70, -21, -3, 40, 55, 80, 10];
const arrone = ["Selma", "Musa", "Selami", "Nur", "Ayse"]



// 2. Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.


// const carpim = arr.reduce((bric, item)=> bric*item,1)
// console.log(carpim);

// 3. Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.

// const negatif = arr.find((x)=> x<0)
// console.log(negatif);

// 4. Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.

// const upper = arrone.map((x)=>x.toUpperCase())
// console.log(upper);

// 5. Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.

// const buyuk = arr.filter((x)=> x > 50 )
// console.log(buyuk);

// 6. Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın
// const kare = arr.map((x) => x**2).filter((x) => x>100)
// console.log(kare);

// 7. Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın

// const sayilar = arr.every((x) => x%2===0)
// console.log(sayilar);

// 8. Bir diziyi tersten oluşturmak için bir fonksiyon yazın

// arr.reverse()
// console.log(arr);

// 9. Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın.

// const kati = arr.find((x)=> x%10===0)
// console.log(kati);

// 10. Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın

// arrone.reverse()
// console.log(arrone);

// 11. Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.

// const tek = arr.filter((x)=> x%2!==0)
// console.log(tek);

// 12. Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın

// const index = arr.map((item,i )=> console.log(`item=${item}`,`index=${i}` ))

// 13. Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.

// const buyuk = (arr) =>{

//         return Math.max(...arr)
// }
// console.log(buyuk(arr));

//14. Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).

// const arti = arr.map((x)=> x+3)
// console.log(arti);

// 15. Bir dizide ilk defa 10  olan elemanın indeksini döndüren bir fonksiyon yazın

// const ilk = (arr)=>{
//    return arr.indexOf(10)
// }
// console.log(ilk(arr));

// 16. Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon yazın

// const sayilar = arr.every((x) => x>0)
// console.log(sayilar);

// 17. Bir dizideki 4  karakterden uzun kelimeleri döndüren bir fonksiyon yazın.

// const arrtwo = arrone.filter((item)=> item.length>4)
// console.log(arrtwo) 

// 18. Bir dizideki alt dizileri düz bir liste haline getiren bir fonksiyon yazın.

// const arrFive = [3, [2, 1], [5]]
// const birlestir = arrFive.flat()
// console.log(birlestir)


// 19. Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon yazın

// function kelimeleriHarflerHalineGetir(dizi) {
//   return dizi.map((kelime) => kelime.split("")).flat(); // İç içe dizileri düzleştirir
// }

// const kelimeler = ["merhaba", "dünya", "javascript"];
// const harfler = kelimeleriHarflerHalineGetir(kelimeler);

// console.log(harfler);


// 20. Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.

// const arrthree = arr.filter((item, bric)=> item%2===0).reduce((item, bric)=> item+bric)
// console.log(arrthree)


