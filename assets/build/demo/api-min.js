KISSY.add("demo/api",function(){return[{name:"loader",entries:[{name:"add()",desc:"添加模块"},{name:"config()",desc:"设置或获取 KISSY 配置参数"},{name:"getScript()",desc:"动态加载目标地址的资源文件"},{name:"use()",desc:"使用模块"}]},{name:"lang",subcats:[{name:"array",entries:[{name:"each()",desc:"遍历数组中的每一项, 执行指定方法"},{name:"indexOf()",desc:"返回元素 elem 在数组 arr 中的序号"},{name:"lastIndexOf()",desc:"返回元素 elem 在数组 arr 中最后出现的序号"},{name:"unique()",desc:"返回一个新数组, 仅包含 arr 去重后的值"},{name:"inArray()",desc:"判断元素 elem 是否在数组 arr 中"},{name:"filter()",desc:"遍历数组, 过滤出符合条件的数组项"},{name:"map()",desc:"创建一个新数组, 数组结果是在对每个原数组元素调用指定函数的返回值"},{name:"reduce()",desc:"从左向右对每个数组元素调用给定函数，并把返回值累积起来"},{name:"every()",desc:""},{name:"some()",desc:""},{name:"makeArray()",desc:"将对象 o 转换为数组"}]},{name:"escape",entries:[{name:"urlEncode()"},{name:"urlDecode()"},{name:"fromUnicode()",desc:"将 str 中 unicode 转义的字符替换成真实字符"},{name:"escapeHTML()",desc:"将字符串经过 html 转义得到适合在页面中显示的内容"},{name:"escapeRegExp()",desc:""},{name:"unEscapeHTML()",desc:"将字符串中的 html 实体字符替换成对应字符"},{name:"param()",desc:"将对象 o 转换为参数字符串"},{name:"unparam()",desc:"将参数字符串 str 还原为对象"}]},{name:"function",entries:[{name:"noop()",desc:""},{name:"bind()",desc:"创建一个新函数，该函数可以在固定的上下文以及传递部分固定参数放在用户参数前面给原函数并执行"},{name:"rbind()",desc:""},{name:"later()",desc:"延迟执行指定函数 fn"},{name:"throttle()",desc:"ms 时间内只执行 fn 一次, 即使这段时间内 fn 被调用多次"},{name:"buffer()",desc:"将 fn 缓存一段时间后, 再被调用执行"}]},{name:"object",entries:[{name:"stamp()",desc:""},{name:"keys()",desc:"将对象的所有属性名作为数组返回"},{name:"mix()",desc:"将 supplier 对象的成员复制到 receiver 对象上"},{name:"merge()",desc:"将多个对象的成员合并到一个新对象上"},{name:"augment()",desc:"将 s1,s2.... 的 prototype 属性的成员复制到 r.prototype 上"},{name:"extend()",desc:"让函数对象 r 继承函数对象 s"},{name:"namespace()",desc:"根据参数创建命名空间对象"}]},{name:"string",entries:[{name:"trim()",desc:"去除字符串两端的空白字符"},{name:"substitute()",desc:"将字符串中的占位符替换为对应的键值"},{name:"ucfirst()",desc:"首字母大写"},{name:"startsWith()",desc:"判断 str 是否以 prefix 开头"},{name:"endsWith()",desc:"判断 str 是否以 suffix 结尾"}]},{name:"type",entries:[{name:"isBoolean()",desc:"判断是否布尔值"},{name:"isNumber()",desc:"判断是否有效数值"},{name:"isString()",desc:"判断是否字符串"},{name:"isFunction()",desc:"判断是否函数"},{name:"isArray()",desc:"判断是否数组"},{name:"isDate()",desc:"判断是否日期"},{name:"isRegExp()",desc:"判断是否正则表达式"},{name:"isObject()",desc:"判断是否为对象"},,{name:"isNull()",desc:"判断是否 null"},{name:"isUndefined()",desc:"判断是否 undefined"},{name:"isEmptyObject()",desc:"判断是否空对象(没有任何可遍历的属性)"},{name:"isPlainObject()",desc:"判断是否是普通对象"},{name:"type()",desc:""}]}],entries:[{name:"equals()",desc:""},{name:"clone()",desc:"创建一个 普通对象 或数组的深拷贝, 并且返回"},{name:"now()",desc:"返回 new Date().getTime()"},{name:"isWindow()",desc:"判断参数是否为浏览器 window"},{name:"parseXML()",desc:"将字符串转化为 xml 文档"},{name:"globalEval()",desc:"在全局作用域下执行代码字符串, 避免 eval 的作用域链"},{name:"ready()",desc:"DOM 加载完毕时执行"},{name:"available()",desc:"当需要比 KISSY.ready() 反应更快的探测到某个元素可用时使用"},{name:"log()",desc:"输出调试信息"},{name:"error()",desc:"抛出错误异常"},{name:"guid()",desc:"返回全局唯一 id"}]},{name:"ajax",entries:[{name:"setupConfig()",desc:"为所有的 ajax 请求设定默认配置"},{name:"get()",desc:"发送 http get 请求"},{name:"post()",desc:"发送 http post 请求"},{name:"getJSON()",decs:"发送 http get 请求，无视请求响应的 Content-type，将返回信息解析为 json 作为第一个参数调用 callback 回调."},{name:"jsonp()",desc:"发送 jsonp 请求"},{name:"upload()",desc:""},{name:"serialize()",desc:"序列化一系列表单元素为可提交的字符串"}]},{name:"anim",subcats:[{name:"Methods",entries:[{name:"isRunning()",desc:"判断当前动画对象是否在执行动画过程"},{name:"isPaused()",desc:"判断当前动画对象是否被暂停"},{name:"run()",desc:"开始当前动画实例的动画"},{name:"stop()",desc:"结束当前动画实例的动画"},{name:"pause()",desc:"暂停当前动画实例的动画"},{name:"resume()",desc:"继续当前动画实例的动画"}]},{name:"Static Methods",entries:[{name:"Anim.isRunning()",desc:"用于判断 elem 上是否有动画对象在执行"},{name:"Anim.isPaused()",desc:" 用于判断 elem 上是否有动画对象在暂停"},{name:"Anim.stop()",desc:"停止某元素上的动画"},{name:"Anim.pause()",desc:"暂停某元素上的动画"},{name:"Anim.resume()",desc:"继续某元素上的动画"}]},{name:"event",entries:[{name:"complete()",desc:"动画结束后, 触发该事件"}]}],entries:[]},{name:"base",subcats:[{name:"Attribute",subcats:[{name:"Methods",entries:[{name:"addAttr()",desc:"给宿主对象增加一个属性"},{name:"addAttrs()",desc:"批量添加属性"},{name:"hasAttr()",desc:"判断是否有名为 name 的属性"},{name:"removeAttr()",desc:"删除名为 name 的属性"},{name:"get()",desc:"获取属性 name 的值"},{name:"getAttrVals()",desc:"获取目前实例的所有属性键值对集合"},{name:"set()",desc:"设置属性 name 的值为 value"},{name:"reset()",desc:"重置属性 name 为初始值"}]},{name:"Events",entries:[{name:"beforeAttrNameChange()",desc:"名为attrName的属性, 在改变它的值之前触发该事件"},{name:"afterAttrNameChange()",desc:"名为attrName的属性, 在改变它的值之后触发该事件"},{name:"Change()",desc:"每调用 set() 一次后就触发一次该事件"}]}],entries:[]},{name:"Base",entries:[{name:"Base()",desc:"如果你想让类默认就支持 attribute 功能, 请直接继承 Base"}]}],entries:[]},{name:"cookie",entries:[{name:"get()",desc:"获取cookie值"},{name:"remove()",desc:"置空cookie值，并立刻过期"},{name:"set()",desc:"设置cookie值"}]},{name:"dom",entries:[{name:"selector",desc:"选择器"}],subcats:[{name:"节点获取过滤",slug:"",entries:[{name:"query()",desc:"获取符合选择器的所有元素返回dom结点数组"},{name:"get()",desc:"获取符合选择器的第一个dom元素"},{name:"filter()",decs:"获取符合选择器以及过滤参数的所有元素"},{name:"test()",desc:"判断根据选择器获取的所有元素是否都符合过滤条件"},{name:"index()",decs:"获取元素位置"},{name:"contains()",desc:"判断某一容器(container)是否包含另一(contained)节点"},{name:"unselectable()",decs:"使符合选择器的所有元素都不可以作为选择区域的开始"},{name:"contents()",desc:"获取符合选择器的所有子节点（包括文字节点）"}]},{name:"css",entries:[{name:"css()",desc:"获取/设置符合选择器的第一个元素的样式值"},{name:"style()",desc:"获取/设置符合选择器的第一个元素 style 属性中指定声明的值"},{name:"addStyleSheet()",desc:"将 cssText 字符串作为内联样式表内容添加到文档中"},{name:"width()",desc:"获取/设置符合选择器的第一个元素的宽度值"},{name:"height()",desc:"获取/设置符合选择器的第一个元素的高度值"},{name:"innerWidth()",desc:"获取符合选择器的第一个元素的宽度值, 注意: 该值包含 padding"},{name:"innerHeight()",desc:"获取符合选择器的第一个元素的高度值, 注意: 该值包含 padding"},{name:"outerWidth()",decs:"获取符合选择器的第一个元素的宽度值, 注意: 该值除了包含元素本身宽度和 padding 外, 还包含 border或margin"},{name:"outerHeight()",desc:"获取符合选择器的第一个元素的高度值, 注意: 该值除了包含元素本身宽度和 padding 外, 还包含 border或margin"},{name:"offset()",desc:"获取/设置符合选择器的第一个元素相对页面文档左上角的偏移值"},{name:"scrollTop()",decs:"获取/设置窗口或元素的 scrollTop 值"},{name:"scrollLeft()",desc:"获取/设置窗口或元素的 scrollLeft 值"},{name:"scrollIntoView()",desc:"使当前选择器匹配的第一个元素出现在指定容器可视区域内"},{name:"docHeight()",desc:"获取页面文档 document 的总高度"},{name:"docWidth()",desc:"获取页面文档 document 的总宽度"},{name:"viewportHeight()",desc:"获取当前可视区域的高度值"},{name:"viewportWidth()",desc:"获取当前可视区域的宽度值"},{name:"show()",desc:"显示符合选择器的所有元素"},{name:"hide()",desc:"隐藏符合选择器的所有元素"},{name:"toggle()",desc:"将符合选择器的所有元素切换显示/隐藏两个状态"}]},{name:"属性相关",entries:[{name:"val()",desc:"获取/设置符合选择器的第一个元素所的 value 值"},{name:"text()",decs:"获取/设置符合选择器的第一个元素所包含的文本值"},{name:"hasClass()",desc:"判断符合选择器的所有元素中是否有某个元素含有特定 class"},{name:"addClass()",desc:"给符合选择器的所有元素添加指定 class"},{name:"removeClass()",desc:"给符合选择器的所有元素移除指定 class"},{name:"replaceClass()",desc:"将符合选择器的所有元素的老 class 替换为新 class"},{name:"toggleClass()",decs:"操作符合选择器的所有元素, 如果存在值为 value 的 class, 则移除掉, 反之添加"},{name:"removeAttr()",desc:"移除符合选择器的所有元素的指定属性"},{name:"attr()",desc:"获取/设置符合选择器的第一个元素的属性值"},{name:"hasAttr()",desc:"判断符合选择器的所有元素中是否有某个元素含有特定属性"},{name:"prop()",desc:"获取/设置符合选择器的第一个元素的对应 property 值"},{name:"hasProp()",desc:"判断符合选择器的第一个元素是否含有特定 property 属性"},{name:"data()",desc:"获取/设置符合选择器的第一个元素的扩展属性(expando)"},{name:"removeData()",desc:"将符合选择器的所有元素的对应扩展属性( expando )删除"},{name:"hasData()",desc:"判断是否符合选择器的所有元素中的一个存在对应的扩展属性( expando )值"},{name:"nodeName()",desc:"获取符合选择器的第一个元素的小写 nodeName 值"}]},{name:"树形遍历",entries:[{name:"parent()",desc:"获取符合选择器的第一个元素的祖先元素"},{name:"next()",desc:"获取符合选择器的第一个元素的下一个同级节点"},{name:"prev()",desc:"获取符合选择器的第一个元素的上一个同级节点"},{name:"first()",desc:"获取符合选择器的第一个元素的第一个子节点"},{name:"last()",desc:"获取符合选择器的第一个元素的最后一个子节点"},{name:"siblings()",desc:"获取符合选择器的第一个元素的相应同级节点"},{name:"children()",decs:"获取符合选择器的所有非文字节点的子节点"}]},{name:"节点操作",entries:[{name:"create()",desc:"创建 dom 节点"},{name:"clone()",desc:"获取符合选择器的第一个元素的克隆元素"},{name:"html()",desc:"获取/设置符合选择器的第一个元素的 innerHTML"},{name:"outerHTML()",decs:"获取符合选择器的第一个元素的 outerHTML"},{name:"remove()",desc:"将符合选择器的所有元素从 DOM 中移除"},{name:"empty()",desc:"清除节点的所有子孙节点以及子孙节点上的事件和 data() 信息"},{name:"insertBefore()",desc:"将 newNode 插入到 refNode 之前"},{name:"insertAfter()",decs:"将 newNode 插入到 refNode 之后"},{name:"append()",desc:"将 node 追加到 parent 子节点最后"},{name:"prepend()",desc:"将 node 追加到 parent 子节点最前"},{name:"replaceWith()",desc:"将 node 节点（数组）替换为新的节点（数组） newNode"},{name:"wrap()",desc:"用 wrapperNode 分别包装符合 selector 的节点"},{name:"wrapAll()",desc:"用 wrapperNode 包装所有符合 selector 的节点"},{name:"unwrap()",desc:"移除符合 selector 的节点的父节点"},{name:"wrapInner()",desc:"用 wrapperNode 分别包装符合 selector 的节点的子节点"}]}]},{name:"event",entries:[],subcats:[{name:"Methods",entries:[{name:"on()",desc:"为符合匹配的 dom 节点的相应事件添加事件处理器"},{name:"add()",desc:"on的别名"},{name:"delegate()",desc:"为符合匹配的 dom 节点的相应事件添加事件处理器, 并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用"},{name:"detach()",desc:"从符合匹配的 dom 节点中移去相应事件的事件处理器"},{name:"remove()",desc:"detach的别名"},{name:"undelegate()",decs:"为符合匹配的 dom 节点的相应事件去除事件处理器"},{name:"fire()",desc:"执行符合匹配的 dom 节点的相应事件的事件处理器（并冒泡）和默认行为"},{name:"fireHandler()",desc:"执行符合匹配的 dom 节点的相应事件的事件处理器"},{name:"Target",desc:"序列化一系列表单元素为可提交的字符串"},{name:"Object",desc:"为所有的 ajax 请求设定默认配置"}]},{name:"DOM节点特殊事件",entries:[{name:"focusin",desc:""},{name:"focusout",desc:""},{name:"hashchange",desc:"浏览器的 hash 值发生变化时会触发此事件"},{name:"valuechange",desc:"监控 input/textarea 的值变化，当值发生变化时在绑定元素上触发该事件"},{name:"mouseenter",desc:""},{name:"mouseleave",desc:""},{name:"mousewheel",desc:"滚轮事件"}]},{name:"移动设备的特殊事件",entries:[{name:"doubleTap",desc:"触屏上的双击事件"},{name:"singleTap",desc:"触屏上的单击事件，和双击互斥"},{name:"tap",desc:"触屏上的单击事件"},{name:"tapHold",desc:"触屏上的长按事件"},{name:"swipe",desc:"触屏上当快速划过某个元素时触发"},{name:"rotateStart",desc:"触屏上开始用双指旋转某个 dom 元素时出现"},{name:"rotate",desc:"触屏上用双指旋转某个 dom 元素时出现"},{name:"rotateEnd",desc:"触屏上用双指旋转某个 dom 元素结束时触发"},{name:"pinchStart",desc:"触屏上开始用双指调整某个 dom 元素大小时出现"},{name:"pinch",desc:"触屏上用双指调整某个 dom 元素大小时出现"},{name:"pinchEnd",desc:"触屏上用双指调整某个 dom 元素大小后触发"},{name:"shake",desc:"当用户摇动设备后触发"}]}]},{name:"json",entries:[{name:"parse()",desc:"将字符串解析为json对象，解析器",slug:"parse"},{name:"stringify()",desc:"将json对象或者数组转化为字符串，序列化器",slug:"stringify"}],subcats:[]},{name:"node",entries:[],subcats:[{name:"Static Methods",entries:[{name:"all()",desc:"根据选择器字符串得到节点列表"},{name:"one()",desc:"如果参数为选择字符串, 找不到则返回 null, 其他情况下等同于 NodeList.all( args... ).item(0)"}]},{name:"获取节点",entries:[{name:"all()",desc:"得到当前节点列表内符合选择器字符串的子孙节点列表"},{name:"one()",desc:"等同于 this.all( selector ) .item(0)"},{name:"getDOMNodes()",desc:"得到该 NodeList 对象包含的原生节点数组"},{name:"getDOMNode()",decs:"得到该 NodeList 对象包含的第一个原生节点"},{name:"end()",desc:"得到上一次 NodeList.prototype.one() / NodeList.prototype.all() 操作前的 NodeList 对象"},{name:"equals()",desc:"比较当前节点列表和 others 代表的节点列表是否完全相同"},{name:"add()",desc:"返回包含合并选择器字符串匹配的元素和当前节点列表元素的新 NodeList 对象"},{name:"item()",desc:"获取包含当前节点列表 index 位置处的单个原生节点的新 NodeList 对象"},{name:"slice()",desc:"获取包含当前节点列表选定范围内原生节点的新 NodeList 对象"}]},{name:"css",entries:[{name:"scrollTop()",desc:"获取/设置当前节点列表第一个节点的滚动条的垂直位置"},{name:"scrollLeft()",decs:"获取/设置当前节点列表第一个节点的滚动条的横向位"},{name:"height()",desc:"获取/设置当前节点列表第一个节点的计算高度"},{name:"width()",desc:"获取/设置当前节点列表第一个节点的计算宽度"},{name:"addStyleSheet()",desc:"序列化一系列表单元素为可提交的字符串"}]},{name:"节点操作",entries:[{name:"append()",desc:"将参数内容插入到当前节点列表中的每个元素的末尾"},{name:"appendTo()",desc:"将当前节点列表中的每个元素插入到容器列表的每个元素的最后一个子节点后面"},{name:"prepend()",desc:"将参数内容插入到当前节点列表中的每个元素的开头"},{name:"prependTo()",decs:"将当前节点列表中的每个元素插入到容器列表的每个元素的开头"},{name:"insertBefore()",desc:"将当前列表中的每个元素插入到目标元素之前"},{name:"before()",desc:"将参数内容插入到当前列表中每个元素之前"},{name:"after()",desc:"将参数内容插入到当前列表中每个元素之后"},{name:"insertAfter()",desc:"将当前列表中的每个元素插入到目标元素之后"}]},{name:"动画",entries:[{name:"animate()",desc:"在当前节点列表上开始动画"},{name:"stop()",desc:"停止当前节点列表的动画, end, clearQueue, queueName, 涵义同 anim.Anim.stop()"},{name:"pause()",decs:"暂停当前节点列表的动画, queueName, 涵义同 anim.Anim.pause()"},{name:"resume()",desc:"继续当前节点列表的动画, queueName, 涵义同 anim.Anim.resume()"},{name:"isRunning()",desc:"判断当前 NodeList 对象是否在动画中, NodeList 中只要有一个 Node 在动画, 就会返回 truthy 值"},{name:"isPaused()",desc:"判断当前 NodeList 对象被暂停动画, NodeList 中只要有一个 Node 被暂停, 就会返回 truthy 值"},{name:"show()",desc:"当前节点列表元素以动画效果显示"},{name:"hide()",desc:"当前节点列表元素以动画效果隐藏"},{name:"toggle()",desc:"当前节点列表元素为显示时动画效果隐藏, 否则动画效果显示"},{name:"fadeIn()",decs:"当前节点列表元素以渐隐效果显示"},{name:"fadeOut()",desc:"当前节点列表元素以渐隐效果隐藏"},{name:"fadeToggle()",desc:"当前节点列表元素为显示时, 切换显示或隐藏, 且动画效果为渐隐. 参数同 toggle()"},{name:"slideDown()",desc:"当前节点列表元素从上到下滑动显示"},{name:"slideUp()",desc:"当前节点列表元素从下到上隐藏"},{name:"slideToggle()",desc:"当前节点列表元素为显示时, 切换显示或隐藏, 且动画效果为滑动展开折叠. 参数同 toggle()"}]}]},{name:"ua",entries:[{name:"trident",desc:"trident的版本号"},{name:"webkit",desc:"webkit的版本号"},{name:"gecko",desc:"gecko的版本号"},{name:"presto",decs:"presto的版本号"},{name:"chrome",desc:"chrome的版本号"},{name:"safari",desc:"safari的版本号"},{name:"firefox",desc:"firefox的版本号"},{name:"ie",desc:"ie的版本号"},{name:"opera",desc:"opera的版本号"},{name:"mobile",desc:"mobile的标识符"},{name:"core",decs:"core的标识符"},{name:"shell",desc:"shell的标识符"},{name:"os",desc:"操作系统标识符"},{name:"ipad",desc:"ipad ios 版本号"},{name:"iphone",desc:"iphone ios 版本号"},{name:"ipod",desc:"ipod ios 版本号"},{name:"ios",desc:"ios版本号"},{name:"android",decs:"android 版本号"}],subcats:[]}]});