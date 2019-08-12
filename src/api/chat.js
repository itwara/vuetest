import apiGenerator from '@/libs/http'

export function getXXX (ryIds) {
  return apiGenerator({
    context: this,
    url: 'base',
    type: 'get',
    params: {
      ryIds
    }
  })
}
