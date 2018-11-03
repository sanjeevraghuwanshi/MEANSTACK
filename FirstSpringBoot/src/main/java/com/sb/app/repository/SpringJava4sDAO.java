package com.sb.app.repository;

import com.sb.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class SpringJava4sDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String customerSelectSql = "select * from customers";

    public List<Customer> isData(){

        List<Customer> customers = new ArrayList<Customer>();
        List<Map<String,Object>> rows = jdbcTemplate.queryForList(customerSelectSql);

        for (Map<String,Object> row : rows){
            Customer customer = new Customer();
            customer.setCountry((String) row.get("Country"));
            customer.setCustoName((String) row.get("Cust_name"));
            customer.setCustoNo((int) row.get("Cust_id"));

            customers.add(customer);
        }

        return  customers;
    }
}
