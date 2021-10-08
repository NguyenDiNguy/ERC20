import { Injectable } from '@nestjs/common';
import * as Eth from 'ethers';
import { FormatedData } from './formatedData.dto';
import { Transfer } from './transfer.dto';
const privatekey1 =
  '0x3f9b5c3ba9f52a5876205a23359b3909b2ff61ec7b395688c32a5025efe9c306';
const privatekey2 =
  '0x6cdb1d1d2828afe634323331e73c65b9d67b2fd1b71c95b3ff4597ec588c09b2';
const projectID = '0fd594d67f9a4b67b700112b711589f2';
const infuraURL =
  'https://ropsten.infura.io/v3/0fd594d67f9a4b67b700112b711589f2';
const provider = Eth.getDefaultProvider(infuraURL, projectID);

@Injectable()
export class AppService {
  //send transaction for getTransaction
  async sendTransaction(): Promise<void> {
    const signer1 = new Eth.Wallet(privatekey1, provider);
    const signer2 = new Eth.Wallet(privatekey2, provider);
    const tx = await signer1.sendTransaction({
      to: signer2.address,
      value: Eth.utils.parseUnits('0.1', 'ether'),
    });
    await tx.wait();
    console.log(tx);
  }
  // getTransaction
  async getParseTransaction(hash: string): Promise<FormatedData> {
    const ethTxData = await provider.getTransaction(hash);
    console.log('ethTxData');
    console.log(ethTxData);
    const transfer = new Transfer();
    transfer.from = ethTxData.from;
    transfer.to = ethTxData.to;
    transfer.amount = ethTxData.value.toString();
    const data = new FormatedData();
    data.transfers = new Array<Transfer>();
    data.transfers.push(transfer);
    data.hash = ethTxData.hash;
    data.blockHeight = ethTxData.blockNumber;
    data.contractAddress = ethTxData.blockHash;
    return data;
  }
}
