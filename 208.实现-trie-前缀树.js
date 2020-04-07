/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode();
};

var TrieNode = function() {
  this.next = {};
  this.isEnd = false;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; ++i) {
    if(!node.next[word[i]]){
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  node = this.root;

  for(let i = 0;i < word.length; i++) {
    if(!node.next[word[i]]){
      return false;
    }
    node = node.next[word[i]]
  }
  if(node.isEnd) return true;
  return false;

};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  node = this.root;
  for(let i = 0;i < prefix.length; i++) {
    if(!node.next[prefix[i]]){
      return false;
    }
    node = node.next[prefix[i]]
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

