class WordDictionary {
    constructor() {
        this.map = {}
        this.ends = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        if (word.length === 0) {
            this.ends = true;
            return;
        }

        if (!(word[0] in this.map)) {
            this.map[word[0]] = new WordDictionary()
        }

        this.map[word[0]].addWord(word.slice(1))
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if (word.length === 0) return this.ends

        if (word[0] === ".") {
            for (const dict of Object.values(this.map)) {
                if (dict.search(word.slice(1))) {
                    return true;
                }
            }

            return false;
        } else {
            if (word[0] in this.map) {
                return this.map[word[0]].search(word.slice(1))
            }

            return false;
        }
    }
}
