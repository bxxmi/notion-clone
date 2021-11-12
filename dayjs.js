import dayjs from 'dayjs'

const iso = dayjs(dayjs('2021-11-12 20:00:00').format('YYYY-MM-DD HH:mm:ss')).toISOString()
console.log(iso)

const formatted = dayjs('2021-11-12T11:00:00.000Z').format('YYYY년 MM월 DD일 HH시 mm분 ss초')
console.log(formatted)

// 시간 비교 (Boolean)
// .isBefore('시간'): 현재 시간이 '시간' 전 입니까?
console.log(dayjs().isBefore('2021-11-12T11:00:00.000Z'))
// .isAfter('시간'): 현재 시간이 '시간' 후 입니까?
console.log(dayjs().isAfter('2021-11-12T11:00:00.000Z'))
