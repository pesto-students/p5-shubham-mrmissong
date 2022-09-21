// Exercise 5.2
const vowelCount = (str) => {
    const vowelMap = new Map()
    const vowels = ["a", "e", "i", "o", "u"]
    for (let alphabets of str) {
        let converted = alphabets.toLowerCase();
        if (vowels.includes(converted)) {
            if (vowelMap.has(converted.charCodeAt())) {
                vowelMap.set(converted.charCodeAt(),
                    vowelMap.get(converted.charCodeAt()) + 1);
            }
            else {
                vowelMap.set((converted.charCodeAt()), 1);
            }
        }
    }
    return vowelMap
}
console.log(vowelCount("jaabeecduuuuoooouuuii"))