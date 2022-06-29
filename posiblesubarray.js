function countSubArrays(array) {
  let start = 0;
  let end = 0;
  let product = array[0];
  let count = 0;
  const k = 100;
  while (start <= end && end <= array.length) {
    /* if(product <= k) {
  	      count = count ++;
  	      if(end < array.length) {
  	        product = product * array[end];
  	        end ++;
  	      } else {
  	        product = product/array[start++];
  	      }
  	    }
  	    return count; */

    if (product < k) {
      end++;

      if (end >= start) {
        count += end - start;

        if (end < arr.length) product += arr[end];
      } else {
        product -= arr[start];
        start++;
      }
      return count;
    }
  }
}
