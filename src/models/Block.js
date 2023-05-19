import blockchain from "./Blockchain.js";

class Block {
    // 1. 完成构造函数及其参数
    /* 构造函数需要包含
    */
    constructor(blockchain,previousHash,hash,data) {
        this.blockchain = blockchain;
        this.data = data;
        this.previousHash = previousHash.toString();
        this.hash = hash;
    }

<<<<<<< Updated upstream
=======
  constructor(blockchain, previousHash, height, data) {
    this.blockchain = blockchain;
    this.previousHash = previousHash;
    this.height = height;
    this.data = data;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
        this.previousHash +
        this.height +
        this.data +
        this.nonce
    ).toString();
  }

  isValid() {
    return (
        this.hash.substring(0, DIFFICULTY) ===
        '0'.repeat(DIFFICULTY)
    );
  }

  setNonce(nonce) {
    this.nonce = nonce;
    this.hash = this.calculateHash();
  }
>>>>>>> Stashed changes
}


  export default Block
