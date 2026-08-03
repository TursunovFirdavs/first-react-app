import React from 'react';

const Sidebar = () => {
  // "To'langan" (Оплачено)
  const paidTransactions = Array(6).fill({
    name: "James Bond",
    amount: "$9.999.999",
    date: "08.03.2024"
  });

  // "Qolgan" (Осталось)
  const remainingTransactions = Array(3).fill({
    name: "James Bond",
    amount: "$9.999.999",
    date: "08.03.2024"
  });

  return (
    <div 
  className="bg-white h-[670px] w-[450px] text-gray-900 p-5 flex flex-col gap-4 border border-gray-200 overflow-y-auto shadow-sm"
  style={{ fontFamily: 'var(--Montserrat-serif)' }}
>
      
   
      <div className="flex justify-end items-center border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-[22px] font-medium text-black">Jack Bond</span>
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs"></div>
        </div>
      </div>

      {/* блок tolangan */}
      <div>
        <h3 className="text-xs font-bold text-gray-400 mb-2 px-1">To'langan</h3>
        <div className="flex flex-col gap-2">
          {paidTransactions.map((item, index) => (
            <div key={index} className="bg-sky-100 rounded-xl p-3 flex justify-between items-center border border-sky-200/50">
              <div className="font-semibold text-gray-800 text-6">{item.name}</div>
              <div className="text-right">
                <div className="font-bold text-black text-3">{item.amount}</div>
                <div className="text-[10px] text-black">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* блок qolllgan */}
      <div>
        <h3 className="text-xs font-bold text-gray-400 mb-2 px-1">Qolgan</h3>
        <div className="flex flex-col gap-2">
          {remainingTransactions.map((item, index) => (
            <div key={index} className="bg-sky-100 rounded-xl p-3 flex justify-between items-center border border-sky-200/50">
              <div className="font-semibold text-gray-800 text-6">{item.name}</div>
              <div className="text-right">
                <div className="font-bold text-black text-3">{item.amount}</div>
                <div className="text-[10px] text-black">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
