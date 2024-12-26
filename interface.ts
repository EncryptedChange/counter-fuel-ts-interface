import { abi } from './abi.ts'
import { Provider, Contract } from 'fuels';

const executoor = async () => {
    // connect to testnet
    const provider = await Provider.create('https://testnet.fuel.network/v1/graphql');
    // define contract that will be called
    const contract = new Contract('0x2edbc4b7de15e8936f1b34fd7894325fb61ea3478a5192318c3a86188a56b1bd', abi, provider);
    
    // call contract and simulate incrementing the count by 1
    const abc = await contract.functions.increment(1).dryRun();
    // call contract and get the actual current counter number
    const xyz = await contract.functions.get().get();
    
    // print the result of each call to the console
    console.log(abc.value.toNumber())
    console.log(xyz.value.toNumber())
}

executoor()