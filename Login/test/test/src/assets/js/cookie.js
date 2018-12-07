const funCookie = {
  setCookie(name, value, expire) {   //设置cookie
    let date = new Date();
    date.setSeconds(date.getSeconds() + expire);
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toGMTString();
  },
  getCookie(name) {  //获取cookie
    if (document.cookie.length > 0) {
      let arr = document.cookie.split(';');
      for (var i = 0, len = arr.length; i < len; i++) {
        let result = arr[i].split('=');
        if (result[0] == name) {
          return result[1];
        }else{
            return '';
        }
      }
      return '';
    }
  },
  removeCookie(name){  //删除cookie
    this.setCookie(name,'',-1);
  }
}
export default funCookie;
