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

}


  export default Block
