
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/main/main","pages/notRent/notRent","pages/index/index","pages/ticket/ticket","pages/signUp/signUp","pages/center/center","pages/info/info","pages/classify/classify","pages/pay/pay","pages/afterPay/afterPay","pages/house/house","pages/addHouse/addHouse","pages/houseInfo/houseInfo","pages/rentRecord/rentRecord","pages/login/login","pages/repairRecord/repairRecord","pages/moneyRecord/moneyRecord","pages/notRentInfo/notRentInfo"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"轻记","navigationBarBackgroundColor":"#fc5380","backgroundColor":"#FFFFFF"},"tabBar":{"selectedColor":"#00ad98","borderStyle":"white","list":[{"pagePath":"pages/main/main","iconPath":"static/images/tabBar/signUp.png","selectedIconPath":"static/images/tabBar/signUp_selected.png","text":"首页"},{"pagePath":"pages/house/house","iconPath":"static/images/tabBar/house.png","selectedIconPath":"static/images/tabBar/house1.png","text":"房间"},{"pagePath":"pages/center/center","iconPath":"static/images/tabBar/jilu.png","selectedIconPath":"static/images/tabBar/jilu1.png","text":"记录"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"村头公寓","compilerVersion":"2.8.12","entryPagePath":"pages/main/main","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/main/main","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages/notRent/notRent","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/ticket/ticket","meta":{},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/signUp/signUp","meta":{},"window":{"navigationBarTitleText":"购票"}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"记录"}},{"path":"/pages/info/info","meta":{},"window":{}},{"path":"/pages/classify/classify","meta":{},"window":{}},{"path":"/pages/pay/pay","meta":{},"window":{}},{"path":"/pages/afterPay/afterPay","meta":{},"window":{}},{"path":"/pages/house/house","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"房间","enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages/addHouse/addHouse","meta":{},"window":{}},{"path":"/pages/houseInfo/houseInfo","meta":{},"window":{"navigationBarTitleText":"房间详情"}},{"path":"/pages/rentRecord/rentRecord","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/repairRecord/repairRecord","meta":{},"window":{"navigationBarTitleText":"维修记录"}},{"path":"/pages/moneyRecord/moneyRecord","meta":{},"window":{"navigationBarTitleText":"收支记录"}},{"path":"/pages/notRentInfo/notRentInfo","meta":{},"window":{"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});