import dayjs from 'dayjs'

export const billListData = {
  pay: [
    {
      type: 'foods',
      name: 'foods',
      list: [
        { type: 'food', name: 'food' },
        { type: 'drinks', name: 'drinks' },
        { type: 'dessert', name: 'dessert' },
      ],
    },
    {
      type: 'taxi',
      name: 'taxi',
      list: [
        { type: 'taxi', name: 'taxi' },
        { type: 'longdistance', name: 'longdistance' },
      ],
    },
    {
      type: 'recreation',
      name: 'recreation',
      list: [
        { type: 'bodybuilding', name: 'bodybuilding' },
        { type: 'game', name: 'game' },
        { type: 'audio', name: 'audio' },
        { type: 'travel', name: 'travel' },
      ],
    },
    {
      type: 'daily',
      name: '日常支出',
      list: [
        { type: 'clothes', name: '衣服裤子' },
        { type: 'bag', name: '鞋帽包包' },
        { type: 'book', name: '知识学习' },
        { type: 'promote', name: '能力提升' },
        { type: 'home', name: '家装布置' },
      ],
    },
    {
      type: 'other',
      name: '其他支出',
      list: [{ type: 'community', name: '社区缴费' }],
    },
  ],
  income: [
    {
      type: 'professional',
      name: '其他支出',
      list: [
        { type: 'salary', name: '工资' },
        { type: 'overtimepay', name: '加班' },
        { type: 'bonus', name: '奖金' },
      ],
    },
    {
      type: 'other',
      name: '其他收入',
      list: [
        { type: 'financial', name: '理财收入' },
        { type: 'cashgift', name: '礼金收入' },
      ],
    },
  ],
}