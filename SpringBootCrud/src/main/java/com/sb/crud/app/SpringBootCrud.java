package com.sb.crud.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.JpaBaseConfiguration;
import org.springframework.context.annotation.Import;

//@Import(JpaBaseConfiguration.class)
@SpringBootApplication(scanBasePackages = {"com.sb.crud"})
public class SpringBootCrud {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootCrud.class,args);
    }
}
