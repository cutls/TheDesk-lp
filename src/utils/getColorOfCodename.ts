
const MAGIC_OF_CINDERELLA = '211232133112323331211212332213231232312131231123123123123123123123'
export const getColorOfCodename = (v: string) => {
    const [m] = v.split('.')
    const type = MAGIC_OF_CINDERELLA[parseInt(m, 10) - 1]
    if (type === '1') return 'pink'
    if (type === '2') return 'blue'
    if (type === '3') return 'yellow'
    return 'unknown'
}