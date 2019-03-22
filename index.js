export  function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
      for (key in obj) {
          if (obj.hasOwnProperty(key)) {
              // 判断 obj 子元素是否为对象，如果是，递归复制
              if (obj[key] && typeof obj[key] === "object") {
                  objClone[key] = deepClone(obj[key]);
              } else {
                  // 如果不是，简单复制
                  objClone[key] = obj[key];
              }
          }
      }
  }
  return objClone;
};
export  function readCookie (name) { 
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
      return unescape(arr[2]); 
  }else{
      return null;
  }       
};

export  function setCookie (name,value) { 
  var days = 1; 
  var exp = new Date(); 
  exp.setTime(exp.getTime() + days*24*60*60*1000); 
  document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString(); 
};

export  function delCookie(name) { 
  var cval=this.readCookie(name); 
  if(cval!=null){
      document.cookie= name + "=;path=/;expires="+(new Date(0)).toGMTString();
  }
}

export  function byteOfStr(str) {  
  var total = 0,
      charCode,
      i,
      len;
  for(i = 0, len = str.length; i < len; i++){
      charCode = str.charCodeAt(i);
      if(charCode <= 0x007f) {
          total += 1;
      }else if(charCode <= 0x07ff){
          total += 2;
      }else if(charCode <= 0xffff){
          total += 3;
      }else{
          total += 4;
      }
  }  
  return total;  
}