package com.app.testingexamples;


import com.app.testingexamples.junitmavenexample.MyCalc;
import org.junit.Test;
import org.junit.jupiter.api.*;

public class MyCalcTest {


    @BeforeAll
    public static void init(){
        System.out.println("Before All init() method called");
    }

    @BeforeEach
    public void initEach(){
        System.out.println("\n Before Each initEach() method called");
    }

    @Test
    @DisplayName("Add operation test")
    @RepeatedTest(5)
    public void addNumber() {
        MyCalc calculator = new MyCalc();
        Assertions.assertEquals(2, calculator.add(1, 1), "1 + 1 should equal 2");
    }

    @Disabled
    @Test
    @DisplayName("Sum operation test")
    @RepeatedTest(value = 5,name="{displayName}-repetition {currentRepetition} of {totalRepetition}")
    public void sumNumber(){
        MyCalc calculator = new MyCalc();
        Assertions.assertEquals(2, calculator.add(1, 1), "1 + 1 should equal 2");
    }

    @AfterEach
    public void cleanUpEach(){
        System.out.println("After Each cleanUpEach() method called");
    }

    @AfterAll
    public static void cleanUpAll(){
        System.out.println("After all cleanUpAll() method called");
    }
}
