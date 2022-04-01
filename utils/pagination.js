
export const computeOffset = (page, isImagePage = false) => isImagePage ? (page - 1) * 50 : (page - 1) * 10
