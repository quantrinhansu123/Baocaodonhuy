
import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { INDIVIDUAL_RANKING } from '../../services/mockData';

const IndividualView: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState('Sale');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Area A - Dropdown */}
      <div className="flex gap-4 items-end bg-white p-4 border rounded-xl shadow-sm">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-[10px] font-bold text-slate-500 uppercase">Chọn Bộ phận</label>
          <select 
            className="border text-xs p-2 rounded bg-slate-50 focus:ring-1 focus:ring-green-500"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            {['MKT', 'Sale', 'CSKH', 'Vận đơn', 'HCNS', 'R&D'].map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-[10px] font-bold text-slate-500 uppercase">Chọn Cá nhân</label>
          <select className="border text-xs p-2 rounded bg-slate-50 focus:ring-1 focus:ring-green-500">
            <option>Tất cả</option>
            {INDIVIDUAL_RANKING.map(p => <option key={p.id}>{p.name}</option>)}
          </select>
        </div>
        <button className="bg-[#50a050] text-white text-xs px-6 py-2 rounded font-bold hover:bg-green-700 transition h-fit self-end">LỌC DỮ LIỆU</button>
      </div>

      {/* Area B - Ranking */}
      <div className="bg-white p-6 border rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
             <span className="text-xl">🏆</span>
             <h3 className="font-bold text-green-900 uppercase tracking-tight">BXH DOANH SỐ - TEAM {selectedTeam.toUpperCase()}</h3>
          </div>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          {INDIVIDUAL_RANKING.map((person, index) => (
            <div key={person.id} className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-md ${index === 0 ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
              <div className={`text-2xl font-black italic w-10 ${index === 0 ? 'text-green-600' : index === 1 ? 'text-gray-400' : 'text-slate-400'}`}>
                #{index + 1}
              </div>
              <img src={person.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{person.name}</h4>
                <div className="flex gap-4 text-[10px] text-gray-500">
                  <span>Tỷ lệ chốt: <strong className="text-green-600">{person.rate}</strong></span>
                  <span>Số mess: <strong>{person.mess}</strong></span>
                  <span>Số đơn: <strong>{person.orders}</strong></span>
                </div>
              </div>
              <div className="w-48 bg-gray-200 rounded-full h-4 overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-700" style={{ width: `${90 - index * 10}%` }}></div>
                <span className="absolute inset-0 flex items-center justify-end px-2 text-[10px] font-bold text-white drop-shadow-sm">{person.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Area C - Tables */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-4 border rounded-xl shadow-sm overflow-x-auto">
           <h3 className="text-xs font-bold text-green-600 uppercase mb-4 border-l-4 border-green-600 pl-3">TĂNG TRƯỞNG CÁ NHÂN THEO KỲ</h3>
           <table className="w-full text-[11px] text-left border-collapse">
             <thead>
               <tr className="bg-slate-100 border-b">
                 <th className="p-3 border-r">Cá nhân</th>
                 <th className="p-3 border-r">Kỳ 1 (DT)</th>
                 <th className="p-3 border-r">Kỳ 2 (DT)</th>
                 <th className="p-3 border-r">Kỳ 3 (DT)</th>
                 <th className="p-3 border-r">Kỳ 4 (DT)</th>
                 <th className="p-3 font-bold text-green-700">Xu hướng %</th>
               </tr>
             </thead>
             <tbody className="divide-y">
               {INDIVIDUAL_RANKING.map(p => (
                 <tr key={p.id} className="hover:bg-slate-50">
                   <td className="p-3 border-r font-bold">{p.name}</td>
                   <td className="p-3 border-r">120 Tr</td>
                   <td className="p-3 border-r">145 Tr</td>
                   <td className="p-3 border-r">190 Tr</td>
                   <td className="p-3 border-r font-bold">{p.value}</td>
                   <td className="p-3 font-bold text-green-600">+15%</td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default IndividualView;
