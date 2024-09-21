type Pick1<T, K extends keyof T> = { [propName in K]: T[K] };

type Exclude1<T, K> = T extends K ? never : T;

type Readonly1<T> = { readonly [P in keyof T]: T[P] };

type Record1<K extends keyof any, T> = { [P in K]: T };

type Omit1<T, K> = Pick<T, Exclude<keyof T, K>>;

type Om<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// class EventEmitter {
//   constructor() {
//     this.event = {};
//   }
//   on(eventName,callback){
//     this.event

//   }
//   if(!this.event[type]){
//     this.event[type] = [cb]
//   }else{
//     this.event[type].push(cb)
//   }}

//   emit(type, ...args) {
//     if (!this.event[type])
//       return
//     else {
//       this.event[type].forEach(cb => {
//         cb(...args)
//       });
//     }
//   }

// }

for (const  item in object) {
    if (Object.prototype.hasOwnProperty.call(object,  item)) {
        const element = object[ item];
        
    }
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

