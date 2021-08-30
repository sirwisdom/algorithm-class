let list1 = [1, 2, 3, 4, 5, 6, 7, 8];
let list2 = [21, 22, 23, 24, 25];
let list3 = [41, 42, 43, 44];

function printSubArrays(a, b, c) {
  //The trick on solving this to merge all integers into a single list, and
  //Then split the list by 3.

  //Initialize a list to hold all merged integers.
  let all = [];

  //Get the biggest array size.
  let max = Math.max(a.length, Math.max(b.length, c.length));

  //loop from zero to the biggest and pick only indexes that are valid
  for (let i = 0; i < max; ++i) {
    //Check if the first array in our list still has elements that we can pick
    //Else ignore picking any element to avoid index out of bounds exception
    if (i < a.length) {
      all.push(a[i]);
    }

    //Do the same again for the second array.
    if (i < b.length) {
      all.push(b[i]);
    }

    //Repeat again for the third array.
    //Notice that there's a pattern here?
    if (i < c.length) {
      all.push(c[i]);
    }
  }

  //Create a list that'll hold our array of 3 elements.
  let arrayOf3 = [];

  //Loop through our merged integer list and increment by 3
  for (let i = 0; i < all.length; i += 3) {
    //Initialize an empty array
    let three = [];

    //loop from 0 to 3, but starting from the index we stopped the last time of iteration
    //To achieve that, we add the index of the last iteration to the value of our iterable j
    //While also making sure we don't run out of elements.
    for (let j = 0; j < 3 && i + j < all.length; ++j) {
      //Set each index to the corresponding value in the list
      three[j] = all[i + j];
    }
    //Add the resulting array to our list.
    arrayOf3.push(three);
  }

  //To print the elements, we just iterate through our list of array of 3 elements
  // for (int[] array : arrayOf3) {
  //     System.out.println(Arrays.toString(array));
  // }
  return arrayOf3;
}
