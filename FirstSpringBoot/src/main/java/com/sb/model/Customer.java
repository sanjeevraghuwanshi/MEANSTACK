package com.sb.model;

import java.util.Objects;

public class Customer {

    private int custoNo;
    private String custoName;
    private String country;

    public Customer(){}

    public Customer(int num, String name, String cntry){
        this.custoName=name;
        this.custoNo=num;
        this.country=cntry;
    }

    public int getCustoNo() {
        return custoNo;
    }

    public void setCustoNo(int custoNo) {
        this.custoNo = custoNo;
    }

    public String getCustoName() {
        return custoName;
    }

    public void setCustoName(String custoName) {
        this.custoName = custoName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Customer customer = (Customer) o;
        return custoNo == customer.custoNo &&
                Objects.equals(custoName, customer.custoName) &&
                Objects.equals(country, customer.country);
    }

    @Override
    public int hashCode() {

        return Objects.hash(custoNo, custoName, country);
    }
}
