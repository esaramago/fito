export default string => {
    let newString = ''

    if (string)
        newString = string.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
            .replace(/(^-+|-+$)/, '') // Remove extra hyphens from beginning or end of the string

    return newString

}