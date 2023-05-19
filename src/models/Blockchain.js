// Blockchain
import Block from "./Block.js";
import {maxBy, prop, reduce, reverse, unfold, values} from "ramda";
class Blockchain {
<<<<<<< Updated upstream
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name=name
    this.genesisBlock=null
    this.blocks=[]
  }

=======
  constructor(name) {
    this.name = name
    this.blocks = {}
  }

  addBlock(block) {
    if (block.isValid()) {
      this.blocks[block.hash] = block
    }
  }
>>>>>>> Stashed changes

  longestChain() {
<<<<<<< Updated upstream
    let blocks = Object.values(this.blocks);
    blocks.sort((a, b) => a.height - b.height);
    return blocks;
=======
    let maxHeight = Math.max(...Object.values(this.blocks).map(block => block.height))
    let currentBlock = Object.values(this.blocks).find(block => block.height === maxHeight)
    let longestChain = []

    while (currentBlock) {
      longestChain.push(currentBlock)
      currentBlock = Object.values(this.blocks).find(
          (block) => block.hash === currentBlock.previousHash
      )
    }

    return longestChain.reverse()
>>>>>>> Stashed changes
  }
}
export default Blockchain
