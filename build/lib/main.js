
var __cov___8zag8y_$cVZ_XPNwewZA = (Function('return this'))();
if (!__cov___8zag8y_$cVZ_XPNwewZA.__coverage__) { __cov___8zag8y_$cVZ_XPNwewZA.__coverage__ = {}; }
__cov___8zag8y_$cVZ_XPNwewZA = __cov___8zag8y_$cVZ_XPNwewZA.__coverage__;
if (!(__cov___8zag8y_$cVZ_XPNwewZA['/Users/tgermaneri/git/canvas-datagrid/lib/main.js'])) {
   __cov___8zag8y_$cVZ_XPNwewZA['/Users/tgermaneri/git/canvas-datagrid/lib/main.js'] = {"path":"/Users/tgermaneri/git/canvas-datagrid/lib/main.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"context","line":11,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":22}}},"2":{"name":"grid","line":14,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":24}}},"3":{"name":"(anonymous_3)","line":19,"loc":{"start":{"line":19,"column":24},"end":{"line":19,"column":42}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":30,"column":3}},"2":{"start":{"line":13,"column":4},"end":{"line":13,"column":56}},"3":{"start":{"line":14,"column":4},"end":{"line":24,"column":5}},"4":{"start":{"line":15,"column":8},"end":{"line":15,"column":26}},"5":{"start":{"line":16,"column":8},"end":{"line":16,"column":22}},"6":{"start":{"line":17,"column":8},"end":{"line":17,"column":25}},"7":{"start":{"line":18,"column":8},"end":{"line":18,"column":31}},"8":{"start":{"line":19,"column":8},"end":{"line":21,"column":11}},"9":{"start":{"line":20,"column":12},"end":{"line":20,"column":25}},"10":{"start":{"line":22,"column":8},"end":{"line":22,"column":20}},"11":{"start":{"line":23,"column":8},"end":{"line":23,"column":25}},"12":{"start":{"line":25,"column":4},"end":{"line":27,"column":5}},"13":{"start":{"line":26,"column":8},"end":{"line":26,"column":37}},"14":{"start":{"line":28,"column":4},"end":{"line":28,"column":26}},"15":{"start":{"line":29,"column":4},"end":{"line":29,"column":16}}},"branchMap":{"1":{"line":15,"type":"binary-expr","locations":[{"start":{"line":15,"column":15},"end":{"line":15,"column":19}},{"start":{"line":15,"column":23},"end":{"line":15,"column":25}}]},"2":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":4},"end":{"line":25,"column":4}},{"start":{"line":25,"column":4},"end":{"line":25,"column":4}}]},"3":{"line":25,"type":"binary-expr","locations":[{"start":{"line":25,"column":8},"end":{"line":25,"column":14}},{"start":{"line":25,"column":18},"end":{"line":25,"column":40}},{"start":{"line":25,"column":44},"end":{"line":25,"column":59}}]}}};
}
__cov___8zag8y_$cVZ_XPNwewZA = __cov___8zag8y_$cVZ_XPNwewZA['/Users/tgermaneri/git/canvas-datagrid/lib/main.js'];
__cov___8zag8y_$cVZ_XPNwewZA.s['1']++;define(['./draw','./events','./intf','./contextMenu','./defaults','./dom','./publicMethods'],function context(){'use strict';__cov___8zag8y_$cVZ_XPNwewZA.f['1']++;__cov___8zag8y_$cVZ_XPNwewZA.s['2']++;var modules=Array.prototype.slice.call(arguments);function grid(args){__cov___8zag8y_$cVZ_XPNwewZA.f['2']++;__cov___8zag8y_$cVZ_XPNwewZA.s['4']++;args=(__cov___8zag8y_$cVZ_XPNwewZA.b['1'][0]++,args)||(__cov___8zag8y_$cVZ_XPNwewZA.b['1'][1]++,{});__cov___8zag8y_$cVZ_XPNwewZA.s['5']++;var self={};__cov___8zag8y_$cVZ_XPNwewZA.s['6']++;self.args=args;__cov___8zag8y_$cVZ_XPNwewZA.s['7']++;self.createGrid=grid;__cov___8zag8y_$cVZ_XPNwewZA.s['8']++;modules.forEach(function(module){__cov___8zag8y_$cVZ_XPNwewZA.f['3']++;__cov___8zag8y_$cVZ_XPNwewZA.s['9']++;module(self);});__cov___8zag8y_$cVZ_XPNwewZA.s['10']++;self.init();__cov___8zag8y_$cVZ_XPNwewZA.s['11']++;return self.intf;}__cov___8zag8y_$cVZ_XPNwewZA.s['12']++;if((__cov___8zag8y_$cVZ_XPNwewZA.b['3'][0]++,window)&&(__cov___8zag8y_$cVZ_XPNwewZA.b['3'][1]++,!window.canvasDatagrid)&&(__cov___8zag8y_$cVZ_XPNwewZA.b['3'][2]++,!window.require)){__cov___8zag8y_$cVZ_XPNwewZA.b['2'][0]++;__cov___8zag8y_$cVZ_XPNwewZA.s['13']++;window.canvasDatagrid=grid;}else{__cov___8zag8y_$cVZ_XPNwewZA.b['2'][1]++;}__cov___8zag8y_$cVZ_XPNwewZA.s['14']++;module.exports=grid;__cov___8zag8y_$cVZ_XPNwewZA.s['15']++;return grid;});
