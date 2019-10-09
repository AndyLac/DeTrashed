
const isImage = (img_name) => {
    return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(img_name)
}

export {
    isImage
}