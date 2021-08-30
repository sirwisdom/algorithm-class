private static void printSubArrays(int[] a, int[] b, int[] c) {
        //The trick on solving this to merge all integers into a single list, and
        //Then split the list by 3.

        //Initialize a list to hold all merged integers.
        List<Integer> all = new ArrayList<>();

        //Get the biggest array size.
        int max = Math.max(a.length, Math.max(b.length, c.length));

        //loop from zero to the biggest and pick only indexes that are valid
        for (int i = 0; i < max; ++i) {
            //Check if the first array in our list still has elements that we can pick
            //Else ignore picking any element to avoid index out of bounds exception
            if (i < a.length) {
                all.add(a[i]);
            }

            //Do the same again for the second array.
            if (i < b.length) {
                all.add(b[i]);
            }

            //Repeat again for the third array.
            //Notice that there's a pattern here?
            if (i < c.length) {
                all.add(c[i]);
            }
        }

        //Create a list that'll hold our array of 3 elements.
        List<int[]> arrayOf3 = new ArrayList<>();

        //Loop through our merged integer list and increment by 3
        for (int i = 0; i < all.size(); i += 3) {

            //Initialize an empty array
            int[] three = new int[3];

            //loop from 0 to 3, but starting from the index we stopped the last time of iteration
            //To achieve that, we add the index of the last iteration to the value of our iterable j
            //While also making sure we don't run out of elements.
            for (int j = 0; j < 3 && i + j < all.size(); ++j) {

                //Set each index to the corresponding value in the list
                three[j] = all.get(i + j);
            }
            //Add the resulting array to our list.
            arrayOf3.add(three);
        }

        //To print the elements, we just iterate through our list of array of 3 elements
        for (int[] array : arrayOf3) {
            System.out.println(Arrays.toString(array));
        }
    }