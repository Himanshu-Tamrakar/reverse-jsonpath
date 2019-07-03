import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * [converJsonPathString It remove conver string having brackets to dot(.) one like
   * $['store'] => $.store ]
   * @return [description]
   */
  convertJsonPathString(jpa: string[]) {
    const self = this;
    return new Promise(function(resolve:Function, reject:Function) {
      self.resolvePromise(jpa, resolve, reject);
    })
  }

  resolvePromise(jpa: string[], resolve: Function, reject: Function) {
    try {
      for (let i = 0; i < jpa.length; i++) {
        let mystring = jpa[i];
        mystring = mystring.replace(/\['|\[\\'|\["|\[\\"/g, ".")
        mystring = mystring.replace(/\']|\\\']|\"]|\\\"]/g, "")
        mystring = mystring.replace(/\[/g, ".")
        jpa[i] = mystring.replace(/\]/g, "")

        if (i + 1 == jpa.length - 1) resolve(jpa);
      }
    } catch (err) {
      reject([])
    }

  }

  test() {
    const tt = ["$[0][2][\"india\"][\'madhyapradesh\']['state']", "$[\"india\"][\'madhyapradesh\']['state']", "$[\"state\"]"];
    this.convertJsonPathString(tt).then((response: string[]) => {
      if (response.length > 0) {
        console.log("RESPONSE IS", response)
      } else {
        console.log("RESPONSE FAIL", response)
      }
    })
  }

}
