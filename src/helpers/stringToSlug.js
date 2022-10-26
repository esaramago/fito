import replaceSpecialCharacters from './replaceSpecialCharacters';

export default string => {

    if (string) {
        string = string.replace(/^\s+|\s+$/g, ''); // trim
        string = string.toLowerCase();
        string = replaceSpecialCharacters(string);
        string = string.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        
        return string
    }

    return ''
}