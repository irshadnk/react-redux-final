import { FETCH_ITEM, FETCH_MORE } from '../constants/actionTypes';
import page1 from '../API/CONTENTLISTINGPAGE-PAGE1';
import page2 from '../API/CONTENTLISTINGPAGE-PAGE2';
import page3 from '../API/CONTENTLISTINGPAGE-PAGE3';
const listReducer = (itemlist = page1, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return itemlist;
    case FETCH_MORE:
      var arr = [];
      if(action.page == 2 ) {
        arr = page2.page['content-items'].content;
      } else if(action.page == 3) {
        arr = page3.page['content-items'].content;
      }
      var arr1 = itemlist.page['content-items'].content;
      var child = arr1.concat(arr);
      itemlist.page['content-items'].content = child;
      return itemlist;
  }
  return itemlist;
};

export default listReducer;