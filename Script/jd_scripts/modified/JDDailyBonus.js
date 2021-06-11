console.log("🔥启动京东签到脚本")
//https://bean.m.jd.com

const $tool = new Tool()
const consoleLog = false
var innerLog = "var clog = false\n"

$tool.get("https://fd4.videohelper.top/raw/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js", (error, response, body) => {
	if (!error) {
		if (response.statusCode == 200) {
          	body = innerLog + body
			body = body.replace(/console.log/g, "if (clog) console.log")
			body = body.replace(/const log = \(message\) => if \(clog\) console.log\(message\)/, 'const log = (message) => console.log(message)')
			body = body.replace(/return if \(clog\)/g, 'return')
			log(body)
			eval(body)
		} else {
			$task.notify("连接出错", "response.statusCode", response.statusCode)
			$done() 
		}
	} else {
		$task.notify("请求出错", "", "error")
		$done() 
	}
})


function Tool() {
	_node = (() => {
		if (typeof require == "function") {
			const request = require('request')
			return ({
				request
			})
		} else {
			return (null)
		}
	})()
	_isLoon = typeof $httpClient != "undefined"
	_isQuanX = typeof $task != "undefined"
	_isJsbox = typeof $http != "undefined"
	if (_isJsbox) _node = false
	this.isLoon = _isLoon
	this.isQuanX = _isQuanX
	this.isJsbox = _isJsbox
	this.isNode = _node
	this.isResponse = typeof $response != "undefined"
	this.notify = (title, subtitle, message) => {
		if (_isQuanX) $notify(title, subtitle, message)
		if (_isLoon) $notification.post(title, subtitle, message)
		if (_isJsbox) {
			$push.schedule({
				title: title,
				body: subtitle + "\n" + message,
				mute: true
			})
			$push.clear()
			log("按通知格式输出如下:\n" + title + "\n" + subtitle + "\n" + message);
		}
		if (_node) console.log("按通知格式输出如下:\n" + title + "\n" + subtitle + "\n" + message);
	}
	this.write = (value, key) => {
		if (_isQuanX) return $prefs.setValueForKey(value, key)
		if (_isLoon) return $persistentStore.write(value, key)
		if (_isJsbox) return $cache.set(key, value)
	}
	this.read = (key) => {
		if (_isQuanX) return $prefs.valueForKey(key)
		if (_isLoon) return $persistentStore.read(key)
		if (_isJsbox) return $cache.get(key)
	}
	this.get = (options, callback) => {
		if (_isQuanX) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "GET"
			$task.fetch(options).then(response => {
				callback(null, _status(response), response.body)
			}, reason => callback(reason.error, null, null))
		} else if (_isLoon) $httpClient.get(options, (error, response, body) => {
			callback(error, _status(response), body)
		})
		else if (_isJsbox) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "GET"
			if (options["headers"]) options["header"] = options["headers"]
			$http.request(options).then(resp => {
				var response = resp.response
				if (typeof resp.data == 'object') callback(resp.error, _status(response), JSON.stringify(resp.data))
				else callback(resp.error, _status(response), resp.data)
			})
		} else if (_node) _node.request(options, (error, response, body) => {
			callback(error, _status(response), body)
		})
	}
	this.post = (options, callback) => {
		if (_isQuanX) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "POST"
			$task.fetch(options).then(response => {
				callback(null, _status(response), response.body)
			}, reason => callback(reason.error, null, null))
		} else if (_isLoon) $httpClient.post(options, (error, response, body) => {
			callback(error, _status(response), body)
		})
		else if (_isJsbox) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "POST"
			if (options["headers"]) options["header"] = options["headers"]
			else options["header"] = {}
			if (!options["header"]["Content-Type"]) options["header"]["Content-Type"] = "application/x-www-form-urlencoded"
			$http.request(options).then(resp => {
				var response = resp.response
				if (typeof resp.data == 'object') callback(resp.error, _status(response), JSON.stringify(resp.data))
				else callback(resp.error, _status(response), resp.data)
			})
		} else if (_node) _node.request.post(options, (error, response, body) => {
			callback(error, _status(response), body)
		})
	}
	_status = (response) => {
		if (response) {
			if (response.status) {
				response["statusCode"] = response.status
			} else if (response.statusCode) {
				response["status"] = response.statusCode
			}
		}
		return response
	}
}

function log(a) {
	if (consoleLog) console.log(a);
}
