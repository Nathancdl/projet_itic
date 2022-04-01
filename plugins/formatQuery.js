export default function({ req, $cookies }, inject) {
  const getCookie = (val) => {
    if (req?.headers?.cookie) {
      const cookieString = req.headers.cookie
        .split(";")
        .find((cookieString) => cookieString.includes(`${val}=`));
      return cookieString?.split("=")[1];
    }
    // if client
    if (process.client) {
      return $cookies.get(val);
    }
  };

  inject("formatQuery", (research, freshness, count = 10, offset = 0) => {
    let constructedQuery = `query=${research}&count=${count}&offset=${offset}`;
    if (
      getCookie("karma_countryCode") &&
      getCookie("karma_countryCode") !== "null"
    )
      constructedQuery += "&country=" + getCookie("karma_countryCode");
    if (freshness && freshness !== "null" && freshness !== "any")
      constructedQuery += "&freshness=" + freshness;
    return encodeURI(constructedQuery);
  });
}
