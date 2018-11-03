package com.sam.map;

import java.util.*;

public class HashMapEx {
    public static void main(String[] args) {

        Map<Integer, String> map = new HashMap<Integer, String>();

        map.put(11, "sam");
        map.put(55, "tam");
        map.put(22, "samtt");
        map.put(44, "ram");
        map.put(33, "ham");

        /*For loop*/

        for (Map.Entry me : map.entrySet()) {
            System.out.println("Key is : " + me.getKey());
            System.out.println("Value is :" + me.getValue());
        }

        /* Display content using Iterator*/
        Set set = map.entrySet();
        Iterator itr = set.iterator();

        while (itr.hasNext()) {
            Map.Entry mentry = (Map.Entry) itr.next();
            System.out.println("Key is : " + mentry.getKey());
            System.out.println("Value is : " + mentry.getValue());
        }

        /* Iterate using lambda and forerach*/

        map.forEach((key, value) -> {
            System.out.println("Key is :" + key);
            System.out.println("Value is :" + value);
        });

        /* Get values based on key*/
        String var = map.get(11);
        System.out.println("value : " + var);

        /*Sorting the hashmap using key*/

        Map<Integer, String> tMap = new TreeMap<Integer, String>(map);

        tMap.forEach((key, value) -> {
            System.out.println("Sorted key:" + key);
            System.out.println("Values : " + value);
        });

        /*Sorted by values*/


    }

    public static Map sortByValues(Map map) {
        List list = new LinkedList(map.entrySet());

    }
}
