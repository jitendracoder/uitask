import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filteritem'
})
export class FilteritemPipe implements PipeTransform {

  transform(value:any, _filterString:string){
   
    const itemLists =[]
    
   console.log(_filterString)
    if(_filterString==undefined){
       return value;
    }
    else if(_filterString ==''){
      // value.forEach(res=>{
      //   itemLists.push(res)
      // })
    
      return value;

    }
    // if(itemLists.length==0){
    //   value.forEach(res=>{
    //         itemLists.push(res)
    //       })
        
    //       return itemLists;
        
    // }
    else{value.forEach(ress=>{
     // console.log(ress.size)
      ress.size.find(res=>{
       // console.log(res)
        if(res==_filterString)
        itemLists.push(ress)

      })
    })
    //console.log(itemLists)
    return itemLists;
  }
    
  }

}
