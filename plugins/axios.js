import cookie from 'cookie'

export default function ({ $axios, $cookies }) {
  $axios.onResponse(response => {
    (response.headers['set-cookie'] || []).forEach((cookieVal) => {
      let name = ''
      let val = ''
      const opts = {}
      const cookieToSet = cookie.parse(cookieVal)
      Object.entries(cookieToSet).forEach(([key, value], idx) => {
        if (!idx) {
          name = key
          val = value
        } else {
          opts[key] = value
        }
      })
      opts.path = '/'
      $cookies.set(name, val, opts)
    })
    if (response.data?.karma_countryCode) {
      $cookies.set('karma_countryCode', response.data?.karma_countryCode)
    }
  })
}
