// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"godBank","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"round","outputs":[{"name":"","type":"uint32"}],"type":"function"},{"constant":false,"inputs":[],"name":"protectKingdom","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"lastFell","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"abdicate","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"kingCost","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"madKing","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"jesterBank","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"citizensAddresses","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"kingBank","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"piggyBank","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"lastCollection","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalCitizens","outputs":[{"name":"","type":"uint32"}],"type":"function"},{"constant":false,"inputs":[],"name":"usurpation","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"citizensAmounts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"collectFee","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"lastCitizenPaid","outputs":[{"name":"","type":"uint32"}],"type":"function"},{"constant":true,"inputs":[],"name":"amountInvested","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"jester","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"amountAlreadyPaidBack","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"trueGods","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"onThrone","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"murder","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "60606040526000805433600160a060020a031991821681178355600c80546001805490941683179093554260038190556002819055600455670de0b6b3a7640000600555600d849055600e849055604060020a60e060020a0319909216680100000000000000009091021763ffffffff19169055610e4e90819061008290396000f3606060405236156101115760e060020a600035046311613fc9811461011c578063146ca531146101255780631fdf6e0c1461013b5780632083f44f14610176578063314e99a21461017f5780635841b9bf14610258578063816f3f4d146102615780639935b9681461027a578063a2e7241c14610283578063b117a3e8146102c9578063b7d5d4c0146102d2578063bd6bbc31146102db578063bd7b09e4146102e4578063ccf1ab9b146102f3578063d466a03f14610321578063d4d5d32a1461034c578063d94395e21461038e578063d954cbcb146103a5578063e2202a4d146103ae578063e684aa5c146103c0578063f113fccd146103c9578063f64c08b1146103db578063fbeaebc6146103e4575b61048061048b61013f565b61048f60075481565b6104a1600c5460e060020a900463ffffffff1681565b61048f5b600034662386f26fc100008110156104d857604051600160a060020a033316908390839082818181858883f15061093d9350505050565b61048f60035481565b610480600c54604060020a9004600160a060020a0390811633919091161480156101b95750600054600160a060020a039081163390911614155b1561048d57600c54600954604051604060020a909204600160a060020a0316916000919082818181858883f19350505050506064600560005054602802046006600050541115610ccc57600554600c54604051604060020a909104600160a060020a03169160009160646028909202919091049082818181858883f1505060055460068054606460289390930292909204909103905550610cfa915050565b61048f60055481565b6104bb600c54604060020a9004600160a060020a031681565b61048f60085481565b6104bb600435600a8054829081101561000257506000527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80154600160a060020a031681565b61048f60095481565b61048f60065481565b61048f60025481565b6104a1600c5463ffffffff1681565b610480600c543490604060020a9004600160a060020a0390811633919091161415610d475761048281610978565b61048f600435600b805482908110156100025750600052600080516020610e2e833981519152015481565b610480600054600160a060020a039081163391909116141561048d5760405160008054600754600160a060020a03919091169282818181858883f15050505050565b6104a1600c54640100000000900463ffffffff1681565b61048f600e5481565b6104bb600154600160a060020a031681565b61048f600d5481565b6104bb600054600160a060020a031681565b61048f60045481565b61048067016345785d8a0000348190108015906104115750600154600160a060020a039081163390911614155b15610d4257600854600154604051600160a060020a03919091169160009182818181858883f1505050600881905560018054600160a060020a03191633908117909155604051600160a060020a039091169250348490039082818181858883f193505050505061048b81610978565b005b60058054820190555b505b565b60408051918252519081900360200190f35b6040805163ffffffff929092168252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b68056bc75e2d6310000081111561052257604051600160a060020a0333169060009068056bc75e2d630fffff1934019082818181858883f15068056bc75e2d631000009450505050505b42620151806002600050540110156105b357600c5463ffffffff16600114156105f357600a80546000198101908110156100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a790920154600160a060020a031692916064605f909202919091049082818181858883f1935050505050610832565b600354426202a30090910110610a2857600a8054600181018083558281838015829011610a5857818360005260206000209182019101610a589190610892565b600c5463ffffffff16600214156106de57600a80546000198101908110156100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a79290920154600160a060020a031692916064603c909202919091049082818181858883f15050600a80549093506001198101925082101590506100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a690920154600160a060020a0316929160646023909202919091049082818181858883f1935050505050610832565b600c54600363ffffffff919091161061083257600a80546000198101908110156100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a79290920154600160a060020a0316929160646032909202919091049082818181858883f15050600a80549093506001198101925082101590506100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a690920154600160a060020a031692916064601e909202919091049082818181858883f15050600a80549093506002198101925082101590506100025750805460009182527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a50154600654604051600160a060020a039290921692916064600f909202919091049082818181858883f150505050505b6006805460078054606460059093029290920490910190556000905560018054600160a060020a0319163317815542600355600a805491820180825590919082818380158290116108a6578183600052602060002091820191016108a691905b8082111561093d5760008155600101610892565b5050506000928352506020909120018054600160a060020a03191633179055600b8054600181018083558281838015829011610941578183600052602060002091820191016109419190610892565b600680546064605a840204019055600c805460e060020a80820463ffffffff16600101027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790555b5090565b50505060009283525060209091206064606e840204910155600c8054600163ffffffff82160163ffffffff199091161790556109eb815b42600255600e8054820190556008805460646005840204908101909155600980548201905560068054919091019055610def60095467016345785d8a0000901061048d57604051600954600c54604060020a9004600160a060020a0316916000919082818181858883f150505060095550565b6108f5600754670de0b6b3a7640000901061048d5760405160008054600754600160a060020a03919091169282818181858883f150505060075550565b600a8054600181018083558281838015829011610b0057818360005260206000209182019101610b009190610892565b5050506000928352506020909120018054600160a060020a03191633179055600b8054600181018083558281838015829011610aa757818360005260206000209182019101610aa79190610892565b505050600092835250602090912060646082840204910155610add565b50505060009283525060209091206064606e8402049101555b600c8054600163ffffffff82160163ffffffff19909116179055610b4f81610978565b5050506000928352506020909120018054600160a060020a03191633179055600b8054600181018083558281838015829011610ac457818360005260206000209182019101610ac49190610892565b5b60086000505460096000505460076000505460066000505430600160a060020a03163103030303600b600050600c60049054906101000a900463ffffffff1663ffffffff16815481101561000257600091909152600080516020610e2e8339815191520154108015610bd55750600c5463ffffffff8181166401000000009092041611155b1561093d57600c54600a80549091640100000000900463ffffffff16908110156100025760009182527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8810154600b8054600160a060020a03929092169392909181101561000257908252604051600080516020610e2e833981519152909101549082818181858883f15050600c54600b805490945064010000000090910463ffffffff169250821015905061000257600c8054600093909352600080516020610e2e833981519152820154600d8054909101905567ffffffff000000001990921660019190910164010000000002179055610b50565b600c54604051600654604060020a909204600160a060020a03169160009182818181858883f1505050600655505b600c8054600054600160a060020a0316604060020a027bffffffffffffffffffffffffffffffffffffffff000000000000000019909116179055670de0b6b3a7640000600555565b610002565b42620d2f006004600050540111158015610d6c57506064600560005054609602048110155b15610d4257600c54600954604051604060020a909204600160a060020a0316916000919082818181858883f150506007805460646005878102919091049091019091558490555050600c80547bffffffffffffffffffffffffffffffffffffffff00000000000000001916604060020a3302179055504260045561048b81610978565b61048b60085467016345785d8a0000901061048d57600854600154604051600160a060020a03919091169160009182818181858883f150505060085550560175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9",
    unlinked_binary: "60606040526000805433600160a060020a031991821681178355600c80546001805490941683179093554260038190556002819055600455670de0b6b3a7640000600555600d849055600e849055604060020a60e060020a0319909216680100000000000000009091021763ffffffff19169055610e4e90819061008290396000f3606060405236156101115760e060020a600035046311613fc9811461011c578063146ca531146101255780631fdf6e0c1461013b5780632083f44f14610176578063314e99a21461017f5780635841b9bf14610258578063816f3f4d146102615780639935b9681461027a578063a2e7241c14610283578063b117a3e8146102c9578063b7d5d4c0146102d2578063bd6bbc31146102db578063bd7b09e4146102e4578063ccf1ab9b146102f3578063d466a03f14610321578063d4d5d32a1461034c578063d94395e21461038e578063d954cbcb146103a5578063e2202a4d146103ae578063e684aa5c146103c0578063f113fccd146103c9578063f64c08b1146103db578063fbeaebc6146103e4575b61048061048b61013f565b61048f60075481565b6104a1600c5460e060020a900463ffffffff1681565b61048f5b600034662386f26fc100008110156104d857604051600160a060020a033316908390839082818181858883f15061093d9350505050565b61048f60035481565b610480600c54604060020a9004600160a060020a0390811633919091161480156101b95750600054600160a060020a039081163390911614155b1561048d57600c54600954604051604060020a909204600160a060020a0316916000919082818181858883f19350505050506064600560005054602802046006600050541115610ccc57600554600c54604051604060020a909104600160a060020a03169160009160646028909202919091049082818181858883f1505060055460068054606460289390930292909204909103905550610cfa915050565b61048f60055481565b6104bb600c54604060020a9004600160a060020a031681565b61048f60085481565b6104bb600435600a8054829081101561000257506000527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80154600160a060020a031681565b61048f60095481565b61048f60065481565b61048f60025481565b6104a1600c5463ffffffff1681565b610480600c543490604060020a9004600160a060020a0390811633919091161415610d475761048281610978565b61048f600435600b805482908110156100025750600052600080516020610e2e833981519152015481565b610480600054600160a060020a039081163391909116141561048d5760405160008054600754600160a060020a03919091169282818181858883f15050505050565b6104a1600c54640100000000900463ffffffff1681565b61048f600e5481565b6104bb600154600160a060020a031681565b61048f600d5481565b6104bb600054600160a060020a031681565b61048f60045481565b61048067016345785d8a0000348190108015906104115750600154600160a060020a039081163390911614155b15610d4257600854600154604051600160a060020a03919091169160009182818181858883f1505050600881905560018054600160a060020a03191633908117909155604051600160a060020a039091169250348490039082818181858883f193505050505061048b81610978565b005b60058054820190555b505b565b60408051918252519081900360200190f35b6040805163ffffffff929092168252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b68056bc75e2d6310000081111561052257604051600160a060020a0333169060009068056bc75e2d630fffff1934019082818181858883f15068056bc75e2d631000009450505050505b42620151806002600050540110156105b357600c5463ffffffff16600114156105f357600a80546000198101908110156100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a790920154600160a060020a031692916064605f909202919091049082818181858883f1935050505050610832565b600354426202a30090910110610a2857600a8054600181018083558281838015829011610a5857818360005260206000209182019101610a589190610892565b600c5463ffffffff16600214156106de57600a80546000198101908110156100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a79290920154600160a060020a031692916064603c909202919091049082818181858883f15050600a80549093506001198101925082101590506100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a690920154600160a060020a0316929160646023909202919091049082818181858883f1935050505050610832565b600c54600363ffffffff919091161061083257600a80546000198101908110156100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a79290920154600160a060020a0316929160646032909202919091049082818181858883f15050600a80549093506001198101925082101590506100025750805460009182526006546040517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a690920154600160a060020a031692916064601e909202919091049082818181858883f15050600a80549093506002198101925082101590506100025750805460009182527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a50154600654604051600160a060020a039290921692916064600f909202919091049082818181858883f150505050505b6006805460078054606460059093029290920490910190556000905560018054600160a060020a0319163317815542600355600a805491820180825590919082818380158290116108a6578183600052602060002091820191016108a691905b8082111561093d5760008155600101610892565b5050506000928352506020909120018054600160a060020a03191633179055600b8054600181018083558281838015829011610941578183600052602060002091820191016109419190610892565b600680546064605a840204019055600c805460e060020a80820463ffffffff16600101027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790555b5090565b50505060009283525060209091206064606e840204910155600c8054600163ffffffff82160163ffffffff199091161790556109eb815b42600255600e8054820190556008805460646005840204908101909155600980548201905560068054919091019055610def60095467016345785d8a0000901061048d57604051600954600c54604060020a9004600160a060020a0316916000919082818181858883f150505060095550565b6108f5600754670de0b6b3a7640000901061048d5760405160008054600754600160a060020a03919091169282818181858883f150505060075550565b600a8054600181018083558281838015829011610b0057818360005260206000209182019101610b009190610892565b5050506000928352506020909120018054600160a060020a03191633179055600b8054600181018083558281838015829011610aa757818360005260206000209182019101610aa79190610892565b505050600092835250602090912060646082840204910155610add565b50505060009283525060209091206064606e8402049101555b600c8054600163ffffffff82160163ffffffff19909116179055610b4f81610978565b5050506000928352506020909120018054600160a060020a03191633179055600b8054600181018083558281838015829011610ac457818360005260206000209182019101610ac49190610892565b5b60086000505460096000505460076000505460066000505430600160a060020a03163103030303600b600050600c60049054906101000a900463ffffffff1663ffffffff16815481101561000257600091909152600080516020610e2e8339815191520154108015610bd55750600c5463ffffffff8181166401000000009092041611155b1561093d57600c54600a80549091640100000000900463ffffffff16908110156100025760009182527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8810154600b8054600160a060020a03929092169392909181101561000257908252604051600080516020610e2e833981519152909101549082818181858883f15050600c54600b805490945064010000000090910463ffffffff169250821015905061000257600c8054600093909352600080516020610e2e833981519152820154600d8054909101905567ffffffff000000001990921660019190910164010000000002179055610b50565b600c54604051600654604060020a909204600160a060020a03169160009182818181858883f1505050600655505b600c8054600054600160a060020a0316604060020a027bffffffffffffffffffffffffffffffffffffffff000000000000000019909116179055670de0b6b3a7640000600555565b610002565b42620d2f006004600050540111158015610d6c57506064600560005054609602048110155b15610d4257600c54600954604051604060020a909204600160a060020a0316916000919082818181858883f150506007805460646005878102919091049091019091558490555050600c80547bffffffffffffffffffffffffffffffffffffffff00000000000000001916604060020a3302179055504260045561048b81610978565b61048b60085467016345785d8a0000901061048d57600854600154604051600160a060020a03919091169160009182818181858883f150505060085550560175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9",
    address: "0xbd353ef1204c2b455f8538cc45288b0be1eb28c3",
    generated_with: "2.0.6",
    contract_name: "GameOfThrones"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("GameOfThrones error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("GameOfThrones error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("GameOfThrones error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("GameOfThrones error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.GameOfThrones = Contract;
  }

})();
