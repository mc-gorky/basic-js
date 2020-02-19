const chainMaker = {
  
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!position || !Number.isInteger(position) || position < 0 || position > this.chain.length){
      this.chain = [];
      throw new Error();
     
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.chain.join('~~');
    this.chain = [];
    return chainString;
    
  }
};

module.exports = chainMaker;
