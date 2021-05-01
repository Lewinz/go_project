/ *！
 * jQuery JavaScript库v3.6.0
 * https://jquery.com/
 *
 *包括Sizzle.js
 * https://sizzlejs.com/
 *
 * OpenJS Foundation和其他贡献者的版权
 *根据MIT许可发布
 * https://jquery.org/license
 *
 *日期：2021-03-02T17：08Z
 * /
（功能（全局，工厂）{

	“使用严格”；

	if（typeof module ===“ object” && typeof module.exports ===“ object”）{

		//对于具有适当的“窗口”的CommonJS和类似CommonJS的环境
		//存在，执行工厂并获取jQuery。
		//对于没有带有“文档”的“窗口”的环境
		//（例如Node.js），将工厂公开为module.exports。
		//这就强调了创建真实的“窗口”的需要。
		//例如var jQuery = require（“ jquery”）（window）;
		//有关更多信息，请参见票证＃14549。
		module.exports = global.document吗？
			工厂（全球，真实）：
			函数（w）{
				如果（！w.document）{
					抛出新的错误（“ jQuery需要带有文档的窗口”）；
				}
				返厂（w）;
			};
	} 别的 {
		工厂（全球）；
	}

//如果尚未定义窗口，则传递此参数
}}（typeof window！==“ undefined”？window：this，function（window，noGlobal）{

// Edge <= 12-13 +，Firefox <= 18-45 +，IE 10-11，Safari 5.1-9 +，iOS 6-9.1
//当非严格代码（例如，ASP.NET 4.5）访问严格模式时，引发异常
// arguments.callee.caller（trac-13335）。但从jQuery 3.0（2016）开始，严格模式应该很常见
//足以将所有此类尝试保存在try块中。
“使用严格”；

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat吗？函数（数组）{
	返回arr.flat.call（array）;
}：函数（数组）{
	返回arr.concat.apply（[]，array）;
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call（Object）;

var support = {};

var isFunction = function isFunction（obj）{

		//支持：Chrome <= 57，Firefox <= 52
		//在某些浏览器中，typeof为HTML <object>元素返回“功能”
		//（即`typeof document.createElement（“ object”）===“ function”`）。
		//我们不想将* any * DOM节点归类为一个函数。
		//支持：QtWeb <= 3.8.5，WebKit <= 534.34，wkhtmltopdf工具<= 0.12.5
		//对于旧版WebKit，typeof为HTML集合返回“函数”
		//（例如，`typeof document.getElementsByTagName（“ div”）===“ function”`）。（gh-4756）
		返回typeof obj ===“函数” && typeof obj.nodeType！==“数字” &&
			typeof obj.item！==“函数”;
	};


var isWindow = function isWindow（obj）{
		return obj！= null && obj === obj.window;
	};


var document = window.document;



	var reserveddScriptAttributes = {
		类型：true，
		src：是的，
		随机数：是的，
		noModule：正确
	};

	函数DOMEval（代码，节点，文档）{
		doc = doc || 文档;

		var i，val，
			脚本= doc.createElement（“脚本”）;

		script.text =代码；
		如果（节点）{
			对于（我在preservedScriptAttributes中）{

				//支持：Firefox 64 +，Edge 18+
				//有些浏览器不支持脚本的“ nonce”属性。
				//另一方面，仅使用`getAttribute`还是不够的
				//只要将`nonce`属性重置为一个空字符串
				//成为浏览上下文连接。
				//参见https://github.com/whatwg/html/issues/2369
				//参见https://html.spec.whatwg.org/#nonce-attributes
				//添加了`node.getAttribute`检查是为了
				//`jQuery.globalEval`，以便它可以伪造一个包含随机数的节点
				//通过一个对象。
				val =节点[i] || node.getAttribute && node.getAttribute（i）;
				如果（val）{
					script.setAttribute（i，val）;
				}
			}
		}
		doc.head.appendChild（脚本）.parentNode.removeChild（脚本）;
	}


函数toType（obj）{
	如果（obj == null）{
		返回obj +“”;
	}

	//支持：仅Android <= 2.3（可正常运行RegExp）
	返回typeof obj ===“对象” || typeof obj ===“功能”？
		class2type [toString.call（obj）] || “目的” ：
		typeof obj;
}
/ *全局符号* /
//在.eslintrc.json中定义此全局变量会产生使用全局变量的危险
//在另一个地方不受保护，只为该模块定义全局变量似乎更安全



变种
	版本=“ 3.6.0”，

	//定义jQuery的本地副本
	jQuery = function（选择器，上下文）{

		// jQuery对象实际上只是“增强”的初始化构造函数
		//如果调用jQuery，则需要初始化（如果不包含，则允许抛出错误）
		返回新的jQuery.fn.init（选择器，上下文）;
	};

jQuery.fn = jQuery.prototype = {

	//正在使用的jQuery当前版本
	jQuery：版本，

	构造函数：jQuery，

	// jQuery对象的默认长度为0
	长度：0，

	toArray：function（）{
		返回slice.call（this）;
	}，

	//获取匹配的元素集中的第N个元素，或
	//将整个匹配的元素集作为一个干净的数组
	get：function（num）{

		//返回干净数组中的所有元素
		如果（num == null）{
			返回slice.call（this）;
		}

		//仅返回集合中的一个元素
		返回num <0吗？this [num + this.length]：this [num];
	}，

	//取一个元素数组并将其压入堆栈
	//（返回新的匹配元素集）
	pushStack：function（elems）{

		//建立一个新的jQuery匹配元素集
		var ret = jQuery.merge（this.constructor（），elems）;

		//将旧对象添加到堆栈中（作为参考）
		ret.prevObject =这个;

		//返回新形成的元素集
		返回ret
	}，

	//对匹配集中的每个元素执行一个回调。
	每个：function（callback）{
		返回jQuery.each（this，callback）;
	}，

	地图：function（callback）{
		返回this.pushStack（jQuery.map（this，function（elem，i）{
			返回callback.call（elem，i，elem）;
		}））;
	}，

	切片：function（）{
		返回this.pushStack（slice.apply（this，arguments））;
	}，

	首先：function（）{
		返回this.eq（0）;
	}，

	最后：function（）{
		返回this.eq（-1）;
	}，

	偶数：function（）{
		返回this.pushStack（jQuery.grep（this，function（_elem，i）{
			返回（i + 1）％2;
		}））;
	}，

	奇数：function（）{
		返回this.pushStack（jQuery.grep（this，function（_elem，i）{
			返回我％2;
		}））;
	}，

	eq：function（i）{
		var len = this.length，
			j = + i +（i <0？len：0）;
		返回this.pushStack（j> = 0 && j <len？[this [j]]：[]）;
	}，

	结束：function（）{
		返回this.prevObject || this.constructor（）;
	}，

	// 仅限内部使用。
	//表现得像Array的方法，而不像jQuery方法。
	推推，
	排序：arr.sort，
	接头：arr.splice
};

jQuery.extend = jQuery.fn.extend = function（）{
	var选项，名称，src，复制，copyIsArray，克隆，
		目标=参数[0] || {}，
		i = 1
		长度= arguments.length，
		深=假;

	//处理深度复制情况
	if（typeof target ===“ boolean”）{
		深度=目标；

		//跳过布尔值和目标
		目标=参数[i] || {};
		i ++;
	}

	//处理目标为字符串或其他内容时的情况（可能在深层复制中）
	if（typeof target！==“ object” &&！isFunction（target））{
		target = {};
	}

	//如果仅传递一个参数，则扩展jQuery本身
	如果（i ===长度）{
		目标=这个；
		一世 - ;
	}

	对于（; i <length; i ++）{

		//仅处理非null / undefined值
		if（（options = arguments [i]）！= null）{

			//扩展基础对象
			对于（选项中的名称）{
				复制=选项[名称];

				//防止对象原型污染
				//防止永无止境的循环
				如果（名称===“ __proto__” ||目标===复制）{
					继续;
				}

				//如果要合并纯对象或数组，则进行递归
				如果（深入&&复制&&（jQuery.isPlainObject（复制）||
					（copyIsArray = Array.isArray（copy））））{
					src = target [name];

					//确保源值的类型正确
					如果（copyIsArray &&！Array.isArray（src））{
						克隆= [];
					} else if（！copyIsArray &&！jQuery.isPlainObject（src））{
						clone = {};
					} 别的 {
						clone = src;
					}
					copyIsArray = false;

					//切勿移动原始对象，将其克隆
					target [name] = jQuery.extend（deep，clone，copy）;

				//不要输入未定义的值
				} else if（复制！==未定义）{
					target [名称] =复制；
				}
			}
		}
	}

	//返回修改后的对象
	返回目标；
};

jQuery.extend（{

	//页面上每个jQuery副本唯一
	expando：“ jQuery” +（版本+ Math.random（））.replace（/ \ D / g，“”），

	//假设jQuery在没有ready模块的情况下已经准备就绪
	isReady：是的，

	错误：function（msg）{
		抛出新的Error（msg）;
	}，

	noop：function（）{}，

	isPlainObject：function（obj）{
		var proto，Ctor；

		//检测明显的负面影响
		//使用toString而不是jQuery.type来捕获宿主对象
		如果（！obj || toString.call（obj）！==“ [object Object]”）{
			返回false；
		}

		proto = getProto（obj）;

		//没有原型的对象（例如Object.create（null））是普通的
		如果（！proto）{
			返回true；
		}

		//带有原型的对象是简单的，前提是它们是由全局Object函数构造的
		Ctor = hasOwn.call（proto，“ constructor”）&& proto.constructor;
		返回typeof Ctor ===“ function” && fnToString.call（Ctor）=== ObjectFunctionString;
	}，

	isEmptyObject：function（obj）{
		var name;

		对于（obj中的名称）{
			返回false；
		}
		返回true；
	}，

	//在提供的上下文中评估脚本；跌回全球
	//如果未指定。
	globalEval：函数（代码，选项，文档）{
		DOMEval（代码，{随机数：options && options.nonce}，doc）;
	}，

	每个：function（obj，callback）{
		var length，i = 0；

		如果（isArrayLike（obj））{
			长度= obj.length;
			对于（; i <length; i ++）{
				如果（callback.call（obj [i]，i，obj [i]）=== false）{
					休息;
				}
			}
		} 别的 {
			为（i在obj中）{
				如果（callback.call（obj [i]，i，obj [i]）=== false）{
					休息;
				}
			}
		}

		返回obj;
	}，

	//结果仅供内部使用
	makeArray：function（arr，results）{
		var ret =结果|| [];

		如果（arr！= null）{
			如果（isArrayLike（Object（arr）））{
				jQuery.merge（ret，
					typeof arr ===“字符串”？
						[arr]：arr
				）;
			} 别的 {
				push.call（ret，arr）;
			}
		}

		返回ret
	}，

	inArray：function（elem，arr，i）{
		返回arr == null吗？-1：indexOf.call（arr，elem，i）;
	}，

	//支持：仅Android <= 4.0，仅PhantomJS 1
	// push.apply（_，arraylike）抛出古老的WebKit
	合并：功能（第一，第二）{
		var len = + second.length，
			j = 0，
			i = first.length;

		对于（; j <len; j ++）{
			first [i ++] = second [j];
		}

		first.length = i;

		先返回
	}，

	grep：function（elems，callback，invert）{
		var callbackInverse，
			匹配= []，
			我= 0，
			长度= elems.length，
			callbackExpect =！invert;

		//遍历数组，仅保存项目
		//通过验证函数
		对于（; i <length; i ++）{
			callbackInverse =！callback（elems [i]，i）;
			如果（callbackInverse！== callbackExpect）{
				matchs.push（elems [i]）;
			}
		}

		返回比赛；
	}，

	// arg仅供内部使用
	map：function（elems，callback，arg）{
		var长度，值，
			我= 0，
			ret = [];

		//遍历数组，将每个项目转换为它们的新值
		如果（isArrayLike（elems））{
			长度= elems.length;
			对于（; i <length; i ++）{
				值=回调（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}

		//遍历对象上的每个键，
		} 别的 {
			对于（我以elems表示）{
				值=回调（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}
		}

		//展平任何嵌套数组
		返回flat（ret）;
	}，

	//对象的全局GUID计数器
	GUID：1

	//核心中未使用jQuery.support，但其他项目附加了它们
	//它的属性，因此它必须存在。
	支持：支持
}）；

if（typeof Symbol ===“ function”）{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

//填充class2type映射
jQuery.each（“布尔型数字字符串函数数组日期RegExp对象错误符号” .split（“”），
	函数（_i，名称）{
		class2type [“ [object” + name +“]”] = name.toLowerCase（）;
	}）；

函数isArrayLike（obj）{

	//支持：仅适用于真实的iOS 8.2（在模拟器中不可复制）
	//`in`检查用于防止JIT错误（gh-2145）
	//由于误报，此处未使用hasOwn
	//关于IE中的节点列表长度
	var length = !! obj && obj && obj.length中的“ length”，
		类型= toType（obj）;

	如果（isFunction（obj）|| isWindow（obj））{
		返回false；
	}

	返回类型===“数组” || 长度=== 0 ||
		typeof length ===“ number” && length> 0 &&（length-1）in obj;
}
var Sizzle =
/ *！
 * Sizzle CSS选择器引擎v2.3.6
 * https://sizzlejs.com/
 *
 * JS基金会和其他贡献者的版权
 *根据MIT许可发布
 * https://js.foundation/
 *
 *日期：2021-02-16
 * /
（function（window）{
var i，
	支持，
	Expr，
	getText，
	isXML，
	标记化，
	编译，
	选择，
	externalmostContext，
	sortInput，
	hasDuplicate，

	//本地文档vars
	setDocument，
	文档，
	docElem，
	documentIsHTML，
	rbuggyQSA，
	rbuggyMatches，
	火柴，
	包含

	//特定于实例的数据
	expando =“嘶嘶声” + 1 *新的Date（），
	preferredDoc = window.document，
	dirruns = 0，
	完成= 0，
	classCache = createCache（），
	tokenCache = createCache（），
	editorCache = createCache（），
	nonnativeSelectorCache = createCache（），
	sortOrder = function（a，b）{
		如果（a === b）{
			hasDuplicate = true;
		}
		返回0;
	}，

	//实例方法
	hasOwn =（{}）.hasOwnProperty，
	arr = []，
	pop = arr.pop，
	pushNative = arr.push，
	push = arr.push，
	slice = arr.slice，

	//使用精简的indexOf，因为它比本机快
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function（list，elem）{
		var i = 0，
			len = list.length;
		为（; i <len; i ++）{
			如果（list [i] === elem）{
				返回我
			}
		}
		返回-1;
	}，

	booleans =“选中|选中|异步|自动对焦|自动播放|控件|延迟|禁用|隐藏|” +
		“ ismap | loop | multiple | open | reading | required | scoped”，

	// 常用表达

	// http://www.w3.org/TR/css3-selectors/#whitespace
	空格=“ [\\ x20 \\ t \\ r \\ n \\ f]”，

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	标识符=“（？：\\\\ [\\ da-fA-F] {1,6}” +空格+
		“？| \\\\ [^ \\ r \\ n \\ f] | [\\ w-] | [^ \ 0-\\ x7f]）+”，

	//属性选择器：http://www.w3.org/TR/selectors/#attribute-selectors
	属性=“ \\ [” +空格+“ *（” +标识符+“）（?:” +空格+

		//运算子（撷取2）
		“ *（[* ^ $ |！〜]？=）” +空格+

		//“属性值必须是CSS标识符[捕获5]
		//或字符串[捕获3或捕获4]“
		“ *（？：'（（？：\\\\。| [^ \\\\']）*）'| \”（（？ ）*）\“ |（” +标识符+“））|）”）+
		空格+“ * \\]”，

	pseudos =“ :(” +标识符+“）（？：\\（（” +

		//为了减少需要在preFilter中进行标记化的选择器的数量，请使用以下参数：
		// 1.带引号（捕获3；捕获4或捕获5）
		“（'（（?? \\\\。| [^ \\\\']）*）'| \”（（？：\\\\。| [^ \\\\“]）*） \“）|” +

		// 2.简单（捕获6）
		“（（（？：\\\\。| [^ \\\\（）[\\]] |” +属性+“）*）|” +

		// 3.其他（捕获2）
		“。*” +
		“）\\）|）”，

	//前导和非转义的尾随空白，捕获后者之前的一些非空白字符
	rwhitespace = new RegExp（空格+“ +”，“ g”），
	rtrim =新的RegExp（“ ^” +空格+“ + |（（？：^ | [^ \\\\]]（？：\\\\。）*）” +
		空格+“ + $”，“ g”），

	rcomma = new RegExp（“ ^” +空格+“ *，” +空格+“ *”），
	rcombinators =新的RegExp（“ ^” +空格+“ *（[> +〜] |” +空格+“）” +空格+
		“ *”），
	rdescend =新的RegExp（空格+“ |>”），

	rpseudo =新的RegExp（pseudos），
	ridentifier =新的RegExp（“ ^” +标识符+“ $”），

	matchExpr = {
		“ ID”：新的RegExp（“ ^＃（” +标识符+“）”），
		“ CLASS”：新的RegExp（“ ^ \\。（” +标识符+“）”），
		“ TAG”：新的RegExp（“ ^（” +标识符+“ | [*]）”），
		“ ATTR”：新的RegExp（“ ^” + attribute），
		“ PSEUDO”：新的RegExp（“ ^” + pseudos），
		“ CHILD”：新的RegExp（“ ^ :( only | first | last | nth | nth-last）-（child | of-type）（？：\\（” +
			空格+“ *（even | odd |（（[[+-] |）（\\ d *）n |）” +空格+“ *（？：（[+-] |）” +
			空格+“ *（\\ d +）|））” +空格+“ * \\）|）”，“ i”），
		“ bool”：新的RegExp（“ ^（?:” +布尔值+“）$”，“ i”），

		//用于实现.is（）的库
		//我们将其用于`select`中的POS匹配
		“ needsContext”：新的RegExp（“ ^” +空格+
			“ * [> +〜] |：（（even | odd | eq | gt | lt | nth | first | last）（？：\\（” +空格+
			“ *（（？：-\\ d）？\\ d *）” +空格+“ * \\）|）（？= [^-] | $）”，“ i”）
	}，

	rhtml = / HTML $ / i，
	rinputs = / ^（?: input | select | textarea | button）$ / i，
	rheader = / ^ h \ d $ / i，

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /，

	//易于解析/可检索的ID或TAG或CLASS选择器
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/，

	rsibling = / [+〜] /，

	// CSS转义
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp（“ \\\\ [\\ da-fA-F] {1,6}” +空格+“？| \\\\（[^ \\ r \\ n \\ f]）” ， “G” ），
	funescape = function（escape，nonHex）{
		var high =“ 0x” + escape.slice（1）-0x10000;

		返回nonHex吗？

			//从非十六进制转义序列中去除反斜杠前缀
			非十六进制：

			//将十六进制转义序列替换为已编码的Unicode代码点
			//支持：IE <= 11 +
			//对于基本多语言平面（BMP）以外的值，请手动构造一个
			//代理对
			高<0？
				String.fromCharCode（high + 0x10000）：
				String.fromCharCode（high >> 10 | 0xD800，high＆0x3FF | 0xDC00）;
	}，

	// CSS字符串/标识符序列化
	// https://drafts.c​​sswg.org/cssom/#common-serializing-idioms
	rcssescape = /（[\ 0- \ x1f \ x7f] | ^-？\ d）| ^-$ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w-] / g，
	fcssescape = function（ch，asCodePoint）{
		如果（asCodePoint）{

			// U + 0000 NULL变为U + FFFD替换字符
			如果（ch ===“ \ 0”）{
				返回“ \ uFFFD”；
			}

			//控制字符和（取决于位置）数字作为代码点转义
			返回ch.slice（0，-1）+“ \\” +
				ch.charCodeAt（ch.length-1）.toString（16）+“”;
		}

		//其他可能特殊的ASCII字符被反斜杠转义
		返回“ \\” + ch;
	}，

	//用于iframe
	//参见setDocument（）
	//删除函数包装会导致“权限被拒绝”
	// IE中的错误
	unloadHandler = function（）{
		setDocument（）;
	}，

	inDisabledFieldset = addCombinator（
		函数（elem）{
			返回elem.disabled === true && elem.nodeName.toLowerCase（）===“ fieldset”;
		}，
		{dir：“ parentNode”，下一个：“ legend”}
	）;

//优化push.apply（_，NodeList）
尝试 {
	push.apply（
		（arr = slice.call（preferredDoc.childNodes）），
		preferredDoc.childNodes
	）;

	//支持：Android <4.0
	//检测静默失败的push.apply
	// eslint-disable-next-line no-unused-expressions
	arr [preferredDoc.childNodes.length] .nodeType;
}抓住（e）{
	推= {适用：arr.length吗？

		//如果可能的话，利用切片
		功能（目标，els）{
			pushNative.apply（target，slice.call（els））;
		}：

		//支持：IE <9
		//否则直接附加
		功能（目标，els）{
			var j = target.length，
				i = 0;

			//不信任NodeList.length
			while（（target [j ++] = els [i ++]））{}
			target.length = j-1;
		}
	};
}

函数Sizzle（选择器，上下文，结果，种子）{
	var m，i，elem，nid，match，groups，newSelector，
		newContext = context && context.ownerDocument，

		// nodeType默认为9，因为上下文默认为document
		nodeType =上下文？context.nodeType：9;

	结果=结果|| [];

	//使用无效的选择器或上下文从调用中提早返回
	if（typeof选择器！==“ string” ||！selector ||
		nodeType！== 1 && nodeType！== 9 && nodeType！== 11）{

		返回结果；
	}

	//尝试在HTML文档中使用快捷方式查找操作（而不是过滤器）
	如果（！seed）{
		setDocument（context）;
		上下文=上下文|| 文档;

		如果（documentIsHTML）{

			//如果选择器足够简单，请尝试使用“ get * By *” DOM方法
			//（除了DocumentFragment上下文，该方法不存在）
			if（nodeType！== 11 &&（match = rquickExpr.exec（选择器）））{

				// ID选择器
				如果（（m = match [1]））{

					//文档上下文
					如果（nodeType === 9）{
						如果（（elem = context.getElementById（m）））{

							//支持：IE，Opera，Webkit
							// TODO：确定版本
							// getElementById可以按名称而不是ID匹配元素
							如果（elem.id === m）{
								results.push（elem）;
								返回结果；
							}
						} 别的 {
							返回结果；
						}

					//元素上下文
					} 别的 {

						//支持：IE，Opera，Webkit
						// TODO：确定版本
						// getElementById可以按名称而不是ID匹配元素
						如果（newContext &&（elem = newContext.getElementById（m））&&
							contains（context，elem）&&
							elem.id === m）{

							results.push（elem）;
							返回结果；
						}
					}

				//类型选择器
				} else if（match [2]）{
					push.apply（results，context.getElementsByTagName（selector））;
					返回结果；

				//类选择器
				} else if（（m = match [3]）&& support.getElementsByClassName &&
					context.getElementsByClassName）{

					push.apply（results，context.getElementsByClassName（m））;
					返回结果；
				}
			}

			//利用querySelectorAll
			如果（support.qsa &&
				！nonnativeSelectorCache [选择器+“”] &&
				（！rbuggyQSA ||！rbuggyQSA.test（选择器））&&

				//支持：仅IE 8
				//排除对象元素
				（nodeType！== 1 || context.nodeName.toLowerCase（）！==“ object”））{

				newSelector =选择器;
				newContext =上下文；

				// qSA在评估子级或子级时会考虑作用域范围之外的元素
				//后代组合器，这不是我们想要的。
				//在这种情况下，我们通过在
				//带有ID选择器的列表，该选择器引用了作用域上下文。
				//当使用前导组合器时，也必须使用该技术
				//，因为这样的选择器无法被querySelectorAll识别。
				//感谢安德鲁·杜邦（Andrew Dupont）的这项技术。
				如果（nodeType === 1 &&
					（rdescend.test（选择器）|| rcombinators.test（选择器）））{

					//展开同级选择器的上下文
					newContext = rsibling.test（选择器）&& testContext（context.parentNode）||
						语境;

					//如果浏览器，我们可以使用：scope代替ID hack
					//支持它，并且如果我们不更改上下文。
					如果（newContext！==上下文||！support.scope）{

						//捕获上下文ID，必要时先设置
						如果（（nid = context.getAttribute（“ id”）））{
							nid = nid.replace（rcssescape，fcssescape）;
						} 别的 {
							context.setAttribute（“ id”，（nid = expando））;
						}
					}

					//为列表中的每个选择器添加前缀
					组= tokenize（选择器）;
					i = groups.length;
					当我 -  ） {
						groups [i] =（nid？“＃” + nid：“：scope”）+“” +
							toSelector（groups [i]）;
					}
					newSelector = groups.join（“，”）;
				}

				尝试 {
					push.apply（结果，
						newContext.querySelectorAll（newSelector）
					）;
					返回结果；
				} catch（qsaError）{
					nonnativeSelectorCache（选择器，true）;
				} 最后 {
					如果（nid === expando）{
						context.removeAttribute（“ id”）;
					}
				}
			}
		}
	}

	// 所有其他人
	返回select（selector.replace（rtrim，“ $ 1”），上下文，结果，种子）;
}

/ **
 *创建有限大小的键值缓存
 * @returns {function（string，object）}在将Object数据存储在自身上之后，返回Object数据
 *属性名称（后缀为空格）字符串和（如果缓存大于Expr.cacheLength）
 *删除最早的条目
 * /
函数createCache（）{
	var keys = [];

	函数缓存（键，值）{

		//使用（key +“”）避免与本机原型属性发生冲突（请参见问题＃157）
		if（keys.push（key +“”）> Expr.cacheLength）{

			//仅保留最新的条目
			删除缓存[keys.shift（）];
		}
		return（cache [key +“”] = value）;
	}
	返回缓存；
}

/ **
 *标记Sizzle特殊使用的功能
 * @param {Function} fn标记的功能
 * /
函数markFunction（fn）{
	fn [expando] = true;
	返回fn;
}

/ **
 *支持使用元素进行测试
 * @param {Function} fn传递创建的元素并返回布尔结果
 * /
函数assert（fn）{
	var el = document.createElement（“ fieldset”）;

	尝试 {
		返回!! fn（el）;
	}抓住（e）{
		返回false；
	} 最后 {

		//默认情况下从其父级删除
		如果（el.parentNode）{
			el.parentNode.removeChild（el）;
		}

		//在IE中释放内存
		el = null;
	}
}

/ **
 *为所有指定的属性添加相同的处理程序
 * @param {String} attrs管道分隔的属性列表
 * @param {Function}处理程序将应用的方法
 * /
函数addHandle（attrs，handler）{
	var arr = attrs.split（“ |”），
		i =长度

	当我 -  ） {
		Expr.attrHandle [arr [i]] =处理程序；
	}
}

/ **
 *检查两个兄弟姐妹的文档顺序
 * @param {Element}一个
 * @param {Element} b
 * @returns {Number}如果a在b之前，则返回小于0；如果a在b之后，则返回大于0。
 * /
函数siblingCheck（a，b）{
	var cur = b && a，
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex-b.sourceIndex;

	//如果两个节点都可用，请使用IE sourceIndex
	如果（diff）{
		返回差异
	}

	//检查b是否跟随a
	如果（cur）{
		while（（cur = cur.nextSibling））{
			如果（cur === b）{
				返回-1;
			}
		}
	}

	返回一个？1：-1；
}

/ **
 *返回用于输入类型的伪函数
 * @param {String}类型
 * /
函数createInputPseudo（type）{
	返回函数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		返回名称===“输入” && elem.type ===类型；
	};
}

/ **
 *返回用于按钮伪函数的函数
 * @param {String}类型
 * /
函数createButtonPseudo（type）{
	返回函数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		return（name ===“ input” || name ===“ button”）&& elem.type ===类型；
	};
}

/ **
 *返回用于：enabled /：disabled的伪函数
 * @param {Boolean} disable对：disabled为true；对于：enabled为false
 * /
函数createDisabledPseudo（disable）{

	//已知：disabled误报：fieldset [disabled]>图例：nth-​​of-type（n + 2）：can-disable
	返回函数（elem）{

		//只有某些元素可以匹配：enabled或：disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if（elem中的“ form”）{

			//检查相关的非禁用元素上的继承的禁用性：
			// *在禁用的字段集中列出了与表单相关的元素
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *禁用的optgroup中的选项元素
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//所有此类元素都具有“ form”属性。
			如果（elem.parentNode && elem.disabled === false）{

				//如果存在，则选项元素遵循父optgroup
				if（elem中的“ label”）{
					if（elem.parentNode中的“ label”）{
						返回elem.parentNode.disabled ===禁用;
					} 别的 {
						返回elem.disabled ===禁用;
					}
				}

				//支持：IE 6-11
				//使用isDisabled快捷方式属性检查禁用的字段集祖先
				返回elem.isDisabled ===禁用||

					//如果没有isDisabled，请手动检查
					/ * jshint -W018 * /
					elem.isDisabled！==！disabled &&
					inDisabledFieldset（elem）===禁用;
			}

			返回elem.disabled ===禁用;

		//在信任disabled属性之前，尝试清除无法禁用的元素。
		//有些受害者陷入了我们的网络（标签，图例，菜单，曲目），但不应
		//甚至存在于它们上，更不用说具有布尔值了。
		} else if（elem中的“ label”）{
			返回elem.disabled ===禁用;
		}

		//其余元素既不是：enabled也不是：disabled
		返回false；
	};
}

/ **
 *返回要在伪代码中用于位置的函数
 * @param {功能} fn
 * /
函数createPositionalPseudo（fn）{
	return markFunction（function（arguments）{
		参数= +参数;
		return markFunction（function（seed，matches）{
			var j，
				matchIndexes = fn（[]，seed.length，参数），
				i = matchIndexes.length;

			//匹配在指定索引处找到的元素
			当我 -  ） {
				if（seed [（j = matchIndexes [i]）]）{
					seed [j] =！（matches [j] = seed [j]）;
				}
			}
		}）；
	}）；
}

/ **
 *作为Sizzle上下文检查节点的有效性
 * @param {Element | Object =}上下文
 * @returns {Element | Object | Boolean}输入节点（如果可接受），否则为假值
 * /
函数testContext（context）{
	返回上下文&& typeof context.getElementsByTagName！==“未定义” &&上下文；
}

//公开支持变量以方便使用
support = Sizzle.support = {};

/ **
 *检测XML节点
 * @param {Element | Object} elem元素或文档
 * @returns {Boolean}真，如果elem是非HTML XML节点
 * /
isXML = Sizzle.isXML = function（elem）{
	var名称空间= elem && elem.namespaceURI，
		docElem = elem &&（elem.ownerDocument || elem）.documentElement;

	//支持：IE <= 8
	//在documentElement尚不存在时（例如在加载iframe的内部）假定HTML
	// https://bugs.jquery.com/ticket/4833
	返回！rhtml.test（名称空间|| docElem && docElem.nodeName ||“ HTML”）;
};

/ **
 *根据当前文档设置一次与文档相关的变量
 * @param {Element | Object} [doc]用于设置文档的元素或文档对象
 * @returns {Object}返回当前文档
 * /
setDocument = Sizzle.setDocument = function（node）{
	var hasCompare，subWindow，
		doc =节点？node.ownerDocument || 节点：preferredDoc;

	//如果文档无效或已被选择，则提早返回
	//支持：IE 11 +，Edge 17-18 +
	//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
	//两个文件；浅层比较工作。
	// eslint-disable-next-line eqeqeq
	if（doc == document || doc.nodeType！== 9 ||！doc.documentElement）{
		退还文件；
	}

	//更新全局变量
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =！isXML（document）;

	//支持：IE 9-11 +，Edge 12-18+
	//卸载后访问iframe文档会引发“权限被拒绝”错误（jQuery＃13936）
	//支持：IE 11 +，Edge 17-18 +
	//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
	//两个文件；浅层比较工作。
	// eslint-disable-next-line eqeqeq
	如果（preferredDoc！=文档&&
		（subWindow = document.defaultView）&& subWindow.top！== subWindow）{

		//支持：IE 11，Edge
		如果（subWindow.addEventListener）{
			subWindow.addEventListener（“ unload”，unloadHandler，false）;

		//支持：仅IE 9-10
		} else if（subWindow.attachEvent）{
			subWindow.attachEvent（“ onunload”，unloadHandler）;
		}
	}

	//支持：IE 8-11+，Edge 12-18+，仅Chrome <= 16-25，仅Firefox <= 3.6-31，
	//仅Safari 4-5，Opera <= 11.6-仅12.x
	// IE / Edge和较旧的浏览器不支持：scope伪类。
	//支持：仅Safari 6.0
	// Safari 6.0支持：scope，但这是：root的别名。
	support.scope = assert（function（el）{
		docElem.appendChild（el）.appendChild（document.createElement（“ div”））;
		返回typeof el.querySelectorAll！==“未定义” &&
			！el.querySelectorAll（“：scope fieldset div”）.length;
	}）；

	/* 属性
	-------------------------------------------------- -------------------- * /

	//支持：IE <8
	//验证getAttribute确实返回属性而不是属性
	//（IE8布尔值除外）
	support.attributes = assert（function（el）{
		el.className =“ i”;
		return！el.getAttribute（“ className”）;
	}）；

	/ * getElement（s）依*
	-------------------------------------------------- -------------------- * /

	//检查getElementsByTagName（“ *”）是否仅返回元素
	support.getElementsByTagName = assert（function（el）{
		el.appendChild（document.createComment（“”））;
		返回！el.getElementsByTagName（“ *”）.length;
	}）；

	//支持：IE <9
	support.getElementsByClassName = rnative.test（document.getElementsByClassName）;

	//支持：IE <10
	//检查getElementById是否按名称返回元素
	//损坏的getElementById方法无法获取以编程方式设置的名称，
	//因此使用环形交叉路口getElementsByName测试
	support.getById = assert（function（el）{
		docElem.appendChild（el）.id = expando;
		返回！document.getElementsByName || ！document.getElementsByName（expando）.length;
	}）；

	// ID过滤器并查找
	如果（support.getById）{
		Expr.filter [“ ID”] = function（id）{
			var attrId = id.replace（runescape，funescape）;
			返回函数（elem）{
				return elem.getAttribute（“ id”）=== attrId;
			};
		};
		Expr.find [“ ID”] = function（id，context）{
			如果（typeof context.getElementById！==“ undefined” && documentIsHTML）{
				var elem = context.getElementById（id）;
				返回元素？[elem]：[];
			}
		};
	} 别的 {
		Expr.filter [“ ID”] = function（id）{
			var attrId = id.replace（runescape，funescape）;
			返回函数（elem）{
				var node = typeof elem.getAttributeNode！==“未定义” &&
					elem.getAttributeNode（“ id”）;
				返回节点&& node.value === attrId;
			};
		};

		//支持：仅IE 6-7
		// getElementById作为查找快捷方式不可靠
		Expr.find [“ ID”] = function（id，context）{
			如果（typeof context.getElementById！==“ undefined” && documentIsHTML）{
				var node，i，elems，
					elem = context.getElementById（id）;

				如果（elem）{

					//验证id属性
					node = elem.getAttributeNode（“ id”）;
					如果（node && node.value === id）{
						return [elem];
					}

					//退回到getElementsByName
					elems = context.getElementsByName（id）;
					i = 0;
					while（（elem = elems [i ++]））{
						node = elem.getAttributeNode（“ id”）;
						如果（node && node.value === id）{
							return [elem];
						}
					}
				}

				返回 [];
			}
		};
	}

	// 标签
	Expr.find [“ TAG”] = support.getElementsByTagName吗？
		函数（标签，上下文）{
			如果（typeof context.getElementsByTagName！==“未定义”）{
				返回context.getElementsByTagName（tag）;

			// DocumentFragment节点没有gEBTN
			} else if（support.qsa）{
				返回context.querySelectorAll（tag）;
			}
		}：

		函数（标签，上下文）{
			var elem，
				tmp = []，
				我= 0，

				//巧合的是，一个（破碎的）gEBTN也出现在DocumentFragment节点上
				结果= context.getElementsByTagName（tag）;

			//过滤掉可能的评论
			如果（标签===“ *”）{
				while（（elem = results [i ++]））{
					如果（elem.nodeType === 1）{
						tmp.push（elem）;
					}
				}

				返回tmp;
			}
			返回结果；
		};

	// 班级
	Expr.find [“ CLASS”] = support.getElementsByClassName && function（className，context）{
		如果（typeof context.getElementsByClassName！==“ undefined” && documentIsHTML）{
			返回context.getElementsByClassName（className）;
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA和matchesSelector支持

	//当true时，matchesSelector（：active）报告为false（IE9 / Opera 11.5）
	rbuggyMatches = [];

	// qSa（：focus）为true时报告false（Chrome 21）
	//由于IE8 / 9中的错误引发了错误，因此我们允许这样做
	//只要在iframe上访问`document.activeElement`
	//因此，我们允许：focus始终通过QSA以避免IE错误
	//参见https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	如果（（support.qsa = rnative.test（document.querySelectorAll）））{

		//构建QSA正则表达式
		//迭戈·佩里尼（Diego Perini）采用的正则表达式策略
		assert（function（el）{

			var输入;

			//故意将选择设置为空字符串
			//这是为了测试IE对未显式的处理
			//设置布尔内容属性，
			//因为它的存在应该足够
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild（el）.innerHTML =“ <a id='" + expando + "'> </a>” +
				“ <选择ID ='” + expando +“-\ r \\'msallowcapture =”>“ +
				“ <option selected =”“> </ option> </ select>”;

			//支持：IE8，Opera 11-12.16
			//当空字符串后接^ =或$ =或* =时，不应选择任何内容
			//测试属性在Opera中必须是未知的，但对于WinRT是“安全”的
			// https://msdn.microsoft.com/zh-CN/library/ie/hh465388.aspx#attribute_section
			if（el.querySelectorAll（“ [msallowcapture ^ ='']”）.length）{
				rbuggyQSA.push（“ [* ^ $] =” +空格+“ *（?:” | \“ \”）“）;
			}

			//支持：IE8
			//布尔属性和“值”未正确处理
			if（！el.querySelectorAll（“ [selected]”）.length）{
				rbuggyQSA.push（“ \\ [” +空格+“ *（?: value |” +布尔值+“）”）；
			}

			//支持：Chrome <29，Android <4.4，Safari <7.0 +，iOS <7.0 +，PhantomJS <1.9.8+
			if（！el.querySelectorAll（“ [id〜=” + expando +“-]”）.length）{
				rbuggyQSA.push（“〜=”）;
			}

			//支持：IE 11 +，Edge 15-18 +
			//在某些情况下，IE 11 / Edge无法在“ [name ='']”查询中找到元素。
			//在选择生效之前，向文档中添加一个临时属性
			//解决问题。
			//有趣的是，IE 10及更低版本似乎没有问题。
			输入= document.createElement（“ input”）;
			input.setAttribute（“ name”，“”）;
			el.appendChild（input）;
			如果（！el.querySelectorAll（“ [name =”]“”）。length）{
				rbuggyQSA.push（“ \\ [” +空格+“ * name” +空格+“ * =” +
					空格+“ *（?:” | \“ \”）“）;
			}

			// Webkit / Opera-：checked应该返回选择的选项元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8在这里抛出错误，以后将不会看到测试
			如果（！el.querySelectorAll（“：checked”）.length）{
				rbuggyQSA.push（“：checked”）;
			}

			//支持：Safari 8 +，iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//页内“ selector＃id同级组合选择器”失败
			if（！el.querySelectorAll（“ a＃” + expando +“ + *”）.length）{
				rbuggyQSA.push（“。＃。+ [+〜]”）;
			}

			//支持：Firefox <= 3.6-仅5
			//旧版Firefox不会抛出错误转义的标识符。
			el.querySelectorAll（“ \\\ f”）;
			rbuggyQSA.push（“ [\\ r \\ n \\ f]”）;
		}）；

		assert（function（el）{
			el.innerHTML =“ <a href='' disabled='disabled'> </a>” +
				“ <选择已禁用='已禁用'> <选项/> </选择>”;

			//支持：Windows 8本机应用程序
			//在.innerHTML分配期间，类型和名称属性受到限制
			var input = document.createElement（“ input”）;
			input.setAttribute（“ type”，“ hidden”）;
			el.appendChild（input）.setAttribute（“ name”，“ D”）;

			//支持：IE8
			//强制对名称属性区分大小写
			如果（el.querySelectorAll（“ [name = d]”）.length）{
				rbuggyQSA.push（“ name” +空格+“ * [* ^ $ |！〜]？=”）；
			}

			// FF 3.5-：enabled /：disabled和hidden元素（隐藏的元素仍处于启用状态）
			// IE8在这里抛出错误，以后将不会看到测试
			if（el.querySelectorAll（“：enabled”）.length！== 2）{
				rbuggyQSA.push（“：enabled”，“：disabled”）;
			}

			//支持：IE9-11 +
			// IE的：disabled选择器不会选择禁用字段集的子级
			docElem.appendChild（el）.disabled = true;
			if（el.querySelectorAll（“：disabled”）.length！== 2）{
				rbuggyQSA.push（“：enabled”，“：disabled”）;
			}

			//支持：仅Opera 10-11
			// Opera 10-11不会抛出逗号后的无效伪
			el.querySelectorAll（“ * ,: x”）;
			rbuggyQSA.push（“，。*：”）;
		}）；
	}

	如果（（support.matchesSelector = rnative.test（（匹配= docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector））））{

		assert（function（el）{

			//检查是否可以进行matchSelector
			//在断开连接的节点上（IE 9）
			support.disconnectedMatch = matchs.call（el，“ *”）;

			//这应该失败，并带有异常
			// Gecko没有错误，而是返回false
			matchs.call（el，“ [s！='']：x”）;
			rbuggyMatches.push（“！=”，伪类）;
		}）；
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp（rbuggyQSA.join（“ |”））;
	rbuggyMatches = rbuggyMatches.length && new RegExp（rbuggyMatches.join（“ |”））;

	/ *包含
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test（docElem.compareDocumentPosition）;

	//元素包含另一个
	//有目的地自我排斥
	//像这样，一个元素不包含自身
	包含= hasCompare || rnative.test（docElem.contains）吗？
		函数（a，b）{
			var adown = a.nodeType === 9吗？a.documentElement：a，
				bup = b && b.parentNode;
			返回一个=== bup || !!（bup && bup.nodeType === 1 &&（
				adown。包含？
					adown.contains（bup）：
					a.compareDocumentPosition && a.compareDocumentPosition（bup）＆16
			））;
		}：
		函数（a，b）{
			如果（b）{
				而（（b = b.parentNode））{
					如果（b === a）{
						返回true；
					}
				}
			}
			返回false；
		};

	/ *排序
	-------------------------------------------------- -------------------- * /

	//文档顺序排序
	sortOrder = hasCompare吗？
	函数（a，b）{

		//标记为删除重复项
		如果（a === b）{
			hasDuplicate = true;
			返回0;
		}

		//如果只有一个输入具有compareDocumentPosition，则对方法是否存在进行排序
		var compare =！a.compareDocumentPosition-！b.compareDocumentPosition;
		如果（比较）{
			返回比较；
		}

		//如果两个输入都属于同一文档，则计算位置
		//支持：IE 11 +，Edge 17-18 +
		//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
		//两个文件；浅层比较工作。
		// eslint-disable-next-line eqeqeq
		比较=（a.ownerDocument || a）==（b.ownerDocument || b）吗？
			a.compareDocumentPosition（b）：

			//否则我们知道它们已断开连接
			1;

		//断开连接的节点
		如果（比较＆1 ||
			（！support.sortDetached && b.compareDocumentPosition（a）===比较））{

			//选择与我们的首选文档相关的第一个元素
			//支持：IE 11 +，Edge 17-18 +
			//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
			//两个文件；浅层比较工作。
			// eslint-disable-next-line eqeqeq
			if（a == document || a.ownerDocument == preferredDoc &&
				contains（preferredDoc，a））{
				返回-1;
			}

			//支持：IE 11 +，Edge 17-18 +
			//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
			//两个文件；浅层比较工作。
			// eslint-disable-next-line eqeqeq
			如果（b ==文档|| b.ownerDocument == preferredDoc &&
				contains（preferredDoc，b））{
				返回1;
			}

			//保持原始顺序
			返回sortInput吗？
				（indexOf（sortInput，a）-indexOf（sortInput，b））：
				0;
		}

		返回比较＆4？-1：1;
	}：
	函数（a，b）{

		//如果节点相同，则提早退出
		如果（a === b）{
			hasDuplicate = true;
			返回0;
		}

		var cur，
			我= 0，
			aup = a.parentNode，
			bup = b.parentNode，
			ap = [a]，
			bp = [b];

		//无父节点是文档或已断开连接
		如果（！aup ||！bup）{

			//支持：IE 11 +，Edge 17-18 +
			//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
			//两个文件；浅层比较工作。
			/ *禁用eseqt eqeqeq * /
			返回==文档？-1：
				b ==文件？1：
				/ *启用eslint启用eqeqeq * /
				奥普？-1：
				bup？1：
				sortInput？
				（indexOf（sortInput，a）-indexOf（sortInput，b））：
				0;

		//如果节点是同级节点，我们可以进行快速检查
		} else if（aup === bup）{
			返回siblingCheck（a，b）;
		}

		//否则我们需要其祖先的完整列表以进行比较
		cur = a;
		while（（cur = cur.parentNode））{
			ap.unshift（cur）;
		}
		cur = b;
		while（（cur = cur.parentNode））{
			bp.unshift（cur）;
		}

		//走到树上寻找差异
		而（ap [i] === bp [i]）{
			i ++;
		}

		还我吗？

			//做同级检查节点是否有共同祖先
			siblingCheck（ap [i]，bp [i]）：

			//否则，我们文档中的节点将首先排序
			//支持：IE 11 +，Edge 17-18 +
			//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
			//两个文件；浅层比较工作。
			/ *禁用eseqt eqeqeq * /
			ap [i] == preferredDoc吗？-1：
			bp [i] == preferredDoc吗？1：
			/ *启用eslint启用eqeqeq * /
			0;
	};

	退还文件；
};

Sizzle.matches = function（expr，elements）{
	返回Sizzle（expr，null，null，elements）;
};

Sizzle.matchesSelector = function（elem，expr）{
	setDocument（elem）;

	如果（support.matchesSelector && documentIsHTML &&
		！nonnativeSelectorCache [expr +“”] &&
		（！rbuggyMatches ||！rbuggyMatches.test（expr））&&
		（！rbuggyQSA ||！rbuggyQSA.test（expr）））{

		尝试 {
			var ret = matchs.call（elem，expr）;

			// IE 9的matchsSelector在断开连接的节点上返回false
			if（ret || support.disconnectedMatch ||

				//同样，断开连接的节点也被称为在文档中
				// IE 9中的片段
				elem.document && elem.document.nodeType！== 11）{
				返回ret
			}
		}抓住（e）{
			nonnativeSelectorCache（expr，true）;
		}
	}

	返回Sizzle（expr，document，null，[elem]）.length> 0;
};

Sizzle.contains = function（context，elem）{

	//根据需要设置文档变量
	//支持：IE 11 +，Edge 17-18 +
	//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
	//两个文件；浅层比较工作。
	// eslint-disable-next-line eqeqeq
	如果（（context.ownerDocument || context）！= document）{
		setDocument（context）;
	}
	返回contains（context，elem）;
};

Sizzle.attr = function（elem，name）{

	//根据需要设置文档变量
	//支持：IE 11 +，Edge 17-18 +
	//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
	//两个文件；浅层比较工作。
	// eslint-disable-next-line eqeqeq
	if（（（elem.ownerDocument || elem）！= document）{
		setDocument（elem）;
	}

	var fn = Expr.attrHandle [name.toLowerCase（）]，

		//不要被Object.prototype属性所迷惑（jQuery＃13807）
		val = fn && hasOwn.call（Expr.attrHandle，name.toLowerCase（））吗？
			fn（elem，name，！documentIsHTML）：
			不明确的;

	返回val！==未定义？
		值：
		support.attributes || ！documentIsHTML吗？
			elem.getAttribute（name）：
			（val = elem.getAttributeNode（name））&& val.specified？
				val.value：
				空值;
};

Sizzle.escape = function（sel）{
	return（sel +“”）.replace（rcssescape，fcssescape）;
};

Sizzle.error = function（msg）{
	抛出新的Error（“语法错误，无法识别的表达式：” + msg）;
};

/ **
 *文档分类和删除重复项
 * @param {ArrayLike}结果
 * /
Sizzle.uniqueSort = function（results）{
	var elem，
		重复项= []，
		j = 0，
		i = 0;

	//除非我们*知道*我们可以检测到重复项，否则假设它们存在
	hasDuplicate =！support.detectDuplicates;
	sortInput =！support.sortStable && results.slice（0）;
	results.sort（sortOrder）;

	如果（hasDuplicate）{
		while（（elem = results [i ++]））{
			如果（elem === results [i]）{
				j = repeats.push（i）;
			}
		}
		而（j--）{
			results.splice（重复项[j]，1）;
		}
	}

	//排序后清除输入以释放对象
	//参见https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	返回结果；
};

/ **
 *实用程序功能，用于检索DOM节点数组的文本值
 * @param {Array | Element}元素
 * /
getText = Sizzle.getText = function（elem）{
	var节点，
		ret =“”，
		我= 0，
		nodeType = elem.nodeType;

	如果（！nodeType）{

		//如果没有nodeType，则应该是一个数组
		while（（（node = elem [i ++]]））{

			//不要遍历注释节点
			ret + = getText（node）;
		}
	} else if（nodeType === 1 || nodeType === 9 || nodeType === 11）{

		//对元素使用textContent
		//删除了innerText用法以保持新行的一致性（jQuery＃11153）
		如果（typeof elem.textContent ===“ string”）{
			返回elem.textContent;
		} 别的 {

			//遍历其子级
			为（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				ret + = getText（elem）;
			}
		}
	} else if（nodeType === 3 || nodeType === 4）{
		返回elem.nodeValue;
	}

	//不包含注释或处理指令节点

	返回ret
};

Expr = Sizzle.selectors = {

	//可由用户调整
	cacheLength：50，

	createPseudo：markFunction，

	匹配：matchExpr，

	attrHandle：{}，

	找： {}，

	相对的： {
		“>”：{dir：“ parentNode”，第一个：true}，
		“”：{dir：“ parentNode”}，
		“ +”：{dir：“ previousSibling”，第一个：true}，
		“〜”：{dir：“ previousSibling”}
	}，

	preFilter：{
		“ ATTR”：function（match）{
			match [1] = match [1] .replace（runescape，funescape）;

			//将给定值移动到match [3]不论是带引号还是不带引号
			match [3] =（match [3] || match [4] ||
				匹配[5] || “”）.replace（runescape，funescape）;

			if（match [2] ===“〜=”）{
				match [3] =“” + match [3] +“”;
			}

			返回match.slice（0，4）;
		}，

		“ CHILD”：function（match）{

			/ *来自matchExpr [“ CHILD”]的匹配项
				1种（仅| nth | ...）
				2什么（类型的孩子）
				3个参数（even | odd | \ d * | \ d * n（[+-] \ d +）？| ...）
				4 xn + y参数的[xn-component]（[+-]？\ d * n |）
				Xn分量的5个符号
				6 x xn分量
				y分量的7号
				y分量的8 y
			* /
			match [1] = match [1] .toLowerCase（）;

			if（match [1] .slice（0，3）===“ nth”）{

				// nth- *需要参数
				如果（！match [3]）{
					Sizzle.error（match [0]）;
				}

				// Expr.filter.CHILD的数字x和y参数
				//记住将false / true分别强制转换为0/1
				match [4] = +（match [4]吗？
					match [5] +（match [6] || 1）：
					2 *（match [3] ===“ even” || match [3] ===“ odd”））;
				match [5] = +（（match [7] + match [8]）|| match [3] ===“奇”）;

				//其他类型禁止参数
			} else if（match [3]）{
				Sizzle.error（match [0]）;
			}

			返回比赛；
		}，

		“ PSEUDO”：function（match）{
			var多余，
				未引用=！match [6] && match [2];

			if（matchExpr [“ CHILD”] .test（match [0]））{
				返回null；
			}

			//照原样接受加引号的参数
			如果（match [3]）{
				匹配[2] =匹配[4] || 匹配[5] || “”;

			//从未加引号的参数中删除多余的字符
			} else if（不带引号&& rpseudo.test（不带引号）&&

				//从令牌化中获取剩余（递归）
				（多余= tokenize（未引用，true））&&

				//前进到下一个右括号
				（超额= unquoted.indexOf（“）”，unquoted.length-超额）-unquoted.length））{

				//多余是一个负指标
				match [0] = match [0] .slice（0，超额）;
				match [2] = unquoted.slice（0，超额）;
			}

			//仅返回伪过滤器方法（类型和参数）所需的捕获
			返回match.slice（0，3）;
		}
	}，

	筛选： {

		“ TAG”：function（nodeNameSelector）{
			var nodeName = nodeNameSelector.replace（runescape，funescape）.toLowerCase（）;
			返回nodeNameSelector ===“ *”吗？
				功能（） {
					返回true；
				}：
				函数（elem）{
					返回elem.nodeName && elem.nodeName.toLowerCase（）=== nodeName;
				};
		}，

		“ CLASS”：function（className）{
			var pattern = classCache [className +“”];

			返回模式||
				（pattern = new RegExp（“（^ |” +空格+
					“）” + className +“（” +空格+“ | $）”））&& classCache（
						className，function（elem）{
							返回pattern.test（
								typeof elem.className ===“字符串” && elem.className ||
								typeof elem.getAttribute！==“未定义” &&
									elem.getAttribute（“ class”）||
								”
							）;
				}）；
		}，

		“ ATTR”：函数（名称，运算符，检查）{
			返回函数（elem）{
				var result = Sizzle.attr（elem，name）;

				if（结果== null）{
					返回运算符===“！=”;
				}
				如果（！operator）{
					返回true；
				}

				结果+ =“”;

				/ *禁用最大长度* /

				返回运算符===“ =” 结果===检查：
					运算符===“！=” 结果！==检查：
					运算符===“ ^ =”吗？检查&& result.indexOf（check）=== 0：
					运算符===“ * =”？检查&& result.indexOf（check）> -1：
					运算符===“ $ =”？检查&& result.slice（-check.length）===检查：
					运算符===“〜=”？（“” + result.replace（rwhitespace，“”）+“”）.indexOf（check）> -1：
					运算符===“ | =”？结果===检查|| result.slice（0，check.length + 1）===检查+“-”：
					错误的;
				/ * eslint启用max-len * /

			};
		}，

		“ CHILD”：函数（类型，内容，_参数，第一个，最后一个）{
			var simple = type.slice（0，3）！==“ nth”，
				forward = type.slice（-4）！==“最后”，
				ofType =什么===“ of-type”;

			返回first === 1 && last === 0吗？

				//快捷方式：nth-​​（n）
				函数（elem）{
					返回!! elem.parentNode;
				}：

				函数（elem，_context，xml）{
					var cache，uniqueCache，outerCache，node，nodeIndex，start，
						dir =简单！==转发？“ nextSibling”：“ previousSibling”，
						父= elem.parentNode，
						名称= ofType && elem.nodeName.toLowerCase（），
						useCache =！xml &&！ofType，
						diff = false;

					如果（父母）{

						//：（（first | last | only）-（child | of-type）
						如果（简单）{
							而（dir）{
								节点=元素;
								while（（（node = node [dir]））{
									如果（ofType？
										node.nodeName.toLowerCase（）===名称：
										node.nodeType === 1）{

										返回false；
									}
								}

								//反向：only- *（如果我们还没有这样做的话）
								start = dir = type ===“ only” &&！start &&“ nextSibling”;
							}
							返回true；
						}

						开始= [转发？parent.firstChild：parent.lastChild];

						// non-xml：nth-​​child（...）将缓存数据存储在“ parent”上
						如果（forward && useCache）{

							//从先前缓存的索引中查找`elem`

							// ...以对gzip友好的方式
							节点=父级;
							outsideCache = node [expando] || （node [expando] = {}）;

							//支持：仅IE <9
							//防御克隆的特质（jQuery gh-1709）
							uniqueCache = outsideCache [node.uniqueID] ||
								（externalCache [node.uniqueID] = {}）;

							缓存= uniqueCache [类型] || [];
							nodeIndex = cache [0] ===目录运行&& cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							而（（（node = ++ nodeIndex && node && node [dir] ||

								//从一开始就退回到寻求`elem`
								（diff = nodeIndex = 0）|| start.pop（）））{

								//找到后，在`parent`上缓存索引并中断
								if（node.nodeType === 1 && ++ diff && node === elem）{
									uniqueCache [type] = [dirruns，nodeIndex，diff];
									休息;
								}
							}

						} 别的 {

							//使用先前缓存的元素索引（如果有）
							如果（useCache）{

								// ...以对gzip友好的方式
								节点=元素;
								outsideCache = node [expando] || （node [expando] = {}）;

								//支持：仅IE <9
								//防御克隆的特质（jQuery gh-1709）
								uniqueCache = outsideCache [node.uniqueID] ||
									（externalCache [node.uniqueID] = {}）;

								缓存= uniqueCache [类型] || [];
								nodeIndex = cache [0] ===目录运行&& cache [1];
								diff = nodeIndex;
							}

							// xml：nth-​​child（...）
							//或：nth-​​last-child（...）或：nth（-last）？-of-type（...）
							如果（diff === false）{

								//使用与上述相同的循环从头开始查找`elem`
								而（（（node = ++ nodeIndex && node && node [dir] ||
									（diff = nodeIndex = 0）|| start.pop（）））{

									如果（（ofType？
										node.nodeName.toLowerCase（）===名称：
										node.nodeType === 1）&&
										++ diff）{

										//缓存每个遇到的元素的索引
										如果（useCache）{
											outsideCache = node [expando] ||
												（node [expando] = {}）;

											//支持：仅IE <9
											//防御克隆的特质（jQuery gh-1709）
											uniqueCache = outsideCache [node.uniqueID] ||
												（externalCache [node.uniqueID] = {}）;

											uniqueCache [type] = [dirruns，diff];
										}

										if（node === elem）{
											休息;
										}
									}
								}
							}
						}

						//包含偏移量，然后检查循环大小
						diff-=最后；
						返回diff ===首先|| （diff％first === 0 && diff / first> = 0）;
					}
				};
		}，

		“ PSEUDO”：函数（伪，自变量）{

			//伪类名称不区分大小写
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//如果使用大写字母添加自定义伪造字，请按大小写区分优先级
			//记住setFilters继承了伪函数
			var args，
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase（）] ||
					Sizzle.error（“不支持的伪：” +伪）;

			//用户可以使用createPseudo来指示
			//需要参数来创建过滤器函数
			//就像Sizzle一样
			如果（fn [expando]）{
				返回fn（参数）;
			}

			//但是要保持对旧签名的支持
			如果（fn.length> 1）{
				args = [伪，伪，“”，自变量];
				返回Expr.setFilters.hasOwnProperty（pseudo.toLowerCase（））吗？
					markFunction（函数（种子，匹配项）{
						var idx，
							匹配= fn（种子，参数），
							我= matched.length;
						当我 -  ） {
							idx = indexOf（seed，match [i]）;
							seed [idx] =！（matches [idx] = match [i]）;
						}
					}）：
					函数（elem）{
						返回fn（elem，0，args）;
					};
			}

			返回fn;
		}
	}，

	伪类：{

		//潜在的复杂伪
		“ not”：markFunction（function（选择器）{

			//修剪传递给编译器的选择器
			//避免处理前导和尾随
			//空格作为组合符
			var输入= []，
				结果= []，
				matcher = compile（selector.replace（rtrim，“ $ 1”））;

			返回matcher [expando]吗？
				markFunction（function（seed（种子，匹配项，_context，xml）{
					var elem，
						unmatched = matcher（seed，null，xml，[]），
						i = seed.length;

					//匹配`matcher`不匹配的元素
					当我 -  ） {
						如果（（elem = unmatched [i]））{
							seed [i] =！（matches [i] = elem）;
						}
					}
				}）：
				函数（elem，_context，xml）{
					输入[0] =元素；
					matcher（input，null，xml，results）;

					//不要保留元素（issue＃299）
					输入[0] = null;
					返回！results.pop（）;
				};
		}），

		“有”：markFunction（function（选择器）{
			返回函数（elem）{
				返回Sizzle（选择符，elem）.length> 0;
			};
		}），

		“包含”：markFunction（function（text）{
			text = text.replace（runescape，funescape）;
			返回函数（elem）{
				return（elem.textContent || getText（elem））.indexOf（text）> -1;
			};
		}），

		//“元素是否由：lang（）选择器表示
		//仅基于元素的语言值
		//等于标识符C，
		//或以标识符C开头，后跟“-”。
		// C与元素的语言值的匹配不区分大小写。
		//标识符C不必是有效的语言名称。”
		// http://www.w3.org/TR/selectors/#lang-pseudo
		“ lang”：markFunction（function（lang）{

			// lang值必须是有效的标识符
			如果（！ridentifier.test（lang ||“”））{
				Sizzle.error（“不支持的lang：” + lang）;
			}
			lang = lang.replace（runescape，funescape）.toLowerCase（）;
			返回函数（elem）{
				var elemLang;
				做 {
					如果（（elemLang = documentIsHTML？
						elem.lang：
						elem.getAttribute（“ xml：lang”）|| elem.getAttribute（“ lang”）））{

						elemLang = elemLang.toLowerCase（）;
						返回elemLang === lang || elemLang.indexOf（lang +“-”）=== 0;
					}
				} while（（（elem = elem.parentNode）&& elem.nodeType === 1）;
				返回false；
			};
		}），

		// 各种各样的
		“ target”：function（elem）{
			var hash = window.location && window.location.hash;
			返回hash && hash.slice（1）=== elem.id;
		}，

		“ root”：function（elem）{
			return elem === docElem;
		}，

		“ focus”：function（elem）{
			返回elem === document.activeElement &&
				（！document.hasFocus || document.hasFocus（））&&
				!!（elem.type || elem.href ||〜elem.tabIndex）;
		}，

		//布尔属性
		“ enabled”：createDisabledPseudo（false），
		“ disabled”：createDisabledPseudo（true），

		“ checked”：function（elem）{

			//在CSS3中，：checked应该同时返回选中和选中的元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase（）;
			return（nodeName ===“ input” && !! elem.checked）||
				（nodeName ===“ option” && !! elem.selected）;
		}，

		“ selected”：function（elem）{

			//访问此属性将默认选中
			// Safari中的选项正常工作
			如果（elem.parentNode）{
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			返回elem.selected === true;
		}，

		// 内容
		“空”：function（elem）{

			// http://www.w3.org/TR/selectors/#empty-pseudo
			//：：empty被元素（1）或内容节点（文本：3； cdata：4；实体ref：5）取反，
			//，但其他人则不行（评论：8；处理指令：7；等等）
			// nodeType <6起作用是因为属性（2）不会作为子代出现
			为（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				如果（elem.nodeType <6）{
					返回false；
				}
			}
			返回true；
		}，

		“父母”：function（elem）{
			return！Expr.pseudos [“ empty”]（elem）;
		}，

		//元素/输入类型
		“ header”：function（elem）{
			返回rheader.test（elem.nodeName）;
		}，

		“ input”：function（elem）{
			返回rinputs.test（elem.nodeName）;
		}，

		“ button”：function（elem）{
			var name = elem.nodeName.toLowerCase（）;
			返回名称===“输入” && elem.type ===“按钮” || 名称===“按钮”;
		}，

		“ text”：function（elem）{
			var attr;
			返回elem.nodeName.toLowerCase（）===“ input” &&
				elem.type ===“文本” &&

				//支持：IE <8
				//新的HTML5属性值（例如“搜索”）以elem.type ===“ text”出现
				（（attr = elem.getAttribute（“ type”））== null ||
					attr.toLowerCase（）===“文本”）;
		}，

		//集合中的位置
		“第一”：createPositionalPseudo（function（）{
			返回[0];
		}），

		“最后一个”：createPositionalPseudo（function（_matchIndexes，length）{
			返回[length-1];
		}），

		“ eq”：createPositionalPseudo（function（_matchIndexes，length，arguments）{
			返回[参数<0？参数+长度：参数];
		}），

		“偶数”：createPositionalPseudo（function（matchIndexes，length）{
			var i = 0;
			对于（; i <length; i + = 2）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}），

		“奇数”：createPositionalPseudo（function（matchIndexes，length）{
			var i = 1;
			对于（; i <length; i + = 2）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}），

		“ lt”：createPositionalPseudo（function（matchIndexes，length，arguments）{
			var i =参数<0吗？
				参数+长度：
				参数>长度？
					长度 ：
					争论;
			对于（; --i> = 0;）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}），

		“ gt”：createPositionalPseudo（function（matchIndexes，length，arguments）{
			var i =参数<0吗？参数+长度：参数;
			对于（; ++ i <length;）{
				matchIndexes.push（i）;
			}
			返回matchIndexes;
		}）
	}
};

Expr.pseudos [“ nth”] = Expr.pseudos [“ eq”];

//添加按钮/输入类型伪
对于（i在{radio：true，复选框：true，file：true，password：true，image：true}）} {
	Expr.pseudos [i] = createInputPseudo（i）;
}
为（我在{提交：true，重置：true}）{
	Expr.pseudos [i] = createButtonPseudo（i）;
}

//用于创建新的setFilters的简单API
函数setFilters（）{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters（）;

tokenize = Sizzle.tokenize = function（选择器，parseOnly）{
	var匹配，匹配，令牌，类型，
		soFar，群组，preFilters，
		缓存= tokenCache [选择器+“”];

	如果（已缓存）{
		返回parseOnly吗？0：cached.slice（0）;
	}

	soFar =选择器；
	组= []；
	preFilters = Expr.preFilter;

	而（soFar）{

		//逗号并首次运行
		if（！matched ||（match = rcomma.exec（soFar）））{
			如果（匹配）{

				//不要将尾部逗号视为有效
				soFar = soFar.slice（match [0] .length）|| 迄今为止;
			}
			groups.push（（tokens = []））;
		}

		匹配=假;

		//组合器
		如果（（match = rcombinators.exec（soFar）））{
			匹配= match.shift（）;
			tokens.push（{
				值：相符，

				//将后代组合器投射到太空
				类型：match [0] .replace（rtrim，“”）
			}）；
			soFar = soFar.slice（matched.length）;
		}

		//过滤器
		对于（在Expr.filter中键入）{
			if（（match = matchExpr [type] .exec（soFar））&&（！preFilters [type] ||
				（match = preFilters [type]（match））））{
				匹配= match.shift（）;
				tokens.push（{
					值：相符，
					类型：
					匹配：匹配
				}）；
				soFar = soFar.slice（matched.length）;
			}
		}

		如果（！matched）{
			休息;
		}
	}

	//返回无效超出部分的长度
	//如果我们只是解析
	//否则，抛出错误或返回令牌
	返回parseOnly吗？
		soFar.length：
		迄今为止 ？
			Sizzle.error（选择器）：

			//缓存令牌
			tokenCache（选择器，组）.slice（0）;
};

函数toSelector（令牌）{
	var i = 0，
		len = tokens.length，
		选择器=“”;
	为（; i <len; i ++）{
		选择器+ =标记[i] .value;
	}
	返回选择器；
}

函数addCombinator（匹配器，组合器，基本）{
	var dir = combinator.dir，
		跳过= combinator.next，
		键=跳过|| 目录
		checkNonElements =基本&&键===“ parentNode”，
		doneName = done ++;

	返回combinator.first？

		//检查最接近的祖先/上一个元素
		函数（elem，context，xml）{
			while（（（elem = elem [dir]））{
				如果（elem.nodeType === 1 || checkNonElements）{
					返回matcher（elem，context，xml）;
				}
			}
			返回false；
		}：

		//检查所有祖先/先前元素
		函数（elem，context，xml）{
			var oldCache，uniqueCache，outerCache，
				newCache = [dirruns，doneName];

			//我们无法在XML节点上设置任意数据，因此它们不会从组合器缓存中受益
			如果（xml）{
				while（（（elem = elem [dir]））{
					如果（elem.nodeType === 1 || checkNonElements）{
						if（matcher（elem，context，xml））{
							返回true；
						}
					}
				}
			} 别的 {
				while（（（elem = elem [dir]））{
					如果（elem.nodeType === 1 || checkNonElements）{
						outsideCache = elem [expando] || （elem [expando] = {}）;

						//支持：仅IE <9
						//防御克隆的特质（jQuery gh-1709）
						uniqueCache = externalCache [elem.uniqueID] ||
							（externalCache [elem.uniqueID] = {}）;

						if（skip && skip === elem.nodeName.toLowerCase（））{
							elem = elem [dir] || 元素
						} else if（（（oldCache = uniqueCache [key]）&&
							oldCache [0] === dirruns && oldCache [1] === doneName）{

							//分配给newCache，因此结果向后传播到先前的元素
							return（newCache [2] = oldCache [2]）;
						} 别的 {

							//重用newcache，以便将结果反向传播到先前的元素
							uniqueCache [key] = newCache;

							//匹配意味着我们完成了；失败意味着我们必须继续检查
							if（（newCache [2] = matcher（elem，context，xml）））{
								返回true；
							}
						}
					}
				}
			}
			返回false；
		};
}

函数elementMatcher（matchers）{
	返回matchers.length> 1吗？
		函数（elem，context，xml）{
			var i = matchers.length;
			当我 -  ） {
				if（！matchers [i]（elem，context，xml））{
					返回false；
				}
			}
			返回true；
		}：
		匹配器[0];
}

函数multipleContexts（选择器，上下文，结果）{
	var i = 0，
		len = contexts.length;
	为（; i <len; i ++）{
		Sizzle（选择器，contexts [i]，results）;
	}
	返回结果；
}

函数condense（不匹配，地图，过滤器，上下文，xml）{
	var elem，
		newUnmatched = []，
		我= 0，
		len = unmatched.length，
		映射=地图！= null;

	为（; i <len; i ++）{
		如果（（elem = unmatched [i]））{
			如果（！filter || filter（elem，context，xml））{
				newUnmatched.push（elem）;
				如果（已映射）{
					map.push（i）;
				}
			}
		}
	}

	返回newUnmatched;
}

函数setMatcher（preFilter，selector，matcher，postFilter，postFinder，postSelector）{
	如果（postFilter &&！postFilter [expando]）{
		postFilter = setMatcher（postFilter）;
	}
	如果（postFinder &&！postFinder [expando]）{
		postFinder = setMatcher（postFinder，postSelector）;
	}
	返回markFunction（函数（种子，结果，上下文，xml）{
		var temp，i，elem，
			preMap = []，
			postMap = []，
			预先存在= results.length，

			//从种子或上下文中获取初始元素
			elems =种子|| multipleContexts（
				选择器|| “ *”，
				context.nodeType？[context]：上下文，
				[]
			），

			//前置过滤器以获取匹配器输入，并保留用于种子结果同步的映射
			matcherIn = preFilter &&（种子||！selector）吗？
				condense（elems，preMap，preFilter，context，xml）：
				元素

			matcherOut =匹配器？

				//如果我们有postFinder或已过滤的种子，或非种子postFilter或预先存在的结果，
				postFinder || （种子？preFilter：预先存在的|| postFilter）？

					// ...需要中间处理
					[]：

					// ...否则直接使用结果
					结果 ：
				matcherIn;

		//查找主要匹配项
		如果（匹配）{
			matcher（matcherIn，matcherOut，context，xml）;
		}

		//应用postFilter
		如果（postFilter）{
			temp = condense（matcherOut，postMap）;
			postFilter（temp，[]，context，xml）;

			//通过将不匹配的元素移回matcherIn来取消匹配
			i =温度长度；
			当我 -  ） {
				如果（（elem = temp [i]））{
					matcherOut [postMap [i]] =！（matcherIn [postMap [i]] = elem）;
				}
			}
		}

		如果（种子）{
			如果（postFinder || preFilter）{
				如果（postFinder）{

					//通过将此中间体压缩到postFinder上下文中来获取最终的matcherOut
					temp = [];
					i = matcherOut.length;
					当我 -  ） {
						如果（（elem = matcherOut [i]））{

							//恢复matcherIn，因为elem尚未结束
							temp.push（（matcherIn [i] = elem））;
						}
					}
					postFinder（null，（matcherOut = []），temp，xml）;复制代码
				}

				//将匹配的元素从种子移到结果以使其保持同步
				i = matcherOut.length;
				当我 -  ） {
					如果（（elem = matcherOut [i]）&&
						（temp = postFinder？indexOf（seed，elem）：preMap [i]）> -1）{

						seed [temp] =！（results [temp] = elem）;
					}
				}
			}

		//通过postFinder（如果已定义）将元素添加到结果中
		} 别的 {
			matcherOut =压缩（
				matcherOut ===结果？
					matcherOut.splice（预先存在，matcherOut.length）：
					matcherOut
			）;
			如果（postFinder）{
				postFinder（null，results，matcherOut，xml）;复制代码
			} 别的 {
				push.apply（results，matcherOut）;
			}
		}
	}）；
}

函数matcherFromTokens（令牌）{
	var checkContext，matcher，j，
		len = tokens.length，
		LeadingRelative = Expr.relative [tokens [0] .type]，
		hiddenRelative = LeadingRelative || Expr.relative [“”]，
		我= LeadingRelative吗？1：0，

		//基础匹配器确保可以从顶级上下文访问元素
		matchContext = addCombinator（function（elem）{
			return elem === checkContext;
		}，implicitRelative，true），
		matchAnyContext = addCombinator（function（elem）{
			返回indexOf（checkContext，elem）> -1;
		}，implicitRelative，true），
		matchers = [function（elem，context，xml）{
			var ret =（！leadingRelative &&（xml || context！== outsidemostContext））|| （
				（checkContext = context）.nodeType？
					matchContext（elem，context，xml）：
					matchAnyContext（elem，context，xml））;复制代码

			//避免挂在元素上（issue＃299）
			checkContext = null;
			返回ret
		}];

	为（; i <len; i ++）{
		如果（（matcher = Expr.relative [tokens [i] .type]））{
			matchers = [addCombinator（elementMatcher（matchers），matcher）];
		} 别的 {
			matcher = Expr.filter [tokens [i] .type] .apply（null，tokens [i] .matches）;

			//看到位置匹配器后返回特殊
			如果（matcher [expando]）{

				//找到下一个相对运算符（如果有）以进行适当处理
				j = ++ i;
				对于（; j <len; j ++）{
					如果（Expr.relative [tokens [j] .type]）{
						休息;
					}
				}
				返回setMatcher（
					i> 1 && elementMatcher（matchers），
					i> 1 && toSelector（

					//如果前面的标记是后代组合器，则插入一个隐式的任何元素`*`
					代币
						.slice（0，i-1）
						.concat（{value：tokens [i-2] .type ===“”？“ *”：“”}））
					）.replace（rtrim，“ $ 1”），
					匹配器
					i <j && matcherFromTokens（tokens.slice（i，j）），
					j <len && matcherFromTokens（（令牌= tokens.slice（j））），
					j <len && toSelector（令牌）
				）;
			}
			matchers.push（matcher）;
		}
	}

	返回elementMatcher（matchers）;
}

函数matcherFromGroupMatchers（elementMatchers，setMatchers）{
	var bySet = setMatchers.length> 0，
		byElement = elementMatchers.length> 0，
		superMatcher = function（种子，上下文，xml，结果，最外层）{
			var elem，j，匹配器，
				matchCount = 0，
				i =“ 0”，
				无与伦比=种子&& []，
				setMatched = []，
				contextBackup = externalmostContext，

				//我们必须始终具有种子元素或最外层上下文
				elems =种子|| byElement && Expr.find [“ TAG”]（“ *”，最外面的），

				//使用整数dirruns（如果这是最外面的匹配器）
				dirrunsUnique =（dirruns + = contextBackup == null？1：Math.random（）|| 0.1），
				len = elems.length;

			如果（最外层）{

				//支持：IE 11 +，Edge 17-18 +
				//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
				//两个文件；浅层比较工作。
				// eslint-disable-next-line eqeqeq
				externalmostContext =上下文==文档|| 上下文|| 最外层
			}

			//将直接传递elementMatchers的元素添加到结果中
			//支持：IE <9，Safari
			//允许ID匹配元素的NodeList属性（IE：“长度”； Safari：<number>）
			for（; i！== len &&（elem = elems [i]）！= null; i ++）{
				如果（byElement && elem）{
					j = 0;

					//支持：IE 11 +，Edge 17-18 +
					//严格比较时，IE / Edge有时会引发“权限被拒绝”错误
					//两个文件；浅层比较工作。
					// eslint-disable-next-line eqeqeq
					if（！context && elem.ownerDocument！= document）{
						setDocument（elem）;
						xml =！documentIsHTML;
					}
					while（（matcher = elementMatchers [j ++]））{
						if（matcher（elem，context || document，xml））{
							results.push（elem）;
							休息;
						}
					}
					如果（最外层）{
						dirruns = dirrunsUnique;
					}
				}

				//跟踪集合过滤器的不匹配元素
				如果（bySet）{

					//他们将经历所有可能的匹配器
					如果（（elem =！matcher && elem））{
						matchCount--;
					}

					//延长每个元素的数组，匹配或不匹配
					如果（种子）{
						unmatched.push（elem）;
					}
				}
			}

			//`i`现在是上面访问的元素计数，并将其添加到`matchedCount`
			//使后者为非负数。
			matchCount + = i;

			//将集合过滤器应用于不匹配的元素
			//注意：如果没有不匹配的元素（例如，“ matchedCount”
			//等于“ i”），除非我们没有在上面的循环中访问_any_元素，因为我们有
			//没有元素匹配器，也没有种子。
			//递增初始字符串“ 0” i允许`i`仅在该字符串中保留字符串
			//大小写，这将导致与“ i”不同但与“ i”不同的“ 00” matchedCount`
			//数字为零。
			如果（bySet && i！== matchedCount）{
				j = 0;
				while（（matcher = setMatchers [j ++]））{
					matcher（unmatched，setMatched，context，xml）;
				}

				如果（种子）{

					//重新整合元素匹配以消除排序需求
					如果（matchedCount> 0）{
						当我 -  ） {
							如果（！（unmatched [i] || setMatched [i]））{
								setMatched [i] = pop.call（results）;
							}
						}
					}

					//丢弃索引占位符值以仅获取实际匹配项
					setMatched = condense（setMatched）;
				}

				//将匹配项添加到结果
				push.apply（results，setMatched）;

				//无种子集匹配成功的多个成功匹配器将规定排序
				if（最外面的&&！seed && setMatched.length> 0 &&
					（matchCount + setMatchers.length）> 1）{

					Sizzle.uniqueSort（results）;
				}
			}

			//嵌套匹配器覆盖全局操作
			如果（最外层）{
				dirruns = dirrunsUnique;
				outsidemostContext = contextBackup;
			}

			无与伦比的回报；
		};

	返回bySet吗？
		markFunction（superMatcher）：
		superMatcher;
}

compile = Sizzle.compile = function（选择器，match / *仅供内部使用* /）{
	var i，
		setMatchers = []，
		elementMatchers = []，
		缓存=编译器缓存[选择器+“”];

	如果（！cached）{

		//生成一个可用于检查每个元素的递归函数
		如果（！match）{
			匹配= tokenize（选择器）;
		}
		i = match.length;
		当我 -  ） {
			缓存= matcherFromTokens（match [i]）;
			如果（cached [expando]）{
				setMatchers.push（cached）;
			} 别的 {
				elementMatchers.push（cached）;
			}
		}

		//缓存已编译的函数
		缓存=编译器缓存（
			选择器
			matcherFromGroupMatchers（elementMatchers，setMatchers）
		）;

		//保存选择器和令牌化
		cached.selector =选择器;
	}
	返回缓存；
};

/ **
 *与Sizzle的编译器一起使用的低级选择功能
 *选择器功能
 * @param {String | Function}选择器选择器或预先编译的
 * Sizzle.compile内置的选择器功能
 * @param {Element}上下文
 * @param {Array} [结果]
 * @param {Array} [seed]一组要匹配的元素
 * /
select = Sizzle.select = function（选择器，上下文，结果，种子）{
	var i，令牌，令牌，类型，查找，
		编译= typeof选择器===“函数” &&选择器，
		match =！seed && tokenize（（选择器=编译选择器||选择器））;

	结果=结果|| [];

	//如果列表中只有一个选择器且没有种子，则尝试最小化操作
	//（后者保证了我们的上下文）
	如果（match.length === 1）{

		//如果前导复合选择器是ID，则减少上下文
		令牌= match [0] = match [0] .slice（0）;
		if（tokens.length> 2 &&（token = tokens [0]）.type ===“ ID” &&
			context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]）{

			context =（Expr.find [“ ID”]（token.matches [0]
				.replace（runescape，funescape），context）|| []）[0];
			如果（！context）{
				返回结果；

			//预编译的匹配器仍会验证祖先，因此请提高等级
			}否则，如果（已编译）{
				context = context.parentNode;
			}

			选择器=选择器.slice（tokens.shift（）。value.length）;
		}

		//获取种子集以实现从右到左的匹配
		我= matchExpr [“ needsContext”]。test（选择器）吗？0：tokens.length;
		当我 -  ） {
			令牌=令牌[i];

			//如果我们碰到组合器，则中止
			如果（Expr.relative [（type = token.type）]）{
				休息;
			}
			if（（find = Expr.find [type]））{

				//搜索，为领先的同级组合器扩展上下文
				如果（（种子=查找（
					token.matches [0] .replace（runescape，funescape），
					rsibling.test（tokens [0] .type）&& testContext（context.parentNode）||
						语境
				）））{

					//如果种子为空或没有令牌，我们可以提早返回
					tokens.splice（i，1）;
					选择器= seed.length && toSelector（tokens）;
					如果（！selector）{
						push.apply（results，seed）;
						返回结果；
					}

					休息;
				}
			}
		}
	}

	//如果未提供过滤功能，则编译并执行过滤功能
	//如果我们修改了上面的选择器，请提供`match`以避免重新令牌化
	（编译||编译（选择器，匹配））（
		种子，
		语境，
		！documentIsHTML，
		结果，
		！上下文|| rsibling.test（选择器）&& testContext（context.parentNode）|| 语境
	）;
	返回结果；
};

//一次性作业

//排序稳定性
support.sortStable = expando.split（“”）.sort（sortOrder）.join（“”）=== expando;

//支持：Chrome 14-35 +
//如果不传递给比较函数，则始终假定重复项
support.detectDuplicates = !! hasDuplicate;

//根据默认文档进行初始化
setDocument（）;

//支持：Webkit <537.32-Safari 6.0.3 / Chrome 25（已在Chrome 27中修复）
//分离的节点混杂在一起*彼此*
support.sortDetached = assert（function（el）{

	//应该返回1，但返回4（如下）
	返回el.compareDocumentPosition（document.createElement（“ fieldset”））＆1;
}）；

//支持：IE <8
//防止属性/属性“插值”
// https://msdn.microsoft.com/zh-CN/library/ms536429%28VS.85%29.aspx
如果（！assert（function（el）{
	el.innerHTML =“ <a href='#'> </a>”;
	return el.firstChild.getAttribute（“ href”）===“＃”;
}））{
	addHandle（“ type | href | height | width”，function（elem，name，isXML）{
		如果（！isXML）{
			return elem.getAttribute（name，name.toLowerCase（）===“ type”？1：2）;
		}
	}）；
}

//支持：IE <9
//使用defaultValue代替getAttribute（“ value”）
如果（！support.attributes ||！assert（function（el）{
	el.innerHTML =“ <input />”;
	el.firstChild.setAttribute（“ value”，“”）;
	返回el.firstChild.getAttribute（“ value”）===“”;
}））{
	addHandle（“ value”，function（elem，_name，isXML）{
		如果（！isXML && elem.nodeName.toLowerCase（）===“ input”）{
			返回elem.defaultValue;
		}
	}）；
}

//支持：IE <9
//当getAttribute位于时，使用getAttributeNode来获取布尔值
如果（！assert（function（el）{
	返回el.getAttribute（“ disabled”）== null;
}））{
	addHandle（booleans，function（elem，name，isXML）{
		var val;
		如果（！isXML）{
			返回elem [名称] === true吗？name.toLowerCase（）：
				（val = elem.getAttributeNode（name））&& val.specified？
					val.value：
					空值;
		}
	}）；
}

返回嘶嘶声;

} ）（ 窗户 ）;



jQuery.find =嘶嘶声；
jQuery.expr = Sizzle.selectors;

//不推荐使用
jQuery.expr [“：”] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function（elem，dir，until）{
	var matching = []，
		截断=直到！==未定义;

	while（（（elem = elem [dir]）&& elem.nodeType！== 9）{
		如果（elem.nodeType === 1）{
			if（截断&& jQuery（elem）.is（直到））{
				休息;
			}
			match.push（elem）;
		}
	}
	返回匹配
};


var siblings = function（n，elem）{
	var matching = [];

	对于（; n; n = n.nextSibling）{
		如果（n.nodeType === 1 && n！== elem）{
			match.push（n）;
		}
	}

	返回匹配
};


var rneedsContext = jQuery.expr.match.needsContext;



函数nodeName（elem，name）{

	返回elem.nodeName && elem.nodeName.toLowerCase（）=== name.toLowerCase（）;

}
var rsingleTag =（/ ^ <（[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（ ？：<\ / \ 1> |）$ / i）;



//为过滤器实现相同的功能，而不是
函数winnow（elements，qualifier，not）{
	如果（isFunction（qualifier））{
		返回jQuery.grep（elements，function（elem，i）{
			return !! qualifier.call（elem，i，elem）！==不;
		}）；
	}

	//单个元素
	如果（qualifier.nodeType）{
		返回jQuery.grep（elements，function（elem）{
			return（elem ===限定词）！==不;
		}）；
	}

	//元素的Arraylike（jQuery，参数，Array）
	if（typeof qualifier！==“ string”）{
		返回jQuery.grep（elements，function（elem）{
			return（indexOf.call（qualifier，elem）> -1）！==否;
		}）；
	}

	//直接过滤简单选择器和复杂选择器
	返回jQuery.filter（qualifier，elements，not）;
}

jQuery.filter = function（expr，elems，not）{
	var elem = elems [0];

	如果不 ） {
		expr =“：not（” + expr +“）”;
	}

	if（elems.length === 1 && elem.nodeType === 1）{
		返回jQuery.find.matchesSelector（elem，expr）吗？[elem]：[];
	}

	返回jQuery.find.matches（expr，jQuery.grep（elems，function（elem）{
		返回elem.nodeType === 1;
	}））;
};

jQuery.fn.extend（{
	查找：函数（选择器）{
		var i，ret，
			len = this.length，
			自我=这个；

		if（typeof选择器！==“ string”）{
			返回this.pushStack（jQuery（选择器）.filter（function（）{
				对于（i = 0; i <len; i ++）{
					如果（jQuery.contains（self [i]，this））{
						返回true；
					}
				}
			}））;
		}

		ret = this.pushStack（[]）;

		对于（i = 0; i <len; i ++）{
			jQuery.find（选择器，self [i]，ret）;
		}

		返回len> 1吗？jQuery.uniqueSort（ret）：ret;
	}，
	过滤器：功能（选择器）{
		返回this.pushStack（winnow（this，选择器|| []，false））;
	}，
	否：function（选择器）{
		返回this.pushStack（winnow（this，选择器|| []，true））;
	}，
	是：function（选择器）{
		返回!! winnow（
			这，

			//如果这是位置/相对选择器，请检查返回集合中的成员资格
			//因此，对于带有两个“ p”的文档，$（“ p：first”）。is（“ p：last”）不会返回true。
			typeof选择器===“字符串” && rneedsContext.test（选择器）？
				jQuery（选择器）：
				选择器|| []，
			错误的
		）。长度;
	}
}）；


//初始化jQuery对象


//对根jQuery的中央引用（文档）
var rootjQuery，

	//检查HTML字符串的简单方法
	//将#id优先于<tag>以避免通过location.hash进行XSS（＃9521）
	//严格的HTML识别（＃11290：必须以<开头）
	//快捷的#id快捷方式
	rquickExpr = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w-] +））$ /，

	初始化= jQuery.fn.init =函数（选择器，上下文，根）{
		var match，elem;

		//句柄：$（“”），$（null），$（undefined），$（false）
		如果（！selector）{
			返回这个；
		}

		//方法init（）接受替代的rootjQuery
		//这样迁移就可以支持jQuery.sub（gh-2101）
		根=根|| rootjQuery;

		//处理HTML字符串
		if（typeof选择器===“ string”）{
			如果（选择器[0] ===“ <” &&
				选择器[selector.length-1] ===“>” &&
				选择器长度> = 3）{

				//假设以<>开头和结尾的字符串是HTML，并跳过正则表达式检查
				match = [null，选择器，null];

			} 别的 {
				匹配= rquickExpr.exec（选择器）;
			}

			//匹配html或确保没有为#id指定上下文
			if（match &&（match [1] ||！context））{

				//处理：$（html）-> $（array）
				如果（match [1]）{
					context = jQuery的context instanceof？context [0]：上下文；

					//对于反向兼容，运行脚本的选项为true
					//如果不存在parseHTML，则故意引发错误
					jQuery.merge（jQuery.parseHTML（
						匹配[1]，
						context && context.nodeType吗？context.ownerDocument || 上下文：文档，
						真的
					））;

					//句柄：$（html，props）
					如果（rsingleTag.test（match [1]）&& jQuery.isPlainObject（context））{
						对于（在上下文中匹配）{

							//如果可能，将上下文的属性称为方法
							如果（isFunction（this [match]））{
								this [match]（context [match]）;

							// ...，否则设置为属性
							} 别的 {
								this.attr（match，context [match]）;
							}
						}
					}

					返回这个；

				//句柄：$（＃id）
				} 别的 {
					elem = document.getElementById（match [2]）;

					如果（elem）{

						//将元素直接注入jQuery对象
						this [0] =元素；
						this.length = 1;
					}
					返回这个；
				}

			//句柄：$（expr，$（...））
			} else if（！context || context.jquery）{
				返回（上下文||根）.find（选择器）;

			//句柄：$（expr，context）
			//（等效于：$（context）.find（expr）
			} 别的 {
				返回this.constructor（context）.find（选择器）;
			}

		//处理：$（DOMElement）
		}否则，如果（selector.nodeType）{
			this [0] =选择器；
			this.length = 1;
			返回这个；

		//处理：$（function）
		//准备好文档的快捷方式
		}否则，如果（isFunction（选择器））{
			返回root.ready！==未定义？
				root.ready（选择器）：

				//如果没有就绪则立即执行
				选择器（jQuery）;
		}

		返回jQuery.makeArray（选择器，this）;
	};

//为init函数提供jQuery原型，以供以后实例化
init.prototype = jQuery.fn;

//初始化中央参考
rootjQuery = jQuery（document）;


var rparentsprev = / ^（?: parents | prev（？：Until | All））/，

	//确保从唯一集开始时产生唯一集的方法
	guaranteeUnique = {
		孩子们：是的，
		内容：真实，
		下一个：是的，
		上一个：正确
	};

jQuery.fn.extend（{
	具有：function（target）{
		var target = jQuery（target，this），
			l = targets.length;

		返回this.filter（function（）{
			var i = 0;
			对于（; i <l; i ++）{
				如果（jQuery.contains（this，targets [i]））{
					返回true；
				}
			}
		}）；
	}，

	最接近的：函数（选择器，上下文）{
		var cur，
			我= 0，
			l =这个长度
			匹配= []，
			目标= typeof选择器！==“字符串” && jQuery（选择器）;

		//位置选择器永远不会匹配，因为没有_selection_上下文
		如果（！rneedsContext.test（选择器））{
			对于（; i <l; i ++）{
				for（cur = this [i]; cur && cur！== context; cur = cur.parentNode）{

					//始终跳过文档片段
					如果（cur.nodeType <11 &&（目标？
						target.index（cur）> -1：

						//不要将非元素传递给Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector（cur，选择器）））{

						match.push（cur）;
						休息;
					}
				}
			}
		}

		返回this.pushStack（matched.length> 1？jQuery.uniqueSort（matched）：matched）;
	}，

	//确定元素在集合中的位置
	索引：function（elem）{

		//没有参数，在父级中返回索引
		如果（！elem）{
			返回（this [0] && this [0] .parentNode）吗？this.first（）。prevAll（）。length：-1;
		}

		//选择器中的索引
		如果（typeof elem ===“ string”）{
			返回indexOf.call（jQuery（elem），this [0]）;
		}

		//找到所需元素的位置
		返回indexOf.call（此，

			//如果接收到jQuery对象，则使用第一个元素
			elem.jquery？elem [0]：elem
		）;
	}，

	添加：function（选择器，上下文）{
		返回this.pushStack（
			jQuery.uniqueSort（
				jQuery.merge（this.get（），jQuery（选择器，上下文））
			）
		）;
	}，

	addBack：函数（选择器）{
		返回this.add（选择器== null？
			this.prevObject：this.prevObject.filter（选择器）
		）;
	}
}）；

函数同级（cur，dir）{
	while（（cur = cur [dir]）&& cur.nodeType！== 1）{}
	回国
}

jQuery.each（{
	父级：function（elem）{
		var parent = elem.parentNode;
		返回parent && parent.nodeType！== 11吗？父级：null；
	}，
	父母：function（elem）{
		return dir（elem，“ parentNode”）;
	}，
	parentUntil：function（elem，_i，直到）{
		返回dir（elem，“ parentNode”，直到）;
	}，
	下一个：function（elem）{
		return sibling（elem，“ nextSibling”）;
	}，
	上一条：函数（elem）{
		return sibling（elem，“ previousSibling”）;
	}，
	nextAll：function（elem）{
		return dir（elem，“ nextSibling”）;
	}，
	prevAll：function（elem）{
		return dir（elem，“ previousSibling”）;
	}，
	nextUntil：function（elem，_i，直到）{
		返回dir（elem，“ nextSibling”，直到）;
	}，
	prevUntil：function（elem，_i，直到）{
		返回dir（elem，“ previousSibling”，直到）;
	}，
	兄弟姐妹：function（elem）{
		return siblings（（elem.parentNode || {}）.firstChild，elem）;
	}，
	子代：function（elem）{
		返回兄弟姐妹（elem.firstChild）;
	}，
	内容：function（elem）{
		如果（elem.contentDocument！= null &&

			//支持：IE 11+
			//没有`data`属性的<object>元素有一个对象
			//带有null原型的contentDocument。
			getProto（elem.contentDocument））{

			返回elem.contentDocument;
		}

		//支持：仅IE 9-11，仅iOS 7，仅Android <= 4.3
		//在浏览器中将模板元素视为常规元素
		//不支持。
		if（nodeName（elem，“ template”））{
			elem = elem.content || 元素
		}

		返回jQuery.merge（[]，elem.childNodes）;
	}
}，function（name，fn）{
	jQuery.fn [名称] =函数（直到选择器）{
		var matched = jQuery.map（this，fn，until）;

		如果（name.slice（-5）！==“直到”）{
			选择器=直到;
		}

		if（选择器&& typeof选择器===“ string”）{
			匹配= jQuery.filter（选择器，匹配）;
		}

		如果（this.length> 1）{

			//删除重复项
			如果（！guaranteedUnique [name]）{
				jQuery.uniqueSort（匹配）;
			}

			//父母*和前导数的逆序
			如果（rparentsprev.test（name））{
				match.reverse（）;
			}
		}

		返回this.pushStack（匹配）;
	};
}）；
var rnothtmlwhite =（/ [^ \ x20 \ t \ r \ n \ f] + / g）;



//将字符串格式的选项转换为对象格式的选项
函数createOptions（options）{
	var object = {};
	jQuery.each（options.match（rnothtmlwhite）|| []，function（_，flag）{
		object [标志] = true;
	}）；
	返回对象
}

/ *
 *使用以下参数创建回调列表：
 *
 * options：以空格分隔的选项的可选列表，这些选项将更改
 *回调列表的行为或更传统的选项对象
 *
 *默认情况下，回调列表的作用类似于事件回调列表，并且可以
 *“被解雇”多次。
 *
 *可能的选项：
 *
 *一次：将确保回调列表只能被触发一次（例如延迟）
 *
 *内存：将跟踪先前的值并调用添加的任何回调
 *在列表立即被触发后，带有最新的“已存储”
 *值（如延期）
 *
 *唯一：将确保回调只能添加一次（列表中没有重复项）
 *
 * stopOnFalse：当回调返回false时中断调用
 *
 * /
jQuery.Callbacks = function（options）{

	//如果需要，将选项从字符串格式转换为对象格式
	//（我们首先签入缓存）
	options = typeof options ===“字符串”？
		createOptions（options）：
		jQuery.extend（{}，options）;

	var //标记以了解列表当前是否正在触发
		射击，

		//难忘列表的最后触发值
		记忆，

		//标记以了解列表是否已被触发
		被解雇

		//标记以防止触发
		锁定，

		//实际的回调列表
		列表= []，

		//可重复列表的执行数据队列
		队列= []，

		//当前触发的回调的索引（根据需要通过添加/删除进行修改）
		firingIndex = -1，

		//触发回调
		火= function（）{

			//强制执行一次射击
			锁定=锁定|| options.once;

			//为所有未决的执行执行回调，
			//尊重firingIndex覆盖和运行时更改
			发射=发射=真;
			for（; queue.length; firingIndex = -1）{
				内存= queue.shift（）;
				而（++ firingIndex <list.length）{

					//运行回调并检查是否提前终止
					if（list [firingIndex] .apply（memory [0]，memory [1]）===假&&
						options.stopOnFalse）{

						//跳到最后并忘记数据，因此.add不会重新触发
						firingIndex = list.length;
						记忆=假;
					}
				}
			}

			//如果我们处理完了就忘记数据
			如果（！options.memory）{
				记忆=假;
			}

			射击=假;

			//如果我们完成射击就清理
			如果（锁定）{

				//如果我们有以后添加调用的数据，请保留一个空列表
				如果（记忆）{
					列表= [];

				//否则，将花费此对象
				} 别的 {
					list =“”;
				}
			}
		}，

		//实际的回调对象
		自我= {

			//向列表添加回调或回调集合
			添加：function（）{
				如果（清单）{

					//如果我们有过去运行的记忆，则应在添加后触发
					if（memory &&！firing）{
						firingIndex = list.length-1;
						queue.push（memory）;
					}

					（function add（args）{
						jQuery.each（args，function（_，arg）{
							如果（isFunction（arg））{
								if（！options.unique ||！self.has（arg））{
									list.push（arg）;
								}
							} else if（arg && arg.length && toType（arg）！==“ string”）{

								//递归检查
								add（arg）;
							}
						}）；
					}）（arguments）;

					if（memory &&！firing）{
						火（）;
					}
				}
				返回这个；
			}，

			//从列表中删除回调
			删除：function（）{
				jQuery.each（arguments，function（_，arg）{
					var index;
					while（（（index = jQuery.inArray（arg，list，index））> -1）{
						list.splice（index，1）;

						//处理触发索引
						如果（index <= firingIndex）{
							firingIndex--;
						}
					}
				}）；
				返回这个；
			}，

			//检查给定的回调是否在列表中。
			//如果未提供任何参数，则返回list是否附加了回调。
			具有：function（fn）{
				返回fn吗？
					jQuery.inArray（fn，list）> -1：
					list.length> 0;
			}，

			//从列表中删除所有回调
			空：function（）{
				如果（清单）{
					列表= [];
				}
				返回这个；
			}，

			//禁用.fire和.add
			//中止所有当前/待处理的执行
			//清除所有回调和值
			禁用：function（）{
				锁定=队列= [];
				list = memory =“”;
				返回这个；
			}，
			禁用：function（）{
				返回！列表;
			}，

			//禁用.fire
			//除非我们有内存，否则也请禁用.add（因为它将无效）
			//中止所有未决的执行
			锁定：function（）{
				锁定=队列= [];
				if（！memory &&！firing）{
					list = memory =“”;
				}
				返回这个；
			}，
			锁定：function（）{
				返回!!锁定;
			}，

			//使用给定的上下文和参数调用所有回调
			fireWith：function（context，args）{
				如果（！已锁定）{
					args = args || [];
					args = [上下文，args.slice？args.slice（）：args];
					queue.push（args）;
					如果（！firing）{
						火（）;
					}
				}
				返回这个；
			}，

			//使用给定的参数调用所有回调
			火：function（）{
				self.fireWith（this，arguments）;
				返回这个；
			}，

			//知道回调函数是否已经被调用了至少一次
			触发：function（）{
				返回!!解雇;
			}
		};

	回归自我
};


函数Identity（v）{
	返回v;
}
功能Thrower（ex）{
	扔前
}

函数takeValue（值，解析，拒绝，noValue）{
	var方法;

	尝试 {

		//首先检查诺言方面的特权同步行为
		if（value && isFunction（（method = value.promise）））{
			method.call（value）.done（resolve）.fail（拒绝）;

		//其他罐头
		} else if（value && isFunction（（method = value.then）））{
			method.call（值，解析，拒绝）;

		//其他非主题
		} 别的 {

			//通过让Array＃slice将布尔值`noValue`强制转换为整数来控制`resolve`参数：
			// * false：[value] .slice（0）=> resolve（value）
			// * true：[value] .slice（1）=> resolve（）
			resolve.apply（未定义，[value] .slice（noValue））;
		}

	//对于Promises / A +，将异常转换为拒绝
	//由于jQuery.when不解包ableables，我们可以跳过出现在表单中的多余检查
	// Deferred＃then有条件地抑制拒绝。
	} catch（value）{

		//支持：仅Android 4.0
		//不使用.call / .apply调用的严格模式函数将获取全局对象上下文
		reject.apply（undefined，[value]）;
	}
}

jQuery.extend（{

	递延：function（func）{
		var元组= [

				//操作，添加侦听器，回调，
				// ...。然后处理程序，参数索引，[最终状态]
				[“ notify”，“ progress”，jQuery.Callbacks（“ memory”），
					jQuery.Callbacks（“ memory”），2]，
				[“ resolve”，“ done”，jQuery.Callbacks（“一次内存”），
					jQuery.Callbacks（“一次存储”），0，“已解决”]，
				[“拒绝”，“失败”，jQuery.Callbacks（“一次内存”），
					jQuery.Callbacks（“一次存储”），1，“已拒绝”]
			]，
			状态=“待处理”，
			承诺= {
				状态：function（）{
					返回状态；
				}，
				总是：function（）{
					deferred.done（arguments）.fail（arguments）;
					返回这个；
				}，
				“ catch”：function（fn）{
					返回promise.then（null，fn）;
				}，

				//保持管道反向兼容
				管道：函数（/ * fnDone，fnFail，fnProgress * /）{
					var fns = arguments;

					返回jQuery.Deferred（function（newDefer）{
						jQuery.each（元组，函数（_i，元组）{

							//将元组（进度，完成，失败）映射到参数（完成，失败，进度）
							var fn = isFunction（fns [tuple [4]]）&& fns [tuple [4]];

							// deferred.progress（function（）{绑定到newDefer或newDefer.notify}）
							// deferred.done（function（）{绑定到newDefer或newDefer.resolve}）
							// deferred.fail（function（）{绑定到newDefer或newDefer.reject}）
							deferred [元组[1]]（function（）{
								var return = fn && fn.apply（this，arguments）;
								if（返回&& isFunction（return.promise））{
									返回.promise（）
										.progress（newDefer.notify）
										.done（newDefer.resolve）
										.fail（newDefer.reject）;
								} 别的 {
									newDefer [元组[0] +“ With”]（
										这，
										fn？[返回]：参数
									）;
								}
							}）；
						}）；
						fns = null;
					} ）。承诺（）;
				}，
				然后：function（onFulfilled，onRejected，onProgress）{
					var maxDepth = 0;
					函数resolve（深度，延迟，处理程序，特殊）{
						return function（）{
							var that = this，
								args =参数，
								maythrow = function（）{
									var返回，然后；

									//支持：Promise / A +第2.3.3.3.3节
									// https://promisesaplus.com/#point-59
									//忽略双分辨率尝试
									如果（depth <maxDepth）{
										返回;
									}

									返回= handler.apply（that，args）;

									//支持：Promise / A +第2.3.1节
									// https://promisesaplus.com/#point-48
									如果（返回=== deferred.promise（））{
										抛出新的TypeError（“ Thenable self-resolution”）;
									}

									//支持：Promise / A +第2.3.3.1、3.5节
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									//仅检索一次“ then”
									然后=返回&&

										//支持：Promise / A +第2.3.4节
										// https://promisesaplus.com/#point-64
										//仅检查对象和函数的可扩展性
										（typeof返回===“对象” ||
											返回的typeof ===“ function”）&&
										然后返回；

									//处理返回的thenable
									如果（isFunction（then））{

										//特殊处理器（通知）只需等待解析
										如果（特殊）{
											然后。
												回，
												resolve（maxDepth，deferred，Identity，special），
												resolve（maxDepth，deferred，Thower，special）
											）;

										//普通处理器（解析）也可以进行
										} 别的 {

											// ...而忽略较旧的分辨率值
											maxDepth ++;

											然后。
												回，
												resolve（maxDepth，deferred，Identity，special），
												resolve（maxDepth，deferred，Thrower，special），
												resolve（maxDepth，deferred，Identity，
													deferred.notifyWith）
											）;
										}

									//处理所有其他返回值
									} 别的 {

										//仅替代处理程序传递上下文
										//和多个值（非规范行为）
										如果（处理程序！==身份）{
											那=未定义;
											args = [返回];
										}

										//处理值
										//默认过程已解决
										（特殊|| deferred.resolveWith）（that，args）;
									}
								}，

								//仅普通处理器（解析）捕获并拒绝异常
								过程=特殊？
									maythrow：
									功能（） {
										尝试 {
											maythrow（）;
										}抓住（e）{

											如果（jQuery.Deferred.exceptionHook）{
												jQuery.Deferred.exceptionHook（e，
													process.stackTrace）;
											}

											//支持：Promise / A +第2.3.3.3.4.1节
											// https://promisesaplus.com/#point-61
											//忽略解析后异常
											如果（深度+ 1> = maxDepth）{

												//仅替代处理程序传递上下文
												//和多个值（非规范行为）
												if（handler！== Thrower）{
													那=未定义;
													args = [e];
												}

												deferred.rejectWith（that，args）;
											}
										}
									};

							//支持：Promise / A +第2.3.3.3.1节
							// https://promisesaplus.com/#point-57
							//立即重新解决Promise，以躲避来自的错误拒绝
							//后续错误
							如果（深度）{
								过程（）;
							} 别的 {

								//发生异常时，调用一个可选的钩子来记录堆栈
								//因为执行异步时会丢失
								如果（jQuery.Deferred.getStackHook）{
									process.stackTrace = jQuery.Deferred.getStackHook（）;
								}
								window.setTimeout（process）;
							}
						};
					}

					返回jQuery.Deferred（function（newDefer）{

						// progress_handlers.add（...）
						元组[0] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onProgress）吗？
									onProgress：
									身份，
								newDefer.notifyWith
							）
						）;

						// //fulful_handlers.add（...）
						元组[1] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onFulfilled）吗？
									onFulfilled：
									身份
							）
						）;

						// rejected_handlers.add（...）
						元组[2] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onRejected）吗？
									onRejected：
									投掷者
							）
						）;
					} ）。承诺（）;
				}，

				//为此延期承诺
				//如果提供了obj，则将promise方面添加到该对象
				许诺：函数（obj）{
					返回obj！= null吗？jQuery.extend（obj，promise）：许诺;
				}
			}，
			deferred = {};

		//添加特定于列表的方法
		jQuery.each（元组，函数（i，元组）{
			var list = tuple [2]，
				stateString =元组[5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [元组[1]] = list.add;

			//处理状态
			如果（stateString）{
				list.add（
					功能（） {

						//状态=“已解决”（即已实现）
						//状态=“已拒绝”
						state = stateString;
					}，

					// rejected_callbacks.disable
					// enableded_callbacks.disable
					元组[3-i] [2] .disable，

					// rejected_handlers.disable
					//enableded_handlers.disable
					元组[3-i] [3] .disable，

					// progress_callbacks.lock
					元组[0] [2] .lock，

					// progress_handlers.lock
					元组[0] [3] .lock
				）;
			}

			// progress_handlers.fire
			//filled_handlers.fire
			// rejected_handlers.fire
			list.add（tuple [3] .fire）;

			// deferred.notify = function（）{deferred.notifyWith（...）}
			// deferred.resolve = function（）{deferred.resolveWith（...）}
			// deferred.reject = function（）{deferred.rejectWith（...）}
			deferred [元组[0]] = function（）{
				deferred [tuple [0] +“ With”]（this === deferred？undefined：this，arguments）;
				返回这个；
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] +“ With”] = list.fireWith;
		}）；

		//兑现延期的承诺
		promise.promise（deferred）;

		//调用给定的func（如果有）
		如果（func）{
			func.call（deferred，deferred）;
		}

		// 全部做完！
		返回延期；
	}，

	//延迟的助手
	时间：function（singleValue）{
		变种

			//未完成的下属的数量
			剩余= arguments.length，

			//未处理参数的计数
			我=剩余，

			//下属履行数据
			resolveContexts = Array（i），
			resolveValues = slice.call（arguments），

			//主递延
			primary = jQuery.Deferred（），

			//下级回调工厂
			updateFunc = function（i）{
				返回函数（值）{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1吗？slice.call（arguments）：值;
					如果（！（--remaining））{
						primary.resolveWith（resolveContexts，resolveValues）;
					}
				};
			};

		//采用单参数和空参数，例如Promise.resolve
		如果（剩余<= 1）{
			takeValue（singleValue，primary.done（updateFunc（i））.resolve，primary.reject，
				！其余的 ）;

			//使用.then（）来解开次级炮弹（参见gh-3000）
			如果（primary.state（）===“待定” ||
				isFunction（resolveValues [i] && resolveValues [i] .then））{

				返回primary.then（）;
			}
		}

		//像Promise.all数组元素一样聚合多个参数
		当我 -  ） {
			采用值（resolveValues [i]，updateFunc（i），primary.reject）;
		}

		返回primary.promise（）;
	}
}）；


//这些通常表示开发人员在开发过程中犯了错误，
//尽快警告他们，而不是默认情况下将其吞下。
var rerrorNames = / ^（Eval | Internal | Range | Reference | Syntax | Type | URI）Error $ /;

jQuery.Deferred.exceptionHook = function（error，stack）{

	//支持：仅IE 8-9
	//控制台在打开开发工具时存在，可以随时发生
	如果（window.console && window.console.warn &&错误&& rerrorNames.test（error.name））{
		window.console.warn（“ jQuery.Deferred exception：” + error.message，error.stack，stack）;
	}
};




jQuery.readyException = function（error）{
	window.setTimeout（function（）{
		抛出错误；
	}）；
};




//在DOM就绪时使用的延迟
var readyList = jQuery.Deferred（）;

jQuery.fn.ready = function（fn）{

	readyList
		.then（fn）

		//将jQuery.readyException包装在函数中，以便查找
		//发生在错误处理而不是回调时
		// 登记。
		.catch（function（error）{
			jQuery.readyException（error）;
		}）；

	返回这个；
};

jQuery.extend（{

	//可以使用DOM吗？设置为true。
	isReady：否，

	//一个计数器，以跟踪之前要等待多少个项目
	//准备事件触发。参见＃6781
	readyWait：1，

	//在DOM准备就绪时进行处理
	准备好了：function（wait）{

		//如果有未决的保留或我们已经准备就绪，则中止
		if（wait === true？--jQuery.readyWait：jQuery.isReady）{
			返回;
		}

		//记住DOM已经准备好了
		jQuery.isReady = true;

		//如果触发了普通的DOM Ready事件，则递减并在需要时等待
		if（等待！== true && --jQuery.readyWait> 0）{
			返回;
		}

		//如果绑定了函数，则执行
		readyList.resolveWith（document，[jQuery]）;
	}
}）；

jQuery.ready.then = readyList.then;

//就绪事件处理程序和自我清除方法
函数completed（）{
	document.removeEventListener（“ DOMContentLoaded”，已完成）;
	window.removeEventListener（“ load”，已完成）;
	jQuery.ready（）;
}

//捕获调用$（document）.ready（）的情况
//浏览器事件发生后。
//支持：仅IE <= 9-10
//较旧的IE有时会过早发出“互动”信号
如果（document.readyState ===“完成” ||
	（document.readyState！==“正在加载” &&！document.documentElement.doScroll））{

	//异步处理，以使脚本有机会延迟准备工作
	window.setTimeout（jQuery.ready）;

} 别的 {

	//使用方便的事件回调
	document.addEventListener（“ DOMContentLoaded”，已完成）;

	//回退到window.onload，它将始终有效
	window.addEventListener（“ load”，已完成）;
}




//用来获取和设置集合值的多功能方法
//如果值是一个函数，则可以选择执行
var access = function（elems，fn，key，value，chainable，emptyGet，raw）{
	var i = 0，
		len = elems.length，
		批量=键==空;

	//设置许多值
	if（toType（key）===“对象”）{
		chainable = true;
		对于（我在键中）{
			access（elems，fn，i，key [i]，true，emptyGet，raw）;
		}

	//设置一个值
	} else if（value！== undefined）{
		chainable = true;

		如果（！isFunction（value））{
			raw = true;
		}

		如果（批量）{

			//批量操作针对整个集合
			如果（原始）{
				fn.call（elems，value）;
				fn = null;

			// ...执行功能值时除外
			} 别的 {
				体积= fn;
				fn = function（elem，_key，value）{
					返回bulk.call（jQuery（elem），value）;
				};
			}
		}

		如果（fn）{
			为（; i <len; i ++）{
				fn（
					elems [i]，密钥，原始吗？
						价值 ：
						value.call（elems [i]，i，fn（elems [i]，key））
				）;
			}
		}
	}

	如果（可链接）{
		返回元素
	}

	//获取
	如果（批量）{
		返回fn.call（elems）;
	}

	返回len吗？fn（elems [0]，key）：emptyGet;
};


//匹配虚线字符串以进行驼色
var rmsPrefix = / ^-ms- /，
	rdashAlpha = /-（[[az]）/ g;

//由camelCase用作replace（）的回调
函数fcamelCase（_all，letter）{
	返回letter.toUpperCase（）;
}

//将破折号转换为camelCase; 由CSS和数据模块使用
//支持：IE <= 9-11，Edge 12-15
// Microsoft忘记了使用他们的供应商前缀（＃9572）
函数camelCase（string）{
	返回string.replace（rmsPrefix，“ ms-”）.replace（rdashAlpha，fcamelCase）;
}
var acceptData = function（owner）{

	//仅接受：
	//-节点
	//-Node.ELEMENT_NODE
	//-Node.DOCUMENT_NODE
	// - 目的
	// - 任何
	返回owner.nodeType === 1 || owner.nodeType === 9 || ！（+ owner.nodeType）;
};




函数Data（）{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	快取：function（owner）{

		//检查所有者对象是否已具有缓存
		var value = owner [this.expando];

		//如果没有，请创建一个
		如果（！value）{
			值= {};

			//我们可以在现代浏览器中接受非元素节点的数据，
			//但我们不应该看到＃8335。
			//始终返回一个空对象。
			如果（acceptData（owner））{

				//如果它是一个不太可能被字符串化或遍历的节点
				//使用普通分配
				如果（owner.nodeType）{
					owner [this.expando] =值；

				//否则将其保护在不可枚举的属性中
				// configureable必须为true才能允许该属性为
				//删除数据后删除
				} 别的 {
					Object.defineProperty（所有者，this.expando，{
						值：值，
						可配置：true
					}）；
				}
			}
		}

		返回值；
	}，
	设置：function（owner，data，value）{
		var prop，
			缓存= this.cache（owner）;

		//句柄：[所有者，键，值] args
		//始终使用camelCase键（gh-2257）
		if（typeof data ===“ string”）{
			cache [camelCase（data）] =值；

		//句柄：[owner，{properties}] args
		} 别的 {

			//将属性一一复制到缓存对象
			为（数据中的支持）{
				cache [camelCase（prop）] = data [prop];
			}
		}
		返回缓存；
	}，
	get：function（owner，key）{
		返回键===未定义？
			this.cache（owner）：

			//始终使用camelCase键（gh-2257）
			owner [this.expando] && owner [this.expando] [camelCase（key）];
	}，
	访问：function（owner，key，value）{

		//如果发生以下情况之一：
		//
		// 1.未指定密钥
		// 2.指定了字符串键，但未提供值
		//
		//采用“读取”路径，并允许get方法确定
		//要返回的值分别为：
		//
		// 1.整个缓存对象
		// 2.密钥中存储的数据
		//
		如果（键===未定义||
				（（key && typeof key ===“ string”）&& value === undefined））{

			返回this.get（owner，key）;
		}

		//如果键不是字符串，或者不是键和值
		//通过以下任一方式指定，设置或扩展（现有对象）：
		//
		// 1.属性对象
		// 2.键和值
		//
		this.set（owner，key，value）;

		//由于“设置”路径可以有两个可能的入口点
		//根据所采用的路径返回期望的数据[*]
		返回值！==未定义？值：键；
	}，
	删除：function（owner，key）{
		var i，
			缓存=所有者[this.expando];

		如果（缓存===未定义）{
			返回;
		}

		如果（键！==未定义）{

			//支持键的数组或空格分隔的字符串
			如果（Array.isArray（key））{

				//如果key是一个键数组...
				//我们总是设置camelCase键，因此将其删除。
				键= key.map（camelCase）;
			} 别的 {
				键= camelCase（键）;

				//如果存在带空格的键，请使用它。
				//否则，通过匹配非空白来创建数组
				键=键在缓存中？
					[ 钥匙 ] ：
					（key.match（rnothtmlwhite）|| []）;
			}

			i = key.length;

			当我 -  ） {
				删除缓存[key [i]];
			}
		}

		//如果没有更多数据，请删除Expando
		if（key === undefined || jQuery.isEmptyObject（cache））{

			//支持：Chrome <= 35-45
			//删除属性时Webkit和Blink性能会下降
			//来自DOM节点，因此改为设置为undefined
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607（受错误限制）
			如果（owner.nodeType）{
				owner [this.expando] =未定义；
			} 别的 {
				删除所有者[this.expando];
			}
		}
	}，
	hasData：function（owner）{
		var cache = owner [this.expando];
		返回缓存！==未定义&&！jQuery.isEmptyObject（cache）;
	}
};
var dataPriv = new Data（）;

var dataUser = new Data（）;



//实施摘要
//
// 1.通过1.9.x分支加强API表面和语义兼容性
// 2.通过减少存储量来提高模块的可维护性
//单一机制的路径。
// 3.使用相同的单一机制来支持“私有”和“用户”数据。
// 4. 4. _Never_将“私有”数据公开给用户代码（TODO：Drop _data，_removeData）
// 5.避免公开用户对象的实现细节（例如，expando属性）
// 6.为在2014年升级到WeakMap提供清晰的途径

var rbrace = / ^（？：\ {[\ w \ W] * \} | \ [[\ w \ W] * \]）$ /，
	rmultiDash = / [AZ] / g;

函数getData（data）{
	如果（data ===“ true”）{
		返回true；
	}

	if（data ===“ false”）{
		返回false；
	}

	if（data ===“ null”）{
		返回null；
	}

	//仅在不更改字符串的情况下才转换为数字
	如果（data === + data +“”）{
		返回+数据;
	}

	如果（rbrace.test（data））{
		返回JSON.parse（data）;
	}

	返回数据；
}

函数dataAttr（elem，key，data）{
	var name;

	//如果内部未找到任何内容，请尝试获取任何内容
	//来自HTML5 data- *属性的数据
	if（data === undefined && elem.nodeType === 1）{
		名称=“数据-” + key.replace（rmultiDash，“-$＆”）.toLowerCase（）;
		数据= elem.getAttribute（name）;

		if（typeof data ===“ string”）{
			尝试 {
				数据= getData（数据）;
			}抓住（e）{}

			//确保我们设置了数据，以便以后不会更改
			dataUser.set（elem，key，data）;
		} 别的 {
			数据=未定义;
		}
	}
	返回数据；
}

jQuery.extend（{
	hasData：function（elem）{
		返回dataUser.hasData（elem）|| dataPriv.hasData（elem）;
	}，

	数据：function（elem，name，data）{
		返回dataUser.access（elem，name，data）;
	}，

	removeData：function（elem，name）{
		dataUser.remove（elem，name）;
	}，

	// TODO：现在，所有对_data和_removeData的调用已被替换
	//通过直接调用dataPriv方法，可以弃用这些方法。
	_data：function（elem，name，data）{
		返回dataPriv.access（elem，name，data）;
	}，

	_removeData：function（elem，name）{
		dataPriv.remove（elem，name）;
	}
}）；

jQuery.fn.extend（{
	数据：function（key，value）{
		var i，名称，数据，
			elem = this [0]，
			attrs = elem && elem.attributes;

		//获取所有值
		如果（键===未定义）{
			如果（this.length）{
				数据= dataUser.get（elem）;

				if（elem.nodeType === 1 &&！dataPriv.get（elem，“ hasDataAttrs”））{
					i = attrs.length;
					当我 -  ） {

						//支持：仅IE 11
						// attrs元素可以为null（＃14894）
						如果（attrs [i]）{
							名称= attrs [i] .name;
							如果（name.indexOf（“ data-”）=== 0）{
								名称= camelCase（name.slice（5））;
								dataAttr（elem，name，data [name]）;
							}
						}
					}
					dataPriv.set（elem，“ hasDataAttrs”，true）;
				}
			}

			返回数据；
		}

		//设置多个值
		如果（typeof键===“对象”）{
			返回this.each（function（）{
				dataUser.set（this，key）;
			}）；
		}

		返回访问权限（this，函数（值）{
			var数据；

			//调用jQuery对象（元素匹配）不为空
			//（因此有一个元素出现在this [0]），并且
			//`value`参数不是未定义的。空的jQuery对象
			//将为elem = this [0]产生`undefined`，这将
			//如果尝试读取数据缓存，则引发异常。
			如果（elem && value === undefined）{

				//尝试从缓存中获取数据
				//密钥将始终驼峰存储在数据中
				数据= dataUser.get（elem，key）;
				如果（data！== undefined）{
					返回数据；
				}

				//尝试“发现”其中的数据
				// HTML5自定义数据-* attrs
				data = dataAttr（elem，key）;
				如果（data！== undefined）{
					返回数据；
				}

				//我们非常努力，但是数据不存在。
				返回;
			}

			//设置数据...
			this.each（function（）{

				//我们总是存储camelCased键
				dataUser.set（this，key，value）;
			}）；
		}，null，value，arguments.length> 1，null，true）;
	}，

	removeData：function（key）{
		返回this.each（function（）{
			dataUser.remove（this，key）;
		}）；
	}
}）；


jQuery.extend（{
	列：function（elem，type，data）{
		var queue;

		如果（elem）{
			类型=（类型||“ fx”）+“队列”;
			队列= dataPriv.get（elem，type）;

			//如果只是查找，则通过快速退出来加快出队
			如果（数据）{
				if（！queue || Array.isArray（data））{
					队列= dataPriv.access（elem，type，jQuery.makeArray（data））;
				} 别的 {
					queue.push（data）;
				}
			}
			返回队列|| [];
		}
	}，

	出队：function（elem，type）{
		类型=类型|| “ fx”;

		var queue = jQuery.queue（elem，type），
			startLength = queue.length，
			fn = queue.shift（），
			钩子= jQuery._queueHooks（elem，type），
			下一个= function（）{
				jQuery.dequeue（elem，type）;
			};

		//如果fx队列已出队，请务必删除进度标记
		如果（fn ===“进行中”）{
			fn = queue.shift（）;
			startLength--;
		}

		如果（fn）{

			//添加进度标记以防止fx队列被占用
			//自动出队
			if（type ===“ fx”）{
				queue.unshift（“ inprogress”）;
			}

			//清除最后一个队列停止功能
			删除hooks.stop;
			fn.call（elem，next，hooks）;
		}

		如果（！startLength && hooks）{
			hooks.empty.fire（）;
		}
	}，

	//不公开-生成一个queueHooks对象，或返回当前对象
	_queueHooks：function（elem，type）{
		var键=类型+“ queueHooks”;
		返回dataPriv.get（elem，key）|| dataPriv.access（elem，key，{
			空：jQuery.Callbacks（“一次存储”）.add（function（）{
				dataPriv.remove（elem，[type +“ queue”，key]）;
			}）
		}）；
	}
}）；

jQuery.fn.extend（{
	：列：function（type，data）{
		var setter = 2;

		if（typeof type！==“ string”）{
			数据=类型;
			type =“ fx”;
			setter--;
		}

		如果（arguments.length <setter）{
			返回jQuery.queue（this [0]，type）;
		}

		返回数据===未定义？
			这 ：
			this.each（function（）{
				var queue = jQuery.queue（this，type，data）;

				//确保此队列有一个钩子
				jQuery._queueHooks（this，type）;

				if（type ===“ fx” && queue [0]！==“ inprogress”）{
					jQuery.dequeue（this，type）;
				}
			}）；
	}，
	出队：function（type）{
		返回this.each（function（）{
			jQuery.dequeue（this，type）;
		}）；
	}，
	clearQueue：function（type）{
		返回this.queue（类型||“ fx”，[]）;
	}，

	//当特定类型的队列排队时获得承诺
	//被清空（默认情况下，fx是该类型）
	Promise：function（type，obj）{
		var tmp，
			计数= 1，
			defer = jQuery.Deferred（），
			元素=这个，
			我=这个长度
			解析= function（）{
				如果（！（--count））{
					defer.resolveWith（elements，[elements]）;
				}
			};

		if（typeof type！==“ string”）{
			obj =类型；
			类型=未定义;
		}
		类型=类型|| “ fx”;

		当我 -  ） {
			tmp = dataPriv.get（elements [i]，输入+“ queueHooks”）;
			如果（tmp && tmp.empty）{
				数++;
				tmp.empty.add（resolve）;
			}
		}
		解决（）;
		返回defer.promise（obj）;
	}
}）；
var pnum =（/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/）。

var rcssNum = new RegExp（“ ^（？：（[+-]）= |）（” + pnum +“）（[az％] *）$”，“ i”）;


var cssExpand = [“顶部”，“右侧”，“底部”，“左侧”];

var documentElement = document.documentElement;



	var isAttached = function（elem）{
			返回jQuery.contains（elem.ownerDocument，elem）;
		}，
		组成= {组成：true};

	//支持：仅IE 9-11 +，Edge 12-18 +，iOS 10.0-10.2
	//尽可能检查跨阴影DOM边界的附件（gh-3504）
	//支持：仅iOS 10.0-10.2
	//早期的iOS 10版本支持`attachShadow`，但不支持`getRootNode`，
	//导致错误。我们需要检查`getRootNode`。
	如果（documentElement.getRootNode）{
		isAttached = function（elem）{
			返回jQuery.contains（elem.ownerDocument，elem）||
				elem.getRootNode（组成）=== elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function（elem，el）{

		// isHiddenWithinTree可以从jQuery＃filter函数中调用；
		//在这种情况下，element将是第二个参数
		elem = el || 元素

		//内联样式胜过所有
		返回elem.style.display ===“ none” ||
			elem.style.display ===“” &&

			//否则，请检查计算出的样式
			//支持：Firefox <= 43-45
			//断开连接的元素可以进行计算显示：无，因此首先确认elem是
			//在文档中。
			isAttached（elem）&&

			jQuery.css（elem，“ display”）===“ none”;
	};



函数AdjustCSS（elem，prop，valueParts，tween）{
	var调整，比例，
		maxIterations = 20，
		currentValue =补间？
			功能（） {
				返回tween.cur（）;
			}：
			功能（） {
				返回jQuery.css（elem，prop，“”）;
			}，
		初始= currentValue（），
		单位= valueParts && valueParts [3] || （jQuery.cssNumber [prop]？“”：“ px”），

		//对于潜在的单位不匹配，需要计算起始值
		initialInUnit = elem.nodeType &&
			（jQuery.cssNumber [prop] || unit！==“ px” && + initial）&&
			rcssNum.exec（jQuery.css（elem，prop））;

	if（initialInUnit && initialInUnit [3]！== unit）{

		//支持：Firefox <= 54
		//将迭代目标值减半，以防止受到CSS上限的干扰（gh-2144）
		初始=初始/ 2;

		// jQuery.css报告的信任单位
		单位=单位|| initialInUnit [3];

		//从非零起始点开始迭代近似
		initialInUnit = +初始|| 1;

		while（maxIterations--）{

			//评估并更新我们的最佳猜测（将零加倍的猜测）。
			//如果小数位数等于或超过1，则完成操作（使旧*新产品为非正数）。
			jQuery.style（elem，prop，initialInUnit + unit）;
			如果（（1-标度）*（1-（标度= currentValue（）/初始|| 0.5））<= 0）{
				maxIterations = 0;
			}
			initialInUnit = initialInUnit /小数位数；

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style（elem，prop，initialInUnit + unit）;

		//确保稍后更新补间属性
		valueParts = valueParts || [];
	}

	如果（valueParts）{
		initialInUnit = + initialInUnit || +初始|| 0;

		//如果指定，则应用相对偏移（+ = /-=）
		调整= valueParts [1]？
			initialInUnit +（valueParts [1] + 1）* valueParts [2]：
			+ valueParts [2];
		如果（补间）{
			tween.unit =单位;
			tween.start = initialInUnit;
			tween.end =已调整；
		}
	}
	调整后的回报；
}


var defaultDisplayMap = {};

函数getDefaultDisplay（elem）{
	var temp，
		doc = elem.ownerDocument，
		nodeName = elem.nodeName，
		display = defaultDisplayMap [nodeName];

	如果（显示）{
		返回显示；
	}

	temp = doc.body.appendChild（doc.createElement（nodeName））;
	display = jQuery.css（temp，“ display”）;

	temp.parentNode.removeChild（temp）;

	如果（display ===“ none”）{
		display =“ block”;
	}
	defaultDisplayMap [nodeName] =显示；

	返回显示；
}

函数showHide（elements，show）{
	var display，elem，
		值= []，
		索引= 0，
		长度= elements.length;

	//为需要更改的元素确定新的显示值
	for（; index <length; index ++）{
		elem = elements [index];
		如果（！elem.style）{
			继续;
		}

		显示= elem.style.display;
		如果（显示）{

			//由于我们将可见性强加于级联隐藏的元素上，因此立即（且缓慢）
			//在第一个循环中需要进行检查，除非我们有一个非空的显示值（
			//内联或即将恢复）
			如果（display ===“ none”）{
				values [index] = dataPriv.get（elem，“ display”）|| 空值;
				如果（！values [index]）{
					elem.style.display =“”;
				}
			}
			如果（elem.style.display ===“” && isHiddenWithinTree（elem））{
				values [index] = getDefaultDisplay（elem）;
			}
		} 别的 {
			if（display！==“ none”）{
				values [index] =“ none”;

				//记住我们要覆盖的内容
				dataPriv.set（elem，“ display”，display）;
			}
		}
	}

	//在第二个循环中设置元素的显示，以避免持续回流
	for（index = 0; index <length; index ++）{
		如果（values [index]！= null）{
			elements [index] .style.display = values [index];
		}
	}

	返回元素；
}

jQuery.fn.extend（{
	显示：function（）{
		返回showHide（this，true）;
	}，
	隐藏：function（）{
		返回showHide（this）;
	}，
	切换：功能（状态）{
		if（typeof state ===“ boolean”）{
			返回状态？this.show（）：this.hide（）;
		}

		返回this.each（function（）{
			如果（isHiddenWithinTree（this））{
				jQuery（this）.show（）;
			} 别的 {
				jQuery（this）.hide（）;
			}
		}）；
	}
}）；
var rcheckableType =（/ ^（?: checkbox | radio）$ / i）;

var rtagName =（/ <（[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）/ i）;

var rscriptType =（/ ^ $ | ^ module $ | \ /（?: java | ecma）script / i）;



（ 功能（） {
	var fragment = document.createDocumentFragment（），
		div = fragment.appendChild（document.createElement（“ div”）），
		输入= document.createElement（“ input”）;

	//支持：Android 4.0-4.3
	//如果设置了名称，则检查状态丢失（＃11217）
	//支持：Windows Web Apps（WWA）
	//对于WWA，“名称”和“类型”必须使用.setAttribute（＃14901）
	input.setAttribute（“ type”，“ radio”）;
	input.setAttribute（“ checked”，“ checked”）;
	input.setAttribute（“ name”，“ t”）;

	div.appendChild（input）;

	//支持：仅Android <= 4.1
	//较旧的WebKit不能正确地在片段中克隆检查状态
	support.checkClone = div.cloneNode（true）.cloneNode（true）.lastChild.checked;

	//支持：仅IE <= 11
	//确保正确克隆了textarea（和复选框）defaultValue
	div.innerHTML =“ <textarea> x </ textarea>”;
	support.noCloneChecked = !! div.cloneNode（true）.lastChild.defaultValue;

	//支持：仅IE <= 9
	//当IE <= 9插入<option>标记时，其内容将替换为它们的内容
	//选择元素。
	div.innerHTML =“ <option> </ option>”;
	support.option = !! div.lastChild;
}）（）;


//我们必须关闭这些标签以支持XHTML（＃13200）
var wrapMap = {

	// XHTML解析器不会神奇地将元素插入
	//标签汤解析器的处理方式相同。所以我们不能缩短
	//省略<tbody>或其他必需元素。
	thead：[1，“ <table>”，“ </ table>”]，
	col：[2，“ <table> <colgroup>”，“ </ colgroup> </ table>”]，
	tr：[2，“ <table> <tbody>”，“ </ tbody> </ table>”]，
	td：[3，“ <table> <tbody> <tr>”，“ </ tr> </ tbody> </ table>”]，

	_default：[0，“”，“”]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

//支持：仅IE <= 9
如果（！support.option）{
	wrapMap.optgroup = wrapMap.option = [1，“ <select multiple ='multiple'>”，“ </ select>”];
}


函数getAll（context，tag）{

	//支持：仅IE <= 9-11
	//使用typeof避免在宿主对象上调用零参数方法（＃15151）
	var ret;

	如果（typeof context.getElementsByTagName！==“未定义”）{
		ret = context.getElementsByTagName（tag ||“ *”）;

	} else if（typeof context.querySelectorAll！==“ undefined”）{
		ret = context.querySelectorAll（标签||“ *”）;

	} 别的 {
		ret = [];
	}

	if（tag === undefined || tag && nodeName（context，tag））{
		返回jQuery.merge（[context]，ret）;
	}

	返回ret
}


//将脚本标记为已被评估
函数setGlobalEval（elems，refElements）{
	var i = 0，
		l = elems.length;

	对于（; i <l; i ++）{
		dataPriv.set（
			elems [i]，
			“ globalEval”，
			！refElements || dataPriv.get（refElements [i]，“ globalEval”）
		）;
	}
}


var rhtml = / <|＆＃？\ w +; /;

函数buildFragment（元素，上下文，脚本，选择，忽略）{
	var elem，tmp，标签，包装，附加，j，
		片段= context.createDocumentFragment（），
		节点= []，
		我= 0，
		l = elems.length;

	对于（; i <l; i ++）{
		elem = elems [i];

		如果（elem || elem === 0）{

			//直接添加节点
			如果（toType（elem）===“ object”）{

				//支持：仅Android <= 4.0，仅PhantomJS 1
				// push.apply（_，arraylike）抛出古老的WebKit
				jQuery.merge（nodes，elem.nodeType？[elem]：elem）;

			//将非html转换为文本节点
			} else if（！rhtml.test（elem））{
				nodes.push（context.createTextNode（elem））;

			//将html转换为DOM节点
			} 别的 {
				tmp = tmp || fragment.appendChild（context.createElement（“ div”））;

				//反序列化标准表示
				tag =（rtagName.exec（elem）|| [“”，“”]）[1] .toLowerCase（）;
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter（elem）+ wrap [2];

				//通过包装下降到正确的内容
				j = wrap [0];
				而（j--）{
					tmp = tmp.lastChild;
				}

				//支持：仅Android <= 4.0，仅PhantomJS 1
				// push.apply（_，arraylike）抛出古老的WebKit
				jQuery.merge（nodes，tmp.childNodes）;

				//记住顶层容器
				tmp = fragment.firstChild;

				//确保创建的节点是孤立的（＃12392）
				tmp.textContent =“”;
			}
		}
	}

	//从片段中删除包装器
	fragment.textContent =“”;

	i = 0;
	while（（elem =节点[i ++]））{

		//跳过上下文集合中已存在的元素（trac-4087）
		if（selection && jQuery.inArray（elem，selection）> -1）{
			如果（忽略）{
				ignore.push（elem）;
			}
			继续;
		}

		附加= isAttached（elem）;

		//附加到片段
		tmp = getAll（fragment.appendChild（elem），“ script”）;

		//保留脚本评估历史
		如果（附上）{
			setGlobalEval（tmp）;
		}

		//捕获可执行文件
		如果（脚本）{
			j = 0;
			while（（elem = tmp [j ++]））{
				if（rscriptType.test（elem.type ||“”））{
					scripts.push（elem）;
				}
			}
		}
	}

	返回片段；
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

函数returnTrue（）{
	返回true；
}

函数returnFalse（）{
	返回false；
}

//支持：IE <= 9-11+
// focus（）和blur（）是异步的，除非它们是无操作的。
//因此，当元素已经处于活动状态时，期望焦点是同步的，
//并在元素尚未激活时模糊同步。
//（在其他受支持的浏览器中，焦点和模糊总是同步的，
//这只是定义了我们何时可以依靠它）。
函数ExpectSync（elem，type）{
	return（elem === safeActiveElement（））===（type ===“ focus”）;
}

//支持：仅IE <= 9
//访问document.activeElement可能会意外抛出
// https://bugs.jquery.com/ticket/13393
函数safeActiveElement（）{
	尝试 {
		返回document.activeElement;
	} catch（err）{}
}

函数on（elem，类型，选择器，数据，fn，一个）{
	var origFn，类型；

	//类型可以是类型/处理程序的映射
	if（typeof types ===“ object”）{

		//（类型-对象，选择器，数据）
		if（typeof选择器！==“ string”）{

			//（types-Object，data）
			数据=数据|| 选择器
			选择器=未定义;
		}
		对于（输入类型）{
			on（elem，type，选择器，数据，types [type]，一个）;
		}
		返回元素
	}

	if（data == null && fn == null）{

		//（类型，fn）
		fn =选择器；
		数据=选择器=未定义；
	} else if（fn == null）{
		if（typeof选择器===“ string”）{

			//（类型，选择器，fn）
			fn =数据；
			数据=未定义;
		} 别的 {

			//（类型，数据，fn）
			fn =数据；
			数据=选择器;
			选择器=未定义;
		}
	}
	如果（fn === false）{
		fn = returnFalse;
	}否则，如果（！fn）{
		返回元素
	}

	如果（一个=== 1）{
		origFn = fn;
		fn = function（event）{

			//可以使用一个空集，因为事件包含信息
			jQuery（）。off（event）;
			返回origFn.apply（this，arguments）;
		};

		//使用相同的GUID，以便调用者可以使用origFn删除
		fn.guid = origFn.guid || （origFn.guid = jQuery.guid ++）;
	}
	return elem.each（function（）{
		jQuery.event.add（this，types，fn，data，选择器）;
	}）；
}

/ *
 *用于管理事件的帮助程序功能-不是公共界面的一部分。
 *为Dean Edwards的addEvent库提供了许多建议。
 * /
jQuery.event = {

	全球的： {}，

	添加：function（elem，类型，处理程序，数据，选择器）{

		var handleObjIn，eventHandle，tmp，
			事件，t，handleObj，
			特殊，处理程序，类型，名称空间，origType，
			elemData = dataPriv.get（elem）;

		//仅将事件附加到接受数据的对象
		如果（！acceptData（elem））{
			返回;
		}

		//调用者可以传入自定义数据的对象来代替处理程序
		如果（handler.handler）{
			handleObjIn =处理程序;
			handler = handleObjIn.handler;
			选择器= handleObjIn.selector;
		}

		//确保无效的选择器在附加时抛出异常
		//如果elem是非元素节点（例如document），则对documentElement求值
		如果（选择器）{
			jQuery.find.matchesSelector（documentElement，选择器）;
		}

		//确保该处理程序具有唯一的ID，以便以后查找/删除它
		如果（！handler.guid）{
			handler.guid = jQuery.guid ++;
		}

		//初始化元素的事件结构和主处理程序（如果这是第一个）
		如果（！（events = elemData.events））{
			events = elemData.events = Object.create（null）;
		}
		如果（！（eventHandle = elemData.handle））{
			eventHandle = elemData.handle = function（e）{

				//丢弃jQuery.event.trigger（）的第二个事件，并
				//当页面卸载后调用事件时
				返回typeof jQuery！==“未定义” && jQuery.event.triggered！== e.type吗？
					jQuery.event.dispatch.apply（elem，arguments）：未定义;
			};
		}

		//处理多个事件，并用空格隔开
		类型=（类型||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		而（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			类型= origType = tmp [1];
			名称空间=（tmp [2] ||“”）.split（“。”）.sort（）;

			// *必须*是一种类型，不能附加仅名称空间的处理程序
			如果（！type）{
				继续;
			}

			//如果事件更改了其类型，请对更改后的类型使用特殊的事件处理程序
			特殊= jQuery.event.special [类型] || {};

			//如果定义了选择器，则确定特殊事件api类型，否则确定给定类型
			类型=（选择器？special.delegateType：special.bindType）|| 类型;

			//根据新重置的类型更新特殊
			特殊= jQuery.event.special [类型] || {};

			// handleObj传递给所有事件处理程序
			handleObj = jQuery.extend（{
				类型：
				origType：origType，
				数据：数据，
				处理程序：处理程序，
				guid：handler.guid，
				选择器：选择器，
				needsContext：选择器&& jQuery.expr.match.needsContext.test（选择器），
				名称空间：namespaces.join（“。”）
			}，handleObjIn）;

			//如果我们是第一个，则初始化事件处理程序队列
			如果（！（handlers = events [type]））{
				处理程序=事件[类型] = [];
				handlers.delegateCount = 0;

				//如果特殊事件处理程序返回false，则仅使用addEventListener
				如果（！special.setup ||
					special.setup.call（elem，data，名称空间，eventHandle）=== false）{

					如果（elem.addEventListener）{
						elem.addEventListener（type，eventHandle）;
					}
				}
			}

			如果（special.add）{
				special.add.call（elem，handleObj）;

				如果（！handleObj.handler.guid）{
					handleObj.handler.guid = handler.guid;
				}
			}

			//添加到元素的处理程序列表中，在前面进行委托
			如果（选择器）{
				handlers.splice（handlers.delegateCount ++，0，handleObj）;
			} 别的 {
				handlers.push（handleObj）;
			}

			//跟踪曾经使用过的事件，以进行事件优化
			jQuery.event.global [type] = true;
		}

	}，

	//从元素中分离一个事件或一组事件
	删除：function（elem，类型，处理程序，选择器，mappedTypes）{

		var j，origCount，tmp，
			事件，t，handleObj，
			特殊，处理程序，类型，名称空间，origType，
			elemData = dataPriv.hasData（elem）&& dataPriv.get（elem）;

		if（！elemData ||！（events = elemData.events））{
			返回;
		}

		//每个type.namespace类型一次；类型可以省略
		类型=（类型||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		而（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			类型= origType = tmp [1];
			名称空间=（tmp [2] ||“”）.split（“。”）.sort（）;

			//取消绑定元素的所有事件（在此名称空间上，如果提供）
			如果（！type）{
				对于（输入事件）{
					jQuery.event.remove（elem，type + types [t]，handler，选择器，true）;
				}
				继续;
			}

			特殊= jQuery.event.special [类型] || {};
			类型=（选择器？special.delegateType：special.bindType）|| 类型;
			处理程序=事件[类型] || [];
			tmp = tmp [2] &&
				新的RegExp（“（^ | \\。）” + namespaces.join（“ \\。（？：。* \\。|）”）+“（\\。| $）”）;

			//删除匹配的事件
			origCount = j = handlers.length;
			而（j--）{
				handleObj = handlers [j];

				如果（（（mappingTypes || origType === handleObj.origType）&&
					（！handler || handler.guid === handleObj.guid）&&
					（！tmp || tmp.test（handleObj.namespace））&&
					（！selector ||选择器=== handleObj.selector ||
						选择器===“ **” && handleObj.selector）} {
					handlers.splice（j，1）;

					如果（handleObj.selector）{
						handlers.delegateCount--;
					}
					如果（special.remove）{
						special.remove.call（elem，handleObj）;
					}
				}
			}

			//如果我们删除了某些东西并且不存在其他处理程序，则删除通用事件处理程序
			//（避免在删除特殊事件处理程序期间发生无限递归的可能性）
			如果（origCount &&！handlers.length）{
				如果（！special.teardown ||
					special.teardown.call（elem，名称空间，elemData.handle）=== false）{

					jQuery.removeEvent（elem，type，elemData.handle）;
				}

				删除事件[类型];
			}
		}

		//删除数据和expando（如果不再使用）
		如果（jQuery.isEmptyObject（events））{
			dataPriv.remove（elem，“处理事件”）;
		}
	}，

	dispatch：function（nativeEvent）{

		var i，j，ret，matched，handleObj，handlerQueue，
			args = new Array（arguments.length），

			//从本机事件对象创建可写的jQuery.Event
			事件= jQuery.event.fix（nativeEvent），

			处理程序=（
				dataPriv.get（this，“ events”）|| Object.create（null）
			）[event.type] || []，
			特殊= jQuery.event.special [event.type] || {};

		//使用固定的jQuery.Event而不是（只读）本机事件
		args [0] =事件；

		对于（i = 1; i <arguments.length; i ++）{
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		//调用映射类型的preDispatch挂钩，并在需要时使其保释
		如果（special.preDispatch && special.preDispatch.call（this，event）=== false）{
			返回;
		}

		//确定处理程序
		handlerQueue = jQuery.event.handlers.call（this，event，handlers）;

		//首先运行委托；他们可能想停止在我们下面传播
		i = 0;
		while（（匹配= handlerQueue [i ++]）&&！event.isPropagationStopped（））{
			event.currentTarget = matched.elem;

			j = 0;
			while（（handleObj = matched.handlers [j ++]）&&
				！event.isImmediatePropagationStopped（））{

				//如果事件是命名空间的，则只有在以下情况下才调用每个处理程序
				//特别是通用的或其名称空间是事件的超集。
				if（！event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test（handleObj.namespace））{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =（（（jQuery.event.special [handleObj.origType] || {}）.handle ||
						handleObj.handler）.apply（matched.elem，args）;

					如果（ret！== undefined）{
						如果（（event.result = ret）===假）{
							event.preventDefault（）;
							event.stopPropagation（）;
						}
					}
				}
			}
		}

		//调用postDispatch钩子以获取映射类型
		如果（special.postDispatch）{
			special.postDispatch.call（this，event）;
		}

		返回event.result;
	}，

	处理程序：function（event，handlers）{
		var i，handleObj，sel，matchedHandlers，matchedSelectors，
			handlerQueue = []，
			proxyCount = handlers.delegateCount，
			cur = event.target;

		//查找委托处理程序
		如果（

			//支持：IE <= 9
			//黑洞SVG <use>实例树（trac-13180）
			cur.nodeType &&

			//支持：Firefox <= 42
			//禁止表示非主指针按钮的违反规范的点击（trac-3861）
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//支持：仅IE 11
			// ...但不是单选输入的箭头“点击”，可以有“ button” -1（gh-2343）
			！（event.type ===“ click” && event.button> = 1））{

			for（; cur！== this; cur = cur.parentNode || this）{

				//不要检查非元素（＃13208）
				//不要处理禁用元素（＃6911，＃8165，＃11382，＃11764）上的点击
				如果（cur.nodeType === 1 &&！（event.type ===“ click” && cur.disabled === true））{
					matchHandlers = [];
					matchSelectors = {};
					对于（i = 0; i <proxyCount; i ++）{
						handleObj = handlers [i];

						//不要与Object.prototype属性冲突（＃13203）
						sel = handleObj.selector +“”;

						如果（matchedSelectors [sel] ===未定义）{
							matchSelectors [sel] = handleObj.needsContext吗？
								jQuery（sel，this）.index（cur）> -1：
								jQuery.find（sel，this，null，[cur]）.length;
						}
						if（matchedSelectors [sel]）{
							matchingHandlers.push（handleObj）;
						}
					}
					如果（matchedHandlers.length）{
						handlerQueue.push（{elem：cur，handlers：matchedHandlers}）;
					}
				}
			}
		}

		//添加其余（直接绑定）的处理程序
		cur = this;
		如果（委托计数<handlers.length）{
			handlerQueue.push（{elem：cur，handlers：handlers.slice（proxyCount）}）;
		}

		返回handlerQueue;
	}，

	addProp：function（name，hook）{
		Object.defineProperty（jQuery.Event.prototype，name，{
			枚举：是的，
			可配置：true，

			得到：isFunction（hook）吗？
				功能（） {
					如果（this.originalEvent）{
						返回钩子（this.originalEvent）;
					}
				}：
				功能（） {
					如果（this.originalEvent）{
						返回this.originalEvent [name];
					}
				}，

			设置：function（value）{
				Object.defineProperty（this，name，{
					枚举：是的，
					可配置：true，
					可写：是的，
					值：值
				}）；
			}
		}）；
	}，

	修复：function（originalEvent）{
		返回originalEvent [jQuery.expando]吗？
			originalEvent：
			新的jQuery.Event（originalEvent）;
	}，

	特别的： {
		加载： {

			//防止触发的image.load事件冒泡到window.load
			noBubble：是
		}，
		点击： {

			//利用本机事件来确保可检查输入的正确状态
			设置：功能（数据）{

				//为了与_default互压缩，请将`this`访问权限替换为本地var。
				//`|| 数据是无效代码，旨在仅通过最小化来保留变量。
				var el =此|| 数据;

				//声明第一个处理程序
				如果（rcheckableType.test（el.type）&&
					el.click && nodeName（el，“ input”））{

					// dataPriv.set（el，“ click”，...）
					杠杆Native（el，“ click”，returnTrue）;
				}

				//返回false以允许在调用方中进行正常处理
				返回false；
			}，
			触发条件：function（data）{

				//为了与_default互压缩，请将`this`访问权限替换为本地var。
				//`|| 数据是无效代码，旨在仅通过最小化来保留变量。
				var el =此|| 数据;

				//在触发点击之前强制设置
				如果（rcheckableType.test（el.type）&&
					el.click && nodeName（el，“ input”））{

					杠杆Native（el，“ click”）;
				}

				//返回非false以允许正常的事件路径传播
				返回true；
			}，

			//为了确保跨浏览器的一致性，请在链接上隐藏本机.click（）
			//如果我们当前处于利用本机事件堆栈中，也要阻止它
			_default：function（event）{
				var target = event.target;
				返回rcheckableType.test（target.type）&&
					target.click && nodeName（target，“ input”）&&
					dataPriv.get（target，“ click”）||
					nodeName（target，“ a”）;
			}
		}，

		beforeunload：{
			postDispatch：function（event）{

				//支持：Firefox 20+
				//如果未设置returnValue字段，则Firefox不会发出警报。
				如果（event.result！==未定义&& event.originalEvent）{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

//确保存在事件侦听器，该事件侦听器可以处理手动触发的事件
//通过中断进度直到响应以下原因重新调用而合成事件
//直接触发的* native *事件，以确保状态更改具有
//在调用其他侦听器之前已经发生。
函数functionNative（el，type，ExpectSync）{

	//缺少ExpectSync表示触发调用，该调用必须通过jQuery.event.add强制设置
	如果（！expectSync）{
		如果（dataPriv.get（el，type）===未定义）{
			jQuery.event.add（el，type，returnTrue）;
		}
		返回;
	}

	//将控制器注册为所有事件名称空间的特殊通用处理程序
	dataPriv.set（el，type，false）;
	jQuery.event.add（el，type，{
		命名空间：false，
		处理程序：function（event）{
			var notAsync，结果，
				保存= dataPriv.get（this，type）;

			如果（（event.isTrigger＆1）&& this [type]）{

				//外部综合.trigger（）ed事件的中断处理
				//在这种情况下，保存的数据应该为false，但可能是剩余的捕获对象
				//来自异步本机处理程序（gh-4350）
				如果（！saved.length）{

					//存储用于处理内部本机事件的参数
					//始终至少有一个参数（一个事件对象），因此此数组
					//不会与剩余的捕获对象混淆。
					保存= slice.call（arguments）;
					dataPriv.set（this，type，saved）;

					//触发本地事件并捕获其结果
					//支持：IE <= 9-11+
					// focus（）和blur（）是异步的
					notAsync = ExpectSync（this，type）;
					这个类型 ]（）;
					结果= dataPriv.get（this，type）;
					如果（已保存！==结果|| notAsync）{
						dataPriv.set（this，type，false）;
					} 别的 {
						结果= {};
					}
					如果（已保存！==结果）{

						//取消外部综合事件
						event.stopImmediatePropagation（）;
						event.preventDefault（）;

						//支持：Chrome 86+
						//在Chrome中，如果具有焦点处理程序的元素被
						//在其外部单击，它将同步调用该处理程序。如果
						//处理程序在元素上调用`.remove（）`，数据被清除，
						//将`result`保留为undefined。我们需要注意这一点。
						返回结果&& result.value;
					}

				//如果这是带有冒泡代理的事件的内部综合事件
				//（焦点或模糊），并假设该替代物已通过触发
				//本机事件，并防止此事件再次发生。
				//从技术上讲，这会导致错误的wrt到`.trigger（）`（其中
				//冒泡代理会在非冒泡基数之后传播*），但这似乎
				//比复制差。
				} else if（（（jQuery.event.special [type] || {}）.delegateType）{
					event.stopPropagation（）;
				}

			//如果这是上面触发的本机事件，则现在一切正常
			//使用原始参数触发内部合成事件
			} else if（saved.length）{

				// ...并捕获结果
				dataPriv.set（this，type，{
					值：jQuery.event.trigger（

						//支持：IE <= 9-11+
						//扩展原型以重置上述stopImmediatePropagation（）
						jQuery.extend（saved [0]，jQuery.Event.prototype），
						save.slice（1），
						这
					）
				}）；

				//中止本机事件
				event.stopImmediatePropagation（）;
			}
		}
	}）；
}

jQuery.removeEvent = function（elem，type，handle）{

	//普通对象需要此“ if”
	如果（elem.removeEventListener）{
		elem.removeEventListener（type，handle）;
	}
};

jQuery.Event = function（src，props）{

	//允许没有'new'关键字的实例化
	if（！（此jQuery.Event实例））{
		返回新的jQuery.Event（src，props）;
	}

	//事件对象
	如果（src && src.type）{
		this.originalEvent = src;
		this.type = src.type;

		//使文档冒泡的事件可能已被标记为已阻止
		//由处理程序从树下放下；反映正确的值。
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented ===未定义&&

				//支持：仅Android <= 2.3
				src.returnValue === false？
			returnTrue：
			returnFalse;

		//创建目标属性
		//支持：仅Safari <= 6-7
		//目标不应是文本节点（＃504，＃13143）
		this.target =（src.target && src.target.nodeType === 3）吗？
			src.target.parentNode：
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// 事件类型
	} 别的 {
		this.type = src;
	}

	//将明确提供的属性放在事件对象上
	如果（道具）{
		jQuery.extend（this，props）;
	}

	//如果传入事件没有时间戳，则创建一个时间戳
	this.timeStamp = src && src.timeStamp || Date.now（）;

	//将其标记为固定
	this [jQuery.expando] = true;
};

// jQuery.Event基于ECMAScript语言绑定指定的DOM3事件
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	构造函数：jQuery.Event，
	isDefaultPrevented：returnFalse，
	isPropagationStopped：returnFalse，
	isImmediatePropagationStopped：returnFalse，
	isSimulated：否，

	preventDefault：function（）{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		如果（e &&！this.isSimulated）{
			e.preventDefault（）;
		}
	}，
	stopPropagation：function（）{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		如果（e &&！this.isSimulated）{
			e.stopPropagation（）;
		}
	}，
	stopImmediatePropagation：function（）{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		如果（e &&！this.isSimulated）{
			e.stopImmediatePropagation（）;
		}

		this.stopPropagation（）;
	}
};

//包括所有常见事件道具，包括KeyEvent和MouseEvent特定道具
jQuery.each（{
	altKey：是，
	气泡：是的，
	可取消：是的，
	changedTouches：是的，
	ctrlKey：是，
	细节：真实，
	eventPhase：是的，
	metaKey：true，
	pageX：是的，
	pageY：是的，
	shiftKey：是的，
	查看：正确，
	“ char”：是的，
	代码：是的，
	charCode：true，
	关键：对，
	keyCode：true，
	按钮：是的，
	按钮：是的，
	clientX：是的，
	clientY：是的，
	offsetX：是的，
	offsetY：是，
	pointerId：true，
	pointerType：true，
	screenX：是的，
	screenY：是的，
	targetTouches：是的，
	toElement：是的，
	感动：是的，
	哪个：是的
}，jQuery.event.addProp）;

jQuery.each（{focus：“ focusin”，模糊：“ focusout”}，function（type，proxyType）{
	jQuery.event.special [type] = {

		//如果可能的话，使用本机事件，以便模糊/聚焦顺序正确
		设置：function（）{

			//声明第一个处理程序
			// dataPriv.set（this，“ focus”，...）
			// dataPriv.set（this，“ blur”，...）
			DSLNative（this，type，ExpectSync）;

			//返回false以允许在调用方中进行正常处理
			返回false；
		}，
		触发器：function（）{

			//触发之前强制设置
			DSLNative（this，type）;

			//返回非false以允许正常的事件路径传播
			返回true；
		}，

		//抑制原生焦点或模糊，因为它已经被触发
		//在不为人知的情况下。
		_default：function（）{
			返回true；
		}，

		委托类型：委托类型
	};
}）；

//使用mouseover / out和事件时间检查来创建mouseenter / leave事件
//，以便事件委托可以在jQuery中使用。
//对pointerenter / pointerleave和pointerover / pointerout进行相同的操作
//
//支持：仅Safari 7
// Safari经常发送mouseenter；看：
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
//有关错误的说明（该漏洞也存在于较早的Chrome版本中）。
jQuery.each（{
	mouseenter：“ mouseover”，
	mouseleave：“ mouseout”，
	pointerenter：“ pointerover”，
	pointerleave：“ pointerout”
}，function（orig，fix）{
	jQuery.event.special [orig] = {
		proxyType：修复，
		bindType：修复，

		句柄：function（event）{
			var ret，
				目标=这个，
				相关= event.relatedTarget，
				handleObj = event.handleObj;

			//对于mouseenter / leave，如果相关对象不在目标范围内，则调用处理程序。
			//注意：如果鼠标左/进入浏览器窗口，则没有relatedTarget
			if（！related ||（related！== target &&！jQuery.contains（target，related）））{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply（this，arguments）;
				event.type = fix;
			}
			返回ret
		}
	};
}）；

jQuery.fn.extend（{

	on：function（类型，选择器，数据，fn）{
		返回（此类型，选择器，数据，fn）；
	}，
	一：function（类型，选择器，数据，fn）{
		返回on（this，types，selector，data，fn，1）;
	}，
	off：function（类型，选择器，fn）{
		var handleObj，类型；
		if（types && types.preventDefault && types.handleObj）{

			//（event）调度jQuery.Event
			handleObj = types.handleObj;
			jQuery（types.delegateTarget）.off（
				handleObj.namespace？
					handleObj.origType +“。” + handleObj.namespace：
					handleObj.origType，
				handleObj.selector，
				handleObj.handler
			）;
			返回这个；
		}
		if（typeof types ===“ object”）{

			//（类型对象[，选择器]）
			对于（输入类型）{
				this.off（type，选择器，types [type]）;
			}
			返回这个；
		}
		if（选择器===假||类型选择器===“函数”）{

			//（类型[，fn]）
			fn =选择器；
			选择器=未定义;
		}
		如果（fn === false）{
			fn = returnFalse;
		}
		返回this.each（function（）{
			jQuery.event.remove（this，types，fn，选择器）;
		}）；
	}
}）；


变种

	//支持：仅IE <= 10-11，边缘12-13
	//在IE / Edge中使用正则表达式组会导致严重的速度下降。
	//参见https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <脚本| <样式| <链接/ i，

	// checked =“ checked”或选中
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i，
	rcleanScript = / ^ \ s * <！（？：\ [CDATA \ [|-）|（？：\] \] |-）> \ s * $ / g;

//在其父表上优先使用tbody来包含新行
函数operationTarget（elem，content）{
	如果（nodeName（elem，“ table”）&&
		nodeName（content.nodeType！== 11？content：content.firstChild，“ tr”））{

		返回jQuery（elem）.children（“ tbody”）[0] || 元素
	}

	返回元素
}

//替换/恢复脚本元素的type属性，以进行安全的DOM操作
函数disableScript（elem）{
	elem.type =（elem.getAttribute（“ type”）！== null）+“ /” + elem.type;
	返回元素
}
函数restoreScript（elem）{
	如果（（elem.type ||“”）.slice（0，5）===“ true /”）{
		elem.type = elem.type.slice（5）;
	} 别的 {
		elem.removeAttribute（“ type”）;
	}

	返回元素
}

函数cloneCopyEvent（src，dest）{
	var i，l，type，pdataOld，udataOld，udataCur，事件;

	如果（dest.nodeType！== 1）{
		返回;
	}

	// 1.复制私人数据：事件，处理程序等。
	如果（dataPriv.hasData（src））{
		pdataOld = dataPriv.get（src）;
		事件= pdataOld.events;

		如果（事件）{
			dataPriv.remove（dest，“处理事件”）;

			对于（输入事件）{
				for（i = 0，l = events [type] .length; i <l; i ++）{
					jQuery.event.add（dest，type，events [type] [i]）;
				}
			}
		}
	}

	// 2.复制用户数据
	如果（dataUser.hasData（src））{
		udataOld = dataUser.access（src）;
		udataCur = jQuery.extend（{}，udataOld）;

		dataUser.set（dest，udataCur）;
	}
}

//修复IE错误，请参阅支持测试
函数fixInput（src，dest）{
	var nodeName = dest.nodeName.toLowerCase（）;

	//无法保留克隆的复选框或单选按钮的选中状态。
	if（nodeName ===“ input” && rcheckableType.test（src.type））{
		dest.checked = src.checked;

	//克隆选项时无法将所选选项返回到默认的所选状态
	} else if（nodeName ===“ input” || nodeName ===“ textarea”）{
		dest.defaultValue = src.defaultValue;
	}
}

函数domManip（集合，参数，回调，忽略）{

	//展平任何嵌套数组
	args = flat（args）;

	var片段，首先是脚本，hasScripts，node，doc，
		我= 0，
		l = collection.length，
		iNoClone = 1-1
		值= args [0]，
		valueIsFunction = isFunction（value）;

	//在WebKit中我们无法克隆包含checked的Node片段
	如果（valueIsFunction ||
			（l> 1 && typeof value ===“ string” &&
				！support.checkClone && rchecked.test（value）））{
		返回collection.each（function（index）{
			var self = collection.eq（index）;
			如果（valueIsFunction）{
				args [0] = value.call（this，index，self.html（））;
			}
			domManip（self，args，callback，被忽略）;
		}）；
	}

	如果（l）{
		片段= buildFragment（args，collection [0] .ownerDocument，false，collection，忽略）;
		首先= fragment.firstChild;

		如果（fragment.childNodes.length === 1）{
			片段=首先；
		}

		//需要新内容或对被忽略元素感兴趣，以调用回调
		如果（首先||被忽略）{
			脚本= jQuery.map（getAll（fragment，“ script”），disableScript）;
			hasScripts = scripts.length;

			//将原始片段用于最后一个项目
			//而不是第一个，因为它可以结束
			//在某些情况下被错误地清空（＃8070）。
			对于（; i <l; i ++）{
				节点=片段;

				如果（i！== iNoClone）{
					node = jQuery.clone（node，true，true）;

					//保留对克隆脚本的引用，以供以后还原
					如果（hasScripts）{

						//支持：仅Android <= 4.0，仅PhantomJS 1
						// push.apply（_，arraylike）抛出古老的WebKit
						jQuery.merge（脚本，getAll（节点，“ script”））;
					}
				}

				callback.call（collection [i]，node，i）;
			}

			如果（hasScripts）{
				doc = scripts [scripts.length-1] .ownerDocument;

				//重新启用脚本
				jQuery.map（脚本，restoreScript）;

				//在第一次插入文档时评估可执行脚本
				对于（i = 0; i <hasScripts; i ++）{
					节点=脚本[i];
					如果（rscriptType.test（node.type ||“”）&&
						！dataPriv.access（节点，“ globalEval”）&&
						jQuery.contains（doc，node））{

						if（node.src &&（node.type ||“”）.toLowerCase（）！==“ module”）{

							//可选的AJAX依赖项，但是如果不存在，将不会运行脚本
							如果（jQuery._evalUrl &&！node.noModule）{
								jQuery._evalUrl（node.src，{
									随机数：node.nonce || node.getAttribute（“ nonce”）
								}，doc）;
							}
						} 别的 {
							DOMEval（node.textContent.replace（rcleanScript，“”），node，doc）;
						}
					}
				}
			}
		}
	}

	退货；
}

函数remove（elem，选择器，keepData）{
	var节点，
		节点=选择器？jQuery.filter（选择器，elem）：elem，
		i = 0;

	for（;（node = nodes [i]）！= null; i ++）{
		如果（！keepData && node.nodeType === 1）{
			jQuery.cleanData（getAll（node））;
		}

		如果（node.parentNode）{
			如果（keepData && isAttached（node））{
				setGlobalEval（getAll（node，“ script”）））;
			}
			node.parentNode.removeChild（node）;
		}
	}

	返回元素
}

jQuery.extend（{
	htmlPrefilter：function（html）{
		返回html;
	}，

	clone：function（elem，dataAndEvents，deepDataAndEvents）{
		var i，l，srcElements，destElements，
			clone = elem.cloneNode（true），
			inPage = isAttached（elem）;

		//修复IE克隆问题
		如果（！support.noCloneChecked &&（elem.nodeType === 1 || elem.nodeType === 11）&&
				！jQuery.isXMLDoc（elem））{

			//由于性能原因，我们在这里避开Sizzle：https：//jsperf.com/getall-vs-sizzle/2
			destElements = getAll（clone）;
			srcElements = getAll（elem）;

			对于（i = 0，l = srcElements.length; i <l; i ++）{
				fixInput（srcElements [i]，destElements [i]）;
			}
		}

		//将事件从原始事件复制到克隆
		如果（dataAndEvents）{
			如果（deepDataAndEvents）{
				srcElements = srcElements || getAll（elem）;
				destElements = destElements || getAll（clone）;

				对于（i = 0，l = srcElements.length; i <l; i ++）{
					cloneCopyEvent（srcElements [i]，destElements [i]）;
				}
			} 别的 {
				cloneCopyEvent（elem，clone）;
			}
		}

		//保留脚本评估历史
		destElements = getAll（clone，“ script”）;
		如果（destElements.length> 0）{
			setGlobalEval（destElements，！inPage && getAll（elem，“ script”）））;
		}

		//返回克隆集
		返回克隆；
	}，

	cleanData：function（elems）{
		var数据，elem，类型，
			special = jQuery.event.special，
			i = 0;

		for（;（elem = elems [i]）！==未定义； i ++）{
			如果（acceptData（elem））{
				如果（（data = elem [dataPriv.expando]））{
					如果（data.events）{
						对于（键入data.events）{
							if（special [type]）{
								jQuery.event.remove（elem，type）;

							//这是避免jQuery.event.remove开销的快捷方式
							} 别的 {
								jQuery.removeEvent（elem，type，data.handle）;
							}
						}
					}

					//支持：Chrome <= 35-45+
					//分配未定义而不是使用delete，请参见Data＃remove
					elem [dataPriv.expando] =未定义；
				}
				如果（elem [dataUser.expando]）{

					//支持：Chrome <= 35-45+
					//分配未定义而不是使用delete，请参见Data＃remove
					elem [dataUser.expando] =未定义；
				}
			}
		}
	}
}）；

jQuery.fn.extend（{
	分离：功能（选择器）{
		返回remove（this，选择器，true）;
	}，

	删除：function（选择器）{
		返回remove（this，selector）;
	}，

	文字：function（value）{
		返回访问权限（this，函数（值）{
			返回值===未定义？
				jQuery.text（this）：
				this.empty（）。each（function（）{
					如果（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
						this.textContent =值;
					}
				}）；
		}，null，value，arguments.length）；
	}，

	附加：function（）{
		返回domManip（this，arguments，function（elem）{
			如果（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
				var target = controlsTarget（this，elem）;
				target.appendChild（elem）;
			}
		}）；
	}，

	前置：function（）{
		返回domManip（this，arguments，function（elem）{
			如果（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
				var target = controlsTarget（this，elem）;
				target.insertBefore（elem，target.firstChild）;
			}
		}）；
	}，

	之前：function（）{
		返回domManip（this，arguments，function（elem）{
			如果（this.parentNode）{
				this.parentNode.insertBefore（elem，this）;
			}
		}）；
	}，

	之后：function（）{
		返回domManip（this，arguments，function（elem）{
			如果（this.parentNode）{
				this.parentNode.insertBefore（elem，this.nextSibling）;
			}
		}）；
	}，

	空：function（）{
		var elem，
			i = 0;

		for（;（elem = this [i]）！= null; i ++）{
			如果（elem.nodeType === 1）{

				//防止内存泄漏
				jQuery.cleanData（getAll（elem，false））;

				//删除所有剩余的节点
				elem.textContent =“”;
			}
		}

		返回这个；
	}，

	clone：function（dataAndEvents，deepDataAndEvents）{
		dataAndEvents = dataAndEvents == null？false：dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null？dataAndEvents：deepDataAndEvents;

		返回this.map（function（）{
			返回jQuery.clone（this，dataAndEvents，deepDataAndEvents）;
		}）；
	}，

	html：function（value）{
		返回访问权限（this，函数（值）{
			var elem = this [0] || {}，
				我= 0，
				l = this.length;

			if（value === undefined && elem.nodeType === 1）{
				返回elem.innerHTML;
			}

			//看看我们是否可以采取捷径而只使用innerHTML
			if（typeof value ===“ string” &&！rnoInnerhtml.test（value）&&
				！wrapMap [（rtagName.exec（value）|| [“”，“”]）[1] .toLowerCase（）]）{

				值= jQuery.htmlPrefilter（值）;

				尝试 {
					对于（; i <l; i ++）{
						elem = this [i] || {};

						//删除元素节点并防止内存泄漏
						如果（elem.nodeType === 1）{
							jQuery.cleanData（getAll（elem，false））;
							elem.innerHTML =值;
						}
					}

					elem = 0;

				//如果使用innerHTML引发异常，请使用fallback方法
				}抓住（e）{}
			}

			如果（elem）{
				this.empty（）。append（value）;
			}
		}，null，value，arguments.length）；
	}，

	replaceWith：function（）{
		var忽略= [];

		//进行更改，用新的内容替换每个不可忽略的上下文元素
		返回domManip（this，arguments，function（elem）{
			var parent = this.parentNode;

			if（jQuery.inArray（this，忽略）<0）{
				jQuery.cleanData（getAll（this））;
				如果（父母）{
					parent.replaceChild（elem，this）;
				}
			}

		//强制回调调用
		}，忽略））；
	}
}）；

jQuery.each（{
	appendTo：“追加”，
	prependTo：“ prepend”，
	insertBefore：“之前”，
	insertAfter：“之后”，
	replaceAll：“ replaceWith”
}，function（name，original）{
	jQuery.fn [名称] =函数（选择器）{
		var elems，
			ret = []，
			插入= jQuery（选择器），
			最后= insert.length-1，
			i = 0;

		对于（; i <= last; i ++）{
			elems = i ===最后一个？这：this.clone（true）;
			jQuery（insert [i]）[original]（elems）;

			//支持：仅Android <= 4.0，仅PhantomJS 1
			// .get（），因为push.apply（_，arraylike）抛出了古老的WebKit
			push.apply（ret，elems.get（））;
		}

		返回this.pushStack（ret）;
	};
}）；
var rnumnonpx = new RegExp（“ ^（” + pnum +“）（?! px）[az％] + $”，“ i”）;

var getStyles = function（elem）{

		//支持：仅IE <= 11，Firefox <= 30（＃15098，＃14150）
		// IE抛出在弹出窗口中创建的元素
		// FF同时通过“ defaultView.getComputedStyle”抛出框架元素
		var view = elem.ownerDocument.defaultView;

		如果（！view ||！view.opener）{
			视图=窗口;
		}

		返回view.getComputedStyle（elem）;
	};

var swap = function（elem，options，callback）{
	var ret，名称，
		old = {};

	//记住旧值，然后插入新值
	对于（选项中的名称）{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.call（elem）;

	//恢复旧值
	对于（选项中的名称）{
		elem.style [name] = old [name];
	}

	返回ret
};


var rboxStyle = new RegExp（cssExpand.join（“ |”），“ i”）;



（ 功能（） {

	//同时执行pixelPosition和boxSizingReliable测试仅需要一种布局
	//，以便在同一时间执行它们以保存第二次计算。
	函数computeStyleTests（）{

		//这是一个单例，我们只需执行一次
		如果（！div）{
			返回;
		}

		container.style.cssText =“ position：absolute; left：-11111px; width：60px;” +
			“ margin-top：1px; padding：0; border：0”;
		div.style.cssText =
			“位置：相对；显示：块；框大小：边框框；溢出：滚动；” +
			“边距：自动；边框：1像素；填充：1像素；” +
			“宽度：60％；顶部：1％”；
		documentElement.appendChild（container）.appendChild（div）;

		var divStyle = window.getComputedStyle（div）;
		pixelPositionVal = divStyle.top！==“ 1％”;

		//支持：仅Android 4.0-4.3，Firefox <= 3-44
		可靠的MarginLeftVal = roundPixelMeasures（divStyle.marginLeft）=== 12;

		//支持：仅Android 4.0-4.3，Safari <= 9.1-10.1，iOS <= 7.0-9.3
		//有些样式返回百分比值，即使它们不应该
		div.style.right =“ 60％”;
		pixelBoxStylesVal = roundPixelMeasures（divStyle.right）=== 36;

		//支持：仅IE 9-11
		//检测box-sizing：border-box元素的内容尺寸错误报告
		boxSizingReliableVal = roundPixelMeasures（divStyle.width）=== 36;

		//支持：仅IE 9
		//检测溢出：滚动拧紧（gh-3699）
		//支持：Chrome <= 64
		//缩放影响offsetWidth（gh-4029）时不要被欺骗
		div.style.position =“绝对”;
		scrollboxSizeVal = roundPixelMeasures（div.offsetWidth / 3）=== 12;

		documentElement.removeChild（container）;

		//将div无效，这样就不会将其存储在内存中，并且
		//这也将是已经执行检查的标志
		div = null;
	}

	函数roundPixelMeasures（measure）{
		返回Math.round（parseFloat（measure））;
	}

	var pixelPositionVal，boxSizingReliableVal，scrollboxSizeVal，pixelBoxStylesVal，
		可靠的TrDimensionsVal，可靠的MarginLeftVal，
		容器= document.createElement（“ div”），
		div = document.createElement（“ div”）;

	//在受限（非浏览器）环境中提早完成
	如果（！div.style）{
		返回;
	}

	//支持：仅IE <= 9-11
	//克隆元素的样式会影响克隆的源元素（＃8908）
	div.style.backgroundClip =“内容框”;
	div.cloneNode（true）.style.backgroundClip =“”;
	support.clearCloneStyle = div.style.backgroundClip ===“ content-box”;

	jQuery.extend（support，{
		boxSizingReliable：function（）{
			computeStyleTests（）;
			return boxSizingReliableVal;
		}，
		pixelBoxStyles：function（）{
			computeStyleTests（）;
			return pixelBoxStylesVal;
		}，
		pixelPosition：function（）{
			computeStyleTests（）;
			返回pixelPositionVal;
		}，
		allowedMarginLeft：function（）{
			computeStyleTests（）;
			返回可靠的MarginLeftVal;
		}，
		scrollboxSize：function（）{
			computeStyleTests（）;
			return scrollboxSizeVal;
		}，

		//支持：IE 9-11 +，Edge 15-18+
		// IE / Edge错误报告带有宽度/高度的表行的“ getComputedStyle”
		//在CSS中设置，而`offset *'属性报告正确的值。
		// IE 9中的行为比新版本中的行为更微妙，并且可以通过
		//此测试的某些版本；确保不要让它通过那里！
		//
		//支持：Firefox 70+
		//只有Firefox包含边框宽度
		//在计算的尺寸中。（gh-4529）
		trustedTrDimensions：function（）{
			var table，tr，trChild，trStyle;
			如果（trustedTrDimensionsVal == null）{
				table = document.createElement（“ table”）;
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
