import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteritem'
})
export class FilteritemPipe implements PipeTransform {

  transform(value:any, _filterString:string){
   const itemLists =[]
    if(_filterString==undefined){
       return value;
    }
    else if(_filterString ==''){
       return value;
    }
    else{value.forEach(ress=>{
       ress.size.find(res=>{
         if(res==_filterString)
          itemLists.push(ress)
       })
    })
      return itemLists;
  }
  }
}
