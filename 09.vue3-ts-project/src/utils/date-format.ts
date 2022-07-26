import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc' // 导入UTC插件

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 格式化UTC时间
const formatUtcString = (
  utcString: string,
  format: string = DATE_TIME_FORMAT
) => {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

export { formatUtcString }
