
import { SummaryCardData, ChartDataPoint } from '../types';

export const MOCK_SUMMARY_CARDS: SummaryCardData[] = [
  { title: 'TỔNG DT', value: '180 tỷ', trend: 'up', percentage: '+12%', avgValue: 'TB 3 tỷ' },
  { title: 'DT LUMORA', value: '106 tỷ', subValue: '(59%)', trend: 'up', percentage: '+15%', avgValue: 'TB 3 tỷ' },
  { title: 'ADS / DT', value: '30%', trend: 'down', percentage: '-2%', avgValue: 'TB 3 tỷ' },
  { title: 'LN / DT', value: '30%', trend: 'up', percentage: '+10%', avgValue: 'TB 3 tỷ' },
];

export const MOCK_KPI_SUMMARY: SummaryCardData[] = [
  { title: 'TIẾN ĐỘ DOANH THU', value: '85%', subValue: '(153/180 tỷ)', trend: 'up', percentage: 'On track', avgValue: 'Mục tiêu: 100%' },
  { title: 'TỈ LỆ CHỐT TB', value: '7.5%', subValue: '', trend: 'up', percentage: '+0.5%', avgValue: 'KPI: 8.0%' },
  { title: 'CHI PHÍ ADS', value: '54 tỷ', subValue: '', trend: 'down', percentage: '-5%', avgValue: 'Ngân sách: 60 tỷ' },
  { title: 'SỐ ĐƠN THÀNH CÔNG', value: '12,450', subValue: '', trend: 'up', percentage: '+12%', avgValue: 'KPI: 15,000' },
];

export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { month: 'T9', totalDT: 150, lumoraDT: 80, adsRatio: 28, lnRatio: 25 },
  { month: 'T10', totalDT: 165, lumoraDT: 95, adsRatio: 31, lnRatio: 28 },
  { month: 'T11', totalDT: 175, lumoraDT: 100, adsRatio: 30, lnRatio: 32 },
  { month: 'T12', totalDT: 180, lumoraDT: 106, adsRatio: 33, lnRatio: 30 },
];

export const KPI_PERFORMANCE_DATA = [
  { name: 'Tuần 1', actual: 40, target: 45 },
  { name: 'Tuần 2', actual: 55, target: 45 },
  { name: 'Tuần 3', actual: 48, target: 45 },
  { name: 'Tuần 4', actual: 60, target: 45 },
];

export const TEAM_PERFORMANCE = [
  { name: 'Sale ngày', data: [40, 30, 20, 15] },
  { name: 'Sale đêm', data: [10, 15, 12, 8] },
  { name: 'MKT', data: [80, 95, 45, 35] },
  { name: 'Vận đơn', data: [60, 75, 65, 55] },
  { name: 'CSKH', data: [55, 70, 15, 12] },
];

export const INDIVIDUAL_RANKING = [
  { id: 1, name: 'Trình-PT', team: 'TEAM SALE', value: '296 Tr', rate: '5.7%', mess: '1,036', orders: '59', avatar: 'https://picsum.photos/40/40?1' },
  { id: 2, name: 'Lệ-PT', team: 'TEAM SALE', value: '269 Tr', rate: '8.1%', mess: '679', orders: '55', avatar: 'https://picsum.photos/40/40?2' },
  { id: 3, name: 'Duyên-NM', team: 'TEAM SALE', value: '242 Tr', rate: '7.4%', mess: '706', orders: '52', avatar: 'https://picsum.photos/40/40?3' },
];
