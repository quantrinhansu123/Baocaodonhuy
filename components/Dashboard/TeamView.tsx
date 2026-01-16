
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, AreaChart, Area } from 'recharts';
import { TEAM_PERFORMANCE, MOCK_CHART_DATA } from '../../services/mockData';

const TeamView: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState('MKT');

  const chartData = [
    { name: 'Sale ngày', t9: 40, t10: 30, t11: 20, t12: 15 },
    { name: 'Sale đêm', t9: 10, t10: 15, t11: 12, t12: 8 },
    { name: 'MKT', t9: 80, t10: 95, t11: 45, t12: 35 },
    { name: 'Vận đơn', t9: 60, t10: 75, t11: 65, t12: 55 },
    { name: 'CSKH', t9: 55, t10: 70, t11: 15, t12: 12 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Area A - All Teams Chart */}
      <div className="bg-white p-6 border rounded-xl shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 mb-6 border-l-4 border-green-500 pl-3 uppercase">SO SÁNH DOANH THU CÁC TEAM TRONG 4 KỲ</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{fontSize: 10}} />
              <YAxis tick={{fontSize: 10}} />
              <Tooltip cursor={{fill: '#f8fafc'}} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: 10}} />
              <Bar dataKey="t9" name="Tháng 9" fill="#a5d6a7" radius={[4, 4, 0, 0]} />
              <Bar dataKey="t10" name="Tháng 10" fill="#66bb6a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="t11" name="Tháng 11" fill="#388e3c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="t12" name="Tháng 12" fill="#1b5e20" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area B - Team Selector & Drill-down */}
      <div className="bg-white p-6 border rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-slate-800 uppercase">TĂNG TRƯỞNG ĐẶC THÙ: {selectedTeam}</h3>
          <select 
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="border text-xs rounded-lg px-3 py-1.5 bg-slate-50 focus:ring-1 focus:ring-green-500 outline-none"
          >
            {['MKT', 'Sale', 'CSKH', 'Vận đơn', 'HCNS', 'R&D'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 border rounded-lg p-4 bg-slate-50">
            <p className="text-[10px] font-bold text-gray-500 mb-4 uppercase">{selectedTeam} - Biểu đồ Doanh Thu & Ads</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <XAxis dataKey="month" hide />
                <Tooltip />
                <Area type="monotone" dataKey="totalDT" stroke="#50a050" fill="#50a05033" name="DT" />
                <Area type="monotone" dataKey="adsRatio" stroke="#10b981" fill="#10b98133" name="Ads/DT" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="h-64 border rounded-lg p-4 bg-slate-50">
            <p className="text-[10px] font-bold text-gray-500 mb-4 uppercase">{selectedTeam} - Biểu đồ Hiệu Suất</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_CHART_DATA}>
                <XAxis dataKey="month" hide />
                <Tooltip />
                <Line type="stepAfter" dataKey="lnRatio" stroke="#2e7d32" strokeWidth={3} name="Hiệu suất %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamView;
