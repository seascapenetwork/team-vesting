(this["webpackJsonpvesting-site"]=this["webpackJsonpvesting-site"]||[]).push([[0],{257:function(e,t,n){},259:function(e,t,n){},273:function(e,t){},276:function(e,t){},277:function(e,t){},281:function(e,t){},282:function(e,t){},308:function(e,t){},310:function(e,t){},320:function(e,t){},322:function(e,t){},332:function(e,t){},334:function(e,t){},350:function(e,t){},453:function(e,t){},455:function(e,t){},460:function(e,t){},462:function(e,t){},469:function(e,t){},481:function(e,t){},484:function(e,t){},489:function(e,t){},552:function(e,t){},579:function(e,t,n){var a={"./MscpToken.json":580,"./MscpVesting.json":581,"./MscpVesting30M.json":582,"./MscpVesting5M.json":583,"./TeamVesting.json":584};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=579},580:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bridge","type":"address"}],"name":"AddBridge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bridge","type":"address"}],"name":"RemoveBridge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"bridgeAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bridges","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bridge","type":"address"}],"name":"addBridge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bridge","type":"address"}],"name":"removeBridge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleBridgeAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},581:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"InvestorModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"remainingCoins","type":"uint256"},{"internalType":"bool","name":"strategicInvestor","type":"bool"},{"internalType":"bool","name":"claimedBonus","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"},{"internalType":"bool","name":"_strategicInvestor","type":"bool"}],"name":"addInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"}],"name":"disableInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTotalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getAvailableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getRemainingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]')},582:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"InvestorModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bonusGiven","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"remainingCoins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"}],"name":"addInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"}],"name":"disableInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTotalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getAvailableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]')},583:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"InvestorModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bonusGiven","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"remainingCoins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"}],"name":"addInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"}],"name":"disableInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTotalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getAvailableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]')},584:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"InvestorModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"remainingCoins","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"},{"internalType":"uint256","name":"_monthlyAllowance","type":"uint256"}],"name":"addInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"remainingCoins","type":"uint256"},{"internalType":"bool","name":"claimedBonus","type":"bool"},{"internalType":"uint256","name":"supply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"}],"name":"disableInvestor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},585:function(e,t,n){"use strict";n.r(t);var a=n(18),i=n.n(a),s=n(248),r=n.n(s),u=(n(257),n(1)),o=n.n(u),p=n(26),d=n(38),c=n(34),l=(n(259),n(44)),y=n.n(l),m=n(143),b=n.n(m),T=n(13);function f(e){var t=e.toString().split(".");return t[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(t[1]?"."+t[1]:"")}var v=function(){var e=Object(p.a)(o.a.mark((function e(t,a){var i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n(579)("./".concat(t,".json")),s=new y.a(y.a.givenProvider),e.abrupt("return",new s.eth.Contract(i,a));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({mustBeMetaMask:!0});case 2:if(!(t=e.sent)){e.next=32;break}return console.log(t,"provider"),e.prev=5,e.next=8,t.request({method:"eth_requestAccounts"});case 8:n=Object({NODE_ENV:"production",PUBLIC_URL:"/moonscape",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VESTING_ADDRESS:"0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed",REACT_APP_DURATION:"63113852000",REACT_APP_SITE_TITLE:"Team Token Vesting"}).REACT_APP_ACTIVE_CHAIN,console.log(typeof n,"activeChain"),e.t0=n,e.next="97"===e.t0?13:"56"===e.t0?18:23;break;case 13:return e.next=15,t.request({method:"wallet_addEthereumChain",params:[{chainId:"0x61",chainName:"Binance Smart Chain Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545"]}]});case 15:return e.next=17,t.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x61"}]});case 17:return e.abrupt("break",24);case 18:return e.next=20,t.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",chainName:"Binance Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org\t"]}]});case 20:return e.next=22,t.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]});case 22:case 23:return e.abrupt("break",24);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(5),console.error(e.t1);case 29:t.on("chainChanged",(function(){window.location.reload()})),e.next=33;break;case 32:console.error("Please install MetaMask");case 33:case"end":return e.stop()}}),e,null,[[5,26]])})));return function(){return e.apply(this,arguments)}}(),_=(Object({NODE_ENV:"production",PUBLIC_URL:"/moonscape",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VESTING_ADDRESS:"0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed",REACT_APP_DURATION:"63113852000",REACT_APP_SITE_TITLE:"Team Token Vesting"}).REACT_APP_SUPPLY_PRIVATE,Object({NODE_ENV:"production",PUBLIC_URL:"/moonscape",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VESTING_ADDRESS:"0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed",REACT_APP_DURATION:"63113852000",REACT_APP_SITE_TITLE:"Team Token Vesting"}).REACT_APP_SUPPLY_STRATEGIC,Object({NODE_ENV:"production",PUBLIC_URL:"/moonscape",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VESTING_ADDRESS:"0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed",REACT_APP_DURATION:"63113852000",REACT_APP_SITE_TITLE:"Team Token Vesting"}).REACT_APP_TOTAL_VESTING,Object({NODE_ENV:"production",PUBLIC_URL:"/moonscape",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VESTING_ADDRESS:"0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed",REACT_APP_DURATION:"63113852000",REACT_APP_SITE_TITLE:"Team Token Vesting"}).REACT_APP_TOTAL_DAILY,Object({NODE_ENV:"production",PUBLIC_URL:"/moonscape",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VESTING_ADDRESS:"0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed",REACT_APP_DURATION:"63113852000",REACT_APP_SITE_TITLE:"Team Token Vesting"}).REACT_APP_TOTAL_BANTER,function(e){var t=e.address,n=e.contract,i=Object(a.useState)(0),s=Object(d.a)(i,2),r=s[0],u=s[1],c=Object(a.useState)(0),l=Object(d.a)(c,2),m=l[0],b=l[1],v=Object(a.useState)(0),w=Object(d.a)(v,2),_=w[0],O=w[1],E=Object(a.useState)(!1),h=Object(d.a)(E,2),A=(h[0],h[1],Object(a.useState)(!1)),x=Object(d.a)(A,2),S=x[0],j=x[1],C=function(){var e=Object(p.a)(o.a.mark((function e(){var a,i,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=26;break}return console.log("contract",n),e.next=4,n.methods.startTime().call();case 4:if(a=e.sent,u(a),!t){e.next=24;break}return e.next=9,n.methods.getTotalReleased().call({from:t});case 9:return i=e.sent,i=parseFloat(y.a.utils.fromWei(i,"ether")).toFixed(6),b(i),e.next=14,n.methods.getAvailableAmount().call({from:t});case 14:return s=e.sent,s=parseFloat(y.a.utils.fromWei(s,"ether")).toFixed(6),O(s),e.next=19,n.methods.balances(t).call();case 19:r=e.sent,console.log(r,"balances"),j(!0),e.next=26;break;case 24:O(0),b(0);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();C(),setInterval(Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C();case 1:case"end":return e.stop()}}),e)}))),6e4);var g=function(){var e=Object(p.a)(o.a.mark((function e(){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.withdraw().send({from:t});case 2:if(!(a=e.sent)||!0!==a.status){e.next=14;break}return e.next=6,n.methods.getTotalReleased().call({from:t});case 6:return i=e.sent,i=parseFloat(y.a.utils.fromWei(i,"ether")).toFixed(6),b(i),e.next=11,n.methods.getAvailableAmount().call({from:t});case 11:s=e.sent,s=parseFloat(y.a.utils.fromWei(s,"ether")).toFixed(6),O(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)("div",{className:"popup",children:Object(T.jsxs)("div",{className:"popup-inner",children:[Object(T.jsx)("h1",{children:"Team Token Vesting"}),Object(T.jsxs)("div",{className:"info-list",children:[Object(T.jsxs)("div",{className:"info-list--item",children:[Object(T.jsx)("p",{children:"Total claimed"}),Object(T.jsxs)("p",{className:"number",children:[S?f(m):"???"," CWS"]})]}),Object(T.jsxs)("div",{className:"info-list--item",children:[Object(T.jsx)("p",{children:"Available to claim"}),Object(T.jsxs)("p",{className:"number",children:[S?f(_):"???"," CWS"]})]}),Object(T.jsxs)("div",{className:"info-list--item",children:[Object(T.jsx)("p",{children:"Vesting ends on"}),Object(T.jsx)("p",{className:"number",children:S&&r?new Date(1e3*r+Number("63113852000")).toLocaleString():"???"})]})]}),Object(T.jsx)("span",{className:"spacer"}),Object(T.jsx)("button",{className:"claim-btn ".concat(t&&S&&_>0?"active":"inactive"),onClick:function(){t&&_>0&&g()},children:"Claim"})]})})}),O=n(592),E=n(250);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return e?"".concat(e.slice(0,t),"...").concat(e.slice(-t)):""}var A;"undefined"!==typeof window&&(A=new(n.n(E).a)({network:"mainnet",cacheProvider:!0,providerOptions:{}}));var x={provider:null,web3Provider:null,address:null,chainId:null};function S(e,t){switch(t.type){case"SET_WEB3_PROVIDER":return Object(c.a)(Object(c.a)({},e),{},{provider:t.provider,web3Provider:t.web3Provider,address:t.address,chainId:t.chainId});case"SET_ADDRESS":return Object(c.a)(Object(c.a)({},e),{},{address:t.address});case"SET_CHAIN_ID":return Object(c.a)(Object(c.a)({},e),{},{chainId:t.chainId});case"RESET_WEB3_PROVIDER":return x;default:throw new Error}}var j=function(){var e=Object(a.useReducer)(S,x),t=Object(d.a)(e,2),n=t[0],i=t[1],s=n.provider,r=n.address,u=Object(a.useState)(null),c=Object(d.a)(u,2),l=c[0],y=c[1];Object(a.useEffect)((function(){Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(),e.next=3,v("TeamVesting","0x040977b6fdFF35A02E96E83bA5D2bcfF061888Ed");case 3:t=e.sent,window.vesting=t,y(t);case 6:case"end":return e.stop()}}),e)})))()}),[]);var m=Object(a.useCallback)(Object(p.a)(o.a.mark((function e(){var t,n,a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.connect();case 2:return t=e.sent,n=new O.a.Web3Provider(t),a=n.getSigner(),e.next=7,a.getAddress();case 7:return s=e.sent,e.next=10,n.getNetwork();case 10:r=e.sent,i({type:"SET_WEB3_PROVIDER",provider:t,web3Provider:n,address:s,chainId:r.chainId});case 12:case"end":return e.stop()}}),e)}))),[]),b=Object(a.useCallback)(Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.clearCachedProvider();case 2:if(!(null===s||void 0===s?void 0:s.disconnect)||"function"!==typeof s.disconnect){e.next=5;break}return e.next=5,s.disconnect();case 5:i({type:"RESET_WEB3_PROVIDER"});case 6:case"end":return e.stop()}}),e)}))),[s]);return Object(a.useEffect)((function(){A.cachedProvider&&m()}),[m]),Object(a.useEffect)((function(){if(null===s||void 0===s?void 0:s.on){var e=function(e){console.log("accountsChanged",e),i({type:"SET_ADDRESS",address:e[0]})},t=function(e){window.location.reload()},n=function(e){console.log("disconnect",e),b()};return s.on("accountsChanged",e),s.on("chainChanged",t),s.on("disconnect",n),function(){s.removeListener&&(s.removeListener("accountsChanged",e),s.removeListener("chainChanged",t),s.removeListener("disconnect",n))}}}),[s,b]),Object(T.jsxs)("div",{children:[Object(T.jsx)("header",{children:Object(T.jsxs)("div",{className:"wallet-section",children:[!r&&Object(T.jsx)("button",{className:"connect-btn",id:"btn-connect",onClick:Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("cicked"),m();case 2:case"end":return e.stop()}}),e)}))),children:"Connect wallet"}),r&&Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:h(r)})," ",Object(T.jsx)("button",{className:"connect-btn",id:"btn-connect",onClick:Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("cicked"),b();case 2:case"end":return e.stop()}}),e)}))),children:"Disconnect"})]})]})}),Object(T.jsx)(_,{address:r,contract:l})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,593)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(j,{})}),document.getElementById("root")),C()}},[[585,1,2]]]);
//# sourceMappingURL=main.49339f89.chunk.js.map