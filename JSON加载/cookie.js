/**
 * Created by 老牟 on 2016/12/19.
 */
/**
 * 封装保存cookie数据的方法
 * @param cookieName 保存数据变量名称
 * @param cookieValue 保存的数据
 * @param dayCount 保存的天数
 */
function saveCookie(cookieName, cookieValue, dayCount) {
    // 设置过期时间
    var date = new Date();
    date.setDate(date.getDate() + dayCount);

    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";expires=" + date.toGMTString();
}

/**
 * 删除cookie的方法
 * @param cookieName 要删除的cookie的名称
 */
function deleteCookie(cookieName) {
    saveCookie(cookieName, null, -1);
}

/**
 * 修改cookie的方法
 * @param cookieName 原来的cookie变量名称
 * @param cookieValue 要修改的变量的值
 * @param dayCount 修改的天数
 */
function modifyCookie(cookieName, cookieValue, dayCount) {
    saveCookie(cookieName, cookieValue, dayCount);
}
/**
 * 读取cookie对应数据的方法
 * @param cookieName 要获取的cookie名称
 */
function getCookie(cookieName) {
    var _reg = new RegExp("\\b" + cookieName + "\\b", "ig");
    // 解码获取所有的cookie数据
    var _cookieStr = decodeURIComponent(document.cookie);
    // 拆分数据
    var _cookieArr = _cookieStr.split(";");
    for(var i = 0; i < _cookieArr.length; i++) {
        if(_cookieArr[i].trim().match(_reg)) {
            return _cookieArr[i].trim().substring(cookieName.length + 1);
        }
    }
}
