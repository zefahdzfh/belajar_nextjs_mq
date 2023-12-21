// import React, { useEffect, useRef, useState } from "react";

// interface Item {
//   dishItem: any;
//   isDisabled?: boolean;
// }

// const DishDetailModal: React.FC<Item> = ({ dishItem, isDisabled }) => {
//   const [currentStock, setCurrentStock] = useState<number>(dishItem.jumlah);
//   const [defult, setDefult] = useState<number>(0);
//   const [isModalVisible, setModalVisible] = useState<boolean>(true);

//   const incrementStock = () => {
//     setCurrentStock((prevStock) => (prevStock > 0 ? prevStock - 1 : 0));
//     setDefult((setDefult) => setDefult + 1);
//   };

//   const decrementStock = () => {
//     setCurrentStock((prevStock) => prevStock + 1);
//     setDefult((setDefult) => (setDefult > 0 ? setDefult - 1 : 0));
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };
//   return (
//     <>
//       {isModalVisible && (
//         <div className="fixed top-0 flex justify-center items-center bg-black/20 backdrop-blur- h-screen overflow-hidden w-full left-0 right-0 bottom-0 z-50 ">
//           <div className="bg-white  space-y-2 p-8 top w-[689px] rounded-2xl shadow-2xl drop-shadow-2xl">
//             <button onClick={closeModal}>X</button>
//             <picture>
//               <img
//                 src={dishItem.image}
//                 alt=""
//                 className="w-full  h-[264px] rounded-2xl object-cover"
//               />
//             </picture>
//             <span className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold">{dishItem.name}</h1>
//               <h2 className="font-medium text-3xl">Rp {dishItem.harga}</h2>
//             </span>
//             <div className="flex space-x-3 items-center">
//               <div className="border-[2px] rounded-full px-2 border-[#D9D9D966]">
//                 {dishItem.waktu}
//               </div>
//               <div className="border-[2px] flex items-center gap-3 rounded-full px-2 border-[#D9D9D966]">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="15"
//                   height="19"
//                   viewBox="0 0 30 29"
//                   fill="none"
//                 >
//                   <path
//                     d="M15 20.085L9.36 23.49L10.845 17.07L5.865 12.75L12.435 12.195L15 6.135L17.565 12.195L24.135 12.75L19.155 17.07L20.64 23.49L15 20.085ZM30 10.86L19.215 9.945L15 0L10.785 9.945L0 10.86L8.175 17.955L5.73 28.5L15 22.905L24.27 28.5L21.81 17.955L30 10.86Z"
//                     fill="#414141"
//                   />
//                 </svg>
//                 {dishItem.rating}
//               </div>
//               <svg
//                 width="25"
//                 height="20"
//                 viewBox="0 0 35 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M17.5 29.697L14.9625 27.5607C5.95 20.003 0 15.0022 0 8.901C0 3.90026 4.235 0 9.625 0C12.67 0 15.5925 1.31087 17.5 3.3662C19.4075 1.31087 22.33 0 25.375 0C30.765 0 35 3.90026 35 8.901C35 15.0022 29.05 20.003 20.0375 27.5607L17.5 29.697Z"
//                   fill="#FF3F3F"
//                 />
//               </svg>
//             </div>
//             <p className="text-justify">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
//               sapiente consequatur et excepturi fugit amet ducimus quasi ex
//               tempora reprehenderit, error suscipit recusandae perferendis,
//               quaerat, quo aspernatur. Aliquam, a suscipit.
//             </p>

//             <div className="flex justify-between">
//               <div className="flex space-x-4 items-center">
//                 <h3>Stock: {currentStock}</h3>
//                 <div className="flex rounded-2xl gap-4 w-32 items-center p-2 bg-[#F9F2E8]">
//                   <button
//                     onClick={decrementStock}
//                     disabled={defult <= 0}
//                     className={`h-8 flex justify-center items-center w-10 rounded-2xl ${
//                       defult <= 0
//                         ? "bg-white/40 cursor-not-allowed "
//                         : "bg-white cursor-default"
//                     }`}
//                   >
//                     <svg
//                       width="25"
//                       height="3"
//                       viewBox="0 0 25 4"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M25 3.57143H0V0H25V3.57143Z"
//                         fill="#414141"
//                         fill-opacity="0.25"
//                       />
//                     </svg>
//                   </button>
//                   {defult}
//                   <button
//                     onClick={incrementStock}
//                     className="bg-white h-8 flex justify-center items-center  w-10 rounded-2xl"
//                   >
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 25 25"
//                       fill="none"
//                       className="scale-90"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M25 14.2857H14.2857V25H10.7143V14.2857H0V10.7143H10.7143V0H14.2857V10.7143H25V14.2857Z"
//                         fill="#414141"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <button
//                 disabled={defult <= 0}
//                 className={`w-[200px] justify-center gap-2 h-auto flex  rounded-2xl items-center ${
//                   defult <= 0 ? "bg-primary-yellow/25" : "bg-primary-yellow"
//                 }`}
//               >
//                 <svg
//                   width="30"
//                   height="30"
//                   viewBox="0 0 30 30"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M24 24C22.335 24 21 25.335 21 27C21 27.7956 21.3161 28.5587 21.8787 29.1213C22.4413 29.6839 23.2044 30 24 30C24.7956 30 25.5587 29.6839 26.1213 29.1213C26.6839 28.5587 27 27.7956 27 27C27 26.2044 26.6839 25.4413 26.1213 24.8787C25.5587 24.3161 24.7956 24 24 24ZM0 0V3H3L8.4 14.385L6.36 18.06C6.135 18.48 6 18.975 6 19.5C6 20.2956 6.31607 21.0587 6.87868 21.6213C7.44129 22.1839 8.20435 22.5 9 22.5H27V19.5H9.63C9.53054 19.5 9.43516 19.4605 9.36483 19.3902C9.29451 19.3198 9.255 19.2245 9.255 19.125C9.255 19.05 9.27 18.99 9.3 18.945L10.65 16.5H21.825C22.95 16.5 23.94 15.87 24.45 14.955L29.82 5.25C29.925 5.01 30 4.755 30 4.5C30 4.10218 29.842 3.72064 29.5607 3.43934C29.2794 3.15804 28.8978 3 28.5 3H6.315L4.905 0H0ZM9 24C7.335 24 6 25.335 6 27C6 27.7956 6.31607 28.5587 6.87868 29.1213C7.44129 29.6839 8.20435 30 9 30C9.79565 30 10.5587 29.6839 11.1213 29.1213C11.6839 28.5587 12 27.7956 12 27C12 26.2044 11.6839 25.4413 11.1213 24.8787C10.5587 24.3161 9.79565 24 9 24Z"
//                     fill="#414141"
//                   />
//                 </svg>
//                 <h1>Tambah Pesanan</h1>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DishDetailModal;
