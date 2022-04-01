import moment from "moment";

export const formatDateFromNow = (date, lang = 'en') => {
  try {
    return moment(date).locale(lang).fromNow();
  } catch (e) {
    return false
  }
}

export const format = (date, lang = 'en') => {
  try {
    return moment(date).locale(lang).format('LL');
  } catch (e) {
    return false
  }
}

export const formatDurationISO = (time) => {
  try {
    return time.replace("PT", "").replace("H", ":").replace("M", ":").replace("S", "")
  } catch (e) {
    return false
  }
}


