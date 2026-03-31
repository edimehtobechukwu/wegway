const fs = require('fs');
const DE_PATH = 'c:\\Users\\DELL - USER\\Desktop\\Weg Way\\src\\locales\\de.json';
const EN_PATH = 'c:\\Users\\DELL - USER\\Desktop\\Weg Way\\src\\locales\\en.json';

function fixObjectToArray(obj) {
    if (Array.isArray(obj)) {
        return obj.map(fixObjectToArray);
    } else if (obj !== null && typeof obj === 'object') {
        const keys = Object.keys(obj);
        const isSequentialNumericArr = keys.length > 0 && keys.every((k, i) => k === String(i));
        if (isSequentialNumericArr) {
            const arr = [];
            for (let i = 0; i < keys.length; i++) {
                arr.push(fixObjectToArray(obj[String(i)]));
            }
            return arr;
        } else {
            const newObj = {};
            for (const k of keys) {
                newObj[k] = fixObjectToArray(obj[k]);
            }
            return newObj;
        }
    }
    return obj;
}

[DE_PATH, EN_PATH].forEach(path => {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    const fixed = fixObjectToArray(data);
    fs.writeFileSync(path, JSON.stringify(fixed, null, 4));
    console.log(`Fixed ${path}`);
});
