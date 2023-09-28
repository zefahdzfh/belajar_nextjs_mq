"use client"

import Button from "../component/button"
import { useState, useEffect } from "react";



const Pts2023 = () => {
    const [displayedNumber, setDisplayedNumber] = useState('');
    const [previewAnswer, setPreviewAnswer] = useState<string | null>(null);


    const handleButtonClick = (title: string) => {
        if (title === 'C') {
          // Jika tombol C ditekan, reset tampilan
          setDisplayedNumber('');
          setPreviewAnswer(null);
        } else if (title === 'DEL') {
          // Jika tombol DEL ditekan, hapus satu karakter dari displayed number
          setDisplayedNumber((prevNumber) => prevNumber.slice(0, -1));
          // Perbarui preview jawaban sesuai dengan displayed number yang baru
          try {
            if (displayedNumber.endsWith('+') || displayedNumber.endsWith('-') || displayedNumber.endsWith('*') || displayedNumber.endsWith('/')) {
              // Jika diakhiri dengan operator, evaluasi ekspresi tanpa operator terakhir
              setPreviewAnswer(eval(displayedNumber.slice(0, -1)));
            } else {
              setPreviewAnswer(eval(displayedNumber));
            }
          } catch (error) {
            setPreviewAnswer('Error');
          }
        } else if (title === '=') {
          try {
            // Evaluasi ekspresi dan tampilkan hasil sebagai preview jawaban
            setPreviewAnswer(eval(displayedNumber));
            // Kosongkan displayed number setelah menekan "="
            setDisplayedNumber('');
          } catch (error) {
            setPreviewAnswer('Error');
          }
        } else if (title === '+') {
          // Jika tombol + ditekan, hitung preview jawaban hingga saat ini
          try {
            setPreviewAnswer(eval(displayedNumber));
            setDisplayedNumber(displayedNumber + '+');
          } catch (error) {
            setPreviewAnswer('Error');
          }
        } else if (title === 'X') {
          // Jika tombol X ditekan, tambahkan tanda perkalian ke tampilan
          setDisplayedNumber(displayedNumber + '*');
          setPreviewAnswer(null);
        } else if (title === '/') {
          // Jika tombol / ditekan, tambahkan tanda pembagian ke tampilan
          setDisplayedNumber(displayedNumber + '/');
          setPreviewAnswer(null);
        } else if (title === '-') {
          // Jika tombol - ditekan, tambahkan tanda pengurangan ke tampilan
          setDisplayedNumber(displayedNumber + '-');
          setPreviewAnswer(null);
        } else {
          // Jika angka atau operator lain ditekan, tambahkan ke tampilan
          setDisplayedNumber(displayedNumber + title);
          // Perbarui preview jawaban seiring penambahan angka atau operator baru
          try {
            setPreviewAnswer(eval(displayedNumber + title));
          } catch (error) {
            setPreviewAnswer('Error');
          }
        }
      
        // Hapus preview number jika displayed number kosong
        if (displayedNumber === '') {
          setPreviewAnswer(null);
        }
      };
      
    return (

        <main className="flex items-center justify-center h-screen">
            <div className="m-10 w-[550px] h-[700px] p-5 bg-gray-700 flex flex-col rounded-xl">
                <div className="w-full text-center">
                    <p className="text-base font-semibold text-white">Calculator by <span className="italic">Next JS</span> </p>
                    <p className="text-sm text-white">Hudzaifah Ibnu Puase</p>
                </div>
                <div className="mt-5 w-full bg-white h-[120px] rounded-lg">
                    <div className="p-5 flex justify-between">
                        <span className="text-2xl">{displayedNumber}</span>
                        <div className="mt-10">
                        {previewAnswer !== null && <span className="text-4xl font-semibold">{previewAnswer}</span>}
                        </div>
                        
                    </div>
                    
                </div>
                <div className="grid grid-cols-4 mt-5">
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="7" onClick={() => handleButtonClick('7')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="8" onClick={() => handleButtonClick('8')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="9" onClick={() => handleButtonClick('9')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Red" variant="solid" title="DEL" onClick={() => handleButtonClick('DEL')}/> </div>

                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="4" onClick={() => handleButtonClick('4')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="5" onClick={() => handleButtonClick('5')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="6" onClick={() => handleButtonClick('6')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Blue" variant="solid" title="+" onClick={() => handleButtonClick('+')}/> </div>

                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="1" onClick={() => handleButtonClick('1')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="2" onClick={() => handleButtonClick('2')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Gray" variant="solid" title="3" onClick={() => handleButtonClick('3')}/> </div>
                    <div className="flex text-xl justify-center my-2"> <Button colorSchema="Blue" variant="solid" title="-" onClick={() => handleButtonClick('-')} /> </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex text-xl justify-center my-1 row-span-2"><Button colorSchema="RedLong" variant="solid" title="C" onClick={() => handleButtonClick('C')}/></div>
                    <div className="flex text-xl justify-center my-1"> <Button colorSchema="Gray" variant="solid" title="0" onClick={() => handleButtonClick('0')}/> </div>
                    <div className="flex text-xl justify-center my-1"> <Button colorSchema="Blue" variant="solid" title="X" onClick={() => handleButtonClick('X')}/> </div>
                    <div className="flex text-xl justify-center my-1"> <Button colorSchema="Blue" variant="solid" title="/" onClick={() => handleButtonClick('/')}/> </div>

                    <div className="flex text-xl justify-center my-1"> <Button colorSchema="Yellow" variant="solid" title=","/> </div>
                    <div className="flex text-xl justify-center my-1 col-span-2"> <Button colorSchema="BlueLong" variant="solid" title="=" onClick={() => handleButtonClick('=')}/> </div>
                </div>


                
            </div>
        </main>
    );
};


export default Pts2023;