package com.sb.app.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource ds;

    @Bean
    @ConfigurationProperties("spring.datasource")
    public DataSource ds(){
        return DataSourceBuilder.create().build();
    }
    // Authentication : set user/password details and mention the role
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
//        auth.inMemoryAuthentication()
//                .passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance())
//                .withUser("user").password("pass").roles("USER")
//                .and()
//                .withUser("admin").password("pass").roles("USER","ADMIN");
//
//    }
//
//    @Override
//    protected void configure(HttpSecurity httpSecurity) throws Exception{
//        httpSecurity.httpBasic().and().authorizeRequests()
//                .antMatchers("/userlogin").hasRole("USER")
//                .antMatchers("/adminlogin").hasRole("ADMIN")
//                .and()
//                .csrf().disable().headers().frameOptions().disable();
//    }

    @Autowired
    public void configureAMBuilder(AuthenticationManagerBuilder auth) throws Exception{
        auth.jdbcAuthentication().dataSource(ds)
                .authoritiesByUsernameQuery("select email, role FROM USERS where email=?")
                .usersByUsernameQuery("select email,userPassword, 1 FROM USERS where email=?");
    }

    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
                .httpBasic()
                .and()
                .authorizeRequests()
                .anyRequest()
                .authenticated();
        httpSecurity.csrf().disable();
    }
}
