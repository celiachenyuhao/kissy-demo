KISSY.add("demo/config",function(e,n,a,t){var s=e.all,d=function(){this.el=s("#J_Config"),this.init()};return e.extend(d,n),d.prototype.init=function(){d.superclass.constructor.call(this)},d.prototype.render=function(e){var n,a=this;if(!e)var e={module:a._makeQueryId()};n=["{{#demo}}","<h2>描述</h2>","<ul>","<li>",'<label for="J_Author">作者：</label>',"<p>",'<input id="J_Author" class="author" value="{{author}}" placeholder="填写您的花名">',"</p>","</li>","<li>",'<label for="J_Intro">简介：</label>',"<p>",'<textarea id="J_Intro" class="intro" placeholder="介绍下DEMO">{{intro}}</textarea>',"</p>","</li>","<li>","<p>模块：</p>",'<p id="J_Module">{{module}}</p>',"</li>","<li>","<p>框架：</p>","<p>",'<input type="checkbox" checked="true" disabled="true"> Kissy 1.3',"</p>","</li>","</ul>","{{/demo}}"].join("");var s=new t(n).render({demo:e});a.el.html(s)},d.prototype.getDemoConfig=function(){var e=this,n=s("#J_Intro"),a=s("#J_Author");return{module:e._makeQueryId(),intro:n.val(),author:a.val()}},d},{requires:["demo/base","node","xtemplate"]});